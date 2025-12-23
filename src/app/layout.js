// src/app/layout.js
'use client' // WAJIB: Menandakan ini adalah Client Component

import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Import hook untuk cek URL

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Ambil URL saat ini

  // Fungsi helper untuk menentukan style aktif
  // Jika path sama dengan href, warnanya biru (active). Jika beda, abu-abu.
  const getLinkClass = (href) => {
    // Khusus Home ('/'), harus match persis
    if (href === '/') {
        return pathname === '/' 
            ? 'text-blue-600 font-bold' 
            : 'text-gray-600 hover:text-blue-500 font-medium';
    }
    // Untuk menu lain, cek apakah URL diawali dengan href tersebut
    return pathname.startsWith(href)
        ? 'text-blue-600 font-bold' 
        : 'text-gray-600 hover:text-blue-500 font-medium';
  };

  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar Global */}
        <nav className="p-4 bg-white shadow-md flex gap-4">
          <Link href="/" className={getLinkClass('/')}>
            Home
          </Link>
          <Link href="/blog" className={getLinkClass('/blog')}>
            Blog
          </Link>
          <Link href="/about" className={getLinkClass('/about')}>
            About
          </Link>
        </nav>

        {/* Konten Halaman */}
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}