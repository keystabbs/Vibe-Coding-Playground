"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const shapes = [
  { clipPath: "inset(0 round 9999px)", label: "Pill" },
  { clipPath: "circle(50% at 50% 50%)", label: "Circle" },
  { clipPath: "inset(0 round 12px)", label: "Square" },
] as const;

export function MorphButton() {
  const [index, setIndex] = useState(0);
  const current = shapes[index % shapes.length];

  return (
    <motion.button
      type="button"
      onClick={() => setIndex((i) => i + 1)}
      className="flex h-14 min-w-[140px] items-center justify-center bg-accent-primary px-6 text-sm font-semibold text-white"
      animate={{ clipPath: current.clipPath }}
      transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {current.label}
    </motion.button>
  );
}
