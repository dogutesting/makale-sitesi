import Main from "@/components/Main"
import Head from 'next/head'
import ContentBox from "@/components/index/ContentBox";
import CategoryBox from "@/components/index/CategoryBox";
import { useAppContext } from "@/context/ContextProvider";
import { connectToDatabase } from "@/lib/mysql";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  
  const connection = await connectToDatabase();

  const [rows] = await connection.execute("SELECT * FROM makaleler");
  connection.end();

  return {
      props: {
          rows
      }
  }
}

export default function index({rows}) { 
  const { nightMode } = useAppContext();
  const [handleCategory, setHandleCategory] = useState("Tümü");
  
  let uniqueArray = [];  

  function addUniqueArrToJsonLd(arr) {

    arr.forEach(element => {
      if(!uniqueArray.includes(element.kategori)) {
        uniqueArray = [...uniqueArray, element.kategori];
      }
    }); 
  
    const jsonText = uniqueArray.map(kategori => {
      return `{
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#${kategori}",
                "name": "${kategori}",
                "url": "https://enonlar.com/${kategori}"
              }`;
      });
      
    return`
      {
        "@graph": [
          {
            "@context": "https://schema.org",
            "@graph": [
              ${jsonText}
            ]
          }
        ]
      }
      `;
  }

  const uniqueJSON = addUniqueArrToJsonLd(rows);

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
            dangerouslySetInnerHTML={{__html: uniqueJSON}}
            key="article-jsonld"
        />
      </Head>

      <Main>

        <CategoryBox kategoriler={uniqueArray} setHandleCategory={setHandleCategory}/>

        <hr className={['top-split-index', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

        {rows.filter(row => handleCategory === "Tümü" || row.kategori === handleCategory)
          .map((row, index) => (
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
        ))}
        
      </Main>
    </>
  )
}
