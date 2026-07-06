import { useState } from 'react'

/*
 * SVG macro donut — palette validated with the dataviz six-checks script
 * (light surface #faf7f2): all PASS. Identity is never color-alone:
 * every segment has a direct label in the legend with its gram value.
 */
export const MACRO_COLORS = {
  protein: '#2f8f5b',
  carbs: '#d97420',
  fat: '#4a6fd0',
}

const KCAL_PER_G = { protein: 4, carbs: 4, fat: 9 }

const R = 42
const STROKE = 14
const C = 2 * Math.PI * R
const GAP = 2.5 // ≈2px surface gap between segments

export default function MacroDonut({ proteinG, carbsG, fatG, calorieTarget }) {
  const [hovered, setHovered] = useState(null)

  const segments = [
    { key: 'protein', label: 'Protein', grams: proteinG },
    { key: 'carbs', label: 'Carbs', grams: carbsG },
    { key: 'fat', label: 'Fat', grams: fatG },
  ].map((s) => ({ ...s, kcal: s.grams * KCAL_PER_G[s.key] }))

  const totalKcal = segments.reduce((sum, s) => sum + s.kcal, 0)

  let offset = 0
  const arcs = segments.map((s) => {
    const len = (s.kcal / totalKcal) * C
    const arc = { ...s, dash: Math.max(len - GAP, 0), start: offset }
    offset += len
    return arc
  })

  const center = hovered
    ? segments.find((s) => s.key === hovered)
    : null

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
      <svg
        viewBox="0 0 120 120"
        className="h-44 w-44"
        role="img"
        aria-label={`Macro split: protein ${proteinG}g, carbs ${carbsG}g, fat ${fatG}g`}
      >
        {arcs.map((arc) => (
          <circle
            key={arc.key}
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke={MACRO_COLORS[arc.key]}
            strokeWidth={hovered === arc.key ? STROKE + 3 : STROKE}
            strokeDasharray={`${arc.dash} ${C - arc.dash}`}
            strokeDashoffset={-arc.start}
            strokeLinecap="butt"
            transform="rotate(-90 60 60)"
            opacity={hovered && hovered !== arc.key ? 0.35 : 1}
            className="cursor-pointer transition-all duration-150"
            onMouseEnter={() => setHovered(arc.key)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
        <text
          x="60"
          y="56"
          textAnchor="middle"
          className="fill-ink font-display tabular-nums"
          fontSize="15"
          fontWeight="700"
        >
          {center ? `${center.grams}g` : calorieTarget}
        </text>
        <text
          x="60"
          y="72"
          textAnchor="middle"
          className="fill-ink-faint"
          fontSize="8"
        >
          {center ? center.label : 'kcal / day'}
        </text>
      </svg>

      <ul className="flex flex-col gap-2">
        {segments.map((s) => (
          <li
            key={s.key}
            className="flex cursor-pointer items-center gap-2 text-sm"
            onMouseEnter={() => setHovered(s.key)}
            onMouseLeave={() => setHovered(null)}
          >
            <span
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: MACRO_COLORS[s.key] }}
            />
            <span className="font-medium text-ink">{s.label}</span>
            <span className="tabular-nums text-ink-soft">
              {s.grams}g · {Math.round((s.kcal / totalKcal) * 100)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
