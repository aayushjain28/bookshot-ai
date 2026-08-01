import type { NextConfig } from "next";

// Empty for local dev, Vercel, Netlify, and Cloudflare Pages (served at root).
// Set to "/bookshot-ai" by the GitHub Pages workflow (served under a subpath).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
