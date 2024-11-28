import React from 'react';

const Activity = ({ activities }) => {
  return (
    <div className="activity-feed">
      <h3>Activités récentes</h3>
      <ul className="activity-list">
        {activities.length === 0 ? (
          <li>Aucune activité récente</li>
        ) : (
          activities.map((activity, index) => (
            <li key={index} className="activity-item">
              <div className="activity-content">
                <span className="activity-time">{activity.time}</span>
                <p>{activity.description}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Activity;
