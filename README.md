# IntegraLayer — Website

Landing page + interactive verification demo for [IntegraLayer](https://www.integralayer.io).

Neutral infrastructure for public certification verification.

## Structure

```
.
├── index.html              # Landing page
├── assets/
│   ├── styles.css          # All site styles
│   ├── app.js              # Nav + scroll reveal
│   └── img/                # Logos, favicon, phone mockup
└── demo/
    ├── index.html          # Framed interactive demo page
    ├── verification.html   # The clickable mobile verification widget
    └── verification-embed.html  # Compact Wix-embed variant of the widget
```

## Running locally

This is a plain static site — no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Any static host works. Easiest paths:

- **GitHub Pages** — Settings → Pages → Deploy from `main` branch, root folder.
- **Netlify** — Drag-and-drop the folder at app.netlify.com/drop.
- **Vercel** — `vercel` in this folder.

## Calls to action

The "Book a call" / "Request Pilot" buttons link to:
`https://calendly.com/rachel-integralayer/30min`

Update in `index.html` and `demo/index.html` if the scheduling link changes.
