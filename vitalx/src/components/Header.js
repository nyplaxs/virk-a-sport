import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, showBackButton = false, containerStyle, titleStyle }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack(); // Revenir à la page précédente
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {showBackButton && (
        <TouchableOpacity 
          onPress={handleBackPress} 
          style={styles.backButton}
          accessible={true}
          accessibilityLabel="Retour"
        >
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 15,
  },
  backText: {
    fontSize: 24,
    color: '#007BFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
