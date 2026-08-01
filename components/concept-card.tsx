"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { KnowledgeObject } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ConceptCard({
  concept,
  completed,
}: {
  concept: KnowledgeObject;
  completed?: boolean;
}) {
  return (
    <Link href={`/concepts/${concept.slug}`} className="block h-full">
      <Card className="flex h-full flex-col gap-2 transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg">{concept.title}</h3>
          {completed && (
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
          )}
        </div>
        <p className="text-sm text-muted">{concept.summary}</p>
        <div className="mt-auto flex gap-2 pt-2">
          <Badge>{concept.domains[0]}</Badge>
          {concept.status === "coming-soon" && (
            <Badge className="bg-accent-soft">Coming Soon</Badge>
          )}
        </div>
      </Card>
    </Link>
  );
}
