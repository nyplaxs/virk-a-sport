import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// Exemple de composant de groupe de discussion
const DiscussionGroup = () => {
  // État pour stocker les messages et le texte du nouvel utilisateur
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fonction pour envoyer un nouveau message
  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        user: 'Utilisateur', // Utilisateur par défaut ou changer selon l'utilisateur actuel
      };
      setMessages([...messages, message]);
      setNewMessage(''); // Réinitialise le champ de texte
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Groupe de Discussion</Text>

      {/* Liste des messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.user}>{item.user}: </Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />

      {/* Zone pour entrer un nouveau message */}
      <TextInput
        style={styles.input}
        placeholder="Écrire un message..."
        value={newMessage}
        onChangeText={setNewMessage}
      />
      <Button title="Envoyer" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  user: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  text: {
    fontSize: 16,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default DiscussionGroup;
