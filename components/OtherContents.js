/* Paragraf sonunda benzer makaleleri ve alakalı içerikleri gösteren kod */

import ArticleBox from '@/components/mini_components/icerik_kutusu';
import { useAppContext } from '@/context/ContextProvider';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function OtherContents() {

  const { userInfo, url, supportWebp } = useAppContext();
  const [others, setOthers] = useState();

  const router = useRouter();

  const getArticlesForUser = async () => {
    const res = await fetch(url+"/api/userKey", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "req": "gui",
        "data": {
          "id": userInfo.id,
          "city": userInfo.city,
          "currentUrl": router.asPath.slice(1)
        }
      })
    })
    if(res.ok) {
      const response = await res.json();
      setOthers(response.data);
    }
    else {
      fetch(url+"/api/error", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            "type": "other",
            "location": "other-contents",
            "error": res.status + " - " + res.statusText  
          })
        }
      )
    }
  }

  useEffect(() => {
    if(userInfo.id && userInfo.city) {
      getArticlesForUser(url, userInfo, router);
    }
  }, [userInfo])

  return (
    <>
      <h2 className='other-h2'>Diğer İçerikler</h2>
      <div className='other_contents'>
        {others && others.map((other, index) => (
          <ArticleBox
          key={index}
          supportWebp={supportWebp}
          link={other.url}
          baslik={other.baslik}
          rsm_alt={other.baslik}
          rsm={other.resimYolu}
          icerik={other.paragraf}
          onClick={() => getArticlesForUser()}
          />  
        ))}
      </div>
    </>
  )
}
