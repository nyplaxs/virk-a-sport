1
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar Section */}
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={100}
          source={{ uri: 'https://www.example.com/your-avatar.jpg' }} // Remplace par ton image d'avatar
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.bio}>Développeur passionné et créateur d'applications mobiles.</Text>
      </View>

      {/* Card with profile details */}
      <Card style={styles.card}>
        <Card.Title title="Mes Informations" subtitle="Détails de mon profil" />
        <Card.Content>
          <Text style={styles.cardText}>Nom: John Doe</Text>
          <Text style={styles.cardText}>Email: john.doe@example.com</Text>
          <Text style={styles.cardText}>Lieu: Paris, France</Text>
        </Card.Content>
      </Card>

      {/* Icon Buttons */}
      <View style={styles.iconContainer}>
        <IconButton
          icon="account-edit"
          color="#6200ee"
          size={30}
          onPress={() => console.log('Edit profile pressed')}
        />
        <IconButton
          icon="settings"
          color="#6200ee"
          size={30}
          onPress={() => console.log('Settings pressed')}
        />
        <IconButton
          icon="logout"
          color="#6200ee"
          size={30}
          onPress={() => console.log('Log out pressed')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default ProfileScreen;
