import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type GradientTextProps = HTMLAttributes<HTMLSpanElement>;

export function GradientText({ className, children, ...props }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-cyan bg-clip-text text-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
