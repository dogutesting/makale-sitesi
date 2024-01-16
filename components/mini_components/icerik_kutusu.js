import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';

export default function ArticleBox({supportWebp, rsm, rsm_alt, baslik, icerik, link}) {
  
    const { nightMode} = useAppContext();

    return (
    <article>
        <Link href={link} className=''>
            <div className='image-container'>
                {
                    supportWebp ? (
                        <Image
                            priority={false}
                            src={rsm}
                            alt={rsm_alt}
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
                            height={160}
                        /> 
                    )
                } 
            </div>
            
            {/* 
                -> çok fazla parça olduğu için kötü gözüküyor
                -> eklenme tarihi ve okunma saatini nereden çekeceğim
                -> bunu içerikler çoğaldıktan sonra yapabilirim
            */}
            {/* <div className='details other-details'>
                <div>
                    <Image 
                    src={!nightMode ? '/images/details/black-add-date.png' : '/images/details/white-add-date.png'}
                    width={hd} height={hd} alt='Eklenme Tarihi İkonu'
                    title='Eklenme tarihi'/>
                    <span>11.12.23</span>
                </div>
                <div>
                    <Image 
                    src={!nightMode ? '/images/details/black-time-left.png' : '/images/details/white-time-left.png'}
                    width={hd} height={hd} alt='Eklenme Tarihi İkonu'
                    title='Eklenme tarihi'/>
                    <span>5 dk</span>
                </div>
            </div> */}
           

            <h2>{baslik}</h2>
            <p className={nightMode ? 'soft-white' : 'soft-black'}>   
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
