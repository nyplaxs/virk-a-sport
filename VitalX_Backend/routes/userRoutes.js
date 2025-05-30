﻿
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User'); // Assurez-vous que ce modèle existe
const bcrypt = require('bcrypt');

// Middleware pour valider l'ID MongoDB
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'ID invalide' });
    }
    next();
};

// Récupérer tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclure le mot de passe des résultats
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération des utilisateurs' });
    }
});

// Récupérer un utilisateur par ID
router.get('/:id', validateObjectId, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password'); // Exclure le mot de passe
        if (!user) {
            return res.status(404).json({ success: false, error: 'Utilisateur non trouvé' });
        }
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération de l\'utilisateur' });
    }
});

// Créer un nouvel utilisateur
router.post('/', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, error: 'Tous les champs (username, email, password) sont requis' });
        }

        // Vérifier si l'email existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'Un utilisateur avec cet email existe déjà' });
        }

        // Hacher le mot de passe avant de le sauvegarder
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ success: true, message: 'Utilisateur créé', data: { username, email } });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la création de l\'utilisateur' });
    }
});

// Mettre à jour un utilisateur par ID
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const updates = {};
        if (username) updates.username = username;
        if (email) updates.email = email;
        if (password) updates.password = await bcrypt.hash(password, 10);

        const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({ success: false, error: 'Utilisateur non trouvé' });
        }
        res.json({ success: true, message: 'Utilisateur mis à jour', data: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la mise à jour de l\'utilisateur' });
    }
});

// Supprimer un utilisateur par ID
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, error: 'Utilisateur non trouvé' });
        }
        res.json({ success: true, message: 'Utilisateur supprimé', data: deletedUser });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erreur lors de la suppression de l\'utilisateur' });
    }
});

module.exports = router;
