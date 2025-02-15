import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {

  /*
   Aşağıdaki scriptlerden 
   -> kişisel reklam
   -> page anality sadece kullanıcı izin verdi ise aktif hale getirilecek
  */

  return (
    <Html lang="tr">
      <Head>
        
        <Script 
          crossOrigin="anonymous"
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1092443878501202'
        />

        <Script 
          src='https://www.googletagmanager.com/gtag/js?id=G-KMK6MYYHS2'
          strategy='beforeInteractive'  
        />

        <Script 
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KMK6MYYHS2');
            `
          }}
        />

      </Head>
        
      <body> 
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
