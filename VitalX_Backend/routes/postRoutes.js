﻿
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/Post'); // Assurez-vous que ce modèle existe

// Middleware pour valider l'ID MongoDB
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'ID invalide' });
    }
    next();
};

// Récupérer tous les posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération des posts' });
    }
});

// Récupérer un post par ID
router.get('/:id', validateObjectId, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ success: false, error: 'Post non trouvé' });
        }
        res.json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération du post' });
    }
});

// Créer un nouveau post
router.post('/', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        if (!title || !content || !author) {
            return res.status(400).json({ success: false, error: 'Tous les champs (title, content, author) sont requis' });
        }
        const newPost = new Post({ title, content, author });
        await newPost.save();
        res.status(201).json({ success: true, message: 'Post créé', data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la création du post' });
    }
});

// Mettre à jour un post par ID
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { title, content, author },
            { new: true, runValidators: true }
        );
        if (!updatedPost) {
            return res.status(404).json({ success: false, error: 'Post non trouvé' });
        }
        res.json({ success: true, message: 'Post mis à jour', data: updatedPost });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la mise à jour du post' });
    }
});

// Supprimer un post par ID
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ success: false, error: 'Post non trouvé' });
        }
        res.json({ success: true, message: 'Post supprimé', data: deletedPost });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la suppression du post' });
    }
});

module.exports = router;
