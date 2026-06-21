/**
 * Single source of truth for site-wide content.
 * Every component reads copy, links, and stats from here — no hardcoded
 * strings in components.
 */

export const site = {
  name: "M Hasham Ul Haq",
  role: "Full-Stack Developer & AI Graduate",
  tagline: "I build fast, SEO-ready web products that convert.",
  location: "Faisalabad, Pakistan",
  availability: "Available for roles & freelance",

  subhead:
    "Backend-first full-stack developer & AI graduate. In four months at Webix Solutions I've helped ship 40+ projects — APIs, SEO, integrations, and deployment.",

  trajectory: [
    { month: "Feb", label: "backend" },
    { month: "Mar", label: "team lead" },
    { month: "Jun", label: "full-stack" },
  ],

  links: {
    github: "https://github.com/hashhaam",
    linkedin: "https://www.linkedin.com/in/hasham-ul-haq-2770b0248/",
    email: "hashamulhaq068@gmail.com",
    phone: "+923203487887",
  },

  nav: [
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  cta: {
    primary: { label: "Let's work together", href: "/contact" },
    work: { label: "View work", href: "/projects" },
    cv: { label: "Download CV", href: "/cv.pdf" },
  },

  /** Terminal "at a glance" summary card rows. */
  stats: [
    { key: "projects_shipped", value: "40+", accent: true },
    { key: "time_at_webix", value: "4 months" },
    { key: "ecommerce", value: "2+ yrs · PK · UAE · USA" },
    { key: "focus", value: "backend · full-stack · growth" },
    { key: "degree", value: "BS Artificial Intelligence, NTU" },
  ],

  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "FastAPI",
    "Node.js",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Tailwind",
    "Vercel",
    "Flutter",
  ],
} as const;

export type Site = typeof site;
