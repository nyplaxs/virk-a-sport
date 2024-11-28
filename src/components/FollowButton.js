import React, { useState } from 'react';

const FollowButton = ({ userId, isFollowing, onFollowChange }) => {
  const [following, setFollowing] = useState(isFollowing);

  const handleFollowClick = () => {
    // Ici vous pouvez ajouter l'appel à une API pour suivre ou se désabonner
    setFollowing(!following);
    onFollowChange(userId, !following); // Notifier le parent du changement d'état
  };

  return (
    <button
      className={`follow-button ${following ? 'following' : ''}`}
      onClick={handleFollowClick}
    >
      {following ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
