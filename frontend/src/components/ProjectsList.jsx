import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const ProjectsList = () => {
  const projects = [
    {
      _id: "1",
      title: "Tyzox - Boxeo Online",
      description: "Tienda full-stack con Django y PostgreSQL. Optimización de UX y gestión de inventario.",
      technologies: ["Django", "PostgreSQL", "Tailwind"],
      repoLink: "https://github.com/Dgoband54"
    },
    {
      _id: "2",
      title: "Validador de Cédulas",
      description: "Algoritmo en Python para verificar documentos ecuatorianos con alta precisión.",
      technologies: ["Python", "Algorithms"],
      repoLink: "https://github.com/Dgoband54"
    },
    {
      _id: "3",
      title: "The Burgers Band",
      description: "Plataforma de gestión para pedidos y stock en restaurante de hamburguesas.",
      technologies: ["React", "Node.js", "MongoDB"],
      repoLink: "https://github.com/Dgoband54"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-slate-800 flex-grow"></div>
          <h2 className="text-3xl md:text-5xl font-bold italic tracking-tighter">
            PROYECTOS <span className="text-blue-500">RECIENTES</span>
          </h2>
          <div className="h-px bg-slate-800 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project._id} 
              className="group relative bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full hover:-translate-y-2"
            >
              {/* Icono de carpeta decorativo */}
              <div className="flex justify-between items-start mb-6">
                <Folder className="text-blue-500" size={40} />
                <a href={project.repoLink} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <ExternalLink size={24} />
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-400 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;