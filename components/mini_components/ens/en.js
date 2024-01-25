import Image from 'next/image';

export default function en_iyi_10_resimli({children, baslik, rsm, rsm_alt, pri, enid, supportWebp, 
    showToast, nightMode, url, sayfaUrl}) {

    const handleCopyClick = async () => {
        try {
            const kopyalanacakText = url+"/"+sayfaUrl+"#"+enid;
            await navigator.clipboard.writeText(kopyalanacakText);
            showToast("Link kopyalandı.");
        } catch (err) {
            //console.log("kopyalanamadı hata: ", err);
        }
    }

    return (
        <>
            <div className='h2-div'>
                <h2 id={enid}>{baslik}</h2>
                <img className={['user-drag-none share-h2', nightMode ? 'share-h2-white' : ''].join(' ')} src='/share_black.png' alt='Başlığı paylaşma ikonu' 
                onClick={() => handleCopyClick()}/>
            </div>
            <div className={ supportWebp ? 'image-container' : ''}>
                { supportWebp ? (
                        <Image
                        priority={pri}
                        className='image-container-image-center'
                        src={rsm} alt={rsm_alt}
                        fill
                        sizes="(max-width: 500px) 100vw, 100vw"
                        />                        
                    ) : (
                        <img
                        loading='lazy'
                        className='us-image image-container-image-center'
                        src={rsm}
                        alt={rsm_alt}
                      /> 
                    )
                }
            </div>
            {children}
        </>
    )
}