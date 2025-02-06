import React from 'react';
import { ScrollView, Alert } from 'react-native';
import ChallengeCard from './ChallengeCard'; // Le chemin peut varier

const ChallengeListScreen = () => {
  const challenges = [
    {
      id: 1,
      name: 'Marathon de 5 km',
      description: 'Un défi sportif pour les amateurs de course à pied.',
      startDate: '2025-05-01',
      endDate: '2025-05-02',
      location: 'Paris, France',
    },
    {
      id: 2,
      name: 'Concours de vélo',
      description: 'Participez à ce concours de vélo dans votre région.',
      startDate: '2025-06-10',
      endDate: '2025-06-11',
      location: 'Lyon, France',
    },
  ];

  // Fonction pour gérer l'inscription
  const handleJoinChallenge = (challengeName) => {
    Alert.alert(`Inscription réussie au challenge ${challengeName}`);
  };

  return (
    <ScrollView>
      {challenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          challenge={challenge}
          onJoinChallenge={() => handleJoinChallenge(challenge.name)}
        />
      ))}
    </ScrollView>
  );
};

export default ChallengeListScreen;
