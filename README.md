# Gemutly Landing Redesign

**Author:** Umut Toker • **Live:** `<LIVE_URL>` • **Repo:** `<REPO_URL>`

A compact Next.js + TypeScript + Tailwind demo showing how I "finish" a near-complete product.

---

## Core Sections

Hero → 3 Steps → Trust Strip → Chef Spotlight (scroll-snap) → Testimonials (aria-live) → Final CTA → Footer

---

## Highlights

- **UX:** Dual CTAs in hero, frictionless 3-step process, consistent visual rhythm.
- **A11y:** Landmarks + heading hierarchy, ordered list for steps, `aria-live` testimonial rotation, focus rings, descriptive alt text.
- **Performance:** Optimized hero image (`next/image` + responsive sizes), lean dependency surface, narrow Tailwind `content` glob, progressive View Transitions enhancement.
- **Design Tokens:** HSL CSS variables → utilities like `bg-background`, `text-foreground`, `bg-primary`; instant theme swap.
- **Maintainability:** Small, isolated section components; data stubs ready to swap for Supabase fetches; formatting & class sorting via Prettier plugin.

---

## Stack

Next.js 15 · TypeScript · Tailwind v4.1 · ESLint (`next/core-web-vitals`) · shadcn · Prettier + `prettier-plugin-tailwindcss` · Lucide SVG · (Future) Supabase

---

## Run

```bash
npm install
npm run dev   # http://localhost:3000
```

---

## Contact

Umut Toker • [https://utoker.com](https://utoker.com) • GitHub: [utoker](https://github.com/utoker) • LinkedIn:[/in/utoker](https://linkedin.com/in/utoker)
_Happy to extend with Supabase, form flow, metrics, or design system variants._
