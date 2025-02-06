// challengeController.js
const Challenge = require('../models/Challenge');

// Créer un défi
exports.createChallenge = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const newChallenge = new Challenge({ title, description, userId, date: new Date() });
    const challenge = await newChallenge.save();
    res.status(201).json(challenge);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du défi' });
  }
};

// Récupérer tous les défis
exports.getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find().sort({ date: -1 });
    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des défis' });
  }
};

// Récupérer un défi par son ID
exports.getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: 'Défi non trouvé' });
    }
    res.status(200).json(challenge);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du défi' });
  }
};

// Mettre à jour un défi
exports.updateChallenge = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedChallenge) {
      return res.status(404).json({ message: 'Défi non trouvé' });
    }
    res.status(200).json(updatedChallenge);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du défi' });
  }
};

// Supprimer un défi
exports.deleteChallenge = async (req, res) => {
  try {
    const deletedChallenge = await Challenge.findByIdAndDelete(req.params.id);
    if (!deletedChallenge) {
      return res.status(404).json({ message: 'Défi non trouvé' });
    }
    res.status(200).json({ message: 'Défi supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du défi' });
  }
};
