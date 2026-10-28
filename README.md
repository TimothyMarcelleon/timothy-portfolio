# Timothy Marcelleon — Portfolio

The personal site and engineering portfolio of **Timothy Marcelleon**, a Front-End / Full-Stack
Software Engineer based in **Adelaide, South Australia**, with **full Australian working rights**
(open to Adelaide, Sydney, Melbourne, or remote roles across Australia).

**Live site:** [timothy-portfolio-gamma.vercel.app](https://timothy-portfolio-gamma.vercel.app)
**GitHub:** [github.com/TimothyMarcelleon](https://github.com/TimothyMarcelleon)

## What's inside

A single-page, animation-rich portfolio built to stand on its own as an engineering sample —
not just a résumé in HTML. Highlights:

- **Featured Engineering Case Studies** — interactive, tabbed architecture deep-dives into three
  flagship production systems (a high-throughput payment & risk engine at Tokopedia serving
  50M+ users, a real-time multi-platform operations & live-chat platform at Xinchuan Management
  serving 30,000+ users, and a digital banking onboarding & PayLater platform for Bank BRI —
  CERIA), each broken down into problem/scale, architecture decisions, and key metrics.
- **Scroll-driven motion** — staggered reveals, parallax-ish hero blobs, and animated tab
  transitions built with Framer Motion, respecting a calm, production-grade feel rather than
  gratuitous animation.
- **Light / dark mode** — theme-aware design tokens (CSS custom properties + Tailwind v4
  `@theme inline`) switched via `next-themes`, defaulting to dark with full system-preference
  support.
- **Structured, typed content** — all résumé and case-study data lives in a single typed source
  of truth (`src/data/profile.ts`), so sections stay in sync and are easy to update without
  touching component markup.

## Architecture

| Layer      | Choice                                                              |
| ---------- | -------------------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, React Server Components) |
| UI runtime | [React 19](https://react.dev)                                        |
| Language   | [TypeScript 5](https://www.typescriptlang.org) (`strict` mode)       |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` config) |
| Motion     | [Framer Motion](https://www.framer.com/motion/)                      |
| Theming    | [next-themes](https://github.com/pacocoursey/next-themes)            |
| Icons      | [lucide-react](https://lucide.dev)                                   |
| Linting    | ESLint 9 (flat config) + `eslint-config-next`                        |

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata, theme provider
│   ├── page.tsx         # Section composition for the single-page site
│   └── globals.css      # Design tokens (light/dark) + Tailwind v4 theme
├── components/
│   ├── header.tsx       # Sticky nav, GitHub link, theme toggle
│   ├── hero.tsx         # Hero, working-rights badge, CTAs (contact / CV / GitHub)
│   ├── about.tsx
│   ├── skills.tsx
│   ├── case-studies.tsx # Interactive tabbed architecture deep-dives
│   ├── experience.tsx
│   ├── education.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── reveal.tsx        # Shared scroll/entry reveal animation primitives
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── icons.tsx          # Brand icons not covered by lucide-react
└── data/
    └── profile.ts         # Single typed source of truth for all site content
```

All content — experience, skills, education, and the three case studies — is modelled as plain,
`as const` TypeScript objects in `src/data/profile.ts`, so every section renders from typed data
rather than hard-coded JSX, and the compiler catches shape mismatches across components.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the local development server    |
| `npm run build` | Create a production build             |
| `npm start`     | Serve the production build            |
| `npm run lint`  | Run ESLint across the project         |

## Deployment

The production site is deployed on [Vercel](https://vercel.com), auto-publishing from the `main`
branch.
