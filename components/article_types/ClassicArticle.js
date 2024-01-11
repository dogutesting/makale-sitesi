import Main from "../Main";
import HeadHtml from "../HeadHtml";
import Details from "../Details";
import OtherContents from "../OtherContents";
import Ana_gorsel from "../mini_components/ana_gorsel";
import dynamic from 'next/dynamic';
import Custom_Waypoint from "../mini_components/CustomWaypoint";

export default function ClassicArticle (
    {currentPage, baslik, description, keywordsArray, ana_resim, url, jsonList,
     nightMode, addDate, okunmaSuresi, kategori, metin, jsonContentArray}) {

  let DynamicComponent = null;
  //!önemli
  const allowedCats = ["dizi", "film", "motosiklet"]; //database'den çekilebilir
  if(allowedCats.includes(kategori)) {
    DynamicComponent = dynamic(() => import('../mini_components/ens/ens_'+kategori));
  }

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
          
          <Custom_Waypoint type={"addClick"} fullUrl={"düzenle!!!"+url} currentPage={currentPage}/>

          <hr className='split'/>
        
          { DynamicComponent !== null && 
          <DynamicComponent jsonContentArray={jsonContentArray} sayfaUrl={url} currentPage={currentPage}/> }
        </article>
                
        <OtherContents />
    </Main>
  );
}