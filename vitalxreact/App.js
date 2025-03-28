import React, { useEffect, useState, useContext } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, AuthContext } from './context/AuthContext';
import AuthService from './services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import des écrans
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import SearchScreen from './screens/SearchScreen';

// Import des icônes
import { Ionicons } from '@expo/vector-icons';

// Navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Accueil"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Rechercher"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Créer"
      component={CreatePostScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Profil"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default function App() {
  const { user, isLoading } = useContext(AuthContext); // Utilisation du contexte Auth

  // Gestion des erreurs avec alertes
  const showError = (message) => {
    Alert.alert("Erreur", message, [{ text: "OK" }]);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        {user ? <MainTabs /> : <AuthStack />}
      </NavigationContainer>
    </ThemeProvider>
  );
}
