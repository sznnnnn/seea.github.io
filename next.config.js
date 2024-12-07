/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com"],
  },
  basePath: '/seea.github.io',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/seea.github.io/' : '',
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: {
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
      },
    },
  ],
};

module.exports = nextConfig;
