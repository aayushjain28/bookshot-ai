"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { completeConcepts, concepts } from "@/lib/data/concepts";
import { useProgress } from "@/lib/progress";
import { ConceptCard } from "@/components/concept-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  const { completed, loaded } = useProgress();

  const nextConcept =
    completeConcepts.find((c) => !completed.includes(c.slug)) ??
    completeConcepts[0];
  const percent = (completed.length / completeConcepts.length) * 100;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-serif text-3xl">Welcome back</h1>
      <p className="mt-2 text-muted">
        Pick up the story where you left off.
      </p>

      <Card className="mt-8 flex flex-col gap-4">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>Your progress</span>
          <span>
            {loaded ? completed.length : 0} of {completeConcepts.length}{" "}
            concepts
          </span>
        </div>
        <ProgressBar value={loaded ? percent : 0} />
        <Link
          href={`/concepts/${nextConcept.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          {completed.includes(nextConcept.slug)
            ? "Revisit"
            : "Continue with"}{" "}
          {nextConcept.title}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Card>

      <h2 className="mt-12 font-serif text-xl">Available now</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {completeConcepts.map((concept) => (
          <ConceptCard
            key={concept.slug}
            concept={concept}
            completed={completed.includes(concept.slug)}
          />
        ))}
      </div>

      <div className="mt-12 flex items-center justify-between">
        <h2 className="font-serif text-xl">The full story</h2>
        <Link
          href="/curriculum"
          className="text-sm text-muted hover:text-foreground"
        >
          View curriculum →
        </Link>
      </div>
      <p className="mt-2 text-sm text-muted">
        {concepts.length - completeConcepts.length} more concepts are on the
        way.
      </p>
    </main>
  );
}
