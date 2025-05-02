require('dotenv').config();

module.exports = {
  // URL de connexion à MongoDB Atlas
  dbURI: process.env.DB_URI || 'mongodb+srv://Noa:rKU2C9mIgoX2LG9f@cluster0.pk36gq6.mongodb.net/vitalx?retryWrites=true&w=majority',
  
  // Port d'écoute pour l'application
  port: process.env.PORT || 5000,
};
