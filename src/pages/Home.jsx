import { Link } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import Badge from '../components/common/Badge.jsx'

/* Week 1 hero skeleton — full landing page (Phase 8) ships in Week 5. */
export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
      <Badge tone="leaf">Built for how India actually eats</Badge>
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
        Personalized Nutrition for{' '}
        <span className="text-saffron-500">Real Indian Food</span>
      </h1>
      <p className="max-w-xl text-lg text-ink-soft">
        Stop counting avocados. Get a diet plan built around roti, dal, and
        rice — for your body, your region, and your budget.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link to="/meal-planner">
          <Button size="lg">Calculate My Free Diet Plan →</Button>
        </Link>
        <Link to="/calculators/calories">
          <Button size="lg" variant="secondary">
            Try the Calculator
          </Button>
        </Link>
      </div>
    </section>
  )
}
