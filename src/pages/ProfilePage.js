import React from 'react';
import Profile from './Profile'; // Assurez-vous d'importer le composant Profile
import './ProfilePage.css'; // Ajoutez un fichier CSS pour styliser la page

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <header className="profile-page-header">
        <h1>Mon Profil</h1>
      </header>
      <div className="profile-page-content">
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
