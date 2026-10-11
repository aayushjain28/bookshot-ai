"use client";

import { useCallback, useEffect, useState } from "react";
import legacyIds from "@/lib/data/legacy-ids.json";

const STORAGE_KEY = "fpu-watched-episodes";

// Watched state used to be keyed by track position ("markets-and-investing-10"),
// which broke whenever episodes were inserted mid-track. IDs are now stable
// per video ("yt-<videoId>" / "sp-<showId>"); this converts old entries once.
function migrate(ids: string[]): string[] {
  const map = legacyIds as Record<string, string>;
  const migrated = ids.map((id) => map[id] ?? id);
  return [...new Set(migrated)];
}

function readWatched(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const stored = raw ? (JSON.parse(raw) as string[]) : [];
    const migrated = migrate(stored);
    if (JSON.stringify(migrated) !== JSON.stringify(stored)) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
    }
    return migrated;
  } catch {
    return [];
  }
}

export function useWatched() {
  const [watched, setWatched] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setWatched(readWatched());
    setLoaded(true);
  }, []);

  const toggleWatched = useCallback((id: string) => {
    setWatched((prev) => {
      const next = prev.includes(id)
        ? prev.filter((w) => w !== id)
        : [...prev, id];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setWatched([]);
  }, []);

  return { watched, loaded, toggleWatched, reset };
}
