import { useAppContext } from '@/context/ContextProvider';
import ClassicArticleBot from "./ClassicArticleBot";
import { useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllArticlesForUser, getDynamicPage, getCurrentTime, getCalculateTimeDifferenceInSeconds } from '@/components/functions/infinityScrollAndGetNewArticle';
import Cookies from 'js-cookie';

export default function ClassicArticleTop ({topCPO, articleConstructor}) {
  const { nightMode, topLevelUrl } = useAppContext();

  //#region INFINITYSCROLL | //! eğer topCPO yok ise farklı bir dosyadan dynamic import mu etsek? Taktım bu bellek israfına.
  const [items, setItems] = useState([]);
  const [loadedPages, setLoadedPages] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  //#endregion INFINITYSCROLL

  //#region InfinityScroll Yüklemeye devam etsin mi?
  const [componentRenderedTime, setComponentRenderedTime] = useState(new Date());
  const [willComponentRender, setWillComponentRender] = useState(true);

  const canWeLoadNext = async () => {
    const isItFast = getCalculateTimeDifferenceInSeconds(componentRenderedTime, getCurrentTime(), 10, false);
    if(isItFast) {
      setWillComponentRender(false);
    }
    else {
      if(items.length === 0) {

        let id = null;
        const accept_list = Cookies.get("cookies_accepted");
        if(accept_list) {
          const accept_json = JSON.parse(accept_list);
          if(accept_json.id) {
            id = Cookies.get("id");
          }
        }

        const response = await getAllArticlesForUser(topLevelUrl, Cookies.get('id'), currentPageValue);
        if(response.penalty === false) {
          setItems([]);
        }
        else {
          setItems(response.data);
          getDynamicPage(pageCount, response.data, setLoadedPages, setPageCount);
          setComponentRenderedTime(getCurrentTime());
        }
      }
      else {
        getDynamicPage(pageCount, items, setLoadedPages, setPageCount);
        setComponentRenderedTime(getCurrentTime());
      }
    }
 }
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
          next={ willComponentRender && canWeLoadNext }
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