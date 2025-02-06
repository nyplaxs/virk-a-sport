// validate.js

/**
 * Valide si une chaîne est un email valide
 * @param {string} email - L'email à valider
 * @returns {boolean} True si l'email est valide, sinon false
 */
export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };
  
  /**
   * Valide si un mot de passe respecte certains critères de sécurité
   * (au moins 8 caractères, une lettre majuscule, une lettre minuscule, et un chiffre)
   * @param {string} password - Le mot de passe à valider
   * @returns {boolean} True si le mot de passe est valide, sinon false
   */
  export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };
  
  /**
   * Valide si un champ est vide
   * @param {string} input - Le champ à valider
   * @returns {boolean} True si le champ est vide, sinon false
   */
  export const isEmpty = (input) => {
    return input.trim() === '';
  };
  