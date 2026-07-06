export default function StatTile({ label, value, unit, hint }) {
  return (
    <div className="rounded-xl bg-cream px-4 py-3">
      <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
        {label}
      </p>
      <p className="mt-1 font-display text-2xl font-bold tabular-nums text-ink">
        {value}
        {unit && (
          <span className="ml-1 text-sm font-medium text-ink-soft">{unit}</span>
        )}
      </p>
      {hint && <p className="mt-0.5 text-xs text-ink-faint">{hint}</p>}
    </div>
  )
}
