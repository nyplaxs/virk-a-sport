import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from './context/ThemeContext';
import AuthService from './services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import des écrans
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import SearchScreen from './screens/SearchScreen';

// Navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Accueil" component={HomeScreen} />
    <Tab.Screen name="Rechercher" component={SearchScreen} />
    <Tab.Screen name="Créer" component={CreatePostScreen} />
    <Tab.Screen name="Profil" component={ProfileScreen} />
  </Tab.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticatedUser = await AuthService.getCurrentUser();
        setUser(authenticatedUser);
      } catch (error) {
        console.log('Erreur de connexion :', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

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
import AuthService from "./services/authService";

// Exemple d'inscription
const handleRegister = async () => {
  try {
    const user = await AuthService.register("test@example.com", "password123");
    console.log("Utilisateur inscrit :", user);
  } catch (error) {
    console.error("Erreur:", error.message);
  }
};

// Exemple de connexion
const handleLogin = async () => {
  try {
    const user = await AuthService.login("test@example.com", "password123");
    console.log("Utilisateur connecté :", user);
  } catch (error) {
    console.error("Erreur:", error.message);
  }
};

// Exemple de déconnexion
const handleLogout = async () => {
  await AuthService.logout();
  console.log("Utilisateur déconnecté");
};
