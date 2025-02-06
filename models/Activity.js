import React from 'react';

const Activity = ({ title, description, date, onJoin, isJoined }) => {
    return (
        <div className={`activity ${isJoined ? 'joined' : ''}`}>
            <h2>{title}</h2>
            <p>{description}</p>
            <small>{new Date(date).toLocaleDateString()}</small>
            <button onClick={onJoin}>
                {isJoined ? 'Quitter l\'activité' : 'Rejoindre l\'activité'}
            </button>
        </div>
    );
};

export default Activity;
