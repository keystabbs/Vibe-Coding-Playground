import type { SectionId } from "@/types";

export const SECTION_IDS: SectionId[] = [
  "hero",
  "animations",
  "interactivity",
  "visual-effects",
  "responsive",
  "footer",
];

export const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Hero" },
  { id: "animations", label: "Animations" },
  { id: "interactivity", label: "Interact" },
  { id: "visual-effects", label: "Visual" },
  { id: "responsive", label: "Responsive" },
];

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;
