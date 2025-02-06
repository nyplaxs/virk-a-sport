// URLs de l'API
export const API_BASE_URL = 'http://localhost:5000/api';

// Endpoints pour l'API
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
  users: {
    getUser: (userId) => `/users/${userId}`,
    updateUser: (userId) => `/users/${userId}`,
    getUserSettings: (userId) => `/users/${userId}/settings`,
    updateUserSettings: (userId) => `/users/${userId}/settings`,
    getUserNotifications: (userId) => `/users/${userId}/notifications`,
  },
  posts: {
    createPost: '/posts',
    getPosts: (userId) => `/users/${userId}/posts`,
    deletePost: (postId) => `/posts/${postId}`,
  },
  messages: {
    sendMessage: '/messages',
    getMessages: (userId, friendId) => `/messages/${userId}/${friendId}`,
  },
  groups: {
    createGroup: '/groups',
    getGroups: '/groups',
    joinGroup: (groupId) => `/groups/${groupId}/join`,
    leaveGroup: (groupId) => `/groups/${groupId}/leave`,
  },
  reports: {
    createReport: '/reports',
    getReports: (userId) => `/users/${userId}/reports`,
  },
  search: {
    searchUsers: '/search/users',
    searchGroups: '/search/groups',
  },
  notifications: {
    getNotifications: (userId) => `/users/${userId}/notifications`,
    markAsRead: (notificationId) => `/notifications/${notificationId}/read`,
  },
};

// Clés de stockage local
export const STORAGE_KEYS = {
  userToken: 'user_token',
  userId: 'user_id',
};

// Messages d'erreur
export const ERROR_MESSAGES = {
  networkError: 'Une erreur réseau est survenue. Veuillez réessayer plus tard.',
  authError: 'Erreur d\'authentification. Veuillez vérifier vos informations.',
  userNotFound: 'Utilisateur non trouvé.',
  invalidCredentials: 'Identifiants invalides. Veuillez réessayer.',
};

// Paramètres par défaut
export const DEFAULT_SETTINGS = {
  theme: 'dark', // ou 'light'
  notificationsEnabled: true,
};

// Autres constantes
export const APP_NAME = 'VitalX';
export const APP_VERSION = '1.0.0';
