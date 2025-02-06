import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Suppose qu'il y a un fichier CSS

/**
 * Composant Button réutilisable
 * @param {string} label - Le texte à afficher sur le bouton
 * @param {function} onClick - Fonction à exécuter au clic
 * @param {string} className - Classes CSS supplémentaires à appliquer
 * @returns {JSX.Element}
 */
const Button = ({ label, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
