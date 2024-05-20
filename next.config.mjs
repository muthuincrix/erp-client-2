/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:"https://erp-server-zeta.vercel.app/:path*",
      },
    ]
    },
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

const withPWA = nextPWA({
  dest: "public", // Destination directory for the PWA files
  //   disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

export default withPWA(nextConfig);
