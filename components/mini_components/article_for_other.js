import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function ArticleForOther({rsm, rsm_alt, baslik, icerik, nightMode}) {
  
    /* Bu içeriğe <Link eklemek lazım ama nasıl? */

    console.log("check stat ->", nightMode);

    return (
    
    <article>
        <Link href="" className=''>
            <div className='image-container'>
                <Image
                priority={false}
                src={rsm} alt={rsm_alt}
                fill
                sizes="(max-width: 500px) 100vw, 40vw"
                className='image-container-image'
                />
            </div>
            <h2>{baslik}</h2>
            <p>   
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
