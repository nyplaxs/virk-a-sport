import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Suivre un utilisateur
export const followUser = async (userId, targetUserId) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/${userId}/follow`, {
      targetUserId,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la tentative de suivre l\'utilisateur:', error);
    throw error;
  }
};

// Se désabonner d'un utilisateur
export const unfollowUser = async (userId, targetUserId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${userId}/unfollow`, {
      data: { targetUserId },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la tentative de se désabonner de l\'utilisateur:', error);
    throw error;
  }
};

// Obtenir la liste des utilisateurs suivis
export const getFollowedUsers = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/following`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs suivis:', error);
    throw error;
  }
};

// Obtenir la liste des abonnés d'un utilisateur
export const getFollowers = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/followers`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des abonnés:', error);
    throw error;
  }
};
