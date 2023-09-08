import { useAppContext } from '@/context/ContextProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';


export default function Main({children}) {
    
    const { nightMode, setNightMode } = useAppContext();

    const getMode = () => {
        const localStorage_mode = localStorage.getItem("n-mode");
        setNightMode(JSON.parse(localStorage_mode));
    }
    
    useEffect(() => {
        getMode();
    }, [nightMode]);
 
    /*------------------------------------------------------------*/

  return (
    <div className={nightMode ? 'night-mode' : 'light-mode'}>
        <Header />
        <div className={['container', nightMode ? 'link-night' : ''].join(' ')}>
            <div className='side'></div>
            <div className={['main-content']}>
                {children}
            </div>
            <div className='side'></div>
        </div>
        <Footer />
    </div>
  )
}
