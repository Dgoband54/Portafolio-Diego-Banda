import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 flex flex-col justify-center items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-center px-6 relative overflow-hidden">
      
      {/* Luz de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      <div className="z-10 relative max-w-4xl">
        <h2 className="text-blue-400 font-semibold tracking-wider uppercase mb-4 text-xs md:text-sm">
          Desarrollador Full Stack en Formación
        </h2>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Hola, soy <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Diego Banda</span>
        </h1>
        
        <p className="text-gray-400 max-w-xl md:max-w-2xl text-base md:text-lg mb-8 leading-relaxed mx-auto">
          Estudiante de Desarrollo de Software en la PUCE. Me especializo en crear soluciones 
          tecnológicas con impacto real, combinando Backend robusto con Frontend moderno.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center mb-10">
          <a href="#projects" className="w-full sm:w-auto border border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 font-medium shadow-lg hover:shadow-blue-500/50">
            Ver mis Proyectos
          </a>
          <a href="mailto:diegobanda54@gmail.com" className="w-full sm:w-auto bg-white text-slate-900 px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300 font-medium shadow-lg">
            Hablemos
          </a>
        </div>

        {/* REDES SOCIALES QUE SÍ VALEN */}
        <div className="flex justify-center space-x-8 text-gray-400">
          <a href="https://github.com/Dgoband54" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-125">
            <Github size={30} />
          </a>
          <a href="https://www.linkedin.com/in/diego-banda-133303292" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all transform hover:scale-125">
            <Linkedin size={30} />
          </a>
          <a href="https://www.instagram.com/dgoband54_/?igsh=b2hsZ213Y3ZrOWFu&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all transform hover:scale-125">
            <Instagram size={30} />
          </a>
          <a href="mailto:diegobanda54@gmail.com" className="hover:text-red-400 transition-all transform hover:scale-125">
            <Mail size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;