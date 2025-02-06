const express = require('express');
const router = express.Router();
const { getActivities, getActivity, createActivity, updateActivity, deleteActivity } = require('../controllers/activityController');

// Routes CRUD pour les activités
router.get('/', getActivities); // Récupérer toutes les activités
router.get('/:id', getActivity); // Récupérer une activité par ID
router.post('/', createActivity); // Créer une nouvelle activité
router.put('/:id', updateActivity); // Mettre à jour une activité
router.delete('/:id', deleteActivity); // Supprimer une activité

module.exports = router;
