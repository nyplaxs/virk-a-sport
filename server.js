const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Connexion MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("\uD83D\uDCC4 Connecté à MongoDB");
  } catch (err) {
    console.error("❌ Erreur MongoDB:", err);
  }
};
connectDB();

// Importation des routes
const activityRoutes = require("./routes/activityRoutes");
const challengeRoutes = require("./routes/challengeRoutes");
const commentRoutes = require("./routes/commentRoutes");
const eventRoutes = require("./routes/eventRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const searchRoutes = require("./routes/searchRoutes");

// Définition des routes
app.use("/api/activities", activityRoutes);
app.use("/api/challenges", challengeRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/search", searchRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Ressource non trouvée." });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Erreur interne du serveur",
    error: err.message,
  });
});

// Déploiement via Firebase Functions
exports.api = functions.https.onRequest(app);
