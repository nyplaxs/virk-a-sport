import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const chats = [
  { id: '1', name: 'Jean Dupont', lastMessage: 'Salut, ça va ?' },
  { id: '2', name: 'Sophie Martin', lastMessage: 'On se voit demain ?' },
];

const ChatListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('MessageScreen', { chatId: item.id })}>
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  chatItem: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#333' },
  chatName: { color: 'white', fontSize: 18 },
  lastMessage: { color: '#aaa' },
});

export default ChatListScreen;
