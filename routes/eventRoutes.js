const express = require('express');
const router = express.Router();
const { getEvents, getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');

// Routes CRUD pour les événements
router.get('/', getEvents); // Récupérer tous les événements
router.get('/:id', getEvent); // Récupérer un événement par ID
router.post('/', createEvent); // Créer un nouvel événement
router.put('/:id', updateEvent); // Mettre à jour un événement
router.delete('/:id', deleteEvent); // Supprimer un événement

module.exports = router;
