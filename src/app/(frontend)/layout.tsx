import type { Metadata, Viewport } from 'next';
import '@/styles/global.css';
import SiteScripts from '@/client/SiteScripts';

// Preview and review builds stay out of search until SITE_URL is set at launch.
const siteUrl = process.env.SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: 'Fractionalogic',
  openGraph: { type: 'website', siteName: 'Fractionalogic' },
  robots: siteUrl ? undefined : { index: false, follow: false },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }], apple: '/apple-touch-icon.png' },
};

export const viewport: Viewport = { themeColor: '#062e30' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <svg className="duotone-defs" aria-hidden="true" focusable="false" width="0" height="0">
          <filter id="duotone-logic" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0"
            />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.0235 0.0706 0.8353" />
              <feFuncG type="table" tableValues="0.1804 0.4157 0.9216" />
              <feFuncB type="table" tableValues="0.1882 0.4000 0.9020" />
            </feComponentTransfer>
          </filter>
        </svg>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
