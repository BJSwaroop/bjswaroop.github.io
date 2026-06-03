# Swaroop — Personal Portfolio

A cinematic, futuristic one-page portfolio for **B. Jyothi Swaroop**, Associate Director,
Brand & Content. Built with Next.js 14 (App Router, static export), TypeScript, Tailwind CSS,
Framer Motion, and Lenis smooth scroll.

**Live: https://bjswaroop.github.io**

Deployed on **GitHub Pages** via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
Every push to `main` rebuilds the static export and redeploys automatically, no manual steps.
A `public/.nojekyll` file is included so the `_next/` asset folder is served correctly.

---

## 1. Assets needed from Swaroop

Everything else is built. These are the only missing pieces — drop them in and the
site is production-ready. Until then the site renders tasteful dark **placeholders**
with `[IMAGE: …]` captions, so nothing looks broken.

| # | Asset | Where it goes | Format |
|---|---|---|---|
| 1 | Hero portrait (cinematic, dark bg, confident pose) | Hero background | JPG/PNG, min 2000px wide |
| 2 | Story portrait (candid / approachable) | About section | JPG/PNG, min 1200px |
| 3 | Speaking photo (on stage — TEDx or IIT) | Speaking section | JPG/PNG, min 1200px |
| 4 | Meta OpenEnv Hackathon event photos (2–3) | Work section | JPG/PNG |
| 5 | SST campus / team photos | Work section | JPG/PNG |
| 6 | YouTube thumbnails: Python, C, HTML, "24 Lakhs CTC" | Flagship strip | PNG (as-is from YouTube) |
| 7 | Brand logos (Scaler, NxtWave, GFG, Replit, etc.) | Brands marquee | SVG preferred |
| 8 | Handwritten signature / "Swaroop" wordmark | Hero + Footer | SVG |
| 9 | Favicon / avatar (initials "S") | Tab icon | PNG 512×512 (an SVG fallback ships in `src/app/icon.svg`) |
| 10 | Formspree form ID | Contact form env var | String — create free at [formspree.io](https://formspree.io) |

---

## 2. Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

```bash
npm run build      # static export → ./out
npm run preview    # serve the exported ./out locally
```

---

## 3. Environment variables

```bash
cp .env.local.example .env.local
```

Then set your Formspree form ID:

```bash
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

- Create a free form at [formspree.io](https://formspree.io), copy the ID from its endpoint
  (`https://formspree.io/f/XXXXXXX` → `XXXXXXX`).
- If left blank, the contact form stays visible but shows a friendly
  "form isn't wired up yet — email me" message instead of submitting. No crash.

---

## 4. Editing content

**All copy lives in [`src/lib/content.ts`](src/lib/content.ts).** Edit text there —
never touch the component files for copy changes. Each section (hero, proof, about,
roles, work, empire, frameworks, systems, brands, speaking, contact, footer) is a typed
object. Change a string, save, done.

---

## 5. Adding real images

1. Drop files into [`public/images/`](public/images/).
2. In `content.ts`, replace the `[IMAGE: …]` strings with the real filename, e.g.
   `image: "/images/hero.jpg"`.
3. The placeholder component ([`ImagePlaceholder.tsx`](src/components/ImagePlaceholder.tsx))
   shows the `[IMAGE: …]` caption today. To use optimized images, swap a placeholder for
   `next/image`:

   ```tsx
   import Image from 'next/image';
   <Image src="/images/hero.jpg" alt="…" fill className="object-cover" />
   ```

   > Note: this project uses `output: 'export'`, so `next/image` runs with
   > `images.unoptimized: true` (set in `next.config.mjs`). If you deploy on Vercel and
   > want automatic image optimization, remove both `output: 'export'` and
   > `images.unoptimized` from the config.

The OG image referenced by metadata is `public/images/og-image.jpg` (1200×630) — add one
for rich link previews.

---

## 6. Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework is auto-detected as **Next.js**. No build settings to change.
4. Add the environment variable **`NEXT_PUBLIC_FORMSPREE_ID`** under
   *Settings → Environment Variables*.
5. **Deploy.** Because of `output: 'export'`, the result is a fully static site.

The build also produces a static `./out` directory you can host on any static host
(Netlify, Cloudflare Pages, GitHub Pages, S3).

---

## 7. Connect a custom domain

1. Vercel dashboard → your project → **Settings → Domains → Add**.
2. Enter `swaroop.dev` (or your domain).
3. Update DNS at your registrar:
   - **Apex** (`swaroop.dev`): `A` record → `76.76.21.21`
   - **www**: `CNAME` → `cname.vercel-dns.com`
4. Wait for DNS propagation (minutes to a few hours). Vercel issues SSL automatically.
5. Update `siteConfig.url` in `content.ts` to the live domain so OG tags + JSON-LD are correct.

---

## 8. Tech & structure

| | |
|---|---|
| Framework | Next.js 14 (App Router, `output: 'export'`) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animation | Framer Motion (scroll-linked transforms, stagger reveals) |
| Smooth scroll | Lenis |
| Fonts | Self-hosted Satoshi · Inter · JetBrains Mono (`next/font/local`, variable woff2) |
| Forms | Formspree |

```
src/
├── app/            layout (fonts, metadata, JSON-LD), page (section assembly), globals.css, icon.svg
├── components/     22 components — sections + reusable primitives
├── lib/            content.ts (all copy) · motionVariants.ts (shared animations)
└── hooks/          useInView.ts (IntersectionObserver)
```

### Signature interactions

- **Hero** — sticky, fades + scales as you scroll "through" it; ambient amber particle
  canvas; cursor-follow glow; letter-by-letter name reveal.
- **Proof** — counters with a "decryption" digit-scan before resolving (Indian number format).
- **Roles** — scroll-pinned 3-card stack (300vh) that transitions on scroll; stacks on mobile.
- **Work** — featured case study + grid + scroll-linked horizontal flagship film strip.
- **Empire** — 18 properties orbiting in 3 concentric rings (CSS 3D), hover a node to inspect;
  categorized grid on mobile.
- **Brands** — infinite marquee, pauses on hover.

---

## 9. Accessibility & motion

- Respects `prefers-reduced-motion` — disables Lenis, orbital rotation, particle loop,
  marquee, and all reveal animations.
- Skip-to-content link, semantic landmarks, labelled form fields, visible amber focus rings,
  keyboard-operable nav + orbital nodes.

---

© B. Jyothi Swaroop. Built to be edited from one file.
