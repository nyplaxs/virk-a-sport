import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Récupérer les notifications d'un utilisateur
export const getNotifications = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/notifications`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des notifications:', error);
    throw error;
  }
};

// Marquer une notification comme lue
export const markAsRead = async (userId, notificationId) => {
  try {
    const response = await axios.put(`${BASE_URL}/notifications/${notificationId}/read`, {
      userId,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la notification:', error);
    throw error;
  }
};
