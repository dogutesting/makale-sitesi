import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

import { useAppContext } from '@/context/ContextProvider';

export default function Header() {

    const { nightMode, setNightMode } = useAppContext();

    const toggleDarkMode = () => {
        localStorage.setItem("n-mode", JSON.stringify(!nightMode));
        setNightMode(prevState => !prevState);
    }

    /* BAŞIM AĞRIDI YA BŞAIMA APREIWRIOEWK
    const support_format_webp = () =>
    {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d')))
    {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    else
    {
    // very old browser like IE 8, canvas not supported
    return false;
    }
    }

    if(support_format_webp()) */
    return (
    <>
        <header>
            <div className='side'>
                
            </div>
            
            <div className='main-content header-main'>
                <div>
                    <Link id='go_index'
                     className={nightMode ? 'white' : 'black'}
                     href="/">enonlar.com</Link>
                </div>
                <div>
                    {/* search bar may come later */}
                </div>
                    {/* Light / Dark */}
                    <Image 
                    className='mode'
                     src={nightMode ? '/images/menu/l_mode.png' : '/images/menu/n_mode.png'}
                     width={25} height={25} alt='Gece-Gündüz Modu İkonu'
                      title='Gece modu'
                      onClick={() => toggleDarkMode()}/>
            </div>
            
            <div className='side'>
                
            </div>
        </header>
    </>
  )
}
