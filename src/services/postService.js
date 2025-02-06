import axios from 'axios';

/**
 * Service pour la gestion des posts
 */
const postService = {
  /**
   * Récupère tous les posts
   * @returns {Promise} Réponse de l'API
   */
  getAllPosts: () => axios.get('/api/posts'),

  /**
   * Crée un nouveau post
   * @param {string} content - Contenu du post
   * @returns {Promise} Réponse de l'API
   */
  createPost: (content) => axios.post('/api/posts', { content }),
};

export default postService;
