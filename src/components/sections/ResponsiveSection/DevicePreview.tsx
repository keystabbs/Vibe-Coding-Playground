"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  ViewportToggle,
  type ViewportMode,
} from "@/components/sections/ResponsiveSection/ViewportToggle";

const sizes: Record<ViewportMode, { w: number; h: number; label: string }> = {
  desktop: { w: 900, h: 520, label: "Desktop preview" },
  tablet: { w: 768, h: 520, label: "Tablet preview" },
  mobile: { w: 375, h: 640, label: "Mobile preview" },
};

export function DevicePreview() {
  const [mode, setMode] = useState<ViewportMode>("desktop");
  const { w, h, label } = sizes[mode];

  const scale = useMemo(() => {
    if (mode === "desktop") return 0.42;
    if (mode === "tablet") return 0.48;
    return 0.72;
  }, [mode]);

  return (
    <div className="space-y-6">
      <ViewportToggle value={mode} onChange={setMode} />
      <motion.div
        layout
        className="mx-auto overflow-hidden rounded-[20px] border border-border-default bg-bg-elevated shadow-xl"
        style={{ width: w * scale, height: h * scale }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      >
        <div
          className="origin-top-left bg-bg-base"
          style={{
            width: w,
            height: h,
            transform: `scale(${scale})`,
          }}
        >
          <div className="flex h-10 items-center gap-2 border-b border-border-default bg-bg-elevated px-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            <span className="ml-2 text-[10px] text-text-muted">{label}</span>
          </div>
          <div className="space-y-3 p-6">
            <div className="h-6 max-w-[60%] rounded-md bg-bg-surface" />
            <div className="h-3 max-w-[90%] rounded bg-bg-surface/80" />
            <div className="h-3 max-w-[80%] rounded bg-bg-surface/80" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-20 rounded-lg bg-bg-surface" />
              <div className="h-20 rounded-lg bg-bg-surface" />
              <div className="h-20 rounded-lg bg-bg-surface" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
