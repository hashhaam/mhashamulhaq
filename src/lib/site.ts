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
  navigation: {
    label: "Primary navigation",
    menuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
  },

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

  about: {
    metadata: {
      title: "About",
      description:
        "The path from an AI degree to backend engineering, team leadership, full-stack delivery, and growth-focused product work.",
    },
    intro: {
      eyebrow: "About",
      title: "Backend instincts. Full-stack execution. Growth context.",
      lead:
        "I like the parts of product work where technical decisions meet real business outcomes: reliable APIs, clear interfaces, search visibility, and conversion.",
      body:
        "My route into full-stack development started with artificial intelligence, sharpened through backend delivery, and expanded quickly into leading teams and shipping complete web products.",
    },
    journey: {
      eyebrow: "The journey",
      title: "A fast-moving path, grounded in shipping.",
      items: [
        {
          date: "NTU",
          title: "BS Artificial Intelligence",
          description:
            "Built a foundation in Python, computer vision, data-led problem solving, and the discipline to turn experimental ideas into working software.",
        },
        {
          date: "FEB",
          title: "Backend developer at Webix",
          description:
            "Joined with a backend focus, building APIs, authentication, database integrations, and the deployment plumbing products depend on.",
        },
        {
          date: "MAR",
          title: "Team lead",
          description:
            "Moved into team leadership within a month, coordinating delivery, unblocking implementation, and keeping client work moving across parallel projects.",
        },
        {
          date: "JUN",
          title: "Full-stack developer",
          description:
            "Expanded across the product surface: Next.js interfaces, SEO, lead flows, integrations, infrastructure, and end-to-end releases.",
        },
        {
          date: "2+ YRS",
          title: "E-commerce and paid growth",
          description:
            "Hands-on experience across Pakistan, the UAE, and the USA adds commercial context to the build: acquisition, conversion, CRM, and what happens after launch.",
        },
      ],
    },
    capabilities: {
      eyebrow: "What I do",
      title: "Build the product. Understand the growth loop.",
      intro:
        "My strongest work sits between backend depth and practical product delivery, with enough growth experience to keep the implementation tied to its purpose.",
      areas: [
        {
          index: "01 / BUILD",
          title: "Full-stack product delivery",
          description:
            "From data models and APIs to responsive interfaces, third-party integrations, SEO foundations, and production deployment.",
          tags: ["Next.js", "TypeScript", "FastAPI", "Node.js", "Supabase", "PostgreSQL"],
        },
        {
          index: "02 / GROW",
          title: "Commercial and growth context",
          description:
            "Experience with e-commerce operations, paid acquisition, CRM workflows, and conversion-focused pages helps me build beyond the feature list.",
          tags: ["SEO", "Shopify", "Meta Ads", "TikTok Ads", "CRM", "Lead flows"],
        },
      ],
    },
    approach: {
      eyebrow: "Approach",
      title: "Useful software is clear, resilient, and easy to move forward.",
      values: [
        {
          title: "Own the outcome",
          description:
            "I work backward from the user and business goal, then make the technical choices that serve it.",
        },
        {
          title: "Keep the system legible",
          description:
            "Simple boundaries, typed data, and explicit decisions make products safer to change after launch.",
        },
        {
          title: "Ship with care",
          description:
            "Performance, accessibility, SEO, and deployment are part of the product—not cleanup tasks for later.",
        },
      ],
    },
    closing: {
      eyebrow: "Have a role or project in mind?",
      title: "Let’s build something that earns its place.",
      description:
        "I’m available for full-stack roles, backend-heavy product work, and focused freelance engagements.",
      cta: "Let's work together",
      href: "/contact",
    },
  },
} as const;

export type Site = typeof site;
