// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
const mongoUri = process.env.MONGO_URI || "mongodb+srv://Noa:rKU2C9mIgoX2LG9f@cluster0.pk36gq6.mongodb.net/";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion réussie à MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MongoDB', err));

// Routes
app.use('/api', routes); // Remplacez '/api' par le préfixe souhaité pour vos routes

// Exemple de route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend VitalX !');
});

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).send({ error: 'Route non trouvée' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
