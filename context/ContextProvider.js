import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AppContext = createContext();

/* Alt sayfalarda context'i kullanmak istediğinde bu function çağırılır */
export function useAppContext() {
  return useContext(AppContext);
}

const url = "http://localhost:3000";
let cookies = null;

export function Wrapper({ children }) {

  const router = useRouter();

  const [nightMode, setNightMode] = useState(false);
  const [supportWebp, setSupportWebp] = useState(false);
  const [userInfo, setUserInfo] = useState({id: null, city: null});

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

  //* connect with: setStateUserInfo -> !id
  const getDateAndTime = () => {
    const now = new Date();
    const saat = now.getHours().toString().padStart(2, '0');
    const dakika = now.getMinutes().toString().padStart(2, '0');
    const gun = now.getDate().toString().padStart(2, '0');
    const ay = (now.getMonth() + 1).toString().padStart(2, '0'); // Ay 0'dan başladığı için +1 ekliyoruz.
    const yil = now.getFullYear();
    const tarihVeSaat = `${saat}:${dakika}-${gun}.${ay}.${yil}`;
    //setCurrentDate(tarihVeSaat);
    return tarihVeSaat;
  }

  //* connect with: setStateUserInfo
  const getGeoInfos = async () => {
    /* const geoInfos = await fetch("https://freeipapi.com/api/json")
    .then(response => response.json())
    .then((data) => ({
          country: data.countryName,
          city: data.cityName,
          region: data.regionName,
          lat: data.latitude,
          lon: data.longitude
      })
    );
    
    return geoInfos; */
    return {
      country: "Türkiye",
      city: "Adana",
      region: "Adana",
      lat: "34.215",
      lon: "32.181"
    }
  }

  //* connect with: setStateUserInfo
  const setCookiesIDandGEO = (id, city) => {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    //id
    cookies.set('id', id, { secure: true, sameSite: 'Strict', expires: expirationDate, priority: 'High' });

    //geo
    cookies.set('city', city, { secure: true, sameSite: 'Strict' });

    setUserInfo({
      "id": id,
      "city": city
    })
  }

 const setStateUserInfo = async () => {
    const id_cookie = cookies.get("id");
    const city_cookie = cookies.get("city");

    const geoInfos = await getGeoInfos();
    
    if(!id_cookie) {
      const response = await fetch('/api/userKey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          req: "auk",
          "data": {
            "date": getDateAndTime(),
            "geo": geoInfos
          }
        })
      });

      if(response.ok) {
        const responseId = await response.json();
        return {id: responseId.uuid, city: geoInfos.city}
        //! setToken for comment or like actions
      }
    }
    else {
      if(!city_cookie) {
        return {id: id_cookie, city: geoInfos.city}
        //! setToken for comment or like actions
      }
      else {
        return {id: id_cookie, city: city_cookie}
        //! setToken for comment or like actions
      }
    }
 }

  const addClick = (url, type) => {
    fetch("/api/userKey", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "req": "auc",
        "data": {
          "url": url,
          "date": getDateAndTime(),
          "type": type,
          "city": userInfo.city,
          "uuid": userInfo.id
        }
      })
    });
  } 

  useEffect(() => {
    setSupportWebp(checkWebPSupport());
    //getDateAndTime();
    (async () => {
      const jsCookie = await import('js-cookie');
      //setCookies(jsCookie.default);
      cookies = jsCookie.default;
      const {id, city} = await setStateUserInfo();
      setCookiesIDandGEO(id, city);
      
    })();

  }, [])

  useEffect(() => {

    const handleClick = (event) => {
      if(event.target.closest('a') != null) {
        const moddedUrl = new URL(event.target.closest('a').href).pathname.slice(1);
        if(event.button === 0 || event.button === 1) {
          addClick(moddedUrl, event.button);
        }
      }
    }
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    }
  }, [router])

  return (
    <AppContext.Provider value={{ nightMode, setNightMode, supportWebp, url, userInfo}}>
      {children}
    </AppContext.Provider>
  );
}