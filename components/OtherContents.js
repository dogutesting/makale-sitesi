/* Paragraf sonunda benzer makaleleri ve alakalı içerikleri gösteren kod */

import ArticleBox from '@/components/mini_components/ArticleBox';
import { useAppContext } from '@/context/ContextProvider';
import { useEffect, useState } from 'react';
import { getOtherContentArticles } from './functions/infinityScrollAndGetNewArticle';

export default function OtherContents({currentUrl, defaultRecommends}) {

  const { userInfo, topLevelUrl, supportWebp, isItMobile } = useAppContext();
  const [others, setOthers] = useState([]);

  const checkRequestStatus = async () => {
    //! EĞER RESPONSE ZAMAN AŞIMINDA İSE ÖNCEKİNİ KULLAN, 
    //! EĞER ÖNCEKİ YOK İSE DEFAULT'U KULLAN  

    const response = await getOtherContentArticles(topLevelUrl, userInfo, currentUrl, isItMobile);
    if(!response) {
      setOthers(defaultRecommends);
    }
    else {
      setOthers(response);
    }
  }

  useEffect(() => {
    if(userInfo.id && userInfo.city && typeof isItMobile === "boolean") {
      checkRequestStatus();
    }
  }, [userInfo, isItMobile]);

  return (
    <>
      <h2 className='other-h2'>Diğer İçerikler</h2>
      <div className='other_contents'>
        {
          others.length > 0 && others.map((other, index) => (
            <ArticleBox
              key={index}
              supportWebp={supportWebp}
              link={other.url}
              baslik={other.baslik}
              rsm_alt={other.baslik}
              rsm={other.resimYolu}
              icerik={other.paragraf}
            />  
          ))
        } 
      </div>
    </>
  )
}