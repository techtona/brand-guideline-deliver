import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the dev server from other devices on the LAN.
  allowedDevOrigins: ["192.168.100.124"],
  images: {
    // Brand photography is heavy; serve modern formats where supported.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
