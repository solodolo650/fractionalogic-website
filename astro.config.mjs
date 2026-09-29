// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output only, so the build deploys unchanged to Vercel, Hostinger, or any static host.
// SITE_URL (e.g. https://fractionalogic.com) enables absolute canonical URLs and the sitemap.
export default defineConfig({
  site: process.env.SITE_URL,
  output: 'static',
  // Directory output (about/index.html) serves clean URLs on any host without rewrite rules.
  build: { format: 'directory' },
  integrations: process.env.SITE_URL ? [sitemap()] : [],
  redirects: {
    '/services': '/services/fcmo',
    '/partners': '/partners/strategic-partners',
  },
  // The dev watcher misses edits on this drive and serves stale scoped CSS;
  // polling catches them. Dev server only, no effect on the build.
  vite: { server: { watch: { usePolling: true, interval: 300 } } },
});
