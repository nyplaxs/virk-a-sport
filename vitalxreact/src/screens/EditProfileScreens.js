import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { UserContext } from '../context/UserContext';
import styles from '../styles/globalStyles';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload';
const UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET';

const uploadImageToCloudinary = async (imageUri) => {
  const data = new FormData();
  data.append('file', { uri: imageUri, type: 'image/jpeg', name: 'upload.jpg' });
  data.append('upload_preset', UPLOAD_PRESET);

  try {
    let response = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: data,
    });
    let result = await response.json();
    return result.secure_url;
  } catch (error) {
    console.error('Erreur de téléversement Cloudinary:', error);
    return null;
  }
};

const EditProfileScreen = () => {
  const { user, updateProfile } = useContext(UserContext);
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [image, setImage] = useState(user?.avatar || '');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!name.trim() || !bio.trim()) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }
    setLoading(true);
    const imageUrl = image.startsWith('file://') ? await uploadImageToCloudinary(image) : image;
    if (!imageUrl) {
      setLoading(false);
      Alert.alert('Erreur', "Échec de l'upload de l'image.");
      return;
    }
    const success = await updateProfile({ name, bio, avatar: imageUrl });
    setLoading(false);
    Alert.alert(success ? 'Succès' : 'Erreur', success ? 'Profil mis à jour' : 'Échec de la mise à jour.');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) setImage(result.uri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier le profil</Text>
      {image ? <Image source={{ uri: image }} style={styles.avatar} /> : null}
      <Button title="Changer la photo" onPress={pickImage} />
      <TextInput style={styles.input} placeholder="Nom" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Bio" value={bio} onChangeText={setBio} />
      {loading ? <ActivityIndicator size="small" /> : <Button title="Enregistrer" onPress={handleSave} />}
    </View>
  );
};

export default EditProfileScreen;
