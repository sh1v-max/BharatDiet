# BharatDiet — Skills Overview

A map of every skill needed to actually build this, organized by category and tied back to the blueprint phases. Use this as a checklist — tick off what you already have, treat the rest as your learning backlog for the 6-week build.

---

## 1. Frontend Engineering (core, used every week)

| Skill | Where it's used | Depth needed |
|---|---|---|
| React (function components, hooks) | Entire app | Solid — `useState`, `useEffect`, `useMemo`, custom hooks |
| React Router | Sitemap/navigation (Phase 7) | Basic-moderate — nested routes, dynamic `:slug` routes for food/blog pages |
| Vite | Project tooling | Basic — config is mostly default |
| Tailwind CSS | Entire UI (Phase 9) | Moderate — utility-first styling, responsive breakpoints, dark mode variants |
| Context API | Global user profile state (Phase 10) | Moderate — provider/consumer pattern, avoiding unnecessary re-renders |
| Custom hooks design | `useNutritionEngine`, `useMealPlanGenerator`, `useProteinGap` | Moderate-advanced — separating logic from UI |
| JavaScript (ES6+) | Everywhere | Solid — array methods (`filter`/`reduce`/`sort`), closures, destructuring |
| Component architecture | Design system (Phase 9), folder structure (Phase 10) | Moderate — presentational vs. container split, composability |
| Charting (donut/bar charts) | Macro breakdown, protein gap bar (Phase 6, 9) | Basic-moderate — a lightweight charting lib (Recharts or similar) or hand-rolled SVG |
| Forms & multi-step UX | Onboarding flow (Phase 7) | Moderate — controlled inputs, step-based state, validation |
| Responsive/mobile-first CSS | Phase 9 mobile rules | Moderate — this persona set is mobile-heavy, so this isn't optional polish |
| Performance basics | Phase 10 scalability, Phase 11 Week 6 | Basic — code-splitting (`React.lazy`), avoiding layout shift, Lighthouse literacy |

**Optional/later:** Redux Toolkit (only if Context strains once AI/tracking features land in Phase 12).

---

## 2. Applied Math / Domain Logic (no ML needed at launch)

| Skill | Where it's used |
|---|---|
| Basic algebra / unit conversion | BMR/TDEE/macro formulas (Phase 3) — kg↔lb, cm↔in, kcal↔grams |
| Reading nutrition science sources | Validating formulas (Mifflin-St Jeor) and protein g/kg targets against real references (not guessing) |
| Constraint-based allocation logic | Meal Plan Generator (Phase 5) — this is algorithmic thinking (greedy selection + tolerance-based reconciliation), not a library you install |
| Data modeling / schema design | Food database structure (Phase 4) |

This phase doesn't require a data-science or ML background — it's deterministic logic, which is why it's callable "no code, only architecture" in the blueprint and buildable by a frontend-only skillset.

---

## 3. Data Handling

| Skill | Where it's used |
|---|---|
| Structuring data in spreadsheets (Google Sheets/Airtable) | Building the 200+ item food DB (Phase 4) before it becomes JSON |
| JSON data modeling | Static food database served to the frontend at launch |
| Data validation scripting | Sanity-checking the food DB (no missing fields, cost outliers) — even a simple Node script counts |
| Basic research/fact-checking | Cross-referencing IFCT 2017 / USDA data so nutrition numbers are trustworthy, not invented |

---

## 4. UI/UX Design

| Skill | Where it's used |
|---|---|
| Design systems thinking | Colors, typography, spacing, components (Phase 9) |
| Color theory + accessibility (WCAG contrast) | Palette selection, colorblind-safe chart encoding |
| Information architecture | Sitemap, nav structure, user flow diagrams (Phase 7) |
| Interaction/UX writing (microcopy) | Headlines, CTA copy, protein-gap tone (Phase 6, 8) — this is a real, distinct skill, not an afterthought |
| Wireframing/prototyping (even on paper or Figma) | Translating Phase 8 landing page spec and Phase 6 UX flow into buildable layouts before coding them |
| Mobile-first responsive design | Phase 9 mobile rules |

*Tooling suggestion: even a lightweight Figma pass on the homepage and onboarding flow before coding will save rework — you don't need to be a professional designer, just need to make layout decisions before writing Tailwind classes.*

---

## 5. Product & Strategy Thinking

| Skill | Where it's used |
|---|---|
| Competitor/market analysis | Phase 0 |
| Persona-driven decision making | Referenced throughout — budget tiers, tone, signup-averse funnel |
| User journey mapping | Phase 1, Phase 7 |
| Prioritization / scoping discipline | Phase 11 roadmap — deciding what's MVP vs. Phase 12 |
| Monetization/pricing strategy | Phase 13 |

These aren't "coding skills" but they're what makes the roadmap decisions defensible — worth explicitly practicing (e.g., writing a one-paragraph justification any time you deviate from the blueprint) rather than treating as soft/optional.

---

## 6. Content & SEO

| Skill | Where it's used |
|---|---|
| SEO fundamentals (meta tags, sitemap.xml, semantic HTML) | Phase 14, Phase 11 Week 6 |
| Keyword-aware content writing | Blog articles, per-food pages (Phase 14) |
| Programmatic content generation (templating, not per-page hand-writing) | Auto-generated `/foods/:slug` and `/plans/:region-:goal` pages — this is a templating skill (build one component, feed it many data rows), not 200 individual writing tasks |

---

## 7. Tooling & Workflow

| Skill | Where it's used |
|---|---|
| Git/GitHub (branching, commits) | Entire build — you're already doing this |
| npm/Vite build tooling | Project setup |
| ESLint/Prettier config | Code quality, Week 1 |
| Basic testing (unit tests for pure functions) | `nutritionMath.js`, `mealAllocator.js` validation (Phase 11 Week 2, 4) — this is the highest-value testing in the whole project since a wrong formula undermines the entire product's trust |
| Browser DevTools (responsive/accessibility audits, Lighthouse) | Phase 11 Week 6 polish |
| Basic analytics setup (e.g., Plausible/GA) | Week 6, informs future SEO/conversion decisions |

---

## 8. Deferred / Not Needed for MVP (Phase 12+ only)

Don't invest time here until the 6-week MVP ships — these are explicitly future-phase:

- Backend framework (Node/Express) + database (Postgres) — only once admin-editable food DB or user accounts are needed
- AI/LLM integration (RAG-style assistant) — Phase 12 AI Diet Coach
- Payment gateway integration (Razorpay/Stripe) — only needed once Phase 13 pricing goes live for real, not for the static pricing page in Week 6
- ML ranking models — Phase 12 AI Meal Suggestions personalization

---

## Skill-to-Week Mapping (quick reference)

| Week | Primary skills exercised |
|---|---|
| 1 | React/Vite/Tailwind setup, design system, Git workflow |
| 2 | JS math/formulas, unit testing, calculator UI, charting |
| 3 | Data modeling, spreadsheet-to-JSON pipeline, table UI (search/sort/filter) |
| 4 | Algorithmic thinking (allocation logic), multi-step forms, hooks architecture |
| 5 | UX flow design, interaction design, homepage copywriting, animation basics |
| 6 | SEO fundamentals, accessibility audit, responsive QA, analytics, content writing |

---

## Honest Gap Check

If you're coming from a frontend/DSA background (which fits your recent work), the areas most worth deliberately practicing *before* Week 1 rather than learning mid-build are:
1. **UX writing / microcopy** — easy to underrate, but Phase 6 and 8 depend on tone as much as layout.
2. **Data modeling discipline** — the food database schema (Phase 4) is the foundation everything else reads from; get it right before Week 3, not during it.
3. **Testing pure functions** — since `nutritionMath.js` and `mealAllocator.js` are the credibility core of the whole product, treat their tests as non-negotiable, not a nice-to-have.

Everything else in this list you'll pick up naturally by building week-to-week off the Phase 11 roadmap.
