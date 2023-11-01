import Main from "@/components/Main"
import Head from 'next/head'
import ContentBox from "@/components/mini_components/ContentBox";
import CategoryBox from "@/components/index/CategoryBox";
import { useAppContext } from "@/context/ContextProvider";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';


import { connectToDatabase } from "@/lib/mysql";
import InfiniteScroll from "react-infinite-scroll-component";


const kategori = "motosiklet";
export async function getStaticProps() {
  
  const connection = await connectToDatabase();

  try {
    /* const kategori = "motosiklet"; */
    const [rows] = await connection.execute(`SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler WHERE kategori = ?`, [kategori]);
    
    return {
      props: {
        rows,
      },
      revalidate: 60 * 60 * 12,
    };
  } catch (error) {
    return {
      props: {
        rows: [],
      },
    };
  } finally {
    connection.end();
  }
}

export default function index({rows}) {

  /* //! kaç mb veri çektiğini gösteren kod
  const dataSizeInBytes = Buffer.from(JSON.stringify(rows)).length;
  const dataSizeInMB = dataSizeInBytes / (1024 * 1024);
  console.log("mb: " + dataSizeInMB);
  */

  const { nightMode } = useAppContext();

  useEffect(() => {
    document.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });  
  }, []);

  return (
    <>
      <Head>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://enonlar.com/"/>

        <meta property="og:image" content="/logo.png"/>
        <meta property="og:image:height" content="45"/>
        <meta property="og:image:width" content="234"/>
        <meta property="og:description" content="Enonlar, en iyi 10 içerikler, en popüler 10 film, en iyi 10 araba incelemeleri, en çok okunan kitap önerileri ve daha fazlasını sunan bir içerik platformudur. Sizler için seçtiğimiz en ilginç konuları keşfedin!"/>
        
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: `
            <script type="application/ld+json">
            {
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Ana Sayfa",
                  "item": "https://www.example.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "${kategori}",
                  "item": "https://www.example.com/${kategori}"
                }
              ]
            }
            </script>`}}
            key="article-jsonld"
        />
      </Head>

      <Main>

        {
          rows.map((row, index) => (
            <ContentBox
                key={index}
                url={row.url}
                baslik={row.baslik}
                resim={row.resimYolu}
                eklenmeTarihi={row.eklenmeTarihi}
                okunmaSuresi={row.okunmaSuresi + " dk"}
                kategori={row.kategori}
                paragraf={row.paragraf}
                pri={index == 0 ? true : false}
              />
          ))
        }
        
      </Main>
    </>
  )
}
