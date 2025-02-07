import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { getChatList } from '../api/chatApi';
import ChatItem from '../components/ChatItem';
import styles from '../styles/globalStyles';

const ChatListScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const data = await getChatList();
      setChats(data);
    };
    fetchChats();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem chat={item} onPress={() => navigation.navigate('MessageScreen', { chatId: item.id })} />}
      />
    </View>
  );
};

export default ChatListScreen;
