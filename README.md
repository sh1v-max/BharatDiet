# 🥘 BharatDiet

**Personalized Nutrition for Real Indian Food**

A free, no-signup nutrition planner built natively around Indian food, Indian budgets, and Indian regional diversity — not translated from a Western app.

**🔗 Live: [bharat-diet.vercel.app](https://bharat-diet.vercel.app/)**

---

## The Problem

Most calorie and diet apps assume a Western pantry — protein bars, granola, turkey breast — then blame users for not sticking to the plan. Millions of Indians who actually eat roti, dal, rice, sabzi, idli, and curd are left to "translate" generic advice into their own kitchen. Most give up.

BharatDiet starts from the opposite end: an Indian-first food database, region-aware meal generation, and budget as a first-class input.

## Features

| Feature | What it does |
|---|---|
| **Meal Planner** | Generates a complete day of meals (breakfast/lunch/snack/dinner) matched to your calories, protein target, region, diet type, and daily budget — with portions, macros, and estimated cost in ₹ |
| **Protein Gap Analysis** | Tap what you eat on a typical day and see your protein deficit, plus the cheapest foods that close it — ranked by protein-per-rupee |
| **Calorie Calculator** | BMI, BMR (Mifflin-St Jeor), TDEE, and goal-adjusted daily targets with a live macro breakdown |
| **Protein Calculator** | Goal-based protein targets translated into real food ("≈ 4 bowls of dal") |
| **Food Database** | 200+ Indian foods with real serving sizes, macros, and per-serving costs — searchable, filterable by region/diet/category, sortable by protein-per-rupee |

Everything runs client-side. No account, no data collection, no paywall.

## How the Engine Works

1. **Nutrition math** — Mifflin-St Jeor BMR → activity-multiplied TDEE → goal-adjusted calorie target (e.g. −17.5% for weight loss). Protein is set per kg of body weight by goal, fat at 25% of calories, carbs fill the remainder — matching how staple-heavy Indian plates actually flex.
2. **Food pool filtering** — the 200+ item database is filtered by region (North/South/East/West) and diet (veg/eggetarian/non-veg).
3. **Greedy slot allocation** — calories are split 25/35/10/30 across four meals; each slot gets a protein dish + vegetable + staple sized to fill it. Budget acts as a cost penalty in scoring, so ultra-budget plans favour sattu, soy, and eggs without ever producing an empty slot.
4. **Protein boost pass** — compact high-protein items (curd, eggs, soy chunks) are added until the protein target is met.
5. **Calorie reconciliation** — staple portions are resized in half-steps ("2 roti → 2.5 roti") instead of swapping dishes, keeping plans intuitive.

The allocator is verified by **146 combination tests**: every region × diet × budget × goal must produce a complete plan within ±12% of the calorie target, at ≥75% of the protein target, with full diet compliance.

## Tech Stack

- **React 19** + **Vite 6** — SPA, code runs entirely in the browser
- **Tailwind CSS v4** — design tokens (saffron/leaf palette) defined as CSS theme variables
- **React Router 7** — including 200+ programmatically routed food detail pages
- **Context API** — one shared user profile powers every tool (fill the form once, use it everywhere)
- **Vitest** — 164 tests: nutrition formulas pinned to hand-computed reference values, the food dataset validated like code (schema, Atwater consistency, coverage floors), and the allocator's combination matrix

No backend, no state library, no chart library — the macro donut is hand-rolled SVG with a colorblind-validated palette.

## Project Structure

```
src/
  components/       common UI, layout, calculator, meal planner, protein gap
  context/          UserProfileContext — global profile state
  data/             foods.json (203 items), blog posts, FAQs
  hooks/            useNutritionEngine, useMealPlanGenerator, useProteinGap
  pages/            one component per route
  router/           route table
  services/         foodService — data-access layer over the JSON dataset
  utils/            nutritionMath.js, mealAllocator.js — pure, framework-free logic
scripts/            sitemap generator (runs on prebuild)
```

Business logic (`utils/`) is deliberately React-free — it can move to a backend service unchanged.

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm test         # run the full test suite
npm run build    # production build (generates sitemap.xml first)
```

## Documentation

- **[BLUEPRINT.md](BLUEPRINT.md)** — the full product blueprint: market research, strategy, nutrition engine design, UX system, architecture, and roadmap (15 phases)
- **[SKILLS.md](SKILLS.md)** — the skills map used to plan the build

## Roadmap

- Saved plans & meal swapping
- Weekly (7-day) plan view and grocery list export
- State-level regional cuisines (beyond the 4 zones)
- Hindi language support
- AI diet coach grounded in the user's profile and the food database

---

Built as a real product exercise: blueprint first, then a 6-week milestone build — nutrition engine, food database, meal generator, protein gap analysis, landing page, and SEO, in that order.
