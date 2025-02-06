import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Ajouter un ami
export const addFriend = async (userId, friendId) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/${userId}/addFriend`, {
      friendId,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout d\'ami:', error);
    throw error;
  }
};

// Supprimer un ami
export const removeFriend = async (userId, friendId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${userId}/removeFriend`, {
      data: { friendId },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'ami:', error);
    throw error;
  }
};

// Obtenir la liste des amis
export const getFriends = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/friends`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des amis:', error);
    throw error;
  }
};
