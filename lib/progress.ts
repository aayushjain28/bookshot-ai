"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "fpu-completed-concepts";

function readCompleted(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCompleted(readCompleted());
    setLoaded(true);
  }, []);

  const markComplete = useCallback((slug: string) => {
    setCompleted((prev) => {
      if (prev.includes(slug)) return prev;
      const next = [...prev, slug];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setCompleted([]);
  }, []);

  return { completed, loaded, markComplete, reset };
}
