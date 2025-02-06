import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const notifications = [
  {
    id: "1",
    title: "Nouvelle activité",
    message: "Vous avez terminé votre course de 5 km en 25 minutes.",
    date: "2025-01-18 10:30 AM",
  },
  {
    id: "2",
    title: "Défi communautaire",
    message: "Un nouveau défi a été lancé : Courez 10 km en une semaine.",
    date: "2025-01-17 02:15 PM",
  },
  {
    id: "3",
    title: "Rappel d'événement",
    message: "L'événement sportif de demain commence à 9h00.",
    date: "2025-01-16 09:45 AM",
  },
];

const NotificationsScreen = () => {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationDate}>{item.date}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Voir plus</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  notificationCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  notificationMessage: {
    fontSize: 16,
    color: "#555",
    marginVertical: 5,
  },
  notificationDate: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default NotificationsScreen;
