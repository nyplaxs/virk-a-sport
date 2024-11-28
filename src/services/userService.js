import axios from 'axios';

const API_URL = 'https://api.exemple.com/users'; // Remplacez par l'URL de votre API

// Fonction pour s'inscrire
const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // Retourne les données de la réponse (par exemple, le profil de l'utilisateur)
  } catch (error) {
    console.error('Erreur lors de l\'inscription de l\'utilisateur', error);
    throw error; // Propager l'erreur
  }
};

// Fonction pour se connecter
const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; // Retourne les données de la réponse (par exemple, le token JWT)
  } catch (error) {
    console.error('Erreur lors de la connexion de l\'utilisateur', error);
    throw error;
  }
};

// Fonction pour récupérer les informations d'un utilisateur par son ID
const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération des informations de l'utilisateur avec l'ID ${userId}`, error);
    throw error;
  }
};

// Fonction pour mettre à jour les informations d'un utilisateur
const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, userData);
    return response.data; // Retourne les données mises à jour
  } catch (error) {
    console.error(`Erreur lors de la mise à jour des informations de l'utilisateur avec l'ID ${userId}`, error);
    throw error;
  }
};

// Fonction pour supprimer un utilisateur
const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/${userId}`);
    return response.data; // Retourne un message de succès ou les données de la réponse
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'utilisateur avec l'ID ${userId}`, error);
    throw error;
  }
};

export { registerUser, loginUser, getUserById, updateUser, deleteUser };
