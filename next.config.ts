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
  // Live previews of client sites are static exports in public/live; serve each folder's index.html
  ...(isExport ? {} : {
    // Start a project moved to the cal.com booking page
    async redirects() {
      return [
        { source: "/start", destination: "https://cal.com/vuk-m/15min", permanent: false },
        // one address for the whole site: www and the duplicate project's vercel.app go to velora.studio
        ...["www.velora.studio", "velorastudionew.vercel.app"].map((host) => ({
          source: "/:path*", has: [{ type: "host" as const, value: host }], destination: "https://velora.studio/:path*", permanent: true,
        })),
        // pages that were removed, so Google stops reporting them as 404
        { source: "/blog", destination: "/", permanent: true },
        { source: "/blog/:slug*", destination: "/", permanent: true },
        { source: "/work", destination: "/", permanent: true },
        { source: "/industries", destination: "/services", permanent: true },
        { source: "/compare", destination: "/services", permanent: true },
        { source: "/work/:slug(armature|bentolabs|cactus|insforge)", destination: "/", permanent: true },
      ]
    },
    // client-site previews are copies of other sites; keep them out of the index
    async headers() {
      return [{ source: "/live/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] }]
    },
    async rewrites() {
      return [
        { source: "/live/:site", destination: "/live/:site/index.html" },
        { source: "/live/:site/:page", destination: "/live/:site/:page/index.html" },
      ]
    },
  }),
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
