"use client";

import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ConfettiButton() {
  const [label, setLabel] = useState("Celebrate");

  const fire = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ["#7c5cfc", "#ff4ecd", "#00d4ff"],
    });

    setLabel("🎉 Clicked!");
    window.setTimeout(() => setLabel("Celebrate"), 2000);
  }, []);

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
    >
      <Button type="button" variant="primary" onClick={fire}>
        {label}
      </Button>
    </motion.div>
  );
}
