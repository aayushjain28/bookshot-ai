"use client";

import { conceptsByDomain } from "@/lib/data/concepts";
import { useProgress } from "@/lib/progress";
import { ConceptCard } from "@/components/concept-card";

export default function CurriculumPage() {
  const { completed } = useProgress();
  const groups = conceptsByDomain();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-serif text-3xl">Curriculum</h1>
      <p className="mt-2 text-muted">
        One connected story, told in order. Each domain builds on the last.
      </p>

      <div className="mt-10 flex flex-col gap-12">
        {groups.map((group) => (
          <section key={group.domain}>
            <h2 className="font-serif text-xl">{group.domain}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((concept) => (
                <ConceptCard
                  key={concept.slug}
                  concept={concept}
                  completed={completed.includes(concept.slug)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
