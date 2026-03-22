"use client";

import { motion } from "framer-motion";

export function GlowEffect() {
  return (
    <motion.button
      type="button"
      className="relative rounded-xl border border-border-accent bg-bg-elevated px-6 py-3 text-sm font-semibold text-text-primary"
      style={{
        boxShadow:
          "0 0 12px rgba(124, 92, 252, 0.45), 0 0 28px rgba(124, 92, 252, 0.35), 0 0 48px rgba(255, 78, 205, 0.25)",
      }}
      animate={{ filter: ["brightness(1)", "brightness(1.12)", "brightness(1)"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      Neon glow
    </motion.button>
  );
}
