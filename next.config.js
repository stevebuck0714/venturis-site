/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow connections from all hosts in development
  webSocketTimeout: 60000,
  // Basic configuration
  images: {
    domains: ['localhost'],
  },
  // Development server configuration
  devServer: {
    host: '0.0.0.0',
    port: 4000,
    allowedHosts: 'all'
  },
  // Disable automatic deployment features
  output: 'standalone',
  distDir: '.next',
  // Development optimizations
  experimental: {
    optimizeCss: true,
  },
  // Disable build errors in development
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig; 