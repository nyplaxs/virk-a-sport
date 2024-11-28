import React, { useState, useEffect } from 'react';
import './Notification.css'; // Pour le style

const Notification = ({ message, type, onClose }) => {
  // Les types peuvent être 'success', 'error', 'info', 'warning'
  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
      <button className="close-btn" onClick={onClose}>X</button>
    </div>
  );
};

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulation de notification pour l'exemple (cela pourrait venir d'une API)
    setTimeout(() => {
      setNotifications(prevNotifications => [
        ...prevNotifications,
        { id: 1, message: 'New challenge available!', type: 'info' },
        { id: 2, message: 'You have a new follower!', type: 'success' },
      ]);
    }, 2000);
  }, []);

  const removeNotification = (id) => {
    setNotifications(prevNotifications => prevNotifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="notification-center">
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};

export default NotificationCenter;
