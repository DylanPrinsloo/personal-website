import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/personal-website',
  assetPrefix: '/personal-website/',
};

export default nextConfig;
