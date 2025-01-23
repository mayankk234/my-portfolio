/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignorar ESLint durante la compilación
  },
}

module.exports = nextConfig
