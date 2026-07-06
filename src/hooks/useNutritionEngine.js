import { useMemo } from 'react'
import { calcNutritionProfile } from '../utils/nutritionMath.js'

/*
 * Derives the full nutrition profile (BMI/BMR/TDEE/targets/macros) from a
 * profile object. Returns null until the required fields are present.
 */
export default function useNutritionEngine(profile) {
  return useMemo(() => calcNutritionProfile(profile), [profile])
}
