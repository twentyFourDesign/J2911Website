# J2911 Resources LLC website

Marketing site for J2911 Resources LLC (https://j2911.com.ng), built with React 18, Vite, Tailwind CSS and React Router.

## Getting started

```bash
npm install
cp .env.example .env   # add EmailJS keys for the contact form
npm run dev
```

## Editing content

All copy (company details, services, about text, contact form options) lives in `src/content.js`.
Add social profile URLs under `company.social` to show icons in the footer.

## Contact form

The form sends through EmailJS with the template variables `name`, `email`, `organisation`, `projectType` and `message`.
Add `{{organisation}}` to the EmailJS template to receive the new optional field.

## Build and deploy

```bash
npm run build    # outputs dist/
```

Upload the contents of `dist/` to the web root. `vercel.json` (Vercel), `public/.htaccess` (Apache/cPanel) and `public/_redirects` (Netlify) send unknown paths to `index.html` so links like `/about` work.

Photos live in `public/images` as WebP at 800px and 1600px wide.
