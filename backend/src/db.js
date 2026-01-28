const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log('✅ MongoDB Atlas conectado');
  } catch (err) {
    console.error('❌ Error conectando a MongoDB:', err.message);
    // NO usamos process.exit en producción
  }
};

module.exports = { connectDB };
