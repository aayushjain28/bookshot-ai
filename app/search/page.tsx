"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { concepts } from "@/lib/data/concepts";
import { dailySequence } from "@/lib/data/tracks";
import { useProgress } from "@/lib/progress";
import { useWatched } from "@/lib/watched";
import { ConceptCard } from "@/components/concept-card";
import { EpisodeRow } from "@/components/episode-row";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const { completed } = useProgress();
  const { watched, toggleWatched } = useWatched();

  const q = query.trim().toLowerCase();

  const conceptResults = useMemo(() => {
    if (!q) return concepts;
    return concepts.filter((c) =>
      [c.title, c.summary, c.keyQuestion, c.mentalModel, ...c.domains]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [q]);

  const episodeResults = useMemo(() => {
    if (!q) return [];
    return dailySequence.filter((e) =>
      [e.title, e.creator, e.subtopic, e.why, e.trackSlug]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [q]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-serif text-3xl">Search</h1>
      <div className="relative mt-6">
        <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos, concepts, topics…"
          className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 outline-none focus:border-foreground/40"
        />
      </div>

      {q && episodeResults.length > 0 && (
        <section className="mt-8">
          <h2 className="font-serif text-xl">
            Videos ({episodeResults.length})
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {episodeResults.slice(0, 12).map((episode) => (
              <EpisodeRow
                key={episode.id}
                episode={episode}
                watched={watched.includes(episode.id)}
                onToggle={toggleWatched}
              />
            ))}
          </div>
        </section>
      )}

      {conceptResults.length === 0 && episodeResults.length === 0 ? (
        <p className="mt-10 text-center text-muted">
          Nothing matches “{query}”.
        </p>
      ) : (
        conceptResults.length > 0 && (
          <section className="mt-8">
            {q && <h2 className="font-serif text-xl">Concepts</h2>}
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {conceptResults.map((concept) => (
                <ConceptCard
                  key={concept.slug}
                  concept={concept}
                  completed={completed.includes(concept.slug)}
                />
              ))}
            </div>
          </section>
        )
      )}
    </main>
  );
}
