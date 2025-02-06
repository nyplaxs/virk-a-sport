import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';

const MessageScreen = () => {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(1);
  const [image, setImage] = useState(null);
  const [quotedMessage, setQuotedMessage] = useState(null);
  const [privateUserId, setPrivateUserId] = useState(null);
  const [mention, setMention] = useState(null);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Bienvenue sur VitalX !',
        createdAt: new Date(),
        user: { _id: 2, name: 'Admin' },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  const handleImagePick = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({ quality: 1 });
      if (!result.canceled) {
        setImage(result.uri);
        onSend([
          {
            _id: Math.round(Math.random() * 1000000),
            text: '',
            createdAt: new Date(),
            user: { _id: userId },
            image: result.uri,
          },
        ]);
      }
    }
  };

  const handleFilePick = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      onSend([
        {
          _id: Math.round(Math.random() * 1000000),
          text: `Fichier: ${result.name}`,
          createdAt: new Date(),
          user: { _id: userId },
          file: result.uri,
        },
      ]);
    }
  };

  const handleReply = (message) => {
    setQuotedMessage(message);
  };

  const renderFooter = () => {
    if (quotedMessage) {
      return (
        <View style={styles.quotedMessage}>
          <Text>{`Répondre à: ${quotedMessage.text}`}</Text>
          <Button title="Annuler" onPress={() => setQuotedMessage(null)} />
        </View>
      );
    }
    return null;
  };

  const handleReaction = (messageId, emoji) => {
    const updatedMessages = messages.map((message) => {
      if (message._id === messageId) {
        message.reactions = message.reactions || [];
        message.reactions.push(emoji);
      }
      return message;
    });
    setMessages(updatedMessages);
  };

  const renderMessage = (props) => {
    const { currentMessage } = props;
    return (
      <View>
        <GiftedChat.renderMessage {...props} />
        <View style={styles.reactions}>
          <Ionicons
            name="thumbs-up"
            size={20}
            color="green"
            onPress={() => handleReaction(currentMessage._id, '👍')}
          />
          <Ionicons
            name="heart"
            size={20}
            color="red"
            onPress={() => handleReaction(currentMessage._id, '❤️')}
          />
        </View>
      </View>
    );
  };

  const handleMention = (text) => {
    const mentionRegex = /@(\w+)/g;
    const matches = text.match(mentionRegex);
    if (matches) {
      setMention(matches);
    }
  };

  const handlePrivateMessage = (text) => {
    if (privateUserId) {
      onSend([
        {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: { _id: userId },
          private: true,
          recipient: privateUserId,
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend} // Unique onSend
        user={{ _id: userId }}
        renderMessage={renderMessage}
        renderFooter={renderFooter}
        text={messageText}
        onInputTextChanged={setMessageText}
        renderActions={() => (
          <View style={styles.actions}>
            <Button title="Ajouter Image" onPress={handleImagePick} />
            <Button title="Ajouter Fichier" onPress={handleFilePick} />
            <Ionicons
              name="happy-outline"
              size={30}
              color="white"
              onPress={() => handleReaction(null, '😊')}
              style={styles.emojiButton}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  emojiButton: {
    marginRight: 10,
  },
  quotedMessage: {
    backgroundColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  reactions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
});

export default MessageScreen;
