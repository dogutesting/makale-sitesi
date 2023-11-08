// pages/index.js
import Head from 'next/head';
import Main from '@/components/Main';
import Content from '@/components/mini_components/Posts';
import CategoryBox from '@/components/index/CategoryBox';
import Pagination from '@/components/mini_components/Pagination';
import { useAppContext } from '@/context/ContextProvider';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';



export async function getServerSideProps( { query }) {
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

export default function index({articles, currentPage, cats, paginationCount, currentCategory}) {

console.log("-----------------------------Başla-----------------");
console.log("Length: " + articles.length + "\n", "currentPage: " + currentPage +"\n", "cats: " + cats +"\n", "paginationCount: " + paginationCount + "\n" + "currentCategory: " +  currentCategory);

  const { nightMode } = useAppContext();
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [handleCategory, setHandleCategory] = useState("Hepsi");
  
  const router = useRouter();

  /* const handlePageChange = (cat, page) => {
    setCurrentPageState(page);

    const goTo = page == 1 ? "/" : `?sayfa=${page}`;
    router.push(goTo);    
  };

  useEffect(() => { //page==1&&cat=hepsi => /
    if(handleCategory != "Hepsi") {
      router.push(`/${handleCategory}`);
    }
  }, [handleCategory]) */
  /* //ilk yüklenmede sayfayı yönlendir
  useEffect(() => {
    handlePageChange(handleCategory, currentPage);
  }, []) */
  
  function addUniqueArrToJsonLd(uniqueArray) {
  
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

  const uniqueJSON = addUniqueArrToJsonLd(cats);

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
            <CategoryBox kategoriler={cats} setHandleCategory={setHandleCategory}/>

            <hr className={['top-split-index', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>
            <Content posts = {articles}/>

            <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>
            {paginationCount != 1 && <Pagination max={paginationCount} active={currentPageState} setActive={setCurrentPageState}/>}
        </Main>
    </>
  );
}
