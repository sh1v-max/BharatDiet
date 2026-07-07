import { useMemo } from 'react'
import { calcNutritionProfile } from '../utils/nutritionMath.js'
import { getFoodById, filterFoods, sortFoods } from '../services/foodService.js'

/*
 * Protein Gap Analysis (Phase 6): recommended target vs. an estimate from
 * the user's self-reported "typical day", plus region/budget-appropriate
 * foods ranked by protein-per-rupee to close the gap.
 */
export default function useProteinGap(profile, selectedFoodIds) {
  return useMemo(() => {
    const targets = calcNutritionProfile(profile)
    if (!targets || selectedFoodIds.length === 0) return null

    const estimated = Math.round(
      selectedFoodIds.reduce(
        (sum, id) => sum + (getFoodById(id)?.protein ?? 0),
        0,
      ),
    )
    const gap = Math.max(0, targets.proteinG - estimated)
    const severity = gap === 0 ? 'met' : gap <= 15 ? 'small' : 'large'

    const suggestions = sortFoods(
      filterFoods({
        region: profile.region || null,
        diet: profile.dietType || null,
        maxBudget: profile.budget || null,
      }).filter((f) => f.protein >= 5 && !selectedFoodIds.includes(f.id)),
      'proteinPerRupee',
    ).slice(0, 6)

    return {
      recommended: targets.proteinG,
      estimated,
      gap,
      severity,
      suggestions,
    }
  }, [profile, selectedFoodIds])
}
