import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../assets/background-image.jpg')} // Assure-toi que l'image existe dans le bon dossier
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Titre principal */}
        <Text style={styles.title}>Bienvenue sur VitalX</Text>

        {/* Description */}
        <Text style={styles.subtitle}>Votre espace pour partager, découvrir et rester actif.</Text>

        {/* Boutons d'actions */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Feed')}
          >
            <Text style={styles.buttonText}>Voir le fil d'actualités</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreatePost')}
          >
            <Text style={styles.buttonText}>Créer un post</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.buttonText}>Voir votre profil</Text>
          </TouchableOpacity>
        </View>

        {/* Icônes supplémentaires */}
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
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ff6f00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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

export default HomeScreen;
