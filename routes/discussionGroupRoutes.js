import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Importation des écrans (screens) spécifiques pour les groupes de discussion
import DiscussionGroupList from '../screens/DiscussionGroupList'; // Liste des groupes
import DiscussionGroup from '../screens/DiscussionGroup'; // Groupe de discussion individuel

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Composant pour gérer les routes de la section des groupes de discussion
const DiscussionGroupRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Liste des Groupes"
          component={DiscussionGroupList}
          options={{ tabBarLabel: 'Groupes' }}
        />
        <Tab.Screen
          name="Groupe"
          component={DiscussionGroup}
          options={{ tabBarLabel: 'Discussions' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Fonction pour configurer la navigation dans la pile
const DiscussionGroupStack = () => {
  return (
    <Stack.Navigator initialRouteName="DiscussionGroupList">
      <Stack.Screen
        name="DiscussionGroupList"
        component={DiscussionGroupList}
        options={{ title: 'Groupes de Discussion' }}
      />
      <Stack.Screen
        name="DiscussionGroup"
        component={DiscussionGroup}
        options={({ route }) => ({
          title: route.params?.groupName || 'Groupe de Discussion',
        })}
      />
    </Stack.Navigator>
  );
};

export default DiscussionGroupRoutes;
