/**
 * Single source of truth for site-wide content.
 * Every component reads copy, links, and stats from here — no hardcoded
 * strings in components.
 */

export const site = {
  name: "M Hasham Ul Haq",
  handle: "mhashamulhaq",
  url: "https://mhashamulhaq.com",
  language: "en",
  role: "Full-Stack Developer & AI Graduate",
  tagline: "I build production web apps, end to end.",
  location: "Faisalabad, Pakistan",
  availability: "Available for roles & freelance",

  seo: {
    title: "M Hasham Ul Haq · Full-Stack Developer & AI Graduate",
    description:
      "Full-stack developer and AI graduate building production web apps end to end, from APIs and databases to AI features, CI/CD, and deployment.",
    keywords: [
      "M Hasham Ul Haq",
      "full-stack developer",
      "backend developer",
      "Next.js developer",
      "FastAPI developer",
      "AI graduate",
      "Faisalabad developer",
      "Pakistan software developer",
    ],
    lastUpdated: "2026-08-24",
    openGraph: {
      eyebrow: "Full-stack developer & AI graduate",
      title: "Production web apps, end to end.",
      description: "Full-stack engineering · APIs · databases · AI · deployment",
      alt: "M Hasham Ul Haq — Full-Stack Developer and AI Graduate",
    },
    breadcrumbs: {
      home: "Home",
      projects: "Projects",
    },
    schema: {
      addressLocality: "Faisalabad",
      addressCountry: "PK",
      alumniOf: "National Textile University",
    },
  },

  accessibility: {
    skipToContent: "Skip to main content",
  },

  notFound: {
    metadataTitle: "Page not found",
    eyebrow: "404 · Route not found",
    title: "This page left the build.",
    description:
      "The address may have changed, or the page may never have existed. The main portfolio and project archive are still here.",
    primary: { label: "Back to home", href: "/" },
    secondary: { label: "View projects", href: "/projects" },
  },

  subhead:
    "Full-stack developer (MERN, Next.js) and AI graduate. Over the past 7 months at Webix Solutions I've contributed to a wide range of client projects, owning everything from APIs and databases to deployment and CI/CD. I also build AI features with Python and FastAPI when a product needs them.",

  trajectory: [
    { month: "Feb", label: "backend" },
    { month: "Apr", label: "full-stack" },
    { month: "team", label: "lead" },
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
  footer: {
    navigationLabel: "Footer navigation",
    exploreLabel: "Explore",
    connectLabel: "Connect",
    rights: "All rights reserved.",
  },

  cta: {
    primary: { label: "Let's work together", href: "/contact" },
    work: { label: "View work", href: "/projects" },
  },

  /** Terminal "at a glance" summary card rows. */
  stats: [
    { key: "contributed_to", value: "25+ projects", accent: true },
    { key: "time_at_webix", value: "7 months" },
    { key: "focus", value: "full-stack · backend · AI features" },
    { key: "degree", value: "BS Artificial Intelligence, NTU" },
    { key: "also", value: "e-commerce · 2+ yrs" },
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

  home: {
    stats: {
      eyebrow: "Track record",
      items: [
        { value: "25+", label: "projects contributed to" },
        { value: "7 months", label: "at Webix Solutions" },
        { value: "AI features", label: "Python · FastAPI" },
        { value: "BS AI", label: "National Textile University" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Backend-first thinking, carried through the whole product.",
      description:
        "I started in AI and backend engineering, then moved across the full delivery surface: interfaces, SEO, integrations, infrastructure, and the growth systems around the product.",
      secondary:
        "That range lets me make implementation decisions with both system reliability and commercial outcomes in view.",
      cta: { label: "Read my story", href: "/about" },
    },
    skills: {
      eyebrow: "Skills",
      title: "A practical stack for shipping complete products.",
      description:
        "I choose tools around the workflow, maintainability, and deployment constraints—not novelty.",
      groups: [
        {
          label: "Backend",
          items: ["FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB Atlas", "Supabase", "Firebase"],
        },
        {
          label: "Frontend",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          label: "AI & mobile",
          items: ["Python", "Computer Vision", "Flutter"],
        },
        {
          label: "Auth & integrations",
          items: ["JWT", "Clerk", "Resend", "EmailJS", "Payment flows"],
        },
        {
          label: "DevOps",
          items: ["GitHub", "Vercel", "Railway", "Render", "Nginx", "Certbot / SSL"],
        },
        {
          label: "Growth",
          items: ["Shopify", "SEO", "Meta Ads", "TikTok Ads", "CRM"],
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Focused help from first architecture to production.",
      description:
        "Useful for teams that need a complete build, a backend-heavy feature, or a sharper path from traffic to enquiry.",
      items: [
        {
          index: "01",
          title: "Full-stack web products",
          description:
            "Responsive Next.js products with typed data flows, authentication, dashboards, and production-ready deployment.",
          deliverables: ["Product UI", "APIs", "Auth", "Deployment"],
        },
        {
          index: "02",
          title: "Backend & integrations",
          description:
            "Reliable APIs, database design, third-party services, email, payments, and internal workflow automation.",
          deliverables: ["FastAPI / Node", "Databases", "Integrations", "Automation"],
        },
        {
          index: "03",
          title: "SEO & conversion foundations",
          description:
            "Fast marketing sites with structured content, technical SEO, lead capture, and analytics-ready journeys.",
          deliverables: ["Technical SEO", "Lead flows", "Performance", "Analytics"],
        },
      ],
    },
    testimonials: {
      eyebrow: "Trust",
      title: "Work that is easier to discuss than overstate.",
      placeholder:
        "Most client work is covered by confidentiality. References and project-specific feedback are available privately when relevant.",
      label: "Client references",
      cta: { label: "Ask for a reference", href: "/contact" },
    },
    closing: {
      eyebrow: "Ready when you are",
      title: "Bring the role, product, or stubborn technical problem.",
      description:
        "Share the context and desired outcome. I’ll reply with the clearest useful next step.",
      primary: { label: "Start a conversation", href: "/contact" },
      secondary: { label: "View projects", href: "/projects" },
    },
  },

  about: {
    metadata: {
      title: "About",
      description:
        "The path from an AI degree to backend engineering, team leadership, full-stack delivery, and growth-focused product work.",
      keywords: [
        "M Hasham Ul Haq experience",
        "AI graduate",
        "full-stack developer journey",
      ],
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
          date: "APR",
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

  contact: {
    metadata: {
      title: "Contact",
      description:
        "Get in touch about full-stack roles, backend-heavy product work, or focused freelance engagements.",
      keywords: [
        "hire full-stack developer",
        "freelance Next.js developer",
        "backend developer contact",
      ],
    },
    eyebrow: "Contact",
    title: "Tell me what you’re building.",
    lead: "I’m open to full-stack roles and freelance work. Send a short note about the role or project and I’ll get back to you.",
    channels: {
      eyebrow: "Direct",
      title: "Reach me here",
      items: [
        { label: "Email", value: "hashamulhaq068@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/hasham-ul-haq-2770b0248" },
        { label: "GitHub", value: "github.com/hashhaam" },
        { label: "WhatsApp", value: "+923203487887" },
      ],
    },
    form: {
      eyebrow: "Send a message",
      fields: {
        name: { label: "name", placeholder: "Your name" },
        email: { label: "email", placeholder: "you@company.com" },
        company: { label: "company", placeholder: "Company or team (optional)" },
        budget: {
          label: "budget",
          placeholder: "Select a range (optional)",
          options: [
            { value: "under-1k", label: "Under $1k" },
            { value: "1k-3k", label: "$1k–$3k" },
            { value: "3k-7k", label: "$3k–$7k" },
            { value: "7k-plus", label: "$7k+" },
            { value: "role", label: "Full-time role" },
          ],
        },
        message: { label: "message", placeholder: "A little about the role or project…" },
        website: { label: "website", placeholder: "Leave this field empty" },
      },
      submit: "Send message",
      submitting: "Sending…",
      note: "Your message is sent securely. I usually reply within two working days.",
      success: "Message sent. I’ll get back to you soon.",
      error: "I couldn’t send that message. Please try again or email me directly.",
      fallbackPrefix: "Prefer to write directly?",
    },
  },
} as const;

export type Site = typeof site;
