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
  const [currentUrl, setCurrentUrl] = useState('');
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

  const setUserIDToState = async () => {
    let user_key = ''
    const userKeyLS = localStorage.getItem('user-key');
    if(userKeyLS) {
      //setUserID(userKeyLS);
      user_key = userKeyLS;
    }
    else {
      const response = await fetch('/api/userKey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(`{
          "request": "add-user-key
        }`)
      });

      if(response.ok) {
        const responseData = await response.json();
        localStorage.setItem('user-key', responseData);
        //setUserID(responseData);
        user_key = userKeyLS;
      }
      else {
        //! console.log("kullanıcı id oluşturulamadı veya alınamadı");
      }
    }
    setUserID(user_key);
  }

  const getDateAndTime = () => {
    const now = new Date();
    const saat = now.getHours().toString().padStart(2, '0');
    const dakika = now.getMinutes().toString().padStart(2, '0');
    const gun = now.getDate().toString().padStart(2, '0');
    const ay = (now.getMonth() + 1).toString().padStart(2, '0'); // Ay 0'dan başladığı için +1 ekliyoruz.
    const yil = now.getFullYear();
    const tarihVeSaat = `${saat}:${dakika} - ${gun}.${ay}.${yil}`;
    setCurrentDate(tarihVeSaat);
  }

  const add10 = async () => {
    const response = await fetch('/api/addTime', {
      method: 'POST',
      header: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(`
      {
        "url":"${currentUrl}",
        "uuid":"${userID}",
        "date":"${currentDate}"
      }
      `)
    });
    if(response.ok) {
      console.log("zaman kayıt edildi");
    }
  }

  useEffect(() => {
    setSupportWebp(checkWebPSupport());
    setUserIDToState();
    getDateAndTime();
  }, [])

  useEffect(() => {

    let intervalId;

    const startInterval = () => {
      intervalId = setInterval(() => {
        console.log("10 saniye geçti");
        
        add10();

      }, 10000);
    };

    const handleRouteChange = (url) => {
      console.log("tıklanılan url => " + url);
      setCurrentUrl(url);
      clearInterval(intervalId);
      startInterval();
    }

    //* ilk sayfa yüklenmesi
    router.events.on('routeChangeComplete', handleRouteChange);
    startInterval();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      clearInterval(intervalId);
    }
  }, [router])

  return (
    <AppContext.Provider value={{ nightMode, setNightMode, supportWebp, siteUrl, userID }}>
      {children}
    </AppContext.Provider>
  );
}