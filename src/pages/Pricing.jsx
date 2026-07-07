import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import Button from '../components/common/Button.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

const TIERS = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    tagline: 'Everything you need to start eating better today.',
    features: [
      'Calorie & protein calculators',
      'Protein Gap Analysis',
      'Full Indian food database',
      'Meal plan generation',
      'No signup required',
    ],
    cta: { label: 'Start Free', to: '/meal-planner', variant: 'secondary' },
  },
  {
    name: 'Pro',
    price: '₹149',
    period: 'per month · ₹999/yr',
    tagline: 'For people ready to make the plan a habit.',
    highlight: true,
    features: [
      'Everything in Free',
      'Save unlimited meal plans',
      'Swap any meal with alternatives',
      'Weekly plan history',
      'Grocery list export',
    ],
    cta: { label: 'Coming Soon', disabled: true },
  },
  {
    name: 'Premium',
    price: '₹399',
    period: 'per month · ₹2999/yr',
    tagline: 'Your personal nutrition co-pilot.',
    features: [
      'Everything in Pro',
      'AI Diet Coach chat',
      'Progress tracking dashboard',
      'Priority access to new features',
    ],
    cta: { label: 'Coming Soon', disabled: true },
  },
]

export default function Pricing() {
  usePageMeta(
    'Pricing',
    'BharatDiet pricing — free calculators and meal plans forever; Pro and Premium plans for saving, swapping, and AI coaching.',
  )

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Free where it matters. Paid where it helps.
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-ink-soft">
          The core planner stays free forever — paid tiers add persistence,
          swapping, and coaching once they launch.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col p-6 ${
              tier.highlight ? 'border-2 border-saffron-400' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{tier.name}</h2>
              {tier.highlight && <Badge tone="saffron">Most useful</Badge>}
            </div>
            <p className="mt-3 font-display text-4xl font-bold">{tier.price}</p>
            <p className="text-sm text-ink-faint">{tier.period}</p>
            <p className="mt-3 text-sm text-ink-soft">{tier.tagline}</p>
            <ul className="mt-5 flex flex-col gap-2 text-sm">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              {tier.cta.disabled ? (
                <Button className="w-full" disabled>
                  {tier.cta.label}
                </Button>
              ) : (
                <Link to={tier.cta.to}>
                  <Button className="w-full" variant={tier.cta.variant}>
                    {tier.cta.label}
                  </Button>
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-ink-faint">
        Paid tiers are on the roadmap — pricing shown is indicative and may
        change at launch.
      </p>
    </section>
  )
}
