// db.js
const mongoose = require('mongoose');

// URL de connexion à la base de données MongoDB
const dbURI = 'mongodb://localhost/vitalx'; // Remplace par l'URL de ta DB

// Fonction pour connecter à MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion à MongoDB réussie');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB', err);
    process.exit(1); // Arrêter l'application si la connexion échoue
  }
};

module.exports = connectDB;
