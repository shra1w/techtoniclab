/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['images.unsplash.com'],
  },
    experimental:{serverActions:{
        bodySizeLimit:'20mb'
    }}
};

export default nextConfig;
