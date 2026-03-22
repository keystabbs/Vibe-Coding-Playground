"use client";

import dynamic from "next/dynamic";
import { GradientOrb } from "@/components/sections/HeroSection/GradientOrb";
import { HeroText } from "@/components/sections/HeroSection/HeroText";

const ParticleField = dynamic(
  () => import("./ParticleField").then((mod) => mod.ParticleField),
  { ssr: false, loading: () => null },
);

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-14"
    >
      <GradientOrb />
      <ParticleField />
      <HeroText />
    </section>
  );
}
