// api.js

import axios from 'axios';

// URL de base pour l'API (à ajuster selon votre configuration)
const API_URL = 'https://api.vitalx.com';  // Remplacez par l'URL réelle de votre API

// Créez une instance axios avec des configurations par défaut
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Ajoutez ici d'autres en-têtes si nécessaire, comme les tokens d'authentification
    // 'Authorization': `Bearer ${your_token_here}`
  },
});

// Fonction pour gérer les erreurs des requêtes API
const handleError = (error) => {
  if (error.response) {
    // La requête a été faite et le serveur a répondu avec un code d'erreur
    console.error('Réponse d\'erreur:', error.response);
    throw new Error(error.response.data.message || 'Une erreur est survenue');
  } else if (error.request) {
    // La requête a été faite mais aucune réponse n'a été reçue
    console.error('Erreur de requête:', error.request);
    throw new Error('Erreur de réseau ou serveur non disponible');
  } else {
    // Erreur lors de la configuration de la requête
    console.error('Erreur inconnue:', error.message);
    throw new Error('Une erreur inconnue est survenue');
  }
};

// Fonction pour récupérer toutes les activités
export const getAllActivities = async () => {
  try {
    const response = await api.get('/activities');
    return response.data; // Retourne la liste des activités
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour récupérer une activité spécifique par ID
export const getActivityById = async (id) => {
  try {
    const response = await api.get(`/activities/${id}`);
    return response.data; // Retourne l'activité spécifique
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour créer une nouvelle activité
export const createActivity = async (activityData) => {
  try {
    const response = await api.post('/activities', activityData);
    return response.data; // Retourne l'activité créée
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour mettre à jour une activité existante
export const updateActivity = async (id, activityData) => {
  try {
    const response = await api.put(`/activities/${id}`, activityData);
    return response.data; // Retourne l'activité mise à jour
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour supprimer une activité
export const deleteActivity = async (id) => {
  try {
    const response = await api.delete(`/activities/${id}`);
    return response.data; // Retourne une réponse de succès
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour récupérer les utilisateurs
export const getAllUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data; // Retourne la liste des utilisateurs
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour récupérer un utilisateur spécifique par ID
export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data; // Retourne l'utilisateur spécifique
  } catch (error) {
    handleError(error);  // Gère les erreurs
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
    return response.data; // Retourne les informations de l'utilisateur connecté
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};
