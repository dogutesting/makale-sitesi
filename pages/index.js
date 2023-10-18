import Main from "@/components/Main"
import Head from 'next/head'
import ContentBox from "@/components/index/ContentBox";
import CategoryBox from "@/components/index/CategoryBox";
import { useAppContext } from "@/context/ContextProvider";
import { connectToDatabase } from "@/lib/mysql";


export async function getServerSideProps(context) {
    
  /* const { params } = context;
  const { slug } = params; */
  
  const connection = await connectToDatabase();
  
  //const [rows] = await connection.execute("SELECT url FROM makaleler");
  //const isSlugInDatabase = rows.some((row) => row.url === slug);
  //! daha performanslı diye alttaki kod ile değiştirdim.

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

  let uniqueArray = [];

  function addUniqueArrToJsonLd(arr) {
    
    arr.forEach(element => {
      if(!uniqueArray.includes(element.kategori)) {
        uniqueArray = [...uniqueArray, element.kategori];
      }
    }); 
  
    const jsonText = uniqueArray.map((kategori, index) => {
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
            dangerouslySetInnerHTML={{__html: addUniqueArrToJsonLd(rows)}}
            key="article-jsonld"
        />
      </Head>

      <Main>

        <CategoryBox kategoriler={uniqueArray}/>

        <hr className={['top-split-index', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

        {
          rows.map((row, index) => (
            <ContentBox
            key={index}
            url={row.url}
            baslik={row.baslik}
            resim={row.resimYolu}
            eklenmeTarihi={row.eklenmeTarihi}
            okunmaSuresi={row.okunmaSuresi+" dk"}
            kategori={row.kategori}
            paragraf={row.paragraf}
            />    
          ))
        }

        
      </Main>
    </>
  )
}
