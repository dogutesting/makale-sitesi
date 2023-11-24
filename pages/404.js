import Head from "next/head"
import nf_styles from '@/styles/not_found.module.css';
import { useEffect, useState } from 'react';

export default function ErrorPage() {
  //const { nightMode, setNightMode } = useAppContext();
  const [nightMode, setNightMode] = useState(false);

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
})

  return (
    <>
      <Head>
        <meta property="og:title" content="404 Sayfa Bulunamadı" />
        <meta property="og:description" content="Aradığınız sayfa bulunamadı. Lütfen doğru URL'yi kontrol edin." />
        <meta property="og:image" content="https://enonlar.com/enonlar_logo_default.png" />
        
        <meta name="twitter:title" content="404 Sayfa Bulunamadı" />
        <meta name="twitter:description" content="Aradığınız sayfa bulunamadı. Lütfen doğru URL'yi kontrol edin." />
        <meta name="twitter:image" content="https://enonlar.com/enonlar_logo_default.png" />
      </Head>

      <div className={nf_styles.main_error}>
        <img src="/dedektif_ellad.png" alt="404 robotu" height={200} width={200}/>
        <h1 className={nf_styles.hi}>404</h1>
        <p className={nf_styles.pi}>Böyle bir sayfa yok. Eğer burası yok ise olmayan bir yere nasıl gelebildin? Bunu asla bilemeyeceğiz..</p>
        <p className={nf_styles.pi}>En iyisi ana sayfaya gitmek.</p>
        <a href="/" title="Ana sayfa" className={[nf_styles.button_go_main_page, !nightMode ? nf_styles.button_light : nf_styles.button_night].join(' ')}>Ana Sayfa</a>
      </div>
    </>
  )
}
1