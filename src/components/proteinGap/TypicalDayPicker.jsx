import { getFoodById } from '../../services/foodService.js'

/*
 * Visual tap-to-select of common meals (no typing, no logging) — the
 * lightweight self-report that powers the gap estimate.
 */
const GROUPS = [
  {
    label: 'Typical breakfast',
    ids: [
      'masala-chai', 'poha', 'aloo-paratha', 'idli', 'plain-dosa', 'upma',
      'bread-butter', 'oats-porridge', 'boiled-egg', 'omelette',
    ],
  },
  {
    label: 'Typical lunch',
    ids: [
      'veg-thali', 'toor-dal', 'steamed-rice', 'wheat-roti', 'curd',
      'rajma', 'chole', 'curd-rice', 'chicken-curry', 'fish-curry',
    ],
  },
  {
    label: 'Typical snacks',
    ids: [
      'samosa', 'marie-biscuits', 'namkeen', 'banana', 'roasted-chana',
      'milk-toned', 'sweet-lassi', 'bhel-puri',
    ],
  },
  {
    label: 'Typical dinner',
    ids: [
      'khichdi', 'moong-dal', 'mixed-veg', 'paneer-butter-masala',
      'egg-curry', 'chicken-biryani', 'sambar', 'macher-jhol',
    ],
  },
]

export default function TypicalDayPicker({ selected, onToggle }) {
  return (
    <div className="flex flex-col gap-5">
      {GROUPS.map((group) => (
        <div key={group.label}>
          <h3 className="mb-2 text-sm font-semibold text-ink-soft">
            {group.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.ids.map((id) => {
              const food = getFoodById(id)
              if (!food) return null
              const isOn = selected.includes(id)
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isOn}
                  onClick={() => onToggle(id)}
                  className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-colors ${
                    isOn
                      ? 'border-leaf-600 bg-leaf-50 font-medium text-leaf-800'
                      : 'border-line bg-white text-ink-soft hover:border-saffron-300'
                  }`}
                >
                  {isOn && '✓ '}
                  {food.name}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
