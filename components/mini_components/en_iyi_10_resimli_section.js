import Image from 'next/image';

export default function en_iyi_10_resimli({children, baslik, rsm, rsm_alt, pri}) {

    if(!pri) pri = false;

    return (
        <section>
            <h2>{baslik}</h2>
            {/* <div className='image-container'>
                <Image
                src={rsm} alt={rsm_alt}
                width="100"
                height="100"
                layout='responsive'
                objectFit='contain'
                priority={pri}/>
            </div> */}
            <div className='image-container'>
                <Image
                priority={pri}
                src={rsm} alt={rsm_alt}
                fill
                sizes="(max-width: 500px) 100vw, 100vw"
                /* ,den sonrası bu haricinde yapılacaklar: orayı değiştirirsen resim yükleme boyutuda değişiyor */
                className='image-container-image'
                /* style={{borderTopLeftRadius: "4px", borderTopRightRadius: "4px"}} */
                />
            </div>
            
            {/* <img src={rsm} alt={rsm_alt} className='image'/>  */}
           
            {children}
        </section>
    )
}