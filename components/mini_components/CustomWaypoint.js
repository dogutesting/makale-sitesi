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
        if(!looked && currentPageOperations.isSetable) {
          console.log("TOP-CLICK EKLENMESI");
          setLooked(true);
          
          //! burası tekrar tekrar çalışmaz ama aşağı tekrar tekrar çalışır
          addClick(startedUrl, name);
        }
      }

      if(name == "bottom") {
        setCurrentPageProp(startedUrl);
        addClick(startedUrl, name);
      }
    }

  return (
      <Waypoint key={customKey} onEnter={() => _fun_onEnter()}
       scrollableAncestor={currentPageOperations.ancestor}>
        <div style={{backgroundColor: "red", color: "white"}}>{name}</div>
      </Waypoint>
  );
}