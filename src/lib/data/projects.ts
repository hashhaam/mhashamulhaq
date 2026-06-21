export type ProjectType = "personal" | "client";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: readonly string[];
  type: ProjectType;
  image: string;
  imageAlt: string;
  github?: string;
  live?: string;
  problem: string;
  role: string;
  stack: readonly string[];
  outcome: string;
};

export const projectsContent = {
  metadata: {
    title: "Projects",
    description:
      "Personal products and anonymized client work across full-stack development, AI, SEO, integrations, and deployment.",
  },
  intro: {
    eyebrow: "Selected work",
    title: "Products built from the backend out.",
    description:
      "Personal projects include source links. Client work is anonymized for confidentiality, with the problem, contribution, stack, and outcome kept intact.",
  },
  featured: {
    eyebrow: "Featured work",
    title: "A few things I’ve built.",
    description:
      "AI experiments, product platforms, and end-to-end web delivery—each shaped around a real workflow.",
    cta: "View all projects",
    href: "/projects",
  },
  labels: {
    personal: "Personal project",
    client: "Client work",
    nda: "NDA",
    details: "View case study",
    github: "GitHub",
    live: "Live site",
    back: "All projects",
    problem: "Problem",
    role: "My role",
    stack: "Stack",
    outcome: "Outcome",
    screenshot: "Project preview",
  },
  closing: {
    eyebrow: "Need similar work?",
    title: "Let’s turn the requirement into a shipped product.",
    cta: "Let's work together",
    href: "/contact",
  },
} as const;

const placeholder = "/projects/project-placeholder.svg";

export const projects: readonly Project[] = [
  {
    slug: "avafit",
    title: "AvaFit",
    summary:
      "An AI virtual try-on mobile app with a brand catalog, wishlist, and multi-angle garment visualization.",
    tags: ["Flutter", "FastAPI", "Firebase", "Computer Vision"],
    type: "personal",
    image: placeholder,
    imageAlt: "Abstract amber interface placeholder for the AvaFit project",
    github: "https://github.com/hashhaam/Avafit-mobile-app",
    problem:
      "Online fashion shopping makes it difficult to judge how an item may look before purchase, especially across different viewing angles.",
    role:
      "Designed and built the final-year project across the mobile experience, backend services, Firebase integration, and computer-vision workflow.",
    stack: ["Flutter", "FastAPI", "Firebase", "Python", "Computer Vision"],
    outcome:
      "A working mobile proof of concept that connects catalog browsing, wishlists, and a multi-angle virtual try-on flow in one product experience.",
  },
  {
    slug: "snapmatch",
    title: "SnapMatch",
    summary:
      "An AI event photo finder that matches faces while handling image metadata and a simple upload workflow.",
    tags: ["Python", "Streamlit", "face-recognition", "EXIF"],
    type: "personal",
    image: placeholder,
    imageAlt: "Abstract amber interface placeholder for the SnapMatch project",
    github: "https://github.com/hashhaam/snapmatch-ai-photo-finder",
    problem:
      "Guests at large events often have to search through hundreds of photos to find the images that include them.",
    role:
      "Built the face-matching pipeline, image-orientation handling, and Streamlit interface for uploading a reference and reviewing matches.",
    stack: ["Python", "Streamlit", "face-recognition", "Pillow", "EXIF"],
    outcome:
      "A focused photo-discovery tool that reduces a manual gallery search to a face-based matching workflow.",
  },
  {
    slug: "jooblie",
    title: "Jooblie",
    summary:
      "A job platform with authentication, branded transactional email, Supabase data, and a custom-domain setup.",
    tags: ["Next.js", "React", "Supabase", "Resend", "TypeScript"],
    type: "personal",
    image: placeholder,
    imageAlt: "Abstract amber interface placeholder for the Jooblie project",
    github: "https://github.com/hashhaam/Jooblie",
    problem:
      "Job platforms need a trustworthy account flow and dependable communication before listings and applications can feel cohesive.",
    role:
      "Implemented the full-stack application, authentication and data flows, branded transactional email, and production domain configuration.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Resend"],
    outcome:
      "A coherent platform foundation with account access, persisted product data, and branded email communication ready for continued feature work.",
  },
  {
    slug: "construction-marketing-site",
    title: "Construction company marketing website",
    summary:
      "A conversion-focused company site with structured SEO data, clear service positioning, and lead capture.",
    tags: ["Next.js 14", "Tailwind CSS", "JSON-LD", "Vercel"],
    type: "client",
    image: placeholder,
    imageAlt: "Abstract amber interface placeholder for an anonymized construction website",
    problem:
      "The company needed a credible web presence that explained its services clearly and turned local search traffic into enquiries.",
    role:
      "Built the responsive marketing experience, lead path, technical SEO structure, and production deployment.",
    stack: ["Next.js 14", "Tailwind CSS", "JSON-LD", "Vercel"],
    outcome:
      "A fast, search-ready marketing site with a focused homepage and a direct route from service discovery to lead capture.",
  },
  {
    slug: "cleaning-services-platform",
    title: "Cleaning services platform",
    summary:
      "A Canadian booking platform with guest checkout, customer dashboards, support tickets, and row-level security.",
    tags: ["Next.js", "Supabase", "RLS", "Booking flows"],
    type: "client",
    image: placeholder,
    imageAlt: "Abstract amber interface placeholder for an anonymized cleaning platform",
    problem:
      "Customers needed a lower-friction way to book services, manage requests, and get support without forcing every visitor through account creation.",
    role:
      "Implemented the booking journey, guest checkout, authenticated dashboard, support workflow, database policies, and integration logic.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS"],
    outcome:
      "A unified service workflow covering first-time guest bookings through repeat-customer account management and support.",
  },
  {
    slug: "internal-crm-platform",
    title: "Internal CRM and operations platform",
    summary:
      "An operations system for lead assignment, permissions, follow-ups, white-label demos, and mixed infrastructure.",
    tags: ["Next.js", "MongoDB", "VPS", "Vercel"],
    type: "client",
    image: placeholder,
    imageAlt: "Abstract amber interface placeholder for an anonymized CRM platform",
    problem:
      "The operations team needed clearer lead ownership, controlled access, scheduled follow-ups, and a reusable environment for product demonstrations.",
    role:
      "Built core CRM workflows, role-aware permissions, follow-up tooling, a white-label demo clone, and deployments across VPS and Vercel.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Nginx", "Vercel", "VPS"],
    outcome:
      "A centralized operating workflow that made lead responsibility, follow-up activity, and demo preparation easier to manage.",
  },
  {
    slug: "law-firm-website",
    title: "Law firm website",
    summary:
      "A multi-page legal site with a mega menu, practice-area filtering, searchable articles, and map integration.",
    tags: ["Next.js", "Search", "Content UX", "Maps"],
    type: "client",
    image: placeholder,
    imageAlt: "Abstract amber interface placeholder for an anonymized law firm website",
    problem:
      "A broad legal service catalogue needed navigation that helped visitors find the right practice area and supporting information quickly.",
    role:
      "Developed the multi-page interface, large navigation system, practice-area filters, blog search, and location integration.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Maps"],
    outcome:
      "A structured legal information experience that makes a dense set of services and articles easier to navigate.",
  },
  {
    slug: "healthcare-staffing-site",
    title: "Healthcare staffing company site",
    summary:
      "A responsive staffing website with multiple service pages and a search-focused technical foundation.",
    tags: ["Next.js 14", "Tailwind CSS v4", "SEO", "Vercel"],
    type: "client",
    image: placeholder,
    imageAlt: "Abstract amber interface placeholder for an anonymized healthcare staffing site",
    problem:
      "The staffing company needed distinct service paths for employers and candidates without fragmenting its brand or search presence.",
    role:
      "Built the responsive page system, reusable service layouts, on-page SEO structure, and deployment-ready frontend.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS v4", "SEO", "Vercel"],
    outcome:
      "A consistent multi-service site that gives each audience a clear route while preserving maintainable shared components.",
  },
];

export const featuredProjects = projects.filter((project) => project.type === "personal").slice(0, 3);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
