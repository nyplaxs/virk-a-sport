import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SettingsScreen = () => {
  // État pour les paramètres de l'utilisateur
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [language, setLanguage] = useState('Français');

  // Récupérer les paramètres depuis l'API au démarrage
  useEffect(() => {
    fetch('http://localhost:3000/api/settings')
      .then((response) => response.json())
      .then((data) => {
        setTheme(data.theme);
        setNotifications(data.notifications);
        setPrivateProfile(data.privateProfile);
        setLanguage(data.language);
      })
      .catch((error) => {
        Alert.alert('Erreur', 'Impossible de récupérer les paramètres.');
      });
  }, []);

  // Sauvegarder les paramètres dans l'API
  const saveSettings = () => {
    const settingsData = {
      theme,
      notifications,
      privateProfile,
      language,
    };

    fetch('http://localhost:3000/api/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settingsData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Alert.alert('Succès', 'Paramètres enregistrés avec succès.');
        } else {
          Alert.alert('Erreur', 'Une erreur est survenue lors de la sauvegarde.');
        }
      })
      .catch((error) => {
        Alert.alert('Erreur', 'Problème de connexion. Veuillez réessayer.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres de l'Application</Text>

      {/* Paramètre Thème */}
      <View style={styles.switchContainer}>
        <Text>Thème : {theme === 'light' ? 'Clair' : 'Sombre'}</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={(value) => setTheme(value ? 'dark' : 'light')}
        />
      </View>

      {/* Paramètre Notifications */}
      <View style={styles.switchContainer}>
        <Text>Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>

      {/* Paramètre Profil Privé */}
      <View style={styles.switchContainer}>
        <Text>Profil Privé</Text>
        <Switch
          value={privateProfile}
          onValueChange={setPrivateProfile}
        />
      </View>

      {/* Paramètre Langue */}
      <TextInput
        style={styles.input}
        placeholder="Langue"
        value={language}
        onChangeText={setLanguage}
      />

      {/* Bouton Sauvegarder */}
      <Button title="Enregistrer les paramètres" onPress={saveSettings} />
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
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default SettingsScreen;
