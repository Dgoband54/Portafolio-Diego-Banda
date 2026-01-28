const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// RUTA: Obtener todos los proyectos
// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find(); // Busca todo en la BD
    res.json(projects); // Lo envía como respuesta JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;