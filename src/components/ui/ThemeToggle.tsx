"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const toggleClass =
  "inline-flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-line-2 bg-transparent text-muted transition-colors duration-200 hover:border-accent-text hover:text-text";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: render a neutral placeholder until mounted.
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className={toggleClass} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={toggleClass}
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
