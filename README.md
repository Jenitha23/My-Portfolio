# My Portfolio

Personal portfolio site for Jenitha Johnson Maxi — built with React + Vite as part of
the WIF Development Team onboarding project.

## Stack

- **React 19 + Vite** — front end
- **motion** — scroll/entrance animations
- **react-icons** — icon set
- **@emailjs/browser** — client-side contact form delivery (no backend)

## Content architecture

All copy — name, bio, skills, projects, education, certifications, experience, social
links — lives in [`src/data/portfolioData.js`](./src/data/portfolioData.js). Components
import and render that data; nothing is hardcoded into JSX. To update the site's
content, edit that one file — no component code needs to change.

## Running locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Contact form setup (EmailJS)

The contact form needs three EmailJS values, read from environment variables so no
keys are ever committed:

1. Create a free account at [emailjs.com](https://www.emailjs.com/) and set up an
   email service + template (the template should expect `user_name`, `user_email`,
   and `message` fields — these match the form's input names).
2. Copy `.env.example` to `.env`.
3. Fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
   `VITE_EMAILJS_PUBLIC_KEY` from your EmailJS dashboard.
4. Restart `npm run dev` so Vite picks up the new env vars.

`.env` is already git-ignored.

## Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, SectionLabel
  sections/       One file per portfolio section (Hero, About, Skills, ...)
  data/
    portfolioData.js   All site content lives here
  index.css       Design tokens + global styles
  App.jsx         Composes the sections
```

## Build & deploy

```bash
npm run build
```

Outputs to `dist/`. Deploy `dist/` to Vercel, Netlify, or GitHub Pages — or connect
the repo directly for automatic deploys on push. Remember to set the same three
`VITE_EMAILJS_*` env vars in your hosting provider's dashboard, since `.env` itself
is never pushed to the repo.
