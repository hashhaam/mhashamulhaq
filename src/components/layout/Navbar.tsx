import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { site } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container
        as="nav"
        aria-label={site.navigation.label}
        className="flex items-center justify-between py-[18px] sm:py-[22px] md:py-[26px]"
      >
        <Link
          href="/"
          className="flex items-center gap-[9px] whitespace-nowrap font-display text-[18px] font-semibold tracking-[-0.02em] text-text sm:text-[20px]"
        >
          <span className="h-[9px] w-[9px] rounded-full bg-accent" aria-hidden="true" />
          {site.name}
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[13px] tracking-[0.01em] text-muted transition-colors duration-200 hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <div className="hidden md:block">
            <Button href={site.cta.primary.href}>{site.cta.primary.label}</Button>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
