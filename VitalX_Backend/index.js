require('dotenv').config(); // Charger les variables d'environnement à partir du fichier .env
const express = require('express');
const mongoose = require('mongoose');
const admin = require('firebase-admin'); // Importer Firebase Admin SDK

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
const mongoUri = "mongodb+srv://Noa:rKU2C9mIgoX2LG9f@cluster0.pk36gq6.mongodb.net/";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion réussie à MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MongoDB', err));

// Initialisation Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAp0RqbD6zGCIa2TBVToZrgKM18tZlXTiY",
  projectId: "virk-a",
  storageBucket: "virk-a.firebasestorage.app",
  messagingSenderId: "952403294314",
  appId: "1:952403294314:android:ed4df85e1cbdc0ae1ab213",
};

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  storageBucket: firebaseConfig.storageBucket,
});

console.log('Firebase initialisé avec succès');

// Exemple de route
app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend VitalX avec Firebase et MongoDB !');
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
