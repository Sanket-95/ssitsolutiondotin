# SS IT Solution — Corporate Website

Enterprise Software • Cloud Infrastructure • Automation Solutions

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · Lucide · React Router · React Helmet Async

## Getting started

```bash
npm install
cp .env.example .env    # set VITE_SITE_URL
npm run dev             # http://localhost:5173
npm run build           # type-check, client build, server build, pre-render → dist/
npm run preview
```

## Before going live

| Item | Where |
| --- | --- |
| Production domain (canonical URLs, sitemap, robots, Open Graph) | `VITE_SITE_URL` in `.env` (default `https://www.ssitsolution.com`) |
| Testimonials (placeholders, replace with approved client feedback) | `src/data/company.ts` → `testimonials` |
| Portfolio screenshots (currently styled placeholders) | `src/sections/Portfolio.tsx` → `ScreenshotPlaceholder` |

## How it works

- **Pre-rendered pages.** `npm run build` renders every route to static HTML (`src/entry-server.tsx` + `scripts/prerender.mjs`), with route-specific `<title>`, description, canonical, Open Graph and Twitter tags (`vite.config.ts`). Crawlers and link previews get complete pages without JavaScript. React then hydrates the page in the browser.
- **SEO files.** `sitemap.xml` and `robots.txt` are generated at build time from `src/config/seo.ts`. Organization and WebSite JSON-LD are in `index.html`. Pages add BreadcrumbList data, and the Services page adds a Service ItemList.
- **Performance.** CSS is inlined, the Latin Inter font is self-hosted and preloaded with a metric-matched fallback (no layout shift), inner pages are code-split, animation features load lazily, and each section hydrates as its own Suspense boundary.
- **Accessibility.** Skip link, semantic landmarks, keyboard-operable menu (Esc closes it), visible focus rings, and `prefers-reduced-motion` support.

## Structure

```
brand-source/            Original logo (black_on_trans.png)
public/                  Favicons, manifest, OG image, logo.png
scripts/
  build-brand.py         Regenerates logo/favicons/OG image from brand-source (npm run build:brand)
  extract-icons.cjs      Regenerates src/data/brandIcons.ts from simple-icons (npm run build:icons)
  prerender.mjs          Injects server-rendered markup into dist/*.html
src/
  config/                site.ts (company, nav) · seo.ts (per-route metadata)
  data/                  services, technologies, portfolio, company content, brand icons
  components/
    layout/              Navbar, Footer, Layout, ScrollManager, ScrollToTopButton, PageLoader
    seo/                 Seo (Helmet + JSON-LD)
    ui/                  Button, Container, Section, SectionHeading, Reveal, Logo, BrandIcon
  sections/              Hero, About, Services, Technologies, Portfolio, Industries,
                         WhyChooseUs, Process, Testimonials, Contact, PageHeader, CtaBand
  pages/                 Home, Services, Technologies, Portfolio, Industries, About, Contact, NotFound
  App.tsx · main.tsx · entry-server.tsx · AppProviders.tsx · index.css
```

## Deployment

Deploy `dist/` to any static host. Every route has its own `index.html`, and unknown URLs are served `404.html` with a real 404 status, so no SPA rewrite is needed.

- **Vercel:** `vercel.json` is included (clean URLs, immutable asset caching, security headers).
- **Netlify / Cloudflare Pages:** build command `npm run build`, publish directory `dist`.
