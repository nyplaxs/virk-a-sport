import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const trends = [
  { id: '1', title: 'Challenge Fitness', image: require('../assets/fitness.jpg') },
  { id: '2', title: 'Street Art', image: require('../assets/streetart.jpg') },
  { id: '3', title: 'Gaming Esport', image: require('../assets/gaming.jpg') },
];

const ExploreScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const scaleValue = new Animated.Value(1);

    const handlePressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.95,
        useNativeDriver: true,
      }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('PostDetailsScreen', { topic: item.title });
      });
    };

    return (
      <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}> 
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={trends}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#1E1E1E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { color: '#fff', fontSize: 18, textAlign: 'center', padding: 10, fontWeight: 'bold' },
});

export default ExploreScreen;

