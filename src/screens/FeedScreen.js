import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeedScreen = () => {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  // Exemple de récupération des données depuis une API ou une base de données
  useEffect(() => {
    // Remplacer avec une logique réelle pour récupérer les publications
    const fetchedPosts = [
      { id: '1', username: 'user1', content: 'Première publication!', image: 'https://placeimg.com/640/480/tech' },
      { id: '2', username: 'user2', content: 'Deuxième publication!', image: 'https://placeimg.com/640/480/nature' },
      // Ajouter d'autres publications ici
    ];
    setPosts(fetchedPosts);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.username}>{item.username}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.content}>{item.content}</Text>
      <Button title="Voir plus" onPress={() => navigation.navigate('PostDetails', { postId: item.id })} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fil d'actualités</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  postContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default FeedScreen;
