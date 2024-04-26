import Image from 'next/image';
import Link from 'next/link';

export default function ContentBox({url, baslik, resim, eklenmeTarihi, okunmaSuresi, kategori, paragraf, pri, nightMode, supportWebp, setHandleCategory}) {

  const goTag = (e, kategori) => {
    e.preventDefault();
    setHandleCategory(kategori);
    window.scrollTo(0, 0);
  }


  //pri && console.log("priority: " + pri + " - ");

  return (
    <Link className={['index-content-box', nightMode ? 'icb-night' : 'icb-light'].join(' ')} href={url}>
        <div className='icb-child image-container'>
                {
                    supportWebp ? (
                        <Image
                            className='index-image'
                            priority={pri}
                            src={resim} alt={baslik + " görseli"}
                            fill
                            sizes="(max-width: 500px) 100vw, 40vw"
                        />
                    ) : (
                        <img
                            className='us-image'
                            loading='lazy'
                            src={resim}
                            alt={baslik + " görseli"}
                        /> 
                    )
                } 
        </div>
        
        <div className={['icb-child', nightMode ? 'white' : ''].join(' ')}>
          <div>
          <h2 title={baslik}>{baslik.split(" ").length > 9 ? (baslik.split(" ").slice(0, 9).join(" ")+"..")
             : (baslik)}</h2>
          </div>
          <div className={nightMode ? 'soft-white' : ''}>
            <p>{paragraf.split(" ").length > 12 ? 
                (paragraf.split(" ").slice(0, 12).join(" ") + "...") :
                (paragraf)}</p>
          </div>
          <div>
            <span className='addDate'>{eklenmeTarihi}</span>
            <span className='dot'> · </span>
            <span className='readTime'>{okunmaSuresi}</span>
            <span className='dot'> · </span>
            <span className='category' onClick={(e) => {goTag(e, kategori);}}>{kategori}</span>
          </div>
        </div>
    </Link>
  )
}
