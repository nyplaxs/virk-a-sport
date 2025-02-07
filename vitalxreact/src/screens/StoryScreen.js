import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const stories = [{ id: '1', user: 'Noa', image: 'https://source.unsplash.com/random' }];

const StoryScreen = () => {
  return (
    <FlatList data={stories} renderItem={({ item }) => (
      <View style={styles.story}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text>{item.user}</Text>
      </View>
    )} keyExtractor={(item) => item.id} />
  );
};

const styles = StyleSheet.create({ story: { padding: 20, alignItems: 'center' }, image: { width: 100, height: 100, borderRadius: 50 } });

export default StoryScreen;
