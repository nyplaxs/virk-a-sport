import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ navigation }) => {
  const [username, setUsername] = useState('Noa');
  const [bio, setBio] = useState('Développeur VitalX');
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) setProfileImage(result.uri);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage || 'https://via.placeholder.com/150' }} style={styles.avatar} />
      <Button title="Changer la photo de profil" onPress={pickImage} />
      <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Nom d'utilisateur" />
      <TextInput style={styles.input} value={bio} onChangeText={setBio} placeholder="Bio" />
      <Button title="Enregistrer" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#121212' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  input: { width: '90%', padding: 10, marginVertical: 10, backgroundColor: '#333', color: 'white', borderRadius: 5 },
});

export default EditProfileScreen;
