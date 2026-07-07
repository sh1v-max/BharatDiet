import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../common/Button.jsx'

const navItems = [
  { to: '/meal-planner', label: 'Meal Planner' },
  { to: '/calculators/calories', label: 'Calorie Calculator' },
  { to: '/calculators/protein', label: 'Protein Calculator' },
  { to: '/protein-gap', label: 'Protein Gap' },
  { to: '/foods', label: 'Food Database' },
  { to: '/pricing', label: 'Pricing' },
]

function navLinkClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-saffron-50 text-saffron-700' : 'text-ink-soft hover:text-ink'
  }`
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="text-xl">🥘</span>
          <span className="font-display text-lg font-bold text-ink">
            Bharat<span className="text-saffron-500">Diet</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/meal-planner">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-2xl md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/meal-planner" onClick={() => setMenuOpen(false)} className="mt-2">
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      )}
    </header>
  )
}
