import React, { useState } from 'react';
import './Register.css'; // Ajoutez un fichier CSS pour styliser la page d'inscription

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handler pour les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulation d'une requête d'inscription
    try {
      // Remplacez ceci par l'appel réel à votre API d'inscription
      if (formData.username && formData.email && formData.password) {
        console.log('User registered:', formData);
        alert('Inscription réussie!');
      } else {
        setError('Tous les champs sont requis.');
      }
    } catch (err) {
      setError('Une erreur s\'est produite lors de l\'inscription.');
    }

    setLoading(false);
  };

  return (
    <div className="register-container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Entrez votre nom d'utilisateur"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Chargement...' : 'S\'inscrire'}
        </button>
      </form>
    </div>
  );
};

export default Register;
