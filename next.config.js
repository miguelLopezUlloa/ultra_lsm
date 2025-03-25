/** @type {import('next').NextConfig} */
const nextConfig = {
  // Elimina las opciones experimentales para Next.js 14
  experimental: {
    forceSwcTransforms: true
  }
};

module.exports = nextConfig;