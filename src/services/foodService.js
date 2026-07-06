import foods from '../data/foods.json'

/*
 * Data-access layer over the food database. Components import only these
 * functions — when the static JSON becomes a real API, only this file
 * changes (Phase 10 scalability strategy).
 */

/* Budget tier is derived from cost so it can never drift out of sync. */
export function budgetTier(cost) {
  if (cost <= 10) return 'ultra'
  if (cost <= 25) return 'budget'
  if (cost <= 50) return 'standard'
  return 'premium'
}

const BUDGET_ORDER = ['ultra', 'budget', 'standard', 'premium']

export function getFoods() {
  return foods
}

export function getFoodById(id) {
  return foods.find((f) => f.id === id) ?? null
}

export function getCategories() {
  return [...new Set(foods.map((f) => f.category))]
}

/*
 * filters: { query, category, region, diet, maxBudget }
 * All optional; region 'all' and diet rules mirror the meal engine:
 * veg ⊂ egg ⊂ nonveg (an eggetarian sees veg + egg foods).
 */
export function filterFoods({ query, category, region, diet, maxBudget } = {}) {
  const q = query?.trim().toLowerCase()
  return foods.filter((f) => {
    if (q && !f.name.toLowerCase().includes(q)) return false
    if (category && f.category !== category) return false
    if (region && !f.regions.includes(region) && !f.regions.includes('all'))
      return false
    if (diet === 'veg' && f.diet !== 'veg') return false
    if (diet === 'egg' && f.diet === 'nonveg') return false
    if (
      maxBudget &&
      BUDGET_ORDER.indexOf(budgetTier(f.cost)) > BUDGET_ORDER.indexOf(maxBudget)
    )
      return false
    return true
  })
}

export function sortFoods(list, sortBy, direction = 'desc') {
  const dir = direction === 'asc' ? 1 : -1
  return [...list].sort((a, b) => {
    if (sortBy === 'name') return dir * a.name.localeCompare(b.name)
    if (sortBy === 'proteinPerRupee')
      return dir * (a.protein / a.cost - b.protein / b.cost)
    return dir * (a[sortBy] - b[sortBy])
  })
}
