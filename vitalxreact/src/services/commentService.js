import axios from 'axios';

// URL de base de l'API
const BASE_URL = 'http://localhost:5000/api'; // Remplace par l'URL de ton API

// Fonction pour récupérer les commentaires d'une publication spécifique
export const getComments = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    return response.data; // Retourne les commentaires de la publication
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour ajouter un commentaire à une publication
export const addComment = async (postId, userId, commentContent) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts/${postId}/comments`, {
      userId,
      commentContent,
    });
    return response.data; // Retourne le commentaire ajouté
  } catch (error) {
    console.error('Erreur lors de l\'ajout du commentaire:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour supprimer un commentaire d'une publication
export const deleteComment = async (postId, commentId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${postId}/comments/${commentId}`);
    return response.data; // Retourne la réponse du serveur (par exemple, confirmation de suppression)
  } catch (error) {
    console.error('Erreur lors de la suppression du commentaire:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};
