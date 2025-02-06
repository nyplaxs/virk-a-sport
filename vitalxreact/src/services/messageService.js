import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Envoyer un message
export const sendMessage = async (senderId, receiverId, content) => {
  try {
    const response = await axios.post(`${BASE_URL}/messages`, {
      senderId,
      receiverId,
      content,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    throw error;
  }
};

// Récupérer les messages entre deux utilisateurs
export const getMessages = async (userId, friendId) => {
  try {
    const response = await axios.get(`${BASE_URL}/messages/${userId}/${friendId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    throw error;
  }
};
