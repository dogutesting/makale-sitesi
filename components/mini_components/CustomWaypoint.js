import { useState } from "react";
import { Waypoint } from "react-waypoint";

export default function Custom_Waypoint ({customKey, name, startedUrl, currentPageOperations}) {
    
    const [looked, setLooked] = useState(false);

    const setCurrentPageProp = (url) => {
      currentPageOperations.setCurrentPageValue(url);
      console.log("Set to: " + url);
    }

    //! tıklamaları kayınca düzenle!
    const _fun_onEnter = () => {
      if(name === "top") {
        if(!looked && currentPageOperations.isSetable) {
          console.log("TOP-CLICK EKLENMESI");
          setLooked(true);
        }
        setCurrentPageProp(startedUrl)
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