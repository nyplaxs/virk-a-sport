﻿
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Comment = require('../models/Comment'); // Assurez-vous que ce modèle existe

// Middleware pour valider l'ID MongoDB
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'ID invalide' });
    }
    next();
};

// Récupérer tous les commentaires
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json({ success: true, data: comments });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération des commentaires' });
    }
});

// Récupérer un commentaire par ID
router.get('/:id', validateObjectId, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ success: false, error: 'Commentaire non trouvé' });
        }
        res.json({ success: true, data: comment });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération du commentaire' });
    }
});

// Ajouter un nouveau commentaire
router.post('/', async (req, res) => {
    try {
        const { text, author, postId } = req.body;
        if (!text || !author || !postId) {
            return res.status(400).json({ success: false, error: 'Tous les champs (text, author, postId) sont requis' });
        }
        const newComment = new Comment({ text, author, postId });
        await newComment.save();
        res.status(201).json({ success: true, message: 'Commentaire ajouté', data: newComment });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de l\'ajout du commentaire' });
    }
});

// Mettre à jour un commentaire par ID
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        const { text, author } = req.body;
        const updatedComment = await Comment.findByIdAndUpdate(
            req.params.id,
            { text, author },
            { new: true, runValidators: true }
        );
        if (!updatedComment) {
            return res.status(404).json({ success: false, error: 'Commentaire non trouvé' });
        }
        res.json({ success: true, message: 'Commentaire mis à jour', data: updatedComment });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la mise à jour du commentaire' });
    }
});

// Supprimer un commentaire par ID
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ success: false, error: 'Commentaire non trouvé' });
        }
        res.json({ success: true, message: 'Commentaire supprimé', data: deletedComment });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la suppression du commentaire' });
    }
});

module.exports = router;
