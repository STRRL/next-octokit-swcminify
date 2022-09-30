/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // set swcMinify as false would bypass this issue
  swcMinify: true,
}

module.exports = nextConfig
