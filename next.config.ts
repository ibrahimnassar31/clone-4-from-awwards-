import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
  {
      protocol: "https",
      hostname: "slelguoygbfzlpylpxfs.supabase.co",
      pathname: "**",
    },
    {
      protocol: "https",
      hostname: "cdn.squaresigns.com",
    },
    {
      protocol: "https",
      hostname: "seal.digicert.com",
    },
    ],
  
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
      }
    }
  }
};

export default nextConfig;
