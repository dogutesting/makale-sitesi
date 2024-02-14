import dynamic from 'next/dynamic';

//#region //* Sonsuz akış için tek seferlik içerik çekici
export const getAllArticlesForUser = async (topLevelUrl, userInfo, currentPageValue, setItems) => {
    const res = await fetch(topLevelUrl+"/api/userKey", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "req": "guil",
        "data": {
          "id": userInfo.id,
          "ci": userInfo.city,
          "currentUrl": currentPageValue
          /* "date": getCurrentTime() */
        }
      })
    })
    if(res.ok) {
      const response = await res.json();
      setItems(response.data);
    }
    else {
      //! buradaki hataları mysql'e kaydet
      /* console.log("%i Hata: " + res.statusText, red); */
      fetch(topLevelUrl+"/api/error", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            "type": "other",
            "location": "getAllArticlesForUser",
            "error": res.status + " - " + res.statusText  
          })
        }
      ).catch(error => {
        //
      }) 
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
export const getOtherContentArticles = async (topLevelUrl, userInfo, currentUrl, isItMobile) => {
  const res = await fetch(topLevelUrl+"/api/userKey", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "req": "gui",
      "data": {
        "id": userInfo.id,
        "ci": userInfo.city,
        "currentUrl": currentUrl,
        "isItMobile": isItMobile
      }
    })
  });
  if(res.ok) {
    const response = await res.json();
    if(response.penalty) {
      return false;
    }
    return response.data;
  }
  else {
    /* console.log("else kısmındayız"); */
    return false;
  }
}
//#endregion