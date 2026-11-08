import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

/* Any URL no other route claims gets the site's own 404 page (src/app/(frontend)/not-found.tsx).
   Phase 3 replaces this with the CMS page route, which falls back to the same 404. */
export const metadata: Metadata = {
  title: 'Page not found | Fractionalogic',
  description: 'The page you were looking for isn’t here.',
  robots: { index: false, follow: false },
};

export default function Missing() {
  notFound();
}
