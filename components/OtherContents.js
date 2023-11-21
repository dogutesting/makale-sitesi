/* Paragraf sonunda benzer makaleleri ve alakalı içerikleri gösteren kod */

import ArticleBox from '@/components/mini_components/icerik_kutusu';
import { useAppContext } from '@/context/ContextProvider';

export default function OtherContents({kullaniciID}) {

  const { userID } = useAppContext();

  const getUserInfo = async () => {
    const res = await fetch("/api/userKey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "req": "gui",
        "data": {
          "uuid": userID
        }
      })
    })
    if(res.ok) {
      console.log("ok", await res.json());
      //geriye dönen değerlerde öneri url'lerini sunmak lazım
      //
    }
    else {
      console.log("hata!");
    }
  }
  getUserInfo();

  return (
    <>
      <h2 className='other-h2'>Diğer İçerikler</h2>
      <div className='other_contents'>
        <ArticleBox rsm="/images/movies/ben_efsaneyim.jpg"
        baslik="Ben Efsaneyim filminin ikinici çıkarsa efsaneliği biter!"
        rsm_alt="Ben Efsaneyim filminin ikinici çıkarsa efsaneliği biter!"
        icerik="Eğer karşılaştığınız zorluklar ve duygusal fırtınalar karşısında sarsılmaz bir karakter oluşturma hedefiniz varsa, doğru yerdesiniz. Erkekliğin ve karakterin derinliklerine dalmak isteyenler için özenle seçilmiş bu filmler, size ilham verecektir. İşte erkeklerin mutlaka izlemesi gereken, karakter oluşturma yolculuğunda rehber olabilecek 10 film."/>
        
        <ArticleBox rsm="/images/movies/umudunu_kaybetme.jpg" 
        baslik="Erkeklerin İzlemesi Gereken En İyi 10 Film"
        rsm_alt="Erkeklerin İzlemesi Gereken En İyi 10 Film"
        icerik="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."/>
        
        <ArticleBox rsm="/images/movies/blade_runner.jpg"
        baslik="Why Blade Runner Best Movie of the 2017"
        rsm_alt="Why Blade Runner Best Movie of the 2017"
        icerik="Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse Suspendisse"/>
        
        <ArticleBox rsm="/images/movies/gecmisin_golgesinde.jpg"
        baslik="erkeklerin izlemesi gereken en iyi 10 dizi 2023"
        rsm_alt="erkeklerin izlemesi gereken en iyi 10 dizi 2023"
        icerik="Curabitur mattis, enim non pharetra volutpat, magna sem mattis mauris, non ultricies lorem..."/>
        
        <ArticleBox rsm="/images/movies/umudunu_kaybetme.jpg"
        baslik=" Orci varius natoque penatibus et magnis dis parturient montes."
        rsm_alt=" Orci varius natoque penatibus et magnis dis parturient montes."
        icerik="No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."/>
        
        <ArticleBox rsm="/images/movies/gladyator.jpg"
        baslik="Sed mollis ligula at sapien varius lacinia."
        rsm_alt="Sed mollis ligula at sapien varius lacinia."
        icerik="Vivamus dignissim a magna sed fringilla. Aliquam a velit a enim auctor mollis. Vivamus luctus felis euismod sodales facilisis. Cras venenatis purus a facilisis commodo."/>
      </div>
    </>
  )
}
