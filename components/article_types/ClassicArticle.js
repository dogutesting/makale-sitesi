import Main from "../Main";
import HeadHtml from "../HeadHtml";
import Details from "../Details";
import OtherContents from "../OtherContents";
import Ana_gorsel from "../mini_components/ana_gorsel";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

import Custom_Waypoint from "../mini_components/CustomWaypoint";
import Ens_all from "../mini_components/ens/ens_all";

const ClassicArticle = ({currentPageOperations, baslik, description, keywordsArray, ana_resim, url, jsonList,
     nightMode, addDate, okunmaSuresi, kategori, metin, jsonContentArray}) => {

  useEffect(() => {
    console.log("CLASSICARTICLE RENDER EDİLDİ.");
  }, [])

  return (
    <Main>
        <HeadHtml 
        baslik={baslik}
        description={description}
        keywords={keywordsArray.join(", ")}
        ana_resim={ana_resim}
        url={url}
        jsonListHtml={jsonList.html}
        />

        <article className='main-article'>
          <h1>{baslik}</h1>
          <Details nightMode={nightMode} addDate={addDate} readTimeSpan={okunmaSuresi} kategori={kategori}/>
          
          <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

          <Ana_gorsel ana_resim={ana_resim} baslik={baslik}/>
          <p className='summary_text'>{metin}</p>
          
          { currentPageOperations && currentPageOperations.currentPageValue !== null && <Custom_Waypoint name={"top"} startedUrl={url} currentPageOperations={currentPageOperations}/> }
          {/* //! eğer currentPageOperations.currentPageValue eşitse boşa bu durumda currentPage'i yine set etsin ama database tablosuna kayıt eklemesin */}

          <hr className='split'/>

          <Ens_all jsonContentArray={jsonContentArray} sayfaUrl={url}
           kategori={kategori} currentPageOperations={currentPageOperations}/>
        </article>

        {/* <OtherContents/> */}
    </Main>
  );
};

export default ClassicArticle;