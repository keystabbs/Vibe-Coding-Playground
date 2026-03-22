"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function HeroText() {
  return (
    <motion.div
      className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeInUp}>
        <SectionLabel>Powered by Claude + Cursor</SectionLabel>
      </motion.div>
      <motion.h1
        variants={fadeInUp}
        className="font-display mt-2 text-balance text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[1.05] tracking-tight text-text-primary"
      >
        Vibe Coding Playground
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="mt-6 max-w-2xl text-pretty text-lg text-text-secondary sm:text-xl"
      >
        Интерактивный showcase: анимации, Three.js, glassmorphism и отзывчивый layout — в одном месте.
      </motion.p>
      <motion.div variants={fadeInUp} className="mt-10">
        <Button
          variant="glow"
          size="lg"
          onClick={() => {
            document.getElementById("animations")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore →
        </Button>
      </motion.div>
    </motion.div>
  );
}
