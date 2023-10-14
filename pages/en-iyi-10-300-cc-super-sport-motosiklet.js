import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';
import HeadHtml from '@/components/HeadHtml';

export default function Eniyi300ccSuperMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "300cc", "motosiklet", "super", "sport"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-300-cc-super-sport-motosiklet";
  const baslik = "En İyi 10 300 CC Super Sport Motosiklet";
  const metin = "Supersport motosikletler, genellikle onları sürmenin kendine has bir stil ve tecrübe gerektirdiği bir araç kategorisidir. 300cc'lik motorlar, genellikle orta seviye sürücüler için idealdir ve yeni başlayanlar için bile uygun olabilir. Tasarım, performans, kullanılabilirlik ve fiyat gibi kritik faktörleri değerlendirerek, bu segmentteki en iyi seçenekleri belirledik. Motosiklet dünyasının estetik ve performans harmanını sunan supersport kategorisi, motor sporlarına olan tutkunuzu kesinlikle alevlendirecek. Makalemizin devamında, her bir motosikletin detaylı incelemesini ve benzersiz özelliklerini bulabilirsiniz. Sizleri, 300cc süpersport motosikletlerin hızlı, estetik ve heyecan verici dünyasına davet ediyoruz.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const okunmaSuresi = "5";
  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-02T18:00:00+03:00";
  const degistirilmeTarihi = "2023-10-02T18:00:00+03:00";
  const addDate = "02.10.23";

  
  const summaryText = <p className='summary_text'>{metin}</p>;

  const jsonContentArray = [
    {
      "num": "10",
      "url": `https://enonlar.com/${url}#bolum-10`,
      "name": "TVS Apache RR 310",
      "image": `/images/motosiklet/tvs_apache_rr_310.png`,
      "firma": "TVS Motor Company",
      "tip": "Supersport",
      "motorHacmi": "300",
      "sifirYuz": "7.0",
      "max": "160",
      "tuketim": "3.3",
      "agirlik": "169.7",
      "ulke": "Hindistan",
      "yakitKapasitesi": "11",
      "paragraf": <p>TVS Apache RR 310, baş döndürücü tasarımı ve aerodinamik yapısıyla dikkat çeker. Motorun düşük ve yüksek devir performansı dengeli, gas tepkisi canlı ve tork dağılımı ise eşit. Yol tutuşu sağlam, frenler güvenilir, ve süspansiyon sistemi sert ama rahat. Gidonun pozisyonu ve hassasiyeti, virajlarda kolay manevra imkanı sağlar. Ağırlığı sayesinde stabil ve dengeli bir sürüş deneyimi sunar. Ancak, yüksek hızlarda rüzgar koruması yetersiz kalabilir. Genel olarak, TVS Apache RR 310, sportif sürüş deneyimi ve estetik tasarımı uygun fiyatla sunan başarılı bir model.</p>
    },
    {
      "num": "9",
      "url": `https://enonlar.com/${url}#bolum-9`,
      "name": "CFMoto 300SR",
      "image": `/images/motosiklet/cfmoto_300sr.jpg`,
      "firma": "CFMoto",
      "tip": "Supersport",
      "motorHacmi": "300",
      "sifirYuz": "7.5",
      "max": "150",
      "tuketim": "3.7",
      "agirlik": "165",
      "ulke": "Çin",
      "yakitKapasitesi": "12",
      "paragraf": <p>CFMoto 300SR, keskin hatları ve atletik duruşu ile genç sürücülerin ilgisini çeker. Motorun hızlanma performansı ve düşük devirdeki torku tatminkar. Yüksek devirlerde bile motor titreşimsiz ve sessiz çalışır. Frenler etkili, yol tutuşu dikkat çekici. Gidon hassasiyeti ve ergonomik pozisyonu, virajlarda güvenli manevralar yapmanıza olanak tanır. Ağırlığının hafifliği, motorun agresif bir şekilde yönlendirilmesini sağlar. Ancak, uzun mesafeli sürüşlerde koltuk konforu yetersiz kalabilir. CFMoto 300SR, performansı ve estetiği bir araya getiren, uygun fiyatlı bir süpersport seçeneği.</p>
    },
    {
      "num": "8",
      "url": `https://enonlar.com/${url}#bolum-8`,
      "name": "Benelli Tornado 302R",
      "image": `/images/motosiklet/benelli_302r.png`,
      "firma": "Benelli",
      "tip": "Supersport",
      "motorHacmi": "300",
      "sifirYuz": "8.0",
      "max": "170",
      "tuketim": "3.7",
      "agirlik": "198",
      "ulke": "İtalya",
      "yakitKapasitesi": "14",
      "paragraf": <p>Benelli 302R, İtalyan tarzı zarif tasarımı ve çift silindirli motoru ile segmentinde dikkat çeker. Motor, düşük devirlerden itibaren güçlü bir tork sunar ve yüksek devirlere çıktıkça canlanır. Yol tutuşu mükemmel, frenler dozajlı ve etkili. Gidonun konumu ve hassasiyeti, virajlarda rahat manevralar yapmanıza olanak tanır. Ağırlığı diğer modellere göre biraz daha fazla, bu da stabiliteyi artırır ancak hızlanma ve manevra kabiliyetini bir miktar düşürür. Benelli 302R, estetik tasarımı, güçlü motoru ve üstün yol tutuşu ile 300cc süpersport segmentinde önemli bir yere sahip.</p>
    },
    {
      "num": "7",
      "url": `https://enonlar.com/${url}#bolum-7`,
      "name": "Hyosung GT300R",
      "image": `/images/motosiklet/hyosung_gt_300r.png`,
      "firma": "Hyosung",
      "tip": "Supersport",
      "motorHacmi": "300",
      "sifirYuz": "7.8",
      "max": "140",
      "tuketim": "3.8",
      "agirlik": "178",
      "ulke": "Güney Kore",
      "yakitKapasitesi": "15",
      "paragraf": <p>Hyosung GT300R, Güney Kore'nin otomotiv endüstrisinden çıkma, sportif tasarımı ve kompakt yapısıyla dikkat çeker. Motorun düşük ve orta devir performansı tatminkar, yüksek devirlerde ise motorun canlılığı hissedilir. Yol tutuşu sağlam, fren performansı ise ortalamanın üzerinde. Gidonun pozisyonu ve hassasiyeti, virajlarda rahat manevralar yapmanıza olanak tanır. Ağırlığı, motorun stabilitesini artırır, fakat hızlanma ve manevra kabiliyetini biraz kısıtlar. Hyosung GT300R, uygun fiyatlı ve performans odaklı bir süpersport motosiklet arayanlar için cazip bir seçenek sunar.</p>
    },
    {
      "num": "6",
      "url": `https://enonlar.com/${url}#bolum-6`,
      "name": "Kawasaki Ninja 400",
      "image": `/images/motosiklet/kawasaki_ninja_400.png`,
      "firma": "Kawasaki",
      "tip": "Supersport",
      "motorHacmi": "399",
      "sifirYuz": "4.9",
      "max": "191",
      "tuketim": "4.3",
      "agirlik": "168",
      "ulke": "Japonya",
      "yakitKapasitesi": "14",
      "paragraf": <p>Kawasaki Ninja 400, sürücüler için tatmin edici bir performans ve mükemmel bir yol tutuşu sunar. Agresif ve aerodinamik tasarımı sayesinde dikkat çeker ve yüksek hızlarda bile rüzgar direncini minimize eder. Yolculuklar sırasında sağladığı konfor ve düşük yakıt tüketimi, bu modeli hem günlük kullanım hem de uzun mesafeli sürüşler için ideal kılar. Ninja 400'ün geniş ve okunması kolay göstergesi, sürücülerin tüm önemli bilgilere hızlı bir şekilde erişmesini sağlar.</p>
    },  
    {
      "num": "5",
      "url": `https://enonlar.com/${url}#bolum-6`,
      "name": "Kawasaki Ninja 300",
      "image": `/images/motosiklet/kawasaki_ninja_300.png`,
      "firma": "Kawasaki",
      "tip": "Supersport",
      "motorHacmi": "300",
      "sifirYuz": "5.6",
      "max": "180",
      "tuketim": "3.6",
      "agirlik": "172",
      "ulke": "Japonya",
      "yakitKapasitesi": "17",
      "paragraf": <p>Kawasaki Ninja 300, Japonya'nın mühendislik mirasını yansıtan, sportif ve aerodinamik tasarımıyla göz doldurur. Motorun düşük devir performansı başarılı, yüksek devirlerde ise canlı ve atak. Yol tutuşu mükemmel, frenler etkili ve dozajlı. Gidon hassasiyeti ve ergonomik pozisyonu, virajlarda ve ani manevralarda sürücüye güven verir. Ağırlığı dengeli dağıtılmış ve bu da motorun manevra kabiliyetini artırır. Kawasaki Ninja 300, estetik tasarımı, üstün performansı ve mükemmel yol tutuşu ile 300cc süpersport segmentinde önemli bir yere sahip.</p>
    },
    {
      "num": "4",
      "url": `https://enonlar.com/${url}#bolum-5`,
      "name": "Honda CBR300R",
      "image": `/images/motosiklet/honda_cbr_300r.png`,
      "firma": "Honda",
      "tip": "Supersport",
      "motorHacmi": "300",
      "sifirYuz": "7.1",
      "max": "157",
      "tuketim": "3.5",
      "agirlik": "164",
      "ulke": "Japonya",
      "yakitKapasitesi": "13",
      "paragraf": <p>Honda CBR300R, Japonya'nın hassas mühendislik geleneğini yansıtan, zarif ve fonksiyonel tasarımıyla dikkat çeker. Motor, düşük devirlerde dahi tatminkar bir tork sunar, yüksek devirlerde ise canlı ve enerjik. Yol tutuşu dikkat çekici, frenler ise hem etkili hem de hassas. Gidon pozisyonu ve hassasiyeti, virajlarda ve şehir içi sürüşlerde manevra kabiliyetini artırır. Motorun ağırlığı dengeli, bu da stabilite ve hızlanma performansını olumlu etkiler. Honda CBR300R, performansı ve güvenilirliği ile 300cc süpersport segmentinde rekabetçi bir seçenek.</p>
    },
    {
      "num": "3",
      "url": `https://enonlar.com/${url}#bolum-4`,
      "name": "KTM RC 390",
      "image": `/images/motosiklet/ktm_rc_390.png`,
      "firma": "KTM",
      "tip": "Supersport",
      "motorHacmi": "373",
      "sifirYuz": "4.6",
      "max": "179",
      "tuketim": "3.8",
      "agirlik": "147",
      "ulke": "Avusturya",
      "yakitKapasitesi": "13.7",
      "paragraf": <p>KTM RC 390, Avusturya'nın mühendislik ustalığı ve sıra dışı tasarım anlayışını temsil ediyor. Agresif tasarımı, hafif şasisi ve mükemmel motor performansı ile dikkat çeker. Motor düşük devirlerden itibaren güçlü bir tork sunar, yüksek devirlerde ise canlı ve atak. Yol tutuşu mükemmel, frenler etkili ve dozajlı. Gidonun hassasiyeti, virajlarda ve hızlı manevralarda sürücüye güven verir. Hafifliği, motorun manevra kabiliyetini ve hızlanma performansını artırır. KTM RC 390, yüksek performansı, estetik ve agresif tasarımı ile 300cc süpersport segmentinin ötesine geçiyor.</p>
    },
    {
      "num": "2",
      "url": `https://enonlar.com/${url}#bolum-1`,
      "name": "BMW G310RR",
      "image": `/images/motosiklet/bmw_g310_rr.png`,
      "firma": "BMW",
      "tip": "Supersport",
      "motorHacmi": "313",
      "sifirYuz": "6.2",
      "max": "143",
      "tuketim": "3.3",
      "agirlik": "158",
      "ulke": "Almanya",
      "yakitKapasitesi": "12",
      "paragraf": <p>BMW G310RR, Alman mühendisliğinin ve estetiğinin bir harmanını temsil ediyor. Sade ve keskin çizgileriyle modern bir süpersport tasarımı sunan bu model, düşük devirlerde dahi tatminkar bir tork ve tepki sunuyor. Yüksek devirlerde ise motor canlı ve enerjik. Yol tutuşu ve fren performansı beklentileri karşılıyor, gidon hassasiyeti ise övgüyü hak ediyor. Ağırlığı dengeli dağıtılmış, bu da motorun manevra kabiliyetini ve stabilitesini artırır. BMW'nin geniş servis ağı ve yedek parça desteği, G310RR'yi uzun vadede güvenilir bir seçenek haline getiriyor. BMW G310RR, sade tasarımı ve güvenilir performansı ile süpersport segmentinde sağlam bir seçenek.</p>
    },
    {
      "num": "1",
      "url": `https://enonlar.com/${url}#bolum-2`,
      "name": "Yamaha YZF-R3",
      "image": `/images/motosiklet/yamaha_yzf_r3.png`,
      "firma": "Yamaha",
      "tip": "Supersport",
      "motorHacmi": "321",
      "sifirYuz": "5.1",
      "max": "188",
      "tuketim": "3.5",
      "agirlik": "169",
      "ulke": "Japonya",
      "yakitKapasitesi": "14",
      "paragraf": <p>Yamaha YZF-R3, Japonya'nın mühendislik ustalığı ve estetik anlayışını mükemmel bir şekilde birleştiriyor. Motorun düşük devir performansı tatminkar, yüksek devirlerde ise canlı ve atak. Yol tutuşu etkileyici, frenler dozajlı ve etkili. Gidonun hassasiyeti, virajlarda ve hızlı manevralarda sürücüye güven verir. Ağırlığı dengeli dağıtılmış, bu da motorun manevra kabiliyetini artırır. Yamaha YZF-R3, estetik tasarımı, üstün performansı ve mükemmel yol tutuşu ile 300cc süpersport segmentinde rekabetçi ve popüler bir seçenek. Genç ve deneyimli sürücüler arasında popüler bir seçenektir. Her sürüşte yanınızda olacak bir arkadaş gibi, güvenilirliği ve dayanıklılığı ile bilinir. Ek olarak, Yamaha'nın geniş servis ve yedek parça ağı, bu modeli uzun vadede de cazip kılar. Her açıdan Yamaha YZF-R3, süpersport motosiklet segmentinde kendine sağlam bir yer bulmuş durumda.</p>
    }
  ];

  const ana_resim = jsonContentArray[0].image;
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = json_list(articleInfos,
  "Motosiklet", 
  summaryText,
  jsonContentArray
  )

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

        <article id='main-article'>
          
          <h1>{baslik}</h1>

          <Details nightMode={nightMode} addDate={addDate} readTimeSpan={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan}/>
          
          <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

          {(summaryText)}

          <hr className='split'/>

          {<Ens_motosiklet jsonContentArray={jsonContentArray}/>}
        
        </article>
        
        <OtherContents />
        
        
    </Main>
  )
}