import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // devIndicators: false,
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/personal-website',
    assetPrefix: '/personal-website/',
  }),
};

export default nextConfig;