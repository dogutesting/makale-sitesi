import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

export default function Custom_Waypoint ({name, startedUrl, currentPageOperations}) {

    const [looked, setLooked] = useState(false);

    const setCurrentPageProp = (url) => {
      /* currentPageOperations.setCurrentPageValue(url); */
      console.log("func: " + url);
    }

    //! tıklamaları kayınca düzenle!

    const _fun_onEnter = () => {
      if(name === "top") {
        if(!looked) {
          console.log("CUSTOMWAYPOINT: tıklamalara eklendi");
          setLooked(true);
        }

        /* if(currentPageOperations.currentPageValue != startedUrl) {
          setCurrentPageProp(currentPageOperations.currentPageValue);
        } */
        setCurrentPageProp(startedUrl);
      }

      if(name == "bottom") {
        /* if(currentPageOperations.currentPageValue != startedUrl) {
          setCurrentPageProp(currentPageOperations.currentPageValue);
        } */
        setCurrentPageProp(startedUrl);
      }

      if(name == "topNot") {
        /* if(currentPageOperations.currentPageValue != startedUrl) { 
          setCurrentPageProp(currentPageOperations.currentPageValue);
        } */
        setCurrentPageProp(startedUrl);
      }
    }

  return (
    <Waypoint  onEnter={() => _fun_onEnter()}>
      <div style={{backgroundColor: "red", color: "white"}}>{name}</div>
    </Waypoint>
  );
}