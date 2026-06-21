import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
};

/** Vertical rhythm wrapper for page sections. */
export function Section({ id, className = "", children, ...rest }: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`} {...rest}>
      {children}
    </section>
  );
}
