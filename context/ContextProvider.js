import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}
const otherServer = "http://" + "localhost:4541";
const topLevelUrl = "http://" + "localhost:3000";
let cookies = null;

export function Wrapper({ children }) {

  const router = useRouter();

  /* const [nightMode, setNightMode] = useState(false); */
  const [nightMode, setNightMode] = useState(null);
  
  const [supportWebp, setSupportWebp] = useState(true);
  const [userInfo, setUserInfo] = useState({id: null, city: null});
  const [isItMobile, setIsItMobile] = useState(null);

  //* Mobile mi değil mi?
  function hasTouchSupport() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  //* Ekranda toast mesaj göstermek için
  function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    toastContainer.innerHTML = message;
    toastContainer.style.display = 'block';
  
    setTimeout(() => {
      toastContainer.style.display = 'none';
    }, 2000); // 2 saniye sonra toast gizlenir
  }

  const checkWebPSupport = () => {
    const localStorage_webp = JSON.parse(localStorage.getItem("web-p"));
    if(localStorage_webp) {
      return localStorage_webp;
    }
    else {
      var elem = document.createElement('canvas');
      if (!!(elem.getContext && elem.getContext('2d'))) {
          // was able or not to get WebP representation
          const isTrue = elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
          localStorage.setItem("web-p", JSON.stringify(isTrue));
          return isTrue;
      }
      else {
          // very old browser like IE 8, canvas not supported
          localStorage.setItem("web-p", JSON.stringify(false));
          return false;
      }
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
          city: data.cityName
      })
    );
    
    return geoInfos; */
    return {
      country: "Türkiye",
      city: "Adana"
    }
  }

  //* connect with: setStateUserInfo
  const setCookies = (id, city) => {
    let expirationDate = null;
    if(id) {
      expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    }

    if(id && city) {
      cookies.set('id', id, { secure: true, sameSite: 'Strict', expires: expirationDate, priority: 'High' });
      cookies.set('ci', city, { secure: true, sameSite: 'Strict' });
    }
    else if(id && !city) {
      cookies.set('id', id, { secure: true, sameSite: 'Strict', expires: expirationDate, priority: 'High' });
    }
    else if(!id && city) {
      cookies.set('ci', city, { secure: true, sameSite: 'Strict' });
    }
  }

  const setStates = (id, city) => {
    setUserInfo({
      "id": id,
      "city": city
    })
  }

  //fav user: 7bb32417-c76c
  //* connect with: main
  const setStateUserInfo = async () => {
    
      const id_cookie = cookies.get("id");
      const city_cookie = cookies.get("ci");

      if(id_cookie && city_cookie) {
        setStates(id_cookie, city_cookie);
      }
      else if(id_cookie && !city_cookie) {
        const geoInfos = await getGeoInfos();
        const city = await fetch(otherServer+"/oa/cry", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            /* 'Accept': 'application/json' */
          },
          body: JSON.stringify({
            "val": geoInfos.city
          })
        }).then(res => res.json()).then(data => data.cry);

        setStates(id_cookie, city);

        setCookies(null, city);
      }
      else if(!id_cookie && city_cookie) {
        const geoInfos = await getGeoInfos();
        const id = await fetch('/api/userKey', {
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
        }).then(res => res.json()).then(data => data.uuid);
        
        setStates(id, city_cookie);

        setCookies(id, null);
      }
      else {
        const geoInfos = await getGeoInfos();

        const id = await fetch(topLevelUrl+'/api/userKey', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            req: "auk",
            "data": {
              "date": getDateAndTime(),
              "geo": geoInfos
            }
          })
        }).then(res => res.json()).then(data => data.uuid);

        const city = await fetch(otherServer+"/oa/cry", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "val": geoInfos.city
          })
        }).then(res => res.json()).then(data => data.cry);
       
        setStates(id, city);

        setCookies(id, city);
      }
  }

  //* connect with: rota kayıt //Güncellendi
  const addClick = (pathname, type) => {
    fetch(otherServer+"/c-event/waypoint", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "type": type,
        user: {
          "id": userInfo.id,
          "ci": userInfo.city
        },
        status: {
          "pathname": pathname,
          "date": getDateAndTime()
        }
      })
    }).catch(error => {
      //
    });
  }
  //* connect with: gece mod doğrulayıcı
  const getMode = () => {
    const localStorage_mode = localStorage.getItem("n-mode");
    setNightMode(JSON.parse(localStorage_mode));

    const body = document.body;
    const night = 'night-mode';
    const light = 'light-mode';

    if(nightMode) {
      body.classList.remove(light);
      body.classList.add(night);
    }
    else {
      body.classList.remove(night);
      body.classList.add(light);
    }
  }
  
  //gece mod doğrulayıcı
  useEffect(() => {
    getMode();
  }, [nightMode, router]);

  //main
  useEffect(() => {
    //#region //* Bu ikisi cihaz özellikleri kısmına konulabilir
    setSupportWebp(checkWebPSupport());
    setIsItMobile(hasTouchSupport());
    //#endregion

    (async () => {
      const jsCookie = await import('js-cookie');
      cookies = jsCookie.default;
      await setStateUserInfo();
    })();
  }, []);

  return (
    <AppContext.Provider value={{ nightMode, setNightMode, supportWebp, topLevelUrl, userInfo, showToast, addClick, isItMobile}}>
      {children}
    </AppContext.Provider>
  );
}