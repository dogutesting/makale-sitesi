import Link from 'next/link';
import Image from 'next/image';

export default function Header({darkMode, setdarkMode}) {
    const toggleDarkMode = () => {
        localStorage.setItem("n-mode", JSON.stringify(!darkMode));
        setdarkMode(prevState => !prevState);
    }

    return (
    <>
        <header>
            <div className='side'>
                
            </div>
            
            <div className='main-content header-main'>
                <div>
                    <Link id='go_index'
                     className={darkMode ? 'white' : 'black'}
                     href="/">enonlar.com</Link>
                </div>
                <div>
                    {/* search bar may come later */}
                </div>
                    {/* Light / Dark */}
                    <Image 
                    className='mode'
                     src={darkMode ? '/images/menu/l_mode.png' : '/images/menu/n_mode.png'}
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
