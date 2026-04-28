# TS Window Cleaning Services

Website for TS Window Cleaning Services — a Glasgow-based window cleaning and pressure washing business serving the West End and Southside.

## Tech stack

- **Framework:** TanStack Start (TanStack Router v1, React 19)
- **Build:** Vite 7
- **Styling:** Tailwind CSS 4
- **Icons:** lucide-react
- **Forms:** Netlify Forms (contact + booking)
- **Deployment:** Netlify

## Pages

- `/` — Home
- `/services` — List of services (domestic, commercial, pressure washing)
- `/about` — About the business
- `/contact` — Contact form and details
- `/book` — Booking request form

## Run locally

```bash
npm install
npm run dev
```

The dev server runs on port 3000. To run with Netlify-aware emulation (recommended for testing forms locally):

```bash
netlify dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`. Netlify will run this command automatically on deploy.

## Forms

Two Netlify Forms are registered via `public/__forms.html`:

- `contact` — name, email, phone, message
- `booking` — name, email, phone, address, area, service, frequency, preferred date, notes

Submissions show up in the Netlify dashboard under **Forms**.
