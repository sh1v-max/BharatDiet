import { Link } from 'react-router-dom'

const columns = [
  {
    heading: 'Tools',
    links: [
      { to: '/meal-planner', label: 'Meal Planner' },
      { to: '/calculators/calories', label: 'Calorie Calculator' },
      { to: '/calculators/protein', label: 'Protein Calculator' },
      { to: '/foods', label: 'Food Database' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact', label: 'Contact' },
      { to: '/faq', label: 'FAQ' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">
            Bharat<span className="text-saffron-500">Diet</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-ink-soft">
            Personalized nutrition for real Indian food — built for your
            region, your goals, and your budget.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-sm font-semibold text-ink">{col.heading}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-soft hover:text-saffron-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-ink-faint">
        © {new Date().getFullYear()} BharatDiet. Eat better with Indian food.
      </div>
    </footer>
  )
}
