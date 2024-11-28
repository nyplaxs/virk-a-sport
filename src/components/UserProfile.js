import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    username: user.username,
    bio: user.bio,
    avatar: user.avatar,
  });

  // Fonction pour gérer les changements dans les champs de saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fonction pour gérer le changement d'image de profil
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedUser((prevState) => ({
        ...prevState,
        avatar: URL.createObjectURL(file),
      }));
    }
  };

  // Fonction pour activer ou désactiver le mode édition
  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  // Fonction pour sauvegarder les modifications
  const handleSave = () => {
    // Ici, vous pouvez appeler une fonction pour sauvegarder les modifications (API, etc.)
    console.log('User updated:', updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <h2>Profil de {user.username}</h2>
      <div className="user-profile-avatar">
        <img src={updatedUser.avatar} alt="Avatar" />
        {isEditing && (
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        )}
      </div>
      <div className="user-profile-info">
        <div>
          <strong>Nom d'utilisateur:</strong>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={updatedUser.username}
              onChange={handleChange}
            />
          ) : (
            <span>{updatedUser.username}</span>
          )}
        </div>
        <div>
          <strong>Bio:</strong>
          {isEditing ? (
            <textarea
              name="bio"
              value={updatedUser.bio}
              onChange={handleChange}
            />
          ) : (
            <p>{updatedUser.bio}</p>
          )}
        </div>
      </div>
      <div className="user-profile-actions">
        <button onClick={toggleEdit}>
          {isEditing ? 'Annuler' : 'Modifier'}
        </button>
        {isEditing && (
          <button onClick={handleSave}>
            Sauvegarder
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
