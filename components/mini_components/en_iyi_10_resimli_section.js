import Image from 'next/image';

export default function en_iyi_10_resimli({children, baslik, rsm, rsm_alt, pri}) {

    if(!pri) pri = false;

    return (
        <section>
            <h2>{baslik}</h2>
            <div className='image-container'>
                <Image
                priority={pri}
                src={rsm} alt={rsm_alt}
                fill
                sizes="(max-width: 500px) 100vw, 100vw"
                className='image-container-image'
                />
                
            </div>
            {children}
        </section>
    )
}