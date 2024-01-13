import En from '@/components/mini_components/ens/en';
import Dizi_kunye from '@/components/mini_components/kunyeler/dizi_kunye';
import Reklam from '@/components/mini_components/reklam';
import { useAppContext } from '@/context/ContextProvider';
import Link from 'next/link';
import Custom_Waypoint from '../CustomWaypoint';
import cHtmlToJsx from '@/components/functions/convertHTMLtoJSX';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const allowedCats = ["dizi", "film", "motosiklet"];
const items = [];

//!YENİDEN RENDER EDİLİYOR MU BU SAYFA KONTROL ET, EĞER PROPLARI DEĞİŞİRSE RENDER OLACAK MI?

export default function Ens_all({kategori, jsonContentArray, sayfaUrl, currentPageOperations}) {
  const { supportWebp, showToast, nightMode, url } = useAppContext();
  
  const [DynamicComponent, setDynamicComponent] = useState(null);

  if(DynamicComponent == null && allowedCats.includes(kategori)) {
    console.log("ens_all: geldi: ", kategori);
    const newDynamicComponent = dynamic(() => import(`../kunyeler/${kategori}_kunye`));
    setDynamicComponent(newDynamicComponent);
    console.log("ens_all: set edildi: ", kategori);
  }

  items.length === 0 &&
  jsonContentArray.forEach((item, index) => {

      items.push(
        <section key={index}>
          <En
              baslik={item.num + " - " + item.name}
              pri={index == 0 ? true : false}
              rsm={item.image}
              rsm_alt={item.name + " görseli."}
              enid={"bolum-"+item.num}
              supportWebp={supportWebp}
              showToast={showToast}
              nightMode={nightMode}
              url={url}
              sayfaUrl={sayfaUrl}>
              {/* <Dizi_kunye 
                ozellikler={item.ozellikler}
                parseHtml={cHtmlToJsx}
              /> */}
              <p>{cHtmlToJsx(item.paragraf)}</p>
          </En>
        </section>
      )

      items.push(<hr key={index+"hr1"} className='split'/>);
      
      let addHr = true;
      if ((index + 1) % 3 === 0 && (index + 1) != 10) {
        items.push(
          <Reklam key={index+"r"} />
        );
        addHr = false;
      }

      if((index + 1) === 9) {
        items.push(
            <Custom_Waypoint key={(index+1)+"wp"} name={"bottom"} startedUrl={sayfaUrl} currentPageOperations={currentPageOperations}/>
        )
      }

      !addHr && items.push(<hr key={index+"hr2"} className='split'/>);
  });

  return (
    <>
      {items}
    </>
  )
}
