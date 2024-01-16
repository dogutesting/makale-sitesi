import Link from 'next/link';
import trToEngLower from '@/components/functions/trToEngLower';

export default function Dizi_kunye({ozellikler, parseHtml}) {
    const ozelliklerArray = Object.entries(ozellikler);
    return (
      <aside className='kunye'>
        {
          ozelliklerArray.map(([anahtar, deger], index) => (
            deger != "0" &&
            <span key={index}>
              <b>{parseHtml(anahtar)}: </b>
              {
                !Array.isArray(deger) ? (
                  <span>{parseHtml(deger)}</span>
                ) : (
                  <ul>
                    {deger.map((v, index) => (
                      <li key={index}><Link title={"En İyi 10 "+v+" Filmi"} href={"en-iyi-10-"+trToEngLower(v)+"-filmi"}>{v}</Link></li>
                    ))}
                  </ul>
                )
              }

              {index !== ozelliklerArray.length - 1 && <span className='fof'> | </span>}
            </span>
          ))
        }
    </aside>  
    )
}