import axios from 'axios';

const API_URL = 'https://api.exemple.com/posts'; // Remplacez cette URL par celle de votre API

// Fonction pour récupérer toutes les publications
const getPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Retourner les données de réponse
  } catch (error) {
    console.error('Erreur lors de la récupération des publications', error);
    throw error; // Propager l'erreur
  }
};

// Fonction pour récupérer une publication par son ID
const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/${postId}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la publication avec l'ID ${postId}`, error);
    throw error;
  }
};

// Fonction pour ajouter une nouvelle publication
const addPost = async (postData) => {
  try {
    const response = await axios.post(API_URL, postData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la publication', error);
    throw error;
  }
};

// Fonction pour mettre à jour une publication existante
const updatePost = async (postId, postData) => {
  try {
    const response = await axios.put(`${API_URL}/${postId}`, postData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la publication avec l'ID ${postId}`, error);
    throw error;
  }
};

// Fonction pour supprimer une publication
const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API_URL}/${postId}`);
    return response.data; // Retourne les données de la réponse (généralement un message de succès)
  } catch (error) {
    console.error(`Erreur lors de la suppression de la publication avec l'ID ${postId}`, error);
    throw error;
  }
};

export { getPosts, getPostById, addPost, updatePost, deletePost };
