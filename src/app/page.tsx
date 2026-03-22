import { AnimationsSection } from "@/components/sections/AnimationsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InteractivitySection } from "@/components/sections/InteractivitySection";
import { ResponsiveSection } from "@/components/sections/ResponsiveSection";
import { VisualEffectsSection } from "@/components/sections/VisualEffectsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimationsSection />
      <InteractivitySection />
      <VisualEffectsSection />
      <ResponsiveSection />
      <FooterSection />
    </>
  );
}
