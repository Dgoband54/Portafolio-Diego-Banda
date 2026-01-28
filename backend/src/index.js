const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { connectDB } = require('./db'); // Conexión a MongoDB Atlas
require('dotenv').config();

const app = express();

// --- 1. CONEXIÓN A LA BASE DE DATOS (Punto 5 y 7) ---
connectDB(); // Conecta usando la URL del .env

// --- 2. MIDDLEWARES DE SEGURIDAD OBLIGATORIOS (Punto 3 y 6) ---
app.use(helmet()); // Protege contra vulnerabilidades web comunes
app.use(cors({ 
  origin: process.env.FRONTEND_URL || 'https://portafolio-diego-banda.vercel.app',
  optionsSuccessStatus: 200 
})); // Configuración de CORS restringida
app.use(express.json()); // Permite recibir datos en formato JSON

// --- 3. CONTROL DE TRÁFICO (Punto 3) ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Bloqueo por 15 minutos
  max: 100, // Máximo 100 peticiones por IP
  message: "Demasiadas peticiones desde esta IP, por favor intente más tarde."
});
app.use(limiter);

// --- 4. RUTAS DE LA API (Punto 1 y 3) ---
// Ruta de bienvenida para verificar que el servidor está "vivo"
app.get('/', (req, res) => {
  res.send('🚀 Servidor Full-Stack de Diego Banda: Funcionando y Seguro');
});

// Importación de rutas (Asegúrate de crear estos archivos en la carpeta /routes)
app.use('/api/blog', require('./routes/blogRoutes')); // Ruta para los posts del blog
// app.use('/api/auth', require('./routes/authRoutes')); // Próximo paso: Autenticación

// --- 5. MANEJO CENTRALIZADO DE ERRORES (Punto 3) ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    message: 'Se ha detectado un problema en el backend robusto.' 
  });
});

// --- 6. LANZAMIENTO DEL SERVIDOR ---
const PORT = process.env.PORT || 5000;

// Agregamos '0.0.0.0' para que Render pueda enlazar el puerto correctamente
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en el puerto: ${PORT}`);
  console.log(`🔒 Seguridad Helmet, CORS y Rate-Limit activada.`);
});