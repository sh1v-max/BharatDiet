# BharatDiet — Complete Product Blueprint

**Tagline:** Personalized Nutrition for Real Indian Food
**Alt taglines:** Eat Better With Indian Food · Diet Plans Built For India · Healthy Eating Without Expensive Foods · Smart Nutrition For Everyday Indians

---

## PHASE 0 — Market Research

### Competitor Analysis

| Competitor | Core Features | Strengths | Weaknesses | Pricing | Opportunity for BharatDiet |
|---|---|---|---|---|---|
| **HealthifyMe** | AI coach "Ria", calorie tracker, huge food DB, coach marketplace | Massive Indian food DB, trusted brand, health-report integrations | Expensive coaching tiers, app feels cluttered, upsell-heavy, generic meal plans not budget-aware | ₹800–3000+/mo for coaching | Be simpler, cheaper, budget-first, no forced coach upsell |
| **MyFitnessPal** | Calorie/macro tracker, barcode scanner, huge global DB | Best-in-class logging UX, habit loop, integrations | Food DB is Western-first, Indian dishes poorly estimated, no regional/cultural logic | Free + $19.99/mo premium | Indian-first DB with accurate regional dish-level nutrition |
| **Fittr** | Community-driven fitness coaching, IIFYM philosophy | Strong community, credible coaches, flexible dieting philosophy | Requires paid coach for real value, intimidating for beginners, gym-bro tone | ₹15,000–40,000 for coaching programs | Self-serve, beginner-friendly, no coach dependency |
| **Cult Fit (Cult.fit)** | Gyms, workout classes, some diet content | Strong brand, offline+online hybrid, habit ecosystem | Diet is secondary to fitness classes, subscription lock-in, urban-metro focused | ₹1500–3000/mo | Standalone diet-only focus reaches non-metro & budget users |
| **HealthKart** | Supplement e-commerce + basic nutrition content | Strong supplement catalog, brand trust (HK Vitals, MuscleBlaze) | Pushes supplements over real food, no real personalization engine | Product-based | Position as anti-supplement: "real food over powders" |
| **MacroFactor** | Adaptive TDEE algorithm, macro coaching, data-driven | Best-in-class adaptive algorithm, no ads, precise | Zero Indian food context, subscription-only ($11.99/mo), intimidating for beginners | $11.99/mo | Bring adaptive-TDEE-level rigor but wrap in Indian food simplicity |
| **Cronometer** | Micronutrient-level tracking, scientific rigor | Extremely detailed micronutrient data | Overwhelming for average user, Western food-centric, steep learning curve | Free + $8.99/mo Gold | Offer "just enough" data — calories, protein, cost — not overwhelming micros |

### Key Market Gaps Identified
1. **No app treats "budget" as a first-class input** — existing apps assume protein bars/whey are affordable defaults.
2. **No regional meal logic** — a Punjabi and a Keralite get the same "chicken breast + rice" suggestion.
3. **Coaching-dependency monetization** — value is locked behind expensive human coaches, not the product itself.
4. **Cultural tone mismatch** — gym-bro/clinical tone alienates homemakers, students, beginners.
5. **Protein illiteracy** — most Indians underestimate their protein gap; no competitor makes this the hero feature.

### Product Vision
To become the default nutrition operating system for India — where anyone, regardless of region, budget, or fitness literacy, can generate a scientifically sound, culturally native diet plan in under 2 minutes.

### Product Mission
Replace generic, Western-coded calorie counting with a nutrition engine built natively around Indian food, Indian budgets, and Indian regional diversity.

### Unique Selling Proposition (USP)
**"The only diet planner that knows the difference between a Kerala thali and a Punjabi thali — and what both cost."**

### Positioning Statement
For Indians who want to lose weight, gain muscle, or eat healthier without giving up dal-roti-sabzi or blowing their budget on imported supplements, BharatDiet is a web-based nutrition planner that generates personalized, regional, budget-aware Indian meal plans — unlike MyFitnessPal or HealthifyMe, which bolt Indian food onto a Western framework.

---

## PHASE 1 — Core Product Strategy

### Problem Statement
Indians lack a nutrition tool that reflects how they actually eat, shop, and cook. Existing tools assume a Western pantry (protein bars, granola, avocado) or expensive coaching, leaving most users to manually "translate" generic advice into local food — a translation most give up on.

### Solution Statement
An Indian-food-native calculation and meal-planning engine that takes region, goal, activity, and budget as first-class inputs, and outputs a complete, costed, macro-accurate meal plan built entirely from foods the user already recognizes and can afford.

### User Journey (Happy Path)
1. **Discover** → lands on homepage via search/social ("vegetarian protein sources" / "diet plan India")
2. **Trust** → sees regional meal showcase + protein-gap hook, understands "this is built for me"
3. **Input** → completes a 90-second onboarding form (age, gender, height, weight, region, goal, activity, budget, diet type)
4. **Insight** → sees calculated BMR/TDEE/protein target with plain-language explanation
5. **Plan** → receives a full-day meal plan with costs and macros
6. **Gap** → sees Protein Gap Analysis, told exactly which foods close it
7. **Retain** → saves plan, returns daily/weekly, eventually upgrades to Pro for swaps/tracking

### User Pain Points
- "I don't know how much protein I actually need."
- "Every app tells me to eat oats and eggs whites — I don't even like eggs."
- "Protein powder is expensive, what else can I eat?"
- "I don't know if dal-chawal every day is even healthy."
- "Apps are too complicated, too many settings, feels like a hospital form."

### User Outcomes
- Understands their own calorie/protein numbers in under 2 minutes.
- Gets a meal plan that costs no more than what they already spend.
- Feels emotionally reassured: "I can eat what I already eat and still hit my goals."

### Business Opportunities
- Freemium calculator → Pro meal-plan-generator conversion funnel.
- Programmatic SEO on hundreds of "[food] protein content" and "[region] diet plan" pages.
- Long-term data asset: India's largest structured regional-food nutrition database (licensable to other health apps).
- B2B potential: corporate wellness, dietitian white-label tooling.

### Long-Term Vision
BharatDiet evolves from a calculator into a full nutrition operating system — AI diet coach, grocery planner, and recipe generator — becoming to Indian nutrition what Zerodha is to Indian investing: the trusted, no-nonsense, mass-market default.

---

## PHASE 2 — Regional Indian Nutrition Engine

This is the core differentiator: **the same inputs (goal, calories, protein target) get translated into different meals depending on region.**

### Region Selection (Launch Scope → Expansion)

| Launch Regions | Representative Staple Pattern |
|---|---|
| North India | Wheat roti, rajma/chole, paneer, dairy-heavy |
| South India | Rice, idli/dosa, sambar, curd, coconut |
| East India | Rice, fish, mustard oil, panchphoron |
| West India | Bajra/jowar roti, dal, thepla, dairy, groundnut |

**Future expansion states:** UP, Bihar, Punjab, Haryana, Rajasthan, Gujarat, Maharashtra, Karnataka, Tamil Nadu, Kerala, Telangana, Andhra Pradesh, West Bengal, Odisha, Assam — each becomes a sub-region layer once the 4-zone model is validated.

### Dietary Categories
1. Vegetarian
2. Eggetarian
3. Non-Vegetarian

### User Goals
1. Weight Loss
2. Weight Gain
3. Muscle Gain
4. Fat Loss
5. Maintenance

### Activity Levels

| Level | Description | Multiplier (for TDEE) |
|---|---|---|
| Sedentary | Desk job, no exercise | 1.2 |
| Lightly Active | Light exercise 1–3 days/week | 1.375 |
| Moderately Active | Moderate exercise 3–5 days/week | 1.55 |
| Very Active | Hard exercise 6–7 days/week | 1.725 |
| Athlete | Twice-daily training / physical job + training | 1.9 |

### Budget Levels

| Tier | Approx. Daily Food Budget (₹) | Design Implication |
|---|---|---|
| Ultra Budget | < 100 | Dal, rice, seasonal veg, eggs, soy chunks, curd — no paneer/meat-heavy plans |
| Budget | 100–200 | Adds paneer occasionally, chicken 2–3x/week |
| Standard | 200–350 | Regular paneer/chicken/fish/eggs, fruit variety |
| Premium | 350+ | Fish/meat daily options, whey optional, wider fruit/nut variety |

### How Region × Diet × Goal × Budget Combine
The engine treats these four as **filters applied sequentially** to the food database:
1. Region → narrows to a regional staple food subset (e.g., idli/sambar vs. roti/sabzi).
2. Diet type → removes non-matching foods (veg removes egg/meat/fish).
3. Budget → removes foods above per-serving cost ceiling.
4. Goal/calories/macros → selects portion sizes and food combinations that hit the target macro split.

This is a **constraint-satisfaction filter, not a static template list** — every region×diet×budget combination produces a distinct valid meal set.

---

## PHASE 3 — Nutrition Calculation Engine (Logic Only, No Code)

### BMI (Body Mass Index)
**Formula:** `weight(kg) / height(m)²`
**Purpose:** Quick screening indicator only — displayed for context, never used as the primary driver of the plan (BMI is known to be a poor muscle/fat differentiator). Shown with a plain-language band: Underweight / Normal / Overweight / Obese.

### BMR (Basal Metabolic Rate)
**Formula used:** Mifflin-St Jeor (chosen over Harris-Benedict for better modern accuracy)
- Men: `10×weight(kg) + 6.25×height(cm) − 5×age + 5`
- Women: `10×weight(kg) + 6.25×height(cm) − 5×age − 161`

**Reasoning:** Mifflin-St Jeor has the lowest error margin in validation studies against measured BMR, and is simpler to explain to non-technical users than Katch-McArdle (which requires body-fat % most users don't know).

### TDEE (Total Daily Energy Expenditure)
**Formula:** `BMR × Activity Multiplier` (see table in Phase 2)
This is the user's **maintenance calorie** baseline.

### Goal-Adjusted Calorie Target

| Goal | Adjustment | Reasoning |
|---|---|---|
| Weight Loss | TDEE − 15–20% | Moderate deficit preserves muscle, sustainable long-term vs. aggressive 500+ kcal cuts that cause dropout |
| Fat Loss (lean-focused) | TDEE − 10–15% + higher protein | Smaller deficit + protein ceiling to protect lean mass |
| Maintenance | TDEE ± 0% | — |
| Muscle Gain | TDEE + 10–15% | Lean bulk avoids excess fat gain vs. aggressive +500 surplus |
| Weight Gain (general) | TDEE + 15–20% | For underweight users prioritizing scale movement over leanness |

### Protein Needs

| Goal | Protein Target (g/kg body weight) | Reasoning |
|---|---|---|
| Sedentary/Maintenance | 0.8–1.0 g/kg | RDA baseline |
| Weight Loss/Fat Loss | 1.6–2.0 g/kg | Higher protein preserves muscle in a deficit (well-supported in sports nutrition literature) |
| Muscle Gain | 1.6–2.2 g/kg | Supports protein synthesis during surplus training |
| Weight Gain (general) | 1.2–1.6 g/kg | Balances muscle support without over-indexing like an athlete plan |

### Fat Needs
**Formula:** 20–30% of total daily calories, converted to grams (`kcal × 0.25 / 9`).
**Reasoning:** Fat is calculated as a percentage-of-calories (not per-kg) because it's primarily a hormonal/essential-fat requirement rather than a repair-driven macro like protein.

### Carb Needs
**Formula:** Remaining calories after protein and fat are subtracted, converted to grams (`remaining kcal / 4`).
**Reasoning:** Carbs are the "flex" macro — India's staple-heavy diet (rice/roti) naturally fills this bucket, so it's calculated last rather than fixed, keeping the plan realistic to how Indians actually eat.

### Calculation Flow Diagram
```
Age, Gender, Height, Weight
        ↓
      BMR (Mifflin-St Jeor)
        ↓
  × Activity Multiplier
        ↓
      TDEE (maintenance)
        ↓
  ± Goal Adjustment
        ↓
   Daily Calorie Target
        ↓
 ┌──────────────┬───────────────┬──────────────┐
 Protein (g/kg)   Fat (% cals)   Carbs (remainder)
 ┴──────────────┴───────────────┴──────────────┘
        ↓
   Full Macro Profile → feeds Meal Plan Generator
```

---

## PHASE 4 — Indian Food Database Design

### Database Structure (Conceptual Schema)
Each food item record contains:
- `id`, `name`, `regional_name_aliases` (e.g., "Roti / Chapati / Phulka")
- `category` (Grains, Dal, Vegetable, Dairy, etc.)
- `region_tags[]` (North/South/East/West — many items are multi-region)
- `diet_type` (Veg/Egg/Non-Veg)
- `serving_size` (with common household unit, e.g., "1 medium roti (40g)")
- `calories`, `protein_g`, `carbs_g`, `fat_g`
- `approx_cost_inr` (per serving, updated periodically)
- `budget_tier` (Ultra/Budget/Standard/Premium)
- `tags[]` (e.g., "high-protein", "quick-prep", "no-cook", "street-food")

### Category Breakdown (Representative Samples — full DB target: 200+ items)

**Grains & Roti Variants**
| Item | Serving | Cal | Protein | Carbs | Fat |
|---|---|---|---|---|---|
| Wheat Roti (medium) | 40g | 104 | 3.1g | 22g | 0.4g |
| Bajra Roti | 40g | 97 | 2.7g | 20g | 0.9g |
| Jowar Roti | 40g | 98 | 2.6g | 21g | 0.6g |
| Steamed Rice (1 cup) | 150g | 195 | 4.1g | 43g | 0.4g |
| Brown Rice (1 cup) | 150g | 216 | 5g | 45g | 1.8g |

**Dal & Legumes**
| Item | Serving | Cal | Protein | Carbs | Fat |
|---|---|---|---|---|---|
| Toor Dal (cooked, 1 bowl) | 200g | 170 | 9g | 28g | 3g |
| Moong Dal (cooked) | 200g | 150 | 10g | 25g | 1g |
| Rajma (cooked) | 200g | 220 | 13g | 36g | 2g |
| Chole (cooked) | 200g | 240 | 12g | 38g | 4g |
| Soy Chunks (cooked, ½ cup) | 100g | 100 | 16g | 8g | 1g |

**Dairy**
| Item | Serving | Cal | Protein | Carbs | Fat |
|---|---|---|---|---|---|
| Paneer | 100g | 265 | 18g | 3.4g | 20g |
| Curd (Dahi, 1 bowl) | 150g | 98 | 5.5g | 7g | 5g |
| Milk (Toned, 1 glass) | 250ml | 122 | 6.5g | 12g | 4.5g |
| Buttermilk (Chaas) | 250ml | 40 | 2g | 4g | 1g |

**Eggs / Fish / Chicken / Meat**
| Item | Serving | Cal | Protein | Carbs | Fat |
|---|---|---|---|---|---|
| Boiled Egg | 1 large | 78 | 6.3g | 0.6g | 5.3g |
| Egg Whites (2) | 66g | 34 | 7.2g | 0.5g | 0.1g |
| Chicken Breast (cooked) | 100g | 165 | 31g | 0g | 3.6g |
| Rohu Fish (cooked) | 100g | 150 | 24g | 0g | 5g |
| Mutton (cooked, lean) | 100g | 250 | 26g | 0g | 15g |

**South Indian Foods**
| Item | Serving | Cal | Protein | Carbs | Fat |
|---|---|---|---|---|---|
| Idli (2 pcs) | 80g | 78 | 2.6g | 16g | 0.4g |
| Plain Dosa | 1 medium | 133 | 2.6g | 22g | 3.7g |
| Sambar (1 bowl) | 200g | 110 | 5g | 18g | 2g |
| Upma | 1 bowl | 220 | 5g | 35g | 6g |

**Vegetables & Snacks & Beverages** — similarly structured; full 200+ item catalog to be built in a spreadsheet-first workflow (see Phase 4 data-pipeline note below) covering North Indian sabzis, street foods (bhel, sev puri — flagged high-sodium), and beverages (nimbu paani, lassi, coconut water).

### Data Pipeline Recommendation
Build the initial 200+ item database in a structured spreadsheet (Google Sheets/Airtable) with the schema above, validated against **IFCT 2017 (Indian Food Composition Tables)** and USDA data for cross-checks, then import to the production database. This avoids hand-coding nutrition data and gives a reviewable source of truth non-engineers (nutritionist consultants) can edit.

---

## PHASE 5 — Meal Plan Generation Engine

### Inputs
Age, Gender, Height, Weight, Region, Goal, Activity Level, Budget, Dietary Preference

### Outputs
Daily Calories, Protein Target, Full Meal Plan (breakfast/lunch/snack/dinner), Approximate Daily Cost, Macro Breakdown (chart)

### Generation Logic — Step by Step
1. **Compute targets** — Run Phase 3 engine → Daily Calories, Protein/Fat/Carb grams.
2. **Filter food pool** — From the full food DB, filter by `region_tags` (region), `diet_type` (preference), `budget_tier` (≤ user's selected tier).
3. **Allocate meal slots** — Split daily calories across 4 slots using an Indian eating-pattern ratio: Breakfast 25% · Lunch 35% · Snack 10% · Dinner 30%.
4. **Slot-fill greedily with macro-aware selection** — For each slot, select a staple (roti/rice/idli) + a protein source (dal/paneer/egg/chicken) + a vegetable, choosing portion counts that bring the slot's protein/calorie contribution closest to its allocated share, using a bounded search (not exhaustive) over the pre-filtered pool.
5. **Global macro reconciliation pass** — After all 4 slots are filled, sum actual totals vs. targets; adjust portion sizes (e.g., "1.5 roti" → "2 roti") within ±5% tolerance rather than swapping foods, to keep the plan intuitive.
6. **Cost aggregation** — Sum `approx_cost_inr` across all selected servings for a daily estimate.
7. **Render output** — Present as a meal-by-meal card UI with a macro donut chart and a cost badge.

### Why Greedy-with-Reconciliation (not ML) at Launch
A rules-based greedy allocator is fully explainable ("why did I get 2 roti and not 3?"), fast (no training data needed), and good enough at this problem size (~200 foods × 4 regions × 3 diets). ML-based generation is reserved for Phase 12 (AI features) once real usage data exists to train on.

---

## PHASE 6 — Protein Gap System

### Feature: "Protein Gap Analysis"

### What the User Sees
1. **Recommended Protein** — from Phase 3 engine, in grams/day, with a plain-language anchor ("Roughly 4 palm-sized portions of protein-rich food").
2. **Estimated Current Intake** — derived from a lightweight self-report ("What does a typical day of eating look like?" — quick multi-select of common meals) rather than forcing detailed logging.
3. **Deficit** — shown as a large, honest number with a non-alarming tone: *"You're getting about 55g, and your body could use closer to 90g."*
4. **Foods To Close The Gap** — a ranked list of region/budget-appropriate protein sources sorted by protein-per-rupee and protein-per-100kcal, e.g., "Add 1 bowl of curd + a handful of soy chunks → +18g protein for ~₹15."

### UX Flow
```
Home → "Check My Protein Gap" CTA
   ↓
Quick Profile (reuses onboarding data if already given)
   ↓
Typical-Day Meal Picker (visual, tap-to-select, no typing)
   ↓
Results Screen:
  [Recommended] vs [Estimated Current] — animated bar comparison
  Deficit callout (color-coded: green=met, amber=small gap, red=large gap)
  "Close the Gap" food suggestion cards (swap-friendly, budget-tagged)
   ↓
CTA: "Generate My Full Meal Plan" → funnels into Phase 5 engine
```
**Design intent:** this is the emotional "aha" moment of the product — it should be shareable (a results card users might screenshot) and drive directly into the meal-plan generator as the natural next step.

---

## PHASE 7 — Website Information Architecture

### Sitemap
```
/                      Home
/meal-planner          Meal Planner (core tool)
/calculators/calories  Calorie Calculator
/calculators/protein   Protein Calculator
/foods                 Food Database (browsable/searchable)
/foods/:slug           Individual food detail page (SEO)
/blog                  Blog (SEO content hub)
/blog/:slug            Article page
/about                 About
/contact               Contact
/faq                   FAQ
/pricing               Pricing (Free/Pro/Premium)
```

### Navigation Structure
- **Primary nav (desktop):** Logo | Meal Planner | Calculators ▾ | Food Database | Blog | Pricing | [Get Started →]
- **Mobile nav:** Hamburger → same items, "Get Started" as sticky bottom CTA.

### User Flow (Core Conversion Path)
```
Landing Page → Protein Gap teaser or Calculator CTA
   → Quick Calculator (no signup required, instant gratification)
   → Result shown → "Save this / get full meal plan" (soft signup gate)
   → Onboarding form (region/goal/budget/diet)
   → Full Meal Plan generated
   → Dashboard (saved plans, protein gap, upgrade prompts)
```
**Principle:** never gate the *first* calculation behind signup — Indian users are signup-averse; earn trust with free value first (this mirrors why HealthifyMe's free BMI tool outperforms its paid funnel entry).

### Mobile vs Desktop Flow
- **Mobile-first:** onboarding form is single-question-per-screen (typeform-style) to reduce form fatigue on small screens — this is the primary device for the target personas (students, budget users).
- **Desktop:** same form can be condensed to a single multi-field page with a live sidebar preview of calculated targets, since desktop users tend to be more deliberate/exploratory.

---

## PHASE 8 — World-Class Landing Page

### Hero Section
- **Headline:** "Personalized Nutrition for Real Indian Food"
- **Sub-headline:** "Stop counting avocados. Get a diet plan built around roti, dal, and rice — for your body, your region, and your budget."
- **CTA:** "Calculate My Free Diet Plan →" (primary) · "See a Sample Plan" (secondary, low-commitment)
- **UX reasoning:** Two CTAs split cold traffic (wants a sample first) from warm/intent traffic (ready to input data) — a single hard CTA loses the browsers.

### Problem Section
- **Headline:** "Every calorie app assumes you eat granola."
- **Body:** Side-by-side visual: a Western app's suggestion (protein bar, oats, almond milk) vs. what a real Indian plate looks like (roti, sabzi, dal) with a strike-through/contrast treatment.
- **CTA reasoning:** No CTA here — this section's job is emotional recognition ("that's literally my problem"), not conversion.

### Protein Deficiency Section
- **Headline:** "Most Indians are 30–40g short on protein — every single day."
- **Sub-headline:** "And it's not because Indian food lacks protein. It's because no one's shown you how to combine it."
- **Interactive element:** mini protein-gap widget embedded inline (2 taps: pick your typical breakfast + lunch → see an instant estimated gap).
- **CTA:** "Find My Protein Gap →"

### Regional Meal Showcase
- **Headline:** "Built for how India actually eats."
- **Layout:** 4-tab or 4-card interactive showcase (North/South/East/West), each showing a sample day's plate with calories/protein badges.
- **UX reasoning:** Region-switching interactivity is the single highest-leverage trust signal — it visually proves "this isn't a generic template" in 3 seconds.

### Feature Section
- **Headline:** "Everything you need. Nothing you don't."
- **Grid of 4–6 features:** Regional Meal Plans · Protein Gap Analysis · Budget-Aware Suggestions · Calorie & Macro Calculators · Real Food Database · (Pro) Progress Tracking.

### Interactive Calculator Preview
- Embedded live calculator (age/height/weight/goal sliders) updating a results card in real time, no page navigation — reduces friction to the "aha" moment to zero clicks past the homepage.

### Social Proof / Testimonials
- **Headline:** "Real people, real thalis."
- Testimonial cards with persona-labeled quotes (Student · Working Professional · Homemaker) rather than generic avatars — reinforces persona-based trust.

### FAQ
Covers: "Is this only for weight loss?" / "Do I need to buy supplements?" / "Does it work for [region]?" / "Is my data private?" / "Is it really free?"

### Final CTA
- **Headline:** "Your next roti can already fit your goals."
- **CTA:** "Build My Free Plan →"
- **UX reasoning:** closing CTA references the hero's food-first framing to bookend the page narrative.

---

## PHASE 9 — UI/UX Design System

### Colors
A warm, trustworthy, non-clinical palette — avoiding both "gym red/black" and "hospital blue/white":

| Role | Color | Notes |
|---|---|---|
| Primary | Turmeric/Saffron Orange (#E8873A-ish) | Warm, Indian, energetic without being aggressive |
| Secondary | Deep Green (#2F6B4F-ish) | "Fresh/healthy," pairs with turmeric like a thali |
| Neutral background | Warm off-white (#FAF7F2) | Softer than clinical pure white |
| Text | Charcoal (#1F2321) | Not pure black — softer contrast |
| Success/Gap-met | Green | |
| Warning/Gap-small | Amber | |
| Alert/Gap-large | Terracotta red (not harsh red) | Keeps alerts non-alarming |

*(Exact hex values and accessible contrast pairs to be finalized using the project's dataviz/design skill palette validator before implementation.)*

### Typography
- **Headings:** A rounded-but-confident sans-serif (e.g., Poppins/Sora-class) — friendly, not corporate.
- **Body:** A highly legible sans-serif (e.g., Inter/Manrope-class) for data-dense screens (calculators, food tables).
- **Numerals:** Tabular figures for all calorie/macro numbers so cards don't jitter in width.

### Spacing & Layout Grid
- 8px base spacing unit; 12-column grid on desktop, 4-column on mobile.
- Generous whitespace around calculator results — numbers should feel like the hero of the screen, not crowded.

### Components
- **Buttons:** Primary (filled saffron), Secondary (outline), Ghost (text-only for tertiary actions).
- **Cards:** Meal cards with a consistent anatomy — food icon, name, portion, macro mini-badges, cost tag.
- **Forms/Inputs:** Large touch targets (min 44px), one-question-per-screen pattern for onboarding, inline validation.
- **Tables:** Food database table — sticky header, sortable by protein/calories/cost, zebra striping for scanability.
- **Charts:** Macro donut chart (protein/carb/fat), protein-gap horizontal bar comparison — following accessible categorical color rules (see dataviz skill).

### Mobile Design Rules
- Single-column layouts below 768px, sticky primary CTA at bottom, typeform-style step forms, thumb-zone-optimized button placement.

### Accessibility Guidelines
- WCAG AA minimum contrast on all text/background pairs (both light and dark mode).
- All charts carry a non-color-dependent indicator (icon/label) alongside color coding for colorblind users.
- Full keyboard navigability on calculators and forms; ARIA labels on all icon-only buttons.

---

## PHASE 10 — Frontend Architecture

**Stack:** React + Vite + JavaScript + React Router + Tailwind CSS + Context API (Redux Toolkit optional, only if state complexity grows past Context's comfort zone — e.g., once tracking/history features in Phase 12 land).

### Folder Structure
```
src/
  assets/                 icons, illustrations, region imagery
  components/
    common/                Button, Card, Input, Modal, Badge, Chart wrappers
    layout/                 Navbar, Footer, PageContainer
    calculator/             CalorieCalculator, ProteinCalculator, sliders/inputs
    mealPlanner/            MealPlanCard, MealSlot, MacroDonut, CostBadge
    proteinGap/             GapComparisonBar, TypicalDayPicker
    foodDatabase/           FoodTable, FoodDetailCard, FoodSearchBar
  pages/                   Home, MealPlanner, Calculators, FoodDatabase, Blog, About, Contact, FAQ, Pricing
  context/                 UserProfileContext, ThemeContext
  hooks/                   useNutritionEngine, useMealPlanGenerator, useDebounce
  data/                    foodDatabase.json (or fetched from backend), regionConfig.js
  utils/                   nutritionMath.js (BMR/TDEE/macro formulas), mealAllocator.js, currencyFormat.js
  services/                api/ (if/when backend exists)
  router/                  routes.jsx
  App.jsx
  main.jsx
```

### Component Structure Philosophy
- **Presentational vs. container split:** `MealPlanCard` (presentational, prop-driven) vs. `MealPlannerPage` (container, owns generation logic via `useMealPlanGenerator` hook).
- **Small, composable primitives** in `components/common` reused across calculators, food tables, and meal cards to keep visual consistency without duplicating styles.

### Hooks
- `useNutritionEngine(profile)` → returns BMR/TDEE/macro targets (Phase 3 logic).
- `useMealPlanGenerator(profile, targets)` → returns the generated daily plan (Phase 5 logic).
- `useProteinGap(profile, typicalDaySelections)` → returns Phase 6 gap analysis.

### State Management
- **Context API** holds the user's profile (age/gender/height/weight/region/goal/activity/budget/diet) globally, since nearly every page/tool reads from it.
- **Local component state** for transient UI (form step index, modal open/close).
- **Redux Toolkit** deferred until Phase 12 AI features introduce persistent history/chat state that benefits from normalized store + devtools.

### Data Flow
```
User Input (forms/sliders)
   → UserProfileContext (global)
       → useNutritionEngine (derives targets)
           → useMealPlanGenerator (derives plan from targets + food data)
               → Presentational components render plan/cards/charts
```

### API Layer
At launch, the food database can ship as a static JSON bundle (fast, no backend needed for MVP). A `services/api/` abstraction layer should still wrap all data access from day one (`getFoods()`, `getFoodBySlug()`) so swapping to a real backend later (Phase 11+) requires no component changes — only the service implementation changes.

### Scalability Strategy
- Static JSON → lightweight backend (Node/Express + Postgres) once food DB needs admin editing or user accounts/history are introduced.
- Code-split routes (`React.lazy`) for Food Database and Blog, which will grow largest.
- Design the food filtering logic (region/diet/budget) as pure functions in `utils/`, independent of React, so they're portable to a backend service later without rewriting.

---

## PHASE 11 — Development Roadmap (6 Weeks)

### Week 1 — Foundation
- **Goals:** Project setup, design system, core architecture.
- **Deliverables:** Vite+React+Tailwind scaffold, folder structure, color/type tokens, routing skeleton.
- **Features:** None user-facing yet.
- **UI Tasks:** Build common components (Button, Card, Input, Badge).
- **Technical Tasks:** Set up Context API skeleton, ESLint/Prettier, basic CI.
- **Testing Tasks:** Component smoke tests for common components.

### Week 2 — Nutrition Calculation Engine
- **Goals:** Ship working calorie/protein calculators.
- **Deliverables:** `/calculators/calories`, `/calculators/protein` pages live.
- **Features:** BMI/BMR/TDEE/macro calculation (Phase 3 logic) as pure utility functions + `useNutritionEngine`.
- **UI Tasks:** Calculator forms, results cards, macro donut chart.
- **Technical Tasks:** Implement `nutritionMath.js`, unit tests for formulas against known reference values.
- **Testing Tasks:** Validate BMR/TDEE outputs against manual calculations for edge-case ages/weights.

### Week 3 — Food Database
- **Goals:** Ship browsable, searchable food database.
- **Deliverables:** `/foods` and `/foods/:slug` pages; initial 200+ item JSON dataset.
- **Features:** Search, filter by category/region/diet, sortable table.
- **UI Tasks:** FoodTable, FoodDetailCard, FoodSearchBar.
- **Technical Tasks:** Finalize food data schema, import curated spreadsheet data into JSON.
- **Testing Tasks:** Data validation script (no missing macro fields, cost sanity checks).

### Week 4 — Meal Plan Generator
- **Goals:** Ship the core differentiator feature.
- **Deliverables:** `/meal-planner` fully functional end-to-end.
- **Features:** Region/diet/budget/goal onboarding form → generated daily meal plan with cost + macros.
- **UI Tasks:** Onboarding step-form, MealPlanCard, MealSlot components.
- **Technical Tasks:** Implement `mealAllocator.js` (Phase 5 greedy allocation logic), `useMealPlanGenerator` hook.
- **Testing Tasks:** Test all region×diet×budget combinations produce valid, non-empty plans within macro tolerance.

### Week 5 — Protein Gap + Landing Page
- **Goals:** Ship the emotional hook feature and the marketing homepage.
- **Deliverables:** Protein Gap Analysis feature; polished, animated homepage (Phase 8 spec).
- **Features:** Typical-day picker, gap comparison visualization, food suggestions to close gap.
- **UI Tasks:** GapComparisonBar, TypicalDayPicker, full hero/problem/showcase/FAQ homepage sections.
- **Technical Tasks:** `useProteinGap` hook, homepage interactive calculator preview wiring.
- **Testing Tasks:** Cross-device responsive QA on homepage; gap-calculation edge cases (zero intake, already-sufficient intake).

### Week 6 — Polish, SEO, Launch Prep
- **Goals:** Production-ready polish and discoverability.
- **Deliverables:** Blog scaffold with 3–5 seed articles, FAQ/About/Contact pages, SEO meta tags, accessibility pass.
- **Features:** Pricing page (Free/Pro static — no payment integration required at MVP), FAQ.
- **UI Tasks:** Final responsive/accessibility QA across all pages, dark mode pass if included.
- **Technical Tasks:** Meta tags/OpenGraph, sitemap.xml, basic analytics wiring, performance pass (Lighthouse).
- **Testing Tasks:** Full end-to-end manual QA of the core conversion path (Phase 7 user flow); cross-browser check.

---

## PHASE 12 — Future AI Features

### AI Diet Coach
A conversational layer over the existing nutrition engine — users ask "Can I swap paneer for something cheaper this week?" and get a response grounded in their actual profile + the food database (not a generic LLM answer), implemented as a retrieval-augmented assistant over BharatDiet's own structured data.

### AI Nutrition Assistant
Proactive, not just reactive — analyzes a user's logged meals over time (once tracking exists) and surfaces patterns: "You've hit your protein target 2 of the last 7 days — here's why."

### AI Meal Suggestions
Upgrades the Phase 5 greedy allocator with a learned ranking model trained on which suggested meals users actually keep vs. swap — over time, suggestions personalize to individual taste, not just macro/budget constraints.

### AI Grocery Planner
Converts a saved weekly meal plan into a consolidated shopping list, grouped by grocery category, with estimated total weekly cost — a natural extension once meal plans persist across days.

### AI Recipe Generator
Given a set of foods the user already has (or a regional dish they want to make protein-richer), generates a simple recipe with the macro breakdown baked in — bridging "what to eat" with "how to cook it."

### AI Habit Coach
Lightweight behavioral nudges (not clinical) — streaks for logging, gentle reminders framed around the user's stated goal, celebrating consistency over perfection to avoid the guilt-driven tone that causes fitness-app churn.

**Common thread:** every AI feature is scoped to *augment* the deterministic nutrition engine (explainable, trustworthy) rather than replace it with opaque generation — this preserves the "trustworthy, not gym-bro" brand feel even as AI features expand.

---

## PHASE 13 — Monetization Strategy

| Tier | Price | Features |
|---|---|---|
| **Free** | ₹0 | Calorie/Protein calculators, 1 meal plan generation per session (not saved), Food Database browsing, Protein Gap check |
| **Pro** | ₹149/mo or ₹999/yr | Saved & unlimited meal plan regeneration, meal swapping, weekly plan history, grocery list export |
| **Premium** | ₹399/mo or ₹2999/yr | Everything in Pro + AI Diet Coach chat, progress tracking dashboard, priority new-feature access |

### Revenue Model
Primary: subscription (Pro/Premium). Secondary (future): affiliate commissions on genuinely recommended budget-friendly grocery/protein sources (transparently disclosed, never supplement-first — protects the anti-supplement brand positioning). Tertiary (future): B2B licensing of the food database/API to other Indian health apps.

### Conversion Strategy
- Free tier is generous enough to build trust and virality (shareable Protein Gap results) — monetization gate sits at *persistence and iteration* (saving/swapping plans), not at the core "aha" moment.
- Annual pricing framed in per-month terms (₹83/mo billed yearly) to reduce sticker shock, standard SaaS practice.
- Upgrade prompts triggered contextually — e.g., after a user regenerates the free plan 2–3 times in a session ("Want to save this and tweak it anytime? Go Pro").

---

## PHASE 14 — SEO Strategy

### Target Keywords (Seed List)
Indian diet plan · vegetarian protein sources · muscle gain diet India · weight loss diet India · protein rich Indian foods · calorie calculator India · high protein Indian breakfast · budget diet plan India · North Indian diet plan · South Indian diet plan for weight loss

### Content Strategy
- **Pillar pages:** long-form, comprehensive guides ("The Complete Guide to Vegetarian Protein in India") that rank broadly and internally link to calculators/tools.
- **Tool pages as landing pages:** `/calculators/protein` and `/meal-planner` are themselves optimized for high-intent transactional queries ("protein calculator India").

### Blog Strategy
Seed article themes: regional diet guides (per Phase 2 zones), goal-based guides (weight loss/muscle gain on a budget), myth-busting ("Do you really need whey protein?"), food-specific deep dives (feeds directly into programmatic SEO below).

### Programmatic SEO Opportunities
- **Per-food pages** (`/foods/paneer`, `/foods/rajma`) — auto-generated from the 200+ item database, each targeting "[food] protein content" / "[food] calories" long-tail searches at near-zero content cost.
- **Per-region × goal combination pages** (`/plans/south-indian-weight-loss-diet`) — generated from the Phase 2 engine's combinatorial structure, each targeting a specific high-intent long-tail query.
- This turns the product's own data model into an SEO moat — competitors without a structured regional food database cannot replicate this at the same scale or cost.

---

## PHASE 15 — Portfolio & Resume Impact

### Why Recruiters Will Like This Project
It's a *localized, non-generic* product idea — not another to-do app or clone. It demonstrates the ability to identify a real, culturally-specific problem and reason about a full product solution, which stands out sharply in a portfolio full of templated projects.

### Frontend Skills Demonstrated
- Complex state/derived-state management (profile → calculated targets → generated plan) via Context + custom hooks.
- Data-driven UI (filtering/sorting a structured dataset, rendering charts) — directly relevant to real-world dashboard/data-product roles.
- Design system thinking (component library, accessible color/typography system) rather than ad hoc styling.
- Performance-conscious architecture (code-splitting, static-data-first approach before premature backend complexity).

### Product-Thinking Skills Demonstrated
- Competitor analysis and positioning — shows commercial awareness beyond "I can code this."
- Persona-driven design decisions traceable through the whole document (e.g., budget tiers, protein gap tone, signup-averse UX).
- A monetization and SEO strategy — signals founder-level thinking, valuable for startup-track roles.

### Scalability Concepts Demonstrated
- Clean separation between pure business logic (`utils/nutritionMath.js`, `mealAllocator.js`) and UI — portable to a backend without rewrite.
- A defined migration path from static JSON to a real backend, showing awareness of MVP-vs-scale tradeoffs rather than over-engineering day one.
- A phased roadmap (6-week MVP → AI features later) showing realistic scoping discipline, a skill many junior portfolios visibly lack.

---

*End of blueprint. This document is complete enough that development can begin directly from Phase 11's Week 1 tasks.*
