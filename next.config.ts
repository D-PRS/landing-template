import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // L'e-book gratuit s'appelle « Les bases de LinkedIn » : l'ancienne adresse reste valide.
    return [
      { source: '/formations/algorithme-linkedin-2026', destination: '/formations/les-bases-de-linkedin', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
};

export default nextConfig;
