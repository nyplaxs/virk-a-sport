import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';

/**
 * Page d'accueil de l'application
 * @returns {JSX.Element}
 */
const Home = () => {
  const { data, loading, error } = useFetch('/api/posts');
  
  return (
    <div>
      <Header />
      <h1>Welcome to VitalX</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* Afficher les posts */}
      <ul>
        {data && data.map(post => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
