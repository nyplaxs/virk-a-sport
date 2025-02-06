// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, ActivityIndicator, Button, Modal } from 'react-native';

// Données fictives pour illustrer la recherche
const mockResults = [
  { id: '1', type: 'Utilisateur', name: 'John Doe', imageUrl: 'https://via.placeholder.com/50' },
  { id: '2', type: 'Groupe', name: 'Fitness Enthusiasts', imageUrl: 'https://via.placeholder.com/50' },
  { id: '3', type: 'Événement', name: 'Yoga Class', imageUrl: 'https://via.placeholder.com/50' },
  { id: '4', type: 'Défi', name: '10K Running Challenge', imageUrl: 'https://via.placeholder.com/50' },
  { id: '5', type: 'Utilisateur', name: 'Jane Smith', imageUrl: 'https://via.placeholder.com/50' },
  { id: '6', type: 'Groupe', name: 'Cycling Lovers', imageUrl: 'https://via.placeholder.com/50' },
  { id: '7', type: 'Événement', name: 'Fitness Meetup', imageUrl: 'https://via.placeholder.com/50' },
  { id: '8', type: 'Défi', name: 'Push-ups Challenge', imageUrl: 'https://via.placeholder.com/50' },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [filters, setFilters] = useState({
    users: true,
    groups: true,
    events: true,
    challenges: true,
  });

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const results = mockResults.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filters.users && item.type === 'Utilisateur' || 
         filters.groups && item.type === 'Groupe' ||
         filters.events && item.type === 'Événement' ||
         filters.challenges && item.type === 'Défi')
      );
      setSearchResults(results);
      setLoading(false);
    }, 500);
  };

  const toggleFilter = (type) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: !prevFilters[type],
    }));
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderResultItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => handleItemPress(item)}>
      <Image source={{ uri: item.imageUrl }} style={styles.resultImage} />
      <View style={styles.resultTextContainer}>
        <Text style={styles.resultName}>{item.name}</Text>
        <Text style={styles.resultType}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFilters = () => (
    <View style={styles.filtersContainer}>
      {['users', 'groups', 'events', 'challenges'].map((type) => (
        <TouchableOpacity key={type} style={styles.filterButton} onPress={() => toggleFilter(type)}>
          <Text style={[styles.filterText, !filters[type] && styles.filterInactive]}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un utilisateur, groupe ou défi..."
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      
      {renderFilters()}

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={renderResultItem}
          contentContainerStyle={styles.resultsList}
        />
      )}

      {searchResults.length === 0 && !loading && (
        <Text style={styles.noResultsText}>Aucun résultat trouvé.</Text>
      )}

      {/* Modal pour afficher les détails de l'élément */}
      {selectedItem && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedItem.name}</Text>
              <Text style={styles.modalDescription}>{selectedItem.type}</Text>
              <Image source={{ uri: selectedItem.imageUrl }} style={styles.modalImage} />
              <Button title="Fermer" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    margin: 2,
  },
  filterText: {
    color: '#fff',
    fontSize: 14,
  },
  filterInactive: {
    color: '#888',
  },
  resultsList: {
    flexGrow: 1,
  },
  resultItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  resultImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultType: {
    color: '#bbb',
    fontSize: 14,
  },
  noResultsText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalDescription: {
    color: '#bbb',
    fontSize: 16,
    marginVertical: 10,
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default SearchScreen;
