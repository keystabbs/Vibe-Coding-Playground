"use client";

import { AnimatedSlider } from "@/components/sections/InteractivitySection/AnimatedSlider";
import { ConfettiButton } from "@/components/sections/InteractivitySection/ConfettiButton";
import { MorphButton } from "@/components/sections/InteractivitySection/MorphButton";
import { RippleButton } from "@/components/sections/InteractivitySection/RippleButton";
import { ToggleSwitch } from "@/components/sections/InteractivitySection/ToggleSwitch";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function InteractivitySection() {
  return (
    <section id="interactivity" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Interactivity</SectionLabel>
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Клики, морфинг и жесты
        </h2>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Конфетти, морфинг формы, слайдер с drag и ripple.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-border-default bg-bg-surface p-6">
            <h3 className="text-sm font-semibold text-text-muted">Confetti</h3>
            <ConfettiButton />
          </div>
          <div className="space-y-4 rounded-xl border border-border-default bg-bg-surface p-6">
            <h3 className="text-sm font-semibold text-text-muted">Morph</h3>
            <MorphButton />
          </div>
          <div className="space-y-4 rounded-xl border border-border-default bg-bg-surface p-6">
            <h3 className="text-sm font-semibold text-text-muted">Slider</h3>
            <AnimatedSlider />
          </div>
          <div className="space-y-4 rounded-xl border border-border-default bg-bg-surface p-6">
            <h3 className="text-sm font-semibold text-text-muted">Toggle</h3>
            <ToggleSwitch />
          </div>
          <div className="space-y-4 rounded-xl border border-border-default bg-bg-surface p-6 lg:col-span-2">
            <h3 className="text-sm font-semibold text-text-muted">Ripple</h3>
            <RippleButton />
          </div>
        </div>
      </div>
    </section>
  );
}
