import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Importante: Asegúrate que tu backend esté corriendo en el puerto 5000
      const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
      
      // Guardamos el token para futuras peticiones (Punto 4 de la rúbrica)
      localStorage.setItem('token', response.data.token);
      
      // Redirigimos a la interfaz de administración
      navigate('/admin');
    } catch (err) {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Admin Portal</h2>
        
        {error && <p className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-sm text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-slate-400 mb-2">Usuario</label>
            <input 
              type="text" name="username"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              onChange={handleChange} required
            />
          </div>
          <div>
            <label className="block text-slate-400 mb-2">Contraseña</label>
            <input 
              type="password" name="password"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              onChange={handleChange} required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;