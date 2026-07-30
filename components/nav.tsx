"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/home", label: "Home" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/progress", label: "Progress" },
  { href: "/search", label: "Search" },
  { href: "/profile", label: "Profile" },
];

export function Nav() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-4 w-4 text-accent" />
          <span>FPU</span>
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                pathname.startsWith(link.href)
                  ? "bg-foreground/5 font-medium text-foreground"
                  : "text-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
