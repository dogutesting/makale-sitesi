import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

export default function Custom_Waypoint ({name, startedUrl, currentPageOperations}) {

    const [looked, setLooked] = useState(false);

    const setCurrentPageProp = (url) => {
      currentPageOperations.setCurrentPageValue(url);
    }

    //makalenin top ve botunda olacak şekilde 2 tane waypoint noktası olacak
    //  bu noktalardan geçince currentValue değeri waypoint üzerinde veriye göre değişecek

    //top waypoint'inde ek olarak addClick olacak ve sadece 1 kere çalışacak

    //! tıklamaları kayınca düzenle!

    const _fun_onEnter = () => {
      if(name === "top") {
        if(!looked) {
          console.log("CUSTOMWAYPOINT: tıklamalara eklendi");
          setLooked(true);
        }

        if(currentPageOperations.currentPageValue != startedUrl) {
          setCurrentPageProp(currentPageOperations.currentPageValue);
        }
      }

      if(name == "bottom") {
        if(currentPageOperations.currentPageValue != startedUrl) {
          setCurrentPageProp(currentPageOperations.currentPageValue);
        }
      }

      if(name == "topNot") {
        if(currentPageOperations.currentPageValue != startedUrl) { 
          setCurrentPageProp(currentPageOperations.currentPageValue);
        }
      }
    }

  return (
    <Waypoint  onEnter={() => _fun_onEnter()}>
      <div style={{backgroundColor: "red", color: "white"}}>{name}</div>
    </Waypoint>
  );
}