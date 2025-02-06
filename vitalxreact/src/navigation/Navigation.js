import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';

// Importer les écrans
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import StatsScreen from './screens/StatsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme(); // Détecter le thème (clair ou sombre)
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: scheme === 'dark' ? '#121212' : '#fff',
          },
          headerTintColor: scheme === 'dark' ? '#fff' : '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Accueil' }} 
        />
        <Stack.Screen 
          name="Workout" 
          component={WorkoutScreen} 
          options={{ title: 'Entraînement' }} 
        />
        <Stack.Screen 
          name="Stats" 
          component={StatsScreen} 
          options={{ title: 'Statistiques' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
