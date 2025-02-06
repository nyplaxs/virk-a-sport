import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Créer un post
export const createPost = async (userId, content) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, {
      userId,
      content,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du post:', error);
    throw error;
  }
};

// Obtenir les posts d'un utilisateur
export const getPosts = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/posts`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error);
    throw error;
  }
};

// Supprimer un post
export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du post:', error);
    throw error;
  }
};
