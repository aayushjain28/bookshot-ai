"use client";

import Link from "next/link";
import { CheckCircle2, Lock } from "lucide-react";
import type { KnowledgeObject } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ConceptCard({
  concept,
  completed,
}: {
  concept: KnowledgeObject;
  completed?: boolean;
}) {
  const available = concept.status === "complete";

  const inner = (
    <Card
      className={cn(
        "flex h-full flex-col gap-2 transition-shadow",
        available ? "hover:shadow-md" : "opacity-60"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-serif text-lg">{concept.title}</h3>
        {completed ? (
          <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
        ) : !available ? (
          <Lock className="h-4 w-4 shrink-0 text-muted" />
        ) : null}
      </div>
      <p className="text-sm text-muted">{concept.summary}</p>
      <div className="mt-auto flex gap-2 pt-2">
        <Badge>{concept.domains[0]}</Badge>
        {!available && <Badge className="bg-accent-soft">Coming Soon</Badge>}
      </div>
    </Card>
  );

  if (!available) return inner;

  return (
    <Link href={`/concepts/${concept.slug}`} className="block h-full">
      {inner}
    </Link>
  );
}
