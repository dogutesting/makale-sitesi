import En from '@/components/mini_components/ens/en';
import Film_kunye from '@/components/mini_components/kunyeler/film_kunye';

export default function Ens_film({jsonContentArray}) {

  const items = [];

  jsonContentArray.forEach((item, index) => {
      items.push(
        <>
        <section key={item.num}>
        <En
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
        <hr className='split'/>
        </>
        
      )
    
      if ((index + 1) % 2 === 0 && (index + 1) != 10) {
        items.push(
          <>
          <section key={`${index}`}>
            {/* <ReklamBileseni />  */}
            Reklam bileşeni
          </section>
          <hr className='split'/>
          </>
        );
      }
      
  });

  return (
    <>
      {items}
    </>
  )
}
