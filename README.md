# Strategy Tracker — Marketing Website

Landing page and supporting pages for the Strategy Tracker lottery app.

Live at **[strategy-tracker.lawley.de](https://strategy-tracker.lawley.de)**

## Stack

- **Framework**: Astro (static output)
- **i18n**: EN, DE, FR via `src/i18n/translations.ts`
- **Deploy**: Strato (`strategy-tracker/` path) via GitHub Actions rsync on push to `main`

## Pages

| Route | Description |
|---|---|
| `/` | Main landing page (hero, features, download CTA) |
| `/faq` | Frequently asked questions |
| `/legal` | Legal notice (Impressum) |
| `/privacy` | Privacy policy |
| `/reset-password` | Password reset handler (deep-linked from app emails) |

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview build locally |

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds **both** this site and the `lawley-home/` personal portfolio in a single workflow on push to `main`, then rsyncs each to its respective Strato directory.

## Also in this repo

`lawley-home/` — Adrian Lawley's personal portfolio site (lawley.de). Separate Astro project, co-deployed by the same workflow. See [lawley-home/README.md](lawley-home/README.md).
