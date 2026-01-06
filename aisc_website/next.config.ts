import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // required for static export with next/image
  },
};

export default nextConfig;
