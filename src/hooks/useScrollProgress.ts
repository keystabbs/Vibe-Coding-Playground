"use client";

import { useScroll } from "framer-motion";

/** Page scroll progress as a MotionValue 0…1 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}
