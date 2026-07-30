"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { KnowledgeObject } from "@/lib/types";
import { useProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ConceptCompletion({ concept }: { concept: KnowledgeObject }) {
  const { completed, markComplete } = useProgress();
  const [answers, setAnswers] = useState<(number | null)[]>(
    concept.quiz.map(() => null)
  );
  const [checked, setChecked] = useState(false);
  const [reflection, setReflection] = useState("");

  const isComplete = completed.includes(concept.slug);
  const allAnswered = answers.every((a) => a !== null);
  const allCorrect =
    checked &&
    answers.every((a, i) => a === concept.quiz[i].answerIndex);
  const canFinish = allCorrect && reflection.trim().length > 0;

  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl">Check your understanding</h2>

      <div className="mt-4 flex flex-col gap-4">
        {concept.quiz.map((q, qi) => (
          <Card key={qi}>
            <p className="font-medium">{q.question}</p>
            <div className="mt-3 flex flex-col gap-2">
              {q.options.map((option, oi) => {
                const selected = answers[qi] === oi;
                const correct = checked && oi === q.answerIndex;
                const wrong = checked && selected && oi !== q.answerIndex;
                return (
                  <button
                    key={oi}
                    onClick={() => {
                      setChecked(false);
                      setAnswers((prev) =>
                        prev.map((a, i) => (i === qi ? oi : a))
                      );
                    }}
                    className={cn(
                      "rounded-lg border px-4 py-2.5 text-left text-sm transition-colors",
                      selected
                        ? "border-foreground/40 bg-foreground/5"
                        : "border-border hover:bg-foreground/5",
                      correct && "border-green-600 bg-green-50",
                      wrong && "border-red-400 bg-red-50"
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {checked && answers[qi] === q.answerIndex && (
              <p className="mt-3 text-sm text-muted">{q.explanation}</p>
            )}
          </Card>
        ))}
      </div>

      {!allCorrect && (
        <Button
          className="mt-4"
          disabled={!allAnswered}
          onClick={() => setChecked(true)}
        >
          Check answers
        </Button>
      )}
      {checked && !allCorrect && (
        <p className="mt-3 text-sm text-muted">
          Not quite — adjust your answers and try again.
        </p>
      )}

      {allCorrect && (
        <div className="mt-8">
          <h3 className="font-serif text-xl">Reflect</h3>
          <p className="mt-2 text-sm text-muted">{concept.reflection}</p>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            rows={4}
            placeholder="Write a few sentences…"
            className="mt-3 w-full rounded-lg border border-border bg-card p-3 text-sm outline-none focus:border-foreground/40"
          />
        </div>
      )}

      <div className="mt-6">
        {isComplete ? (
          <p className="flex items-center gap-2 font-medium text-accent">
            <CheckCircle2 className="h-5 w-5" />
            Concept complete
          </p>
        ) : (
          <Button
            disabled={!canFinish}
            onClick={() => markComplete(concept.slug)}
          >
            Mark as complete
          </Button>
        )}
        {!isComplete && (
          <p className="mt-2 text-xs text-muted">
            {concept.completionCriteria}
          </p>
        )}
      </div>
    </section>
  );
}
