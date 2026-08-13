# Jenitha Johnson Maxi — Portfolio

A fast, data-driven developer portfolio built with React and Vite. Content lives in a
single config file, styling is token-based (easy to re-theme), and the contact form
sends real email via EmailJS with no backend required.

**Live site:** [my-portfolio-omega-sable-25.vercel.app](https://my-portfolio-omega-sable-25.vercel.app/)
**Repository:** [github.com/Jenitha23/My-Portfolio](https://github.com/Jenitha23/My-Portfolio)

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Using this as your own portfolio](#using-this-as-your-own-portfolio)
  - [1. Update your content](#1-update-your-content)
  - [2. Add your profile photo](#2-add-your-profile-photo)
  - [3. Set up the contact form](#3-set-up-the-contact-form)
  - [4. Customize the look](#4-customize-the-look)
- [Project structure](#project-structure)
- [Available scripts](#available-scripts)
- [Deployment](#deployment)
  - [Vercel](#vercel)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

- **Data-driven content** — all copy (bio, skills, experience, projects, education,
  socials) lives in one file (`src/data/portfolioData.js`); no text is hardcoded into
  components.
- **Section-based layout** — Hero, About, Skills, Experience, Projects, Education,
  Contact, each as an isolated component with its own scoped CSS.
- **Scroll-aware navigation** — sticky navbar with a scroll-progress indicator and
  active-section highlighting.
- **Motion-driven UI** — entrance and scroll-triggered animations via `motion`,
  respecting `prefers-reduced-motion`.
- **Profile avatar with graceful fallback** — shows your photo once set, otherwise
  displays a styled initials badge so the UI never breaks.
- **Working contact form** — client-side email delivery via EmailJS, no backend.
- **Responsive** — mobile nav, fluid type scale, and breakpoints throughout.

## Tech stack

| Purpose            | Library                                            |
| ------------------ | --------------------------------------------------- |
| Framework / bundler | React 19 + Vite                                    |
| Animation           | [`motion`](https://motion.dev) (Framer Motion successor) |
| Icons                | `react-icons`                                      |
| Contact form          | `@emailjs/browser`                                 |
| Linting               | ESLint                                              |

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (ships with Node) — or swap commands for `yarn`/`pnpm` if you prefer

## Quick start

```bash
# 1. Clone your fork
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open `http://localhost:5173` — the site hot-reloads as you edit.

---

## Using this as your own portfolio

### 1. Update your content

Open [`src/data/portfolioData.js`](./src/data/portfolioData.js) and edit the fields
below. Every section on the site reads from this file — you don't need to touch any
component code to update your content.

| Key              | Type              | Notes                                                            |
| ---------------- | ----------------- | ------------------------------------------------------------------ |
| `personal`        | object            | `name`, `role`, `tagline`, `location`, `email`, `phone`, `profileImage` |
| `about.description` | string          | Your bio paragraph                                                |
| `skills`           | object of arrays | Grouped skill lists, e.g. `programmingLanguages`, `frontend`, `backend`, `databases`, `tools`, `other` |
| `experience`       | array of objects | Internships / jobs                                                |
| `education`        | array of objects | `{ institution, degree, period }`                                 |
| `certifications`    | array of objects | `{ title, issuer, date }`                                         |
| `projects`         | array of objects | `{ title, description, technologies[], github, demo }`             |
| `achievements`     | array            | Optional — awards or highlights                                    |
| `socialLinks`      | object            | `github`, `linkedin`, `email`                                     |

Leave an array empty (`[]`) or a string empty (`""`) to omit that item — components
skip empty sections automatically.

### 2. Add your profile photo

`personal.profileImage` controls the avatar shown in both the navbar and hero
section. It's empty by default, so both fall back to a styled initials badge until
you add a real photo.

1. Drop an image into `public/` (e.g. `public/profile.jpg`).
2. Set the path in `portfolioData.js`:
   ```js
   profileImage: "/profile.jpg",
   ```

The `Avatar` component (`src/components/Avatar.jsx`) picks this up automatically —
no other changes needed.

### 3. Set up the contact form

The form uses [EmailJS](https://www.emailjs.com/) to send messages straight to your
inbox from the front end — no server required.

1. Create a free EmailJS account and set up an **email service** and **template**.
   Your template should expect three variables: `user_name`, `user_email`, `message`
   (these match the form's field names).
2. Copy `.env.example` to `.env` in the project root (create one if it doesn't
   exist).
3. Fill in your own values:
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Restart `npm run dev` so Vite picks up the new environment variables.

`.env` is already listed in `.gitignore` — never commit real keys.

### 4. Customize the look

All design tokens (colors, fonts, spacing, radius) are defined once at the top of
[`src/index.css`](./src/index.css) as CSS custom properties:

```css
:root {
  --bg: #0e1420;
  --accent: #e8a33d;
  --teal: #4fd1c5;
  --font-display: "Space Grotesk", "Segoe UI", sans-serif;
  --font-body: "IBM Plex Sans", "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, Consolas, monospace;
  /* ... */
}
```

Changing a value here updates it site-wide — no need to hunt through individual
component stylesheets. To swap fonts, update the Google Fonts `<link>` in
`index.html` to match.

---

## Project structure

```
├── public/                  Static assets (favicon, icons, profile photo)
├── src/
│   ├── components/          Reusable UI: Navbar, Footer, SectionLabel, Avatar
│   ├── sections/            One component + CSS file per portfolio section
│   ├── data/
│   │   └── portfolioData.js All site content — edit this to make it yours
│   ├── index.css             Design tokens + global styles
│   ├── App.jsx                Composes all sections into the page
│   └── main.jsx                React entry point
├── index.html
├── vite.config.js
└── package.json
```

## Available scripts

| Command           | Description                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`       | Start the local dev server with hot reload     |
| `npm run build`     | Type-check and build for production into `dist/` |
| `npm run preview`   | Preview the production build locally           |
| `npm run lint`      | Run ESLint across the project                  |

---

## Deployment

Build first:

```bash
npm run build
```

This outputs a static site to `dist/`. Any static host works — three common options:

### Vercel

1. Push your repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects
   Vite.
3. Add your `VITE_EMAILJS_*` variables under **Project Settings → Environment
   Variables**.
4. Deploy. Every push to `main` redeploys automatically.

### Netlify

1. Push your repo to GitHub.
2. [Add a new site](https://app.netlify.com/start) from Git.
3. Build command: `npm run build` · Publish directory: `dist`
4. Add your `VITE_EMAILJS_*` variables under **Site settings → Environment
   variables**.

### GitHub Pages

1. Set `base` in `vite.config.js` to your repo name:
   ```js
   export default defineConfig({
     base: "/<your-repo-name>/",
     // ...
   });
   ```
2. Build and deploy the `dist/` folder (e.g. with the
   [`gh-pages`](https://www.npmjs.com/package/gh-pages) package, or a GitHub Actions
   workflow).
3. GitHub Pages doesn't support environment variables at build time the way
   Vercel/Netlify do — for a static export, you'd need to bake `VITE_EMAILJS_*`
   values into the build via a GitHub Actions secret, or use Vercel/Netlify instead
   if you need the contact form to work post-deploy.

> Whichever host you choose, remember: env vars set locally in `.env` are **not**
> pushed to your repo, so you must set them again in your hosting provider's
> dashboard or the contact form won't work on the live site.

---

## Troubleshooting

| Problem                                   | Fix                                                                 |
| ------------------------------------------ | -------------------------------------------------------------------- |
| Contact form fails silently / no email arrives | Double-check `VITE_EMAILJS_*` values and that your EmailJS template's variable names match `user_name`, `user_email`, `message` |
| Avatar shows initials instead of my photo    | Confirm the image is inside `public/` and `profileImage` in `portfolioData.js` starts with `/` |
| Styles look unstyled / fonts missing         | Check the Google Fonts `<link>` in `index.html` matches the font names in `index.css` |
| `npm run build` fails                        | Run `npm install` again to make sure dependencies match `package-lock.json` |

---

## License

This project is open to reuse as a portfolio template. If you fork it, please swap
out the personal content in `portfolioData.js` before publishing your own version.
