Build a personal portfolio website for a vocational high school student named Raihaan. Use the reference description below very closely for the visual style.

## TECH STACK
- Vite + React (JavaScript), plain CSS with CSS variables (no heavy UI libraries)
- Single-page, scroll-based layout with smooth scrolling and anchor navigation
- Fully responsive (mobile-first, test at 360px, 768px, 1280px)
- Deployment-ready for Vercel (working `npm run build`, output in `dist`)
- All site content lives in ONE data file (src/data/content.js) so I can edit text, links, and projects easily
- Language of all content: English

## DESIGN: LIGHT NEO-BRUTALISM
- Background: very light grey-white (#F8F9FB) with a subtle square grid pattern (thin light-grey lines, ~40px cells)
- Primary color: vivid purple (#8B3CF0). Secondary accent: green (#22C55E). Text: near-black (#1A1A1F). Use orange (#FF4D00) ONLY for the "IN PROGRESS" status badge and small marker squares
- Thick 2-3px dark borders, no rounded corners, hard offset shadows (e.g. 6px 6px 0 purple or dark) instead of blur
- Fonts: bold grotesk for headings (Space Grotesk), monospace for body, labels and buttons (JetBrains Mono or Space Mono). Labels are UPPERCASE with wide letter-spacing
- Buttons look like boxes with a hard shadow; on hover they shift 2px and the shadow shrinks. Active/selected nav item is filled purple with white text
- Terminal-style touches: bracketed buttons like [GITHUB], a "$ Raihaan --available" badge with a small blinking green dot

## HEADER (sticky)
- Left: "Hi. I'm Raihaan" in bold, with "FULLSTACK WEB DEVELOPER" in small purple monospace uppercase below it
- Center: nav buttons HOME, ABOUT, SKILLS, PROJECTS, CONTACT (boxed, grey border, active one filled purple, highlights based on scroll position)
- Right: terminal badge "$ Raihaan --available" in a black-bordered box with hard shadow
- Purple 4px line under the header
- On mobile: collapse nav into a hamburger menu with a boxed dropdown; keep the terminal badge hidden or compact

## SECTIONS (all four are mandatory)

### 01 — HOME / IDENTITAS
- Profile photo + name + class info: "Raihaan — XI RPL, SMKN 6 Surakarta"
- Short headline: "UI/UX Designer · Fullstack Web Developer · Mobile App Developer · Data Science Enthusiast"
- Photo in a brutalist frame (thick border, offset purple shadow)
- Profile photo: look in my Downloads folder for a file named "profileku" (any extension: jpg/jpeg/png/webp), copy it into public/images/ and use it. If you can't find it, use a clear placeholder box labeled "PHOTO PENDING" and tell me where to put the file
- CTA buttons: [VIEW PROJECTS] (scroll to projects) and [CONTACT ME]

### 02 — ABOUT ME / TENTANG SAYA
- A short, friendly first-person story, 2 short paragraphs: I'm Raihaan, an XI RPL student at SMKN 6 Surakarta, interested in the world of technology, and my dream is to become a Data Scientist. Mention I explore UI/UX design, fullstack web development, mobile app development, and data science along the way
- Add 3 small stat/fact boxes (e.g. "XI RPL", "SMKN 6 SURAKARTA", "GOAL: DATA SCIENTIST")

### 03 — SKILLS
Four boxed category cards, each with a purple header bar and 4 main tools shown as tool tags (uppercase, bordered):
- UI/UX DESIGN: Figma, FigJam, Adobe Photoshop, Canva
- FULLSTACK WEB DEVELOPMENT: React, Node.js, Express, PostgreSQL
- MOBILE APP DEVELOPMENT: Flutter, Dart, SQLite, Firebase
- DATA SCIENCE: Python, Pandas, NumPy, Jupyter Notebook
Add a small hover effect on tags (turn green).

### 04 — PROJECTS (minimum 2, school projects)
Two-column grid on desktop, one column on mobile. Each card: purple header bar with category label, a media area, title + status badge, description, tech tags, and action buttons.

Project 1
- Header label: FULLSTACK WEB DEVELOPMENT
- Media: browser-window mockup (three small squares at top-left, URL bar showing "/projects/educlass.png"); inside, show the screenshot if available, otherwise a "SCREENSHOT PENDING" placeholder with a small orange square
- Title: EDUCLASS LMS, badge: IN PROGRESS (orange outline)
- Description: "A simple e-learning platform where teachers create classes, upload materials, and assign tasks, while students enroll, submit assignments, and track their grades. Features role-based access (admin, teacher, student) with JWT authentication."
- Tags: REACT, NODE.JS, EXPRESS, POSTGRESQL, JWT, DOCKER
- Buttons: [GITHUB] (filled light purple), [LIVE DEMO] (grey/disabled style until a link is added)

Project 2
- Header label: MOBILE APP DEVELOPMENT
- Media: phone-frame mockup (thick border, small notch bar at top) with the screenshot or a "SCREENSHOT PENDING" placeholder
- Title: DUITKU TRACKER, badge: IN PROGRESS
- Description: "A personal finance app for recording income and expenses by category, with monthly summaries and charts. Works fully offline with local storage, so data stays on the device."
- Tags: FLUTTER, DART, SQLITE, FL_CHART
- Buttons: [GITHUB], [DOWNLOAD APK] (disabled style until a link is added)

Make the project list data-driven so adding a third project only needs a new object in content.js. If a project has no link yet, render the button in disabled style instead of hiding it.

### 05 — CONTACT + SOCIAL MEDIA
- Boxed contact section with a short line like "Open for collaboration and learning. Let's talk."
- Email button (mailto) plus social links as brutalist buttons: GitHub, LinkedIn, Instagram. Use clearly marked placeholder URLs/handles in content.js (e.g. "https://github.com/your-username") with TODO comments
- Simple footer: "© 2026 Raihaan — SMKN 6 Surakarta"

## EXTRA QUALITY REQUIREMENTS
- Clean component structure: Header, Hero, About, Skills, Projects, ProjectCard, Contact, Footer
- Semantic HTML, alt text for images, good color contrast, keyboard-focus styles (thick purple outline)
- Subtle reveal-on-scroll animation (respect prefers-reduced-motion)
- Add proper <title>, meta description, and a simple favicon
- No horizontal scroll on mobile; touch targets at least 44px

## DEPLOYMENT (VERCEL)
- Make sure `npm install` and `npm run build` pass without errors
- Add a short README with: how to run locally, where to edit content (src/data/content.js), where to put images (public/images/), and step-by-step instructions to deploy to Vercel (via GitHub import and via Vercel CLI)

When finished, summarize what you built and list exactly which placeholders I still need to fill in (social links, project links, screenshots).