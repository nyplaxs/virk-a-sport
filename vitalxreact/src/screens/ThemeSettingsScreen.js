import React, { useContext } from 'react';
import { View, Switch, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/globalStyles';

const ThemeSettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mode {isDarkMode ? 'Sombre' : 'Clair'}</Text>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
    </View>
  );
};

export default ThemeSettingsScreen;

