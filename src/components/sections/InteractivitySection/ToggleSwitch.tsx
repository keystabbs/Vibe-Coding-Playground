"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ToggleSwitch() {
  const [on, setOn] = useState(false);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn((v) => !v)}
      className="relative inline-flex h-11 w-[4.5rem] items-center rounded-full border border-border-default bg-bg-elevated px-1"
    >
      <span className="sr-only">Toggle</span>
      <motion.span
        className="absolute left-1 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-accent-primary shadow-sm"
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        animate={{ x: on ? 28 : 0 }}
      />
      <span className="pointer-events-none flex w-full items-center justify-between px-3 text-[10px] font-medium text-text-muted">
        <span>Off</span>
        <span>On</span>
      </span>
    </button>
  );
}
