import axios from 'axios';

/**
 * Service pour l'authentification de l'utilisateur
 */
const authService = {
  /**
   * Connecte un utilisateur
   * @param {string} email - Email de l'utilisateur
   * @param {string} password - Mot de passe de l'utilisateur
   * @returns {Promise} Réponse de l'API
   */
  login: (email, password) => axios.post('/api/auth/login', { email, password }),

  /**
   * Inscrit un nouvel utilisateur
   * @param {string} email - Email de l'utilisateur
   * @param {string} password - Mot de passe de l'utilisateur
   * @returns {Promise} Réponse de l'API
   */
  register: (email, password) => axios.post('/api/auth/register', { email, password }),

  /**
   * Déconnecte un utilisateur
   * @returns {Promise} Réponse de l'API
   */
  logout: () => axios.post('/api/auth/logout'),
};

export default authService;
