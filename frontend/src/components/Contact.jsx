import React from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 italic">
          ¿TIENES UN <span className="text-blue-500">PROYECTO?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-800/30 p-8 md:p-12 rounded-3xl border border-slate-700 backdrop-blur-md">
          {/* Información de contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">¡Hablemos!</h3>
            <p className="text-gray-400">
              Estoy disponible para proyectos freelance o vacantes de tiempo completo. 
              Contáctame y responderé lo antes posible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="text-blue-500" />
                <span>diegobanda54@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="text-blue-500" />
                <span>Quito, Ecuador</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form action="https://formsubmit.co/diegobanda54@gmail.com" method="POST" className="space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Tu Nombre" 
              required 
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Tu Correo" 
              required 
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            />
            <textarea 
              name="message" 
              rows="4" 
              placeholder="¿Cómo puedo ayudarte?" 
              required 
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            ></textarea>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Enviar Mensaje <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;