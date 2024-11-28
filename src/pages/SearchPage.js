import React, { useState } from 'react';
import './SearchPage.css'; // Ajoutez un fichier CSS pour styliser la page de recherche

const SearchPage = () => {
  const [query, setQuery] = useState(''); // L'état de la requête de recherche
  const [results, setResults] = useState([]); // L'état des résultats de recherche
  const [loading, setLoading] = useState(false); // État pour afficher le chargement
  const [error, setError] = useState(''); // Gestion des erreurs

  // Exemple de données statiques pour les utilisateurs, activités ou défis
  const allItems = [
    { id: 1, name: 'Utilisateur 1', type: 'user' },
    { id: 2, name: 'Défi de course', type: 'challenge' },
    { id: 3, name: 'Activité Yoga', type: 'activity' },
    { id: 4, name: 'Utilisateur 2', type: 'user' },
    { id: 5, name: 'Défi de natation', type: 'challenge' },
    // Ajoutez d'autres éléments ici
  ];

  // Fonction pour gérer la recherche
  const handleSearch = () => {
    if (query.trim() === '') {
      setError('Veuillez entrer un terme de recherche.');
      setResults([]);
      return;
    }

    setLoading(true);
    setError('');

    // Simuler une recherche avec un filtrage des éléments en fonction de la requête
    setTimeout(() => {
      const filteredResults = allItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setLoading(false);
    }, 1000); // Simulation de délai de recherche
  };

  return (
    <div className="search-page-container">
      <h2>Page de Recherche</h2>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un utilisateur, un défi, une activité..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Recherche...' : 'Rechercher'}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="results-container">
        {loading && <p>Chargement des résultats...</p>}

        {results.length > 0 ? (
          <ul className="results-list">
            {results.map((result) => (
              <li key={result.id} className="result-item">
                {result.name} - {result.type}
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucun résultat trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
