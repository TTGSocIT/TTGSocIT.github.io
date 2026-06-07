import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Allow images from the rubric domain
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hellorubric.com",
        port: "",
        pathname: "/uploaded_assets/**",
      },
      {
        protocol: 'https',
        hostname: 'portal.getqpay.com', // Rubric stores images here sometimes for events
        port: "",
        pathname: "/**",
      },

    ]
  },
};

export default nextConfig;
