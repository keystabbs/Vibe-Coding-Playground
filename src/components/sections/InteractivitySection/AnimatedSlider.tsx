"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const widthPct = useTransform(x, (latest) => {
    const track = trackRef.current;
    if (!track) return "0%";
    const max = Math.max(1, track.clientWidth - 40);
    return `${(latest / max) * 100}%`;
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = Math.max(1, track.clientWidth - 40);
    x.set(max * 0.45);
  }, [x]);

  return (
    <div className="w-full max-w-md">
      <div ref={trackRef} className="relative h-12 rounded-full bg-bg-elevated p-1">
        <motion.div
          className="pointer-events-none absolute inset-y-1 left-1 rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-cyan opacity-90"
          style={{ width: widthPct }}
        />
        <motion.div
          className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-grab items-center justify-center rounded-full bg-white text-[10px] font-bold text-bg-base shadow-md active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={() => {
            if (typeof navigator !== "undefined" && navigator.vibrate) {
              navigator.vibrate(3);
            }
          }}
        >
          ∿
        </motion.div>
      </div>
    </div>
  );
}
