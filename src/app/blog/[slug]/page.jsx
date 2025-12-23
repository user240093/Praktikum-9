// src/app/blog/[slug]/page.jsx
import Link from 'next/link';
import { posts } from '@/data/posts';

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Artikel tidak ditemukan!</div>;
  }

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      
      {/* --- BAGIAN BARU: Tampilan Author & Date --- */}
      <div className="text-sm text-gray-500 mb-6 border-b pb-4">
        <span className="font-semibold text-gray-900">
          Penulis: {post.author}
        </span>
        <span className="mx-2">|</span>
        <span>
          Tanggal: {post.date}
        </span>
      </div>
      {/* ------------------------------------------- */}

      <div className="prose lg:prose-xl text-lg leading-relaxed mb-8">
        <p>{post.content}</p>
      </div>
      
      <div className="mt-10">
        <Link href="/blog" className="text-blue-600 hover:underline">
          &larr; Kembali ke Daftar
        </Link>
      </div>
    </article>
  );
}