const express = require('express');
const router = express.Router();
const { getComments, getComment, createComment, updateComment, deleteComment } = require('../controllers/commentController');

// Routes CRUD pour les commentaires
router.get('/', getComments); // Récupérer tous les commentaires
router.get('/:id', getComment); // Récupérer un commentaire par ID
router.post('/', createComment); // Créer un nouveau commentaire
router.put('/:id', updateComment); // Mettre à jour un commentaire
router.delete('/:id', deleteComment); // Supprimer un commentaire

module.exports = router;
