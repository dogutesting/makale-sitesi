import En from '@/components/mini_components/ens/En';
import Reklam from '@/components/mini_components/Reklam';
import Kunye from './Kunye';
import { useAppContext } from '@/context/ContextProvider';
import Link from 'next/link';
import Custom_Waypoint from '../CustomWaypoint';
import cHtmlToJsx from '@/components/functions/convertHTMLtoJSX';



export default function EnsAll({jsonContentArray, sayfaUrl, currentPageOperations, setBottomChecker}) {
  const { supportWebp, showToast, nightMode, topLevelUrl } = useAppContext();
  const items = [];

  items.length === 0 &&
  jsonContentArray.forEach((item, index) => {
      items.push(
        <section key={index}>
          <En
              baslik={item.num + " - " + item.name}
              pri={false}
              rsm={item.image}
              rsm_alt={item.name + " görseli."}
              enid={"bolum-"+item.num}
              supportWebp={supportWebp}
              showToast={showToast}
              nightMode={nightMode}
              topLevelUrl={topLevelUrl}
              sayfaUrl={sayfaUrl}>
                {item.ozellikler && <Kunye ozellikler={item.ozellikler} parseHtml={cHtmlToJsx}/>}
                <p>{cHtmlToJsx(item.paragraf)}</p>
          </En>
        </section>
      )

      
      
      let addHr = true;
      if ((index + 1) % 3 === 0 && (index + 1) != 10) {
        items.push(
          <Reklam key={index+"_r"} />
        );
        addHr = false;
      }

      items.push(<hr key={index+"hr1"} className='split'/>);

      if((index + 1) === 10) {
        items.push(
            <Custom_Waypoint key={"bottom_wp_"+(index+1)} name={"bottom"} startedUrl={sayfaUrl} currentPageOperations={currentPageOperations} setBottomChecker={setBottomChecker}/>
        )
      }

      /* !addHr && items.push(<hr key={index+"hr2"} className='split'/>); */
  });

  return (
    <>
      {items}
    </>
  )
}
