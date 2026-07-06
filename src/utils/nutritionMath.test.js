import { describe, it, expect } from 'vitest'
import {
  calcBMI,
  bmiCategory,
  calcBMR,
  calcTDEE,
  calcCalorieTarget,
  calcProteinTarget,
  calcMacros,
  calcNutritionProfile,
} from './nutritionMath.js'

/*
 * Reference values hand-computed from the Mifflin-St Jeor formula —
 * these tests pin the formulas, not the implementation.
 */

describe('calcBMI', () => {
  it('computes weight / height² in metres', () => {
    expect(calcBMI(70, 175)).toBe(22.9) // 70 / 1.75² = 22.857
    expect(calcBMI(55, 160)).toBe(21.5) // 55 / 1.6² = 21.484
  })
})

describe('bmiCategory', () => {
  it('maps bands correctly at boundaries', () => {
    expect(bmiCategory(18.4)).toBe('Underweight')
    expect(bmiCategory(18.5)).toBe('Normal')
    expect(bmiCategory(24.9)).toBe('Normal')
    expect(bmiCategory(25)).toBe('Overweight')
    expect(bmiCategory(30)).toBe('Obese')
  })
})

describe('calcBMR (Mifflin-St Jeor)', () => {
  it('male: 10w + 6.25h − 5a + 5', () => {
    // 700 + 1093.75 − 125 + 5 = 1673.75 → 1674
    expect(calcBMR({ age: 25, gender: 'male', heightCm: 175, weightKg: 70 })).toBe(1674)
  })
  it('female: 10w + 6.25h − 5a − 161', () => {
    // 550 + 1000 − 150 − 161 = 1239
    expect(calcBMR({ age: 30, gender: 'female', heightCm: 160, weightKg: 55 })).toBe(1239)
  })
})

describe('calcTDEE', () => {
  it('applies the activity multiplier', () => {
    expect(calcTDEE(1674, 'sedentary')).toBe(2009) // 1674 × 1.2 = 2008.8
    expect(calcTDEE(1674, 'athlete')).toBe(3181) // 1674 × 1.9 = 3180.6
  })
})

describe('calcCalorieTarget', () => {
  it('cuts 17.5% for weight loss and adds 12.5% for muscle gain', () => {
    expect(calcCalorieTarget(2000, 'weight-loss')).toBe(1650)
    expect(calcCalorieTarget(2000, 'muscle-gain')).toBe(2250)
    expect(calcCalorieTarget(2000, 'maintenance')).toBe(2000)
  })
})

describe('calcProteinTarget', () => {
  it('scales g/kg by goal', () => {
    expect(calcProteinTarget(70, 'muscle-gain')).toBe(133) // 70 × 1.9
    expect(calcProteinTarget(70, 'maintenance')).toBe(63) // 70 × 0.9
  })
})

describe('calcMacros', () => {
  it('fat = 25% of calories, carbs get the remainder', () => {
    const { proteinG, fatG, carbsG } = calcMacros(2000, 120)
    expect(proteinG).toBe(120)
    expect(fatG).toBe(56) // 2000 × 0.25 / 9 = 55.6
    // remainder: 2000 − 480 − 504 = 1016 / 4 = 254
    expect(carbsG).toBe(254)
  })

  it('never returns negative carbs', () => {
    const { carbsG } = calcMacros(800, 200)
    expect(carbsG).toBeGreaterThanOrEqual(0)
  })

  it('macro calories roughly reconstruct the target', () => {
    const target = 2200
    const { proteinG, fatG, carbsG } = calcMacros(target, 100)
    const rebuilt = proteinG * 4 + fatG * 9 + carbsG * 4
    expect(Math.abs(rebuilt - target)).toBeLessThanOrEqual(10)
  })
})

describe('calcNutritionProfile', () => {
  const profile = {
    age: 25,
    gender: 'male',
    heightCm: 175,
    weightKg: 70,
    activityLevel: 'moderate',
    goal: 'muscle-gain',
  }

  it('runs the full pipeline end to end', () => {
    const result = calcNutritionProfile(profile)
    expect(result.bmr).toBe(1674)
    expect(result.tdee).toBe(2595) // 1674 × 1.55 = 2594.7
    expect(result.calorieTarget).toBe(2919) // 2595 × 1.125 = 2919.375
    expect(result.proteinG).toBe(133)
    expect(result.bmiCategory).toBe('Normal')
  })

  it('returns null when any required field is missing', () => {
    expect(calcNutritionProfile({ ...profile, age: null })).toBeNull()
    expect(calcNutritionProfile({})).toBeNull()
  })
})
