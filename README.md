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

## Native Android app (Capacitor)

Deze repo bevat nu ook een native Android wrapper via Capacitor.

### Eerste setup

```bash
npm install
```

### Web assets naar native project syncen

```bash
npm run cap:sync
```

### Android project openen

```bash
npm run android:open
```

Open daarna in Android Studio:

1. Wacht tot Gradle sync klaar is.
2. Kies een telefoon (USB debugging) of emulator.
3. Klik **Run** om APK te installeren op je toestel.

Voor release build (Play Store): gebruik in Android Studio **Build > Generate Signed Bundle / APK**.

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

> Met Capacitor krijg je een echte native app-installatie (APK), niet alleen browser-PWA.

## Gratis opslag via GitHub (backup/herstel)

De app heeft nu twee knoppen:

- `☁️ Backup GitHub`
- `♻️ Herstel GitHub`

De backup wordt versleuteld (AES-GCM) opgeslagen in een **private GitHub Gist**.

### Eenmalig: GitHub token maken

1. Ga naar GitHub → Settings → Developer settings → Personal access tokens.
2. Maak een token met alleen scope: `gist`.
3. Bewaar dit token veilig.

### Backup

1. Klik `☁️ Backup GitHub`.
2. Vul token in.
3. Kies een encryptie-wachtwoord.
4. Laat Gist ID leeg om een nieuwe backup-gist te maken, of vul een bestaande in om te updaten.

### Herstel

1. Klik `♻️ Herstel GitHub`.
2. Vul token in.
3. Vul Gist ID in.
4. Vul hetzelfde encryptie-wachtwoord in.

> Het token wordt niet permanent opgeslagen in de app.
> Zonder het juiste wachtwoord kan de backup niet gelezen worden.

## Opmerkingen

- Data wordt lokaal opgeslagen in `localStorage` van de browser.
- Voor productie moet je hosten via HTTPS (bijv. GitHub Pages, Netlify, Vercel of eigen domein).