/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["miro.medium.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});

module.exports = nextConfig;
