import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'

/* Temporary stub used for routes whose real pages ship in later weeks. */
export default function Placeholder({ title, week }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <Card className="flex flex-col items-start gap-3">
        <Badge tone="saffron">Coming in Week {week}</Badge>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-ink-soft">
          This page is on the roadmap — see BLUEPRINT.md Phase 11 for the
          build schedule.
        </p>
      </Card>
    </section>
  )
}
