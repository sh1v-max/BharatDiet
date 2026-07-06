import { describe, it, expect } from 'vitest'
import { allocateMealPlan, MEAL_SLOTS } from './mealAllocator.js'
import { calcNutritionProfile } from './nutritionMath.js'
import { filterFoods } from '../services/foodService.js'

/*
 * The core product guarantee: every region × diet × budget × goal
 * combination must produce a complete, macro-accurate, diet-compliant plan.
 */

const REGIONS = ['north', 'south', 'east', 'west']
const DIETS = ['veg', 'egg', 'nonveg']
const BUDGETS = ['ultra', 'budget', 'standard', 'premium']
const GOALS = ['weight-loss', 'maintenance', 'muscle-gain']

const baseProfile = {
  age: 25,
  gender: 'male',
  heightCm: 175,
  weightKg: 70,
  activityLevel: 'moderate',
}

/* Deterministic rng so failures are reproducible. */
const seededRng = () => {
  let s = 42
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

describe('allocateMealPlan — all combinations', () => {
  for (const region of REGIONS) {
    for (const diet of DIETS) {
      for (const budget of BUDGETS) {
        for (const goal of GOALS) {
          it(`${region} × ${diet} × ${budget} × ${goal}`, () => {
            const targets = calcNutritionProfile({ ...baseProfile, goal })
            const pool = filterFoods({ region, diet })
            const plan = allocateMealPlan(targets, pool, budget, seededRng())

            expect(plan).not.toBeNull()

            // all 4 slots present and non-empty
            expect(plan.slots.map((s) => s.key)).toEqual(
              MEAL_SLOTS.map((s) => s.key),
            )
            for (const slot of plan.slots) {
              expect(slot.items.length, slot.key).toBeGreaterThan(0)
            }

            // diet compliance
            for (const { food } of plan.slots.flatMap((s) => s.items)) {
              if (diet === 'veg') expect(food.diet, food.id).toBe('veg')
              if (diet === 'egg') expect(food.diet, food.id).not.toBe('nonveg')
            }

            // calories within ±12% of target
            const calRatio = plan.totals.cal / targets.calorieTarget
            expect(calRatio, `cal ${plan.totals.cal}/${targets.calorieTarget}`)
              .toBeGreaterThan(0.88)
            expect(calRatio, `cal ${plan.totals.cal}/${targets.calorieTarget}`)
              .toBeLessThan(1.12)

            // protein at least 75% of target
            expect(
              plan.totals.protein,
              `protein ${plan.totals.protein}/${targets.proteinG}`,
            ).toBeGreaterThanOrEqual(targets.proteinG * 0.75)

            // cost sanity: positive, and thrifty tiers stay affordable
            expect(plan.totals.cost).toBeGreaterThan(0)
            if (budget === 'ultra') expect(plan.totals.cost).toBeLessThan(250)
          })
        }
      }
    }
  }
})

describe('allocateMealPlan — edge cases', () => {
  it('returns null on missing inputs', () => {
    expect(allocateMealPlan(null, [], 'budget')).toBeNull()
    const targets = calcNutritionProfile({ ...baseProfile, goal: 'maintenance' })
    expect(allocateMealPlan(targets, [], 'budget')).toBeNull()
    expect(allocateMealPlan(targets, filterFoods({}), null)).toBeNull()
  })

  it('different rng produces different plans (regenerate works)', () => {
    const targets = calcNutritionProfile({ ...baseProfile, goal: 'maintenance' })
    const pool = filterFoods({ region: 'north', diet: 'veg' })
    const a = allocateMealPlan(targets, pool, 'standard', seededRng())
    let s = 7
    const rngB = () => {
      s = (s * 48271) % 2147483647
      return (s - 1) / 2147483646
    }
    const b = allocateMealPlan(targets, pool, 'standard', rngB)
    const ids = (p) => p.slots.flatMap((sl) => sl.items.map((i) => i.food.id))
    expect(ids(a)).not.toEqual(ids(b))
  })
})
