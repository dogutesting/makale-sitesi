import { useAppContext } from '@/context/ContextProvider';
import ClassicArticleBot from "./ClassicArticleBot";
import { useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllArticlesForUser, getDynamicPage, getCurrentTime, getCalculateTimeDifferenceInSeconds } from '@/components/functions/infinityScrollAndGetNewArticle';

export default function ClassicArticleTop ({topCPO, baslik, description, keywordsArray, ana_resim, url, jsonList,
     addDate, okunmaSuresi, kategori, metin, jsonContentArray}) {

  const { nightMode, topLevelUrl, userInfo } = useAppContext();

  //#region INFINITYSCROLL | //! eğer topCPO yok ise farklı bir dosyadan dynamic import mu etsek? Taktım bu bellek israfına.
  const [items, setItems] = useState([]);
  const [loadedPages, setLoadedPages] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if(!topCPO) {
      if(userInfo.id && userInfo.city) {
        getAllArticlesForUser(topLevelUrl, userInfo, currentPageValue, setItems);
        //setItems(['test-2', 'erkeklerin-izlemesi-gereken-en-iyi-10-film']);
      }
    }
  }, [userInfo]);
  //#endregion INFINITYSCROLL

  //#region InfinityScroll Yüklemeye devam etsin mi?
  const [firstComponentRendered, setFirstComponentRendered] = useState(false);
  const [componentRenderedTime, setComponentRenderedTime] = useState(new Date());
  const [willComponentRender, setWillComponentRender] = useState(true);
  //#endregion

   //#region REACT-WAYPOINT
   const [ancestor, setAncestor] = useState(null);
   const [currentPageValue, setCurrentPageValue] = useState(url);
 
   useEffect(() => {
     if(!topCPO) {
       window.history.pushState({}, '', topLevelUrl+"/"+currentPageValue);
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
        baslik={baslik} description={description} keywordsArray={keywordsArray}
          ana_resim={ana_resim} url={url} jsonList={jsonList} nightMode={nightMode} addDate={addDate}
            okunmaSuresi={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan}
            kategori={kategori} metin={metin} jsonContentArray={jsonContentArray}>
      </ClassicArticleBot>
      {
        !topCPO && (
        <InfiniteScroll
          scrollThreshold={0.93}
          dataLength={loadedPages.length}
          next={willComponentRender && (() => {
                /* console.log("test"); */
                if(!firstComponentRendered) {
                  getDynamicPage(pageCount, items, setLoadedPages, setPageCount);
                  const currenTime = getCurrentTime();
                  setComponentRenderedTime(currenTime);
                  setFirstComponentRendered(true);
                }
                else {
                  const isFast = getCalculateTimeDifferenceInSeconds(componentRenderedTime, getCurrentTime(), 0, true);
                  if(isFast) {
                    /* console.log("test2"); */
                    setWillComponentRender(false);
                  }
                  else {
                    /* console.log("test3"); */
                    getDynamicPage(pageCount, items, setLoadedPages, setPageCount);
                    setFirstComponentRendered(false);
                  }
                }
              }
            )
          }
          //items.length -> burası mozilla'da hata veriyor.
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