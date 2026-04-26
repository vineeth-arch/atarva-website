# Avarta IT and Design Solutions — Website

Premium one-page website for [Avarta IT and Design Solutions Pvt. Ltd.](https://avarta.in)

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion  
**Package manager:** pnpm

---

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Formspree setup (contact form)

The contact form uses [Formspree](https://formspree.io) to deliver enquiries to **krishnachandran@avarta.in**.

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the form endpoint ID (e.g. `xpwzekrj`)
3. Open `components/sections/FinalCTA.tsx` and replace `FORMSPREE_FORM_ID` with your real ID:
   ```ts
   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

---

## Logos and brand assets

Put Avarta logo files in `public/logos/`.

Recommended names:

- `public/logos/avarta-logo.svg`
- `public/logos/avarta-logo-light.svg`
- `public/logos/avarta-mark.svg`

Anything inside `public/` is served from the site root, so `public/logos/avarta-logo.svg` is available in code as `/logos/avarta-logo.svg`.

---

## Calendly booking embed

The contact section supports an embedded booking calendar.

1. Copy `.env.example` to `.env.local`
2. Add your Calendly scheduling URL:
   ```bash
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-name/intro-call
   ```
3. Restart the dev server

When this value is present, the site embeds the calendar. Without it, the booking area shows an email-based meeting request button.

---

## Custom font (Degular)

The site currently uses **DM Serif Display** as the display/headline font — a close editorial stand-in for Degular.

To swap in Degular once available:

1. Place the Degular font files in `public/fonts/`
2. In `app/layout.tsx`, comment out the `dmSerifDisplay` import and add a `localFont` declaration:
   ```ts
   import localFont from "next/font/local";

   const degular = localFont({
     src: [
       { path: "../public/fonts/Degular-Regular.woff2", weight: "400", style: "normal" },
       { path: "../public/fonts/Degular-Semibold.woff2", weight: "600", style: "normal" },
     ],
     variable: "--font-display",
     display: "swap",
   });
   ```
3. Replace `dmSerifDisplay.variable` with `degular.variable` in the `<body>` className

---

## Deploy to Vercel

Push this repository to GitHub, then:

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Vercel auto-detects Next.js — no configuration needed
3. Click **Deploy**

No environment variables are required (Formspree handles the form backend).

---

## Brand tokens

Colors are defined in `tailwind.config.ts`:

| Token | Hex | Usage |
|---|---|---|
| `midnight` | `#00022B` | Primary dark background |
| `cobalt` | `#0050FF` | Electric blue accent |
| `flow` | `#4DA3FF` | Blue signal accent |
| `stellar` | `#F0F2F8` | Off-white text |
| `orbit` | `#1A2A5E` | Mid-dark blue |
| `indigo` | `#2E2B78` | Deep violet-blue |
| `plum` | `#7B4495` | Violet |
| `flux` | `#A3518F` | Muted rose |
