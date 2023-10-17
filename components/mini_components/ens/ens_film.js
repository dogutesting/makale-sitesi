import En from '@/components/mini_components/ens/en';
import Film_kunye from '@/components/mini_components/kunyeler/film_kunye';
import Reklam from '@/components/mini_components/reklam';

export default function Ens_film({jsonContentArray}) {

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
                <Film_kunye oyuncular={item.actors}
                yonetmen={item.director}
                kategoris={item.filmKategorisi}
                sure={item.sure}
                yil={item.date}
                puan={item.ratingValue}
                puan2={item.metascore}
                />
                {item.paragraf}
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
