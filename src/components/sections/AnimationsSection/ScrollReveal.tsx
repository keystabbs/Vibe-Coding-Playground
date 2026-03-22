"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const blocks = [
  { label: "Ease out", delay: 0 },
  { label: "Delayed", delay: 0.15 },
  { label: "Snappy", delay: 0.3 },
];

export function ScrollReveal() {
  const { ref, hasBeenInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div ref={ref} className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
      {blocks.map((b) => (
        <motion.div
          key={b.label}
          className="flex-1 rounded-xl border border-border-default bg-bg-surface p-6"
          initial={{ opacity: 0, y: 32 }}
          animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ delay: b.delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-medium text-text-primary">{b.label}</p>
          <p className="mt-2 text-sm text-text-secondary">Появление при скролле</p>
        </motion.div>
      ))}
    </div>
  );
}
