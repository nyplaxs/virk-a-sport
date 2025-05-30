﻿
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/Post'); // Exemple de modèle pour les posts
const User = require('../models/User'); // Exemple de modèle pour les utilisateurs

// Route pour effectuer une recherche
router.get('/', async (req, res) => {
    const query = req.query.q; // Paramètre de recherche dans l'URL
    if (!query) {
        return res.status(400).json({ success: false, error: 'Le paramètre de recherche "q" est requis.' });
    }

    try {
        // Exemple de recherche dans plusieurs collections (posts et utilisateurs)
        const posts = await Post.find({ title: { $regex: query, $options: 'i' } }); // Recherche par titre dans les posts
        const users = await User.find({ username: { $regex: query, $options: 'i' } }); // Recherche par nom d'utilisateur

        res.json({
            success: true,
            query,
            results: {
                posts,
                users
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la recherche.' });
    }
});

module.exports = router;
