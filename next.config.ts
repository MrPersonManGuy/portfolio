import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer2'

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/webp'],
  },
}

export default withContentlayer(nextConfig)
