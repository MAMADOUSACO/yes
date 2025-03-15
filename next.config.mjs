/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'simplecountdown.org',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
    serverActions: {
      allowedOrigins: ['localhost:3000', 'simplecountdown.org'],
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Add custom webpack configuration if needed for specific libraries
  webpack: (config) => {
    // Example: special handling for certain packages
    // config.resolve.alias['some-package'] = 'alternative-package'

    return config;
  },
  // Output standalone build for easier deployments
  output: 'standalone',
};

export default nextConfig;
