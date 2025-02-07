import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const PrivacySettingsScreen = () => {
  const [isProfilePrivate, setIsProfilePrivate] = useState(false);
  const [isStoryPrivate, setIsStoryPrivate] = useState(false);
  const [blockMessages, setBlockMessages] = useState(false);
  const [privateBrowsing, setPrivateBrowsing] = useState(false);

  // Fonction pour sauvegarder les préférences
  const savePreference = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des préférences', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Confidentialité</Text>

      {/* Profil privé */}
      <View style={styles.option}>
        <Icon name="eye-off" size={24} color="#fff" />
        <Text style={styles.optionText}>Profil privé</Text>
        <Switch
          value={isProfilePrivate}
          onValueChange={(value) => {
            setIsProfilePrivate(value);
            savePreference('isProfilePrivate', value);
          }}
        />
      </View>

      {/* Confidentialité des stories */}
      <View style={styles.option}>
        <Icon name="camera" size={24} color="#fff" />
        <Text style={styles.optionText}>Stories privées</Text>
        <Switch
          value={isStoryPrivate}
          onValueChange={(value) => {
            setIsStoryPrivate(value);
            savePreference('isStoryPrivate', value);
          }}
        />
      </View>

      {/* Bloquer les messages privés */}
      <View style={styles.option}>
        <Icon name="chatbubble-ellipses" size={24} color="#fff" />
        <Text style={styles.optionText}>Bloquer les messages privés</Text>
        <Switch
          value={blockMessages}
          onValueChange={(value) => {
            setBlockMessages(value);
            savePreference('blockMessages', value);
          }}
        />
      </View>

      {/* Navigation privée */}
      <View style={styles.option}>
        <Icon name="shield" size={24} color="#fff" />
        <Text style={styles.optionText}>Mode de navigation privée</Text>
        <Switch
          value={privateBrowsing}
          onValueChange={(value) => {
            setPrivateBrowsing(value);
            savePreference('privateBrowsing', value);
          }}
        />
      </View>

      {/* Gestion des comptes bloqués */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gérer les utilisateurs bloqués</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  option: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#222', borderRadius: 10, marginBottom: 10 },
  optionText: { fontSize: 18, color: '#fff', marginLeft: 10, flex: 1 },
  button: { marginTop: 20, backgroundColor: '#007AFF', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default PrivacySettingsScreen;
