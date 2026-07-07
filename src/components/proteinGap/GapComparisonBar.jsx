import { Check, CircleAlert, TriangleAlert } from 'lucide-react'

/*
 * Recommended vs. estimated protein as two horizontal bars. Severity is
 * never color-alone: each state carries an explicit label and icon.
 */
const severityStyles = {
  met: { color: 'var(--color-gap-met)', Icon: Check, label: 'Target met' },
  small: { color: 'var(--color-gap-small)', Icon: TriangleAlert, label: 'Small gap' },
  large: { color: 'var(--color-gap-large)', Icon: CircleAlert, label: 'Large gap' },
}

export default function GapComparisonBar({ recommended, estimated, gap, severity }) {
  const s = severityStyles[severity]
  const estPct = Math.min(100, (estimated / recommended) * 100)

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mb-1 flex justify-between text-sm">
          <span className="font-medium">Recommended</span>
          <span className="tabular-nums font-semibold">{recommended}g</span>
        </div>
        <div className="h-5 w-full rounded-full bg-leaf-100">
          <div className="h-5 w-full rounded-full bg-leaf-600" />
        </div>
      </div>

      <div>
        <div className="mb-1 flex justify-between text-sm">
          <span className="font-medium">Your typical day</span>
          <span className="tabular-nums font-semibold">{estimated}g</span>
        </div>
        <div className="h-5 w-full rounded-full bg-line">
          <div
            className="h-5 rounded-full transition-all duration-500"
            style={{ width: `${estPct}%`, backgroundColor: s.color }}
          />
        </div>
      </div>

      <p
        className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium"
        style={{ backgroundColor: `color-mix(in srgb, ${s.color} 12%, white)` }}
      >
        <span
          aria-hidden
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: s.color }}
        >
          <s.Icon className="h-3.5 w-3.5" />
        </span>
        {s.label}
        {gap > 0 && (
          <span className="font-normal text-ink-soft">
            — you're getting about {estimated}g, and your body could use
            closer to {recommended}g.
          </span>
        )}
      </p>
    </div>
  )
}
