import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

/* Alt sayfalarda context'i kullanmak istediğinde bu function çağırılır */
export function useAppContext() {
  return useContext(AppContext);
}

export function Wrapper({ children }) {

  const [nightMode, setNightMode] = useState(false);
  
  const [supportWebp, setSupportWebp] = useState(false);

  useEffect(() => {
    const checkWebPSupport = () => {
      var elem = document.createElement('canvas');

      if (!!(elem.getContext && elem.getContext('2d'))) {
          // was able or not to get WebP representation
          return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
      }
      else {
          // very old browser like IE 8, canvas not supported
          return false;
      }
    };
    setSupportWebp(checkWebPSupport());
  }, [])

  return (
    <AppContext.Provider value={{ nightMode, setNightMode, supportWebp }}>
      {children}
    </AppContext.Provider>
  );
}