"use client";

import { DevicePreview } from "@/components/sections/ResponsiveSection/DevicePreview";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ResponsiveSection() {
  return (
    <section id="responsive" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Responsive</SectionLabel>
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Адаптив в превью
        </h2>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Переключатель viewport и layout-анимация контейнера.
        </p>
        <div className="mt-12">
          <DevicePreview />
        </div>
      </div>
    </section>
  );
}
