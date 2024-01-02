import { useAppContext } from '@/context/ContextProvider';
import Header from '@/components/Header';
/* import Footer from '@/components/Footer'; */
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Main({children}) {
    
  const { nightMode, setNightMode } = useAppContext();

  return (
    <>
        <div id="toast-container"></div>
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
