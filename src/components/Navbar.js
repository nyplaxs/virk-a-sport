import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation entre les pages
import { useAuth } from '../hooks/useAuth'; // Utilitaire d'authentification (facultatif)

const Navbar = () => {
  const { user, logout } = useAuth(); // Hook personnalisé pour obtenir les données de l'utilisateur et la fonction de déconnexion

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo ou titre de l'application */}
        <div className="navbar-logo">
          <Link to="/">VitalX</Link>
        </div>

        {/* Liens de navigation */}
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/challenges">Challenges</Link>
          </li>
          <li>
            <Link to="/activities">Activities</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to={`/profile/${user.id}`}>Profile</Link>
              </li>
              <li>
                <button onClick={logout} className="logout-btn">Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
