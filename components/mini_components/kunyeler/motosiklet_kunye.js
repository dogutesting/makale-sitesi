import Link from 'next/link';

export default function MotosikletKunye({firma, ulke, tip, motorHacmi, sifirYuz, max, agirlik, yakitKapatisesi, tuketim}) {    

    return (
    <aside className='kunye'>
        <span><b>Firma: </b>
        <span><Link href={"en-iyi-10-"+firma+"motosiklet"} title={'En iyi 10 ' + firma + "motosiklet modelleri"}>{firma}</Link></span>
        </span><span className='fof'> | </span>

        <span><b>Ülke: </b>
        <span><Link href={"en-iyi-10-"+ulke+"motosiklet"} title={'En iyi 10 ' + ulke + "motosiklet modelleri"}>{ulke}</Link></span>
        </span><span className='fof'> | </span>

        <span><b>Tip: </b>
        {/* <span><Link href={"en-iyi-10-"+tip+"motosiklet"} title={'En iyi 10 ' + tip + " motosiklet modelleri"}>{tip}</Link></span> */}
        <span>{tip}</span>
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

        <span><b>Depo kapasitesi: </b>
        <span>{yakitKapatisesi} Litre</span>
        </span><span className='fof'> | </span>

        <span><b><Link href={"en-iyi-tuketime-sahip-10-motosiklet"} title={"En iyi tüketime sahip 10 motosiklet"}>Tüketim</Link>: </b>
        <span>100 km'de {tuketim} litre</span>
        </span><span className='fof'> | </span>

    </aside>
  )
}
