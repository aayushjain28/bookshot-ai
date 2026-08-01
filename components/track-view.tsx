"use client";

import Link from "next/link";
import { getTrack } from "@/lib/data/tracks";
import { goals } from "@/lib/data/goals";
import { useWatched } from "@/lib/watched";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { EpisodeRow } from "@/components/episode-row";

export function TrackView({ slug }: { slug: string }) {
  const { watched, toggleWatched } = useWatched();
  const track = getTrack(slug);
  if (!track) return null;

  const servesGoals = goals.filter((g) => g.tracks.includes(slug));
  const seen = track.episodes.filter((e) => watched.includes(e.id)).length;

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <Link href="/tracks" className="text-sm text-muted hover:text-foreground">
        ← All tracks
      </Link>
      <h1 className="mt-4 font-serif text-3xl">{track.title}</h1>
      <p className="mt-2 text-muted">{track.tagline}</p>

      {servesGoals.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {servesGoals.map((g) => (
            <Link key={g.id} href="/goals">
              <Badge className="bg-accent-soft">{g.title}</Badge>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6">
        <div className="flex justify-between text-sm text-muted">
          <span>{track.episodes.length} episodes</span>
          <span>{seen} watched</span>
        </div>
        <ProgressBar
          className="mt-2"
          value={
            track.episodes.length ? (seen / track.episodes.length) * 100 : 0
          }
        />
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {track.episodes.map((episode, i) => (
          <EpisodeRow
            key={episode.id}
            episode={episode}
            index={i}
            watched={watched.includes(episode.id)}
            onToggle={toggleWatched}
          />
        ))}
        {track.episodes.length === 0 && (
          <p className="text-muted">Episodes coming soon.</p>
        )}
      </div>
    </main>
  );
}
