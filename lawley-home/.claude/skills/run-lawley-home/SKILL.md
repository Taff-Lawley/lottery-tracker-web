---
description: Launch and preview the lawley-home Astro site locally
---

# Run lawley-home

Build and start the Astro preview server, then open in the browser.

## Steps

1. Build the site:
```bash
cd /Users/adrian/Documents/lottery/website/lawley-home && npm run build
```

2. Start the preview server in the background:
```bash
cd /Users/adrian/Documents/lottery/website/lawley-home && npm run preview -- --port 4321 &
sleep 2
```

3. Verify it's up:
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/
```

4. Open in the browser:
```bash
open http://localhost:4321/
```

The site runs at http://localhost:4321/ (DE) and http://localhost:4321/en/ (EN).

## Stop the server
```bash
kill $(lsof -ti :4321)
```
