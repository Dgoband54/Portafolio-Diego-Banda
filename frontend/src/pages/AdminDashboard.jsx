import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-3xl font-bold border-b border-cyan-500 pb-4">Panel de Administración</h1>
      <p className="mt-4 text-slate-400">Bienvenido, Diego. Aquí podrás gestionar tus artículos técnicos.</p>
      <button 
        onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}
        className="mt-6 bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default AdminDashboard;