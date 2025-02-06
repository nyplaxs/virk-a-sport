import { useState, useCallback } from 'react';
import authService from '../services/authService';

/**
 * Hook de gestion de l'authentification utilisateur
 * @returns {Object} Fonctions et états d'authentification
 */
const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    try {
      await authService.login(email, password);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    authService.logout();
  }, []);

  return { login, logout, loading, error };
};

export default useAuth;
