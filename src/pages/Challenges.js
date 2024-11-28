import React, { useState, useEffect } from 'react';

const Challenges = ({ challenges }) => {
  const [joinedChallenges, setJoinedChallenges] = useState([]);

  // Fonction pour rejoindre un défi
  const joinChallenge = (challengeId) => {
    setJoinedChallenges((prev) => [...prev, challengeId]);
  };

  // Fonction pour quitter un défi
  const leaveChallenge = (challengeId) => {
    setJoinedChallenges((prev) => prev.filter((id) => id !== challengeId));
  };

  return (
    <div className="challenges-list">
      <h3>Défis disponibles</h3>
      {challenges.length === 0 ? (
        <p>Aucun défi disponible pour le moment.</p>
      ) : (
        <ul className="challenge-items">
          {challenges.map((challenge) => (
            <li key={challenge.id} className="challenge-item">
              <div className="challenge-info">
                <h4>{challenge.title}</h4>
                <p>{challenge.description}</p>
                <p className="challenge-reward">Récompense: {challenge.reward}</p>
              </div>
              <div className="challenge-actions">
                {joinedChallenges.includes(challenge.id) ? (
                  <button
                    onClick={() => leaveChallenge(challenge.id)}
                    className="btn-leave"
                  >
                    Quitter le défi
                  </button>
                ) : (
                  <button
                    onClick={() => joinChallenge(challenge.id)}
                    className="btn-join"
                  >
                    Rejoindre le défi
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Challenges;
