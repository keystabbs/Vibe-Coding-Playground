"use client";

import { AuroraBg } from "@/components/sections/VisualEffectsSection/AuroraBg";
import { GlassmorphismCard } from "@/components/sections/VisualEffectsSection/GlassmorphismCard";
import { GlowEffect } from "@/components/sections/VisualEffectsSection/GlowEffect";
import { GradientCard } from "@/components/sections/VisualEffectsSection/GradientCard";
import { NeonText } from "@/components/sections/VisualEffectsSection/NeonText";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function VisualEffectsSection() {
  return (
    <section id="visual-effects" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Visual</SectionLabel>
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Glass, gradient, glow
        </h2>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Стекло, градиенты, неон и aurora — без лишнего шума.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <GlassmorphismCard />
          <GradientCard />
          <div className="flex flex-col justify-center gap-6 rounded-2xl border border-border-default bg-bg-surface p-6">
            <GlowEffect />
            <NeonText />
          </div>
          <AuroraBg />
        </div>
      </div>
    </section>
  );
}
