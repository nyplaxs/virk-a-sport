import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

/**
 * Hook pour accéder au contexte utilisateur
 * @returns {Object} Contexte utilisateur
 */
export const useUserContext = () => useContext(UserContext);

/**
 * Provider pour gérer l'utilisateur connecté
 * @param {JSX.Element} children - Composants enfants
 * @returns {JSX.Element}
 */
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
