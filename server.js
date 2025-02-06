const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan'); // Pour gérer les logs HTTP

// Importation des routes
const activityRoutes = require('./routes/activityRoutes');
const challengeRoutes = require('./routes/challengeRoutes');
const commentRoutes = require('./routes/commentRoutes');
const eventRoutes = require('./routes/eventRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const searchRoutes = require('./routes/searchRoutes'); // Route supplémentaire pour les recherches

// Configuration de l'environnement
dotenv.config();

// Initialisation de l'application
const app = express();

// Middleware pour les données JSON et CORS
app.use(express.json());
app.use(cors());
app.use(morgan('dev')); // Utilisation de morgan pour enregistrer les requêtes HTTP

// Connexion à MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🗄️ Connecté à MongoDB');
  } catch (err) {
    console.error('❌ Erreur de connexion à MongoDB:', err.message);
    process.exit(1); // Arrêter le serveur en cas d'erreur de connexion
  }
};

// Gestion des événements de la connexion MongoDB
mongoose.connection.on('connected', () => {
  console.log('🗄️ Connecté à MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Erreur MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('🔌 Déconnecté de MongoDB');
});

// Appel de la fonction de connexion à la base de données
connectDB();

// Routes principales
app.use('/api/activities', activityRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/search', searchRoutes); // Route pour la recherche

// Gestion des erreurs 404 (Route non trouvée)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ressource non trouvée.' });
});

// Gestion des erreurs globales (Erreurs internes du serveur)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Erreur interne du serveur',
    error: err.message,
  });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
