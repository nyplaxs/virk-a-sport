import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Aimer un post
export const likePost = async (userId, postId) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts/${postId}/like`, {
      userId,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout d\'un like au post:', error);
    throw error;
  }
};

// Supprimer un like d'un post
export const unlikePost = async (userId, postId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${postId}/unlike`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du like du post:', error);
    throw error;
  }
};

// Vérifier si un utilisateur a aimé un post
export const hasLikedPost = async (userId, postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/likedBy/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la vérification du like sur le post:', error);
    throw error;
  }
};
