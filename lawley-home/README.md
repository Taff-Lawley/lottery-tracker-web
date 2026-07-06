# lawley.de — Personal Site

Astro static site for [lawley.de](https://www.lawley.de). Deployed to Strato via FTP.

## Structure

```
public/
  images/
    screenshots/   # Project screenshots for gallery modal
  styles/
    global.css     # All styles
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

## Adding screenshots to a project

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
