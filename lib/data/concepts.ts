import type { Domain, KnowledgeObject } from "@/lib/types";

export const DOMAIN_ORDER: Domain[] = [
  "Universe",
  "Earth",
  "Life",
  "Humans",
  "Civilization",
];

function comingSoon(
  id: string,
  slug: string,
  title: string,
  domain: Domain,
  summary: string
): KnowledgeObject {
  return {
    id,
    slug,
    title,
    status: "coming-soon",
    domains: [domain],
    summary,
    whyItMatters: "",
    keyQuestion: "",
    mentalModel: "",
    learningObjectives: [],
    prerequisites: [],
    unlocks: [],
    relationships: [],
    resources: [],
    quiz: [],
    reflection: "",
    completionCriteria: "",
    body: [],
  };
}

export const concepts: KnowledgeObject[] = [
  {
    id: "c-001",
    slug: "history-of-everything",
    title: "History of Everything",
    status: "complete",
    domains: ["Universe"],
    summary: "The story from the Big Bang to modern civilization.",
    whyItMatters:
      "Every other concept in FPU is a chapter of this one story. Seeing the whole arc first gives you a map: when you later study farming or money, you will know exactly where it sits in the 13.8-billion-year timeline.",
    keyQuestion: "How did simple matter become civilization?",
    mentalModel: "Complexity emerges from simple rules over long periods.",
    learningObjectives: [
      "Name the major thresholds between the Big Bang and today",
      "Explain how each threshold enabled the next",
      "Describe why complexity can increase without a designer",
    ],
    prerequisites: [],
    unlocks: ["hunter-gatherers"],
    relationships: [
      {
        slug: "hunter-gatherers",
        description: "The human chapter of this story begins with foragers.",
      },
    ],
    resources: [
      {
        type: "video",
        title: "The History of the Entire World, I Guess",
        url: "https://www.youtube.com/watch?v=xuCn8ux2gbs",
      },
      {
        type: "article",
        title: "Big History Project",
        url: "https://www.bighistoryproject.com",
      },
      { type: "book", title: "Origin Story — David Christian" },
    ],
    quiz: [
      {
        question:
          "What is the best explanation for how the universe became more complex over time?",
        options: [
          "Complexity was present from the very beginning",
          "Simple rules acting over long periods produced new levels of complexity",
          "Complexity appeared suddenly and only once",
          "Complexity requires a central planner",
        ],
        answerIndex: 1,
        explanation:
          "Gravity, chemistry, and evolution are simple rules — given billions of years, they stack simple parts into stars, life, and civilizations.",
      },
      {
        question:
          "Which sequence correctly orders the major thresholds of the story?",
        options: [
          "Life → Stars → Big Bang → Humans",
          "Big Bang → Stars → Earth → Life → Humans → Civilization",
          "Earth → Big Bang → Life → Stars",
          "Humans → Life → Earth → Stars",
        ],
        answerIndex: 1,
        explanation:
          "Each threshold builds on the previous one: no stars without the Big Bang, no life without a planet, no civilization without humans.",
      },
    ],
    reflection:
      "Pick any object near you. Trace its history backwards as far as you can — through factories, farms, life, Earth, stars. Where does the chain stop?",
    completionCriteria:
      "Read the lesson, pass the quiz, and write a short reflection.",
    body: [
      {
        heading: "One story, many chapters",
        paragraphs: [
          "13.8 billion years ago the universe began as something almost featureless: hot, dense, and nearly uniform. Today it contains galaxies, oceans, brains, and cities. Nothing was added from outside. Everything you see is the result of simple ingredients rearranging themselves under simple rules for a very long time.",
          "The story unfolds as a series of thresholds. At each one, existing parts combine under the right conditions to make something new with new capabilities: particles into atoms, atoms into stars, stardust into planets, chemistry into life, brains into language, and language into civilization.",
        ],
      },
      {
        heading: "Why thresholds matter",
        paragraphs: [
          "Each threshold is a prerequisite for the next. Stars had to live and die to forge the carbon and iron in your body. A stable planet had to form before chemistry could become biology. Big brains and language had to evolve before knowledge could accumulate across generations.",
          "This is the central habit of first-principles thinking: when you meet something complex, ask what simpler things it is made of and what rules assembled them.",
        ],
      },
    ],
  },
  {
    id: "c-002",
    slug: "hunter-gatherers",
    title: "Hunter-Gatherers",
    status: "complete",
    domains: ["Humans"],
    summary: "Humans spent over 95% of history as hunter-gatherers.",
    whyItMatters:
      "Our bodies, instincts, and social wiring were shaped in the forager era, not the modern one. Understanding hunter-gatherers explains why sugar tastes good, why we gossip, and why small groups feel natural.",
    keyQuestion: "How did humans survive before agriculture?",
    mentalModel: "Humans evolved for adaptation, not comfort.",
    learningObjectives: [
      "Describe how forager bands found food and shared risk",
      "Explain why mobility and small group size were survival strategies",
      "Connect modern human instincts to forager-era pressures",
    ],
    prerequisites: ["history-of-everything"],
    unlocks: ["agricultural-revolution"],
    relationships: [
      {
        slug: "agricultural-revolution",
        description: "Farming ended the forager era — at a price.",
      },
    ],
    resources: [
      {
        type: "article",
        title: "Hunter-gatherer — Britannica",
        url: "https://www.britannica.com/topic/hunter-gatherer",
      },
      { type: "book", title: "Sapiens — Yuval Noah Harari" },
    ],
    quiz: [
      {
        question:
          "Why did hunter-gatherer bands stay small and mobile?",
        options: [
          "They had not yet invented houses",
          "Wild food in any one area runs out, so moving and staying small kept everyone fed",
          "Large groups were forbidden by custom",
          "They were constantly fleeing predators",
        ],
        answerIndex: 1,
        explanation:
          "Foraging cannot concentrate food the way farming can. Small, mobile bands matched the way wild resources were spread across the landscape.",
      },
      {
        question:
          "What does 'humans evolved for adaptation, not comfort' mean?",
        options: [
          "Early humans disliked comfort",
          "Evolution selected for traits that handled changing conditions, not traits that maximize modern well-being",
          "Humans cannot feel comfortable",
          "Adaptation and comfort are the same thing",
        ],
        answerIndex: 1,
        explanation:
          "Traits like craving calories or fearing strangers helped foragers survive volatility — the same traits can misfire in a world of supermarkets and cities.",
      },
    ],
    reflection:
      "Which of your daily instincts — cravings, fears, social habits — make more sense as forager survival tools than as modern preferences?",
    completionCriteria:
      "Read the lesson, pass the quiz, and write a short reflection.",
    body: [
      {
        heading: "The default human lifestyle",
        paragraphs: [
          "For more than 95% of our species' existence, every human alive was a hunter-gatherer. Bands of a few dozen people moved with the seasons, gathering plants, hunting animals, and carrying everything they owned.",
          "It worked because it was flexible. Foragers held enormous practical knowledge — hundreds of plant species, animal behavior, weather patterns — and when conditions changed, they moved or switched food sources.",
        ],
      },
      {
        heading: "Built for volatility",
        paragraphs: [
          "Sharing was the forager insurance policy: a hunter's kill fed the whole band, because next week the roles might reverse. Egalitarian norms and gossip kept would-be dominators in check.",
          "The pressures of that world — scarce calories, dependence on the group, danger from strangers — wired the instincts we still carry. We are adaptation machines living in an environment our instincts never saw coming.",
        ],
      },
    ],
  },
  {
    id: "c-003",
    slug: "agricultural-revolution",
    title: "Agricultural Revolution",
    status: "complete",
    domains: ["Humans"],
    summary: "Farming enabled food surplus and civilization.",
    whyItMatters:
      "Almost everything we call civilization — cities, writing, money, states — is downstream of one change: humans learned to produce food instead of finding it.",
    keyQuestion: "Why did humans begin farming?",
    mentalModel: "Food surplus enables specialization.",
    learningObjectives: [
      "Explain why farming emerged independently in several regions",
      "Trace the chain from surplus to specialization to cities",
      "Weigh what farming cost individuals against what it enabled societies to do",
    ],
    prerequisites: ["hunter-gatherers"],
    unlocks: [],
    relationships: [
      {
        slug: "hunter-gatherers",
        description: "Farming replaced the forager lifestyle it grew out of.",
      },
    ],
    resources: [
      {
        type: "article",
        title: "Agricultural revolution — Britannica",
        url: "https://www.britannica.com/topic/agricultural-revolution",
      },
      { type: "book", title: "Sapiens — Yuval Noah Harari" },
    ],
    quiz: [
      {
        question: "What did food surplus make possible for the first time?",
        options: [
          "Better-tasting food",
          "People who did not grow food — specialists like potters, priests, and soldiers",
          "The end of hunger",
          "Smaller communities",
        ],
        answerIndex: 1,
        explanation:
          "When one farmer can feed more than one family, everyone else is free to do something other than find food. Specialization is civilization's engine.",
      },
      {
        question:
          "Why did early farmers often live harder lives than the foragers before them?",
        options: [
          "They had less knowledge than foragers",
          "Farming meant more labor, worse diets, and disease from crowding — but it fed more people, so it spread anyway",
          "Farming was imposed by rulers from the start",
          "The climate got worse when farming began",
        ],
        answerIndex: 1,
        explanation:
          "Farming won not by making individuals better off but by supporting far more people per square mile. What spreads is what scales.",
      },
    ],
    reflection:
      "Your job exists because someone else grows your food. Trace your own work back to the surplus that makes it possible.",
    completionCriteria:
      "Read the lesson, pass the quiz, and write a short reflection.",
    body: [
      {
        heading: "The slowest revolution",
        paragraphs: [
          "Around 12,000 years ago, in at least half a dozen regions independently, people began cultivating plants and herding animals. It was not an invention so much as a gradual bargain: tend this patch of wheat, and it yields more than wandering would.",
          "The bargain had hidden costs. Early farmers worked longer hours than foragers, ate narrower diets, and lived packed together with animals and their diseases. But a farmed valley could feed ten times the people a wild one could — and populations that grow don't go back.",
        ],
      },
      {
        heading: "Surplus changes everything",
        paragraphs: [
          "Surplus is the pivot. Once a farmer produces more food than their family eats, other people can spend their days making pots, keeping records, building walls, or ruling. Villages became towns, towns became cities, and specialists invented writing, law, and money to coordinate it all.",
          "Hold onto the mental model: wherever you see specialization — in an economy, a company, a body — look for the surplus that pays for it.",
        ],
      },
    ],
  },

  comingSoon("c-004", "big-bang", "Big Bang", "Universe", "How everything began."),
  comingSoon(
    "c-005",
    "formation-of-universe",
    "Formation of the Universe",
    "Universe",
    "How matter became stars and galaxies."
  ),
  comingSoon(
    "c-006",
    "formation-of-earth",
    "Formation of Earth",
    "Earth",
    "How stardust became our planet."
  ),
  comingSoon("c-007", "evolution", "Evolution", "Life", "How life diversified."),
  comingSoon(
    "c-008",
    "first-cities",
    "First Cities",
    "Humans",
    "How villages became cities."
  ),
  comingSoon(
    "c-009",
    "writing",
    "Writing",
    "Civilization",
    "How memory became external."
  ),
  comingSoon(
    "c-010",
    "trade",
    "Trade",
    "Civilization",
    "How exchange created wealth."
  ),
  comingSoon(
    "c-011",
    "money",
    "Money",
    "Civilization",
    "How trust became portable."
  ),
];

export const completeConcepts = concepts.filter(
  (c) => c.status === "complete"
);

export function getConcept(slug: string): KnowledgeObject | undefined {
  return concepts.find((c) => c.slug === slug);
}

export function conceptsByDomain(): { domain: Domain; items: KnowledgeObject[] }[] {
  return DOMAIN_ORDER.map((domain) => ({
    domain,
    items: concepts.filter((c) => c.domains.includes(domain)),
  })).filter((group) => group.items.length > 0);
}
