# Moses Kamya — Portfolio

Personal portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployable to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a repo (e.g. `mkamya20.github.io` for a root site, or `Portfolio` for a project site).
2. Push this folder to the repo.
3. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. On push to `main`, the workflow in `.github/workflows/deploy.yml` builds and deploys `dist/`.

### Project site URL (`/Portfolio/`)

If the site is served at `https://<username>.github.io/Portfolio/`, update `astro.config.mjs`:

```js
base: "/Portfolio/",
site: "https://<username>.github.io",
```

## Customize content

Edit `src/data/site.ts` for experience, projects, skills, and links. Replace `public/Resume_In.docx` when you update your resume.

Your profile photo should be saved as `public/profile.png` (used in the hero section).

## LinkedIn URL

If your LinkedIn profile URL differs from the one in `site.ts`, update `links.linkedin` in `src/data/site.ts`.
