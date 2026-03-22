"use client";

import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

export type ViewportMode = "desktop" | "tablet" | "mobile";

const modes: { id: ViewportMode; label: string }[] = [
  { id: "desktop", label: "Desktop" },
  { id: "tablet", label: "Tablet" },
  { id: "mobile", label: "Mobile" },
];

type ViewportToggleProps = {
  value: ViewportMode;
  onChange: Dispatch<SetStateAction<ViewportMode>>;
};

export function ViewportToggle({ value, onChange }: ViewportToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-border-default bg-bg-elevated p-1">
      {modes.map((m) => (
        <button
          key={m.id}
          type="button"
          onClick={() => onChange(m.id)}
          className="relative rounded-full px-4 py-2 text-xs font-medium text-text-secondary"
        >
          {value === m.id && (
            <motion.span
              layoutId="viewport-pill"
              className="absolute inset-0 rounded-full bg-bg-surface shadow-sm"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{m.label}</span>
        </button>
      ))}
    </div>
  );
}
