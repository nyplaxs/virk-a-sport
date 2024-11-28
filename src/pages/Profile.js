import React, { useState, useEffect } from 'react';
import './Profile.css'; // Assurez-vous d'ajouter un fichier CSS pour le style

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    profilePicture: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ name: '', email: '' });

  // Simulation de la récupération des données de l'utilisateur (remplacer avec une API)
  useEffect(() => {
    // Remplacer par un appel à une API ou à une base de données pour récupérer les informations
    setUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      profilePicture: 'https://example.com/profile.jpg' // Lien vers l'image du profil
    });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    setUpdatedUser({ name: user.name, email: user.email });
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setUser(updatedUser);

    // Vous pouvez ajouter ici un appel à une API pour sauvegarder les modifications dans la base de données
    console.log('Profil mis à jour:', updatedUser);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedUser({ name: user.name, email: user.email });
  };

  return (
    <div className="profile-container">
      <h2>Profil de {user.name}</h2>
      <div className="profile-details">
        <div className="profile-picture">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="profile-img"
          />
        </div>
        <div className="profile-info">
          {isEditing ? (
            <>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  value={updatedUser.name}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={updatedUser.email}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
                />
              </div>
              <div className="button-group">
                <button className="save-btn" onClick={handleSaveClick}>
                  Sauvegarder
                </button>
                <button className="cancel-btn" onClick={handleCancelClick}>
                  Annuler
                </button>
              </div>
            </>
          ) : (
            <>
              <p><strong>Nom:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button className="edit-btn" onClick={handleEditClick}>
                Modifier
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
