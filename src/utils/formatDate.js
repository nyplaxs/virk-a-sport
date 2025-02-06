// formatDate.js
import { format } from 'date-fns';

/**
 * Formate une date en format 'dd/MM/yyyy'
 * @param {Date | string} date - Date à formater
 * @returns {string} La date formatée
 */
export const formatDate = (date) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

/**
 * Formate une date en format 'HH:mm:ss' (heure, minutes, secondes)
 * @param {Date | string} date - Date à formater
 * @returns {string} L'heure formatée
 */
export const formatTime = (date) => {
  return format(new Date(date), 'HH:mm:ss');
};

/**
 * Formate une date en format 'dd/MM/yyyy HH:mm'
 * @param {Date | string} date - Date à formater
 * @returns {string} La date et l'heure formatées
 */
export const formatDateTime = (date) => {
  return format(new Date(date), 'dd/MM/yyyy HH:mm');
};
