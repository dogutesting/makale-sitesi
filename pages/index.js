// pages/index.js
import Head from 'next/head';
import Main from '@/components/Main';
import Posts from '@/components/mini_components/Posts';
import CategoryBox from '@/components/index/CategoryBox';
import Pagination from '@/components/mini_components/Pagination';
import { useAppContext } from '@/context/ContextProvider';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
/* import Script from 'next/script'; */

export async function getServerSideProps( { query, req, res }) {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=43200, stale-while-revalidate=10'
    )

    const { kategori, sayfa } = query;
    
    const currentCategory = kategori === undefined ? 'hepsi' : kategori;
    const currentPage = sayfa === undefined ? 1 : sayfa;

    try {
      const apiUrl = `http://localhost:3000/api/getArticle?kategori=${currentCategory}&sayfa=${currentPage}`;
      const data = await fetch(apiUrl).then(response => response.json());
      
      if(data.paginationCount == 0) {
        return {
          redirect: {
            destination: '/404',
            permanent: false,
          },
        }
      }
      
      return {
        props: {
          articles: data.articles,
          currentPage,
          cats: data.cats,
          paginationCount: data.paginationCount,
          currentCategory: data.currentCategory,
          currentPageOffset: data.currentPageOffset
        }
      }
    } catch(error) {
      return {
        props: {
          notFound: true,
        }
      }
    }
}

export default function Index({articles, currentPage, cats, paginationCount, currentCategory}) {

  const { nightMode, supportWebp } = useAppContext();
  const router = useRouter();

  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [categories, setCategories] = useState(cats);
  const [handleCategory, setHandleCategory] = useState(currentCategory);

  function newCategoriesSequence (kategoriler, buttonText) {    
    const data = [...kategoriler];
    const buttonTextIndex = data.indexOf(buttonText);
    
    if(buttonTextIndex > 0) {
      data.splice(buttonTextIndex, 1);
      data.unshift(buttonText);
    }
    setCategories(data);
  }

  //Head için LD+JSON
  function addUniqueArrToJsonLd(uniqueArray) {
  
    const jsonText = uniqueArray.map(kategori => {
      return `{
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#${kategori}",
                "name": "${kategori}",
                "url": "https://enonlar.com/?kategori=${kategori}"
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
  const uniqueJSON = addUniqueArrToJsonLd(cats);
  //Head için LD+JSON

  useEffect(() => {
    setCurrentPageState(1);
    //newCategoriesSequence(cats, currentCategory);
  }, [currentCategory]);


  useEffect(() => {
    if(articles.length === 0) {
      router.push("/404");
    }
  }, [articles])

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      //console.log(err);
    }
  }, []);
  
  return (
    <>
        <Head>
            <title>En Onlar</title>
            <meta name="description" content="Enonlar, en iyi 10 içerikler, en popüler 10 film, en iyi 10 araba incelemeleri, en çok okunan kitap önerileri ve daha fazlasını sunan bir içerik platformudur. Sizler için seçtiğimiz en ilginç konuları keşfedin!"/>
            <meta name="robots" content="index, follow"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://enonlar.com/"/>
            <meta property="og:image" content="/logo.png"/>
            <meta property="og:image:height" content="45"/>
            <meta property="og:image:width" content="234"/>
            <meta property="og:description" content="Enonlar, en iyi 10 içerikler, en popüler 10 film, en iyi 10 araba incelemeleri, en çok okunan kitap önerileri ve daha fazlasını sunan bir içerik platformudur. Sizler için seçtiğimiz en ilginç konuları keşfedin!"/>
            
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="En onlar" />
            <meta name="twitter:description" content="Enonlar, en iyi 10 içerikler, en popüler 10 film, en iyi 10 araba incelemeleri, en çok okunan kitap önerileri ve daha fazlasını sunan bir içerik platformudur. Sizler için seçtiğimiz en ilginç konuları keşfedin!" />
            <meta name="twitter:image" content="https://enonlar.com/enonlar_logo_default.png" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: uniqueJSON}}
                key="article-jsonld"
            />
            
        </Head>
        
        <Main>
            <CategoryBox  router={router}
                          nightMode={nightMode}
                          kategoriler={categories}
                          setHandleCategory={setHandleCategory}
                          handleCategory={handleCategory}
                          newCategoriesSequence={newCategoriesSequence}/>

            <hr className={['top-split-index', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

            <ins className="adsbygoogle"
            style={{display: "block"}}
            data-ad-client="ca-pub-1092443878501202"
            data-ad-slot="6124506676"
            data-ad-format="auto"
            data-full-width-responsive="true"/>

            <Posts posts={articles} nightMode={nightMode} supportWebp={supportWebp} setHandleCategory={setHandleCategory}/>

            <hr className={['top_split bot_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>
            {paginationCount > 1 && <Pagination max={paginationCount} active={currentPageState} setActive={setCurrentPageState} category={handleCategory}/>}

            <ins className="adsbygoogle"
            style={{display: "block", marginTop: "20px"}}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-1092443878501202"
            data-ad-slot="8370546005"/>
        </Main>
    </>
  );
}
