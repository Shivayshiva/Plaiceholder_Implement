/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next'

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
    ],
  },
}


export default withPlaiceholder(nextConfig);

//export default nextConfig
//
