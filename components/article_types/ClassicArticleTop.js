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
        getAllArticlesForUser(topLevelUrl, userInfo, currentPageValue, setItems);
        //setItems(['test-2', 'erkeklerin-izlemesi-gereken-en-iyi-10-film']);
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
  
  //#region InfinityScroll Yüklemeye devam etsin mi?
  const [firstComponentRendered, setFirstComponentRendered] = useState(false);
  const [componentRenderedTime, setComponentRenderedTime] = useState(new Date());
  const [willComponentRender, setWillComponentRender] = useState(true);
  const getCurrentTime = () => {
    return new Date();
  }

  function calculateTimeDifferenceInSeconds(date1, date2) {
    const differenceInMilliseconds = Math.abs(date2 - date1);
    const differenceInSeconds = differenceInMilliseconds / 1000;
    const timer = 5.5;
    console.log(differenceInSeconds + " | " + timer);
    console.log("--------------------");
    console.log(differenceInSeconds < timer);
    return differenceInSeconds < timer;
  }
  //#endregion

  useEffect(() => {
    console.log("değişti: ", loadedPages);
  }, [loadedPages.length])

  useEffect(() => {
    console.log("pagecount değişti: " + pageCount);
  }, [pageCount])

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
          dataLength={loadedPages.length}
          next={willComponentRender && (() => {
                console.log("test");
                if(!firstComponentRendered) {
                  console.log("test1");
                  //! loadedPages ve pageCount'ı kontrol ettiğim zaman önce set ediyor ardından sıfırlıyor
                  fetchData(pageCount, items, setLoadedPages, setPageCount);

                  setComponentRenderedTime(getCurrentTime());
                  setFirstComponentRendered(true);
                }
                else {
                  const isFast = calculateTimeDifferenceInSeconds(componentRenderedTime, getCurrentTime());
                  if(isFast) {
                    console.log("test2");
                    setWillComponentRender(false);
                  }
                  else {
                    console.log("test3");
                    fetchData(pageCount, items, setLoadedPages, setPageCount);
                    setFirstComponentRendered(false);
                  }
                }
              }
            )
          }
          //items.length -> burası mozilla'da hata veriyor.
          hasMore={pageCount < items.length}
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