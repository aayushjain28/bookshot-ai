import type { Goal } from "@/lib/types";

export const goals: Goal[] = [
  {
    id: "raise-funds",
    title: "Raise funds for my startup",
    description:
      "Understand how the world works around money — its history, markets, governments — and master the finance side of startups: valuation, equity, VC returns, IPOs.",
    tracks: ["money-and-economics", "startup-finance", "markets-and-investing", "history-and-wars"],
  },
  {
    id: "build-ai-hardware",
    title: "Build an AI meeting-room product",
    description:
      "A Granola-like hardware device in every meeting room: detects who is present by voice and delivers the notes. Needs systems, AI, and hardware fundamentals.",
    tracks: ["code-and-systems", "machines-and-manufacturing"],
  },
  {
    id: "get-fit",
    title: "Get fit",
    description:
      "Decode the math of food — carbs, sodium, calories — understand what is genuinely good or bad for the body and why, then train accordingly.",
    tracks: ["food-and-fitness"],
  },
  {
    id: "compose-song",
    title: "Write and compose a song",
    description:
      "From what music is at first principles — rhythm, harmony, why chords work — to writing, composing, and playing an original song on guitar.",
    tracks: ["music-film-and-creativity"],
  },
  {
    id: "decode-machine",
    title: "Decode an automatic machine",
    description:
      "Understand a machine end to end: raw materials, parts, assembly lines, mechanics, electricity, and the automation that makes it run on its own.",
    tracks: ["machines-and-manufacturing", "code-and-systems"],
  },
  {
    id: "make-ai-film",
    title: "Make a small AI-powered film",
    description:
      "Learn the ingredients of a film — story, cinematography, editing — and how great films get made, then produce a short one with AI tools.",
    tracks: ["music-film-and-creativity", "code-and-systems"],
  },
];
