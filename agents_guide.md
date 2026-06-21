# agents_guide.md — M Hasham Ul Haq Portfolio

> **For any AI agent (Codex, Claude Code, etc.):** read this file fully before doing any work. It is the single source of truth for the project's stack, design system, conventions, and roadmap. After you finish a task, **update the "Status / progress log" and "Decisions log" sections** at the bottom so the next agent stays in sync. Never deviate from the locked design tokens.
>
> **For Hasham:** keep this file at the repo root. To continue work, tell your agent: *"Read agents_guide.md fully, then implement the next pending phase exactly as specified. Build clean, commit to a feature branch, open a PR, and update the status log."*

---

## 1. Snapshot

Personal portfolio for **M Hasham Ul Haq** — a backend-first full-stack developer & AI graduate. The site must look polished and conversion-focused, because it doubles as proof of skill for both recruiters and freelance clients. The site's own quality is the portfolio.

- **Repo:** `https://github.com/hashhaam/mhashamulhaq.git`
- **Deploy target:** Vercel (auto-deploy on merge to `main`).
- **Name everywhere:** "M Hasham Ul Haq" (not "Hasham"). Dev-handle / terminal style: `mhashamulhaq`.

## 2. Stack & decisions (locked)

- **Next.js 15** (App Router, TypeScript, `src/`, `@/*` alias) — pinned to 15 deliberately (not 16). Do not upgrade without owner approval.
- **Tailwind CSS v4** (tokens via `@theme inline`).
- **Framer Motion** (motion), **next-themes** (dark/light), **lucide-react** (icons).
- **Phase 3 additions:** **Resend** (contact email), **Supabase** (lead storage), **zod** + **react-hook-form** (form validation).
- Node 20.9+ (dev machine: v20.20.2 ✓).

## 3. Local dev

```bash
npm install
npm run dev      # local preview
npm run build    # MUST pass clean before any PR (Vercel fails on TS/lint errors)
npm run lint
```

## 4. Design system (LOCKED — from design/hero-mockup.html)

The approved visual reference lives at `design/hero-mockup.html`. Match it exactly for look, spacing, type scale, and motion.

**Fonts** (via `next/font/google`):
- Display → **Bricolage Grotesque** (`--font-display`)
- Body → **Inter** (`--font-body`)
- Mono / utility → **JetBrains Mono** (`--font-mono`)

**Color tokens** (CSS variables; dark is default):

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#17130E` | `#F6F1E8` |
| `--bg-2` | `#1F1A13` | `#FFFFFF` |
| `--card` | `#1E1810` | `#FFFFFF` |
| `--line` | `rgba(240,221,190,0.10)` | `rgba(45,33,15,0.12)` |
| `--line-2` | `rgba(240,221,190,0.16)` | `rgba(45,33,15,0.20)` |
| `--line-soft` | `rgba(240,221,190,0.07)` | `rgba(45,33,15,0.07)` |
| `--text` | `#F3ECE0` | `#211B12` |
| `--muted` | `#A99C88` | `#6E6453` |
| `--dim` | `#766B5B` | `#8C8170` |
| `--accent` (fills) | `#F0A93B` | `#F0A93B` |
| `--accent-text` (text/borders) | `#F0A93B` | `#B26A12` |
| `--accent-deep` | `#C9802A` | `#C9802A` |

- **Critical:** `--accent` = fills (buttons, dots, cursor). `--accent-text` = text/borders (deeper in light mode for contrast). Don't merge them.
- Card radius `14px`. Solid-button ink color `#1a1409` (dark text on amber, both modes).

**Motion rules:** one orchestrated, staggered load/scroll reveal per section. A blinking cursor and an availability "ping" pulse exist in the hero. No scattered effects. `prefers-reduced-motion` must disable all animation. Keyboard `:focus-visible` rings always visible.

## 5. Architecture & folder structure

```
src/
  app/
    layout.tsx          # fonts, ThemeProvider, Navbar, <main>, Footer, base metadata
    page.tsx            # Home (composes sections)
    globals.css         # design tokens + @theme + keyframes
    projects/page.tsx           # (Phase 2)
    projects/[slug]/page.tsx    # (Phase 2)
    about/page.tsx              # (Phase 2)
    contact/page.tsx            # (Phase 3)
    sitemap.ts · robots.ts · not-found.tsx   # (Phase 4)
  components/
    layout/   Navbar.tsx, Footer.tsx
    sections/ Hero.tsx, (About*, ProjectsGrid, Stats, Skills, Services, Contact …)
    ui/       Button.tsx, Container.tsx, Section.tsx, Badge.tsx, ThemeToggle.tsx, ProjectCard.tsx …
    motion/   Reveal.tsx
    three/    (optional hero 3D accent — Phase 4)
  lib/
    site.ts           # single source of truth for copy/links/stats
    data/projects.ts  # typed project + case-study data (Phase 2)
    schema.ts         # JSON-LD builders (Phase 4)
    resend.ts · supabase.ts   # (Phase 3)
```

## 6. Conventions / quality bar (non-negotiable)

- **Tokens only** — every color/font comes from CSS variables / Tailwind tokens. No hardcoded hex in components.
- **Content lives in `lib/`** — `site.ts` and `data/*.ts` only. No hardcoded copy in components.
- **Server components by default**; add `"use client"` only to interactive bits (ThemeToggle, motion wrappers, nav menu, contact form).
- **`next build` must pass clean** — no TS errors, no ESLint errors, no unused imports.
- **Accessibility:** semantic landmarks (`header`/`nav`/`main`/`footer`), `:focus-visible` rings, `aria-label` on icon-only buttons, alt text on images, reduced-motion honored.
- **Responsive, mobile-first.** Match the mockup breakpoints (hero stacks ~880px; nav links collapse ~760px).
- **Images:** `next/image`, optimized.
- **No secrets committed** — use `.env.local`; keep `.env.example` updated; `.gitignore` ignores `.env*` (with an exception for `.env.example`).
- **SEO:** every page exports `metadata`; structured data via `lib/schema.ts` (Phase 4).

## 7. Content (seed for `lib/site.ts`)

```
name:         "M Hasham Ul Haq"
role:         "Full-Stack Developer & AI Graduate"
tagline:      "I build fast, SEO-ready web products that convert."
location:     "Faisalabad, Pakistan"
availability: "Available for roles & freelance"
links:
  github:   "https://github.com/hashhaam"
  linkedin: "https://www.linkedin.com/in/hasham-ul-haq-2770b0248/"
  email:    "hashamulhaq068@gmail.com"
  phone:    "+923203487887"   // optional on public site
subhead: "Backend-first full-stack developer & AI graduate. In four months at
          Webix Solutions I've helped ship 40+ projects — APIs, SEO,
          integrations, and deployment."
trajectory: "Feb backend → Mar team lead → Jun full-stack"
stats:
  projects_shipped: "40+"
  time_at_webix:    "4 months"
  ecommerce:        "2+ yrs · PK · UAE · USA"
  focus:            "backend · full-stack · growth"
  degree:           "BS Artificial Intelligence, NTU"
stack: ["Next.js","React","TypeScript","FastAPI","Node.js","Supabase",
        "PostgreSQL","MongoDB","Tailwind","Vercel","Flutter"]
skills:
  backend:       ["FastAPI","Node.js","Express","MongoDB Atlas","PostgreSQL","Supabase","Firebase"]
  frontend:      ["Next.js","React","Tailwind CSS","TypeScript"]
  ai_mobile:     ["Python","Computer Vision","Flutter"]
  auth_integr:   ["JWT","Clerk","EmailJS","Resend","payment flows"]
  devops:        ["GitHub","Vercel","Railway","Render","Hostinger VPS (Nginx, Certbot/SSL)"]
  growth:        ["Shopify","Meta Ads","TikTok Ads","SEO","CRM"]
```

## 8. Projects data (for `lib/data/projects.ts`)

Two layers. **Layer 1 = personal projects** (full links). **Layer 2 = client work, anonymized** (NDA — no client names, no links; show work + stack + outcome only). Each needs a `slug`, `title`, `summary`, `tags`, `type` ("personal" | "client"), optional `github`/`live`, and `image` (TODO: Hasham to supply screenshots; use a placeholder until then).

**Layer 1 — personal**
- **AvaFit** — AI virtual try-on app (FYP). Brand catalog, wishlist, multi-angle try-on. Stack: Flutter, FastAPI, Firebase, Computer Vision. GitHub: `https://github.com/hashhaam/Avafit-mobile-app`. Live: mobile app (demo video TODO).
- **SnapMatch** — AI event photo finder. Face matching, EXIF handling, Streamlit UI. Stack: Python, Streamlit, face-recognition. GitHub: `https://github.com/hashhaam/snapmatch-ai-photo-finder`.
- **Jooblie** — job platform. Auth + branded transactional email, custom domain. Stack: Next.js/React, Supabase, Resend, TypeScript. GitHub: `https://github.com/hashhaam/Jooblie`. Live: TODO confirm.

**Layer 2 — client (anonymized, NDA-safe)** — confirm/prune with Hasham:
- **Construction company — marketing website.** Next.js 14, Tailwind, JSON-LD SEO schemas, Vercel. Conversion-focused homepage + lead capture.
- **Cleaning services platform (Canada).** Next.js + Supabase. Booking flow, guest checkout, customer dashboard, support tickets, RLS.
- **Internal CRM / operations platform.** Next.js + MongoDB. Lead assignment & permissions, follow-up scheduling, white-label demo clone, VPS + Vercel deploys.
- **Law firm website.** Next.js multi-page, mega menu, practice-area filter, blog search, maps embed.
- **Healthcare staffing company site.** Next.js 14 + Tailwind v4, multiple service pages, SEO.

## 9. Roadmap (build specs)

### ✅ Phase 1 — Foundation + Hero (DONE)
Next.js 15 scaffold, design tokens (both themes), next-themes theming (no flash, persists, system-aware), UI primitives (Button/Container/Section/Badge), Reveal motion wrapper, Navbar + Footer, Hero (faithful to mockup), `lib/site.ts`, `.env.example`. Build passes clean; both themes verified.

### ✅ Phase 2 — About + Projects (DONE)
**About (`/about`) — scroll-driven story:**
- Narrative arc: NTU (BS AI) → Webix backend (Feb) → Team Lead (Mar) → Full-stack (Jun) → 2+ yrs e-commerce/ads.
- Scroll-triggered reveals (Framer Motion `whileInView` / `useScroll`); a vertical timeline with mono date labels works well. Keep warm-dark/amber language.
- Sections: intro → the journey/timeline → what I do (full-stack + growth) → approach/values → closing CTA ("Let's work together" → `/contact").
- Reuse `Reveal`, `Section`, `Container`, `Button`. Export page `metadata`.

**Projects (`/projects`) — grid + detail:**
- `lib/data/projects.ts` (typed) using the data in §8.
- `ProjectCard` handles both layers: Layer 1 shows tech tags + GitHub/live links; Layer 2 shows a "Client work" badge and no link.
- Grid on `/projects`. Optional filter: All / Personal / Client.
- `/projects/[slug]/page.tsx` detail page: problem · role · stack · outcome, screenshots (placeholder if none), links. Use `generateStaticParams` from the data; export per-project `metadata`.
- Add a "Featured work" preview (3 projects) to Home (can also land in Phase 3).

### ⬜ Phase 3 — Contact + remaining Home sections
**Contact (`/contact`):**
- Form via react-hook-form + zod: name, email, message, optional company/budget, + hidden honeypot. No raw HTML `<form>` action — use a Server Action.
- Server Action: validate (zod) → send email via **Resend** to `CONTACT_TO_EMAIL` → insert lead into **Supabase**. Basic rate-limit. Clear success/error UI states.
- `lib/resend.ts`, `lib/supabase.ts`. Env: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`. Update `.env.example`.
- Supabase `leads` table: `id, name, email, message, company, budget, created_at`; RLS allowing anon insert only.

**Remaining Home sections** (compose into `app/page.tsx`): Stats bar → About snippet → Skills (tech icons via simple-icons / svgl / devicon — crisp SVG logos) → Services → Testimonials (placeholder) → Contact CTA.

### ⬜ Phase 4 — SEO, polish, deploy
- Per-page `metadata` (title/description/openGraph/twitter/canonical).
- `lib/schema.ts` JSON-LD: Person + WebSite (+ Project/BreadcrumbList on detail pages).
- `sitemap.ts`, `robots.ts`, `not-found.tsx`. Optional dynamic OG image (`next/og`).
- Performance + Lighthouse pass; image optimization; font `display: swap`.
- Optional subtle hero 3D accent (Spline or React Three Fiber, lazy-loaded `ssr:false`) — only if time and it doesn't hurt LCP.
- Deploy on Vercel: connect repo, set env vars, custom domain later.

## 10. Review checklist (run before every merge)

- **Build:** `next build` clean — no TS/ESLint errors, no unused imports.
- **Theme:** next-themes correct; no hydration flash; persists; system-aware. Tokens correct in both modes.
- **Tokens:** no hardcoded hex/fonts in components.
- **A11y:** landmarks, focus-visible rings, icon-button labels, alt text, reduced-motion honored, contrast OK (amber-on-light uses `--accent-text`).
- **Responsive:** mobile layouts clean; nav usable on mobile.
- **Architecture:** primitives reused; `lib/` is the only content source.
- **Server vs client:** `"use client"` only where needed.
- **Security:** no secrets committed; `.env.example` current.
- **Fidelity:** matches `design/hero-mockup.html` language (type scale, spacing, motion).

## 11. Workflow

1. Branch per phase: `feat/phase-N-<name>`.
2. Build → `npm run build` clean → commit → open PR.
3. Run the §10 checklist (Codex can review the diff against it).
4. Fix flags → merge to `main` → Vercel auto-deploys.
5. **Update §12 below.**

## 12. Status / progress log  *(agents: keep this current)*

- **2026-06 — Phase 1 complete.** Foundation + Hero on `feat/phase-1-foundation`, PR open/merged. Stack: Next 15, Tailwind v4, next-themes, framer-motion, lucide-react. Build clean; both themes verified against mockup.
- **2026-06-21 — Phase 2 complete.** About journey, capabilities, approach, and CTA; typed personal + anonymized client project data; reusable cards; projects grid; eight static detail routes; and a three-project Home preview on `feat/phase-2`. Token-matched screenshot placeholder added until final project media is supplied. Build clean and responsive dark/light browser verification completed.
- **Phase 3 — pending.**
- **Phase 4 — pending.**

## 13. Decisions log  *(append as you go)*

- Pinned **Next.js 15** (not 16) — owner preference + colleague alignment + modest dev machine. Greenfield, so no migration concerns either way.
- Design language: warm espresso-dark + amber accent; Bricolage Grotesque / Inter / JetBrains Mono; terminal-style "at a glance" signature card. Deliberately avoids generic AI-portfolio looks.
- `--accent` (fills) vs `--accent-text` (text/borders) split to keep amber readable on the light cream theme.
- Client projects shown anonymized (NDA) as case studies; personal projects (AvaFit, SnapMatch, Jooblie) shown with links.
- Contact backend uses Next.js Server Actions (no separate API server) + Resend + Supabase.
- Phase 2 keeps client work free of external URLs while allowing internal anonymized case-study routes. The optional Projects filter is deferred so the grid remains server-rendered with no unnecessary client boundary.
- Project media uses a shared, design-token-matched placeholder asset until Hasham supplies final screenshots; every project already has its own image field and alt text for direct replacement.
