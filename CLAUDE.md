## Development

Next.js 16 (App Router), static output. Version 1 has no CMS: content lives in `src/data` and `src/content/resources`. Payload CMS work continues on the `nextjs-payload` branch.

- Dev server: `npm run dev` (port 4323). Production check: `npm run build && npm run start`.
- Type-check: `npm run lint`.

## Structure

- `src/app/(frontend)/` — public pages. Each page wraps itself in `<Shell path="...">` so the nav marks the current section on the server.
- `src/components/` — server components, each with a sibling global CSS file (class names are BEM-prefixed per component).
- `src/client/` — progressive-enhancement scripts (menus, filters, tabs, forms), started once by `SiteScripts`. Links are plain `<a>` (full page loads).
- `src/data/`, `src/content/resources/` — site content (edit here for v1; moves into Payload later).
- `src/lib/resources.ts` — the single place resources are read; swap its loader for a Payload query.

## Environment

`.env` (not committed): `PUBLIC_FORM_ENDPOINT`, `PUBLIC_FORM_ACCESS_KEY`. Search indexing stays off until `SITE_URL` is set.
