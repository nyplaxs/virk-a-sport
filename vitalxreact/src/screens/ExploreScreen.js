import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const trends = [
  { id: '1', title: 'Challenge Fitness', image: require('../assets/fitness.jpg') },
  { id: '2', title: 'Street Art', image: require('../assets/streetart.jpg') },
  { id: '3', title: 'Gaming Esport', image: require('../assets/gaming.jpg') },
];

const ExploreScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={trends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('PostDetailsScreen', { topic: item.title })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  card: { marginBottom: 15, borderRadius: 10, overflow: 'hidden' },
  image: { width: '100%', height: 200 },
  title: { color: '#fff', fontSize: 18, textAlign: 'center', padding: 10 },
});

export default ExploreScreen;
