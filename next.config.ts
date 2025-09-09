import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add basePath for GitHub Pages
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/personal-website',
    assetPrefix: '/personal-website/',
  }),
};

export default nextConfig;