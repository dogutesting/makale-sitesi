import Image from 'next/image';

export default function Details({nightMode, readTimeSpan="0"}) {

    console.log("details içi: " + nightMode + " - " + readTimeSpan);

  return (
    <div className='details'>
        <div>
        <Image 
            src={!nightMode ? '/images/details/black-added-date.png' : '/images/details/white-added-date.png'}
            width={20} height={20} alt='Eklenme Tarihi İkonu'
            title='Eklenme tarihi'/>
        <span>: 11.09.2023</span>
        </div>
        <div>
        <Image 
            src={!nightMode ? '/images/details/black-read-time.png' : '/images/details/white-read-time.png'}
            width={20} height={20} alt='Okuma süresi ikonu'
            title='Okuma süresi'/>
        <span>{readTimeSpan}</span>
        </div>
    </div>
  )
}
