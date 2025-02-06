import axios from 'axios';

// URL de base pour l'API
const BASE_URL = 'http://localhost:5000/api'; // Ton URL API locale

// Fonction pour récupérer les statistiques globales
export const getGlobalStats = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/analytics/global-stats`);
    return response.data; // Retourne les statistiques globales
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques globales:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour récupérer les statistiques d'un utilisateur
export const getUserStats = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/analytics/user-stats/${userId}`);
    return response.data; // Retourne les statistiques d'un utilisateur spécifique
  } catch (error) {
    console.error(`Erreur lors de la récupération des statistiques pour l'utilisateur ${userId}:`, error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour récupérer les statistiques des activités
export const getActivityStats = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/analytics/activity-stats`);
    return response.data; // Retourne les statistiques des activités
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques des activités:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour récupérer les performances des utilisateurs (exemple de top utilisateurs)
export const getTopUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/analytics/top-users`);
    return response.data; // Retourne les utilisateurs avec les meilleures performances
  } catch (error) {
    console.error('Erreur lors de la récupération des meilleurs utilisateurs:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};
