// challengeService.js

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

// Fonction pour créer un nouveau défi
export const createChallenge = async (challengeData) => {
  try {
    const response = await api.post('/challenges', challengeData);
    return response.data; // Retourne les informations du défi créé
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour récupérer la liste des défis
export const getChallenges = async () => {
  try {
    const response = await api.get('/challenges');
    return response.data; // Retourne la liste des défis
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour récupérer un défi spécifique par son ID
export const getChallengeById = async (challengeId) => {
  try {
    const response = await api.get(`/challenges/${challengeId}`);
    return response.data; // Retourne les détails du défi
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour mettre à jour un défi existant
export const updateChallenge = async (challengeId, updatedData) => {
  try {
    const response = await api.put(`/challenges/${challengeId}`, updatedData);
    return response.data; // Retourne les informations mises à jour du défi
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour supprimer un défi
export const deleteChallenge = async (challengeId) => {
  try {
    const response = await api.delete(`/challenges/${challengeId}`);
    return response.data; // Retourne la réponse après la suppression
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour participer à un défi
export const joinChallenge = async (challengeId, userId) => {
  try {
    const response = await api.post(`/challenges/${challengeId}/join`, { userId });
    return response.data; // Retourne les informations après participation
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour récupérer les défis d'un utilisateur (ses participations)
export const getUserChallenges = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/challenges`);
    return response.data; // Retourne les défis auxquels l'utilisateur participe
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};
