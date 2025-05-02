const mongoose = require('mongoose');

// URL de connexion MongoDB
const mongoURI = 'mongodb+srv://Noa:rKU2C9mIgoX2LG9f@cluster0.pk36gq6.mongodb.net/?retryWrites=true&w=majority';

// Connexion à MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion à MongoDB réussie.');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB :', err.message);
    process.exit(1); // Quitter le processus en cas d'erreur
  }
};

module.exports = connectDB;
