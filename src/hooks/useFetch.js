import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Hook personnalisé pour effectuer des requêtes API
 * @param {string} url - URL de la requête
 * @returns {Object} Données, chargement et erreurs
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
