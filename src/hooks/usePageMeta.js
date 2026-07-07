import { useEffect } from 'react'

const DEFAULT_TITLE = 'BharatDiet — Personalized Nutrition for Real Indian Food'

/* Per-page <title> + meta description without a helmet dependency. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} · BharatDiet` : DEFAULT_TITLE
    if (description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', description)
    }
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title, description])
}
