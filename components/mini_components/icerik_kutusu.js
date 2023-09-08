import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';

export default function ArticleBox({rsm, rsm_alt, baslik, icerik}) {
  
    const { nightMode, supportWebp } = useAppContext();

    return (
    
    <article className={nightMode ? 'white' : 'black'}>
        <Link href="" className=''>
            <div className='image-container'>
                {
                    supportWebp ? (
                        <Image
                            priority={false}
                            src={rsm} alt={rsm_alt}
                            fill
                            sizes="(max-width: 500px) 100vw, 40vw"
                            className='image-container-image'
                        />
                    ) : (
                        <img
                            loading='lazy'
                            className='us-image'
                            src={rsm}
                            alt={rsm_alt}
                        /> 
                    )
                }
                
            </div>
            <h2>{baslik}</h2>
            <p className={nightMode ? 'white' : 'soft-black'}>   
            {
                icerik.split(" ").length > 7 ? 
                (icerik.split(" ").slice(0, 7).join(" ") + "...") :
                (icerik)
            }
            </p>
        </Link>
    </article>
  )
}
