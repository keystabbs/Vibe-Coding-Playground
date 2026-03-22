"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { FloatingElements } from "@/components/sections/AnimationsSection/FloatingElements";
import { ScrollReveal } from "@/components/sections/AnimationsSection/ScrollReveal";
import { StaggerCards } from "@/components/sections/AnimationsSection/StaggerCards";

export function AnimationsSection() {
  return (
    <section id="animations" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Animations</SectionLabel>
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Stagger, scroll и parallax
        </h2>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Три демо-зоны: карточки с задержкой, появление при скролле и парящие элементы.
        </p>

        <div className="mt-12 space-y-16">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-muted">Stagger cards</h3>
            <StaggerCards />
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-muted">Scroll reveal</h3>
            <ScrollReveal />
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-muted">Floating elements</h3>
            <FloatingElements />
          </div>
        </div>
      </div>
    </section>
  );
}
