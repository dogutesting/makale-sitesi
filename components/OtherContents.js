/* Paragraf sonunda benzer makaleleri ve alakalı içerikleri gösteren kod */

import ArticleBox from '@/components/mini_components/ArticleBox';
import { useAppContext } from '@/context/ContextProvider';
import { useEffect, useState } from 'react';
import { getOtherContentArticles } from './functions/infinityScrollAndGetNewArticle';
import Cookies from 'js-cookie';


export default function OtherContents({currentUrl, bottomChecker}) {

  const { topLevelUrl, supportWebp, isItMobile } = useAppContext();
  const [others, setOthers] = useState([]);

  const checkRequestStatus = async () => {
    let id = null;
    const accept_list = Cookies.get("cookies_accepted");
    if(accept_list) {
      const accept_json = JSON.parse(accept_list);
      if(accept_json.id) {
        id = Cookies.get("id");
      }
    }

    const response = await getOtherContentArticles(topLevelUrl, id, currentUrl, isItMobile);
    setOthers(response.data);
  }
  useEffect(() => {
    if(bottomChecker) {
      checkRequestStatus(); 
    }
  }, [bottomChecker])

  return (
    <>
      <h2 className='other-h2'>Diğer İçerikler</h2>
      <div className='other_contents'>
        {
          others && others.length > 0 && others.map((other, index) => (
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