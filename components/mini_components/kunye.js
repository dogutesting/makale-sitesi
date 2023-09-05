import Link from 'next/link';

export default function kunye({oyuncular, kategori, sure, yil, puan}) {

    return (
    <aside className='kunye'>
        <span><b>Oyuncular:</b> <span>{oyuncular.map((item, index, arr) => {
            if(index == arr.length -1) { return (<Link title={"En iyi " + item + " filmleri"} href={"/en-iyi-"+item.replace(/ /g, "-").toLowerCase()+"-filmleri"}>{item}</Link>) }
            else { return (<span><Link title={"En iyi " + item + " filmleri"} href={"/en-iyi-"+item.replace(/ /g, "-").toLowerCase()+"-filmleri"}>{item}</Link><span> - </span></span>)}
        })}</span></span> <span> | </span>
        <span><b>Kategori:</b> {kategori}</span> <span> | </span>
        <span><b>Süre:</b> {sure}</span> <span> | </span>
        <span><b>Yapım Yılı:</b> <Link title={yil+"-yilinin-en-iyi-10-filmi"} href={yil+"-yilinin-en-iyi-10-filmi"}>{yil}</Link></span><span> | </span>
        <span><b><Link title="imdb puanı en yüksek 10 film" href="imdb-puanı-en-yuksek-10-film">imdb puanı:</Link></b> {puan}/10</span>
    </aside>
  )
}
