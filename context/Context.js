import React, { createContext, useContext, useState } from 'react';

const NightModeContext = createContext();

export function useNightMode() {
  return useContext(NightModeContext);
}

export function NightModeProvider({ children }) {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <NightModeContext.Provider value={{ nightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
}