"use client";

import { GraduationCap } from "lucide-react";
import { completeConcepts, concepts } from "@/lib/data/concepts";
import { useProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProfilePage() {
  const { completed, loaded, reset } = useProgress();

  const stats = [
    {
      label: "Concepts completed",
      value: loaded ? completed.length : 0,
    },
    { label: "Available now", value: completeConcepts.length },
    { label: "In the full curriculum", value: concepts.length },
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
            <p className="font-serif text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <h2 className="font-medium">Reset progress</h2>
        <p className="mt-1 text-sm text-muted">
          Clears your completed concepts on this device. This cannot be
          undone.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={reset}
          disabled={!loaded || completed.length === 0}
        >
          Reset
        </Button>
      </Card>
    </main>
  );
}
