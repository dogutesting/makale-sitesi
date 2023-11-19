import Link from 'next/link';

/* export default function MotosikletKunye({firma, ulke, tip, motorHacmi, sifirYuz, max, agirlik, yakitKapasitesi, tuketim}) {     */
export default function MotosikletKunye({ozellikler}) {    

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

    const ozelliklerArray = Object.entries(ozellikler);

    return (
    <aside className='kunye'>

        {
          ozelliklerArray.map(([anahtar, deger], index) => (
            deger != "0" &&
            <span key={index}>
              <b>{anahtar}: </b>
              <span>{deger}</span>
              {index !== ozelliklerArray.length - 1 && <span className='fof'> | </span>}
            </span>
          ))
        }

        {/* <span><b>Firma: </b>
        <span>{firma}</span>
        </span><span className='fof'> | </span>

        <span><b>Ülke: </b>
        <span>{ulke}</span>
        </span><span className='fof'> | </span>

        <span><b>Tip: </b>
        <span>{tip}</span>
        </span><span className='fof'> | </span>

        <span><b>Motor Hacmi: </b>
        <span>{motorHacmi} cc</span>
        </span><span className='fof'> | </span>

        {sifirYuz !== "0" && (
          <>
            <span>
              <b>Sıfır Yüz: </b>
              <span>{sifirYuz} s</span>
            </span>
            <span className='fof'> | </span>
          </>
        )}

        <span><b>Max Hız: </b>
        <span>{max} Km</span>
        </span>
        <span className='fof'> | </span>

        <span><b>Ağırlık: </b>
        <span>{agirlik}</span>
        </span>
        <span className='fof'> | </span>

        <span><b>Depo Kapasitesi: </b>
        <span>{yakitKapasitesi} Litre</span>
        </span>
        <span className='fof'> | </span>

        <span>
        <b>Tüketim: </b>
        <span>100 km'de {tuketim} litre</span>
        </span> */}
    </aside>
  )
}
