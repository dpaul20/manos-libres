import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/manos-libres",
  assetPrefix: "/manos-libres",
};

export default nextConfig;
