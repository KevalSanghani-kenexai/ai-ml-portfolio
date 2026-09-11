# Keval Sanghani — AI/ML Engineer Portfolio

Modern AI/ML Engineer portfolio built with Next.js, TypeScript, Three.js and modern web technologies.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- React 19
- Tailwind CSS v4
- Three.js / React Three Fiber / Drei
- GSAP ScrollTrigger + Lenis
- Motion
- Zod + React Hook Form + Resend

## Features

- Interactive 3D hero with WebGL fallback
- AI/ML project case studies
- Responsive design
- SEO (sitemap, robots, Open Graph, JSON-LD)
- Accessibility and reduced-motion support
- Contact form with mailto fallback

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content editing

All portfolio content is data-driven:

- `src/data/projects.ts` — projects & case studies (**edit this to add projects**)
- `src/data/services.ts` — services
- `src/data/experience.ts` — experience timeline
- `src/data/writing.ts` — writing / insights
- `src/data/skills.ts` — capabilities
- `src/lib/constants.ts` — name, links, availability, site config

Update social / resume links in `src/lib/constants.ts` (currently `[ADD LINK]` placeholders).

## Contact form

Copy `.env.example` to `.env.local` and optionally set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
RESEND_API_KEY=...
RESEND_FROM_EMAIL=Portfolio <you@domain.com>
```

If `RESEND_API_KEY` is unset, the form returns a mailto fallback.

## Production

```bash
npm run build
npm run start
npm run lint
```

## Deployment

Hosted on Netlify. Connect the GitHub repository and deploy with:

- **Build command:** `npm run build`
- **Node version:** `22` (via `.nvmrc` / `netlify.toml`)
- **Publish directory:** leave blank (Netlify Next.js Runtime handles output)

In Netlify environment variables set:

- `NEXT_PUBLIC_SITE_URL` — your production URL (e.g. `https://keval-ai.netlify.app`)
- Optionally `RESEND_API_KEY` and `RESEND_FROM_EMAIL` for contact form email delivery

Also ensure **Publish directory** is empty in Build settings. Do not set it to `.next`, `out`, or `public`.

Pushes to `main` trigger automatic production deploys.
