/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ddg0cip9uom1w.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
