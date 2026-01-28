const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { connectDB } = require('./db'); 
require('dotenv').config();

const app = express();

// --- 1. CONEXIÓN A LA BASE DE DATOS (Punto 5 y 7) ---
connectDB(); 

// --- 2. MIDDLEWARES DE SEGURIDAD (Punto 3 y 6) ---
app.use(helmet()); 

// AJUSTE MAESTRO DE CORS: Para que Vercel pueda leer los datos
app.use(cors({ 
  origin: ['https://portafolio-diego-banda.vercel.app', 'http://localhost:5173'],
  optionsSuccessStatus: 200,
  credentials: true
})); 

app.use(express.json()); 

// --- 3. CONTROL DE TRÁFICO (Punto 3) ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: "Demasiadas peticiones desde esta IP, por favor intente más tarde."
});
app.use(limiter);

// --- 4. RUTAS DE LA API (Punto 1 y 3) ---
app.get('/', (req, res) => {
  res.send('🚀 Servidor Full-Stack de Diego Banda: Funcionando y Seguro');
});

// Rutas habilitadas
app.use('/api/blog', require('./routes/blogRoutes')); 
app.use('/api/auth', require('./routes/authRoutes')); // DESCOMENTADO PARA EL PUNTO 4

// --- 5. MANEJO CENTRALIZADO DE ERRORES ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    message: 'Se ha detectado un problema en el backend robusto.' 
  });
});

// --- 6. LANZAMIENTO DEL SERVIDOR ---
const PORT = process.env.PORT || 10000; // Render usa el 10000 por defecto

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en el puerto: ${PORT}`);
  console.log(`🔒 Seguridad Helmet, CORS y Rate-Limit activada.`);
});