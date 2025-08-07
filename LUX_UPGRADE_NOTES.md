# Luxury Theme Upgrade (GPT‑5)

This modifies the existing Next.js/Tailwind project to a high-end, dark+gold aesthetic with a subtle 3D feel.

## What changed
- Added **gold/gradient/glow** helpers in `styles/globals.css`:
  - `.card-lux`, `.card-inner`, `.btn-gold`, `.gold-text`, `.title-glow`, `.text-muted`, `.table-hairline`.
- Wrapped header and key cards/tables in **card-lux** with gold rim + inner shadow.
- Updated **MarketOverview**, **CoinTable**, and **CoinRow** styles.
- Added page title “Today’s Cryptocurrency Prices”.

## Keep/Improve Features
- All data fetching, search, degen toggle, and charts remain unchanged.
- Styles are additive. If something looks off, remove classes gradually to isolate.

## Run
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Optional polish next
- Replace primary CTA with `<button class="btn-gold">` in the header.
- Add gradient strokes to sparklines using canvas glow (Chart.js) or add an SVG sparkline with blur.
- Move palette to Tailwind tokens if you want design tokens.