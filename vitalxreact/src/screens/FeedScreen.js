import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const API_URL = 'https://example.com/api/posts'; // Remplace par ton API

const FeedScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError('Impossible de récupérer les posts');
    } finally {
      setLoading(false);
    }
  };

  const handlePostSubmit = async () => {
    if (!newPost.trim()) return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: 'Noa', text: newPost })
      });
      const newPostData = await response.json();
      setPosts([newPostData, ...posts]);
      setNewPost('');
    } catch (err) {
      Alert.alert('Erreur', 'Impossible de publier le post');
    }
  };

  return (
    <View style={styles.container}>
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

      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
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
      )}

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
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  newPostContainer: { backgroundColor: '#333', borderRadius: 10, padding: 10, marginBottom: 20 },
  input: { backgroundColor: '#222', color: '#fff', padding: 10, borderRadius: 10, fontSize: 16 },
  button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  postsList: { marginBottom: 20 },
  postContainer: { backgroundColor: '#333', borderRadius: 10, marginBottom: 20, padding: 15 },
  username: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginBottom: 5 },
  postText: { color: '#ddd', fontSize: 14, marginBottom: 10 },
  postImage: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  postActions: { flexDirection: 'row', justifyContent: 'space-between' },
  actionButton: { flexDirection: 'row', alignItems: 'center' },
  actionText: { color: '#fff', marginLeft: 5 },
  errorText: { color: 'red', textAlign: 'center', marginBottom: 10 },
  iconsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  iconButton: { backgroundColor: '#333', padding: 15, borderRadius: 50, alignItems: 'center', justifyContent: 'center' },
});

export default FeedScreen;

