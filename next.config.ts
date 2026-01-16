import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/apps',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
