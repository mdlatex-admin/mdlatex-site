# LMK Group — Digital Directory

One-page mobile-first site for LMK Group (Lim Meng Kee, Seri Astana, MD Latex).
Built with React + Vite. All images are embedded — no external assets needed.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel (easiest)

1. Push this folder to a GitHub repo
2. Go to vercel.com → Add New Project → Import the repo
3. Vercel auto-detects Vite. Just click Deploy. Done.

## Editing content

Everything lives in `src/App.jsx`:

- **Shop info / addresses / hours** → `SHOP_META` and `TRANSLATIONS` objects (top of file)
- **WhatsApp number** → `WHATSAPP` constant
- **Contact name** → `PIC` constant
- **Map links** → `mapUrl` in `SHOP_META` (use Google Maps share links for best results)
- **Agency logos** → `AGENCY_LOGOS`
- **Translations** → `TRANSLATIONS` (en / zh / vi / bm)
