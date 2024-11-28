// authService.js

import axios from 'axios';

// URL de base pour l'API (à ajuster selon votre configuration)
const API_URL = 'https://api.vitalx.com'; // Remplacez par l'URL de votre API

// Crée une instance axios avec des configurations par défaut
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour gérer les erreurs des requêtes API
const handleError = (error) => {
  if (error.response) {
    console.error('Réponse d\'erreur:', error.response);
    throw new Error(error.response.data.message || 'Une erreur est survenue');
  } else if (error.request) {
    console.error('Erreur de requête:', error.request);
    throw new Error('Erreur de réseau ou serveur non disponible');
  } else {
    console.error('Erreur inconnue:', error.message);
    throw new Error('Une erreur inconnue est survenue');
  }
};

// Fonction pour enregistrer un nouvel utilisateur
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    return response.data; // Retourne l'utilisateur inscrit
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour connecter un utilisateur (connexion)
export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/users/login', loginData);
    if (response.data.token) {
      // Sauvegarder le token dans localStorage ou sessionStorage
      localStorage.setItem('userToken', response.data.token);
    }
    return response.data; // Retourne les informations de l'utilisateur connecté
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour déconnecter un utilisateur
export const logoutUser = () => {
  // Supprimer le token du localStorage ou sessionStorage
  localStorage.removeItem('userToken');
};

// Fonction pour vérifier si un utilisateur est authentifié
export const isAuthenticated = () => {
  const token = localStorage.getItem('userToken');
  return token !== null;  // Si un token est présent, l'utilisateur est authentifié
};

// Fonction pour obtenir le token de l'utilisateur
export const getAuthToken = () => {
  return localStorage.getItem('userToken');
};

// Fonction pour configurer le token dans les en-têtes de requêtes axios
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers['Authorization'];
  }
};

// Exemple d'utilisation du token dans les requêtes API
export const getProfile = async () => {
  const token = getAuthToken();
  setAuthToken(token);  // Ajoute le token dans les en-têtes
  try {
    const response = await api.get('/users/profile');
    return response.data; // Retourne les informations du profil utilisateur
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};
