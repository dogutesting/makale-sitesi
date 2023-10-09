import En from '@/components/mini_components/ens/en';
import Motosiklet_kunye from '@/components/mini_components/kunyeler/motosiklet_kunye';

export default function Ens_motosiklet({jsonContentArray}) {

  const items = [];
  
  jsonContentArray.forEach((item, index) => {
      items.push(
        <section key={index}>
        <En
              pri={index == 0 ? true : false}
              baslik={item.num + " - " + item.name}
              rsm={item.image}
              rsm_alt={item.name + " görseli."}
              enid={"bolum-"+item.num}>
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
              {item.paragraf}
          </En>          
        </section>
      )

      items.push(<hr key={index+"hr1"} className='split'/>);
    
      if ((index + 1) % 2 === 0 && (index + 1) != 10) {
        items.push(
          <section key={index+"r"}>
            Reklam bileşeni
          </section>
        );
      }

      items.push(<hr key={index+"hr2"} className='split'/>);
  });
 

  return (
    <>
      {items.map(item => (item))}
    </>
  )
}