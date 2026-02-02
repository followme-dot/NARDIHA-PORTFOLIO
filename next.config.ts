import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/NARDIHA-PORTFOLIO',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
