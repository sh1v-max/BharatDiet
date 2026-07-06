import { Link } from 'react-router-dom'
import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import Button from '../components/common/Button.jsx'
import CalculatorForm from '../components/calculator/CalculatorForm.jsx'
import MacroDonut from '../components/calculator/MacroDonut.jsx'
import StatTile from '../components/calculator/StatTile.jsx'
import { useUserProfile } from '../context/UserProfileContext.jsx'
import useNutritionEngine from '../hooks/useNutritionEngine.js'

export default function CalorieCalculator() {
  const { profile } = useUserProfile()
  const result = useNutritionEngine(profile)

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8 text-center">
        <Badge tone="leaf">Free · No signup needed</Badge>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Calorie Calculator
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-ink-soft">
          Find your maintenance calories and daily target — results update
          live as you type.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Your details</h2>
          <CalculatorForm />
        </Card>

        <Card>
          <h2 className="mb-4 text-lg font-semibold">Your numbers</h2>
          {result ? (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <StatTile
                  label="BMI"
                  value={result.bmi}
                  hint={result.bmiCategory}
                />
                <StatTile
                  label="BMR"
                  value={result.bmr}
                  unit="kcal"
                  hint="Burned at complete rest"
                />
                <StatTile
                  label="Maintenance (TDEE)"
                  value={result.tdee}
                  unit="kcal"
                  hint="Your daily burn"
                />
                <StatTile
                  label="Daily Target"
                  value={result.calorieTarget}
                  unit="kcal"
                  hint="Adjusted for your goal"
                />
              </div>

              <div className="border-t border-line pt-4">
                <h3 className="mb-3 text-sm font-semibold text-ink-soft">
                  Daily macro split
                </h3>
                <MacroDonut
                  proteinG={result.proteinG}
                  carbsG={result.carbsG}
                  fatG={result.fatG}
                  calorieTarget={result.calorieTarget}
                />
              </div>

              <Link to="/meal-planner">
                <Button className="w-full">
                  Turn this into an Indian meal plan →
                </Button>
              </Link>
            </div>
          ) : (
            <p className="py-12 text-center text-ink-faint">
              Fill in your details — your numbers appear here instantly.
            </p>
          )}
        </Card>
      </div>
    </section>
  )
}
