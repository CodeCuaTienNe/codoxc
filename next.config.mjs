/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/codoxc" : "",
  basePath: process.env.NODE_ENV === "production" ? "/codoxc" : "",
};

export default nextConfig;
