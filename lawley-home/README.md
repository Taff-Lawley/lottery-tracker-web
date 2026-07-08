# lawley.de — Personal Portfolio

Live at **[www.lawley.de](https://www.lawley.de)** · Available in English and German.

Personal portfolio and project showcase for Adrian Lawley — Senior Full-Stack Developer with 20+ years of experience across PHP, Laravel, Vue.js, Flutter, Python, and AI tooling.

## Projects on the site

| Project | Tag | Stack highlights |
|---|---|---|
| [Strategy Tracker — App](https://strategy-tracker-app.lawley.de) | Web App | Flutter, Python, FastAPI, DuckDB, Fly.io |
| [Strategy Tracker — Web](https://strategy-tracker.lawley.de) | Landing Page | Astro, TypeScript, GitHub Actions |
| [Budget Insights](https://budget-insights.lawley.de) | Finance Dashboard | Laravel 12, Vue 3, Inertia, Chart.js, Pest |
| [Immo](https://immo-expose.lawley.de) | AI Tool | Vue 3, FastAPI, Claude AI (SSE streaming) |
| [Meeting Rater](https://meeting-rater.lawley.de) | Feedback Tool | Vue 3, Express, Claude AI, PostgreSQL |

## This site's stack

- **Framework:** Astro (static output)
- **i18n:** EN + DE via a single `i18n.ts` translation file
- **Deploy:** FTP to Strato (via GitHub Actions)
- **Screenshots:** `<picture>` elements serving WebP with PNG fallback

## Structure

```
public/
  images/
    screenshots/   # Project screenshots for gallery modal
  styles/
    global.css
  .htaccess        # Redirects lawley.de → www.lawley.de
src/
  components/
    GalleryModal.astro   # Lightbox modal (shared across pages)
    ProjectCard.astro    # Project card with optional screenshot gallery
  pages/
    index.astro          # DE (canonical)
    de/index.astro       # Redirects → /
    en/index.astro       # EN
  i18n.ts                # All translations + project data (screenshots live here)
```

## Adding a project or screenshot

1. Drop the image into `public/images/screenshots/`
2. Add an entry to the project's `screenshots` array in `src/i18n.ts` for **both** `en` and `de`:

```ts
screenshots: [
  { src: '/images/screenshots/my-image.png', caption: 'English caption' },
],
```

The gallery button appears automatically on the project card once the array is non-empty.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `localhost:4321`              |
| `npm run build`   | Build to `./dist/`                          |
| `npm run preview` | Preview build locally before deploying      |
