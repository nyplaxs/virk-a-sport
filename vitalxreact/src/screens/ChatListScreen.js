import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { getChatList } from '../api/chatApi';
import ChatItem from '../components/ChatItem';
import styles from '../styles/globalStyles';

const ChatListScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);  // Nouvel état pour gérer les erreurs

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const data = await getChatList();
        setChats(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des chats : ", error);
        setError("Impossible de charger les chats. Veuillez réessayer plus tard.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchChats();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />  // Indicateur de chargement
      ) : error ? (
        <Text>{error}</Text>  // Afficher un message d'erreur si quelque chose va mal
      ) : chats.length === 0 ? (
        <Text style={styles.noChatsText}>Pas encore de discussions. Commencez à discuter avec vos contacts !</Text>  // Nouveau message
      ) : (
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ChatItem chat={item} onPress={() => navigation.navigate('MessageScreen', { chatId: item.id })} />
          )}
        />
      )}
    </View>
  );
};

export default ChatListScreen;
