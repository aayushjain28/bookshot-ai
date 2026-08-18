"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { completeConcepts } from "@/lib/data/concepts";
import { dailySequence, totalEpisodes, tracks } from "@/lib/data/tracks";
import { goals } from "@/lib/data/goals";
import { useProgress } from "@/lib/progress";
import { useWatched } from "@/lib/watched";
import { ConceptCard } from "@/components/concept-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  const { completed } = useProgress();
  const { watched, loaded } = useWatched();

  const todayIndex = dailySequence.findIndex((e) => !watched.includes(e.id));
  const today = todayIndex === -1 ? null : dailySequence[todayIndex];

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-serif text-3xl">Welcome back</h1>
      <p className="mt-2 text-muted">
        One commute, one video. Everything points at your goals.
      </p>

      {today && (
        <Card className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/daily"
              className="group relative block w-full shrink-0 overflow-hidden rounded-lg border border-border sm:w-56"
            >
              {today.platform === "spotify" || !today.videoId ? (
                <div className="flex aspect-video w-full items-center justify-center bg-accent-soft">
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">
                    Podcast
                  </span>
                </div>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={`https://i.ytimg.com/vi/${today.videoId}/mqdefault.jpg`}
                  alt={today.title}
                  className="aspect-video w-full object-cover"
                />
              )}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors group-hover:bg-black/80">
                  <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
                </span>
              </span>
            </Link>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                Today&apos;s video · Day {todayIndex + 1} of {totalEpisodes}
              </p>
              <Link href="/daily">
                <h2 className="mt-1 font-serif text-xl leading-snug hover:text-accent">
                  {today.title}
                </h2>
              </Link>
              <p className="mt-1 text-sm text-muted">
                {today.creator}
                {today.durationMin ? ` · ~${today.durationMin} min` : ""}
              </p>
              <Link
                href="/daily"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Open Daily <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Card>
      )}

      <Card className="mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>Commute progress</span>
          <span>
            {loaded ? watched.length : 0} of {totalEpisodes} videos
          </span>
        </div>
        <ProgressBar
          value={totalEpisodes ? (watched.length / totalEpisodes) * 100 : 0}
        />
      </Card>

      <div className="mt-12 flex items-center justify-between">
        <h2 className="font-serif text-xl">Your goals</h2>
        <Link href="/goals" className="text-sm text-muted hover:text-foreground">
          View all →
        </Link>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goals.slice(0, 3).map((goal) => (
          <Link key={goal.id} href="/goals">
            <Card className="h-full transition-shadow hover:shadow-md">
              <h3 className="font-serif text-lg">{goal.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {goal.tracks.length} track{goal.tracks.length > 1 ? "s" : ""}
              </p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-between">
        <h2 className="font-serif text-xl">Tracks</h2>
        <Link
          href="/tracks"
          className="text-sm text-muted hover:text-foreground"
        >
          View all →
        </Link>
      </div>
      <p className="mt-2 text-sm text-muted">
        {tracks.length} tracks · {totalEpisodes} curated videos, fundamentals
        first.
      </p>

      <div className="mt-12 flex items-center justify-between">
        <h2 className="font-serif text-xl">Deep-read concepts</h2>
        <Link
          href="/curriculum"
          className="text-sm text-muted hover:text-foreground"
        >
          View curriculum →
        </Link>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {completeConcepts.map((concept) => (
          <ConceptCard
            key={concept.slug}
            concept={concept}
            completed={completed.includes(concept.slug)}
          />
        ))}
      </div>
    </main>
  );
}
