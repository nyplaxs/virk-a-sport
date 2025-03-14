import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, Text, ActivityIndicator, RefreshControl } from 'react-native';
import { getChatList } from '../api/chatApi';
import ChatItem from '../components/ChatItem';
import styles from '../styles/globalStyles';

const ChatListScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchChats = async () => {
    try {
      setIsLoading(true);
      const data = await getChatList();
      setChats(data);
      setError(null);
    } catch (error) {
      console.error("Erreur lors de la récupération des chats : ", error);
      setError("Impossible de charger les chats. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchChats();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : chats.length === 0 ? (
        <Text style={styles.noChatsText}>Pas encore de discussions. Commencez à discuter avec vos contacts !</Text>
      ) : (
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ChatItem
              chat={item}
              onPress={() => navigation.navigate('MessageScreen', { chatId: item.id })}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default ChatListScreen;
