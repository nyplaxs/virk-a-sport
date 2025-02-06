import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Rechercher un utilisateur
export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la recherche d\'utilisateur:', error);
    throw error;
  }
};

// Rechercher un groupe
export const searchGroups = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/groups`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la recherche de groupe:', error);
    throw error;
  }
};
