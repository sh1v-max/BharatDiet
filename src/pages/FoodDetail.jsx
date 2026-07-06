import { Link, useParams } from 'react-router-dom'
import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import Button from '../components/common/Button.jsx'
import StatTile from '../components/calculator/StatTile.jsx'
import MacroDonut from '../components/calculator/MacroDonut.jsx'
import { getFoodById, budgetTier, filterFoods, sortFoods } from '../services/foodService.js'

const regionLabels = {
  north: 'North India',
  south: 'South India',
  east: 'East India',
  west: 'West India',
  all: 'Pan-India',
}

export default function FoodDetail() {
  const { slug } = useParams()
  const food = getFoodById(slug)

  if (!food) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Food not found</h1>
        <Link to="/foods" className="mt-4 inline-block">
          <Button variant="secondary">← Back to Food Database</Button>
        </Link>
      </section>
    )
  }

  /* Same-category alternatives, best protein-per-rupee first. */
  const alternatives = sortFoods(
    filterFoods({ category: food.category }),
    'proteinPerRupee',
  )
    .filter((f) => f.id !== food.id)
    .slice(0, 4)

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <Link to="/foods" className="text-sm text-saffron-600 hover:underline">
        ← Food Database
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <h1 className="text-3xl font-bold">{food.name}</h1>
        <Badge tone="saffron">{food.category}</Badge>
        <Badge tone={food.diet === 'veg' ? 'leaf' : 'neutral'}>
          {food.diet === 'veg' ? 'Veg' : food.diet === 'egg' ? 'Egg' : 'Non-Veg'}
        </Badge>
      </div>
      <p className="mt-1 text-ink-soft">
        Serving: {food.serving} · {food.regions.map((r) => regionLabels[r]).join(', ')}
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Per serving</h2>
          <div className="grid grid-cols-2 gap-3">
            <StatTile label="Calories" value={food.cal} unit="kcal" />
            <StatTile label="Protein" value={food.protein} unit="g" />
            <StatTile label="Carbs" value={food.carbs} unit="g" />
            <StatTile label="Fat" value={food.fat} unit="g" />
            <StatTile
              label="Cost"
              value={`₹${food.cost}`}
              hint={`${budgetTier(food.cost)} budget tier`}
            />
            <StatTile
              label="Protein per ₹"
              value={(food.protein / food.cost).toFixed(2)}
              unit="g"
            />
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-lg font-semibold">Macro split</h2>
          <MacroDonut
            proteinG={food.protein}
            carbsG={food.carbs}
            fatG={food.fat}
            calorieTarget={food.cal}
          />
        </Card>
      </div>

      {alternatives.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">
            Better protein value in {food.category}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {alternatives.map((f) => (
              <Link key={f.id} to={`/foods/${f.id}`}>
                <Card className="h-full p-4 transition-shadow hover:shadow-md">
                  <p className="font-medium">{f.name}</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {f.protein}g protein · ₹{f.cost}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
