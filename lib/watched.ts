"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "fpu-watched-episodes";

function readWatched(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
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
