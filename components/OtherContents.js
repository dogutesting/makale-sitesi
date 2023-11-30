/* Paragraf sonunda benzer makaleleri ve alakalı içerikleri gösteren kod */

import ArticleBox from '@/components/mini_components/icerik_kutusu';
import { useAppContext } from '@/context/ContextProvider';
import { useEffect, useState } from 'react';

export default function OtherContents() {

  const { userInfo } = useAppContext();
  const [others, setOthers] = useState();

  const getArticlesForUser = async (userInfo) => {
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
      setOthers(response.data);
      //return response.data;
    }
    else {
      console.log("hata!", res);
    }
  }

  useEffect(() => {
    if(userInfo.id && userInfo.city) {

    }
  }, [userInfo])

  return (
    <>
      <h2 className='other-h2'>Diğer İçerikler</h2>
      <div className='other_contents'>
        {
          others ? others.map((other, index) => (
            <ArticleBox
            key={index}
            baslik={other.baslik}
            rsm={other.resimYolu}
            rsm_alt={other.baslik + " " + "görseli"}
            icerik={other.paragraf}/>
          )) 
          :
          <>
            <b>Loading...</b>
          </>
        }
        {/* <ArticleBox rsm="/images/movies/ben_efsaneyim.jpg"
        baslik="Ben Efsaneyim filminin ikinici çıkarsa efsaneliği biter!"
        rsm_alt="Ben Efsaneyim filminin ikinici çıkarsa efsaneliği biter!"
        icerik="Eğer karşılaştığınız zorluklar ve duygusal fırtınalar karşısında sarsılmaz bir karakter oluşturma hedefiniz varsa, doğru yerdesiniz. Erkekliğin ve karakterin derinliklerine dalmak isteyenler için özenle seçilmiş bu filmler, size ilham verecektir. İşte erkeklerin mutlaka izlemesi gereken, karakter oluşturma yolculuğunda rehber olabilecek 10 film."/> */}
      </div>
    </>
  )
}
