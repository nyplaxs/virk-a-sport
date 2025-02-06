import { useState } from 'react';

/**
 * Hook pour la gestion des formulaires avec validation
 * @param {Object} initialState - Valeurs initiales du formulaire
 * @returns {Object} Valeurs et gestion des changements de formulaire
 */
const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  /**
   * Gère les changements dans les champs du formulaire
   * @param {Event} e - L'événement de changement
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { values, handleChange };
};

export default useForm;
