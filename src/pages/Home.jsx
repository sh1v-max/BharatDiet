import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import Badge from '../components/common/Badge.jsx'
import Card from '../components/common/Card.jsx'
import { calcNutritionProfile } from '../utils/nutritionMath.js'
import { allocateMealPlan } from '../utils/mealAllocator.js'
import { filterFoods } from '../services/foodService.js'

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 pb-20 pt-24 text-center">
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
        <Link to="/protein-gap">
          <Button size="lg" variant="secondary">
            Check My Protein Gap
          </Button>
        </Link>
      </div>
      <p className="text-sm text-ink-faint">
        Free · No signup · Results in under 2 minutes
      </p>
    </section>
  )
}

/* ---------- Problem ---------- */
function Problem() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold">
          Every calorie app assumes you eat granola.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Fitness apps keep recommending a pantry most of India doesn't have —
          then blame you for not sticking to the plan.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card className="border-gap-large/30">
            <p className="text-sm font-semibold uppercase tracking-wide text-gap-large">
              What apps suggest
            </p>
            <ul className="mt-4 space-y-2 text-left text-ink-soft">
              {['Avocado toast', 'Protein bars', 'Granola with almond milk', 'Turkey breast', 'Imported supplements'].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="text-gap-large">✕</span>
                  <span className="line-through opacity-70">{x}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-leaf-300">
            <p className="text-sm font-semibold uppercase tracking-wide text-leaf-700">
              What you actually eat
            </p>
            <ul className="mt-4 space-y-2 text-left text-ink">
              {['Roti, sabzi, dal', 'Rice with rajma or sambar', 'Curd, paneer, chaas', 'Eggs, fish, chicken', 'Poha, idli, upma'].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="text-leaf-600">✓</span> {x}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <p className="mt-8 text-lg font-medium">
          BharatDiet plans with the second list.
        </p>
      </div>
    </section>
  )
}

/* ---------- Protein deficiency ---------- */
function ProteinDeficiency() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold">
          Most Indians are 30–40g short on protein —{' '}
          <span className="text-saffron-500">every single day.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          And it's not because Indian food lacks protein. It's because no one's
          shown you how to combine dal, curd, soy, and eggs to hit your number.
        </p>
        <Link to="/protein-gap" className="mt-8 inline-block">
          <Button size="lg">Find My Protein Gap →</Button>
        </Link>
      </div>
    </section>
  )
}

/* ---------- Regional showcase (real engine output) ---------- */
const REGIONS = [
  { key: 'north', label: 'North', desc: 'Roti · Rajma · Paneer' },
  { key: 'south', label: 'South', desc: 'Rice · Idli · Sambar' },
  { key: 'east', label: 'East', desc: 'Rice · Fish · Sattu' },
  { key: 'west', label: 'West', desc: 'Bajra · Dal · Thepla' },
]

const showcaseProfile = {
  age: 27, gender: 'male', heightCm: 172, weightKg: 68,
  activityLevel: 'moderate', goal: 'maintenance',
}

function fixedRng(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function RegionalShowcase() {
  const [region, setRegion] = useState('north')

  const plan = useMemo(() => {
    const targets = calcNutritionProfile(showcaseProfile)
    const pool = filterFoods({ region, diet: 'veg' })
    return allocateMealPlan(targets, pool, 'budget', fixedRng(11))
  }, [region])

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Built for how India actually eats.</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            The same goals become different plates in different regions. A real
            sample day, generated live by our engine:
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {REGIONS.map((r) => (
            <button
              key={r.key}
              onClick={() => setRegion(r.key)}
              className={`cursor-pointer rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${
                region === r.key
                  ? 'border-saffron-400 bg-saffron-50 text-saffron-700'
                  : 'border-line text-ink-soft hover:border-saffron-300'
              }`}
            >
              {r.label} India
              <span className="block text-xs font-normal text-ink-faint">
                {r.desc}
              </span>
            </button>
          ))}
        </div>

        {plan && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plan.slots.map((slot) => (
              <Card key={slot.key} className="p-4">
                <p className="text-sm font-semibold">{slot.label}</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                  {slot.items.map(({ food, portions }) => (
                    <li key={food.id}>
                      {food.name}
                      {portions !== 1 ? ` ×${portions}` : ''}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs tabular-nums text-ink-faint">
                  {Math.round(slot.totals.cal)} kcal ·{' '}
                  {Math.round(slot.totals.protein)}g protein
                </p>
              </Card>
            ))}
          </div>
        )}
        {plan && (
          <p className="mt-4 text-center text-sm text-ink-soft">
            Full day: {Math.round(plan.totals.cal)} kcal ·{' '}
            {Math.round(plan.totals.protein)}g protein · about{' '}
            ₹{Math.round(plan.totals.cost)}
          </p>
        )}
      </div>
    </section>
  )
}

/* ---------- Features ---------- */
const FEATURES = [
  { icon: '🗺️', title: 'Regional Meal Plans', desc: 'North, South, East, West — your plate, not a template.', to: '/meal-planner' },
  { icon: '🎯', title: 'Protein Gap Analysis', desc: 'See your deficit and the exact foods that close it.', to: '/protein-gap' },
  { icon: '💰', title: 'Budget-Aware Plans', desc: 'Great nutrition from ₹100 a day. No supplements required.', to: '/meal-planner' },
  { icon: '🧮', title: 'Calorie & Macro Calculators', desc: 'BMR, TDEE, and macros — explained in plain language.', to: '/calculators/calories' },
  { icon: '🥘', title: 'Indian Food Database', desc: '200+ foods with real serving sizes and real prices.', to: '/foods' },
  { icon: '📊', title: 'Protein-per-Rupee', desc: 'Sort every food by protein value for money.', to: '/foods' },
]

function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold">
          Everything you need. Nothing you don't.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Link key={f.title} to={f.to}>
              <Card className="h-full p-5 transition-shadow hover:shadow-md">
                <span className="text-2xl">{f.icon}</span>
                <h3 className="mt-2 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{f.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Personas ---------- */
const PERSONAS = [
  {
    emoji: '🎓', who: 'The Hostel Student',
    story: 'Mess food, ₹100/day, wants to build muscle. Gets a plan built on eggs, soy chunks, sattu, and dal — not whey he can\'t afford.',
  },
  {
    emoji: '💼', who: 'The Working Professional',
    story: 'Desk job, no time to cook elaborate meals, wants to lose weight without giving up roti-sabzi lunches from the tiffin.',
  },
  {
    emoji: '🏠', who: 'The Homemaker',
    story: 'Cooks for the whole family and wants the same dal-chawal dinner to quietly hit everyone\'s protein needs.',
  },
]

function Personas() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-3xl font-bold">Real people, real thalis.</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink-soft">
          BharatDiet is designed around the people Western fitness apps forgot.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {PERSONAS.map((p) => (
            <Card key={p.who} className="p-5">
              <span className="text-3xl">{p.emoji}</span>
              <h3 className="mt-2 font-semibold">{p.who}</h3>
              <p className="mt-1 text-sm text-ink-soft">{p.story}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: 'Is this only for weight loss?',
    a: 'No — the engine supports weight loss, weight gain, muscle gain, fat loss, and maintenance. Your calorie and protein targets adjust to the goal you pick.',
  },
  {
    q: 'Do I need to buy supplements?',
    a: 'No. Every plan is built from regular Indian foods — dal, curd, soy, eggs, chicken, fish. Supplements are never required to hit your targets.',
  },
  {
    q: 'Does it work for my region\'s food?',
    a: 'Plans adapt to North, South, East, and West Indian eating patterns today, with state-level plans on the roadmap.',
  },
  {
    q: 'Is it really free?',
    a: 'The calculators, protein gap check, food database, and meal plan generation are free, with no signup required.',
  },
  {
    q: 'Is my data private?',
    a: 'Your details never leave your browser — everything is calculated on your device. We don\'t store your personal data on any server.',
  },
]

function FAQ() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-center text-3xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-8 flex flex-col gap-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-line bg-white px-5 py-4"
            >
              <summary className="cursor-pointer list-none font-medium marker:hidden">
                <span className="flex items-center justify-between">
                  {f.q}
                  <span className="text-saffron-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="bg-leaf-800 py-20 text-center">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-bold text-white">
          Your next roti can already fit your goals.
        </h2>
        <p className="mt-3 text-leaf-100">
          Two minutes. No signup. A full day of real Indian food, planned for
          you.
        </p>
        <Link to="/meal-planner" className="mt-8 inline-block">
          <Button size="lg">Build My Free Plan →</Button>
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <ProteinDeficiency />
      <RegionalShowcase />
      <Features />
      <Personas />
      <FAQ />
      <FinalCTA />
    </>
  )
}
