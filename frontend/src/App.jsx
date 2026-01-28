import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Blog from './pages/Blog';

// Componente para proteger rutas (Punto 4: Acceso restringido)
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Cambié la ruta base para que lo primero que se vea sea tu Blog */}
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        
        {/* Comenté la ruta de Admin porque el archivo no existe aún */}
        {/* <Route 
          path="/admin" 
          element={
            <PrivateRoute>
              <div className="text-white p-10">Bienvenido al Panel (En construcción)</div>
            </PrivateRoute>
          } 
        /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;