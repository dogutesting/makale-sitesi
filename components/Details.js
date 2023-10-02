import Image from 'next/image';

export default function Details({nightMode, addDate, readTimeSpan="0"}) {

  const hd = 20;

  return (
    <div className='details'>
        <div>
        {/* <Image 
            src={!nightMode ? '/images/details/black-added-date.png' : '/images/details/white-added-date.png'}
            width={20} height={20} alt='Eklenme Tarihi İkonu'
            title='Eklenme tarihi'/> */}
        <Image 
          src={!nightMode ? '/images/details/black-add-date.png' : '/images/details/white-add-date.png'}
          width={hd} height={hd} alt='Eklenme Tarihi İkonu'
          title='Eklenme tarihi'/>
        <span className='details_span'>: {addDate}</span>
        </div>
        <div>
        <Image 
            src={!nightMode ? '/images/details/black-time-left.png' : '/images/details/white-time-left.png'}
            width={hd} height={hd} alt='Okuma süresi ikonu'
            title='Okuma süresi'/>
        <span className='details_span'>: {readTimeSpan} dk</span>
        </div>
    </div>
  )
}
