"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in seconds, mirroring the mockup's animation-delay steps. */
  delay?: number;
  className?: string;
  mode?: "load" | "inView";
};

/**
 * Fade + rise on load or when scrolled into view. Staggerable via `delay`.
 * Honors prefers-reduced-motion by rendering content in its final state.
 */
export function Reveal({ children, delay = 0, className, mode = "load" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (mode === "inView") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
