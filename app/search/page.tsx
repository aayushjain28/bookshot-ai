"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { concepts } from "@/lib/data/concepts";
import { useProgress } from "@/lib/progress";
import { ConceptCard } from "@/components/concept-card";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const { completed } = useProgress();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return concepts;
    return concepts.filter((c) =>
      [c.title, c.summary, c.keyQuestion, c.mentalModel, ...c.domains]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-serif text-3xl">Search</h1>
      <div className="relative mt-6">
        <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search concepts, questions, mental models…"
          className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 outline-none focus:border-foreground/40"
        />
      </div>

      {results.length === 0 ? (
        <p className="mt-10 text-center text-muted">
          No concepts match “{query}”.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((concept) => (
            <ConceptCard
              key={concept.slug}
              concept={concept}
              completed={completed.includes(concept.slug)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
