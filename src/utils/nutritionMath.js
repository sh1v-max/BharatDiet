/*
 * Pure nutrition math — no React, no side effects (Phase 3 of BLUEPRINT.md).
 * Kept framework-free so it can move to a backend service unchanged.
 *
 * Units: weight kg, height cm, energy kcal, macros grams.
 */

export const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  athlete: 1.9,
}

/* Signed fraction applied to TDEE (moderate midpoints of the blueprint ranges). */
export const GOAL_CALORIE_ADJUSTMENTS = {
  'weight-loss': -0.175,
  'fat-loss': -0.125,
  maintenance: 0,
  'muscle-gain': 0.125,
  'weight-gain': 0.175,
}

/* Protein target in g per kg body weight, by goal. */
export const PROTEIN_PER_KG = {
  'weight-loss': 1.8,
  'fat-loss': 1.8,
  maintenance: 0.9,
  'muscle-gain': 1.9,
  'weight-gain': 1.4,
}

const FAT_CALORIE_SHARE = 0.25 // 25% of calories, middle of the 20–30% band
const KCAL_PER_G_PROTEIN = 4
const KCAL_PER_G_CARB = 4
const KCAL_PER_G_FAT = 9

export function calcBMI(weightKg, heightCm) {
  const heightM = heightCm / 100
  return round1(weightKg / (heightM * heightM))
}

export function bmiCategory(bmi) {
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 25) return 'Normal'
  if (bmi < 30) return 'Overweight'
  return 'Obese'
}

/* Mifflin-St Jeor. gender: 'male' | 'female' */
export function calcBMR({ age, gender, heightCm, weightKg }) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age
  return Math.round(gender === 'male' ? base + 5 : base - 161)
}

export function calcTDEE(bmr, activityLevel) {
  return Math.round(bmr * ACTIVITY_MULTIPLIERS[activityLevel])
}

export function calcCalorieTarget(tdee, goal) {
  return Math.round(tdee * (1 + GOAL_CALORIE_ADJUSTMENTS[goal]))
}

export function calcProteinTarget(weightKg, goal) {
  return Math.round(weightKg * PROTEIN_PER_KG[goal])
}

/*
 * Protein is fixed first (g/kg), fat as a % of calories, carbs get the
 * remainder — matching how Indian staple-heavy plates actually flex.
 */
export function calcMacros(calorieTarget, proteinG) {
  const fatG = Math.round((calorieTarget * FAT_CALORIE_SHARE) / KCAL_PER_G_FAT)
  const remainingKcal =
    calorieTarget - proteinG * KCAL_PER_G_PROTEIN - fatG * KCAL_PER_G_FAT
  const carbsG = Math.max(0, Math.round(remainingKcal / KCAL_PER_G_CARB))
  return { proteinG, fatG, carbsG }
}

/*
 * Full pipeline: profile → everything the UI needs.
 * Returns null if any required field is missing.
 */
export function calcNutritionProfile(profile) {
  const { age, gender, heightCm, weightKg, activityLevel, goal } = profile
  if (!age || !gender || !heightCm || !weightKg || !activityLevel || !goal) {
    return null
  }

  const bmi = calcBMI(weightKg, heightCm)
  const bmr = calcBMR({ age, gender, heightCm, weightKg })
  const tdee = calcTDEE(bmr, activityLevel)
  const calorieTarget = calcCalorieTarget(tdee, goal)
  const proteinG = calcProteinTarget(weightKg, goal)
  const macros = calcMacros(calorieTarget, proteinG)

  return {
    bmi,
    bmiCategory: bmiCategory(bmi),
    bmr,
    tdee,
    calorieTarget,
    ...macros,
  }
}

function round1(n) {
  return Math.round(n * 10) / 10
}
