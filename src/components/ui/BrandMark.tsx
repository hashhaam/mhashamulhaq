import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className = "", priority = false }: BrandMarkProps) {
  return (
    <Image
      src="/logo-transparent.png"
      alt=""
      width={96}
      height={96}
      sizes="96px"
      priority={priority}
      aria-hidden="true"
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
