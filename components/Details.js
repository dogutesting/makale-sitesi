import Link from 'next/link';

export default function Details({nightMode, addDate, readTimeSpan="0", kategori}) {

  const hd = 20;

  return (
    <div className='details'>
        <div>
          <img 
            src={!nightMode ? '/images/details/black-add-date.png' : '/images/details/white-add-date.png'}
            width={hd} height={hd} alt='Eklenme tarihi ikonu'
            title='Eklenme tarihi'/>
          <span className='details_span'>&nbsp;{addDate}</span>
        </div>

        <div>
          <img 
            src={!nightMode ? '/images/details/black-folder.png' : '/images/details/white-folder.png'}
            width={hd} height={hd} alt='Kategori ikonu'
            title='Kategori'/>
          <span className='details_span'>&nbsp;<Link href={`/?kategori=${kategori}`}>{kategori}</Link></span>
        </div>

        <div>
          <img 
              src={!nightMode ? '/images/details/black-time-left.png' : '/images/details/white-time-left.png'}
              width={hd} height={hd} alt='Okuma süresi ikonu'
              title='Okuma süresi'/>
          <span className='details_span'>&nbsp;{readTimeSpan} dk</span>
        </div>
    </div>
  )
}
