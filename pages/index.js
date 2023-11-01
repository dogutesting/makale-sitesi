import Main from "@/components/Main"
import Head from 'next/head'
import Content from "@/components/mini_components/Content";
import CategoryBox from "@/components/index/CategoryBox";
import { useAppContext } from "@/context/ContextProvider";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Pagination from "@/components/mini_components/Pagination";


import { connectToDatabase } from "@/lib/mysql";


export async function getStaticProps() {
  
  const connection = await connectToDatabase();

  try {
    const [rows] = await connection.execute("SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler LIMIT 10");
    const [kategoriler] = await connection.execute("SELECT kategori FROM makaleler");
    const [maxRows] = await connection.execute("SELECT COUNT(*) FROM makaleler");
    const max = parseInt(maxRows[0]["COUNT(*)"], 10);
    
    return {
      props: {
        rows,
        kategoriler,
        max,
      },
      revalidate: 60 * 60 * 12,
    };
  } catch (error) {
    return {
      props: {
        rows: [],
        kategoriler: [],
        max: 0,
      },
    };
  } finally {
    connection.end();
  }
}

export default function index({rows, kategoriler, max}) {

  /* //! kaç mb veri çektiğini gösteren kod
  const dataSizeInBytes = Buffer.from(JSON.stringify(rows)).length;
  const dataSizeInMB = dataSizeInBytes / (1024 * 1024);
  console.log("mb: " + dataSizeInMB);
  */

  const { nightMode } = useAppContext();
  const [handleCategory, setHandleCategory] = useState("Tümü");
  const [active, setActive] = useState(1);
  const router = useRouter();

  const floorAndDivide = (value) => {
    return value <= 10 ? 0 : Math.ceil(value/10);
  }

  let uniqueArray = [];  
  function addUniqueArrToJsonLd(arr) {

    arr.forEach(element => {
      if(!uniqueArray.includes(element.kategori)) {
        uniqueArray = [...uniqueArray, element.kategori];
        /* console.log(element.kategori); */
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

  const uniqueJSON = addUniqueArrToJsonLd(kategoriler);

  useEffect(() => {
    if(handleCategory != "Tümü") {
      router.push(`/${handleCategory}`);
    }
  }, [handleCategory])

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
    
        <Pagination max={floorAndDivide(max)} active={active} setActive={setActive}/>

        <Content data={rows.slice(0, 5)} kategori={"all"} />
        

        
      </Main>
    </>
  )
}
