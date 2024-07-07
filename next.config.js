/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["nextjs.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // port: "",
        // pathname: "/my-bucket/**",
      },
    ],
  },
};

module.exports = nextConfig;
