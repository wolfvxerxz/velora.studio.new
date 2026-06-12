import type { NextConfig } from "next";

const isExport = process.env.EXPORT === 'true'

const nextConfig: NextConfig = {
  ...(isExport ? { output: 'export' } : {}),
  // Keep WebLLM out of the server bundle — it's browser-only
  serverExternalPackages: ["@mlc-ai/web-llm"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
