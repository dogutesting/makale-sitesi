import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}
const topLevelUrl = "http://" + "localhost:3000";
let cookies = null;

export function Wrapper({ children }) {

  const router = useRouter();

  const [nightMode, setNightMode] = useState(null);  
  const [supportWebp, setSupportWebp] = useState(true);
  const [userInfo, setUserInfo] = useState({id: null, ci: null});
  const [isItMobile, setIsItMobile] = useState(null);

  const [cookie_policy_div, setCookiePolicyDiv] = useState(null);

  //* Politikaya izin verildi mi?
  const getCookiePolicy = () => {
    const status = cookies.get("cookiepolicy_status");
    if(status === 1) {
      setCookiePolicyDiv(false);
    }
    else {
      setCookiePolicyDiv(true);
    }
  }

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
    /* country: data.countryName, */
    /* const geoInfos = await fetch("https://freeipapi.com/api/json")
    .then(response => response.json())
    .then((data) => ({
          ci: data.cityName
      })
    );
    
    return geoInfos; */
    return {
      ci: "Adana"
    }
  }

  //* connect with: setStateUserInfo
  const setCookies = (id, ci) => {

    let expirationDate = null;
    if(id) {
      expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    }

    if(id && ci) {
      cookies.set('id', id, { secure: true, sameSite: 'Strict', expires: expirationDate, priority: 'High' });
      cookies.set('ci', ci, { secure: true, sameSite: 'Strict' });
    }
    else if(id && !ci) {
      cookies.set('id', id, { secure: true, sameSite: 'Strict', expires: expirationDate, priority: 'High' });
    }
    else if(!id && ci) {
      cookies.set('ci', ci, { secure: true, sameSite: 'Strict' });
    }
  }

  const setStates = (id, ci) => {
    setUserInfo({
      "id": id,
      "ci": ci
    })
  }

  //fav user: 7bb32417-c76c
  //* connect with: main
  const setStateUserInfo = async () => {
      //! EĞER KULLANICI COOKİE KULLANIMINA İZİN VERDİYSE BUNU ÇALIŞTIR

      const id_cookie = cookies.get("id");
      const ci_cookie = cookies.get("ci");

      if(id_cookie && ci_cookie) {
        setStates(id_cookie, ci_cookie);
      }
      else if(id_cookie && !ci_cookie) {
        const geoInfos = await getGeoInfos();
        const ci = await fetch(topLevelUrl+"/api/userKey", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            req: "cry",
            "data": {
              "ci": geoInfos.ci
            }
          })
        }).then(res => res.json()).then(data => data.cry);

        setStates(id_cookie, ci);

        setCookies(null, ci);
      }
      else if(!id_cookie && ci_cookie) {
        const geoInfos = await getGeoInfos();
        const id = await fetch(topLevelUrl+'/api/userKey', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify({
            req: "auk",
            "data": {
              "geo": geoInfos.ci,
              "date": getDateAndTime()
            }
          })
        }).then(res => res.json()).then(data => data.uuid);
        
        setStates(id, ci_cookie);

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
              "geo": geoInfos.ci,
              "date": getDateAndTime()
            }
          })
        }).then(res => res.json()).then(data => data.uuid);

        const ci = await fetch(topLevelUrl+"/api/userKey", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            req: "cry",
            "data": {
              "ci": geoInfos.ci
            }
          })
        }).then(res => res.json()).then(data => data.cry);
       
        setStates(id, ci);

        setCookies(id, ci);
      }
  }

  //* connect with: rota kayıt //Güncellendi
  const addClick = (pathname, type) => {
    //! EĞER KULLANICI COOKİE KULLANIMINA İZİN VERDİYSE BUNU ÇALIŞTIR
    fetch(topLevelUrl+"/api/userKey", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        req: "waypoint",
        "type": type,
        "data": {
          user: {
            "id": userInfo.id,
            "ci": userInfo.ci
          },
          status: {
            "pathname": pathname,
            "date": getDateAndTime()
          }
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
      getCookiePolicy();
      //* eğer cookie'lere izin verdiyse stateuserinfo'yu başlat
      await setStateUserInfo();
    })();
  }, []);

  return (
    <AppContext.Provider value={{ nightMode, setNightMode, supportWebp, topLevelUrl, userInfo, showToast, addClick, isItMobile, cookie_policy_div, setCookiePolicyDiv}}>
      {children}
    </AppContext.Provider>
  );
}