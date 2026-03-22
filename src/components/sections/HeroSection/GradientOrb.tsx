"use client";

import { motion } from "framer-motion";

const orbs = [
  { className: "left-[8%] top-[18%] h-72 w-72 bg-accent-primary/35 blur-3xl", delay: 0 },
  { className: "right-[12%] top-[28%] h-80 w-80 bg-accent-secondary/30 blur-3xl", delay: 0.4 },
  { className: "left-[35%] bottom-[12%] h-64 w-64 bg-accent-cyan/25 blur-3xl", delay: 0.8 },
];

export function GradientOrb() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.className}`}
          initial={{ opacity: 0.6, scale: 0.92 }}
          animate={{
            opacity: [0.55, 0.85, 0.55],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 10 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
