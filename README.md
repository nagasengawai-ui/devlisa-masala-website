# Devlisa Masale — React + Vite

Premium responsive frontend built with React, Vite and Lucide icons.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in the `dist/` folder.

## Deploy

### Netlify
1. Push this folder to GitHub and import the repository into Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import the GitHub repository.
2. Framework preset: Vite.
3. Build command: `npm run build`
4. Output directory: `dist`

### cPanel / shared hosting
Run `npm run build`, then upload the contents of `dist/` into `public_html`.

## Contact details
- Phone / WhatsApp: +91 96699 214019
- Instagram: https://instagram.com/devlisamasale
- Email: devlisamasale@gmail.com

Contact details and backend configuration are in `src/config.js`.

## Future Spring Boot backend

`src/config.js` includes:
- `API_BASE_URL`
- `CONTACT_ENDPOINT`

When you add a Spring Boot API, configure the API base URL there. Add a matching POST endpoint such as `/api/enquiries`, enable CORS for your deployed frontend domain, and connect the future contact form to it.

The current version uses direct WhatsApp, telephone and email links; it does not include a backend, database, admin panel, checkout or payment integration.

## Before commercial launch
- Confirm Devlisa name/logo availability and ownership.
- Replace concept packaging art with final printer-approved pack artwork if needed.
- Add verified ingredients, net quantity, MRP, batch/lot, dates, FSSAI licence and manufacturer/packer information as applicable.
- Do not publish purity, health, certification or origin claims unless verified and legally supportable.
- Add business address, privacy policy and other legally required details.
- Test all contact links on mobile.