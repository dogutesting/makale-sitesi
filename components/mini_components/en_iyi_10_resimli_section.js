import Image from 'next/image';
import { useAppContext } from '@/context/ContextProvider';


export default function en_iyi_10_resimli({children, baslik, rsm, rsm_alt, pri}) {

    if(!pri) pri = false;

    const { supportWebp } = useAppContext();

    return (
        <section>
            <h2>{baslik}</h2>
            <div className={ supportWebp ? 'image-container' : ''}>
                { supportWebp ? (
                        <Image
                        priority={pri}
                        className='image-container-image'
                        src={rsm} alt={rsm_alt}
                        fill
                        sizes="(max-width: 500px) 100vw, 100vw"
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
            {children}
        </section>
    )
}