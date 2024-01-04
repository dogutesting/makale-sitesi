import En from '@/components/mini_components/ens/en';
import Film_kunye from '@/components/mini_components/kunyeler/film_kunye';
import Reklam from '@/components/mini_components/reklam';
import { useAppContext } from '@/context/ContextProvider';
import Link from 'next/link';
import cHtmlToJsx from '@/components/functions/convertHTMLtoJSX';

export default function Ens_film({jsonContentArray, sayfaUrl}) {
  const { supportWebp, showToast, nightMode, url } = useAppContext();

  const items = [];

  jsonContentArray.forEach((item, index) => {
      items.push(
        <section key={index}>
        <En
                pri={index == 0 ? true : false}
                baslik={item.num + " - " + item.name}
                rsm={item.image}
                rsm_alt={item.name + " görseli."}
                enid={"bolum-"+item.num}
                supportWebp={supportWebp}
                showToast={showToast}
                nightMode={nightMode}
                url={url}
                sayfaUrl={sayfaUrl}>
                <Film_kunye 
                ozellikler={item.ozellikler}
                parseHtml = {cHtmlToJsx}
                />
                <p>{cHtmlToJsx(item.paragraf)}</p>
            </En>

          
        </section>
      )

      items.push(<hr key={index+"hr1"} className='split'/>);
      
      let addHr = true;
      if ((index + 1) % 2 === 0 && (index + 1) != 10) {
        items.push(
          <Reklam key={index+"r"} />
        );
        addHr = false;
      }

      !addHr && items.push(<hr key={index+"hr2"} className='split'/>);
      
  });

  return (
    <>
      {items}
    </>
  )
}
