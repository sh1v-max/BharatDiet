import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import Button from '../components/common/Button.jsx'
import CalculatorForm from '../components/calculator/CalculatorForm.jsx'
import TypicalDayPicker from '../components/proteinGap/TypicalDayPicker.jsx'
import GapComparisonBar from '../components/proteinGap/GapComparisonBar.jsx'
import { useUserProfile } from '../context/UserProfileContext.jsx'
import useProteinGap from '../hooks/useProteinGap.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function ProteinGap() {
  usePageMeta(
    'Protein Gap Analysis',
    'Tap what you eat on a normal day and see your protein gap — plus the cheapest Indian foods that close it, ranked by protein per rupee.',
  )
  const { profile } = useUserProfile()
  const [selected, setSelected] = useState([])

  const toggle = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )

  const result = useProteinGap(profile, selected)

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8 text-center">
        <Badge tone="leaf">2-minute check</Badge>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Protein Gap Analysis
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-ink-soft">
          Tap what a normal day of eating looks like for you — we'll show the
          gap and the cheapest Indian foods that close it.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <Card>
          <h2 className="mb-4 text-lg font-semibold">1 · About you</h2>
          <CalculatorForm />
        </Card>

        <Card>
          <h2 className="mb-4 text-lg font-semibold">
            2 · What do you eat on a normal day?
          </h2>
          <TypicalDayPicker selected={selected} onToggle={toggle} />
        </Card>

        {result && (
          <>
            <Card>
              <h2 className="mb-4 text-lg font-semibold">3 · Your protein gap</h2>
              <GapComparisonBar {...result} />
            </Card>

            {result.gap > 0 && result.suggestions.length > 0 && (
              <Card>
                <h2 className="mb-1 text-lg font-semibold">
                  Close the gap with
                </h2>
                <p className="mb-4 text-sm text-ink-soft">
                  Best protein for your rupee
                  {profile.region ? ' in your region' : ''} — adding any 2–3
                  of these covers your {result.gap}g deficit.
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {result.suggestions.map((f) => (
                    <Link key={f.id} to={`/foods/${f.id}`}>
                      <Card className="h-full p-4 transition-shadow hover:shadow-md">
                        <p className="font-medium">{f.name}</p>
                        <p className="mt-1 text-sm text-ink-soft">
                          {f.serving}
                        </p>
                        <p className="mt-2 text-sm">
                          <span className="font-semibold text-leaf-700">
                            +{f.protein}g protein
                          </span>{' '}
                          <span className="text-ink-faint">for ₹{f.cost}</span>
                        </p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </Card>
            )}

            <Link to="/meal-planner" className="self-center">
              <Button size="lg">Generate My Full Meal Plan →</Button>
            </Link>
          </>
        )}
      </div>
    </section>
  )
}
