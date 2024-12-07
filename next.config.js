/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/seea.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/seea.github.io/' : '',
}

module.exports = nextConfig 