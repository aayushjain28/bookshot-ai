"use client";

import { conceptsByDomain } from "@/lib/data/concepts";
import { tracks, totalEpisodes } from "@/lib/data/tracks";
import { useProgress } from "@/lib/progress";
import { useWatched } from "@/lib/watched";
import { ConceptCard } from "@/components/concept-card";
import { EpisodeRow } from "@/components/episode-row";
import { Badge } from "@/components/ui/badge";

export default function CurriculumPage() {
  const { completed } = useProgress();
  const { watched, toggleWatched } = useWatched();
  const groups = conceptsByDomain();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-serif text-3xl">Curriculum</h1>
      <p className="mt-2 text-muted">
        The whole library, all open. Every video link is here — watch anything,
        anytime. Daily just keeps a default order for your commute.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tracks.map((track) => (
          <a key={track.slug} href={`#${track.slug}`}>
            <Badge className="hover:bg-foreground/5">{track.title}</Badge>
          </a>
        ))}
        <a href="#concepts">
          <Badge className="hover:bg-foreground/5">Deep-read concepts</Badge>
        </a>
      </div>

      <p className="mt-4 text-sm text-muted">
        {totalEpisodes} videos · {watched.length} watched
      </p>

      <div className="mt-10 flex flex-col gap-14">
        {tracks.map((track) => (
          <section key={track.slug} id={track.slug} className="scroll-mt-20">
            <h2 className="font-serif text-2xl">{track.title}</h2>
            <p className="mt-1 text-sm text-muted">{track.tagline}</p>
            <div className="mt-4 flex flex-col gap-3">
              {track.episodes.map((episode, i) => (
                <EpisodeRow
                  key={episode.id}
                  episode={episode}
                  index={i}
                  watched={watched.includes(episode.id)}
                  onToggle={toggleWatched}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section id="concepts" className="mt-14 scroll-mt-20">
        <h2 className="font-serif text-2xl">Deep-read concepts</h2>
        <p className="mt-1 text-sm text-muted">
          The full arc from the Big Bang to money — eleven written lessons, each
          with a key question, a mental model, a quiz, and a reflection.
        </p>
        <div className="mt-6 flex flex-col gap-10">
          {groups.map((group) => (
            <div key={group.domain}>
              <h3 className="font-serif text-lg">{group.domain}</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {group.items.map((concept) => (
                  <ConceptCard
                    key={concept.slug}
                    concept={concept}
                    completed={completed.includes(concept.slug)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
