import Image from "next/image"

export default function Ana_gorsel({supportWebp, ana_resim}) {
  return (
    <div className={ supportWebp ? 'image-container' : ''}>
        { supportWebp ? (
                <Image
                priority={true}
                className='image-container-image'
                src={ana_resim} alt={"Makale ana görseli"}
                fill
                sizes="(max-width: 500px) 100vw, 100vw"
                />                        
            ) : (
                <img
                loading='lazy'
                className='us-image'
                src={ana_resim}
                alt={"Makale ana görseli"}
                /> 
            )
        }
    </div>
  )
}
