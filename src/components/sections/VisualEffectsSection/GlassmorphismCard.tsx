"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function GlassmorphismCard() {
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.12)] p-6",
        "backdrop-blur-[20px] transition-[backdrop-filter] duration-300",
        "hover:border-[rgba(255,255,255,0.25)] hover:backdrop-blur-[30px]",
      )}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setSpot({ x, y });
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(124,92,252,0.35), transparent 55%)`,
        }}
      />
      <div className="relative">
        <p className="text-sm font-semibold text-text-primary">Glassmorphism</p>
        <p className="mt-2 text-sm text-text-secondary">Blur + spotlight по курсору</p>
      </div>
    </div>
  );
}
