import axios from 'axios';

/**
 * Service pour la gestion des utilisateurs
 */
const userService = {
  /**
   * Récupère le profil d'un utilisateur
   * @param {number} userId - ID de l'utilisateur
   * @returns {Promise} Réponse de l'API contenant les données du profil utilisateur
   */
  getUserProfile: (userId) => {
    return axios
      .get(`/api/users/${userId}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Erreur lors de la récupération du profil utilisateur :", error);
        throw error;
      });
  },

  /**
   * Met à jour le profil d'un utilisateur
   * @param {number} userId - ID de l'utilisateur
   * @param {Object} data - Données à mettre à jour (ex. nom, email, etc.)
   * @returns {Promise} Réponse de l'API après mise à jour
   */
  updateUserProfile: (userId, data) => {
    return axios
      .put(`/api/users/${userId}`, data)
      .then(response => response.data)
      .catch(error => {
        console.error("Erreur lors de la mise à jour du profil utilisateur :", error);
        throw error;
      });
  },

  /**
   * Supprime un utilisateur
   * @param {number} userId - ID de l'utilisateur
   * @returns {Promise} Réponse de l'API après suppression
   */
  deleteUser: (userId) => {
    return axios
      .delete(`/api/users/${userId}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Erreur lors de la suppression de l'utilisateur :", error);
        throw error;
      });
  },

  /**
   * Récupère la liste de tous les utilisateurs
   * @returns {Promise} Réponse de l'API contenant la liste des utilisateurs
   */
  getAllUsers: () => {
    return axios
      .get('/api/users')
      .then(response => response.data)
      .catch(error => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        throw error;
      });
  },

  /**
   * Recherche des utilisateurs par leur nom ou critère
   * @param {string} searchTerm - Terme de recherche (nom, email, etc.)
   * @returns {Promise} Réponse de l'API contenant la liste des utilisateurs correspondants
   */
  searchUsers: (searchTerm) => {
    return axios
      .get(`/api/users/search?query=${searchTerm}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Erreur lors de la recherche d'utilisateurs :", error);
        throw error;
      });
  },
};

export default userService;
