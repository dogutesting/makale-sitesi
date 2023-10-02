import Link from 'next/link';

export default function aracKunye({firma, tip, motorHacmi, sifirYuz, max, agirlik, tuketim}) {

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
        <span><b>Firma: </b>
        <span><Link href={"en-iyi-10-"+firma+"motosiklet"} title={'En iyi 10 ' + firma + "motosiklet modelleri"}>{firma}</Link></span>
        </span><span className='fof'> | </span>

        <span><b>Tip: </b>
        <span><Link href={"en-iyi-10-"+tip+"motosiklet"} title={'En iyi 10 ' + tip + " motosiklet modelleri"}>{tip}</Link></span>
        </span><span className='fof'> | </span>

        <span><b>Motor Hacmi: </b>
        <span><Link href={"en-iyi-10-"+motorHacmi+"-cc-motosiklet"} title={'En iyi 10 ' + motorHacmi + " cc motosiklet modelleri"}>{motorHacmi}cc</Link></span>
        </span><span className='fof'> | </span>

        <span><b>Sıfır Yüz: </b>
        <span>{sifirYuz}s</span>
        </span><span className='fof'> | </span>

        <span><b>Max Hız: </b>
        <span>{max} Km</span>
        </span><span className='fof'> | </span>

        <span><b>Ağırlık: </b>
        <span>{agirlik} Kg</span>
        </span><span className='fof'> | </span>

        <span><b><Link href={"en-iyi-tuketime-sahip-10-motosiklet"} title={"En iyi tüketime sahip 10 motosiklet"}>Tüketim</Link>: </b>
        <span>100 km'de {tuketim} litre</span>
        </span><span className='fof'> | </span>

    </aside>
  )
}
