const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Activity = require('../models/Activity'); // Assurez-vous que ce modèle existe

// Middleware pour valider l'ID MongoDB
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'ID invalide' });
    }
    next();
};

// Récupérer toutes les activités
router.get('/', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json({ success: true, data: activities });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération des activités' });
    }
});

// Récupérer une activité par ID
router.get('/:id', validateObjectId, async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({ success: false, error: 'Activité non trouvée' });
        }
        res.json({ success: true, data: activity });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération de l\'activité' });
    }
});

// Créer une nouvelle activité
router.post('/', async (req, res) => {
    try {
        const { name, description, date } = req.body;
        if (!name || !description || !date) {
            return res.status(400).json({ success: false, error: 'Tous les champs (name, description, date) sont requis' });
        }
        const newActivity = new Activity({ name, description, date });
        await newActivity.save();
        res.status(201).json({ success: true, message: 'Activité créée', data: newActivity });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la création de l\'activité' });
    }
});

// Mettre à jour une activité par ID
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        const { name, description, date } = req.body;
        const updatedActivity = await Activity.findByIdAndUpdate(
            req.params.id,
            { name, description, date },
            { new: true, runValidators: true }
        );
        if (!updatedActivity) {
            return res.status(404).json({ success: false, error: 'Activité non trouvée' });
        }
        res.json({ success: true, message: 'Activité mise à jour', data: updatedActivity });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la mise à jour de l\'activité' });
    }
});

// Supprimer une activité par ID
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        const deletedActivity = await Activity.findByIdAndDelete(req.params.id);
        if (!deletedActivity) {
            return res.status(404).json({ success: false, error: 'Activité non trouvée' });
        }
        res.json({ success: true, message: 'Activité supprimée', data: deletedActivity });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la suppression de l\'activité' });
    }
});

module.exports = router;
