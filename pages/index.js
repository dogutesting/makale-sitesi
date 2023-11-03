// pages/index.js
import Head from 'next/head';
import Main from '@/components/Main';
import Content from '@/components/mini_components/Content';
import CategoryBox from '@/components/index/CategoryBox';
import Pagination from '@/components/mini_components/Pagination';
import { useAppContext } from '@/context/ContextProvider';
import { connectToDatabase } from '@/lib/mysql';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';


export async function getServerSideProps( { query }) {
    const { page } = query;
    
    const currentPage = page === undefined ? 1 : page;
    const itemsPerPage = 10;
    
    const db = await connectToDatabase();

    try {
        const [results] = await db.execute("SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler LIMIT ? OFFSET ?", [itemsPerPage, currentPage === 1 ? 0 : (currentPage - 1) * 10]);
        const [maxRows] = await db.execute("SELECT COUNT(*) FROM makaleler");
        const totalCount = parseInt(maxRows[0]["COUNT(*)"], 10);
        const [getCats] = await db.execute("SELECT DISTINCT kategori FROM makaleler");
        const cats = getCats.map((item) => item.kategori);
        const paginationCount = Math.ceil(totalCount / itemsPerPage);

        db.end();

        return {
            props: {
                articles: results,
                currentPage,
                paginationCount,
                cats,
            },
        };
    } catch(error) {
        console.log("hata: " + error);
        db.end();
        return {
            notFound: true,
        };
    }
}

export default function index({articles, currentPage, paginationCount, cats}) {

/* export default function index({currentPage}) { */

  const { nightMode } = useAppContext();
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [handleCategory, setHandleCategory] = useState("Tümü");
  
  const router = useRouter();
  const handlePageChange = (newPage) => {
    setCurrentPageState(newPage);

    const goTo = newPage == 1 ? "/" : `?page=${newPage}`;
    router.push(goTo);    
  };
  //ilk yüklenmede sayfayı yönlendir
  useEffect(() => {
    handlePageChange(currentPage);
  }, [])

  const [refArray, setRefArray] = useState([]);

  const addRef = (newRef) => {
    setRefArray((prev) => [...prev, useRef(newRef)])
  };

  /* useEffect(() => {
    const handleScroll = () => {
      // Tarayıcının her kaydırma olayında bu işlev çalışacak

      // refArray içindeki her bir ref nesnesini kontrol edin
      refArrays.current.forEach((ref, index) => {
        const targetElement = ref.current;
        if (!targetElement) return; // Geçersiz ref'i atla

        const elementRect = targetElement.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementBottom = elementRect.bottom;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Yaklaşma koşulu burada kontrol edilir
        if (elementTop >= 0 && elementBottom <= windowHeight) {
          // Element görünür alandadır, tarayıcının ortasına gelmiştir.
          console.log(`Element ${index + 1} görünür alanda.`);
          // Burada yapmak istediğiniz işlemi gerçekleştirebilirsiniz.
        } else {
          // Element görünür alanda değil.
          console.log(`Element ${index + 1} görünür alanda değil.`);
        }
      });
    };

    // Kaydırma olayını dinlemek için bir olay dinleyici ekleyin
    window.addEventListener("scroll", handleScroll);

    // Temizleme işlemi: bileşen kaldırıldığında olay dinleyiciyi kaldırın
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  
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

  useEffect(() => { //page==1&&cat=hepsi => /
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
        <h1>Index.js sayfasındayız.</h1>
        <Main>
            <CategoryBox kategoriler={cats} setHandleCategory={setHandleCategory}/>

            <hr className={['top-split-index', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>
            <Content data={articles} cats="hepsi" currentPage={currentPageState} addRef={addRef}/>

            <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>
            <Pagination max={paginationCount} active={currentPageState} setActive={setCurrentPageState}/>
        </Main>
    </>
  );
}
