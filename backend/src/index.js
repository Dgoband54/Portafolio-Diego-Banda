const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { connectDB } = require('./db');
require('dotenv').config();

const app = express();

const startServer = async () => {
  try {
    // ⬅️ ESPERAR A MONGODB
    await connectDB();

    // --- MIDDLEWARES ---
    app.use(helmet());

    app.use(cors({
      origin: [
        'https://portafolio-diego-banda.vercel.app',
        'http://localhost:5173'
      ],
      credentials: true
    }));

    app.use(express.json());

    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      message: 'Demasiadas peticiones desde esta IP'
    });
    app.use(limiter);

    // --- RUTAS ---
    app.get('/', (req, res) => {
      res.send('🚀 Servidor Full-Stack de Diego Banda funcionando');
    });

    app.use('/api/blog', require('./routes/blogRoutes'));
    app.use('/api/auth', require('./routes/authRoutes'));

    // --- SERVER ---
    const PORT = process.env.PORT || 10000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`✅ Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();
