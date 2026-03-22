"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="min-w-24" aria-label="Toggle theme">
        …
      </Button>
    );
  }

  const next = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      className="min-w-24"
      aria-label="Toggle color theme"
      onClick={() => setTheme(next)}
    >
      {theme === "system" ? "System" : resolvedTheme === "dark" ? "Dark" : "Light"}
    </Button>
  );
}
