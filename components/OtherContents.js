/* Paragraf sonunda benzer makaleleri ve alakalı içerikleri gösteren kod */

import ArticleBox from '@/components/mini_components/icerik_kutusu';
import { useAppContext } from '@/context/ContextProvider';
import { useEffect, useState } from 'react';

export default function OtherContents() {

  const { userInfo, url } = useAppContext();
  const [others, setOthers] = useState();

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
          "city": userInfo.city
        }
      })
    })
    if(res.ok) {
      const response = await res.json();
      //setOthers(response.data);
      console.log("other response", response);
      //return response.data;
    }
    else {
      console.log("hata!", res);
    }
  }

  useEffect(() => {
    if(userInfo.id && userInfo.city) {
      console.log(userInfo.id, " - ", userInfo.city);
      getArticlesForUser();
    }
  }, [userInfo])

  return (
    <>
      <h2 className='other-h2'>Diğer İçerikler</h2>
      <div className='other_contents'>
        
        {/* <ArticleBox rsm="/images/movies/ben_efsaneyim.jpg"
        baslik="Ben Efsaneyim filminin ikinici çıkarsa efsaneliği biter!"
        rsm_alt="Ben Efsaneyim filminin ikinici çıkarsa efsaneliği biter!"
        icerik="Eğer karşılaştığınız zorluklar ve duygusal fırtınalar karşısında sarsılmaz bir karakter oluşturma hedefiniz varsa, doğru yerdesiniz. Erkekliğin ve karakterin derinliklerine dalmak isteyenler için özenle seçilmiş bu filmler, size ilham verecektir. İşte erkeklerin mutlaka izlemesi gereken, karakter oluşturma yolculuğunda rehber olabilecek 10 film."/> */}
      </div>
    </>
  )
}
