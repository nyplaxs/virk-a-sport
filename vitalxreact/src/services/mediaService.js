import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Télécharger un média
export const uploadMedia = async (userId, media) => {
  try {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('media', media);
    
    const response = await axios.post(`${BASE_URL}/media/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi du média:', error);
    throw error;
  }
};

// Obtenir les médias d'un utilisateur
export const getMedia = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/media`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des médias:', error);
    throw error;
  }
};

// Supprimer un média
export const deleteMedia = async (userId, mediaId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/media/${mediaId}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du média:', error);
    throw error;
  }
};
