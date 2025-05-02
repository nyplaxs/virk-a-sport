require('dotenv').config();

module.exports = {
  dbURI: process.env.DB_URI, // URI de connexion à MongoDB Atlas
  port: process.env.PORT || 3000, // Port d'écoute avec une valeur par défaut de 3000
};
