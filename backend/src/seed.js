const mongoose = require('mongoose');
const Project = require('./models/Project');
const Blog = require('./models/Blog');
const User = require('./models/User'); // Importante: Asegúrate que el modelo existe
require('dotenv').config();

const projects = [
  {
    title: "Tyzox - Tienda de Boxeo",
    description: "Desarrollo full-stack para tienda en línea. Encargado del frontend y backend, garantizando funcionalidad y UX óptima.",
    technologies: ["HTML", "CSS", "JavaScript", "Django", "PostgreSQL"],
    repoLink: "https://github.com/diegobanda54/tyzox",
    date: new Date("2025-04-01")
  },
  {
    title: "Sistema de Validación de Cédulas",
    description: "Desarrollo backend para proyecto integrador, enfocándose en la eficiencia y correcta gestión de datos de identidad.",
    technologies: ["Python", "Backend Logic"],
    repoLink: "https://github.com/diegobanda54/integrador",
    date: new Date("2024-12-01")
  },
  {
    title: "Proyecto PUCA (Municipio de Quito)",
    description: "Soporte técnico y administración de usuarios para optimizar el flujo de solicitudes y entrega de certificados.",
    technologies: ["Soporte Técnico", "Gestión de Usuarios"],
    date: new Date("2024-12-01")
  }
];

const blogs = [
  {
    title: "Seguridad en APIs: Mejores prácticas para evitar ataques comunes",
    category: "Backend",
    content: `... (Tu contenido largo aquí) ...`
  },
  {
    title: "Por qué elegí MongoDB para mi portafolio (vs PostgreSQL)",
    category: "Base de Datos",
    content: `... (Tu contenido largo aquí) ...`
  },
  {
    title: "REST vs GraphQL en APIs Modernas: Una Comparativa Técnica",
    category: "Backend",
    content: `... (Tu contenido largo aquí) ...`
  },
  {
    title: "Gestión Segura de Secretos con Variables de Entorno (.env)",
    category: "Seguridad",
    content: `... (Tu contenido largo aquí) ...`
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado a MongoDB Atlas");

    // 1. Limpiar todas las colecciones
    await Project.deleteMany({});
    await Blog.deleteMany({});
    await User.deleteMany({}); 
    console.log("🗑️ Datos anteriores limpiados satisfactoriamente");

    // 2. Insertar Proyectos y Blogs
    await Project.insertMany(projects);
    await Blog.insertMany(blogs);
    console.log("🌱 Proyectos y Blogs insertados con éxito");

    // 3. Crear Usuario Administrador (Punto 4: Autenticación)
    const admin = new User({
      username: "admin_diego",
      password: "PasswordSeguro123" 
    });
    await admin.save();
    console.log("👤 Usuario administrador 'admin_diego' creado");

    console.log("🚀 TODO LISTO");
    process.exit();
  } catch (error) {
    console.error("❌ Error en el proceso de seed:", error);
    process.exit(1);
  }
};

// Ejecutamos la función
seedDB();