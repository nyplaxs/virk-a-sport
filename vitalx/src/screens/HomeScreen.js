import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Exemple de données pour afficher un flux
  const posts = [
    { id: '1', imageUrl: 'https://via.placeholder.com/150', text: 'Post 1' },
    { id: '2', imageUrl: 'https://via.placeholder.com/150', text: 'Post 2' },
    { id: '3', imageUrl: 'https://via.placeholder.com/150', text: 'Post 3' },
    // Ajoute plus de posts selon tes besoins
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fil d'actualités</Text>

      {/* Liste des publications */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
            <Text style={styles.postText}>{item.text}</Text>
          </View>
        )}
      />

      {/* Bouton de navigation vers le profil */}
      <Button
        title="Voir mon profil"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  postText: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
