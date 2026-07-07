import { Link } from 'react-router-dom'
import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { POSTS } from '../data/posts.js'

export default function Blog() {
  usePageMeta(
    'Blog',
    'Practical Indian nutrition guides — vegetarian protein, budget muscle gain, weight loss with roti and rice, and supplement myth-busting.',
  )

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">The BharatDiet Blog</h1>
        <p className="mx-auto mt-2 max-w-lg text-ink-soft">
          Practical nutrition for Indian kitchens — no fads, no supplements
          pushed, no translation from Western diets.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {POSTS.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <Card className="p-6 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3 text-xs text-ink-faint">
                <span>{post.date}</span>
                <Badge tone="neutral">{post.minutes} min read</Badge>
              </div>
              <h2 className="mt-2 text-xl font-semibold hover:text-saffron-600">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-ink-soft">{post.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
