// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logique de connexion (ex: appel à une API)
    if (email === '' || password === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
    } else {
      // Exemple de message de connexion réussi
      Alert.alert('Connexion réussie', `Bienvenue, ${email}!`);
      // Navigation vers un autre écran ici, si nécessaire.
    }
  };

  return (
    <View style={styles.container}>
      {/* Image en haut */}
      <Image
        source={{ uri: 'file:///mnt/data/A_professional_athlete,_free_of_copyright,_in_acti.png' }} // Remplace cette URL avec le chemin correct si nécessaire
        style={styles.image}
      />

      {/* Formulaire de connexion */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Se connecter</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Vous n'avez pas de compte? <Text style={styles.link}>Inscrivez-vous</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 75,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
