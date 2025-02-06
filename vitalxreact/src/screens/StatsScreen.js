// src/screens/StatsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Nécessite d'installer 'react-native-chart-kit' et 'react-native-svg'
import { Dimensions } from 'react-native';

// Largeur de l'écran pour les graphiques
const screenWidth = Dimensions.get('window').width;

const StatsScreen = () => {
  const [loading, setLoading] = useState(false);

  // Données fictives pour illustrer des statistiques
  const workoutData = [50, 75, 60, 80, 95, 110, 130, 140, 160, 180];
  const challengeCompletion = [1, 2, 5, 6, 9, 12, 15, 20, 25, 30];

  const userStats = {
    totalWorkouts: 180,
    totalChallenges: 45,
    totalFollowers: 2000,
    totalPosts: 120,
    challengesCompleted: 35,
  };

  // Simuler un chargement des statistiques
  const loadStats = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Appeler la fonction de chargement lorsque le composant se monte
  React.useEffect(() => {
    loadStats();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View style={styles.statsContainer}>
          <Text style={styles.title}>Statistiques Personnelles</Text>
          
          {/* Section des statistiques globales */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{userStats.totalWorkouts}</Text>
              <Text style={styles.statLabel}>Séances</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{userStats.totalChallenges}</Text>
              <Text style={styles.statLabel}>Défis</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{userStats.totalFollowers}</Text>
              <Text style={styles.statLabel}>Abonnés</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{userStats.totalPosts}</Text>
              <Text style={styles.statLabel}>Publications</Text>
            </View>
          </View>

          {/* Graphique des séances de sport */}
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Progression des Séances</Text>
            <LineChart
              data={{
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct'],
                datasets: [
                  {
                    data: workoutData,
                  },
                ],
              }}
              width={screenWidth - 40}
              height={220}
              chartConfig={{
                backgroundColor: '#121212',
                backgroundGradientFrom: '#121212',
                backgroundGradientTo: '#121212',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={styles.chart}
            />
          </View>

          {/* Graphique des défis terminés */}
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Défis Complétés</Text>
            <LineChart
              data={{
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct'],
                datasets: [
                  {
                    data: challengeCompletion,
                  },
                ],
              }}
              width={screenWidth - 40}
              height={220}
              chartConfig={{
                backgroundColor: '#121212',
                backgroundGradientFrom: '#121212',
                backgroundGradientTo: '#121212',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={styles.chart}
            />
          </View>

          {/* Section des suggestions et autres */}
          <View style={styles.suggestionsContainer}>
            <Text style={styles.suggestionsTitle}>Suggestions</Text>
            <TouchableOpacity style={styles.suggestionBox}>
              <Text style={styles.suggestionText}>Nouveau défi : Running 5K</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.suggestionBox}>
              <Text style={styles.suggestionText}>Essayez un entraînement avec haltères</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.suggestionBox}>
              <Text style={styles.suggestionText}>Rejoindre un groupe de fitness</Text>
            </TouchableOpacity>
          </View>

          {/* Image de fond et détails supplémentaires */}
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
  statsContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statBox: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    width: '22%',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#aaa',
    fontSize: 14,
  },
  chartContainer: {
    marginBottom: 30,
  },
  chartTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 16,
  },
  suggestionsContainer: {
    marginBottom: 30,
  },
  suggestionsTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  suggestionBox: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  suggestionText: {
    color: '#fff',
    fontSize: 16,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 30,
  },
});

export default StatsScreen;
