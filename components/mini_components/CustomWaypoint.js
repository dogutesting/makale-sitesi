import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

export default function Custom_Waypoint ({type, fullUrl, currentPage}) {

    const [looked, setLooked] = useState(false);

    const _fun_onEnter = () => {
      if(type == "addClick") {

        if(!looked) {
          console.log("tıklamalara eklendi");
        }

        currentPage=fullUrl;        
        console.log("url current olarak ayarlandı: ", currentPage);
        setLooked(true);
      }
    }

  return (
    <Waypoint  onEnter={() => _fun_onEnter()}>
      <div style={{backgroundColor: "red", color: "white"}}>I'm here</div>
    </Waypoint>
  );
}