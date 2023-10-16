import Link from 'next/link';

import { useAppContext } from '@/context/ContextProvider';

export default function Header() {

    const { nightMode, setNightMode, siteUrl } = useAppContext();

    const toggleDarkMode = () => {
        localStorage.setItem("n-mode", JSON.stringify(!nightMode));
        setNightMode(prevState => !prevState);
    }

    return (
    <>
        <header>
            <div className='side'>
                
            </div>
            
            <div className='main-content header-main'>
                <div>
                     <Link id='go_index' href="/">
                        <img className='logo' src={nightMode ? '/logo_white.png' : '/logo.png'} alt='logo'/>
                     </Link>
                </div>
                <div>
                    {/* search bar may come later */}
                </div>
                    {/* Light / Dark */}
                    {/* Webp'ye çevirdiği için webp desteklenmeyen cihazlarda çalışmıyor olabilir. */}
                    {/* <Image 
                    className='mode'
                     src={nightMode ? '/images/menu/l_mode.png' : '/images/menu/n_mode.png'}
                     width={25} height={25} alt='Gece-Gündüz Modu İkonu'
                      title='Gece modu'
                      onClick={() => toggleDarkMode()}/> */}
                      <img className='mode' src={nightMode ? '/images/menu/l_mode.png' : '/images/menu/n_mode.png'}
                       alt='Gece-Gündüz modu ikonu'
                       onClick={() => toggleDarkMode()}/>
            </div>
            
            <div className='side'>
                
            </div>
        </header>
    </>
  )
}
