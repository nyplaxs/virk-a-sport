// constants.js

/**
 * URL de l'API
 */
export const API_URL = 'https://api.monsite.com';

/**
 * Codes de réponse API
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

/**
 * Messages d'erreur
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Il y a eu un problème de connexion.',
  UNAUTHORIZED: 'Vous n\'avez pas les droits pour accéder à cette ressource.',
  NOT_FOUND: 'Ressource non trouvée.',
  SERVER_ERROR: 'Une erreur interne est survenue.',
};

/**
 * Clés de stockage local
 */
export const LOCAL_STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_PROFILE: 'user_profile',
};
