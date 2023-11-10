import En from '@/components/mini_components/ens/en';
import Motosiklet_kunye from '@/components/mini_components/kunyeler/motosiklet_kunye';
import Reklam from '@/components/mini_components/reklam';
import { useAppContext } from '@/context/ContextProvider';
import Link from 'next/link';
import cHtmlToJsx from '@/components/functions/convertHTMLtoJSX';

export default function Ens_motosiklet({jsonContentArray}) {
  const { supportWebp } = useAppContext();
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
              supportWebp={supportWebp}>
              <Motosiklet_kunye firma={item.firma}
              ulke={item.ulke}
              tip={item.tip}
              motorHacmi={item.motorHacmi}
              sifirYuz={item.sifirYuz}
              max={item.max}
              agirlik={item.agirlik}
              yakitKapasitesi={item.yakitKapasitesi}
              tuketim={item.tuketim}
              />
              {cHtmlToJsx(item.paragraf).map(component => component)}
              {/* <p>{cHtmlToJsx(item.paragraf).map(component => component)}</p> */}
              {/* {cHtmlToJsx(item.paragraf).map(item => console.log(item))} */}
              {/* <p dangerouslySetInnerHTML={{ __html: item.paragraf }} /> */}
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
      {items.map(item => (item))}
    </>
  )
}