"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const chapters = [
  "Big Bang",
  "Universe",
  "Earth",
  "Life",
  "Humans",
  "Civilization",
  "Economics",
  "Technology",
  "AI",
];

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-10 px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          First Principles University
        </p>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Understand how the world works,
          <br />
          one commute at a time.
        </h1>
        <p className="max-w-xl text-lg text-muted">
          One curated video every morning at 8:45 — money, markets, startups,
          history, systems, machines, food, and music. Understanding, not
          memorization.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted"
      >
        {chapters.map((chapter, i) => (
          <span key={chapter} className="flex items-center gap-2">
            {chapter}
            {i < chapters.length - 1 && (
              <ArrowRight className="h-3 w-3 text-border" />
            )}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link href="/home">
          <Button className="px-6 py-3 text-base">
            Start learning
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
