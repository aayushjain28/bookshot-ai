import type { Domain, KnowledgeObject } from "@/lib/types";

export const DOMAIN_ORDER: Domain[] = [
  "Universe",
  "Earth",
  "Life",
  "Humans",
  "Civilization",
];

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

  {
    "id": "c-004",
    "slug": "big-bang",
    "title": "Big Bang",
    "status": "complete",
    "domains": [
      "Universe"
    ],
    "summary": "How everything began, 13.8 billion years ago.",
    "whyItMatters": "Everything you have ever seen, touched, or been made of traces back to a single beginning 13.8 billion years ago. Understanding the Big Bang isn't about a distant explosion in the sky — it's about realizing you are living inside the aftermath, in a universe that is still stretching out around you right now.",
    "keyQuestion": "If the universe began from a hot, dense point, what did it expand into?",
    "mentalModel": "The universe isn't expanding into anything — space itself is stretching.",
    "learningObjectives": [
      "Describe the early universe as a hot, dense state rather than an explosion in empty space",
      "Distinguish the stretching of space from objects flying through space",
      "Explain how expansion implies a beginning roughly 13.8 billion years ago"
    ],
    "prerequisites": [
      "history-of-everything"
    ],
    "unlocks": [
      "formation-of-universe"
    ],
    "relationships": [
      {
        "slug": "history-of-everything",
        "description": ""
      },
      {
        "slug": "formation-of-universe",
        "description": ""
      }
    ],
    "resources": [
      {
        "type": "video",
        "title": "The Beginning of Everything – The Big Bang",
        "url": "https://www.youtube.com/watch?v=wNDGgL73ihY"
      },
      {
        "type": "book",
        "title": "A Brief History of Time — Stephen Hawking"
      }
    ],
    "quiz": [
      {
        "question": "Two galaxies are drifting apart. What is actually happening between them?",
        "options": [
          "They are flying through fixed space like debris from a bomb",
          "The space between them is stretching, carrying them apart",
          "An invisible wind is pushing them in opposite directions",
          "They are falling toward the edge of the universe"
        ],
        "answerIndex": 1,
        "explanation": "Galaxies recede because the fabric of space itself expands between them, not because they are moving through a static space."
      },
      {
        "question": "Why is asking 'where did the Big Bang happen?' a misleading question?",
        "options": [
          "Because the location was destroyed by the explosion",
          "Because it happened too far away to observe",
          "Because it happened everywhere — space itself was compact, not a point inside a larger room",
          "Because scientists have simply not found the site yet"
        ],
        "answerIndex": 2,
        "explanation": "There was no 'outside' — all of space was in that dense state, so the Big Bang happened everywhere at once."
      }
    ],
    "reflection": "The atoms in your hand were forged in that same expanding universe. How does it change your sense of scale to know you are not watching cosmic history from the outside, but standing inside it?",
    "completionCriteria": "Read the lesson, pass the quiz, and write a short reflection.",
    "body": [
      {
        "heading": "Not a bang in the usual sense",
        "paragraphs": [
          "When we hear 'Big Bang,' we picture an explosion: a bomb going off in the dark, hurling matter outward into empty space. It's a natural image, and it's almost entirely wrong. An explosion has a center and an edge, and it throws pieces through space that was already there. The Big Bang had neither a center nor an outside. There was no room for it to happen in — the room itself was part of what began.",
          "A better picture is a hot, dense state: everything that would ever exist packed into a condition so compressed that space, time, matter, and energy were all bound up together. Then that state began to expand. Not by flinging things apart, but by the space between everything growing. The name 'Big Bang' stuck partly as a joke from a skeptical astronomer, and it has misled people ever since. What we're really describing is a beginning of expansion, not a detonation."
        ]
      },
      {
        "heading": "Space itself is stretching",
        "paragraphs": [
          "Imagine dots drawn on the surface of a balloon. As you inflate it, every dot moves away from every other dot — not because the dots are crawling across the rubber, but because the rubber between them is stretching. No dot is the center; from any dot's point of view, all the others are fleeing. This is exactly what astronomers see when they look at distant galaxies: the farther away a galaxy is, the faster it recedes, in every direction. The universe has no special center because the stretching is happening everywhere at once.",
          "Run that expansion backwards, like rewinding a film, and everything crowds closer together, hotter and denser, until you reach a single beginning about 13.8 billion years ago. That number isn't a guess — it falls out of measuring how fast space is stretching today. The stretching is still going on around you this instant, silently carrying the galaxies apart. You are not looking at the aftermath of the Big Bang from a safe distance. You are inside it, riding the expansion along with everything else."
        ]
      }
    ]
  },
  {
    "id": "c-005",
    "slug": "formation-of-universe",
    "title": "Formation of the Universe",
    "status": "complete",
    "domains": [
      "Universe"
    ],
    "summary": "How gravity and stars turned a smooth cosmos into galaxies and elements.",
    "whyItMatters": "The carbon in your cells and the iron in your blood did not exist at the beginning of the universe — they were manufactured inside stars that lived and died before the Sun was born. When we say 'we are made of stardust,' it is not poetry, it is chemistry. The story of how the universe built its first structures is the story of how the ingredients for you came to be.",
    "keyQuestion": "Where did the atoms heavier than hydrogen and helium actually come from?",
    "mentalModel": "Stars are the forges where light elements are fused into the stuff of planets and people.",
    "learningObjectives": [
      "Explain how gravity turned a smooth cosmos into stars and galaxies",
      "Describe how fusion inside stars builds heavier elements from lighter ones",
      "Connect the death of early stars to the atoms in your own body"
    ],
    "prerequisites": [
      "big-bang"
    ],
    "unlocks": [
      "formation-of-earth"
    ],
    "relationships": [
      {
        "slug": "big-bang",
        "description": ""
      },
      {
        "slug": "formation-of-earth",
        "description": ""
      }
    ],
    "resources": [
      {
        "type": "book",
        "title": "Origin Story — David Christian"
      }
    ],
    "quiz": [
      {
        "question": "The early universe was almost entirely hydrogen and helium. Where did elements like carbon and iron come from?",
        "options": [
          "They were present from the very first moment of the Big Bang",
          "They were fused inside stars and scattered when those stars died",
          "They formed in the cold empty space between galaxies",
          "They were created by the collision of galaxies"
        ],
        "answerIndex": 1,
        "explanation": "Heavier elements are forged by fusion in stellar cores and dispersed when stars die, seeding later generations of stars and planets."
      },
      {
        "question": "What role did gravity play in a universe that started out nearly smooth?",
        "options": [
          "It kept everything perfectly evenly spread out",
          "It pushed matter apart to create empty voids",
          "It amplified tiny density differences, pulling matter into clumps that became stars",
          "It had no effect until galaxies already existed"
        ],
        "answerIndex": 2,
        "explanation": "Gravity magnified slight unevenness in the early universe, drawing gas together until it was dense and hot enough to ignite as stars."
      }
    ],
    "reflection": "Every heavy atom in your body was cooked inside a star that no longer exists. Does knowing you are literally recycled starlight change how you think about your place in the cosmos?",
    "completionCriteria": "Read the lesson, pass the quiz, and write a short reflection.",
    "body": [
      {
        "heading": "Gravity finds the lumps",
        "paragraphs": [
          "The early universe was astonishingly smooth — a nearly uniform fog of hydrogen and helium, the two lightest elements, with almost nothing else. But 'nearly' is the crucial word. There were faint ripples, regions very slightly denser than their surroundings. Gravity is patient and relentless, and it works on exactly these differences: wherever there is a little more matter, gravity pulls in a little more still, and the gap grows.",
          "Over hundreds of millions of years, these tiny lumps collapsed inward. As gas fell together it grew denser and hotter, until in the cores of the densest clumps the temperature crossed a threshold and hydrogen atoms began to fuse. The first stars ignited, and gravity gathered stars into the swirling cities we call galaxies. A smooth universe had become a structured one — not by adding anything, but by letting gravity sort a uniform cloud into stars and the darkness between them."
        ]
      },
      {
        "heading": "Stars are element factories",
        "paragraphs": [
          "A star is a controlled, long-burning act of fusion. In its core, hydrogen nuclei are crushed together to make helium, and this releases the light and heat that make the star shine. But that is only the beginning. As a massive star ages and its fuel shifts, it fuses helium into carbon, carbon into oxygen, and onward up the ladder, forging heavier and heavier elements — all the way to iron. Each step builds atoms that did not exist in the young universe.",
          "The final act is the most generous. When a massive star exhausts its fuel, it collapses and explodes, flinging its manufactured elements out into space and, in that violent moment, forging even heavier atoms like gold. This enriched debris drifts through the galaxy and becomes the raw material for new stars, new planets, and eventually new life. Our Sun and Earth condensed from gas already seasoned by earlier stellar deaths. That is why 'we are made of stardust' is a literal claim: the calcium in your bones and the oxygen in every breath were manufactured in stars that died before the Sun was born."
        ]
      }
    ]
  },
  {
    "id": "c-006",
    "slug": "formation-of-earth",
    "title": "Formation of Earth",
    "status": "complete",
    "domains": [
      "Earth"
    ],
    "summary": "How stardust accreted into a layered, water-rich planet.",
    "whyItMatters": "Earth is the only place we know of where a rock became warm, wet, and alive. The way our planet formed — its layered interior, its distance from the Sun, its liquid water — is the reason you can breathe and stand and read this. Understanding Earth's birth is understanding the fragile set of accidents that made a habitable world possible.",
    "keyQuestion": "How did a swirling cloud of dust and gas turn into a layered, water-rich planet that could support life?",
    "mentalModel": "Earth is dust that gravity swept into a ball, then sorted heavy-to-center, light-to-surface.",
    "learningObjectives": [
      "Describe accretion as the gradual clumping of dust and rock into planets",
      "Explain how a molten young Earth separated into core, mantle, and crust",
      "Identify why Earth's position and liquid water made it habitable"
    ],
    "prerequisites": [
      "formation-of-universe"
    ],
    "unlocks": [
      "evolution"
    ],
    "relationships": [
      {
        "slug": "formation-of-universe",
        "description": ""
      },
      {
        "slug": "evolution",
        "description": ""
      }
    ],
    "resources": [
      {
        "type": "article",
        "title": "How the Earth formed — Britannica",
        "url": "https://www.britannica.com/place/Earth"
      }
    ],
    "quiz": [
      {
        "question": "Why does Earth have a dense iron core and a lighter rocky crust?",
        "options": [
          "The core and crust formed as separate objects and later joined",
          "When the young Earth was molten, heavy materials sank and light ones rose",
          "The crust was delivered later by comets",
          "Earth's spin flung the heavy material to the surface"
        ],
        "answerIndex": 1,
        "explanation": "A molten early Earth let dense iron sink to the center while lighter rock floated up, a process called differentiation."
      },
      {
        "question": "What makes Earth's distance from the Sun so important for life?",
        "options": [
          "It keeps Earth perfectly dark to protect organisms",
          "It allows water to exist as a liquid rather than only ice or vapor",
          "It blocks all radiation from reaching the surface",
          "It makes Earth the largest planet in the solar system"
        ],
        "answerIndex": 1,
        "explanation": "Earth orbits in a temperature range where water can stay liquid, and liquid water is essential to the chemistry of life as we know it."
      }
    ],
    "reflection": "Earth's habitability rests on a chain of lucky conditions — its distance, its water, its layered structure. When you notice how narrow that window is, how does it shift the way you regard the ground beneath your feet?",
    "completionCriteria": "Read the lesson, pass the quiz, and write a short reflection.",
    "body": [
      {
        "heading": "A planet is swept together",
        "paragraphs": [
          "Around the newborn Sun spun a vast disk of leftover gas and dust — the solar nebula. At first it was almost nothing: microscopic grains drifting in the dark. But grains bump into grains and stick, and small clumps have enough gravity to attract more. Over millions of years these clumps grew into pebbles, then boulders, then bodies the size of mountains, in a slow snowballing process called accretion.",
          "The largest bodies won. Their gravity swept up everything in their orbital path, colliding and merging until a handful of planets remained, each having cleared its own lane around the Sun. Earth was one of these survivors, assembled from countless collisions. The final impacts were so violent, and radioactive heat so intense, that the young Earth was not a solid rock at all but a glowing ball of molten material. That molten beginning set the stage for everything that followed."
        ]
      },
      {
        "heading": "Sorted by weight, blessed by water",
        "paragraphs": [
          "Because early Earth was liquid, its materials were free to move according to weight — like oil and water separating in a jar. The heaviest elements, mostly iron, sank to the center and formed the core. Lighter rock floated upward to become the mantle, and the lightest, thinnest material cooled into the crust we live on. This sorting, called differentiation, gave Earth its layered structure — and the churning iron core generates a magnetic field that shields the surface from harmful solar radiation.",
          "Then there is the matter of position. Earth orbits at a distance where the Sun's warmth is neither so fierce that water boils away nor so faint that it all freezes. In that narrow band, water can exist as a liquid — pooling into oceans, dissolving minerals, and providing the medium in which the intricate chemistry of life could unfold. Delivered by comets and volcanic outgassing and cradled by Earth's temperate orbit, water turned a differentiated rock into a living world. Change the distance, or drain the water, and the story of life never begins."
        ]
      }
    ]
  },
  {
    "id": "c-007",
    "slug": "evolution",
    "title": "Evolution",
    "status": "complete",
    "domains": [
      "Life"
    ],
    "summary": "How variation, selection, and time design life without a designer.",
    "whyItMatters": "The staggering variety of life — the eye, the wing, the human brain — can look so well-designed that it demands a designer. Evolution reveals something stranger and more beautiful: elaborate design can emerge with no one drawing the blueprints. Grasping how this works changes how you see every living thing, including yourself.",
    "keyQuestion": "How can complex, well-fitted living things arise without anyone designing them?",
    "mentalModel": "Evolution is not trying to reach anything — it just keeps what survives.",
    "learningObjectives": [
      "Break evolution into variation, selection, and time",
      "Explain how common descent links all living things to shared ancestors",
      "Correct the idea that evolution aims toward a goal or 'higher' form"
    ],
    "prerequisites": [
      "formation-of-earth"
    ],
    "unlocks": [
      "hunter-gatherers"
    ],
    "relationships": [
      {
        "slug": "formation-of-earth",
        "description": ""
      },
      {
        "slug": "hunter-gatherers",
        "description": ""
      }
    ],
    "resources": [
      {
        "type": "book",
        "title": "The Selfish Gene — Richard Dawkins"
      }
    ],
    "quiz": [
      {
        "question": "Which combination is enough to produce design without a designer?",
        "options": [
          "Effort, intention, and practice",
          "Variation among offspring, selection by survival, and time",
          "A goal, a blueprint, and a builder",
          "Warmth, water, and sunlight alone"
        ],
        "answerIndex": 1,
        "explanation": "When individuals vary, some variations survive and reproduce better than others, and this repeats over long time, design accumulates on its own."
      },
      {
        "question": "Why is it misleading to say evolution is 'trying' to make creatures more advanced?",
        "options": [
          "Because evolution actually makes things simpler over time",
          "Because evolution has no foresight or goal — it only preserves whatever happens to survive now",
          "Because only humans are the intended endpoint",
          "Because evolution stopped long ago"
        ],
        "answerIndex": 1,
        "explanation": "Evolution has no aim; traits persist simply because they helped their bearers survive and reproduce in a particular environment."
      }
    ],
    "reflection": "You are the current tip of an unbroken line of ancestors that survived long enough to reproduce, stretching back billions of years. What does it feel like to see yourself not as a finished design, but as a link still being passed along?",
    "completionCriteria": "Read the lesson, pass the quiz, and write a short reflection.",
    "body": [
      {
        "heading": "Three ingredients, one recipe",
        "paragraphs": [
          "Evolution can sound mysterious, but at its heart it is a simple recipe with only three ingredients. First, variation: offspring are never exact copies of their parents or each other — some are a little faster, a little more camouflaged, a little better at digesting a certain food. Second, selection: the environment is harsh, and not everyone survives to reproduce. The individuals whose particular variations happen to help them live and breed leave more offspring, and those offspring inherit the helpful traits.",
          "The third ingredient is time — vast, almost unimaginable amounts of it. A tiny advantage that helps you leave slightly more offspring, repeated across thousands upon thousands of generations, compounds into dramatic change. There is no planning in any of this, no one choosing which traits to keep. The environment simply lets some variations through and filters others out, and the survivors accumulate. Given enough time, this mindless filtering can build structures as intricate as an eye or a wing."
        ]
      },
      {
        "heading": "No goal, one family",
        "paragraphs": [
          "It is tempting to imagine evolution as a ladder climbing toward better, smarter, more advanced creatures — with humans conveniently at the top. But evolution has no ladder and no top. It has no foresight, no destination, and no preference for complexity. A bacterium perfectly suited to its niche is exactly as 'evolved' as we are. Traits persist only because they helped survival in a specific place and time; change the environment, and yesterday's advantage can become tomorrow's handicap. Evolution isn't reaching toward anything — it just keeps whatever works right now.",
          "The most profound consequence is common descent. If you follow any two living things back far enough — a whale and a mushroom, a fern and a person — their family trees eventually meet at a shared ancestor. All of life is a single, branching family, related by unbroken chains of reproduction reaching back nearly four billion years. This is why the same genetic code runs through every cell on Earth, and why we share so much of our biology with creatures that look nothing like us. You are not separate from the living world; you are one twig on a colossal tree, still growing."
        ]
      }
    ]
  },
  {
    "id": "c-008",
    "slug": "first-cities",
    "title": "First Cities",
    "status": "complete",
    "domains": [
      "Humans"
    ],
    "summary": "How surplus and density turned villages into cities.",
    "whyItMatters": "For most of human history, people lived in small bands and knew everyone they met. The first cities changed the rules of human life entirely — strangers by the thousands living together, feeding specialists who never grew food, inventing rulers and records and rank. Nearly everything about modern life traces back to that experiment in crowding.",
    "keyQuestion": "What made it possible — and worthwhile — for thousands of strangers to live together in one place?",
    "mentalModel": "A city is a machine for coordinating strangers: surplus buys density, density buys specialization.",
    "learningObjectives": [
      "Explain how food surplus enabled dense, non-farming populations",
      "Connect density to specialization, administration, and hierarchy",
      "Describe a city as a technology for coordination and information"
    ],
    "prerequisites": [
      "agricultural-revolution"
    ],
    "unlocks": [
      "writing"
    ],
    "relationships": [
      {
        "slug": "agricultural-revolution",
        "description": ""
      },
      {
        "slug": "writing",
        "description": ""
      }
    ],
    "resources": [
      {
        "type": "book",
        "title": "Sapiens — Yuval Noah Harari"
      }
    ],
    "quiz": [
      {
        "question": "What had to exist before large numbers of people could live in a city without farming?",
        "options": [
          "Written laws enforced by a king",
          "A reliable surplus of food produced by some to feed many",
          "Wheeled vehicles for transport",
          "A common religion shared by all"
        ],
        "answerIndex": 1,
        "explanation": "Only when farmers grew more food than they needed could cities support people who did not farm — priests, potters, soldiers, and scribes."
      },
      {
        "question": "Why did specialists like metalworkers and administrators emerge in cities but not in small foraging bands?",
        "options": [
          "Small bands lacked the intelligence to specialize",
          "Density concentrated enough people and surplus to support full-time non-food roles",
          "Specialists were forced to move to cities by law",
          "Foraging bands had no need for any tools"
        ],
        "answerIndex": 1,
        "explanation": "Packing many people and their surplus into one place made it viable for individuals to spend all their time on a single craft or role."
      }
    ],
    "reflection": "Your daily life depends on thousands of strangers you will never meet — the people who grew your food, built your home, wrote your software. How does it feel to recognize that you are living inside the same coordination machine the first cities invented?",
    "completionCriteria": "Read the lesson, pass the quiz, and write a short reflection.",
    "body": [
      {
        "heading": "Surplus makes crowding possible",
        "paragraphs": [
          "A city seems obvious to us now, but it was once impossible. For a settlement of thousands to exist, someone has to feed everyone who isn't growing food — and for nearly all of human history, almost everyone had to spend their days finding or growing their own meals. The unlock was agricultural surplus: farming methods productive enough that a portion of the population could grow more than it consumed. That extra grain, stored and moved, could feed people who did something other than farm.",
          "Once food no longer chained each person to the fields, human beings could pile together in numbers never seen before. Along the fertile rivers of Mesopotamia and elsewhere, villages swelled into towns and towns into cities. Density itself became a new kind of resource. Never before had so many minds and hands been packed into so small a space, and that concentration would turn out to change what humans were capable of."
        ]
      },
      {
        "heading": "Density breeds specialists — and rulers",
        "paragraphs": [
          "When thousands of people live shoulder to shoulder and the food is handled, something remarkable becomes possible: a person can spend their entire life doing just one thing. A potter can make pots all day, trading them for grain they never grew. A metalworker, a weaver, a healer, a soldier — each can go deep into a single craft because the crowd around them supplies everything else. This specialization made skills sharper and inventions faster than any single self-sufficient farmer could ever manage. The city became a workshop of experts.",
          "But coordinating thousands of strangers is hard. Who stores the grain, and who decides how it's shared? Who settles disputes between people who don't know each other? To manage the flow of food, goods, and labor, cities grew administrators, record-keepers, priests, and rulers — and with them, social hierarchy, taxes, and law. Seen this way, a city is less a pile of buildings than a technology: a machine for gathering, storing, and moving information and resources among people too numerous to know one another. That machine's basic design still runs the world you live in today."
        ]
      }
    ]
  },
  {
    "id": "c-009",
    "slug": "writing",
    "title": "Writing",
    "status": "complete",
    "domains": [
      "Civilization"
    ],
    "summary": "How external memory let knowledge outlive the person.",
    "whyItMatters": "Before writing, everything humans knew had to live inside a human head, and when that person died, their knowledge died with them. Writing broke that limit. It let ideas outlast their thinkers and pile up across centuries — which is the only reason you can learn in an afternoon what took our ancestors millennia to discover.",
    "keyQuestion": "Why was inventing writing such a turning point for what humanity could know and remember?",
    "mentalModel": "Writing is external memory: it lets knowledge outlive the person who had it.",
    "learningObjectives": [
      "Explain writing as memory stored outside the human brain",
      "Trace writing's origins to practical accounting needs",
      "Describe how writing lets knowledge accumulate across generations"
    ],
    "prerequisites": [
      "first-cities"
    ],
    "unlocks": [
      "trade"
    ],
    "relationships": [
      {
        "slug": "first-cities",
        "description": ""
      },
      {
        "slug": "trade",
        "description": ""
      }
    ],
    "resources": [
      {
        "type": "article",
        "title": "History of writing — Britannica",
        "url": "https://www.britannica.com/topic/writing"
      }
    ],
    "quiz": [
      {
        "question": "What did the earliest known writing systems mostly record?",
        "options": [
          "Epic poems and religious myths",
          "Personal letters between friends",
          "Accounts of goods, taxes, and trade",
          "Scientific theories about the stars"
        ],
        "answerIndex": 2,
        "explanation": "Writing began as a bookkeeping tool — tallying grain, livestock, and payments — long before it recorded stories or ideas."
      },
      {
        "question": "In what sense is writing a form of 'external memory'?",
        "options": [
          "It improves the memory of the person who writes",
          "It stores information outside any single brain, so it survives that person's death",
          "It can only hold as much as one person can memorize",
          "It replaces the need for anyone to think"
        ],
        "answerIndex": 1,
        "explanation": "Writing holds knowledge on a durable medium independent of a living mind, so it persists and accumulates beyond any individual lifespan."
      }
    ],
    "reflection": "Almost everything you know was handed to you by people you never met, through writing that outlived them. What would you want to write down so that it outlives you?",
    "completionCriteria": "Read the lesson, pass the quiz, and write a short reflection.",
    "body": [
      {
        "heading": "Memory you can hold in your hand",
        "paragraphs": [
          "Think about the limits of a purely spoken world. Everything a community knew — its history, its laws, its recipes and remedies — had to be held in living memory and passed mouth to ear. Human memory is remarkable, but it is fragile: it fades, it distorts, and when a knowledgeable elder dies, a library dies with them. Whole cultures could only carry as much knowledge as their people could personally remember and reliably retell.",
          "Writing shattered that ceiling. By pressing marks into clay or ink onto a surface, humans found a way to store information outside the brain, on a medium that doesn't forget and doesn't die. A written record can be set down, walked away from, and picked up years later exactly as it was. For the first time, knowing something no longer required a living person to hold it. Memory had become an object you could carry, copy, and keep."
        ]
      },
      {
        "heading": "From tallies to timeless knowledge",
        "paragraphs": [
          "Writing was not invented to compose poetry or philosophy. Its origins are gloriously mundane: accounting. As cities grew and trade thickened, someone needed to keep track of who owed what — how many bushels of grain went into the temple storehouse, how many sheep a merchant delivered, how much tax a household owed. The first written marks were tallies and tokens, a practical fix for a bookkeeping headache too large to hold in one's head.",
          "But a tool for recording quantities turned out to be a tool for recording anything. Once symbols could stand for words and ideas, writing could capture laws, stories, discoveries, and instructions — and hand them intact to people not yet born. This is writing's deepest gift: it lets knowledge accumulate. Each generation no longer starts from scratch but builds on the written inheritance of every generation before. The slow, compounding tower of human understanding — science, literature, history — rests on that humble ability to make memory outlive the person who had it."
        ]
      }
    ]
  },
  {
    "id": "c-010",
    "slug": "trade",
    "title": "Trade",
    "status": "complete",
    "domains": [
      "Civilization"
    ],
    "summary": "How exchange creates wealth without anyone losing.",
    "whyItMatters": "It feels obvious that if someone gains in a deal, someone else must lose — that wealth is a fixed pie to be fought over. Trade quietly defies this intuition: two people can swap goods and both walk away richer, with nothing conjured from nowhere. This single insight underlies the prosperity, and the interconnection, of the entire modern world.",
    "keyQuestion": "How can an exchange leave both sides better off, with no one losing?",
    "mentalModel": "Trade creates wealth by letting each person do what they do best and swap for the rest.",
    "learningObjectives": [
      "Explain how voluntary exchange can benefit both parties",
      "Describe comparative advantage and specialization",
      "Recognize trade networks as pathways for ideas as well as goods"
    ],
    "prerequisites": [
      "writing"
    ],
    "unlocks": [
      "money"
    ],
    "relationships": [
      {
        "slug": "writing",
        "description": ""
      },
      {
        "slug": "money",
        "description": ""
      }
    ],
    "resources": [
      {
        "type": "video",
        "title": "How does the stock market work? — TED-Ed",
        "url": "https://www.youtube.com/watch?v=p7HKvqRI_Bo"
      }
    ],
    "quiz": [
      {
        "question": "Two people voluntarily trade a fish for a basket of grain. How can both end up better off?",
        "options": [
          "One of them must have been tricked",
          "Each values what they receive more than what they gave up",
          "Wealth was secretly transferred from a third party",
          "It is impossible; one always loses"
        ],
        "answerIndex": 1,
        "explanation": "In a voluntary trade each person gives up something they value less for something they value more, so both gain."
      },
      {
        "question": "What is the core idea of comparative advantage?",
        "options": [
          "The strongest nation should produce everything itself",
          "Each party gains by focusing on what it produces relatively best and trading for the rest",
          "Trade only helps when both sides are equally skilled",
          "Specialization always makes one side poorer"
        ],
        "answerIndex": 1,
        "explanation": "When each party specializes in what it can produce most efficiently and trades for the rest, total output rises and everyone can gain."
      }
    ],
    "reflection": "Look around the room and notice how few of the objects near you were made by anyone you know. What does it mean that your comfort depends on a web of trade with strangers across the whole planet?",
    "completionCriteria": "Read the lesson, pass the quiz, and write a short reflection.",
    "body": [
      {
        "heading": "The trade that makes two winners",
        "paragraphs": [
          "There's a stubborn intuition that trade is a tug-of-war: for me to win, you must lose, because we're fighting over a pie of fixed size. Watch an actual trade and this falls apart. Suppose you have caught more fish than you can eat, and I have grown more grain than I can use. I value your fish more than my extra grain, and you value my grain more than your extra fish. We swap — and both of us walk away with something we wanted more than what we gave up. No one was cheated. Value was created out of the exchange itself.",
          "The secret is that value isn't a fixed number stamped on an object; it depends on who holds it and what they need. A surplus of grain is nearly worthless to a farmer drowning in it and precious to a fisher who has none. Trade moves goods from where they're worth little to where they're worth much, and that movement is the creation of wealth. Nothing new was manufactured, yet both parties are richer. This is the quiet miracle that makes markets possible."
        ]
      },
      {
        "heading": "Specialize, then connect",
        "paragraphs": [
          "Trade rewards a second move: specialization. Because people, regions, and nations differ in what they can produce most efficiently, everyone gains when each focuses on what it does relatively best and trades for the rest — the principle of comparative advantage. A region with rich soil grows grain; one with ore mines metal; each produces far more of its specialty than it needs and swaps the surplus. The total amount of stuff in the world goes up, and everyone can end up with more than if they'd tried to make everything themselves.",
          "But trade routes carry more than cargo. When merchants travel to exchange spices, silk, or salt, they also carry languages, inventions, religions, and ideas along the same paths. A technique for making steel, a system of numerals, a new crop, a story — all ride the trade networks alongside the goods. This is why the great trading corridors of history were also the great highways of innovation. Trade doesn't merely make people wealthier; by connecting distant minds, it accelerates how fast humanity learns."
        ]
      }
    ]
  },
  {
    "id": "c-011",
    "slug": "money",
    "title": "Money",
    "status": "complete",
    "domains": [
      "Civilization"
    ],
    "summary": "How a shared fiction became trust you can carry.",
    "whyItMatters": "You hand over a slip of paper or tap a card, and a stranger gives you food, shelter, or a day of their labor. Nothing about the paper is intrinsically valuable — yet the whole world runs on this shared agreement to pretend it is. Money is one of humanity's strangest and most powerful inventions, and understanding it reveals how much of our civilization is built on collective belief.",
    "keyQuestion": "Why does money have value, and what problem was it invented to solve?",
    "mentalModel": "Money is trust made portable — a shared fiction that lets strangers cooperate.",
    "learningObjectives": [
      "Explain the double-coincidence-of-wants problem that money solves",
      "Describe money as a shared agreement rather than intrinsic value",
      "Explain how money stores and moves trust across time and distance"
    ],
    "prerequisites": [
      "trade"
    ],
    "unlocks": [],
    "relationships": [
      {
        "slug": "trade",
        "description": ""
      }
    ],
    "resources": [
      {
        "type": "video",
        "title": "What gives a dollar bill its value? — TED-Ed",
        "url": "https://www.youtube.com/watch?v=XNu5ppFZbHo"
      },
      {
        "type": "book",
        "title": "Sapiens — Yuval Noah Harari"
      }
    ],
    "quiz": [
      {
        "question": "In a world of pure barter, why is trading difficult?",
        "options": [
          "There are not enough goods to trade",
          "You must find someone who has what you want and wants what you have",
          "People are unwilling to cooperate",
          "Goods spoil before they can be exchanged"
        ],
        "answerIndex": 1,
        "explanation": "Barter requires a double coincidence of wants — a match on both sides — which is rare, and money removes that requirement."
      },
      {
        "question": "What ultimately gives a piece of paper money its value?",
        "options": [
          "The physical material it is printed on",
          "A shared, collective agreement to accept it in exchange",
          "The effort spent printing it",
          "Its usefulness as an everyday object"
        ],
        "answerIndex": 1,
        "explanation": "Money works because a community collectively trusts and agrees to accept it, not because the token itself is intrinsically valuable."
      }
    ],
    "reflection": "The value of the money in your pocket rests entirely on a shared belief that others will accept it. Where else in your life does something powerful depend on a fiction that everyone agrees to uphold?",
    "completionCriteria": "Read the lesson, pass the quiz, and write a short reflection.",
    "body": [
      {
        "heading": "The problem money was born to solve",
        "paragraphs": [
          "Imagine a world with no money, only barter. You're a shoemaker who wants bread. You find the baker — but the baker doesn't need shoes; she needs a chicken. So now you must find someone with a chicken who happens to want shoes, trade for the chicken, then carry it back to the baker. Every transaction requires a 'double coincidence of wants': the other person must have exactly what you want and want exactly what you have, at the same moment. Most of the time, that match simply doesn't exist.",
          "Money dissolves this problem in one stroke. If everyone agrees to accept some common token, you no longer need to find a perfect match. You sell your shoes to anyone for money, and hand that money to the baker, who accepts it because she knows she can spend it on her chicken. Money is a universal in-between — an intermediary that turns one difficult, coincidence-dependent trade into two easy ones. It's the lubricant that lets an economy of strangers actually function."
        ]
      },
      {
        "heading": "Trust you can carry",
        "paragraphs": [
          "Here's the unsettling part: the token itself is almost worthless. A banknote is a scrap of paper; a coin is a bit of metal; digital money is a number in a database. None of it can feed or clothe you directly. Money has value only because a whole community shares the belief that it does — that the next person will accept it just as you did. It is, quite literally, a collective fiction, a story so many people believe that it becomes true in its effects. When that shared belief wavers, as in a currency collapse, the money becomes what it always physically was: nearly nothing.",
          "What money really stores and moves is trust. When you accept payment for a day's work, you are trusting that this token will command goods from others later, and elsewhere. Money lets you carry the value of your labor across time — earning today, spending next year — and across distance, exchanging with people you'll never meet and have no reason to trust personally. It packages the confidence that a whole society will honor the token, and hands that confidence to you in portable form. That is why money is best understood not as wealth itself, but as trust made portable — one of the great technologies that let humans cooperate at the scale of civilizations."
        ]
      }
    ]
  }
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
