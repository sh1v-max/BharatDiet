/*
 * Meal plan allocator (Phase 5) — pure logic, no React.
 *
 * Strategy: greedy slot-filling, then a protein boost pass, then a calorie
 * reconciliation pass that resizes staple portions instead of swapping
 * foods (keeps the plan intuitive: "2 roti" not a different sabzi).
 *
 * Input pool is pre-filtered by region + diet (see useMealPlanGenerator);
 * budget acts as a cost *penalty* in scoring rather than a hard filter, so
 * thin pools (e.g. ultra-budget breakfasts) degrade gracefully instead of
 * producing empty slots. Total plan cost is reported for the UI.
 */

export const MEAL_SLOTS = [
  { key: 'breakfast', label: 'Breakfast', share: 0.25 },
  { key: 'lunch', label: 'Lunch', share: 0.35 },
  { key: 'snack', label: 'Snack', share: 0.1 },
  { key: 'dinner', label: 'Dinner', share: 0.3 },
]

/* Cost penalty weight per budget tier — higher = thriftier choices. */
const COST_WEIGHT = { ultra: 3, budget: 1.5, standard: 0.5, premium: 0 }

const STAPLE_IDS = new Set([
  'wheat-roti', 'bajra-roti', 'jowar-roti', 'ragi-roti', 'steamed-rice',
  'brown-rice', 'jeera-rice',
])

const BREAKFAST_IDS = new Set([
  'idli', 'plain-dosa', 'masala-dosa', 'uttapam', 'upma', 'pongal',
  'rava-idli', 'poha', 'dhokla', 'besan-chilla', 'oats-porridge', 'dalia',
  'aloo-paratha', 'thepla', 'bread-butter', 'peanut-butter-bread',
  'sprouts-chaat', 'omelette', 'egg-bhurji', 'sabudana-khichdi', 'luchi',
  'litti', 'khichdi', 'appam', 'puttu',
])

const PROTEIN_CATEGORIES = new Set([
  'Dal & Legumes', 'Eggs', 'Fish & Seafood', 'Chicken', 'Meat',
])
const PROTEIN_EXTRA_IDS = new Set([
  'paneer', 'paneer-bhurji', 'curd', 'greek-yogurt', 'palak-paneer',
  'matar-paneer',
])

const SNACK_CATEGORIES = new Set(['Snacks', 'Nuts & Seeds', 'Fruits'])

/* Compact, protein-dense items used to close a remaining protein gap. */
const BOOSTER_IDS = new Set([
  'boiled-egg', 'egg-whites', 'soy-chunks', 'curd', 'greek-yogurt',
  'moong-sprouts', 'roasted-chana', 'chicken-breast', 'milk-toned', 'sattu',
])

const isStaple = (f) => STAPLE_IDS.has(f.id)
const isBreakfastMain = (f) => BREAKFAST_IDS.has(f.id)
const isProtein = (f) =>
  PROTEIN_CATEGORIES.has(f.category) || PROTEIN_EXTRA_IDS.has(f.id)
const isVeg = (f) => f.category === 'Vegetables'
const isSnack = (f) => SNACK_CATEGORIES.has(f.category)

/*
 * Blend absolute protein with protein density: density alone makes tiny
 * items (egg whites, 33 kcal) outrank real dishes and starves the slot.
 */
function score(food, costWeight, rng) {
  const proteinDensity = food.protein / Math.max(food.cal, 1)
  return (
    food.protein * 5 + proteinDensity * 150 - costWeight * food.cost + rng() * 12
  )
}

/* Pick from the top 3 scorers so regeneration produces variety. */
function pick(candidates, costWeight, rng, exclude = new Set()) {
  const ranked = candidates
    .filter((f) => !exclude.has(f.id))
    .sort((a, b) => score(b, costWeight, rng) - score(a, costWeight, rng))
  if (ranked.length === 0) return null
  return ranked[Math.floor(rng() * Math.min(3, ranked.length))]
}

const halfRound = (n) => Math.round(n * 2) / 2
const clamp = (n, lo, hi) => Math.min(Math.max(n, lo), hi)

function slotTotals(items) {
  return items.reduce(
    (t, { food, portions }) => ({
      cal: t.cal + food.cal * portions,
      protein: t.protein + food.protein * portions,
      carbs: t.carbs + food.carbs * portions,
      fat: t.fat + food.fat * portions,
      cost: t.cost + food.cost * portions,
    }),
    { cal: 0, protein: 0, carbs: 0, fat: 0, cost: 0 },
  )
}

/*
 * targets: output of calcNutritionProfile (calorieTarget, proteinG, …)
 * pool: foods already filtered by region + diet
 * budget: 'ultra' | 'budget' | 'standard' | 'premium'
 * rng: injectable for deterministic tests / "regenerate" variety
 */
export function allocateMealPlan(targets, pool, budget, rng = Math.random) {
  if (!targets || !pool?.length || !budget) return null
  const w = COST_WEIGHT[budget]
  const usedProteins = new Set()

  const slots = MEAL_SLOTS.map(({ key, label, share }) => {
    const slotCal = targets.calorieTarget * share
    const items = []

    if (key === 'breakfast') {
      const main = pick(pool.filter(isBreakfastMain), w, rng)
      const side = pick(
        pool.filter((f) => isProtein(f) && f.cal <= 150), w, rng,
        new Set(main ? [main.id] : []),
      )
      const sideCal = side ? side.cal : 0
      if (main) {
        const portions = clamp(halfRound((slotCal - sideCal) / main.cal), 1, 3)
        items.push({ food: main, portions })
      }
      if (side) items.push({ food: side, portions: 1 })
    } else if (key === 'snack') {
      const snack = pick(pool.filter(isSnack), w, rng)
      if (snack) {
        items.push({
          food: snack,
          portions: clamp(halfRound(slotCal / snack.cal), 0.5, 2),
        })
      }
    } else {
      // lunch & dinner: protein dish + veg + staple sized to fill the slot.
      // Protein mains need real caloric substance (≥100 kcal) — sides like
      // egg whites belong in breakfast or the boost pass, not as the dish.
      const protein = pick(
        pool.filter((f) => isProtein(f) && !isBreakfastMain(f) && f.cal >= 100),
        w, rng, usedProteins,
      )
      if (protein) usedProteins.add(protein.id)
      const veg = pick(pool.filter(isVeg), w, rng)
      const staple = pick(pool.filter(isStaple), w, rng)

      if (protein) items.push({ food: protein, portions: 1 })
      if (veg) items.push({ food: veg, portions: 1 })
      if (staple) {
        const fixedCal = (protein?.cal ?? 0) + (veg?.cal ?? 0)
        const portions = clamp(
          halfRound((slotCal - fixedCal) / staple.cal), 0.5, 4,
        )
        items.push({ food: staple, portions })
      }
    }

    return { key, label, items }
  })

  boostProtein(slots, targets, pool, w, rng)
  reconcileCalories(slots, targets)

  const withTotals = slots.map((s) => ({ ...s, totals: slotTotals(s.items) }))
  const totals = slotTotals(withTotals.flatMap((s) => s.items))
  return { targets, budget, slots: withTotals, totals }
}

/* Add compact protein items to snack/breakfast until target is met. */
function boostProtein(slots, targets, pool, w, rng) {
  const boosters = pool.filter((f) => BOOSTER_IDS.has(f.id))
  const snack = slots.find((s) => s.key === 'snack')
  for (let i = 0; i < 4; i++) {
    const t = slotTotals(slots.flatMap((s) => s.items))
    if (
      t.protein >= targets.proteinG ||
      t.cal >= targets.calorieTarget * 1.05
    )
      break
    const inPlan = new Set(snack.items.map((it) => it.food.id))
    const booster = pick(boosters, w, rng, inPlan)
    if (!booster) break
    snack.items.push({ food: booster, portions: 1 })
  }
}

/* Resize staple/main portions in 0.5 steps until within ±5% of target. */
function reconcileCalories(slots, targets) {
  const adjustable = slots
    .flatMap((s) => s.items)
    .filter(
      ({ food }) => isStaple(food) || isBreakfastMain(food),
    )
  for (let i = 0; i < 20; i++) {
    const t = slotTotals(slots.flatMap((s) => s.items))
    const diff = targets.calorieTarget - t.cal
    if (Math.abs(diff) <= targets.calorieTarget * 0.05) break
    const step = diff > 0 ? 0.5 : -0.5
    // staples can stretch further than breakfast mains (6 roti is a meal;
    // 5 plates of poha is not)
    const cap = ({ food }) => (isStaple(food) ? 6 : 3)
    const item = adjustable
      .filter((it) => (step > 0 ? it.portions < cap(it) : it.portions > 0.5))
      .sort((a, b) => b.food.cal - a.food.cal)[0]
    if (!item) break
    item.portions = halfRound(item.portions + step)
  }
}
