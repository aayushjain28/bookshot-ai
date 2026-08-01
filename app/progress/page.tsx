"use client";

import Link from "next/link";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import { concepts, completeConcepts } from "@/lib/data/concepts";
import { totalEpisodes, tracks } from "@/lib/data/tracks";
import { useProgress } from "@/lib/progress";
import { useWatched } from "@/lib/watched";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Card } from "@/components/ui/card";

export default function ProgressPage() {
  const { completed, loaded } = useProgress();
  const { watched, loaded: watchedLoaded } = useWatched();
  const percent = loaded
    ? (completed.length / completeConcepts.length) * 100
    : 0;

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="font-serif text-3xl">Progress</h1>
      <p className="mt-2 text-muted">
        Your journey through the story so far.
      </p>

      <Card className="mt-8">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>Commute videos watched</span>
          <span>
            {watchedLoaded ? watched.length : 0} of {totalEpisodes}
          </span>
        </div>
        <ProgressBar
          value={
            watchedLoaded && totalEpisodes
              ? (watched.length / totalEpisodes) * 100
              : 0
          }
          className="mt-3"
        />
        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-4">
          {tracks.map((track) => {
            const seen = track.episodes.filter((e) =>
              watched.includes(e.id)
            ).length;
            return (
              <Link
                key={track.slug}
                href={`/tracks/${track.slug}`}
                className="flex justify-between gap-2 text-xs text-muted hover:text-foreground"
              >
                <span className="truncate">{track.title}</span>
                <span className="shrink-0 tabular-nums">
                  {seen}/{track.episodes.length}
                </span>
              </Link>
            );
          })}
        </div>
      </Card>

      <Card className="mt-4">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>Concepts completed</span>
          <span>
            {loaded ? completed.length : 0} of {completeConcepts.length}
          </span>
        </div>
        <ProgressBar value={percent} className="mt-3" />
      </Card>

      <ol className="mt-10 flex flex-col">
        {concepts.map((concept, i) => {
          const done = completed.includes(concept.slug);
          const available = concept.status === "complete";
          return (
            <li key={concept.slug} className="flex gap-4">
              <div className="flex flex-col items-center">
                {done ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                ) : available ? (
                  <Circle className="h-5 w-5 shrink-0 text-muted" />
                ) : (
                  <Lock className="h-4 w-4 shrink-0 text-border" />
                )}
                {i < concepts.length - 1 && (
                  <span className="my-1 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-8">
                {available ? (
                  <Link
                    href={`/concepts/${concept.slug}`}
                    className="font-medium hover:text-accent"
                  >
                    {concept.title}
                  </Link>
                ) : (
                  <span className="text-muted">{concept.title}</span>
                )}
                <p className="text-sm text-muted">
                  {available ? concept.summary : "Coming soon"}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
