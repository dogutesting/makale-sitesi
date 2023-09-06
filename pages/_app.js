import 'normalize.css'
import '@/styles/globals.css'

import { NightModeProvider, useNightMode } from '@/context/ContextProvider';
import Header from '@/components/Header';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {

  /* const { darkMode, setDarkMode } = useNightMode();

  const getMode = () => {
      const localStorage_mode = localStorage.getItem("n-mode");
      setDarkMode(JSON.parse(localStorage_mode));
  }

  useEffect(() => {
    getMode();
  }, []); */

  return (
    <div /* className={darkMode ? 'night-mode' : 'light-mode'} */>
      <Header /* darkMode={darkMode} setdarkMode={setdarkMode} *//>
      <div className='container'>
        <div className='side'></div>
        {/* <main className={['main-content', darkMode ? 'link-night' : ''].join(' ')}> */}
        <main className={['main-content']}>
          <NightModeProvider>
            <Component {...pageProps} /* nightMode={darkMode} *//>
          </NightModeProvider>
        </main>
        <div className='side'></div>
      </div>
      <Footer />
    </div>
  )
}
