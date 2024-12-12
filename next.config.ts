import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/whes1015' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    if (isProduction) {
      config.output.publicPath = `${basePath}/_next/`;
    }

    return config;
  },
};

export default nextConfig;
