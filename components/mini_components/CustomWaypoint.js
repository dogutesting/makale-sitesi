import { useState } from "react";
import { Waypoint } from "react-waypoint";

export default function Custom_Waypoint ({customKey, name, startedUrl, currentPageOperations, addClick}) {
    const [looked, setLooked] = useState(false);

    const setCurrentPageProp = (url) => {
      if(url != currentPageOperations.currentPageValue) {
        currentPageOperations.setCurrentPageValue(url);
      }      
    }

    //! tıklamaları kayınca düzenle!
    const _fun_onEnter = () => {
      if(name === "top") {
        setCurrentPageProp(startedUrl);
        if(!looked) {
          //! sayfalara sağ tıklayıp yeni sekmede aç deyince sql'e eklemiyor
          //! bu sayfayı daha önce okumadı ise sql'i yazılabilir!

        }
        if(!looked && currentPageOperations.isSetable) {
          console.log("TOP-CLICK EKLENMESI");
          setLooked(true);
          addClick(startedUrl, "auto");
          //! eğer sessionStorage'den id'yi silersem nasıl ekleyecek
        }
      }

      if(name == "bottom") {
        setCurrentPageProp(startedUrl);
      }
    }

  return (
      <Waypoint key={customKey} onEnter={() => _fun_onEnter()}
       scrollableAncestor={currentPageOperations.ancestor}>
        <div style={{backgroundColor: "red", color: "white"}}>{name}</div>
      </Waypoint>
  );
}