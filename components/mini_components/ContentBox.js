import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppContext } from "@/context/ContextProvider";

export default function ContentBox({url, baslik, resim, eklenmeTarihi, okunmaSuresi, kategori, paragraf, pri}) {
  const { nightMode, supportWebp } = useAppContext();

  const router = useRouter();
  const goTag = (kategori) => {
    const url = `/${kategori}`;
    router.push(url);
  }

  return (
    <Link className={['index-content-box', nightMode ? 'icb-night' : 'icb-light'].join(' ')} href={url}>
        <div className='icb-child image-container'>
                {
                    supportWebp ? (
                        <Image
                            priority={pri}
                            src={resim} alt={"rsm_alt"}
                            fill
                            sizes="(max-width: 500px) 100vw, 40vw"
                            className='index-image'
                        />
                    ) : (
                        <img
                            loading='lazy'
                            className='us-image'
                            src={resim}
                            alt={"rsm_alt"}
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
            <span className='category' onClick={(e) => {goTag(kategori); e.preventDefault();}}>{kategori}</span>
          </div>
        </div>

        

    </Link>
  )
}
