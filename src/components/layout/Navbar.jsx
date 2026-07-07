import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from '../common/Button.jsx'

/*
 * Nav labels stay short so the desktop row fits at the lg breakpoint;
 * below lg everything lives in the overlay menu (6 items + CTA overflow
 * a 768px row, so md is too early to switch to the horizontal nav).
 */
const navItems = [
  { to: '/meal-planner', label: 'Meal Planner' },
  { to: '/calculators/calories', label: 'Calories' },
  { to: '/calculators/protein', label: 'Protein' },
  { to: '/protein-gap', label: 'Protein Gap' },
  { to: '/foods', label: 'Foods' },
  { to: '/pricing', label: 'Pricing' },
]

function navLinkClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-saffron-50 text-saffron-700' : 'text-ink-soft hover:text-ink'
  }`
}

function mobileLinkClass({ isActive }) {
  return `flex min-h-12 items-center rounded-xl px-4 text-base font-medium transition-colors ${
    isActive
      ? 'bg-saffron-50 text-saffron-700'
      : 'text-ink hover:bg-saffron-50'
  }`
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // close on navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // lock body scroll + close on Escape while the menu is open
  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">🥘</span>
          <span className="font-display text-lg font-bold text-ink">
            Bharat<span className="text-saffron-500">Diet</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/meal-planner">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {/* animated 2-bar icon */}
          <span className="relative block h-4 w-6" aria-hidden>
            <span
              className={`absolute left-0 top-0.5 h-0.5 w-6 rounded bg-current transition-transform duration-200 ${
                menuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[13px] h-0.5 w-6 rounded bg-current transition-transform duration-200 ${
                menuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu: backdrop + overlay panel (doesn't push page content) */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[57px] z-40 bg-ink/30 lg:hidden"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-57px)] overflow-y-auto border-b border-line bg-cream px-4 pb-6 pt-2 shadow-lg lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={mobileLinkClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Link to="/meal-planner" className="mt-4 block">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </>
      )}
    </header>
  )
}
