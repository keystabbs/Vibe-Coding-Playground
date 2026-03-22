import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type SectionLabelProps = HTMLAttributes<HTMLParagraphElement>;

export function SectionLabel({ className, ...props }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted",
        className,
      )}
      {...props}
    />
  );
}
