import { Link } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function About() {
  usePageMeta(
    'About',
    'Why BharatDiet exists: nutrition tools built for Indian food, Indian budgets, and Indian regional diversity — not translated from Western apps.',
  )

  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">
        Nutrition advice shouldn't need translation.
      </h1>
      <div className="mt-6 space-y-4 text-ink-soft">
        <p>
          Every popular diet app was designed around a Western pantry — and
          then shipped to India with the food list barely touched. The result:
          millions of people being told to eat granola, turkey breast, and
          protein bars while their actual kitchen holds dal, roti, rice, curd,
          and sabzi.
        </p>
        <p>
          BharatDiet starts from the opposite end. The food database is Indian
          first — 200+ items with real serving sizes (a roti, a bowl of dal, a
          glass of chaas) and real prices in rupees. The planning engine knows
          that a Punjabi plate and a Tamil plate are different answers to the
          same nutrition question, and that a hostel student's ₹100/day budget
          is a design constraint, not an afterthought.
        </p>
        <p>
          The science stays standard — Mifflin-St Jeor for metabolic rate,
          evidence-based protein targets, honest calorie math. What changes is
          everything around it: the foods, the costs, the portions, and the
          tone. No gym-bro shouting, no medical coldness, no supplement
          upsells.
        </p>
        <p>
          Everything runs in your browser. No account, no data collection, no
          paywall in front of the core tools.
        </p>
      </div>
      <Link to="/meal-planner" className="mt-8 inline-block">
        <Button size="lg">Try the Meal Planner →</Button>
      </Link>
    </section>
  )
}
