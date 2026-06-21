import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[9px] font-mono border border-transparent transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-accent-ink font-medium hover:bg-accent-hover",
  outline: "border-line-2 text-text hover:border-accent-text hover:text-accent-text",
  ghost: "text-muted hover:text-text",
};

const sizes: Record<Size, string> = {
  md: "text-[13px] px-[18px] py-[10px]",
  lg: "text-sm px-[22px] py-[13px]",
};

// Ghost trims its horizontal padding to read as a plain text action.
const ghostSizes: Record<Size, string> = {
  md: "text-[13px] px-2 py-[10px]",
  lg: "text-sm px-2 py-[13px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes(variant: Variant, size: Size, className: string) {
  const sizeClass = variant === "ghost" ? ghostSizes[size] : sizes[size];
  return `${base} ${variants[variant]} ${sizeClass} ${className}`.trim();
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    const { variant = "solid", size = "md", className = "", children, href } = props;
    const cls = classes(variant, size, className);
    const external = /^https?:|^mailto:|^tel:/.test(href);

    if (external) {
      const isHttp = href.startsWith("http");
      return (
        <a
          href={href}
          target={isHttp ? "_blank" : undefined}
          rel={isHttp ? "noopener noreferrer" : undefined}
          className={cls}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  const { variant = "solid", size = "md", className = "", children, ...rest } = props;
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
