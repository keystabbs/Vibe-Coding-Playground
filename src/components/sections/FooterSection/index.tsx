"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="scroll-mt-24 border-t border-border-default bg-bg-elevated/50 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-bold text-text-primary">Vibe Coding Playground</p>
          <p className="mt-2 text-sm text-text-secondary">Собрано по docs/ARCHITECTURE.md</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
          <Link href="#hero" className="hover:text-text-primary">
            Наверх
          </Link>
          <Link href="#animations" className="hover:text-text-primary">
            Анимации
          </Link>
          <Link href="#interactivity" className="hover:text-text-primary">
            Интерактив
          </Link>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href="https://vercel.com" target="_blank" rel="noreferrer">
            Deploy
          </a>
        </Button>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-center text-xs text-text-muted">
        Credits: Next.js · Framer Motion · Three.js · Lenis
      </p>
    </footer>
  );
}
