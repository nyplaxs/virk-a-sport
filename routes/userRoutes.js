const express = require('express');
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');

// Routes CRUD pour les utilisateurs
router.get('/', getUsers); // Récupérer tous les utilisateurs
router.get('/:id', getUser); // Récupérer un utilisateur par ID
router.post('/', createUser); // Créer un nouvel utilisateur
router.put('/:id', updateUser); // Mettre à jour un utilisateur
router.delete('/:id', deleteUser); // Supprimer un utilisateur

module.exports = router;
