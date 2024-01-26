import { useAppContext } from '@/context/ContextProvider';
import ClassicArticleBot from "./ClassicArticleBot";
import { useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllArticlesForUser, fetchData } from '@/components/functions/infinityScrollFunctions';


export default function ClassicArticleTop ({topCPO, baslik, description, keywordsArray, ana_resim, url, jsonList,
     addDate, okunmaSuresi, kategori, metin, jsonContentArray}) {

  const { nightMode, url: topLevelUrl, userInfo } = useAppContext();

  //#region INFINITYSCROLL | //! eğer topCPO yok ise farklı bir dosyadan dynamic import mu etsek? Taktım bu bellek israfına.
  const [items, setItems] = useState([]);
  const [loadedPages, setLoadedPages] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if(!topCPO) {
      if(userInfo.id && userInfo.city) {
        //getAllArticlesForUser();
        setItems(['test-2', 'erkeklerin-izlemesi-gereken-en-iyi-10-film']);
      }
    }
  }, [userInfo]);
  //#endregion INFINITYSCROLL

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
          {isSetable: false, currentPageValue: currentPageValue, setCurrentPageValue, ancestor}
      }
        baslik={baslik} description={description} keywordsArray={keywordsArray}
          ana_resim={ana_resim} url={url} jsonList={jsonList} nightMode={nightMode} addDate={addDate}
            okunmaSuresi={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan}
            kategori={kategori} metin={metin} jsonContentArray={jsonContentArray}>
      </ClassicArticleBot>

      {
        !topCPO && (
        <InfiniteScroll
          dataLength={loadedPages.length}
          next={() => fetchData(pageCount, items, setLoadedPages, setPageCount)}
          hasMore={pageCount < items.length}
          loader={<h4>Loading...</h4>}>
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