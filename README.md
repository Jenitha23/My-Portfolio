# My Portfolio

Personal portfolio site for Jenitha Johnson Maxi — built with React + Vite as part of
the WIF Development Team onboarding project.

**Live site:** _add your deployed URL here_
**Repository:** _add your GitHub repo URL here_

## Stack

- **React 19 + Vite** — front end
- **motion** — scroll/entrance animations
- **react-icons** — icon set
- **@emailjs/browser** — client-side contact form delivery (no backend)

## Content architecture

All copy — name, bio, skills, projects, education, certifications, experience, social
links, and profile image — lives in
[`src/data/portfolioData.js`](./src/data/portfolioData.js). Components import and
render that data; nothing is hardcoded into JSX. To update the site's content, edit
that one file — no component code needs to change.

## Running locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Profile photo

`portfolioData.personal.profileImage` controls the avatar shown in the navbar and
hero section. It's empty by default, so both fall back to a styled initials badge
(e.g. "JM") until a real photo is added.

To add one:

1. Drop an image into `public/` (e.g. `public/profile.jpg`).
2. In `src/data/portfolioData.js`, set:
   ```js
   profileImage: "/profile.jpg",
   ```

The `Avatar` component (`src/components/Avatar.jsx`) picks it up automatically in
both places.

## Contact form setup (EmailJS)

The contact form needs three EmailJS values, read from environment variables so no
keys are ever committed:

1. Create a free account at [emailjs.com](https://www.emailjs.com/) and set up an
   email service + template (the template should expect `user_name`, `user_email`,
   and `message` fields — these match the form's input names).
2. Copy `.env.example` to `.env` (or edit the existing `.env`).
3. Fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
   `VITE_EMAILJS_PUBLIC_KEY` from your EmailJS dashboard.
4. Restart `npm run dev` so Vite picks up the new env vars.

`.env` is already git-ignored — never commit real keys.

## Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, SectionLabel, Avatar
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

## Onboarding deliverables checklist

- [ ] Public GitHub repository with incremental commit history
- [ ] Live, deployed URL (Vercel / Netlify / GitHub Pages / Azure / AWS)
- [x] Content driven from a structured data file (`src/data/portfolioData.js`)
      rather than hardcoded into components
- [x] README covering what the project is and how to run it locally (this file)
- [ ] Working contact form wired up with EmailJS and environment variables
      (form is built — confirm your own `.env` values are set and tested end-to-end)
