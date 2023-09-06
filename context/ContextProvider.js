import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

/* Alt sayfalarda context'i kullanmak istediğinde bu function çağırılır */
export function useAppContext() {
  return useContext(AppContext);
}

export function Wrapper({ children }) {

  const [nightMode, setNightMode] = useState(false);
  /* const toggleNightMode = (value) => {
    setNightMode(value);
  }; */

  return (
    <AppContext.Provider value={{ nightMode, setNightMode }}>
      {children}
    </AppContext.Provider>
  );
}