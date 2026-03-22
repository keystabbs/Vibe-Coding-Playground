"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  solid: "bg-bg-surface border border-border-default",
  glass:
    "border border-border-default bg-white/[0.06] backdrop-blur-xl dark:bg-white/[0.06]",
  gradient:
    "border border-transparent bg-gradient-to-br from-accent-primary/25 via-accent-secondary/15 to-accent-cyan/20 p-[1px] shadow-lg",
  outlined: "border border-border-default bg-transparent",
} as const;

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: keyof typeof variants;
  hoverable?: boolean;
};

export function Card({
  className,
  variant = "solid",
  hoverable = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl",
        variants[variant],
        hoverable && "transition-transform duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-xl",
        variant === "gradient" && "relative overflow-hidden",
        className,
      )}
      {...props}
    >
      {variant === "gradient" ? (
        <div className="rounded-[11px] bg-bg-surface p-4 sm:p-6">{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
