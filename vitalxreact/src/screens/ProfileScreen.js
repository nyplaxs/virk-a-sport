import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [user, setUser] = useState({
    _id: null,
    name: '',
    email: '',
    bio: '',
    avatar: null,
  });
  const [editedName, setEditedName] = useState('');
  const [editedBio, setEditedBio] = useState('');
  const [image, setImage] = useState(null);

  // Charger les données utilisateur depuis l'API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3000/profile'); // API locale
        const data = await response.json();
        setUser(data);
        setEditedName(data.name);
        setEditedBio(data.bio);
        setImage(data.avatar);
      } catch (error) {
        Alert.alert('Erreur', 'Impossible de charger les données utilisateur.');
      }
    };

    fetchUserData();
  }, []);

  // Gérer la modification du profil
  const saveProfileChanges = async () => {
    if (!editedName || !editedBio) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/updateProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: editedName,
          bio: editedBio,
          avatar: image,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setUser({
          ...user,
          name: editedName,
          bio: editedBio,
          avatar: image,
        });
        Alert.alert('Succès', 'Profil mis à jour avec succès.');
      } else {
        Alert.alert('Erreur', 'Une erreur est survenue lors de la mise à jour du profil.');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Problème de connexion. Veuillez réessayer.');
    }
  };

  // Gérer l'ajout d'une image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier votre profil</Text>
      <View style={styles.avatarContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.avatar} />
        ) : (
          <Text>Pas de photo de profil</Text>
        )}
        <Button title="Changer la photo" onPress={pickImage} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={editedName}
        onChangeText={setEditedName}
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={editedBio}
        onChangeText={setEditedBio}
      />
      <Button title="Enregistrer les modifications" onPress={saveProfileChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default ProfileScreen;
