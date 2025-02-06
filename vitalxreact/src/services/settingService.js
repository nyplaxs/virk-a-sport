import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Mettre à jour les paramètres de l'utilisateur
export const updateSettings = async (userId, settings) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${userId}/settings`, settings);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour des paramètres:', error);
    throw error;
  }
};

// Récupérer les paramètres de l'utilisateur
export const getSettings = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/settings`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des paramètres:', error);
    throw error;
  }
};
