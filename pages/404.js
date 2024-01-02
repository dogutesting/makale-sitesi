import Head from "next/head"
import nf_styles from '@/styles/not_found.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

//! Öneri
//! (Örneğin: neil gibson filmleri -> böyle bir sayfa yok 404 yönlendirildi -> 404'de neil-gibson anahtar kelimesi içeren url'lere bakılıp, en iyi 10 neil gibson kitabı sunulabilir vs vs.)

export default function ErrorPage() {
  const [nightMode, setNightMode] = useState(false);
  const router = useRouter();

  const getDateAndTime = () => {
    const now = new Date();
    const saat = now.getHours().toString().padStart(2, '0');
    const dakika = now.getMinutes().toString().padStart(2, '0');
    const gun = now.getDate().toString().padStart(2, '0');
    const ay = (now.getMonth() + 1).toString().padStart(2, '0'); // Ay 0'dan başladığı için +1 ekliyoruz.
    const yil = now.getFullYear();
    const tarihVeSaat = `${saat}:${dakika}-${gun}.${ay}.${yil}`;
    //setCurrentDate(tarihVeSaat);
    return tarihVeSaat;
  }

  const recordNotFound = (url, date, id) => {    
    fetch("/api/error", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "type": "404",
          "location": url,
          "date": date,
          "uuid": id  
        })
      }
    ) 
  }

  const getMode = () => {
    const localStorage_mode = localStorage.getItem("n-mode");
    console.log(localStorage_mode);
    setNightMode(JSON.parse(localStorage_mode));

    const body = document.body;
    const class1 = 'night-mode';

    if(nightMode) {
        body.classList.add(class1)
    }
    else {
        body.classList.remove(class1);
    }
  }

  useEffect(() => {
    getMode();
    const { asPath } = router;
    recordNotFound(asPath, getDateAndTime(), Cookies.get("id"));
  }, []);


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