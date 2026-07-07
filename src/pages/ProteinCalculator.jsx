import { Link } from 'react-router-dom'
import { ArrowRight, CookingPot, Egg, Milk, Soup } from 'lucide-react'
import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import Button from '../components/common/Button.jsx'
import CalculatorForm from '../components/calculator/CalculatorForm.jsx'
import StatTile from '../components/calculator/StatTile.jsx'
import { useUserProfile } from '../context/UserProfileContext.jsx'
import useNutritionEngine from '../hooks/useNutritionEngine.js'
import usePageMeta from '../hooks/usePageMeta.js'
import { PROTEIN_PER_KG } from '../utils/nutritionMath.js'

/* Everyday visual anchors so grams mean something to a first-time user. */
function proteinAnchors(proteinG) {
  return [
    { food: 'Bowls of dal', grams: 9, Icon: Soup },
    { food: 'Boiled eggs', grams: 6.3, Icon: Egg },
    { food: '100g paneer', grams: 18, Icon: CookingPot },
    { food: 'Glasses of milk', grams: 6.5, Icon: Milk },
  ].map((a) => ({ ...a, count: Math.round(proteinG / a.grams) }))
}

export default function ProteinCalculator() {
  usePageMeta(
    'Protein Calculator (India)',
    'How much protein do you need per day? Free calculator with goal-based targets and what the number looks like in dal, eggs, paneer, and milk.',
  )
  const { profile } = useUserProfile()
  const result = useNutritionEngine(profile)

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8 text-center">
        <Badge tone="leaf">Free · No signup needed</Badge>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Protein Calculator
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-ink-soft">
          Most Indians are 30–40g short on protein every day. Find your real
          number.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Your details</h2>
          <CalculatorForm />
        </Card>

        <Card>
          <h2 className="mb-4 text-lg font-semibold">Your protein target</h2>
          {result ? (
            <div className="flex flex-col gap-4">
              <div className="rounded-xl bg-leaf-50 px-5 py-4 text-center">
                <p className="font-display text-5xl font-bold tabular-nums text-leaf-700">
                  {result.proteinG}g
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  per day · {PROTEIN_PER_KG[profile.goal]}g per kg of body
                  weight for your goal
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-ink-soft">
                  What {result.proteinG}g looks like in real food
                </h3>
                <ul className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
                  {proteinAnchors(result.proteinG).map((a) => (
                    <li
                      key={a.food}
                      className="flex items-center gap-2 rounded-lg bg-cream px-3 py-2 text-sm"
                    >
                      <a.Icon className="h-5 w-5 shrink-0 text-saffron-500" aria-hidden />
                      <span>
                        <strong className="tabular-nums">≈{a.count}</strong>{' '}
                        {a.food}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-ink-faint">
                  Each shown alone — your real plan mixes these across meals.
                </p>
              </div>

              <StatTile
                label="Within your calorie budget"
                value={result.calorieTarget}
                unit="kcal/day"
                hint={`Protein will be ${Math.round(((result.proteinG * 4) / result.calorieTarget) * 100)}% of your daily calories`}
              />

              <Link to="/meal-planner">
                <Button className="w-full">
                  Show me Indian foods that get me there
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </Link>
            </div>
          ) : (
            <p className="py-12 text-center text-ink-faint">
              Fill in your details — your target appears here instantly.
            </p>
          )}
        </Card>
      </div>
    </section>
  )
}
