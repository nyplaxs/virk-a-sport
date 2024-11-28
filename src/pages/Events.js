import React, { useState } from 'react';
import './Events.css'; // Assurez-vous d'avoir créé et lié un fichier CSS

const Events = ({ events }) => {
  const [attendedEvents, setAttendedEvents] = useState([]);

  const attendEvent = (eventId) => {
    setAttendedEvents((prev) => [...prev, eventId]);
  };

  const leaveEvent = (eventId) => {
    setAttendedEvents((prev) => prev.filter((id) => id !== eventId));
  };

  return (
    <div className="events-list">
      <h3>Événements à venir</h3>
      {events.length === 0 ? (
        <p>Aucun événement disponible pour le moment.</p>
      ) : (
        <ul className="event-items">
          {events.map((event) => (
            <li key={event.id} className="event-item">
              <div className="event-info">
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <p className="event-date">Date: {event.date}</p>
                <p className="event-location">Lieu: {event.location}</p>
              </div>
              <div className="event-actions">
                {attendedEvents.includes(event.id) ? (
                  <button
                    onClick={() => leaveEvent(event.id)}
                    className="btn-leave"
                  >
                    Quitter l'événement
                  </button>
                ) : (
                  <button
                    onClick={() => attendEvent(event.id)}
                    className="btn-attend"
                  >
                    Assister à l'événement
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

export default Events;
