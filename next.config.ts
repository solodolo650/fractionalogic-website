import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Clean URLs without trailing slashes, matching the previous static site.
  trailingSlash: false,
  images: { formats: ['image/avif', 'image/webp'], qualities: [75, 82] },
  async redirects() {
    return [
      { source: '/services', destination: '/services/fcmo', permanent: false },
      { source: '/partners', destination: '/partners/strategic-partners', permanent: false },
    ];
  },
};

export default nextConfig;
