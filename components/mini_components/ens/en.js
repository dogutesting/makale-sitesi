import Image from 'next/image';

export default function en_iyi_10_resimli({children, baslik, rsm, rsm_alt, pri, enid, supportWebp}) {
    //! sayfa-icin-en
    return (
        <>
            <h2 id={enid}>{baslik}</h2>
            <div className={ supportWebp ? 'image-container' : ''}>
                { supportWebp ? (
                        <Image
                        priority={pri}
                        className='image-container-image'
                        src={rsm} alt={rsm_alt}
                        fill
                        sizes="(max-width: 500px) 100vw, 100vw"
                        /* max-width: 500px ise 500px yükle | sideları topla orta kaç px ise onu ver */
                        />                        
                    ) : (
                        <img
                        loading='lazy'
                        className='us-image'
                        src={rsm}
                        alt={rsm_alt}
                        /* style={objectFit: "cover"} */
                      /> 
                    )
                }
            </div>
            {children}
        </>
    )
}