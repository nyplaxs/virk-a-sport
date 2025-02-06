const express = require('express');
const router = express.Router();
const { getChallenges, getChallenge, createChallenge, updateChallenge, deleteChallenge } = require('../controllers/challengeController');

// Routes CRUD pour les défis
router.get('/', getChallenges); // Récupérer tous les défis
router.get('/:id', getChallenge); // Récupérer un défi par ID
router.post('/', createChallenge); // Créer un nouveau défi
router.put('/:id', updateChallenge); // Mettre à jour un défi
router.delete('/:id', deleteChallenge); // Supprimer un défi

module.exports = router;
