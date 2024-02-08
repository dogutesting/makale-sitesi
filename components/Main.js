import { useAppContext } from '@/context/ContextProvider';
import Header from '@/components/Header';
import { useEffect } from 'react';
/* import Footer from '@/components/Footer'; */

export default function Main({children}) {
    
  const { nightMode, setNightMode } = useAppContext();

  return (
    <>
        <Header nightMode={nightMode} setNightMode={setNightMode}/>
        <div className={['container', nightMode ? 'link-night' : ''].join(' ')}>
            <div className='side'></div>
            <div className={'main-content'}>
                {children}
            </div>
            <div className='side'></div>
        </div>
        {/* <Footer /> */}
    </>
  )
}
