"use client";

import { CalendarPlus, GraduationCap } from "lucide-react";
import { completeConcepts } from "@/lib/data/concepts";
import { totalEpisodes } from "@/lib/data/tracks";
import { goals } from "@/lib/data/goals";
import { useProgress } from "@/lib/progress";
import { useWatched } from "@/lib/watched";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProfilePage() {
  const { completed, loaded, reset } = useProgress();
  const {
    watched,
    loaded: watchedLoaded,
    reset: resetWatched,
  } = useWatched();

  const stats = [
    {
      label: "Videos watched",
      value: `${watchedLoaded ? watched.length : 0}/${totalEpisodes}`,
    },
    {
      label: "Concepts completed",
      value: `${loaded ? completed.length : 0}/${completeConcepts.length}`,
    },
    { label: "Goals in play", value: String(goals.length) },
  ];

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft">
          <GraduationCap className="h-7 w-7 text-accent" />
        </div>
        <div>
          <h1 className="font-serif text-3xl">Learner</h1>
          <p className="text-muted">First-principles thinker in training</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <p className="font-serif text-3xl tabular-nums">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <h2 className="font-medium">Daily reminder</h2>
        <p className="mt-1 text-sm text-muted">
          Add a recurring 9:00 AM event to your calendar — 30 minutes, one
          video, every day.
        </p>
        <a
          href="/fpu-daily-9am.ics"
          download
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          <CalendarPlus className="h-4 w-4" />
          Add to calendar
        </a>
      </Card>

      <Card className="mt-4">
        <h2 className="font-medium">Reset progress</h2>
        <p className="mt-1 text-sm text-muted">
          Clears watched videos and completed concepts on this device. This
          cannot be undone.
        </p>
        <div className="mt-4 flex gap-3">
          <Button
            variant="outline"
            onClick={resetWatched}
            disabled={!watchedLoaded || watched.length === 0}
          >
            Reset videos
          </Button>
          <Button
            variant="outline"
            onClick={reset}
            disabled={!loaded || completed.length === 0}
          >
            Reset concepts
          </Button>
        </div>
      </Card>
    </main>
  );
}
