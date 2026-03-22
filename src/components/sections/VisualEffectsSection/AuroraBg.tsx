"use client";

import { motion } from "framer-motion";

export function AuroraBg() {
  return (
    <div className="relative h-40 overflow-hidden rounded-2xl border border-border-default">
      <motion.div
        className="absolute inset-[-40%] opacity-80 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "conic-gradient(from 0deg, var(--accent-primary), var(--accent-secondary), var(--accent-cyan), var(--accent-primary))",
        }}
      />
      <div className="relative flex h-full items-center justify-center bg-bg-base/40 px-4 backdrop-blur-sm">
        <p className="text-sm font-medium text-text-primary">Aurora background</p>
      </div>
    </div>
  );
}
