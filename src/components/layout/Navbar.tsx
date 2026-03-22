"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-default bg-bg-elevated/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#hero"
          className="font-display text-sm font-bold tracking-tight text-text-primary sm:text-base"
        >
          Vibe Coding
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-surface hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
