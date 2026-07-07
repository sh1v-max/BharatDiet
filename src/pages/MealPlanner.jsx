import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import Button from '../components/common/Button.jsx'
import CalculatorForm from '../components/calculator/CalculatorForm.jsx'
import PlanPreferencesForm from '../components/mealPlanner/PlanPreferencesForm.jsx'
import MealSlotCard from '../components/mealPlanner/MealSlotCard.jsx'
import MacroDonut from '../components/calculator/MacroDonut.jsx'
import StatTile from '../components/calculator/StatTile.jsx'
import { useUserProfile } from '../context/UserProfileContext.jsx'
import useMealPlanGenerator from '../hooks/useMealPlanGenerator.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function MealPlanner() {
  usePageMeta(
    'Indian Meal Planner',
    'Generate a free personalized Indian meal plan — regional foods, real portions, real costs, matched to your calories, protein target, and budget.',
  )
  const { profile } = useUserProfile()
  const { plan, regenerate } = useMealPlanGenerator(profile)

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 text-center">
        <Badge tone="leaf">The core of BharatDiet</Badge>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Meal Planner</h1>
        <p className="mx-auto mt-2 max-w-xl text-ink-soft">
          A full day of real Indian food — matched to your body, your region,
          and your budget.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(300px,380px)_1fr]">
        {/* Left: inputs */}
        <div className="flex flex-col gap-6">
          <Card>
            <h2 className="mb-4 text-lg font-semibold">About you</h2>
            <CalculatorForm />
          </Card>
          <Card>
            <h2 className="mb-4 text-lg font-semibold">Your food, your budget</h2>
            <PlanPreferencesForm />
          </Card>
        </div>

        {/* Right: the plan */}
        <div>
          {plan ? (
            <div className="flex flex-col gap-4">
              <Card className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="grid flex-1 grid-cols-3 gap-3">
                    <StatTile
                      label="Calories"
                      value={Math.round(plan.totals.cal)}
                      unit="kcal"
                      hint={`target ${plan.targets.calorieTarget}`}
                    />
                    <StatTile
                      label="Protein"
                      value={`${Math.round(plan.totals.protein)}g`}
                      hint={`target ${plan.targets.proteinG}g`}
                    />
                    <StatTile
                      label="Est. Cost"
                      value={`₹${Math.round(plan.totals.cost)}`}
                      hint="per day"
                    />
                  </div>
                  <Button variant="secondary" onClick={regenerate}>
                    ↻ Regenerate
                  </Button>
                </div>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                {plan.slots.map((slot) => (
                  <MealSlotCard key={slot.key} slot={slot} />
                ))}
              </div>

              <Card>
                <h3 className="mb-3 text-sm font-semibold text-ink-soft">
                  Day's macro split
                </h3>
                <MacroDonut
                  proteinG={Math.round(plan.totals.protein)}
                  carbsG={Math.round(plan.totals.carbs)}
                  fatG={Math.round(plan.totals.fat)}
                  calorieTarget={Math.round(plan.totals.cal)}
                />
              </Card>
            </div>
          ) : (
            <Card className="flex h-full min-h-64 items-center justify-center">
              <p className="max-w-sm text-center text-ink-faint">
                Fill in your details, region, diet, and budget — your
                personalized day of meals appears here instantly.
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
