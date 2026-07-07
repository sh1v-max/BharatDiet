import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUp } from 'lucide-react'
import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import Input from '../components/common/Input.jsx'
import Select from '../components/common/Select.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import {
  filterFoods,
  sortFoods,
  getCategories,
  budgetTier,
} from '../services/foodService.js'

const regionOptions = [
  { value: 'north', label: 'North India' },
  { value: 'south', label: 'South India' },
  { value: 'east', label: 'East India' },
  { value: 'west', label: 'West India' },
]

const dietOptions = [
  { value: 'veg', label: 'Vegetarian' },
  { value: 'egg', label: 'Eggetarian' },
  { value: 'nonveg', label: 'Non-Vegetarian' },
]

const budgetBadgeTone = {
  ultra: 'leaf',
  budget: 'leaf',
  standard: 'saffron',
  premium: 'alert',
}

const columns = [
  { key: 'name', label: 'Food', numeric: false },
  { key: 'cal', label: 'Calories', numeric: true },
  { key: 'protein', label: 'Protein', numeric: true },
  { key: 'carbs', label: 'Carbs', numeric: true },
  { key: 'fat', label: 'Fat', numeric: true },
  { key: 'cost', label: 'Cost', numeric: true },
  { key: 'proteinPerRupee', label: 'Protein/₹', numeric: true },
]

export default function FoodDatabase() {
  usePageMeta(
    'Indian Food Database',
    '200+ Indian foods with calories, protein, carbs, fat, real serving sizes, and cost per serving — searchable and sortable by protein per rupee.',
  )
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [region, setRegion] = useState('')
  const [diet, setDiet] = useState('')
  const [sortBy, setSortBy] = useState('protein')
  const [direction, setDirection] = useState('desc')

  const categoryOptions = useMemo(
    () => getCategories().map((c) => ({ value: c, label: c })),
    [],
  )

  const results = useMemo(() => {
    const filtered = filterFoods({
      query,
      category: category || null,
      region: region || null,
      diet: diet || null,
    })
    return sortFoods(filtered, sortBy, direction)
  }, [query, category, region, diet, sortBy, direction])

  function handleSort(key) {
    if (key === sortBy) {
      setDirection((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortBy(key)
      setDirection(key === 'name' ? 'asc' : 'desc')
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 text-center">
        <Badge tone="leaf">{results.length} foods</Badge>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Indian Food Database
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-ink-soft">
          Real serving sizes, real costs — sort by protein per rupee to find
          the cheapest protein in your kitchen.
        </p>
      </div>

      {/* Filters — one row above the table */}
      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Input
          label="Search"
          placeholder="e.g. paneer, dal, dosa…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Select
          label="Category"
          options={categoryOptions}
          placeholder="All categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Select
          label="Region"
          options={regionOptions}
          placeholder="All regions"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <Select
          label="Diet"
          options={dietOptions}
          placeholder="Any diet"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
        />
      </div>

      <Card className="overflow-x-auto p-0">
        <table className="w-full min-w-160 text-sm">
          <thead className="sticky top-0 border-b border-line bg-white text-left">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className={col.numeric ? 'text-right' : ''}>
                  <button
                    className="w-full cursor-pointer px-4 py-3 font-semibold text-ink-soft hover:text-ink"
                    onClick={() => handleSort(col.key)}
                  >
                    <span
                      className={`inline-flex items-center gap-1 ${col.numeric ? 'float-right' : ''}`}
                    >
                      {col.label}
                      {sortBy === col.key &&
                        (direction === 'asc' ? (
                          <ArrowUp className="h-3.5 w-3.5 text-saffron-500" aria-hidden />
                        ) : (
                          <ArrowDown className="h-3.5 w-3.5 text-saffron-500" aria-hidden />
                        ))}
                    </span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((f, i) => (
              <tr
                key={f.id}
                className={`border-b border-line last:border-0 hover:bg-saffron-50 ${
                  i % 2 ? 'bg-cream/60' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <Link to={`/foods/${f.id}`} className="group">
                    <span className="font-medium text-ink group-hover:text-saffron-600">
                      {f.name}
                    </span>
                    <span className="block text-xs text-ink-faint">
                      {f.serving}
                    </span>
                  </Link>
                </td>
                <td className="px-4 py-3 text-right tabular-nums">{f.cal}</td>
                <td className="px-4 py-3 text-right font-medium tabular-nums text-leaf-700">
                  {f.protein}g
                </td>
                <td className="px-4 py-3 text-right tabular-nums">{f.carbs}g</td>
                <td className="px-4 py-3 text-right tabular-nums">{f.fat}g</td>
                <td className="px-4 py-3 text-right">
                  <Badge tone={budgetBadgeTone[budgetTier(f.cost)]}>
                    ₹{f.cost}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-ink-soft">
                  {(f.protein / f.cost).toFixed(2)}g
                </td>
              </tr>
            ))}
            {results.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-12 text-center text-ink-faint"
                >
                  No foods match these filters — try widening the search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </section>
  )
}
