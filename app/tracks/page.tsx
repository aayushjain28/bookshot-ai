"use client";

import Link from "next/link";
import { tracks } from "@/lib/data/tracks";
import { useWatched } from "@/lib/watched";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";

export default function TracksPage() {
  const { watched } = useWatched();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-serif text-3xl">Tracks</h1>
      <p className="mt-2 text-muted">
        Eight threads, one commute at a time. Each track goes fundamentals
        first.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {tracks.map((track) => {
          const total = track.episodes.length;
          const seen = track.episodes.filter((e) =>
            watched.includes(e.id)
          ).length;
          return (
            <Link key={track.slug} href={`/tracks/${track.slug}`}>
              <Card className="flex h-full flex-col gap-3 transition-shadow hover:shadow-md">
                <h2 className="font-serif text-xl">{track.title}</h2>
                <p className="text-sm text-muted">{track.tagline}</p>
                <div className="mt-auto pt-2">
                  <div className="flex justify-between text-xs text-muted">
                    <span>{total} episodes</span>
                    <span>{seen} watched</span>
                  </div>
                  <ProgressBar
                    className="mt-2"
                    value={total ? (seen / total) * 100 : 0}
                  />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
