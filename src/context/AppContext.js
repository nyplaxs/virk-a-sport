import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

/**
 * Hook pour accéder au contexte de l'application
 * @returns {Object} Contexte avec les valeurs de l'utilisateur
 */
export const useAppContext = () => useContext(AppContext);

/**
 * Composant Provider pour gérer l'état global de l'application
 * @param {JSX.Element} children - Contenu de l'application
 * @returns {JSX.Element}
 */
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
