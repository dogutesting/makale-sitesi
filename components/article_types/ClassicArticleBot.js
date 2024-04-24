import Main from "../Main";
import HeadHtml from "../HeadHtml";
import Details from "../Details";
import OtherContents from "../OtherContents";
import Ana_gorsel from "../mini_components/AnaGorsel";
import Custom_Waypoint from "../mini_components/CustomWaypoint";
import Ens_all from "../mini_components/ens/EnsAll";
import { useState } from "react";

const ClassicArticleBot = ({currentPageOperations, nightMode, articleConstructor}) => {
  const { baslik, description, keywordsArray, ana_resim,
     url, jsonList, addDate, okunmaSuresi, kategori, metin, jsonContentArray, bitis_metin=null  } = articleConstructor;

    const [bottomChecker, setBottomChecker] = useState(false);

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

          <Ana_gorsel ana_resim={ana_resim} baslik={baslik} isItPri={currentPageOperations.isSetable === false ? true : false}/>
          <p className='summary_text'>{metin}</p>

          <ins className="adsbygoogle"
          style={{display: "block", marginTop: "18px", marginBottom: "18px"}}
          data-ad-client="ca-pub-1092443878501202"
          data-ad-slot="2539634822"
          data-ad-format="auto"
          data-full-width-responsive="true" />
          
          { currentPageOperations && currentPageOperations.currentPageValue !== null 
          && <Custom_Waypoint customKey={"top_wp_"+url} name={"top"} startedUrl={url} currentPageOperations={currentPageOperations}/> }

          <hr className='split'/>

          <Ens_all jsonContentArray={jsonContentArray} sayfaUrl={url}
           kategori={kategori} currentPageOperations={currentPageOperations} setBottomChecker={setBottomChecker}/>

          {bitis_metin && <p className='end_text'>{bitis_metin}</p>}
        </article>

        <OtherContents currentUrl={url} bottomChecker={bottomChecker}/>

        <ins className="adsbygoogle"
        style={{display:"block", marginTop: "18px", marginBottom: "18px"}}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-1092443878501202"
        data-ad-slot="9529399214"/>
    </Main>
  );
};

export default ClassicArticleBot;