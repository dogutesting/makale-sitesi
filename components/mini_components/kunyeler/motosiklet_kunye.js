import Link from 'next/link';

export default function MotosikletKunye({firma, ulke, tip, motorHacmi, sifirYuz, max, agirlik, yakitKapasitesi, tuketim}) {    

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
        <span><Link href={"en-iyi-10-"+firma+"-motosiklet-modeli"} title={'En iyi 10 ' + firma + " motosiklet modeli"}>{firma}</Link></span>
        </span><span className='fof'> | </span>

        <span><b>Ülke: </b>
        <span><Link href={"en-iyi-10-"+ulke+"-motosiklet-modeli"} title={'En iyi 10 ' + ulke + " motosiklet modeli"}>{ulke}</Link></span>
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
        </span><span className='fof'> | </span>

        <span><b>Ağırlık: </b>
        <span><Link href={`en-hafif-10-${trToEngLower(tip)}-motosiklet`} title={`En hafif 10 ${tip} motosiklet`}>{agirlik} Kg</Link></span>
        </span><span className='fof'> | </span>

        <span><b>Depo kapasitesi: </b>
        <span>{yakitKapasitesi} Litre</span>
        </span><span className='fof'> | </span>

        <span><b><Link href={`en-iyi-tuketime-sahip-10-${trToEngLower(tip)}-motosiklet`} title={`En iyi tüketime sahip 10 ${tip} motosiklet`}>Tüketim</Link>: </b>
        <span>100 km'de {tuketim} litre</span>
        </span>

    </aside>
  )
}
