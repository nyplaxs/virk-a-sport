import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Créer un groupe
export const createGroup = async (userId, groupName, description) => {
  try {
    const response = await axios.post(`${BASE_URL}/groups`, {
      userId,
      groupName,
      description,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du groupe:', error);
    throw error;
  }
};

// Ajouter un membre à un groupe
export const addMemberToGroup = async (groupId, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/groups/${groupId}/addMember`, {
      userId,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout d\'un membre au groupe:', error);
    throw error;
  }
};

// Supprimer un membre d'un groupe
export const removeMemberFromGroup = async (groupId, userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/groups/${groupId}/removeMember`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression d\'un membre du groupe:', error);
    throw error;
  }
};

// Obtenir la liste des groupes d'un utilisateur
export const getGroups = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/groups`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des groupes:', error);
    throw error;
  }
};
