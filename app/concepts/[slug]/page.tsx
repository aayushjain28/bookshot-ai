import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Film, Newspaper } from "lucide-react";
import { concepts, getConcept } from "@/lib/data/concepts";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ConceptCompletion } from "@/components/concept-completion";

export function generateStaticParams() {
  return concepts
    .filter((c) => c.status === "complete")
    .map((c) => ({ slug: c.slug }));
}

const resourceIcons = {
  video: Film,
  article: Newspaper,
  book: BookOpen,
};

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  if (concept.status === "coming-soon") {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-3xl">{concept.title}</h1>
        <p className="mt-4 text-muted">
          This concept is coming soon. In the meantime, continue with the
          available lessons.
        </p>
        <Link
          href="/curriculum"
          className="mt-6 inline-block text-accent hover:underline"
        >
          Back to curriculum →
        </Link>
      </main>
    );
  }

  const prerequisites = concept.prerequisites
    .map(getConcept)
    .filter((c) => c !== undefined);
  const unlocks = concept.unlocks
    .map(getConcept)
    .filter((c) => c !== undefined);

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <div className="flex gap-2">
        {concept.domains.map((d) => (
          <Badge key={d}>{d}</Badge>
        ))}
      </div>
      <h1 className="mt-4 font-serif text-4xl leading-tight">
        {concept.title}
      </h1>
      <p className="mt-3 text-lg text-muted">{concept.summary}</p>

      <Card className="mt-8 bg-accent-soft/50">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Key question
        </p>
        <p className="mt-2 font-serif text-xl">{concept.keyQuestion}</p>
      </Card>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Why it matters</h2>
        <p className="mt-3 leading-relaxed text-foreground/90">
          {concept.whyItMatters}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">What you&apos;ll learn</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {concept.learningObjectives.map((objective) => (
            <li key={objective} className="flex gap-3 leading-relaxed">
              <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-accent" />
              {objective}
            </li>
          ))}
        </ul>
      </section>

      {concept.body.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="font-serif text-2xl">{section.heading}</h2>
          {section.paragraphs.map((paragraph, i) => (
            <p key={i} className="mt-3 leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <Card className="mt-10">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Mental model
        </p>
        <p className="mt-2 font-serif text-xl">{concept.mentalModel}</p>
      </Card>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Go deeper</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {concept.resources.map((resource) => {
            const Icon = resourceIcons[resource.type];
            return (
              <li key={resource.title} className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0 text-muted" />
                {resource.url ? (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    {resource.title}
                  </a>
                ) : (
                  <span>{resource.title}</span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <ConceptCompletion concept={concept} />

      {(prerequisites.length > 0 || unlocks.length > 0) && (
        <section className="mt-10 border-t border-border pt-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {prerequisites.length > 0 && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  Builds on
                </p>
                {prerequisites.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/concepts/${p.slug}`}
                    className="mt-2 block text-accent hover:underline"
                  >
                    ← {p.title}
                  </Link>
                ))}
              </div>
            )}
            {unlocks.length > 0 && (
              <div className="sm:text-right">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  Unlocks
                </p>
                {unlocks.map((u) => (
                  <Link
                    key={u.slug}
                    href={`/concepts/${u.slug}`}
                    className="mt-2 block text-accent hover:underline"
                  >
                    {u.title} →
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
