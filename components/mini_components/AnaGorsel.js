import React from "react";
import Image from "next/image"
import { useAppContext } from "@/context/ContextProvider";

export default function Ana_gorsel({ana_resim, baslik, isItPri}) {
  const { supportWebp } = useAppContext();
  return (
    <div className={ supportWebp ? 'image-container' : ''}>
        { supportWebp ? (
                <Image
                priority={isItPri}
                className='image-container-image-top'
                src={ana_resim} alt={baslik +" ana görseli"}
                fill
                sizes="(max-width: 500px) 100vw, 100vw"
                />                        
            ) : (
                <img
                loading={isItPri ? 'eager' : 'lazy'}
                className='us-image image-container-image-top'
                src={ana_resim}
                alt={baslik + " ana görseli"}
                /> 
            )
        }
    </div>
  )
}