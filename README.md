# Kasboek Budget Tracker (Mobile-first PWA)

Dit project is een installable web app (PWA) voor Android en desktop.

## Bestanden

- `index.html` — hoofdapp
- `manifest.json` — install-informatie voor Android/Chrome
- `sw.js` — service worker (caching + offline fallback)
- `offline.html` — fallback scherm zonder internet
- `icon-192.png` en `icon-512.png` — app-iconen voor installatie

## Lokaal starten

Open de app niet via `file://`, maar via een lokale webserver.

### Optie 1: Python

```bash
python -m http.server 8080
```

Ga naar: `http://localhost:8080`

### Optie 2: Node

```bash
npx serve . -l 8080
```

Ga naar: `http://localhost:8080`

## Installeren op Android

1. Open de app in Chrome op je Android telefoon.
2. Tik op de knop **Installeer app** in de app (als zichtbaar).
3. Of gebruik Chrome-menu `⋮` → **App installeren** / **Toevoegen aan startscherm**.

Na installatie draait de app in standalone modus zoals een normale telefoon-app.

## Opmerkingen

- Data wordt lokaal opgeslagen in `localStorage` van de browser.
- Voor productie moet je hosten via HTTPS (bijv. GitHub Pages, Netlify, Vercel of eigen domein).