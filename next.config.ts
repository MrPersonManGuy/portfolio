import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer2'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/webp'],
  },
}

export default withContentlayer(nextConfig)
