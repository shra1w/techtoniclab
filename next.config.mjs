/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },
  async redirects() {
    return [
      // 1. Force www to non-www domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.techtoniccorporate.com',
          },
        ],
        destination: 'https://techtoniccorporate.com/:path*',
        permanent: true, // 301 redirect
      },
      // 2. Redirect old underscore URLs to hyphen URLs
      {
        source: '/sap_course',
        destination: '/sap-course',
        permanent: true,
      },
      {
        source: '/data_analytics_course',
        destination: '/data-analytics-course',
        permanent: true,
      },
      {
        source: '/data_science_course',
        destination: '/data-science-course',
        permanent: true,
      },
      // Add any other specific pages with underscores here if you have them
    ];
  },
};

export default nextConfig;