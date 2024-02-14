import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useAppContext } from "@/context/ContextProvider";

export default function Custom_Waypoint ({customKey, name, startedUrl, currentPageOperations}) {
    const { addClick } = useAppContext();
    const [looked, setLooked] = useState(false);
    const [looked2, setLooked2] = useState(false);

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
          setLooked(true);
          //addClick(startedUrl, name);
        }
      }

      if(name == "bottom") {
        setCurrentPageProp(startedUrl);
        if(!looked2) {
          setLooked2(true); 
          //addClick(startedUrl, name);
        }
      }
    }

  return (
      <Waypoint key={customKey} onEnter={() => _fun_onEnter()}
       scrollableAncestor={currentPageOperations.ancestor}>
        {/* <div style={{backgroundColor: "red", color: "white"}}>{name}</div> */}
      </Waypoint>
  );
}