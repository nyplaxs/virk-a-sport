import axios from 'axios';

// URL de base pour l'API
const BASE_URL = 'http://localhost:5000/api'; // Ton URL API locale

// Fonction pour récupérer toutes les activités
export const getActivities = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/activities`);
    return response.data; // Retourne les données récupérées
  } catch (error) {
    console.error('Erreur lors de la récupération des activités:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour récupérer une activité spécifique par ID
export const getActivityById = async (activityId) => {
  try {
    const response = await axios.get(`${BASE_URL}/activities/${activityId}`);
    return response.data; // Retourne l'activité spécifique
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'activité ${activityId}:`, error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour ajouter une nouvelle activité
export const addActivity = async (activityData) => {
  try {
    const response = await axios.post(`${BASE_URL}/activities`, activityData);
    return response.data; // Retourne l'activité ajoutée
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'activité:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour mettre à jour une activité
export const updateActivity = async (activityId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/activities/${activityId}`, updatedData);
    return response.data; // Retourne l'activité mise à jour
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'activité ${activityId}:`, error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour supprimer une activité
export const deleteActivity = async (activityId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/activities/${activityId}`);
    return response.data; // Retourne la réponse de la suppression
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'activité ${activityId}:`, error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};
