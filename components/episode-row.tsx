"use client";

import { CheckCircle2, Circle, ExternalLink } from "lucide-react";
import type { Episode } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function EpisodeRow({
  episode,
  index,
  watched,
  onToggle,
}: {
  episode: Episode;
  index?: number;
  watched: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
    >
      <button
        onClick={() => onToggle(episode.id)}
        aria-label={watched ? "Mark as unwatched" : "Mark as watched"}
        className="mt-0.5 shrink-0 text-muted transition-colors hover:text-accent"
      >
        {watched ? (
          <CheckCircle2 className="h-5 w-5 text-accent" />
        ) : (
          <Circle className="h-5 w-5" />
        )}
      </button>
      <div className="min-w-0 flex-1">
        <a
          href={episode.url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-start justify-between gap-2"
        >
          <span className="font-medium group-hover:text-accent">
            {index !== undefined && (
              <span className="mr-2 text-sm text-muted">{index + 1}.</span>
            )}
            {episode.title}
          </span>
          <span className="flex shrink-0 items-center gap-2">
            {watched && <Badge className="bg-accent-soft">Watched</Badge>}
            <ExternalLink className="mt-0.5 h-3.5 w-3.5 text-muted" />
          </span>
        </a>
        <p className="mt-0.5 text-sm text-muted">
          {episode.platform === "spotify" && (
            <span className="mr-1.5 inline-flex items-center rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
              Podcast
            </span>
          )}
          {episode.creator}
          {episode.durationMin ? ` · ~${episode.durationMin} min` : ""} ·{" "}
          {episode.subtopic}
        </p>
        <p className="mt-1.5 text-sm text-muted">{episode.why}</p>
      </div>
    </div>
  );
}
