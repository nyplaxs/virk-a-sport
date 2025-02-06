// src/screens/WorkoutScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Nécessite d'installer 'react-native-calendars'
import { Dimensions } from 'react-native';

// Largeur de l'écran pour une meilleure adaptation des graphiques
const screenWidth = Dimensions.get('window').width;

const WorkoutScreen = () => {
  const [loading, setLoading] = useState(false);

  // Données fictives pour les séances d'entraînement
  const workouts = [
    { id: 1, name: 'Entraînement Cardio', time: '08:00 AM', description: 'Séance de course intense pour brûler des calories.' },
    { id: 2, name: 'Entraînement Musculation', time: '10:00 AM', description: 'Séance de musculation axée sur le haut du corps.' },
    { id: 3, name: 'Yoga', time: '12:00 PM', description: 'Séance de yoga pour améliorer la flexibilité et la concentration.' },
    { id: 4, name: 'HIIT', time: '04:00 PM', description: 'Entraînement par intervalles à haute intensité pour brûler des graisses.' },
  ];

  const [selectedDay, setSelectedDay] = useState('');

  // Simuler un chargement de l'écran
  const loadWorkoutData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  React.useEffect(() => {
    loadWorkoutData();
  }, []);

  const handleDayPress = (day) => {
    setSelectedDay(day.dateString);
  };

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View style={styles.workoutContainer}>
          <Text style={styles.title}>Séances d'Entraînement</Text>

          {/* Calendrier des séances */}
          <View style={styles.calendarContainer}>
            <Text style={styles.calendarTitle}>Séances Programmées</Text>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{
                [selectedDay]: { selected: true, selectedColor: '#ff6347' },
              }}
              monthFormat={'yyyy MM'}
              theme={{
                selectedDayBackgroundColor: '#ff6347',
                todayTextColor: '#ff6347',
                arrowColor: '#ff6347',
                textDayFontFamily: 'sans-serif',
                textMonthFontFamily: 'sans-serif',
              }}
            />
          </View>

          {/* Entraînements du jour */}
          {selectedDay ? (
            <View style={styles.workoutListContainer}>
              <Text style={styles.workoutTitle}>Séances du {selectedDay}</Text>
              {workouts.map((workout) => (
                <View key={workout.id} style={styles.workoutCard}>
                  <Text style={styles.workoutName}>{workout.name}</Text>
                  <Text style={styles.workoutTime}>{workout.time}</Text>
                  <Text style={styles.workoutDescription}>{workout.description}</Text>
                  <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Commencer</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.noSelectionText}>Sélectionnez un jour pour voir les entraînements programmés.</Text>
          )}

          {/* Image de fond */}
          <Image source={{ uri: 'https://via.placeholder.com/400x200' }} style={styles.backgroundImage} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  workoutContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  calendarContainer: {
    marginBottom: 30,
  },
  calendarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  workoutListContainer: {
    marginBottom: 30,
  },
  workoutTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  workoutCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  workoutName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  workoutTime: {
    color: '#aaa',
    fontSize: 14,
  },
  workoutDescription: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  startButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noSelectionText: {
    color: '#aaa',
    fontSize: 16,
    fontStyle: 'italic',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 30,
  },
});

export default WorkoutScreen;
