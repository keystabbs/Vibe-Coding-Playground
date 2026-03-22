"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const items = [
  "Stagger",
  "Spring",
  "Layout",
  "Scroll",
  "Gesture",
  "Presence",
];

export function StaggerCards() {
  const { ref, hasBeenInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((title, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 24 }}
          animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: index * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card
            hoverable
            className={cn(
              "p-5 transition-shadow",
              "hover:scale-[1.02] hover:rotate-[0.5deg]",
            )}
          >
            <p className="text-sm font-semibold text-text-primary">{title}</p>
            <p className="mt-2 text-sm text-text-secondary">Анимационная техника</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
