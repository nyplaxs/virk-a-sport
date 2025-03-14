import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { uuidv4 } from '@firebase/util';

const CreatePostScreen = () => {
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Gestion de la sélection d'image
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission refusée', 'Vous devez autoriser l’accès à la galerie.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  // Fonction pour uploader l'image sur Firebase Storage
  const uploadImageToFirebase = async (imageUri) => {
    try {
      setUploading(true);
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const fileName = `images/${uuidv4()}.jpg`; // Générer un ID unique
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, blob);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload progress: ${progress.toFixed(2)}%`);
          },
          (error) => {
            console.error('Erreur lors du téléchargement :', error);
            setUploading(false);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setUploading(false);
            resolve(downloadURL);
          }
        );
      });
    } catch (error) {
      console.error('Erreur lors de l\'upload :', error);
      setUploading(false);
      throw error;
    }
  };

  // Gestion de la publication
  const handlePost = async () => {
    if (!postContent.trim() && !selectedImage) {
      Alert.alert('Erreur', 'Veuillez ajouter un contenu ou une image.');
      return;
    }

    try {
      let imageUrl = null;
      if (selectedImage) {
        imageUrl = await uploadImageToFirebase(selectedImage);
      }

      await addDoc(collection(db, 'posts'), {
        content: postContent,
        imageUrl: imageUrl,
        createdAt: new Date().toISOString(),
      });

      Alert.alert('Succès', 'Votre publication a été créée !');
      setPostContent('');
      setSelectedImage(null);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du post :', error);
      Alert.alert('Erreur', 'Impossible de publier.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créer une publication</Text>

      {/* Champ de texte */}
      <TextInput
        style={styles.input}
        placeholder="Exprimez-vous..."
        placeholderTextColor="#aaa"
        multiline
        value={postContent}
        onChangeText={setPostContent}
      />

      {/* Bouton pour ajouter une image */}
      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>
          {selectedImage ? 'Changer l’image' : 'Ajouter une image'}
        </Text>
      </TouchableOpacity>

      {/* Prévisualisation de l'image */}
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.previewImage} />
      )}

      {/* Bouton de publication */}
      <TouchableOpacity
        style={[styles.postButton, uploading && { backgroundColor: '#888' }]}
        onPress={handlePost}
        disabled={uploading}
      >
        <Text style={styles.postButtonText}>
          {uploading ? 'Publication en cours...' : 'Publier'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    minHeight: 100,
    marginBottom: 20,
  },
  imageButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  postButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreatePostScreen;

