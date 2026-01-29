Informe Técnico de Desarrollo: Arquitectura y Despliegue de un Portafolio Profesional Full-Stack
Autor: Diego Banda Fecha: 28 de enero de 2026 Ubicación: Quito, Ecuador

1. Resumen Ejecutivo
Este proyecto constituye la culminación de la formación técnica en desarrollo de software, integrando diversas tecnologías y metodologías para presentar una solución web completa, segura y funcional. La plataforma no solo cumple con los requisitos estéticos, sino que implementa una arquitectura desacoplada (Decoupled Architecture) que separa el cliente del servidor, garantizando escalabilidad y mantenibilidad profesional.

2. Pilares de Justificación Técnica y Competencias
2.1. Ingeniería de Frontend Moderno
La interfaz de usuario ha sido desarrollada utilizando React.js bajo el entorno de construcción Vite, garantizando una carga eficiente mediante Hot Module Replacement (HMR).

Modularización: Se empleó una estructura de componentes reutilizables, lo que permite un mantenimiento centralizado del código.

Diseño Atómico: El diseño visual se gestionó mediante Tailwind CSS, aplicando un enfoque de Utility-First y diseño responsivo (Mobile-First), asegurando una experiencia de usuario óptima en dispositivos móviles, tablets y ordenadores de escritorio.

Interactividad: Se integraron librerías de iconos vectoriales como Lucide React para una interfaz intuitiva y moderna.

2.2. Arquitectura de Backend y Middleware Robusto
El proyecto demuestra la capacidad de conectar una interfaz de usuario con servicios de procesamiento de datos en tiempo real.

Servidor API: Se construyó un servidor basado en Node.js y Express, encargado de gestionar las peticiones HTTP y la lógica de negocio.

Integración: La arquitectura permite la gestión de proyectos y la comunicación fluida entre el cliente y el servidor de base de datos, simulando la lógica de un sistema de producción empresarial.

2.3. Persistencia de Datos y Gestión NoSQL
La aplicación refleja una gestión avanzada de información estructurada.

Modelado de Datos: Se utilizó MongoDB Atlas como servicio de base de datos en la nube. La elección de una base de datos NoSQL responde a la necesidad de flexibilidad para gestionar documentos como los blogs técnicos y la información de los proyectos (ej. Tyzox y The Burgers Band).

Integridad: Se implementaron esquemas mediante Mongoose para asegurar que cada entrada en la base de datos cumpla con los requisitos técnicos de la plataforma.

2.4. Protocolos de Seguridad y Blindaje de API
La seguridad fue un eje transversal en el desarrollo, abordando tanto el lado del servidor como el del cliente:

Seguridad de Encabezados: Implementación de Helmet.js para establecer cabeceras HTTP seguras, protegiendo al sitio de ataques de XSS y Sniffing.

Control de Accesos (CORS): Configuración estricta de Cross-Origin Resource Sharing para autorizar únicamente las peticiones provenientes del dominio oficial en Vercel.

Protección de Tráfico: Uso de Express-Rate-Limit para mitigar ataques de denegación de servicio (DoS) mediante la restricción de solicitudes por IP.

Hashing de Credenciales: Las contraseñas se gestionan mediante Bcryptjs, aplicando algoritmos de encriptación irreversibles para cumplir con los estándares de protección de datos personales.

2.5. Ciclo de Vida del Software y Control de Versiones
El desarrollo ha seguido un flujo de trabajo profesional utilizando Git.

Versionamiento: Se evidencia el manejo de repositorios remotos en GitHub, con una organización técnica de confirmaciones (commits) descriptivos que documentan la evolución del código.

Integración Continua: El flujo permite que cada actualización en el código sea validada antes de pasar al entorno de producción.

3. Instrucciones de Implementación y Ejecución Local
Para la auditoría o réplica del sistema en un entorno local, se deben seguir los siguientes procedimientos técnicos:

3.1. Requisitos de Entorno
Node.js: Versión mínima 18.x.

MongoDB: Acceso a un clúster activo o instancia local.

3.2. Despliegue del Backend
Acceder al directorio correspondiente: cd backend.

Instalar el ecosistema de dependencias: npm install.

Configuración de variables (.env): Definir MONGO_URI, PORT y JWT_SECRET.

Población de datos: Ejecutar node src/seed.js para insertar los 4 artículos técnicos obligatorios.

Arranque del servicio: node src/index.js.

3.3. Despliegue del Frontend
Acceder al directorio del cliente: cd frontend.

Instalación de paquetes: npm install.

Ejecución del servidor de desarrollo: npm run dev.

4. Conclusión del Despliegue en la Nube
El proyecto se encuentra operativo en un entorno de producción real, distribuido de la siguiente manera:

Frontend Hosting: Vercel [https://portafolio-diego-banda.vercel.app/].

Backend Hosting: Render.

Estado: Live / Producción.

Este despliegue confirma el dominio de los flujos de Continuous Deployment (CD) y la capacidad del desarrollador para poner en marcha sistemas complejos y funcionales bajo protocolos de comunicación segura.