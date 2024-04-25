import Link from 'next/link';
export default function Kunye({ozellikler, parseHtml}) {    
    const ozelliklerArray = Object.entries(ozellikler);

    return (
      <aside className='kunye'>
        { ozelliklerArray &&
          ozelliklerArray.map(([anahtar, deger], index) => {
            if(deger != "0" || deger != "") {
              return (
                <span key={index}>
                  <b>{parseHtml(anahtar)}: </b>
                  <span>
                    {
                      Array.isArray(deger) ? (
                        <ul>
                        {
                          deger.map((item, subIndex) => (
                            <li key={subIndex}>{parseHtml(item)}</li>
                          ))
                        }
                        </ul>
                      )
                      : 
                      (
                        <span>{parseHtml(deger)}</span>
                      )
                    }
                  </span>
                  {index !== ozelliklerArray.length - 1 && <span className='fof'> | </span>}
                </span>
              );
            }
          })
        }
      </aside>
    )
}