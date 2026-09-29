# Fractionalogic website

Astro, static output. Deploys unchanged to Vercel, Hostinger, or any static host.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
npx astro check   # type check
```

## Structure

```text
src/
  pages/              one file per route; /services and /partners redirect (astro.config.mjs)
  components/
    home/             homepage sections
    ui/               shared blocks: PageHeader, Tabs, FilterGroup, ReportCard, CtaBand, …
    forms/            Form + Field (validation, states, endpoint posting)
  content/resources/  Resources entries (the only CMS-managed content)
  content.config.ts   Resources schema + loader
  lib/resources.ts    the only code that reads Resources
  data/               site-owned data: routes and contact, partner roster, FAQs
  styles/global.css   palette, semantic tokens, shared utilities
```

Copy source of truth: `../Claude outputs/fractionalogic-website-content.md`.

## Environment

Copy `.env.example` to `.env` and fill it in (or set the same variables in your host's dashboard).

| Variable | Purpose |
|---|---|
| `SITE_URL` | Canonical URLs and `sitemap.xml`. |
| `PUBLIC_FORM_ENDPOINT` | Where both forms post. Without it, forms show an error with the email alternative. |
| `PUBLIC_FORM_ACCESS_KEY` | Only for providers that need a key in the payload (e.g. Web3Forms). |

## Deploying

**Vercel** — import the repo; framework preset Astro; build `npm run build`; output `dist`. Add the environment variables.

**Hostinger (or any static host)** — run `npm run build` and upload the contents of `dist/` to `public_html`. To automate, add a GitHub Action that builds on push and uploads `dist/` over FTP/SFTP, with the environment variables stored as repository secrets. Output is directory-style (`about/index.html`), so clean URLs work without rewrite rules.

## Resources and the CMS

Only Resources are CMS-managed. Each entry is a Markdown file in `src/content/resources/` validated by the schema in `src/content.config.ts`.

- **Reports**: `kind: report`. Each gets a page at `/resources/<file-name>` with its summary and download. Put the PDF in `public/downloads/` and set `file: /downloads/<name>.pdf`; until then the page shows "PDF coming soon".
- **Library**: `kind: pov | case-study | series | writing`. With `url`, the piece links out; without `url` and with a Markdown body, it gets its own page at `/resources/<file-name>`.
- `thumbnail`: a card image — a path relative to the entry file (optimised at build) or an absolute URL from a CMS, plus `thumbnailAlt`. Without one, the card uses its category's brand-toned photo.
- The Resources page lists everything in one grid with category filters (`/resources?type=report` links straight to a category). `featured: true` puts a piece on the homepage first; `order` sorts everything.

To connect a CMS later, replace the `glob()` loader in `src/content.config.ts` with the CMS's Astro content loader (or a small loader that fetches from its API) returning the same fields. Git-based CMSs (Decap, Keystatic, Tina) can instead write straight to `src/content/resources/`. Nothing else changes: pages read Resources only through `src/lib/resources.ts`. For hosted CMSs, add a publish webhook that triggers a rebuild on your host.

## Content still owed

- Report PDFs (4) for `public/downloads/`.
- Sources for the statistics the site quotes.
- Legal page text (Disclaimer, Terms of Use, Privacy Policy).
- A Fractionalogic favicon to replace `public/favicon.svg` / `favicon.ico`.
