import Image from "next/image"
import { useAppContext } from "@/context/ContextProvider";

export default function Ana_gorsel({ana_resim, baslik}) {
  const { supportWebp } = useAppContext();
  return (
    <div className={ supportWebp ? 'image-container' : ''}>
        { supportWebp ? (
                <Image
                priority={true}
                className='image-container-image'
                src={ana_resim} alt={baslik +" ana görseli"}
                fill
                sizes="(max-width: 500px) 100vw, 100vw"
                />                        
            ) : (
                <img
                loading=''
                className='us-image'
                src={ana_resim}
                alt={"Makale ana görseli"}
                /> 
            )
        }
    </div>
  )
}
