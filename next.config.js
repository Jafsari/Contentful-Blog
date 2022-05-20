/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', 'images.ctfassets.net', 'source.unsplash.com', 'tailwindui.com'],
  }
};

module.exports = nextConfig;