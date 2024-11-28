// activityService.js

import axios from 'axios';

const API_URL = 'https://api.vitalx.com/activities'; // Remplacez par l'URL de votre API

// Fonction pour récupérer toutes les activités
export const getAllActivities = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Retourne la liste des activités
  } catch (error) {
    console.error('Erreur lors de la récupération des activités:', error);
    throw error;
  }
};

// Fonction pour récupérer une activité par son ID
export const getActivityById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Retourne l'activité spécifique
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'activité:', error);
    throw error;
  }
};

// Fonction pour créer une nouvelle activité
export const createActivity = async (activityData) => {
  try {
    const response = await axios.post(API_URL, activityData);
    return response.data; // Retourne l'activité créée
  } catch (error) {
    console.error('Erreur lors de la création de l\'activité:', error);
    throw error;
  }
};

// Fonction pour mettre à jour une activité existante
export const updateActivity = async (id, activityData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, activityData);
    return response.data; // Retourne l'activité mise à jour
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'activité:', error);
    throw error;
  }
};

// Fonction pour supprimer une activité
export const deleteActivity = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; // Retourne un message de succès ou l'activité supprimée
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'activité:', error);
    throw error;
  }
};
