import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AppContext = createContext();

/* Alt sayfalarda context'i kullanmak istediğinde bu function çağırılır */
export function useAppContext() {
  return useContext(AppContext);
}

export function Wrapper({ children }) {

  const siteUrl = "https://enonlar.com";

  const router = useRouter();

  const [nightMode, setNightMode] = useState(false);
  const [supportWebp, setSupportWebp] = useState(false);
  const [userID, setUserID] = useState();
  const [currentDate, setCurrentDate] = useState('20.11.2023')


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

  const getDateAndTime = () => {
    const now = new Date();
    const saat = now.getHours().toString().padStart(2, '0');
    const dakika = now.getMinutes().toString().padStart(2, '0');
    const gun = now.getDate().toString().padStart(2, '0');
    const ay = (now.getMonth() + 1).toString().padStart(2, '0'); // Ay 0'dan başladığı için +1 ekliyoruz.
    const yil = now.getFullYear();
    const tarihVeSaat = `${saat}:${dakika}-${gun}.${ay}.${yil}`;
    setCurrentDate(tarihVeSaat);
  }

  const setUserIDToState = async () => {
    let user_key = localStorage.getItem('user-key');
    if(!user_key) {
      const response = await fetch('/api/userKey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          req: "add-user-key",
          date: "test-date"
        })
      });

      if(response.ok) {
        const responseData = await response.json();
        localStorage.setItem('user-key', responseData.uuid);
        user_key = responseData.uuid;
      }
      else {
        //! console.log("kullanıcı id oluşturulamadı veya alınamadı");
      }
    }
    setUserID(user_key);
  }

  const addClick = async (url, type) => {
    const response = await fetch("/api/userKey", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "req": "auc",
        "data": {
          "url": url,
          "date": currentDate,
          "type": type,
          "uuid": userID
        }
      }),
    });
  } 

  useEffect(() => {
    setSupportWebp(checkWebPSupport());
    getDateAndTime();
    setUserIDToState();
  }, [])

  useEffect(() => {

    const handleClick = (event) => {
      if(event.target.closest('a') != null) {
        const moddedUrl = new URL(event.target.closest('a').href).pathname.slice(1)
        event.button === 0 && addClick(moddedUrl, 0);
        event.button === 1 && addClick(moddedUrl, 1);
      }
    }
    document.addEventListener('mousedown', handleClick);
    //* ilk sayfa yüklenmesi
    //router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      //router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router])

  return (
    <AppContext.Provider value={{ nightMode, setNightMode, supportWebp, siteUrl, userID }}>
      {children}
    </AppContext.Provider>
  );
}