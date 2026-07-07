import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Button from '../components/common/Button.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { getPostBySlug } from '../data/posts.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  usePageMeta(post?.title ?? 'Article not found', post?.description)

  if (!post) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block">
          <Button variant="secondary">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Blog
          </Button>
        </Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-12">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1 text-sm text-saffron-600 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden /> Blog
      </Link>
      <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-ink-faint">
        {post.date} · {post.minutes} min read
      </p>

      <div className="mt-8 space-y-6">
        {post.sections.map((s, i) => (
          <section key={i}>
            {s.h && <h2 className="mb-2 text-xl font-semibold">{s.h}</h2>}
            <p className="leading-relaxed text-ink-soft">{s.p}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-leaf-50 p-6 text-center">
        <p className="font-medium">
          Turn this into your own plan — free, in under 2 minutes.
        </p>
        <Link to="/meal-planner" className="mt-4 inline-block">
          <Button>
            Build My Meal Plan <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </Link>
      </div>
    </article>
  )
}
