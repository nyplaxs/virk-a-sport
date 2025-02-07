import React, { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { GiftedChat, Bubble, Send, InputToolbar, Actions } from 'react-native-gifted-chat';
import { getMessages, sendMessage, sendImage, sendVoiceMessage } from '../api/chatApi';
import * as ImagePicker from 'expo-image-picker';
import AudioRecorder from '../components/AudioRecorder';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/globalStyles';

const MessageScreen = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const route = useRoute();
  const { chatId, user } = route.params;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages(chatId);
        setMessages(data);
      } catch (error) {
        Alert.alert('Erreur', 'Impossible de charger les messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [chatId]);

  const onSend = useCallback(async (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    await sendMessage(chatId, newMessages[0]);
  }, []);

  // 📷 Fonction pour envoyer une image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const imageMessage = {
        _id: Math.random().toString(),
        createdAt: new Date(),
        user: {
          _id: user.id,
          name: user.name,
          avatar: user.avatar,
        },
        image: result.assets[0].uri,
      };
      setMessages((prevMessages) => GiftedChat.append(prevMessages, [imageMessage]));
      await sendImage(chatId, result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{ _id: user.id, name: user.name, avatar: user.avatar }}
          isTyping={isTyping}
          renderBubble={(props) => (
            <Bubble
              {...props}
              wrapperStyle={{ right: { backgroundColor: '#007AFF' }, left: { backgroundColor: '#e5e5ea' } }}
            />
          )}
          renderSend={(props) => (
            <Send {...props}>
              <View style={{ marginRight: 10, marginBottom: 5 }}>
                <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>Envoyer</Text>
              </View>
            </Send>
          )}
          renderActions={() => (
            <Actions
              icon={() => <Text style={{ fontSize: 20 }}>📷</Text>}
              onPressActionButton={pickImage}
            />
          )}
          renderInputToolbar={(props) => <InputToolbar {...props} />}
          renderFooter={() => <AudioRecorder onSend={sendVoiceMessage} />}
        />
      )}
    </View>
  );
};

export default MessageScreen;

