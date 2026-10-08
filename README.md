# Raihaan — Personal Portfolio

A single-page personal portfolio for **Raihaan** (XI RPL, SMKN 6 Surakarta), built with **Vite + React (JavaScript)** and plain CSS. Visual style: **light neo-brutalism** — thick borders, hard offset shadows, purple/green accents, monospace labels.

## Tech stack

- Vite + React 18 (JavaScript, JSX)
- Plain CSS with CSS variables (no UI libraries)
- Google Fonts: Space Grotesk (headings) + JetBrains Mono (body/labels)
- Deployed on Vercel (static build → `dist/`)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Production build:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Where to edit content

**Almost everything lives in one file: [`src/data/content.js`](src/data/content.js)**

| What you want to change | Where in `content.js` |
| --- | --- |
| Name, role, headline, photo | `profile` |
| Nav labels/order | `navLinks` |
| About text + 3 stat boxes | `about` |
| Skill categories + tools | `skills` |
| Projects (add/remove/edit) | `projects` |
| Email + social links | `contact` |
| Footer copyright | `footer` |

### Adding a new project

Add one more object to the `projects` array — nothing else needs to change:

```js
{
  id: 'my-new-project',
  category: 'FULLSTACK WEB DEVELOPMENT', // shown in the purple header bar
  frame: 'browser',                       // 'browser' or 'phone'
  urlBar: '/projects/new.png',            // fake URL shown in the mockup
  screenshot: null,                       // path under public/, or null
  screenshotAlt: 'New project screenshot',
  title: 'MY NEW PROJECT',
  status: 'IN PROGRESS',                  // or e.g. 'DONE' (green badge)
  description: 'What the project does…',
  tags: ['REACT', 'NODE.JS'],
  links: [
    { label: 'GITHUB', url: 'https://github.com/you/repo', variant: 'primary' },
    { label: 'LIVE DEMO', url: null, variant: 'muted' }, // null = disabled button
  ],
}
```

> A link with `url: null` automatically renders as a **disabled grey button**, never hidden.

## Where to put images

| Image | Path |
| --- | --- |
| Profile photo | `public/images/profileku.jpeg` (already in place) |
| Project screenshots | `public/projects/<name>.png` |
| Favicon | `public/favicon.svg` |

After adding a project screenshot, set `screenshot: '/projects/<name>.png'` on that project in `content.js`; otherwise the card shows the "SCREENSHOT PENDING" placeholder.

## Deploy to Vercel

### Option A — GitHub import (easiest)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** your repository.
3. Vercel auto-detects **Vite**. Keep the defaults:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Done — every push to `main` redeploys automatically.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel          # first run: answer the prompts (defaults are fine)
vercel --prod   # deploy the production version
```

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/profileku.jpeg
├── src/
│   ├── components/
│   │   ├── Header.jsx / Header.css      # sticky header, nav, hamburger, status badge
│   │   ├── Hero.jsx / Hero.css          # 01 home / identitas
│   │   ├── About.jsx / About.css        # 02 tentang saya
│   │   ├── Skills.jsx / Skills.css      # 03 skills
│   │   ├── Projects.jsx / Projects.css  # 04 projects grid
│   │   ├── ProjectCard.jsx / ProjectCard.css
│   │   ├── Contact.jsx / Contact.css    # 05 contact + socials
│   │   └── Footer.jsx / Footer.css
│   ├── hooks/
│   │   ├── useReveal.js                 # reveal-on-scroll (respects reduced motion)
│   │   └── useScrollSpy.js              # highlights the active nav item
│   ├── data/content.js                  # ← edit all site content here
│   ├── styles/global.css                # design tokens, buttons, utilities
│   ├── App.jsx
│   └── main.jsx
├── index.html                           # title, meta description, fonts
├── vite.config.js
└── package.json
```

## Accessibility notes

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`), skip link, alt text on images
- Thick purple `:focus-visible` outline on every interactive element
- Touch targets ≥ 44px, no horizontal scrolling on mobile
- Reveal animations are disabled when the OS sets `prefers-reduced-motion`
"# portfolio-for-enuma" 
