import { useAppContext } from '@/context/ContextProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Main({children}) {
    
    const { nightMode, setNightMode } = useAppContext();
    const router = useRouter();

    const getMode = () => {
 
        const localStorage_mode = localStorage.getItem("n-mode");
        setNightMode(JSON.parse(localStorage_mode));

        const body = document.body;
        const class1 = 'night-mode';
        /* const class2 = 'light-mode'; */

        if(nightMode && !body.classList.contains(class1)) {
            body.classList.add(class1)
            /* body.classList.remove(class2) */
        }
        else {
            body.classList.remove(class1);
            /* body.classList.add(class2) */
        }

    }
    
    useEffect(() => {
        getMode();

        router.events.on('routeChangeComplete', getMode);

        return() => {
            router.events.off('routeChangeComplete', getMode);
        };
    }, [nightMode, router]);
 
    /*------------------------------------------------------------*/

  return (
    <div>
    {/* <div className={nightMode ? 'night-mode' : 'light-mode'}> */}
        <Header />
        <div className={['container', nightMode ? 'link-night' : ''].join(' ')}>
            <div className='side'></div>
            <div className={'main-content'}>
                {children}
            </div>
            <div className='side'></div>
        </div>
        {/* <Footer /> */}
    </div>
  )
}
