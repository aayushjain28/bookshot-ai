"use client";

import { useState } from "react";
import { PenLine, Trash2 } from "lucide-react";
import { useNotes } from "@/lib/notes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function NotesPage() {
  const { notes, loaded, addNote, deleteNote } = useNotes();
  const [draft, setDraft] = useState("");

  const save = () => {
    addNote(draft);
    setDraft("");
  };

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="font-serif text-3xl">Notes</h1>
      <p className="mt-2 text-muted">
        Ideas, connections, things a video sparked. Saved on this device.
      </p>

      <Card className="mt-8">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "Enter") save();
          }}
          rows={4}
          placeholder="What's on your mind?"
          className="w-full rounded-lg border border-border bg-background p-3 text-sm outline-none focus:border-foreground/40"
        />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-muted">⌘/Ctrl + Enter to save</span>
          <Button onClick={save} disabled={!draft.trim()}>
            <PenLine className="h-4 w-4" />
            Save note
          </Button>
        </div>
      </Card>

      <div className="mt-8 flex flex-col gap-3">
        {loaded && notes.length === 0 && (
          <p className="text-center text-sm text-muted">
            No notes yet — your first idea goes here.
          </p>
        )}
        {notes.map((note) => (
          <Card key={note.id} className="group">
            <div className="flex items-start justify-between gap-3">
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {note.text}
              </p>
              <button
                onClick={() => deleteNote(note.id)}
                aria-label="Delete note"
                className="shrink-0 text-muted opacity-0 transition-opacity hover:text-foreground focus:opacity-100 group-hover:opacity-100"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-xs text-muted">
              {formatDate(note.createdAt)}
            </p>
          </Card>
        ))}
      </div>
    </main>
  );
}
