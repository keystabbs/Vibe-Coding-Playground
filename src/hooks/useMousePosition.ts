"use client";

import { useEffect, useRef, useState } from "react";

type MouseState = {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
};

export function useMousePosition() {
  const [state, setState] = useState<MouseState>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });
  const raf = useRef<number | null>(null);
  const pending = useRef<MouseState | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const next: MouseState = {
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX - cx) / cx,
        normalizedY: (e.clientY - cy) / cy,
      };
      pending.current = next;

      if (raf.current != null) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        if (pending.current) setState(pending.current);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return state;
}
