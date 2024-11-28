// eventService.js

import axios from 'axios';

// URL de base pour l'API (à ajuster selon votre configuration)
const API_URL = 'https://api.vitalx.com'; // Remplacez par l'URL de votre API

// Crée une instance axios avec des configurations par défaut
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour gérer les erreurs des requêtes API
const handleError = (error) => {
  if (error.response) {
    console.error('Réponse d\'erreur:', error.response);
    throw new Error(error.response.data.message || 'Une erreur est survenue');
  } else if (error.request) {
    console.error('Erreur de requête:', error.request);
    throw new Error('Erreur de réseau ou serveur non disponible');
  } else {
    console.error('Erreur inconnue:', error.message);
    throw new Error('Une erreur inconnue est survenue');
  }
};

// Fonction pour créer un nouvel événement
export const createEvent = async (eventData) => {
  try {
    const response = await api.post('/events', eventData);
    return response.data; // Retourne les informations de l'événement créé
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour récupérer la liste de tous les événements
export const getEvents = async () => {
  try {
    const response = await api.get('/events');
    return response.data; // Retourne la liste des événements
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour récupérer un événement spécifique par son ID
export const getEventById = async (eventId) => {
  try {
    const response = await api.get(`/events/${eventId}`);
    return response.data; // Retourne les détails de l'événement
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour mettre à jour un événement existant
export const updateEvent = async (eventId, updatedData) => {
  try {
    const response = await api.put(`/events/${eventId}`, updatedData);
    return response.data; // Retourne les informations mises à jour de l'événement
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour supprimer un événement
export const deleteEvent = async (eventId) => {
  try {
    const response = await api.delete(`/events/${eventId}`);
    return response.data; // Retourne la réponse après la suppression
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour s'inscrire à un événement
export const joinEvent = async (eventId, userId) => {
  try {
    const response = await api.post(`/events/${eventId}/join`, { userId });
    return response.data; // Retourne les informations après l'inscription
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};

// Fonction pour récupérer les événements d'un utilisateur (ses participations)
export const getUserEvents = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/events`);
    return response.data; // Retourne les événements auxquels l'utilisateur participe
  } catch (error) {
    handleError(error);  // Gère les erreurs
  }
};
