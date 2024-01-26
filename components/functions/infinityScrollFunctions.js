import dynamic from 'next/dynamic';

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
          "city": userInfo.city,
          "currentUrl": currentPageValue
        }
      })
    })
    if(res.ok) {
      const response = await res.json();
      setItems(response.data);
    }
    else {
      //! buradaki hataları mysql'e kaydet
      console.log("%i Hata: " + res.statusText, red);
    }
}



export const fetchData = async (pageCount, items, setLoadedPages, setPageCount) => {
  try {
    /* const nextPageUrl = items[pageCount].url; */
    const nextPageUrl = items[pageCount];
    const PageComponent = dynamic(() => import(`/pages/${nextPageUrl}`));
    setLoadedPages(prevPages => [...prevPages, PageComponent]);
    setPageCount(prevCount => prevCount + 1);
  } catch (error) {
    //!
  }
}