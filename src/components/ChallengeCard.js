import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ChallengeCard = ({ challenge, onJoinChallenge }) => {
  const startDate = new Date(challenge.startDate).toLocaleDateString();
  const endDate = new Date(challenge.endDate).toLocaleDateString();

  return (
    <View style={styles.card}>
      {/* Challenge Title */}
      <Text style={styles.title}>{challenge.name}</Text>

      {/* Challenge Description */}
      <Text style={styles.description}>{challenge.description}</Text>

      {/* Challenge Dates */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}><strong>Start Date:</strong> {startDate}</Text>
        <Text style={styles.dateText}><strong>End Date:</strong> {endDate}</Text>
      </View>

      {/* Challenge Location */}
      <Text style={styles.location}>
        <strong>Location:</strong> {challenge.location}
      </Text>

      {/* Button to join challenge */}
      <TouchableOpacity style={styles.joinButton} onPress={onJoinChallenge} accessibilityLabel="Join Challenge">
        <Text style={styles.joinButtonText}>Join Challenge</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the challenge card
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 22,
  },
  dateContainer: {
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  location: {
    fontSize: 14,
    color: '#444',
    marginBottom: 15,
  },
  joinButton: {
    backgroundColor: '#3b82f6', // Blue button color
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChallengeCard;
