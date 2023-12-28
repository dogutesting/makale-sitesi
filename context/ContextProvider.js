import { createContext, useContext, useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';
import { useRouter } from 'next/router';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}
const url = "http://localhost:3000";
const notSecretKey = "D++;";
let cookies = null;

export function Wrapper({ children }) {

  const router = useRouter();

  const [nightMode, setNightMode] = useState(false);
  const [supportWebp, setSupportWebp] = useState(false);
  const [userInfo, setUserInfo] = useState({id: null, city: null});

  const kriptoloji = (encry, text) => {
    let value = "";
    if(encry) {
      value = CryptoJS.AES.encrypt(text, notSecretKey).toString();
    }
    else {
      value = CryptoJS.AES.decrypt(text, notSecretKey).toString(CryptoJS.enc.Utf8);
    }
    return value;
  }

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
    cookies.set('ci', kriptoloji(true, city), { secure: true, sameSite: 'Strict' });

    setUserInfo({
      "id": id,
      "city": city
    })
  }

  //* connect with: main
  const setStateUserInfo = async () => {
      const id_cookie = cookies.get("id");
      const city_cookie = cookies.get("ci");

      let geoInfos, city_normal;
      if(!city_cookie) {
        geoInfos = await getGeoInfos();
        city_normal = geoInfos.city;
      }
      else {
        let city_cookie_enc = kriptoloji(false, city_cookie);
        geoInfos = {
          country: "hata", city: city_cookie_enc, region: "", lat: "", lon: ""
        }
        city_normal = city_cookie_enc;
      }

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
          return {id: responseId.uuid, city: city_normal}
          //! setToken for comment or like actions
        }
      }
      else {
        return {id: id_cookie, city: city_normal}
      }
  }


 //* connect with: rota kayıt ve gece mod doğrulayıcı
 const addClick = async (url, button) => {
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
        "type": button,
        "city": userInfo.city,
        "uuid": userInfo.id
      }
    })
  });
}
//* connect with: rota kayıt ve gece mod doğrulayıcı 
const handleClick = (event) => {
  if(event.target.closest('a') != null) {
    const moddedUrl = new URL(event.target.closest('a').href).pathname.slice(1);
    /* if((event.button === 0 || event.button === 1) && moddedUrl.length != 0) { */
    if(event.button === 0 || event.button === 1) {
      addClick(moddedUrl, event.button);
    }
  }
}
//* connect with: rota kayıt ve gece mod doğrulayıcı
 const getMode = () => {
  const localStorage_mode = localStorage.getItem("n-mode");
  setNightMode(JSON.parse(localStorage_mode));

  const body = document.body;
  const class1 = 'night-mode';
  /* const class2 = 'light-mode'; */

  if(nightMode && !body.classList.contains(class1)) {
      body.classList.add(class1)
      /* body.classList.remove(class2) */
  }
  else {
      body.classList.remove(class1);
      /* body.classList.add(class2) */
  }
}
  //rota kayıt ve gece mod doğrulayıcı
 useEffect(() => {
  getMode();
  router.events.on('routeChangeComplete', getMode);
  document.addEventListener('mousedown', handleClick);
  return() => {
      router.events.off('routeChangeComplete', getMode);
      document.removeEventListener('mousedown', handleClick);
  };
}, [nightMode, router]);

  //main
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
  }, []);

  return (
    <AppContext.Provider value={{ nightMode, setNightMode, supportWebp, url, userInfo}}>
      {children}
    </AppContext.Provider>
  );
}