import 'normalize.css'
import '@/styles/globals.css'
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {

  const [darkMode, setdarkMode] = useState(null);

  const getMode = () => {
      const localStorage_mode = localStorage.getItem("n-mode");
      setdarkMode(JSON.parse(localStorage_mode));
  }

  useEffect(() => {
    getMode();
  }, []);

  return (
    <div className={darkMode ? 'night-mode' : 'light-mode'}>
      <Header darkMode={darkMode} setdarkMode={setdarkMode}/>
      <div className='container'>
        <div className='side'></div>
        <main className={['main-content', darkMode ? 'link-night' : ''].join(' ')}>
          <Component {...pageProps} nightMode={darkMode}/>
        </main>
        <div className='side'></div>
      </div>
      <Footer />
    </div>
  )
}
