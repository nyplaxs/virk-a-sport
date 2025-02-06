// src/screens/FeedScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FeedScreen = () => {
  const navigation = useNavigation();

  // Exemple de publications (à remplacer par des données dynamiques)
  const posts = [
    { id: 1, user: 'JohnDoe', text: 'Super journée, je viens de finir une course matinale ! #fitness #motivation', image: 'https://via.placeholder.com/400' },
    { id: 2, user: 'JaneDoe', text: 'Yoga et méditation pour commencer la journée. Namaste 🙏', image: 'https://via.placeholder.com/400' },
    { id: 3, user: 'User123', text: 'Nouvelle séance de muscu, je progresse chaque jour 💪', image: 'https://via.placeholder.com/400' },
  ];

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    // Logique pour publier un nouveau message (tu peux ajouter des appels API ici)
    console.log('Nouveau post: ', newPost);
    setNewPost('');
  };

  return (
    <View style={styles.container}>
      {/* Zone de texte pour poster un nouveau message */}
      <View style={styles.newPostContainer}>
        <TextInput
          style={styles.input}
          placeholder="Quoi de neuf ?"
          placeholderTextColor="#aaa"
          value={newPost}
          onChangeText={setNewPost}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handlePostSubmit}>
          <Text style={styles.buttonText}>Publier</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des publications */}
      <ScrollView contentContainerStyle={styles.postsList}>
        {posts.map(post => (
          <View key={post.id} style={styles.postContainer}>
            <Text style={styles.username}>{post.user}</Text>
            <Text style={styles.postText}>{post.text}</Text>
            {post.image && <Image source={{ uri: post.image }} style={styles.postImage} />}
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Icon name="thumb-up-outline" size={20} color="#fff" />
                <Text style={styles.actionText}>J'aime</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Icon name="comment-outline" size={20} color="#fff" />
                <Text style={styles.actionText}>Commenter</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Icônes de navigation */}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  newPostContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postsList: {
    marginBottom: 20,
  },
  postContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postText: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    marginLeft: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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

export default FeedScreen;
