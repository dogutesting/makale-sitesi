import 'normalize.css'
import '@/styles/globals.css'

import { Wrapper } from '@/context/ContextProvider';
import Head from 'next/head';

export default function App({ Component, pageProps}) {

  function addMainJsonLd() {
    return {
      __html: `[
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "Enonlar",
          "url": "https://enonlar.com"
        },
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Enonlar",
          "description": "Enonlar, en iyi 10 içerikler, en popüler 10 filmler, en iyi 10 araba incelemeleri, en çok okunan kitap önerileri ve daha fazlasını sunan bir içerik platformudur. Sizler için seçtiğimiz en ilginç konuları keşfedin!",
          "url": "https://enonlar.com",
          "email": "info@enonlar.com",
          "sameAs": [
            "https://www.enonlar.com"
          ],
          "logo": {
            "@type": "ImageObject",
            "url": "https://enonlar.com/enonlar_logo_default.png"
          }
        }
      ]
      `,
    };
  }

  return (
    <Wrapper>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta httpEquiv="Content-type" content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#603cba"/>
        <meta name="apple-mobile-web-app-title" content="En Onlar"/>
        <meta name="application-name" content="En Onlar"/>
        <meta name="msapplication-TileColor" content="#603cba"/>
        <meta name="theme-color" content="#ffffff"/>

        <meta property="og:locale" content="tr_TR"/>
        <meta property="og:site_name" content="enonlar"/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addMainJsonLd()}
            key="main-jsonld"
          />
      </Head>
      <div id="toast-container"></div>
      <Component {...pageProps} />
    </Wrapper>
  )
}
