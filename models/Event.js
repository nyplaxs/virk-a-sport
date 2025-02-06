import React from 'react';

const Event = ({ title, location, date, description, attendees, onJoin }) => {
    return (
        <div className="event">
            <h2>{title}</h2>
            <p><strong>Lieu :</strong> {location}</p>
            <p><strong>Date :</strong> {new Date(date).toLocaleString()}</p>
            <p>{description}</p>
            <p><strong>Participants :</strong> {attendees.length}</p>
            <button onClick={onJoin}>Rejoindre l'événement</button>
        </div>
    );
};

export default Event;
