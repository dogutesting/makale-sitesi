import Main from "@/components/Main"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {

  function addArticleJsonLd(m_baslik, yazar, eklenmeTarihi="2023-09-12T17:20:00+03:00", m_description, ilk_paragraf, m_resim) {
    return {
      __html: `
      {
        "@graph": [
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Dizi & Film",
                "url": "https://enonlar.com/film"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Dizi & Film",
                "url": "https://enonlar.com/dizi"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Spor",
                "url": "https://enonlar.com/spor"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Test",
                "url": "https://enonlar.com/test"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Video",
                "url": "https://enonlar.com/video"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Yemek",
                "url": "https://enonlar.com/yemek"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Yaşam",
                "url": "https://enonlar.com/yasam"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Seyahat",
                "url": "https://enonlar.com/seyahat"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Sağlık",
                "url": "https://enonlar.com/saglik"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Vitrin",
                "url": "https://enonlar.com/vitrin"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Ekonomi",
                "url": "https://enonlar.com/ekonomi"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Finans",
                "url": "https://enonlar.com/finans"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "TV",
                "url": "https://enonlar.com/tv"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Gaming",
                "url": "https://enonlar.com/gaming"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Teknoloji",
                "url": "https://enonlar.com/teknoloji"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Nasıl yapılır?",
                "url": "https://enonlar.com/nasil-yapilir"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Eğitim",
                "url": "https://enonlar.com/egitim"
              },
            ]
          }
        ]
      }
      `,
    };
  }

  return (
    <>
      <Head>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.enonlar.com/"/>
      </Head>

      <Main>
        <Link href="/erkeklerin-izlemesi-gereken-en-iyi-10-film">Tıkla</Link>
        <h1 style={{textAlign: "center"}}>Ana sayfa henüz tasarlanmadığı için rastgele bir sayfaya yönlendir.</h1>
        <hr></hr>
      
      </Main>
    </>
  )
}
