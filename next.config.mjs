/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Menghasilkan folder 'out'
  basePath: "/Praktikum-9", // HARUS sama dengan nama repository
  assetPrefix: "/Praktikum-9", // HARUS sama dengan nama repository
  images: {
    unoptimized: true,
  },
};

export default nextConfig;