import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const StatCard = ({ title, value, description, imageUri }) => {
  const scheme = useColorScheme(); // Détecter le thème (clair ou sombre)
  
  // Définir les styles en fonction du thème
  const styles = scheme === 'dark' ? darkStyles : lightStyles;
  
  return (
    <Card style={styles.card}>
      <Card.Content>
        {imageUri && <img src={imageUri} alt="Stat Image" style={styles.image} />}
        <Title style={styles.title}>{title}</Title>
        <Paragraph style={styles.value}>{value}</Paragraph>
        {description && <Paragraph style={styles.description}>{description}</Paragraph>}
      </Card.Content>
    </Card>
  );
};

// Styles pour le thème sombre
const darkStyles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    color: '#ff9800',
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#bbb',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

// Styles pour le thème clair
const lightStyles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    color: '#ff9800',
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#333',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default StatCard;
