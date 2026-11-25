# J2911 Resources LLC website

Marketing site for J2911 Resources LLC (https://j2911.com.ng), built with React 18, Vite, Tailwind CSS and React Router.

## Getting started

```bash
npm install
npm run dev
```

## Editing content

All copy (company details, services, about text, contact form options) lives in `src/content.js`.
Add social profile URLs under `company.social` to show icons in the footer.

## Contact form

The form posts to a Vercel serverless function (`api/contact.js`), which validates the enquiry and emails it through an SMTP mailbox (for example the cPanel mailbox). Credentials stay on the server.

Set these in Vercel → Settings → Environment Variables (Production), then redeploy:

| Variable | Example | Notes |
|---|---|---|
| `SMTP_HOST` | `mail.24group.com.ng` | cPanel → Email Accounts → Connect Devices |
| `SMTP_PORT` | `465` | `465` (SSL) or `587` (STARTTLS) |
| `SMTP_USER` | `info@24group.com.ng` | full mailbox address |
| `SMTP_PASS` | | mailbox password |
| `CONTACT_TO` | `info@j2911.com.ng` | optional, defaults to `SMTP_USER`; comma-separate for several |
| `CONTACT_FROM` | | optional, must be the mailbox or an alias; defaults to `SMTP_USER` |

The function includes validation, a honeypot and a basic per-IP rate limit. Replies go straight to the visitor (Reply-To). Use `vercel dev` to run the function locally.

## Build and deploy

```bash
npm run build    # outputs dist/
```

Upload the contents of `dist/` to the web root. `vercel.json` (Vercel), `public/.htaccess` (Apache/cPanel) and `public/_redirects` (Netlify) send unknown paths to `index.html` so links like `/about` work.

Photos live in `public/images` as WebP at 800px and 1600px wide.
