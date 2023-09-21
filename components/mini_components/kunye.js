import Link from 'next/link';

export default function kunye({oyuncular, yonetmen, kategori, sure, yil, puan, puan2}) {

  /*

    Buradaki yönlendirmeleri kateogriye mi yapsam yoksa farklı bir yere mi yapsam?
    örneğin will smith:
      main/will-smith diye kategori mi açsam yoksa?

      anahtar kelime aramalarında da sadece en çok izlenen - en iyi filmleri veya son filmleri var
  */

    const trToEngLower = (str) => {
        return str
          .replace(/ğ/g, 'g')
          .replace(/Ğ/g, 'G')
          .replace(/ı/g, 'i')
          .replace(/İ/g, 'I')
          .replace(/ş/g, 's')
          .replace(/Ş/g, 'S')
          .replace(/ü/g, 'u')
          .replace(/Ü/g, 'U')
          .replace(/ö/g, 'o')
          .replace(/Ö/g, 'O')
          .replace(/ç/g, 'c')
          .replace(/Ç/g, 'C')
          .replace(/[^a-zA-Z0-9]/g, '-') // İngilizce karakterler dışındaki karakterleri tire ile değiştir
          .toLowerCase(); // Tüm metni küçük harfe dönüştür
      }      

    return (
    <aside className='kunye'>
        <span><b>Oyuncular: </b>
          <ul>
            {
              oyuncular.map((item, index, arr) => {
                if(index == arr.length -1) { return (<li key={index}><Link title={"En iyi " + item + " filmleri"} href={"/en-iyi-"+trToEngLower(item)+"-filmleri"}>{item}</Link></li>) }
                else { return (<li key={index}><Link title={"En iyi " + item + " filmleri"} href={"/en-iyi-"+trToEngLower(item)+"-filmleri"}>{item}</Link> - </li>)}
              })
            }
          </ul>
        </span><span> | </span>

        <span><b>Yönetmen:</b> <Link title={"En iyi "+yonetmen+" filmleri"} href={"en-iyi-"+trToEngLower(yonetmen)+"-filmleri"}>{yonetmen}</Link></span> <span> | </span>
        <span><b>Kategori:</b> {kategori}</span> <span> | </span>
        <span><b>Süre:</b> {sure}</span> <span> | </span>
        
        <span><b>Yapım Yılı: </b><Link title={yil+" yılının en iyi 10 filmi"} href={yil+"-yilinin-en-iyi-10-filmi"}> {yil}</Link></span> <span> | </span>
        <span><b><Link title="imdb puanı en yüksek 10 film" href="imdb-puani-en-yuksek-10-film">imdb puanı:</Link></b> {puan}/10</span>
        
        <span><b><Link title="metascore puanı en yüksek 10 film" href="metascore-puani-en-yuksek-10-film">metascore puanı:</Link></b> {puan2}/100</span>
    </aside>
  )
}
