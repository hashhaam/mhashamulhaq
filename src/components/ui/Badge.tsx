import type { ReactNode } from "react";

type BadgeProps = {
  className?: string;
  children: ReactNode;
};

/** Small mono pill — used for the availability eyebrow. */
export function Badge({ className = "", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-[9px] font-mono text-[13px] tracking-[0.02em] text-accent-text ${className}`}
    >
      {children}
    </span>
  );
}
