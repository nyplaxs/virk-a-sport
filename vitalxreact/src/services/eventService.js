import axios from 'axios';

// URL de base de l'API
const BASE_URL = 'http://localhost:5000/api'; // Remplace par l'URL de ton API

// Fonction pour récupérer tous les événements
export const getEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data; // Retourne les événements récupérés
  } catch (error) {
    console.error('Erreur lors de la récupération des événements:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour récupérer un événement spécifique par ID
export const getEventById = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL}/events/${eventId}`);
    return response.data; // Retourne l'événement récupéré
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'événement:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour ajouter un événement
export const createEvent = async (userId, title, description, date, location) => {
  try {
    const response = await axios.post(`${BASE_URL}/events`, {
      userId,
      title,
      description,
      date,
      location,
    });
    return response.data; // Retourne l'événement créé
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour supprimer un événement
export const deleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/events/${eventId}`);
    return response.data; // Retourne la réponse du serveur (par exemple, confirmation de suppression)
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'événement:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour mettre à jour un événement
export const updateEvent = async (eventId, updatedDetails) => {
  try {
    const response = await axios.put(`${BASE_URL}/events/${eventId}`, updatedDetails);
    return response.data; // Retourne l'événement mis à jour
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'événement:', error);
    throw error; // Lancer l'erreur pour gestion ultérieure
  }
};
