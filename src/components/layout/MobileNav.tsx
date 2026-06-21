"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? site.navigation.closeMenuLabel : site.navigation.menuLabel}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[9px] border border-line-2 text-muted transition-colors hover:border-accent-text hover:text-text"
      >
        {open ? (
          <X className="h-[18px] w-[18px]" aria-hidden="true" />
        ) : (
          <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div className="absolute top-[calc(100%+12px)] right-0 w-56 rounded-card border border-line-2 bg-card p-3">
          <ul className="space-y-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[8px] px-3 py-2.5 font-mono text-[13px] text-muted transition-colors hover:bg-bg-2 hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={site.cta.primary.href}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-[9px] border border-transparent bg-accent px-[18px] py-[10px] font-mono text-[13px] font-medium text-accent-ink transition-colors duration-200 hover:bg-accent-hover"
          >
            {site.cta.primary.label}
          </Link>
        </div>
      )}
    </div>
  );
}
