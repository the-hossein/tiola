/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  optimization: {
    runtimeChunk: 'single'
},
}

module.exports = nextConfig
