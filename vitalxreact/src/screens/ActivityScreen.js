import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActivityScreen = () => {
  const navigation = useNavigation();
  const [activities, setActivities] = useState([
    { id: 1, title: 'Course du matin', time: '6:30 AM', duration: '45 min' },
    { id: 2, title: 'Séance de musculation', time: '9:00 AM', duration: '1h' },
    { id: 3, title: 'Yoga et méditation', time: '12:00 PM', duration: '30 min' },
    { id: 4, title: 'Cyclisme en extérieur', time: '5:00 PM', duration: '1h 15 min' },
  ]);
  
  const [newActivity, setNewActivity] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newDuration, setNewDuration] = useState('');

  const addActivity = () => {
    if (newActivity && newTime && newDuration) {
      setActivities([...activities, {
        id: activities.length + 1,
        title: newActivity,
        time: newTime,
        duration: newDuration
      }]);
      setNewActivity('');
      setNewTime('');
      setNewDuration('');
    }
  };

  return (
    <ImageBackground source={require('../assets/background-image.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Activités récentes</Text>

        <FlatList
          data={activities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              <Text style={styles.activityTitle}>{item.title}</Text>
              <Text style={styles.activityDetails}>{item.time} | {item.duration}</Text>
            </View>
          )}
        />

        {/* Formulaire d'ajout d'activité */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nom de l'activité"
            placeholderTextColor="#aaa"
            value={newActivity}
            onChangeText={setNewActivity}
          />
          <TextInput
            style={styles.input}
            placeholder="Heure"
            placeholderTextColor="#aaa"
            value={newTime}
            onChangeText={setNewTime}
          />
          <TextInput
            style={styles.input}
            placeholder="Durée"
            placeholderTextColor="#aaa"
            value={newDuration}
            onChangeText={setNewDuration}
          />
          <TouchableOpacity style={styles.addButton} onPress={addActivity}>
            <Text style={styles.addButtonText}>Ajouter</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Notifications')}>
            <Icon name="bell" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Search')}>
            <Icon name="magnify" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  container: { flex: 1, backgroundColor: 'rgba(18, 18, 18, 0.8)', padding: 20 },
  title: { fontSize: 28, color: '#fff', fontWeight: 'bold', marginBottom: 15 },
  activityItem: { backgroundColor: '#333', padding: 15, borderRadius: 10, marginBottom: 10 },
  activityTitle: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
  activityDetails: { fontSize: 14, color: '#ddd' },
  inputContainer: { marginTop: 20 },
  input: { backgroundColor: '#555', padding: 10, borderRadius: 5, color: '#fff', marginBottom: 10 },
  addButton: { backgroundColor: '#1DB954', padding: 10, borderRadius: 5, alignItems: 'center' },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  iconsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  iconButton: { backgroundColor: '#333', padding: 15, borderRadius: 50, alignItems: 'center' },
});

export default ActivityScreen;

