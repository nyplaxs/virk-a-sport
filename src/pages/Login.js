import React, { useState } from 'react';
import './Login.css'; // Assurez-vous d'ajouter un fichier CSS pour le style

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Remplacez cette logique par une authentification réelle (API ou service)
    console.log('Connexion avec:', email, password);
    
    // Effacer les erreurs si la connexion est réussie
    setError('');
    
    // Rediriger vers une autre page après la connexion (exemple: dashboard)
    // window.location.href = '/dashboard';
  };

  return (
    <div className="login-container">
      <h2>Connexion à VitalX</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
