import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Brand photography is heavy; serve modern formats where supported.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
