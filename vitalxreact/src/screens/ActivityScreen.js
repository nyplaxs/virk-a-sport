// src/screens/ActivityScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActivityScreen = () => {
  const navigation = useNavigation();

  // Exemple d'activités (à remplacer par des données dynamiques)
  const activities = [
    { id: 1, title: 'Course du matin', time: '6:30 AM', duration: '45 min' },
    { id: 2, title: 'Séance de musculation', time: '9:00 AM', duration: '1h' },
    { id: 3, title: 'Yoga et méditation', time: '12:00 PM', duration: '30 min' },
    { id: 4, title: 'Cyclisme en extérieur', time: '5:00 PM', duration: '1h 15 min' },
  ];

  return (
    <ImageBackground 
      source={require('../assets/background-image.jpg')} // Ajouter une image d'arrière-plan
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Titre principal */}
        <Text style={styles.title}>Activités récentes</Text>

        {/* Liste des activités */}
        <ScrollView contentContainerStyle={styles.activityList}>
          {activities.map(activity => (
            <View key={activity.id} style={styles.activityItem}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityDetails}>
                {activity.time} | {activity.duration}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Icônes pour la navigation */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Icon name="bell" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Search')}
          >
            <Icon name="magnify" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(18, 18, 18, 0.7)', // Légère transparence sur l'arrière-plan
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  activityList: {
    width: '100%',
    paddingBottom: 20,
  },
  activityItem: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
    width: '100%',
  },
  activityTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  activityDetails: {
    fontSize: 14,
    color: '#ddd',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActivityScreen;
