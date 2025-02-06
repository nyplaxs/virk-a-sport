import axios from 'axios';

// URL de base de l'API
const BASE_URL = 'http://localhost:5000/api'; // Remplace par l'URL de ton API

// Fonction pour récupérer les messages d'un chat spécifique
export const getMessages = async (chatId) => {
  try {
    const response = await axios.get(`${BASE_URL}/chat/${chatId}`);
    return response.data; // Retourne les messages du chat
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour envoyer un message dans un chat
export const sendMessage = async (chatId, userId, messageContent) => {
  try {
    const response = await axios.post(`${BASE_URL}/chat/${chatId}/message`, {
      userId,
      messageContent,
    });
    return response.data; // Retourne la réponse du serveur (par exemple, le message envoyé)
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour créer un nouveau chat
export const createChat = async (userIds) => {
  try {
    const response = await axios.post(`${BASE_URL}/chat`, {
      userIds, // Liste des IDs des utilisateurs qui vont participer au chat
    });
    return response.data; // Retourne les détails du nouveau chat créé
  } catch (error) {
    console.error('Erreur lors de la création du chat:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour supprimer un message
export const deleteMessage = async (chatId, messageId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/chat/${chatId}/message/${messageId}`);
    return response.data; // Retourne la réponse du serveur
  } catch (error) {
    console.error('Erreur lors de la suppression du message:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};
