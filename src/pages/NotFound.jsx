import { Link } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page not found')

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-24 text-center">
      <span className="text-5xl">🍽️</span>
      <h1 className="text-3xl font-bold">This plate is empty.</h1>
      <p className="text-ink-soft">
        The page you're looking for doesn't exist — but your meal plan does.
      </p>
      <Link to="/">
        <Button size="lg">Back to Home</Button>
      </Link>
    </section>
  )
}
