const express = require('express');
const router = express.Router();
const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postController');

// Routes CRUD pour les publications
router.get('/', getPosts); // Récupérer toutes les publications
router.get('/:id', getPost); // Récupérer une publication par ID
router.post('/', createPost); // Créer une nouvelle publication
router.put('/:id', updatePost); // Mettre à jour une publication
router.delete('/:id', deletePost); // Supprimer une publication

module.exports = router;
