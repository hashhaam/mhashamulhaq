import type { SimpleIcon } from "simple-icons";
import {
  siFastapi,
  siFlutter,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

const icons: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  React: siReact,
  TypeScript: siTypescript,
  FastAPI: siFastapi,
  "Node.js": siNodedotjs,
  Supabase: siSupabase,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Tailwind: siTailwindcss,
  Vercel: siVercel,
  Flutter: siFlutter,
};

type StackIconProps = {
  name: string;
};

export function StackIcon({ name }: StackIconProps) {
  const icon = icons[name];

  if (!icon) {
    return null;
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
