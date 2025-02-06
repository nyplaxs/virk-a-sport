const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Chemin vers ton modèle d'utilisateur, à adapter

// Middleware pour vérifier le token d'authentification
const authMiddleware = async (req, res, next) => {
  try {
    // Récupère le token d'authentification de l'en-tête Authorization
    const token = req.header('Authorization');

    // Vérifie si le token est présent
    if (!token) {
      return res.status(401).json({ message: 'Accès refusé. Aucun token fourni.' });
    }

    // Vérifie et décode le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Assurez-vous d'avoir une clé secrète dans votre environnement

    // Récupère l'utilisateur à partir du token décodé
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    // Ajoute l'utilisateur à la requête pour qu'il soit accessible dans les autres middlewares et contrôleurs
    req.user = user;
    
    // Passe au middleware suivant
    next();
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Token invalide ou expiré.' });
  }
};

module.exports = authMiddleware;
