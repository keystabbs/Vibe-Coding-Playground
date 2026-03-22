"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-accent-primary text-white shadow-sm hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
  outline:
    "border border-border-default bg-transparent text-text-primary hover:border-border-hover",
  ghost: "bg-transparent text-text-primary hover:bg-bg-surface",
  glow: "bg-accent-primary text-white shadow-[0_0_0_1px_rgba(124,92,252,0.35)] [box-shadow:0_0_24px_rgba(124,92,252,var(--glow-opacity,0.35))] hover:[--glow-opacity:0.55]",
} as const;

const sizeStyles = {
  sm: "h-9 px-3 text-sm rounded-md",
  md: "h-11 px-4 text-sm rounded-lg",
  lg: "h-12 px-6 text-base rounded-lg",
} as const;

export type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium transition-transform duration-150",
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    if (asChild) {
      return (
        <Slot
          ref={ref as React.Ref<HTMLElement>}
          className={classes}
          {...(props as React.ComponentPropsWithoutRef<typeof Slot>)}
        />
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
