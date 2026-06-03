import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repo = 'personal-site';

const nextConfig: NextConfig = {
  output: 'export',

  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}` : '',

  allowedDevOrigins: ['http://192.168.*.*:3000'],

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  turbopack: {
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  experimental: {
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      '@fortawesome/fontawesome-svg-core',
    ],
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
