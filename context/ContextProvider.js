import React, { createContext, useContext, useState } from 'react';

const NightModeContext = createContext();

export function useNightMode() {
  return useContext(NightModeContext);
}

export function NightModeProvider({ children }) {
  const [nightMode, setNightMode] = useState("what the fuck");

  const setDarkMode = (value) => {
    setNightMode(value);
  };

  return (
    <NightModeContext.Provider value={{ nightMode, setDarkMode }}>
      {children}
    </NightModeContext.Provider>
  );
}