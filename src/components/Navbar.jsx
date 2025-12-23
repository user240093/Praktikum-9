'use client' // Wajib: agar bisa pakai hooks browser

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook untuk mendeteksi URL aktif

export default function Navbar() {
  const pathname = usePathname(); // Mengambil URL saat ini (misal: "/blog")

  // Fungsi untuk menentukan apakah link sedang aktif
  const isActive = (path) => {
    // Jika path "/", harus sama persis.
    // Jika path lain (misal "/blog"), cek apakah URL dimulai dengan path itu (untuk handle sub-menu)
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Kelas CSS dasar
  const baseStyle = "font-bold px-3 py-2 rounded-md transition-colors";
  const activeStyle = "text-blue-600 bg-blue-50"; // Style saat aktif (Biru)
  const inactiveStyle = "text-gray-600 hover:text-blue-500"; // Style biasa

  return (
    <nav className="p-4 bg-white shadow-md flex gap-4">
      <Link 
        href="/" 
        className={`${baseStyle} ${isActive('/') ? activeStyle : inactiveStyle}`}
      >
        Home
      </Link>
      
      <Link 
        href="/blog" 
        className={`${baseStyle} ${isActive('/blog') ? activeStyle : inactiveStyle}`}
      >
        Blog
      </Link>
      
      <Link 
        href="/about" 
        className={`${baseStyle} ${isActive('/about') ? activeStyle : inactiveStyle}`}
      >
        About
      </Link>
    </nav>
  );
}