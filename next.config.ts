import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    externalDir: true,
  },
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
