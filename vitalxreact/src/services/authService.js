import axios from 'axios';

// URL de base de l'API
const BASE_URL = 'http://localhost:5000/api'; // Remplace par l'URL de ton API

// Fonction pour l'inscription d'un utilisateur
export const registerUser = async (email, password, username) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      email,
      password,
      username,
    });
    return response.data; // Retourne les données de l'utilisateur inscrit
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour la connexion de l'utilisateur
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data; // Retourne les données de l'utilisateur connecté (par exemple un token JWT)
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour vérifier si l'utilisateur est authentifié
export const checkAuth = async () => {
  try {
    const token = localStorage.getItem('authToken'); // Ou autre stockage local dans React Native (AsyncStorage, par exemple)
    if (!token) {
      throw new Error('Aucun token trouvé');
    }
    const response = await axios.get(`${BASE_URL}/auth/check`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Retourne la réponse du serveur (par exemple des informations sur l'utilisateur)
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'authentification:', error);
    throw error;
  }
};

// Fonction pour se déconnecter
export const logoutUser = () => {
  try {
    localStorage.removeItem('authToken'); // Ou autre méthode de suppression du token dans le stockage local
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};
