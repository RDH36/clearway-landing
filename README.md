# Clearway — Landing page

Marketing + legal site for **Clearway**, a quit-vaping app. Dark, calm, premium —
reusing the app's visual language (deep petrol `#0E1B1F`, aqua accent `#5BE0C6`,
Bricolage Grotesque + Hanken Grotesk).

## Stack

- **Next.js** (App Router) — statically renders, no backend, no database
- **Tailwind CSS** — palette mirrors the app's design tokens
- **next/font** — Bricolage Grotesque (headings) + Hanken Grotesk (body)
- Optimized for **Vercel**

## Pages

- `/` — hero, features, screenshots, footer
- `/privacy` — Privacy Policy (required for Play Store submission)
- `/terms` — Terms of Service

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Things to swap before launch

1. **Google Play URL** — `PLAY_STORE_URL` in `app/components/PlayBadge.tsx`
   (currently `#`). Set it after publishing.
2. **Screenshots** — replace the placeholder PNGs in `public/screenshots/`
   with real portrait app screenshots (`app/components/Screenshots.tsx`).
3. **Domain** — update `siteUrl` in `app/layout.tsx` for correct canonical/OG
   URLs (currently `https://clearway.app`).
4. **Contact email** — `hello@clearway.app` in the legal pages.

## Deploy to Vercel

Push to a Git repo and import it in Vercel — the defaults (Framework: Next.js)
work as-is. Or run `vercel` from this directory.
