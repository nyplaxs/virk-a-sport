import React, { useState, useEffect } from 'react';
import { getActivities } from '../services/activityService';
import ActivityCard from '../components/ActivityCard';

const ActivityFeed = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        // Récupérer les activités depuis le service
        const data = await getActivities();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []); // Le tableau vide signifie que cette fonction sera exécutée au premier rendu du composant

  return (
    <div className="activity-feed">
      <h1>Activity Feed</h1>
      {loading ? (
        <p>Loading activities...</p>
      ) : activities.length === 0 ? (
        <p>No activities available.</p>
      ) : (
        <div className="activity-list">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityFeed;
