/*
 * Seed blog content (SEO strategy) — structured sections, not markdown,
 * so rendering stays dependency-free.
 */
export const POSTS = [
  {
    slug: 'vegetarian-protein-sources-india',
    title: 'The Best Vegetarian Protein Sources in India, Ranked by Value',
    description:
      'Dal, paneer, soy chunks, curd — which vegetarian protein gives you the most grams per rupee? A practical, no-supplement ranking for Indian kitchens.',
    date: '2026-07-06',
    minutes: 5,
    sections: [
      {
        p: 'Ask any fitness app for vegetarian protein and it says tofu, quinoa, and Greek yogurt. Ask an Indian kitchen and the real answer is sitting in the dal container. The problem was never that Indian vegetarian food lacks protein — it\'s that nobody ranks it by what matters: grams of protein per rupee.',
      },
      {
        h: 'The champion: soy chunks',
        p: 'At roughly 26g of protein per 50g dry serving for about ₹10, soy chunks deliver more protein per rupee than chicken breast. They absorb any masala you cook them in, which makes them the single most underrated muscle-building food in India.',
      },
      {
        h: 'The daily workhorses: dal and chana',
        p: 'A bowl of moong or masoor dal gives about 10g protein for under ₹15. Kala chana and rajma push 12–13g per bowl. One bowl per meal quietly builds a 25–35g protein floor into your day before you add anything else.',
      },
      {
        h: 'The dairy tier: curd, paneer, milk',
        p: 'Curd adds ~5g per bowl plus gut-friendly bacteria; paneer packs 18g per 100g but carries 20g of fat, so treat it as protein with a calorie budget attached. Toned milk at ₹15 a glass with 6.5g protein remains one of the cheapest liquid proteins available.',
      },
      {
        h: 'How to combine them',
        p: 'Cereal and pulse proteins complement each other — dal-chawal and rajma-roti aren\'t just comfort food, they form complete amino-acid profiles. Aim for a protein source in every meal instead of trying to fix the day with one giant dinner. Use our Protein Gap tool to see your exact number, then let the meal planner distribute it across a real Indian day.',
      },
    ],
  },
  {
    slug: 'weight-loss-diet-plan-india',
    title: 'An Indian Weight Loss Diet That Keeps Roti and Rice on the Plate',
    description:
      'You do not need to give up roti, rice, or dal to lose weight. How calorie deficits actually work with everyday Indian food, with a sample day.',
    date: '2026-07-06',
    minutes: 6,
    sections: [
      {
        p: 'The most common Indian weight-loss mistake is dropping roti and rice entirely, surviving a month on salads and soup, and then rebounding. Weight loss runs on one mechanism — a calorie deficit — and that mechanism doesn\'t care whether the calories come from quinoa or chawal.',
      },
      {
        h: 'Your number, not a generic 1200',
        p: 'A sustainable deficit is 15–20% below your maintenance calories (TDEE), not a one-size 1200-calorie crash plan. For most Indian adults that lands between 1600 and 2100 kcal — enough room for three real meals.',
      },
      {
        h: 'Protein is the lever most people miss',
        p: 'In a deficit, protein preserves muscle and keeps you full. Target roughly 1.6–2g per kg of body weight — for a 70kg person that\'s ~120g, which is exactly where dal, curd, soy, eggs, and chicken have to be planned, not left to chance.',
      },
      {
        h: 'What a 1700 kcal day looks like',
        p: 'Besan chilla with curd for breakfast; 2 roti + dal + sabzi + salad for lunch; roasted chana and chaas as a snack; and a lighter dinner of soy chunk curry with 1 roti. Every item is from a normal Indian kitchen, and it clears 100g of protein.',
      },
      {
        h: 'Make it automatic',
        p: 'Decision fatigue kills diets faster than hunger does. Generate a plan matched to your region and budget, keep 80% of it consistent, and let the remaining 20% flex for family dinners and festivals.',
      },
    ],
  },
  {
    slug: 'muscle-gain-diet-india-budget',
    title: 'Muscle Gain on ₹150 a Day: A Realistic Indian Diet',
    description:
      'No whey, no chicken breast obsession — how students and budget-conscious lifters can hit 120g+ protein daily with eggs, soy, dal, and milk.',
    date: '2026-07-06',
    minutes: 5,
    sections: [
      {
        p: 'Fitness influencers make muscle gain sound like a rich man\'s hobby — whey isolate, almond butter, salmon. But the math of muscle is only two numbers: a small calorie surplus and enough protein. Both are achievable on ₹150 a day in most of India.',
      },
      {
        h: 'The budget protein stack',
        p: 'Eggs at ₹7 each (6.3g protein), soy chunks at ₹10 a serving (26g), sattu at ₹8 (8g), moong dal, kala chana, and toned milk. Stack these across a day and 120g of protein costs under ₹100, leaving room for rice, roti, seasonal sabzi, and a banana or two.',
      },
      {
        h: 'A sample training-day plate',
        p: 'Breakfast: 3-egg bhurji with 2 roti. Lunch: rajma chawal with curd. Snack: sattu sharbat and roasted peanuts. Dinner: soy chunk masala with 3 roti. That\'s roughly 2800 kcal and 130g protein — a textbook lean-bulk day.',
      },
      {
        h: 'Surplus discipline',
        p: 'Muscle gain needs only a 10–15% surplus over maintenance. Bigger surpluses don\'t build muscle faster, they build fat you\'ll have to cut later. Calculate your maintenance first; then add, don\'t guess.',
      },
    ],
  },
  {
    slug: 'do-you-really-need-whey-protein',
    title: 'Do You Really Need Whey Protein? An Honest Answer for Indians',
    description:
      'Whey is convenient, not magical. When a supplement is worth the money, when it isn\'t, and what to eat instead — myth-busting for the Indian context.',
    date: '2026-07-06',
    minutes: 4,
    sections: [
      {
        p: 'The supplement industry has convinced a generation that muscle comes from a jar. Here is the boring truth: whey is just a convenient, fast-digesting milk protein. It builds no more muscle than the same grams of protein from food.',
      },
      {
        h: 'The per-gram economics',
        p: 'A scoop of decent whey delivers ~24g protein for ₹70+. The same 24g costs about ₹25–30 from eggs and milk, or under ₹15 from soy chunks. On protein-per-rupee, whole foods win in India almost every time.',
      },
      {
        h: 'When whey actually makes sense',
        p: 'If your target is very high (say 150g+), your schedule leaves no time to cook, or you struggle to eat enough volume, a scoop is a legitimate convenience. That\'s a lifestyle decision, not a nutritional necessity.',
      },
      {
        h: 'The order of operations',
        p: 'First fix your daily protein target, then structure meals around dal, dairy, soy, and eggs. Only after those are consistent should a supplement even enter the conversation. Run your numbers with the protein calculator and see how far real food takes you.',
      },
    ],
  },
]

export const getPostBySlug = (slug) => POSTS.find((p) => p.slug === slug) ?? null
