import 'normalize.css'
import '@/styles/globals.css'

import { Wrapper } from '@/context/ContextProvider';
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  /*
{
  "@context": "http://schema.org",
  "@type": "WebSite",
  "url": "https://onedio.com",
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": "https://onedio.com/ara/haber/{queryKeyword}",
      "query-input": "required name=queryKeyword"
    }
  ]
}
{
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Onedio",
  "url": "https://onedio.com",
  "sameAs": [
    "onedio.com",
    "https://www.facebook.com/onediocom",
    "https://twitter.com/onediocom",
    "https://www.instagram.com/onediocom/",
    "https://youtube.com/onediotube",
    "https://news.google.com/publications/CAAqBwgKMIGmrAsw_rDEAw?ceid=TR:tr&oc=3&hl=tr&gl=TR",
    "https://tr.wikipedia.org/wiki/Onedio"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ankara",
    "addressRegion": "TR",
    "postalCode": "06510",
    "streetAddress": "Mustafa Kemal Mah. Dumlupınar Bulv. No:280 (Yeni ODTÜ Teknokent Binası) Kat:4 No:2 06530 Çankaya/Ankara"
  },
  "telephone": "0 312 969 33 96",
  "email": "onedio@onedio.com",
  "logo": "https://onedio.com/images/logo/onedio-new2x-new.png"
}

  */

  function addMainJsonLd(m_baslik, yazar, eklenmeTarihi="2023-09-12T17:20:00+03:00", m_description, ilk_paragraf, m_resim) {
    return {
      __html: `[
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "Enonlar",
          "url": "https://enonlar.com",
        },
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Enonlar",
          "description": "Enonlar, en iyi 10 içerikler, en popüler 10 filmler, en iyi 10 araba incelemeleri, en çok okunan kitap önerileri ve daha fazlasını sunan bir içerik platformudur. Sizler için seçtiğimiz en ilginç konuları keşfedin!",
          "url": "https://enonlar.com",
          "email": "info@enonlar.com",
          "sameAs": [
            "https://www.enonlar.com",
          ],
          "logo": {
            "@type": "ImageObject",
            "url": "https://enonlar.com/images/logo/logo.png"
          }
        }
      ]
      `,
    };
  }

  /* 
  type WebSite
  "potentialAction": [
            {
              "@type": "SearchAction",
              "target": "https://enonlar.com/ara/haber/{queryKeyword}",
              "query-input": "required name=queryKeyword"
            }
          ]
  _______________________________________________________________________
  type organization
"sameAs": [ sadece linkler olabilir
            "enonlar.com",
            "https://www.facebook.com/enonlar",
            "https://twitter.com/enonlar",
            "https://www.instagram.com/enonlar/",
            "https://youtube.com/enonlar",
            "https://tr.wikipedia.org/wiki/Onedio"
          ],

  */

  return (
    <Wrapper>
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="tr_TR"/>
        <meta property="og:site_name" content="enonlar"/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addMainJsonLd()}
            key="main-jsonld"
          />
      </Head>
      <Component {...pageProps} />
    </Wrapper>
  )
}
