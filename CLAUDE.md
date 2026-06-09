@AGENTS.md

# Iris Technologies — Landing Page (getiris.tech)

## Project Overview
Marketing landing page for Iris POS — optical store software sold by Iris Technologies to optical businesses in Pakistan. This is a separate project from the actual POS software.

**Live URL:** `getiris.tech`
**Demo store link:** `demo.getiris.tech`
**Dev server:** `npm run dev` → http://localhost:3000
**Production:** Vercel, auto-deploys from GitHub `main` (repo: `getiris-landing`)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.7 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Language | TypeScript |
| Hosting | Vercel |
| Domain | getiris.tech (registered on Hostinger, nameservers pointed to Vercel) |

---

## Brand

| Token | Value |
|---|---|
| Primary Blue | `#213F7D` |
| Accent Green | `#96C624` |
| Company name | Iris Technologies |
| Product name | Iris POS |
| WhatsApp | +92 333 020 9272 → `https://wa.me/923330209272` |

Logo files are at `/Users/huzaifakauka/Documents/irispos/logo/`. The landing page uses `iris transparent.png` copied to `public/logo.png`.

---

## File Structure

```
app/
├── layout.tsx                 — metadata, Inter font, globals
├── page.tsx                   — main page (server component); assembles all sections
├── globals.css                — base Tailwind import + scroll-behavior
├── favicon.ico                — Iris hexagon icon
└── components/
    ├── ProblemSection.tsx     — dark section; 4 pain points optical stores face; scroll animations
    ├── FounderSection.tsx     — founder credibility story; built by an optometrist (no name/store name)
    └── FeaturesShowcase.tsx   — interactive tabs; click a feature → animated visual mockup on right
public/
└── logo.png                   — Iris transparent logo (copied from irispos/logo folder)
```

---

## Page Structure (top to bottom)

1. **Nav** — sticky, logo + links + WhatsApp CTA (`page.tsx`)
2. **Hero** — left-aligned, large headline, two CTAs (`page.tsx`)
3. **Problem** — dark background, 4 pain points with icons, solution bridge (`ProblemSection.tsx`)
4. **Founder** — quote card + 3 credibility points; first-person story, no name or store mentioned (`FounderSection.tsx`)
5. **Features** — interactive tab list left, animated UI mockup right (`FeaturesShowcase.tsx`)
6. **Pricing** — 3-column: Starter / Business / Pro (`page.tsx`)
7. **CTA** — demo + WhatsApp buttons (`page.tsx`)
8. **Footer** — logo, copyright, phone (`page.tsx`)

---

## Pricing Tiers

| | Starter | Business | Pro |
|---|---|---|---|
| Monthly | Rs. 5,000 | Rs. 8,000 | Rs. 12,000 |
| Annual | Rs. 50,000 | Rs. 80,000 | Rs. 1,20,000 |
| Setup fee | Rs. 8,000 | Rs. 8,000 | Free with annual |
| Staff accounts | 2 | 4 | Unlimited |
| Expenses & Suppliers | ✗ | ✓ | ✓ |
| Analytics | ✗ | ✓ | ✓ |
| Iris AI | ✗ | ✗ | ✓ |

---

## Features Showcase Mockups
Each mockup is a pure React/Tailwind component inside `FeaturesShowcase.tsx`:
- `POSMockup` — invoice with items, totals, balance due
- `OrderBoardMockup` — Kanban columns (Pending / Lens Ordered / Ready / Delivered)
- `PrescriptionMockup` — customer card with OD/OS Rx table and history
- `InventoryMockup` — product list with stock levels and low-stock badges
- `AnalyticsMockup` — revenue bar chart + summary stats
- `IrisMockup` — AI chat interface with sample conversation

---

## Key Rules
- Do NOT mention the founder's name or "Mohammadi Optical" anywhere on this site
- Brand colors must stay `#213F7D` (blue) and `#96C624` (green) — exact values from the Iris logo
- All client components must have `'use client'` — only `page.tsx` is a server component
- WhatsApp number in URLs must use international format: `923330209272` (no `+`, no leading `0`)
- Demo link is `https://demo.getiris.tech` — do not change to any other URL

---

## Deployment
- GitHub repo: `huxaifazulfiqar/getiris-landing`
- Push to `main` → Vercel auto-deploys
- Domain DNS managed via Vercel (nameservers changed from Hostinger to Vercel)
- `getiris.tech` → landing page Vercel project
- `demo.getiris.tech` → demo store Vercel project (separate)
