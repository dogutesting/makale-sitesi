import { useAppContext } from '@/context/ContextProvider';
import ClassicArticleBot from "./ClassicArticleBot";
import { useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllArticlesForUser, getDynamicPage, getCurrentTime, getCalculateTimeDifferenceInSeconds } from '@/components/functions/infinityScrollAndGetNewArticle';

export default function ClassicArticleTop ({topCPO, articleConstructor}) {
  const { nightMode, topLevelUrl, userInfo } = useAppContext();

  //#region INFINITYSCROLL | //! eğer topCPO yok ise farklı bir dosyadan dynamic import mu etsek? Taktım bu bellek israfına.
  const [items, setItems] = useState([]);
  const [loadedPages, setLoadedPages] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if(!topCPO) {
      if(userInfo.id && userInfo.city) {
        //! Buranın düzenlenmesi gerekiyor, her seferinde mysql'den bütün tabloları taraması hoş değil
        //getAllArticlesForUser(topLevelUrl, userInfo, currentPageValue, setItems);
      }
    }
  }, [userInfo]);
  //#endregion INFINITYSCROLL

  //#region InfinityScroll Yüklemeye devam etsin mi?
  /* const [firstComponentRendered, setFirstComponentRendered] = useState(false); */
  const [componentRenderedTime, setComponentRenderedTime] = useState(new Date());
  const [willComponentRender, setWillComponentRender] = useState(true);
  //#endregion

   //#region REACT-WAYPOINT
   const [ancestor, setAncestor] = useState(null);
   const [currentPageValue, setCurrentPageValue] = useState(articleConstructor.url);
 
   useEffect(() => {
     if(!topCPO) {
      window.history.replaceState(window.history.state, "", topLevelUrl+"/"+currentPageValue);
     }
   }, [currentPageValue])
 
   useEffect(() => {
     //waypoint'e ancestor paslanıyor
     if(!topCPO) {
       setAncestor(window);
     }
   }, []);
   //#endregion REACT-WAYPOINT

  return (
    <>
      <ClassicArticleBot
      currentPageOperations = {
        topCPO ? 
          topCPO
          :
          {isSetable: false, currentPageValue, setCurrentPageValue, ancestor}
      }
        nightMode={nightMode} articleConstructor={articleConstructor}>
      </ClassicArticleBot>
      {
        !topCPO && (
        <InfiniteScroll
          scrollThreshold={0.93}
          dataLength={loadedPages.length}
          next={ willComponentRender && (() => {
                const isItFast = getCalculateTimeDifferenceInSeconds(componentRenderedTime, getCurrentTime(), 1, false);
                if(isItFast) {
                  setWillComponentRender(false);
                }
                else {
                  getDynamicPage(pageCount, items, setLoadedPages, setPageCount);
                  setComponentRenderedTime(getCurrentTime());
                }
              }
            )
          }
          //! items.length -> burası mozilla'da hata veriyor.
          hasMore={() => pageCount < items.length}
          >
            {
              loadedPages.map((PageComponent, index) => (
                  <PageComponent key={index} 
                  topCPO={{isSetable: true, currentPageValue, setCurrentPageValue, ancestor}}/>
              ))
            }
        </InfiniteScroll>
        )
        }
    </>
  );
};