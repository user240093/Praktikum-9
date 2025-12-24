/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Mengaktifkan fitur compiler React (bawaan dari config-mu sebelumnya)
  reactCompiler: true,

  // 2. Memberitahu Next.js bahwa kita ingin hasil akhirnya berupa file statis (HTML/CSS/JS)
  output: 'export',

  // 3. Menangani sub-path di GitHub Pages
  // Karena repo kamu bernama 'my-blog-app', URL-nya nanti akan menjadi:
  // https://2400016067-max.github.io/my-blog-app/
  basePath: '/praktikum-9-my-blog-app',

  // 4. Mematikan optimasi gambar bawaan Next.js
  // GitHub Pages tidak punya server untuk memproses gambar secara dinamis
  images: {
    unoptimized: true,
  },
};

export default nextConfig;