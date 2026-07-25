# The Aniexim Limited — Website

A 5-page real estate website: **Home, About, Services, Properties, Contact**.

- `frontend/` — React (Vite) app, React Router, smooth scroll-reveal animations, gold/black brand system matching your logo
- `backend/` — Node.js + Express API serving property listings and handling the contact form

## Run it locally

**Backend (API) — terminal 1:**
```bash
cd backend
npm install
npm start
```
Runs on `http://localhost:4000`.

**Frontend — terminal 2:**
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173` and proxies `/api` calls to the backend automatically.

## Editing content

- **Properties**: edit `backend/data/properties.json` — add/remove listings, change prices, no code changes needed.
- **Contact details / phone numbers**: search for `2348085259019` and `2347049058719` across `frontend/src` and replace.
- **Colors/fonts**: all design tokens are at the top of `frontend/src/styles.css` (`:root` block) — change `--gold`, `--bg`, etc. in one place.

## Deploying (same pattern as your other projects)

- **Backend** → deploy `backend/` to Render as a Node web service (`npm start`).
- **Frontend** → run `npm run build` inside `frontend/`, deploy the `dist/` folder to Vercel. Set an environment-based API URL if the backend isn't on `localhost` in production (update the `fetch("/api/...")` calls or add a Vite proxy/env variable pointing to your Render backend URL).

## Contact form

Submissions save to `backend/data/messages.json` (created automatically). For production, you'd want to wire this to an email service (e.g. Nodemailer + Gmail app password, similar to your Banquee SMTP setup) instead of just writing to a file.
