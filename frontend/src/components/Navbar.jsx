import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Tu Logo/Nombre */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Diego Banda
        </h1>

        {/* Enlaces */}
        <div className="flex items-center gap-8">
          <a href="#home" className="text-sm hover:text-blue-400 transition hidden sm:block">Inicio</a>
          <a href="#projects" className="text-sm hover:text-blue-400 transition">Proyectos</a>
          <a 
            href="mailto:diegobanda54@gmail.com" 
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-xs font-bold transition shadow-lg shadow-blue-500/20"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;