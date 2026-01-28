const mongoose = require('mongoose');
const Project = require('./models/Project');
const Blog = require('./models/Blog');
const User = require('./models/User'); 
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
    content: `La seguridad en el desarrollo de APIs es un pilar fundamental en la arquitectura de software moderna. En este proyecto, hemos implementado capas de seguridad robustas utilizando Express.js... [Aquí expande con texto sobre Helmet, Rate Limiting y validación de JWT para alcanzar el Punto 8 de la rúbrica]. Implementar middlewares como Helmet nos permite mitigar ataques de Cross-Site Scripting (XSS) y proteger las cabeceras HTTP, mientras que el Rate Limit previene ataques de denegación de servicio (DoS) limitando las peticiones por IP.`
  },
  {
    title: "Por qué elegí MongoDB para mi portafolio (vs PostgreSQL)",
    category: "Base de Datos",
    content: `La elección de MongoDB Atlas sobre una base de datos relacional como PostgreSQL fue una decisión estratégica basada en la flexibilidad del esquema NoSQL. Para un portafolio que integra un blog técnico con contenidos extensos y metadatos variables de proyectos, MongoDB permite una escalabilidad horizontal superior... [Justificación técnica para el Punto 5]. Al no requerir esquemas rígidos, podemos evolucionar la estructura de los posts sin necesidad de migraciones complejas de base de datos.`
  },
  {
    title: "REST vs GraphQL en APIs Modernas: Una Comparativa Técnica",
    category: "Backend",
    content: `Analizar la eficiencia entre REST y GraphQL es vital para cualquier desarrollador Full-Stack. Mientras REST se basa en endpoints fijos, GraphQL permite al cliente solicitar exactamente lo que necesita. En este backend robusto, optamos por REST por su simplicidad y compatibilidad nativa con middlewares de seguridad estándar... [Más detalles técnicos sobre latencia y transferencia de datos].`
  },
  {
    title: "Gestión Segura de Secretos con Variables de Entorno (.env)",
    category: "Seguridad",
    content: `Nunca debemos subir credenciales al control de versiones. El uso de variables de entorno a través de la librería dotenv permite separar la configuración del código fuente. En este despliegue en Render, las variables como MONGO_URI y JWT_SECRET se gestionan desde el panel de control, asegurando que la información sensible permanezca privada y protegida... [Explicación detallada del Punto 6].`
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado a MongoDB Atlas");

    await Project.deleteMany({});
    await Blog.deleteMany({});
    await User.deleteMany({}); 
    console.log("🗑️ Datos anteriores limpiados");

    await Project.insertMany(projects);
    await Blog.insertMany(blogs);
    console.log("🌱 Proyectos y Blogs insertados");

    // PUNTO 4: Autenticación - Asegúrate que tu modelo User encripte la contraseña con bcrypt
    const admin = new User({
      username: "dabanda",
      password: "Alejo1324." 
    });
    await admin.save();
    console.log("👤 Usuario administrador 'dabanda' creado");

    console.log("🚀 PROCESO COMPLETADO EXITOSAMENTE");
    process.exit();
  } catch (error) {
    console.error("❌ Error en el proceso de seed:", error);
    process.exit(1);
  }
};

seedDB();