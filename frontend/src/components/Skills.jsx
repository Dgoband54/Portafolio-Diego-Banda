import React from 'react';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-400" />,
      skills: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      icon: <Server className="text-purple-400" />,
      skills: ["Python", "Django", "Node.js", "REST APIs"]
    },
    {
      title: "Base de Datos",
      icon: <Database className="text-emerald-400" />,
      skills: ["PostgreSQL", "MongoDB", "SQL"]
    },
    {
      title: "Herramientas",
      icon: <Terminal className="text-orange-400" />,
      skills: ["Git/GitHub", "Docker", "Vite", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Mi Stack <span className="text-blue-500">Tecnológico</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;