# First Principles University (FPU)

A learning platform that teaches how the world works from first principles — one connected story from the Big Bang to AI. Understanding, not memorization.

## MVP

- **Landing** (`/`) — the pitch and the story arc
- **Home** (`/home`) — continue learning, progress at a glance
- **Curriculum** (`/curriculum`) — all concepts grouped by domain
- **Concept** (`/concepts/[slug]`) — the lesson: key question, mental model, quiz, reflection
- **Progress** (`/progress`) — journey timeline
- **Search** (`/search`) — client-side search over all concepts
- **Profile** (`/profile`) — stats and progress reset

Three concepts are complete (History of Everything, Hunter-Gatherers, Agricultural Revolution); the rest are Coming Soon. Progress is stored in `localStorage` — static data first, no backend.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide

## Develop

```bash
npm install
npm run dev
```

Concept content lives in `lib/data/concepts.ts` as Knowledge Objects (see `lib/types.ts` and `docs/06-data-model.md`).
