import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // URL del backend desde variables de entorno (Vercel / Local)
        const API_URL = import.meta.env.VITE_API_URL;

        const response = await axios.get(`${API_URL}/api/blog`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error al cargar el blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-20 text-white text-2xl animate-pulse">
        Cargando conocimientos...
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen p-6 md:p-12 text-slate-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Blog Técnico — Diego Banda
        </h1>

        <div className="grid gap-10">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-blue-500/20 transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-900 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {post.category}
                </span>
                <span className="text-slate-400 text-sm">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-white">
                {post.title}
              </h2>

              <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
