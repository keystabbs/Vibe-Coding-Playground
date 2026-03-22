"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

const dots = [
  { x: -72, y: -16, color: "bg-accent-primary/80" },
  { x: 8, y: -48, color: "bg-accent-secondary/80" },
  { x: 64, y: 12, color: "bg-accent-cyan/80" },
];

export function FloatingElements() {
  const { normalizedX, normalizedY } = useMousePosition();
  const x = useSpring(0, { stiffness: 120, damping: 20 });
  const y = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    x.set(normalizedX * 18);
    y.set(normalizedY * 14);
  }, [normalizedX, normalizedY, x, y]);

  return (
    <div className="relative h-48 overflow-hidden rounded-xl border border-border-default bg-bg-surface">
      <motion.div
        className="absolute left-1/2 top-1/2 flex items-center justify-center"
        style={{ x, y }}
      >
        {dots.map((d, i) => (
          <span
            key={i}
            className={`absolute h-4 w-4 rounded-full ${d.color}`}
            style={{ transform: `translate(calc(-50% + ${d.x}px), calc(-50% + ${d.y}px))` }}
          />
        ))}
      </motion.div>
      <p className="absolute bottom-3 left-4 text-xs text-text-muted">Parallax по мыши</p>
    </div>
  );
}
