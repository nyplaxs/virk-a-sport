import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Composant Header pour la navigation principale
 * @returns {JSX.Element}
 */
const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  </header>
);

export default Header;
