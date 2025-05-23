import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Si el repo se publica bajo un subdirectorio, descomenta y ajusta:
  // basePath: "/manos-libres",
};

export default nextConfig;
