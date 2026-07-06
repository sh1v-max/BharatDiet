import { useCallback, useMemo, useState } from 'react'
import { calcNutritionProfile } from '../utils/nutritionMath.js'
import { allocateMealPlan } from '../utils/mealAllocator.js'
import { filterFoods } from '../services/foodService.js'

/*
 * Composes the full pipeline: profile → targets → region/diet food pool →
 * allocated plan. `regenerate` bumps a seed so the allocator's rng draws
 * a different (but reproducible) plan.
 */
function seededRng(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export default function useMealPlanGenerator(profile) {
  const [seed, setSeed] = useState(42)

  const plan = useMemo(() => {
    const targets = calcNutritionProfile(profile)
    if (!targets || !profile.region || !profile.dietType || !profile.budget) {
      return null
    }
    const pool = filterFoods({ region: profile.region, diet: profile.dietType })
    return allocateMealPlan(targets, pool, profile.budget, seededRng(seed))
  }, [profile, seed])

  const regenerate = useCallback(
    () => setSeed((s) => (s * 31 + 7) % 2147483647),
    [],
  )

  return { plan, regenerate }
}
