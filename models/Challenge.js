import React from 'react';

const Challenge = ({ name, goal, deadline, participants, progress }) => {
    const progressPercentage = Math.min(progress, 100);

    return (
        <div className="challenge">
            <h2>{name}</h2>
            <p><strong>Objectif:</strong> {goal}</p>
            <p><strong>Date limite:</strong> {new Date(deadline).toLocaleDateString()}</p>
            <p><strong>Participants:</strong> {participants.length}</p>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progressPercentage}%` }}>
                    {progressPercentage}%
                </div>
            </div>
        </div>
    );
};

export default Challenge;
