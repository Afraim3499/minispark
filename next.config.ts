import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/the-top-10-white-label-seo-companies-for-2023',
        destination: '/blog/the-top-10-white-label-seo-companies-for-2026',
        permanent: true,
      },
      {
        source: '/blog/on-page-seo-techniques-in-2023',
        destination: '/blog/on-page-seo-techniques-in-2026',
        permanent: true,
      },
      {
        source: '/blog/how-to-do-seo-for-b2c-companies-in-2024',
        destination: '/blog/how-to-do-seo-for-b2c-companies-in-2026',
        permanent: true,
      },
      {
        source: '/blog/seo-myths-that-you-should-never-follow-in-2024',
        destination: '/blog/seo-myths-that-you-should-never-follow-in-2026',
        permanent: true,
      },
      {
        source: '/blog/best-reputation-management-companies-of-2024',
        destination: '/blog/best-reputation-management-companies-of-2026',
        permanent: true,
      },
      {
        source: '/blog/how-much-does-google-ads-cost-in-2024',
        destination: '/blog/how-much-does-google-ads-cost-in-2026',
        permanent: true,
      },
      {
        source: '/blog/8-important-b2b-marketing-trends-for-2024',
        destination: '/blog/8-important-b2b-marketing-trends-for-2026',
        permanent: true,
      },
      {
        source: '/blog/17-top-programmatic-advertising-platforms-to-use-in-2023',
        destination: '/blog/17-top-programmatic-advertising-platforms-to-use-in-2026',
        permanent: true,
      },
      {
        source: '/blog/8-important-b2b-marketing-trends-for-2024-2',
        destination: '/blog/8-important-b2b-marketing-trends-for-2026-2',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
