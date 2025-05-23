import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/manos-libres", // Necesario para GitHub Pages si el repo no es raíz del dominio
};

export default nextConfig;
