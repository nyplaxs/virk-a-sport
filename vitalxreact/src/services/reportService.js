import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Signaler un contenu
export const reportContent = async (userId, contentId, reason) => {
  try {
    const response = await axios.post(`${BASE_URL}/reports`, {
      userId,
      contentId,
      reason,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors du signalement du contenu:', error);
    throw error;
  }
};

// Obtenir les rapports d'un utilisateur
export const getReports = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/reports`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des rapports:', error);
    throw error;
  }
};
