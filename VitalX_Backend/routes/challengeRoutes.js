﻿
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Challenge = require('../models/Challenge'); // Assurez-vous que ce modèle existe

// Middleware pour valider l'ID MongoDB
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'ID invalide' });
    }
    next();
};

// Récupérer tous les défis
router.get('/', async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.json({ success: true, data: challenges });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération des défis' });
    }
});

// Récupérer un défi par ID
router.get('/:id', validateObjectId, async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) {
            return res.status(404).json({ success: false, error: 'Défi non trouvé' });
        }
        res.json({ success: true, data: challenge });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération du défi' });
    }
});

// Créer un nouveau défi
router.post('/', async (req, res) => {
    try {
        const { title, description, startDate, endDate } = req.body;
        if (!title || !description || !startDate || !endDate) {
            return res.status(400).json({ success: false, error: 'Tous les champs (title, description, startDate, endDate) sont requis' });
        }
        const newChallenge = new Challenge({ title, description, startDate, endDate });
        await newChallenge.save();
        res.status(201).json({ success: true, message: 'Défi créé', data: newChallenge });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la création du défi' });
    }
});

// Mettre à jour un défi par ID
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        const { title, description, startDate, endDate } = req.body;
        const updatedChallenge = await Challenge.findByIdAndUpdate(
            req.params.id,
            { title, description, startDate, endDate },
            { new: true, runValidators: true }
        );
        if (!updatedChallenge) {
            return res.status(404).json({ success: false, error: 'Défi non trouvé' });
        }
        res.json({ success: true, message: 'Défi mis à jour', data: updatedChallenge });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la mise à jour du défi' });
    }
});

// Supprimer un défi par ID
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        const deletedChallenge = await Challenge.findByIdAndDelete(req.params.id);
        if (!deletedChallenge) {
            return res.status(404).json({ success: false, error: 'Défi non trouvé' });
        }
        res.json({ success: true, message: 'Défi supprimé', data: deletedChallenge });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la suppression du défi' });
    }
});

module.exports = router;
