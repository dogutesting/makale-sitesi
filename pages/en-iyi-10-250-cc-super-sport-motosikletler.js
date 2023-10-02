import Main from '@/components/Main';
import En from '@/components/mini_components/en';
import Kunye from '@/components/mini_components/motosiklet_kunye';
import OtherContents from '@/components/OtherContents';
import Head from 'next/head';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';

export default function eniyi10250ccMotosikletMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "250cc", "motosiklet", "super", "sport"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-250-cc-super-sport-motosikletler";
  const baslik = "En İyi 10 250cc'lik Supersport motosikletler";
  const metin = "250cc'lik supersport motosikletler, hem performansları hem de estetik tasarımları ile genç ve enerjik sürücülerin ilgisini çekiyor. Estetik ve atik yapılarıyla, her bir virajda sizi motosiklet tutkunuzun yeni boyutlarına taşıyor. Bu makalemizde, piyasada bulabileceğiniz en iyi 10 250cc'lik supersport motosikleti derledik. İster şehir içinde hızlı manevralar, ister uzun yolda rüzgarla dans etmek olsun, bu motosikletler ile eğlenceyi hissedeceksiniz. Hangi modelin sizi en çok heyecanlandırdığını keşfedin!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  
  const ana_resim = "";
  const logo = "logo_url";

  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-02T18:00:00+03:00";
  const degistirilmeTarihi = "2023-10-02T18:00:00+03:00";
  const addDate = "02.10.23";

  
  const summaryText = <p className='summary_text'>{metin}</p>;

  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, logo, eklenmeTarihi, degistirilmeTarihi};
  const jsonContentArray = [
    {
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name": "Daelim Roadwin 250",
        "image": `/images/motosiklet/daelim_roadwin_250.jpg`,
        "firma": "Daelim",
        "tip": "Supersport",
        "motorHacmi": "250",
        "sifirYuz": "8.1",
        "max": "140",
        "tuketim": "3.5",
        "paragraf": <p>Daelim Roadwin 250, sade ve zarif tasarımı ile ilk bakışta sizi çekebilir. Yol üzerinde, bu makinenin sakin ve kolay kontrol edilebilir doğası, özellikle yeni sürücüler için rahatlatıcıdır. Motor, düşük ve orta devirlerde yumuşak bir performans sunar, yüksek hızlarda ise biraz daha enerji bekleyebilirsiniz. Frenler ve süspansiyon, günlük sürüşler için yeterli konfor ve güvenliği sağlar. Ancak, daha sportif bir sürüş deneyimi arayanlar için biraz daha sert ve dirençli bir süspansiyon tercih edilebilir. Roadwin 250'nin en çekici yanı, uygun fiyatı ve düşük işletme maliyetidir. Ancak, daha heyecan verici bir sürüş deneyimi ve daha yüksek kaliteli malzemeler için başka seçenekleri de göz önünde bulundurmanız önerilir.</p>
    },
    {
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name": "Taro 250R",
        "image": `/images/motosiklet/taro_250r.png`,
        "firma": "Taro",
        "tip": "Supersport",
        "motorHacmi": "250",
        "sifirYuz": "8.5",
        "max": "130",
        "tuketim": "3.8",
        "paragraf": <p>Taro 250R, uygun fiyatlı bir süpersport motosiklet arayanlar için cazip bir seçenek sunuyor. İlk bakışta, bu motosikletin dinamik tasarımı ve keskin hatları, rakiplerinden ayırt edici bir estetik kazandırıyor. Yola çıktığınızda, 250R'nin hafifliği ve dengeli şasisi, manevra kabiliyetini ön plana çıkarıyor. Motoru, beklenenden daha canlı bir performans sergiliyor, fakat yüksek devirlerde biraz gürültülü çalışabiliyor. Fren performansı, bu segment için yeterli, ancak süspansiyon biraz daha konforlu olabilirdi. Genel olarak, Taro 250R, bütçe dostu bir süpersport motosiklet arayanlar için düşünülebilir bir seçenek, fakat daha konforlu bir sürüş ve daha yüksek kaliteli malzemeler arayanlar için başka modelleri incelemekte fayda var.</p>
    },
    {
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name": "Bajaj Pulsar RS 200",
        "image": `/images/motosiklet/bajaj_pulsar_rs200.png`,
        "firma": "Bajaj",
        "tip": "Supersport",
        "motorHacmi": "200",
        "sifirYuz": "9.3",
        "max": "136",
        "tuketim": "2.9",
        "paragraf": <p>Bajaj Pulsar RS 200, sürat ve estetiği uygun fiyatla buluşturuyor. Göz alıcı tasarımı ve canlı renk seçenekleri ile genç sürücülerin ilgisini çekiyor. Motoru, şehir içi ve otoyol sürüşlerinde tatminkar bir performans sunuyor. Yol tutuşu ve fren performansı, segmentinin gerekliliklerini karşılıyor. Ancak, yüksek hızlarda biraz daha stabilite ve rüzgar koruması arzulayabilirsiniz. Süspansiyon sistemi, günlük kullanım için yeterli konforu sağlarken, sportif sürüşlerde biraz daha sertlik arzulayabilirsiniz. Genel olarak, Pulsar RS 200, bütçe dostu bir süpersport motosiklet olarak dikkat çekiyor.</p>
    },
    {
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name": "Hyosung GD250R",
        "image": `/images/motosiklet/hyosung_gd250r.jpg`,
        "firma": "Hyosung",
        "tip": "Supersport",
        "motorHacmi": "250",
        "sifirYuz": "8.2",
        "max": "140",
        "tuketim": "3.6",
        "paragraf": <p>Hyosung GD250R, minimalist ve modern tasarımı ile göz doldurur. Düzgün ve kontrollü bir sürüş deneyimi sunar, özellikle virajlarda beklenenden daha dirençli bir yapı sergiler. Motor performansı, şehir içi ve hafta sonu gezileri için yeterli, ancak yüksek hızlarda motorun enerjisi biraz düşebilir. Fren sistemi tatminkar, süspansiyon ise rahat ve dengeli. GD250R, başlangıç ve orta seviye sürücüler için uygun fiyatlı ve estetik bir seçenek oluştururken, aynı zamanda günlük sürüşler için de uygun bir tercih.</p>
    },
    {
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name": "Suzuki GSX-250R",
        "image": `/images/motosiklet/suzuki_gsx_250r.jpg`,
        "firma": "Suzuki",
        "tip": "Supersport",
        "motorHacmi": "250",
        "sifirYuz": "8.5",
        "max": "141",
        "tuketim": "3.9",
        "paragraf": <p>Suzuki GSX-250R, zarif ve estetik tasarımı ile ön plana çıkar. Motosikletin yumuşak hatları ve sportif görünümü, sürücülere etkileyici bir estetik sunar. Motor, düşük ve orta devirlerde dengeli bir performans sunarken, yüksek devirlerde biraz daha enerji arzulayabilir. Yol tutuşu dengeli ve güvenilir, frenler ise oldukça etkili ve güvenli bir duruş sunuyor. Süspansiyon sistemi, konforlu ve günlük sürüşler için ideal bir denge sunar. Suzuki GSX-250R, sportif sürüş deneyimi sunarken aynı zamanda günlük kullanım için de pratik ve konforlu bir seçenek oluşturur. Geniş bir sürücü kitlesi için uygun olan bu model, uygun fiyatı ve düşük işletme maliyeti ile de dikkat çeker.</p>
    },
    {
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name": "KTM RC 250",
        "image": `/images/motosiklet/ktm_rc_250.jpg`,
        "firma": "KTM",
        "tip": "Supersport",
        "motorHacmi": "250",
        "sifirYuz": "8.0",
        "max": "145",
        "tuketim": "3.7",
        "paragraf": <p>KTM RC 250, agresif tasarımı ve canlı renk seçenekleri ile adeta pistlerin çağrısını yapar. Sert ve dirençli şasisi, virajlarda mükemmel bir yol tutuşu sunar. Motor, düşük ve orta devirlerde tatminkar bir performans sergilerken, yüksek devirlerde sizi daha da heyecanlandırır. Fren sistemi güvenilir ve etkili, süspansiyon ise sportif sürüşler için ideal bir sertliğe sahip. RC 250, genç ve enerjik sürücüler için dinamik ve heyecan verici bir sürüş deneyimi sunar.</p>
    },
    {
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "Kawasaki Ninja 250SL",
        "image": `/images/motosiklet/kawasaki_ninja_250sl.png`,
        "firma": "Kawasaki",
        "tip": "Supersport",
        "motorHacmi": "250",
        "sifirYuz": "8.5",
        "max": "153",
        "tuketim": "3.6",
        "paragraf": <p>Ninja 250SL, hafif yapısı ve kompakt boyutları ile özellikle yeni sürücüler için mükemmel bir tercih. Aerodinamik tasarımı ve sportif görünümü ile dikkat çeker. Motor, canlı ve istekli bir performans sunar, virajlarda ise motosikletin hafifliği sayesinde çevik ve kontrol edilebilir. Fren performansı güven verirken, süspansiyon ise sert fakat konforlu. Genel olarak, Ninja 250SL, giriş seviyesi sürücüler için sportif ve heyecan verici bir sürüş deneyimi sunar.</p>
    },
    {
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name": "Kawasaki Ninja 250R",
        "image": `/images/motosiklet/kawasaki_ninja_250r.jpg`,
        "firma": "Kawasaki",
        "tip": "Supersport",
        "motorHacmi": "250",
        "sifirYuz": "5.75",
        "max": "150",
        "tuketim": "3.4",
        "paragraf": <p>Kawasaki Ninja 250R, estetik ve performansı bir araya getiren etkileyici bir motosiklet. Keskin hatları, aerodinamik yapısı ve markanın ikonik Ninja serisinin bir parçası olarak, sportif ve agresif bir karakter sunar. Motor, düşük ve orta devirlerde güvenilir ve dengeli bir performans sunarken, yüksek devirlerde beklenen enerjiyi sağlar. Yol tutuşu mükemmel, frenler ise etkili ve güvenilir. Süspansiyon, sportif sürüşler için ideal bir sertlikte. Genel olarak, Kawasaki Ninja 250R, giriş ve orta seviye sürücüler için sağlam bir performans ve güvenilirlik sunan cazip bir seçenektir.</p>
    },
    {
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name": "Honda CBR250R",
        "image": `/images/motosiklet/honda_cbr_250r.png`,
        "firma": "Honda",
        "tip": "Supersport",
        "motorHacmi": "250",
        "sifirYuz": "8.6",
        "max": "135",
        "tuketim": "3.5",
        "paragraf": <p>Honda CBR250R, güzel tasarımı ve performansına göre dengeli yakıt tüketimini bir araya getiriyor. Zarif tasarımı ve sportif hatları ile göz alıcı. Motor, düşük devirlerde bile tatminkar bir tork sunuyor, yüksek devirlerde ise adrenalinin doruklarına çıkıyor. Yol tutuşu, fren performansı ve süspansiyon sistemi, sürücüye tam bir kontrol ve güven duygusu sunuyor. Honda'nın bu zarif makinesi, günlük sürüşlerde konfor ve spor sürüşlerde performans arayanlar için ideal bir tercih. Her virajda ve düzlükte, CBR250R'nin sportif ruhu ve mühendislik harikası yapısı, sürücüyü motosiklet aşkının derinliklerine çekiyor.</p>
    },
    {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Yamaha YZF-R25",
        "image": `/images/motosiklet/yamaha_yzf_r25.jpg`,
        "firma": "Yamaha",
        "tip": "Supersport",
        "motorHacmi": "250",
        "sifirYuz": "5.5",
        "max": "173",
        "tuketim": "4",
        "paragraf": <p>Yamaha YZF-R25, spor motosiklet dünyasının kalbinde yer alıyor. Sadece gözleri değil, kalbi de fetheden bir motosiklet. Her bir detayı, sürücüsüyle birlikte asfaltın üzerinde adeta bir simfoni oluşturuyor. Motor, düşük devirlerde bile canlılığını hissettiriyor, yüksek devirlerde ise adeta bir kartal gibi göğsünü kabartıyor. Yol tutuşu, fren performansı ve süspansiyon, sizi her anlamda destekliyor, her virajda sizinle birlikte nefes alıyor. Yamaha'nın bu başyapıtı, sadece yol tutuşu ve performansı ile değil, aynı zamanda estetik tasarımı ve mühendislik harikası yapısı ile de sürücülerin kalbinde taht kuruyor. Yamaha YZF-R25 ile asfaltın her bir karışını hissederken, motosiklet tutkunuzun sınırlarını zorlayacaksınız.</p>
    }
  ];
  const jsonList = json_list(articleInfos,
  "Motosiklet", 
  summaryText,
  jsonContentArray
  )

  return (
    
    <Main>
      
        <Head>
          <title>{baslik}</title>
          <meta name="description" content={description}/>
          <meta name="keywords" content={keywordsArray.join(", ")}/>

          <meta property="og:type" content="article"/>
          <meta property="og:title" content={baslik}/>
          <meta property="og:description" content={description} key="desc"/>
          <meta
          property="og:image"
          content={ana_resim}
          />
          <meta property="og:url" content={"https://enonlar.com/"+url}/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={baslik}/>
          <meta name="twitter:description" content={description}/>
          <meta name="twitter:image" content={ana_resim}/>
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: jsonList.html}}
            key="article-jsonld"
          />
        </Head>

        <article id='main-article'>
          
          <h1>{baslik}</h1>

          { /* ana resim buraya eklenebilir priort true yapılabilir ve ana resim thumbnail boyutu*/}
          <Details nightMode={nightMode} addDate={addDate} readTimeSpan={jsonList.readTimeSpan}/>
          
          <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

          {(summaryText)}

          <hr className='split'/>

          {
            jsonContentArray.map(item => (
              <section key={item.num}>
                <En
                    baslik={item.num + " - " + item.name}
                    rsm={item.image}
                    rsm_alt={item.name + " görseli."}
                    enid={"bolum-"+item.num}>
                    <Kunye firma={item.firma}
                    tip={item.tip}
                    motorHacmi={item.motorHacmi}
                    sifirYuz={item.sifirYuz}
                    max={item.max}
                    tuketim={item.tuketim}
                    />
                    {item.paragraf}
                </En>

                <hr className='split'/>
              </section>
            ))
          }
        
        </article>
        
        <h2 className='other-h2'>Diğer İçerikler</h2>
        <OtherContents />
        
        
    </Main>
  )
}