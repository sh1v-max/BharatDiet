/*
 * Generates public/sitemap.xml from static routes + food/blog slugs.
 * Runs automatically before every build (npm "prebuild" script).
 * Update BASE_URL when the production domain is finalized.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const BASE_URL = 'https://bharat-diet.vercel.app'

const staticRoutes = [
  '/', '/meal-planner', '/calculators/calories', '/calculators/protein',
  '/protein-gap', '/foods', '/blog', '/about', '/contact', '/faq', '/pricing',
]

const foods = JSON.parse(readFileSync(join(root, 'src/data/foods.json'), 'utf8'))
const postsSource = readFileSync(join(root, 'src/data/posts.js'), 'utf8')
const postSlugs = [...postsSource.matchAll(/slug: '([^']+)'/g)].map((m) => m[1])

const urls = [
  ...staticRoutes,
  ...foods.map((f) => `/foods/${f.id}`),
  ...postSlugs.map((s) => `/blog/${s}`),
]

const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url><loc>${BASE_URL}${u}</loc><lastmod>${today}</lastmod></url>`,
  )
  .join('\n')}
</urlset>
`

mkdirSync(join(root, 'public'), { recursive: true })
writeFileSync(join(root, 'public/sitemap.xml'), xml)
console.log(`sitemap.xml written with ${urls.length} URLs`)
