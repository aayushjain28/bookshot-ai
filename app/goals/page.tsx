"use client";

import Link from "next/link";
import { Target } from "lucide-react";
import { goals } from "@/lib/data/goals";
import { getTrack } from "@/lib/data/tracks";
import { useWatched } from "@/lib/watched";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Badge } from "@/components/ui/badge";

export default function GoalsPage() {
  const { watched } = useWatched();

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="font-serif text-3xl">Goals</h1>
      <p className="mt-2 text-muted">
        Everything here exists to serve these. Each goal pulls from specific
        tracks.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {goals.map((goal) => {
          const goalTracks = goal.tracks
            .map(getTrack)
            .filter((t) => t !== undefined);
          const episodes = goalTracks.flatMap((t) => t.episodes);
          const seen = episodes.filter((e) => watched.includes(e.id)).length;
          return (
            <Card key={goal.id}>
              <div className="flex items-start gap-3">
                <Target className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-xl">{goal.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {goal.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {goalTracks.map((t) => (
                      <Link key={t.slug} href={`/tracks/${t.slug}`}>
                        <Badge>{t.title}</Badge>
                      </Link>
                    ))}
                  </div>
                  {episodes.length > 0 && (
                    <>
                      <div className="mt-4 flex justify-between text-xs text-muted">
                        <span>{episodes.length} episodes feed this goal</span>
                        <span>{seen} watched</span>
                      </div>
                      <ProgressBar
                        className="mt-2"
                        value={(seen / episodes.length) * 100}
                      />
                    </>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
