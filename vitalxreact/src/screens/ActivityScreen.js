import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  ImageBackground, 
  TextInput, 
  FlatList, 
  Alert 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActivityScreen = () => {
  const navigation = useNavigation();

  // État pour la liste des activités
  const [activities, setActivities] = useState([
    { id: 1, title: 'Course du matin', time: '6:30 AM', duration: '45 min' },
    { id: 2, title: 'Séance de musculation', time: '9:00 AM', duration: '1h' },
    { id: 3, title: 'Yoga et méditation', time: '12:00 PM', duration: '30 min' },
    { id: 4, title: 'Cyclisme en extérieur', time: '5:00 PM', duration: '1h 15 min' },
  ]);

  // États pour les champs du formulaire
  const [newActivity, setNewActivity] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newDuration, setNewDuration] = useState('');

  // Fonction pour ajouter une activité
  const addActivity = () => {
    if (!newActivity || !newTime || !newDuration) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs avant d\'ajouter une activité.');
      return;
    }

    setActivities([...activities, {
      id: Date.now(), // Utilisation de Date.now pour un ID unique
      title: newActivity,
      time: newTime,
      duration: newDuration,
    }]);

    // Réinitialisation des champs
    setNewActivity('');
    setNewTime('');
    setNewDuration('');
  };

  // Fonction pour supprimer une activité
  const deleteActivity = (id) => {
    Alert.alert(
      'Confirmer la suppression',
      'Êtes-vous sûr de vouloir supprimer cette activité ?',
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Supprimer', style: 'destructive', onPress: () => {
          setActivities(activities.filter(activity => activity.id !== id));
        }},
      ]
    );
  };

  return (
    <ImageBackground source={require('../assets/background-image.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Activités récentes</Text>

        {/* Liste des activités */}
        <FlatList
          data={activities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.activityItem} 
              onLongPress={() => deleteActivity(item.id)} // Suppression sur appui long
              accessible={true}
              accessibilityLabel={`Appuyez longuement pour supprimer l'activité ${item.title}`}
            >
              <Text style={styles.activityTitle}>{item.title}</Text>
              <Text style={styles.activityDetails}>{item.time} | {item.duration}</Text>
            </TouchableOpacity>
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
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={addActivity}
            accessible={true}
            accessibilityLabel="Ajouter une nouvelle activité"
          >
            <Text style={styles.addButtonText}>Ajouter</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Notifications')}
            accessible={true}
            accessibilityLabel="Aller aux notifications"
          >
            <Icon name="bell" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Search')}
            accessible={true}
            accessibilityLabel="Aller à la recherche"
          >
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
  activityItem: { 
    backgroundColor: '#333', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10 
  },
  activityTitle: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
  activityDetails: { fontSize: 14, color: '#ddd' },
  inputContainer: { marginTop: 20 },
  input: { 
    backgroundColor: '#555', 
    padding: 10, 
    borderRadius: 5, 
    color: '#fff', 
    marginBottom: 10 
  },
  addButton: { 
    backgroundColor: '#1DB954', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center' 
  },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  iconsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 20 
  },
  iconButton: { 
    backgroundColor: '#333', 
    padding: 15, 
    borderRadius: 50, 
    alignItems: 'center' 
  },
});

export default ActivityScreen;
