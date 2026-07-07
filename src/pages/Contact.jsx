import Card from '../components/common/Card.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

const CHANNELS = [
  {
    icon: '💬',
    title: 'Feedback & suggestions',
    body: 'Found a food with wrong macros? Want your state\'s cuisine added? That feedback directly shapes the roadmap.',
  },
  {
    icon: '🐛',
    title: 'Bug reports',
    body: 'Something broke or looks off on your device? A screenshot and your browser name is all we need.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    body: 'Nutritionists, dietitians, and regional-cuisine experts — we\'d love help validating and expanding the food database.',
  },
]

export default function Contact() {
  usePageMeta(
    'Contact',
    'Get in touch with BharatDiet — feedback, bug reports, food data corrections, and collaboration.',
  )

  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>
      <p className="mt-3 text-ink-soft">
        BharatDiet is an independent project in active development — every
        message gets read.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {CHANNELS.map((c) => (
          <Card key={c.title} className="flex items-start gap-4 p-5">
            <span className="text-2xl">{c.icon}</span>
            <div>
              <h2 className="font-semibold">{c.title}</h2>
              <p className="mt-1 text-sm text-ink-soft">{c.body}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-5 text-center">
        <p className="text-sm text-ink-soft">Reach out directly at</p>
        <a
          href="mailto:hello@bharatdiet.in"
          className="mt-1 inline-block font-semibold text-saffron-600 hover:underline"
        >
          hello@bharatdiet.in
        </a>
        <p className="mt-2 text-xs text-ink-faint">
          or open an issue on the project's GitHub repository
        </p>
      </Card>
    </section>
  )
}
