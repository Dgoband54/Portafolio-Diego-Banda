const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { body, validationResult } = require('express-validator');

// --- OBTENER TODOS LOS POSTS (Público) ---
router.get('/', async (req, res) => {
    try {
        const posts = await Blog.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los posts' });
    }
});

// --- CREAR UN NUEVO POST (Punto 3: Validación) ---
router.post('/', [
    body('title').isLength({ min: 5 }).withMessage('El título debe tener al menos 5 caracteres'),
    body('content').isLength({ min: 100 }).withMessage('El contenido debe ser extenso para cumplir el requisito técnico'),
    body('category').notEmpty().withMessage('La categoría es obligatoria')
], async (req, res) => {
    // Manejo centralizado de errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, category } = req.body;

    try {
        const nuevoPost = new Blog({ title, content, category });
        const postGuardado = await nuevoPost.save();
        res.status(201).json(postGuardado);
    } catch (err) {
    console.error('❌ ERROR REAL:', err);
    res.status(500).json({ 
        message: 'Error al obtener los posts',
        error: err.message
    });
}

});

module.exports = router;