/* Paragraf sonunda benzer makaleleri ve alakalı içerikleri gösteren kod */

import ArticleBox from '@/components/mini_components/icerik_kutusu';
import { useAppContext } from '@/context/ContextProvider';
import { useEffect, useState } from 'react';
import { getOtherContentArticles } from './functions/infinityScrollAndGetNewArticle';

export default function OtherContents({currentUrl}) {

  const { userInfo, topLevelUrl, supportWebp, isItMobile } = useAppContext();
  const [others, setOthers] = useState([]);

  const checkRequestStatus = async () => {
    const response = await getOtherContentArticles(topLevelUrl, userInfo, currentUrl, isItMobile);
    if(!response) {
      console.log("zaman aşımında, localStorage'dan çekilecek. ");
      setOthers(JSON.parse(localStorage.getItem("recommends")));
    }
    else {
      localStorage.setItem('recommends', JSON.stringify(response));
      console.log("else:" , response);
      setOthers(response);
    }
  }

  useEffect(() => {
    if(userInfo.id && userInfo.city && typeof isItMobile === "boolean") {
      checkRequestStatus();
    }
  }, [userInfo, isItMobile])

  useEffect(() =>{
    console.log("typeof: ", typeof others);
    console.log("others: ", others);
    console.log("-----------------------------");
  }, [others])

  return (
    <>
      <h2 className='other-h2'>Diğer İçerikler</h2>
      <div className='other_contents'>
        {!others && others.map((other, index) => (
          <ArticleBox
          key={index}
          supportWebp={supportWebp}
          link={other.url}
          baslik={other.baslik}
          rsm_alt={other.baslik}
          rsm={other.resimYolu}
          icerik={other.paragraf}
          />  
        ))}
      </div>
    </>
  )
}