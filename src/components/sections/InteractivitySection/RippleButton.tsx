"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Ripple = { id: number; x: number; y: number };

export function RippleButton() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y }]);
    window.setTimeout(() => {
      setRipples((r) => r.filter((item) => item.id !== id));
    }, 600);
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="relative overflow-hidden"
      onPointerDown={onPointerDown}
    >
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 0.45 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="pointer-events-none absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/30"
          style={{ left: r.x, top: r.y }}
        />
      ))}
      Ripple
    </Button>
  );
}
