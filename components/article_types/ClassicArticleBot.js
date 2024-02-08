import Main from "../Main";
import HeadHtml from "../HeadHtml";
import Details from "../Details";
import OtherContents from "../OtherContents";
import Ana_gorsel from "../mini_components/ana_gorsel";
import Custom_Waypoint from "../mini_components/CustomWaypoint";
import Ens_all from "../mini_components/ens/ens_all";

const ClassicArticleBot = ({currentPageOperations, nightMode, articleConstructor}) => {
  const { baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi, kategori, metin, jsonContentArray  } = articleConstructor;

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
          
          { currentPageOperations && currentPageOperations.currentPageValue !== null 
          && <Custom_Waypoint customKey={"top_wp_"+url} name={"top"} startedUrl={url} currentPageOperations={currentPageOperations}/> }

          <hr className='split'/>

          <Ens_all jsonContentArray={jsonContentArray} sayfaUrl={url}
           kategori={kategori} currentPageOperations={currentPageOperations}/>
        </article>

        <OtherContents currentUrl={url}/>
    </Main>
  );
};

export default ClassicArticleBot;