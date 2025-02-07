import React from 'react';
import { View, Text, FlatList } from 'react-native';

const LikesScreen = ({ route }) => {
  const { likes } = route.params;

  return (
    <View>
      <FlatList data={likes} renderItem={({ item }) => <Text>{item.name}</Text>} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default LikesScreen;
