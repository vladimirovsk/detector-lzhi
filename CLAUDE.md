# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint check
```

## Architecture

Single-page Next.js 15 app (App Router, static export) for a polygraph testing service in Odessa, Ukraine.

**File structure:**
- `app/layout.tsx` — root layout with SEO metadata, JSON-LD schema (`LocalBusiness` + `WebSite`), Inter font
- `app/page.tsx` — single page with all sections: Hero, Stats, Services, About, Accuracy, Prices, Contact, CTA
- `app/globals.css` — Tailwind base + custom component classes (`btn-primary`, `btn-outline`, `section-title`, `section-subtitle`)
- `components/Header.tsx` — sticky header with top phone bar, logo, desktop nav, mobile hamburger (`"use client"`)
- `components/Footer.tsx` — 3-column footer with brand, nav links, contact info
- `components/ContactForm.tsx` — contact form with submit success state (`"use client"`)
- `public/images/` — images copied from `old/uploads/` (hero.jpg, expert.jpg, polygraph-device.jpg, logo.png, 4 icon PNGs)

**`page.tsx` is a Server Component.** Interactive parts (Header mobile menu, ContactForm) are separate `"use client"` components.

**Colors** are defined in `tailwind.config.ts`:
- `primary` / `primary-dark` / `primary-light` — dark navy blue
- `accent` / `accent-dark` — golden yellow

## Content & Business Context

- **Business:** Polygraph (lie detector) testing services in Odessa, Ukraine
- **Phone:** +380663053778
- **Address:** вул. Балківська 97, Одеса
- **Language:** Ukrainian/Russian mixed (site uses both)
- **Original WordPress site:** archived in `old/` directory — for reference only, no migration needed

## SEO Notes

- `metadataBase` set to `https://detektor-lzhi.net.ua` in layout
- JSON-LD structured data in `<head>` covers `LocalBusiness` and `WebSite` schema types
- All sections have `aria-label` attributes for accessibility/SEO
- Images use Next.js `<Image>` with `priority` on hero, descriptive `alt` text, and `sizes` hints
