import { Plus } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import { FAQS } from '../data/faqs.js'

export default function FAQPage() {
  usePageMeta(
    'FAQ',
    'Frequently asked questions about BharatDiet — accuracy, privacy, supplements, regional food support, and pricing.',
  )

  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Frequently asked questions
      </h1>
      <div className="mt-8 flex flex-col gap-3">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-line bg-white px-5 py-4"
          >
            <summary className="cursor-pointer list-none font-medium">
              <span className="flex items-center justify-between gap-3">
                {f.q}
                <Plus
                  className="h-5 w-5 shrink-0 text-saffron-500 transition-transform group-open:rotate-45"
                  aria-hidden
                />
              </span>
            </summary>
            <p className="mt-3 text-sm text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
