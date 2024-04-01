import dynamic from 'next/dynamic';

//#region //* Sonsuz akış için tek seferlik içerik çekici
export const getAllArticlesForUser = async (topLevelUrl, id, currentPageValue) => {
    const res = await fetch(topLevelUrl+"/api/userKey", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "req": "guil",
        "data": {
          "id": id,
          "currentUrl": currentPageValue
          /* "date": getCurrentTime() */
        }
      })
    })
    if(res.ok) {
      const response = await res.json();
      return {penalty: response.penalty, data: response.data};
      //return response;
    }
    else {
      return false;
    }
}
//* Sonsuz akış için dinamik sayfa yükleyici
export const getDynamicPage = async (pageCount, items, setLoadedPages, setPageCount) => {
  try {
    /* const nextPageUrl = items[pageCount].url; */
    const nextPageUrl = items[pageCount];
    const PageComponent = dynamic(() => import(`/pages/${nextPageUrl}`));
    setLoadedPages(prevPages => [...prevPages, PageComponent]);
    setPageCount(prevCount => prevCount + 1);
  } catch (error) {
    //Hata.. 
  }
}

//* Sonsuz sayfayı boş yere yüklememek için kodlar
export const getCurrentTime = () => {
  return new Date();
}

export function getCalculateTimeDifferenceInSeconds(date1, date2, timer=5.5, log=false) {
  const differenceInMilliseconds = Math.abs(date2 - date1);
  const differenceInSeconds = differenceInMilliseconds / 1000;
  /* const timer = 5.5; */
  if(log) {
    console.log(differenceInSeconds + " | " + timer);
    console.log("--------------------");
    console.log(differenceInSeconds < timer);
  }
  return differenceInSeconds < timer;
}
//#endregion

//#region //* Sayfa altındaki öneri kutuları (OtherContents)
export const getOtherContentArticles = async (topLevelUrl, id, currentUrl, isItMobile) => {
  const res = await fetch(topLevelUrl+"/api/userKey", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "req": "gui",
      "data": {
        "id": id,
        "currentUrl": currentUrl,
        "isItMobile": isItMobile
      }
    })
  });
  if(res.ok) {
    const response = await res.json();
    return {penalty: response.penalty, data: response.data};
    //return response;
  }
  else {
    /* console.log("else kısmındayız"); */
    return false;
  }
}
//#endregion