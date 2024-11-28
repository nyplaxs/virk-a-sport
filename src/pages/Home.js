import React, { useState, useEffect } from 'react';
import './Home.css'; // Assurez-vous de créer un fichier CSS associé

import Events from './Events'; // Importation du composant des événements
import ActivityFeed from './ActivityFeed'; // Importation du composant du fil d'activité
import ChallengeCard from './ChallengeCard'; // Importation du composant des défis

const Home = () => {
  const [events, setEvents] = useState([]);
  const [challenges, setChallenges] = useState([]);

  // Simuler le chargement des données
  useEffect(() => {
    // Remplacez ces données par celles récupérées depuis une API ou une base de données
    const fetchedEvents = [
      { id: 1, title: 'Concours de tir', description: 'Un concours amical de tir à l\'airsoft.', date: '2024-12-10', location: 'Paris' },
      { id: 2, title: 'Randonnée nocturne', description: 'Une randonnée en pleine nature.', date: '2024-12-15', location: 'Montagne' },
    ];
    const fetchedChallenges = [
      { id: 1, title: 'Défi de vitesse', description: 'Complétez ce défi en moins de 30 minutes !' },
      { id: 2, title: 'Défi de résistance', description: 'Réalisez ce défi avec les autres membres du groupe.' },
    ];

    setEvents(fetchedEvents);
    setChallenges(fetchedChallenges);
  }, []);

  return (
    <div className="home-container">
      <h1>Bienvenue sur VitalX !</h1>
      <div className="home-sections">
        <section className="events-section">
          <h2>Événements à venir</h2>
          <Events events={events} />
        </section>

        <section className="activity-feed-section">
          <h2>Fil d'activité</h2>
          <ActivityFeed />
        </section>

        <section className="challenges-section">
          <h2>Défis communautaires</h2>
          {challenges.length === 0 ? (
            <p>Aucun défi en cours pour le moment.</p>
          ) : (
            challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
