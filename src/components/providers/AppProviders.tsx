"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
