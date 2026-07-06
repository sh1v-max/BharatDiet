import { Link } from 'react-router-dom'
import Card from '../common/Card.jsx'
import Badge from '../common/Badge.jsx'

const slotEmoji = {
  breakfast: '🌅',
  lunch: '☀️',
  snack: '🫖',
  dinner: '🌙',
}

function portionLabel(portions) {
  return portions === 1 ? '' : ` × ${portions}`
}

export default function MealSlotCard({ slot }) {
  return (
    <Card className="p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold">
          <span>{slotEmoji[slot.key]}</span> {slot.label}
        </h3>
        <span className="text-sm tabular-nums text-ink-soft">
          {Math.round(slot.totals.cal)} kcal ·{' '}
          <span className="font-medium text-leaf-700">
            {Math.round(slot.totals.protein)}g protein
          </span>
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {slot.items.map(({ food, portions }) => (
          <li
            key={food.id}
            className="flex items-center justify-between gap-2 rounded-lg bg-cream px-3 py-2"
          >
            <Link
              to={`/foods/${food.id}`}
              className="text-sm font-medium hover:text-saffron-600"
            >
              {food.name}
              <span className="text-ink-faint">{portionLabel(portions)}</span>
              <span className="block text-xs font-normal text-ink-faint">
                {food.serving}
                {portions !== 1 && ' each'}
              </span>
            </Link>
            <Badge tone="neutral">₹{Math.round(food.cost * portions)}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  )
}
