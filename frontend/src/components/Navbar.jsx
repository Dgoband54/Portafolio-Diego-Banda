import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-[100] bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Diego Banda
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm">

          {isHome ? (
            <>
              <a href="#home" className="hover:text-blue-400 transition">Inicio</a>
              <a href="#projects" className="hover:text-blue-400 transition">Proyectos</a>
            </>
          ) : (
            <Link to="/" className="hover:text-blue-400 transition">
              Inicio
            </Link>
          )}

          <Link to="/blog" className="hover:text-blue-400 transition">
            Blog
          </Link>

          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-xs font-bold transition shadow-lg shadow-blue-500/20"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
