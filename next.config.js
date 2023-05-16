/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  }
};
 
const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);