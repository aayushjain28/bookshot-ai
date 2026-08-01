"use client";

import Link from "next/link";
import { CalendarPlus, CheckCircle2, ExternalLink, Play } from "lucide-react";
import { dailySequence, getTrack, totalEpisodes } from "@/lib/data/tracks";
import { useWatched } from "@/lib/watched";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EpisodeRow } from "@/components/episode-row";

export default function DailyPage() {
  const { watched, loaded, toggleWatched } = useWatched();

  if (totalEpisodes === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-3xl">Daily</h1>
        <p className="mt-4 text-muted">No episodes loaded yet.</p>
      </main>
    );
  }

  const todayIndex = dailySequence.findIndex((e) => !watched.includes(e.id));
  const done = todayIndex === -1;
  const today = done ? dailySequence[totalEpisodes - 1] : dailySequence[todayIndex];
  const track = getTrack(today.trackSlug);
  const upNext = done ? [] : dailySequence.slice(todayIndex + 1, todayIndex + 6);

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl">Daily</h1>
          <p className="mt-2 text-muted">
            One video per commute. 9:00 AM, ~30 minutes.
          </p>
        </div>
        <a
          href="/fpu-daily-9am.ics"
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <CalendarPlus className="h-4 w-4" />
          9 AM reminder
        </a>
      </div>

      {done ? (
        <Card className="mt-8 text-center">
          <CheckCircle2 className="mx-auto h-8 w-8 text-accent" />
          <p className="mt-3 font-serif text-xl">
            You&apos;ve watched everything — all {totalEpisodes} episodes.
          </p>
          <p className="mt-2 text-sm text-muted">
            More episodes are coming. Revisit any track meanwhile.
          </p>
        </Card>
      ) : (
        <Card className="mt-8">
          <div className="flex items-center justify-between text-sm text-muted">
            <span>
              Day {todayIndex + 1} of {totalEpisodes}
            </span>
            {track && (
              <Link
                href={`/tracks/${track.slug}`}
                className="text-accent hover:underline"
              >
                {track.title}
              </Link>
            )}
          </div>

          <a
            href={today.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 block"
          >
            <div className="relative overflow-hidden rounded-xl border border-border">
              {/* YouTube thumbnails are stable and require no API */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${today.videoId}/hqdefault.jpg`}
                alt={today.title}
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-white transition-colors group-hover:bg-black/80">
                  <Play className="ml-1 h-6 w-6" fill="currentColor" />
                </span>
              </span>
            </div>
            <h2 className="mt-4 flex items-start justify-between gap-2 font-serif text-2xl leading-snug">
              {today.title}
              <ExternalLink className="mt-2 h-4 w-4 shrink-0 text-muted" />
            </h2>
          </a>

          <p className="mt-1 text-sm text-muted">
            {today.creator}
            {today.durationMin ? ` · ~${today.durationMin} min` : ""}
          </p>
          <div className="mt-3 flex gap-2">
            <Badge>{today.subtopic}</Badge>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{today.why}</p>

          <Button
            className="mt-5"
            disabled={!loaded}
            onClick={() => toggleWatched(today.id)}
          >
            <CheckCircle2 className="h-4 w-4" />
            Mark watched — see tomorrow&apos;s
          </Button>
        </Card>
      )}

      {upNext.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-xl">Up next</h2>
          <div className="mt-4 flex flex-col gap-3">
            {upNext.map((episode) => (
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

      <p className="mt-10 text-center text-sm text-muted">
        {watched.length} watched ·{" "}
        <Link href="/tracks" className="text-accent hover:underline">
          Browse all tracks →
        </Link>
      </p>
    </main>
  );
}
