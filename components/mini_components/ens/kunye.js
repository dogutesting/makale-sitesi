import Link from 'next/link';
export default function Kunye({ozellikler, parseHtml}) {    
    const ozelliklerArray = Object.entries(ozellikler);
    return (
      <aside className='kunye'>
        {
          ozelliklerArray.map(([anahtar, deger], index) => (
            deger != "0" &&
            <span key={index}>
              <b>{parseHtml(anahtar)}: </b>
              <span>{typeof deger}{parseHtml(deger)}</span>
              {index !== ozelliklerArray.length - 1 && <span className='fof'> | </span>}
            </span>
          ))
        }
    </aside>
    )
}