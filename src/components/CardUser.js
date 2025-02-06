import React from 'react';
import PropTypes from 'prop-types';

/**
 * Composant pour afficher un utilisateur sous forme de carte
 * @param {Object} user - Les informations de l'utilisateur
 * @returns {JSX.Element}
 */
const CardUser = ({ user }) => {
  return (
    <div className="card-user">
      <img src={user.profilePicture} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </div>
  );
};

CardUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profilePicture: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardUser;
