import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Ton URL API locale

// Fonction pour récupérer les activités
export const getActivities = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/activities`);
    return response.data; // On retourne les données des activités
  } catch (error) {
    console.error('Erreur lors de la récupération des activités:', error);
    throw error; // On lance l'erreur pour qu'elle puisse être gérée dans les composants
  }
};

// Fonction pour ajouter une nouvelle activité
export const addActivity = async (activityData) => {
  try {
    const response = await axios.post(`${BASE_URL}/activities`, activityData);
    return response.data; // On retourne l'activité ajoutée
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'activité:', error);
    throw error; // On lance l'erreur pour qu'elle puisse être gérée
  }
};

// Fonction pour mettre à jour une activité
export const updateActivity = async (activityId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/activities/${activityId}`, updatedData);
    return response.data; // On retourne l'activité mise à jour
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'activité:', error);
    throw error; // On lance l'erreur pour qu'elle puisse être gérée
  }
};

// Fonction pour supprimer une activité
export const deleteActivity = async (activityId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/activities/${activityId}`);
    return response.data; // On retourne la réponse de la suppression
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'activité:', error);
    throw error; // On lance l'erreur pour qu'elle puisse être gérée
  }
};
