/* ============================================================
   SITE CONTENT — single source of truth.
   Edit text, links, skills and projects HERE.
   Nothing else needs to change to update the site copy.
   ============================================================ */

/* ---------- IDENTITY / HEADER ---------- */
export const profile = {
  name: 'Raihaan',
  greeting: "Hi. I'm Raihaan",
  role: 'FULLSTACK WEB DEVELOPER',
  identity: 'Raihaan — XI RPL, SMKN 6 Surakarta',
  className: 'XI RPL',
  school: 'SMKN 6 Surakarta',
  headline:
    'UI/UX Designer · Fullstack Web Developer · Mobile App Developer · Data Science Enthusiast',
  // Photo file lives in: public/images/profileku.jpeg
  // Set to null to show a "PHOTO PENDING" placeholder box instead.
  photo: '/images/profileku.jpeg',
  photoAlt: 'Portrait of Raihaan',
  // Terminal-style availability badge in the header.
  status: '$ Raihaan --available',
}

/* ---------- NAVIGATION ---------- */
export const navLinks = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
]

/* ---------- ABOUT ---------- */
export const about = {
  paragraphs: [
    "Hi, I'm Raihaan — an XI RPL student at SMKN 6 Surakarta who is genuinely excited about the world of technology. Every day I like to learn how things work behind a screen, from the way an interface is designed to the way data tells a story.",
    "Along the way I explore UI/UX design, fullstack web development, mobile app development, and data science. My dream is to become a Data Scientist, so I keep building projects and sharpening my skills one step at a time.",
  ],
  stats: [
    { marker: '01', label: 'CLASS', value: 'XI RPL' },
    { marker: '02', label: 'SCHOOL', value: 'SMKN 6 SURAKARTA' },
    { marker: '03', label: 'GOAL', value: 'DATA SCIENTIST' },
  ],
}

/* ---------- SKILLS ---------- */
export const skills = [
  {
    id: 'uiux',
    title: 'UI/UX DESIGN',
    tools: ['Figma', 'FigJam', 'Adobe Photoshop', 'Canva'],
  },
  {
    id: 'web',
    title: 'FULLSTACK WEB DEVELOPMENT',
    tools: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 'mobile',
    title: 'MOBILE APP DEVELOPMENT',
    tools: ['Flutter', 'Dart', 'SQLite', 'Firebase'],
  },
  {
    id: 'data',
    title: 'DATA SCIENCE',
    tools: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook'],
  },
]

/* ---------- PROJECTS ----------
   Adding a new project = add one more object to this array.
   - frame: 'browser' (desktop app) or 'phone' (mobile app)
   - screenshot: path under public/ , or null to show the
     "SCREENSHOT PENDING" placeholder.
   - link url: null => the button renders in disabled style.
--------------------------------------------------------------- */
export const projects = [
  {
    id: 'jadwalin',
    category: 'FULLSTACK WEB DEVELOPMENT',
    frame: 'browser',
    urlBar: '/projects/jadwalin.png',
    // TODO: drop the screenshot into public/projects/jadwalin.png
    // then set: screenshot: '/projects/jadwalin.png'
    screenshot: null,
    screenshotAlt: 'Jadwalin AI Calender interface screenshot',
    title: 'JADWALIN AI CALENDER',
    status: 'IN PROGRESS',
    description: 
      'A smart AI-powered calendar platform that helps users manage schedules through natural language chat interaction with an AI assistant named Aijin. Features intelligent event creation, visual calendar with circular heatmap density indicators, and floating modal dialogs. Built with a modern Bauhaus Neo-Brutalist design approach for a unique user experience.',
    tags: ['REACT', 'VITE', 'JAVASCRIPT', 'HTML', 'CSS', 'GEMINI API'],
    links: [
      // TODO: replace with your real repository URL
      { label: 'GITHUB', url: 'https://github.com/IMurai/jadwalin.git', variant: 'primary' },
      // TODO: add the deployed URL, then the button becomes clickable
      { label: 'LIVE DEMO', url: null, variant: 'muted' },
    ],
  },
  {
    id: 'duitku',
    category: 'MOBILE APP DEVELOPMENT',
    frame: 'phone',
    urlBar: '/projects/duitku.png',
    // TODO: drop the screenshot into public/projects/duitku.png
    // then set: screenshot: '/projects/duitku.png'
    screenshot: null,
    screenshotAlt: 'Duitku Tracker app screenshot',
    title: 'DUITKU TRACKER',
    status: 'IN PROGRESS',
    description:
      'A personal finance app for recording income and expenses by category, with monthly summaries and charts. Works fully offline with local storage, so data stays on the device.',
    tags: ['KOTLIN', 'FIGMA', 'FIREBASE', 'FLCHART'],
    links: [
      // TODO: replace with your real repository URL
      { label: 'GITHUB', url: null, variant: 'primary' },
      // TODO: add a downloadable APK URL, then the button becomes clickable
      { label: 'DOWNLOAD APK', url: null, variant: 'muted' },
    ],
  },
]

/* ---------- CONTACT ---------- */
export const contact = {
  title: 'CONTACT + SOCIAL MEDIA',
  line: "Open for collaboration and learning. Let's talk.",
  // TODO: replace with your real email address
  email: 'raihaan@example.com',
  socials: [
    {
      label: 'GITHUB',
      // TODO: replace with your real GitHub profile URL
      url: 'https://github.com/IMurai',
    },
    {
      label: 'LINKEDIN',
      // TODO: replace with your real LinkedIn profile URL
      url: 'https://www.linkedin.com/in/your-username',
    },
    {
      label: 'INSTAGRAM',
      // TODO: replace with your real Instagram profile URL
      url: 'https://www.instagram.com/im.murai',
    },
  ],
}

/* ---------- FOOTER ---------- */
export const footer = {
  copyright: '© 2026 Raihaan — SMKN 6 Surakarta',
}
