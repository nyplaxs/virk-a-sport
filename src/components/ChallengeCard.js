import React from 'react';

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="challenge-card">
      <h3>{challenge.name}</h3>
      <p>{challenge.description}</p>
      <p><strong>Start Date:</strong> {new Date(challenge.startDate).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(challenge.endDate).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {challenge.location}</p>
      <button className="join-button">Join Challenge</button>
    </div>
  );
};

export default ChallengeCard;
