import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Centered content column — max-width 1180px with horizontal padding. */
export function Container({ as: Tag = "div", className = "", children }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1180px] px-6 sm:px-8 ${className}`}>{children}</Tag>
  );
}
