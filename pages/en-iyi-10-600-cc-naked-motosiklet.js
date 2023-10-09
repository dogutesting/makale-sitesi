import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';
import HeadHtml from '@/components/HeadHtml';

export default function Eniyi600ccNakedMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "600cc", "motosiklet", "naked"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-600-cc-naked-motosiklet";
  const baslik = "En İyi 10 600 CC Naked Motosiklet";
  const metin = "600cc'lik motorlar, genel olarak orta ve tecrübeli motor sürücülerine hitap eder. Naked sınıfının özgürlüğünü ve 600cc veya 700cc naked motosiklet gücünün atılganlığını birleştirerek, esnek ve enerjik bir sürüş deneyimi sunar. Bu liste, her biri kendi sınıfında öne çıkan 10 farklı modeli içermekte. Siz de 600cc'lik naked motosikletlerin sunduğu bu benzersiz deneyimi keşfetmek için yazımızı okumaya devam edin ve heyecanınızı kesfedin!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-03T02:32:00+03:00";
  const degistirilmeTarihi = "2023-10-03T02:32:00+03:00";
  const addDate = "03.10.23";

  
  const summaryText = <p className='summary_text'>{metin}</p>;

  const jsonContentArray = [
    {
      "num": "10",
      "url": `https://enonlar.com/${url}#bolum-10`,
      "name": "MV Agusta Brutale 675",
      "image": `/images/motosiklet/mv_agusta_brutale_675.png`,
      "firma": "MV Agusta",
      "tip": "Naked",
      "motorHacmi": "675",
      "sifirYuz": "3.9",
      "max": "245",
      "tuketim": "5.6",
      "agirlik": "163",
      "ulke": "İtalya",
      "yakitKapasitesi": "16.5",
      "paragraf": <p>İtalya'nın prestijli motosiklet üreticilerinden biri olan MV Agusta'nın Brutale serisi, estetik ve performansı bir araya getiriyor. Brutale 675, hafifliği ve kompakt tasarımı sayesinde hem şehir içi hem de uzun yolculuklarda sürücüsüne eşsiz bir deneyim sunuyor. Motosikletin üç silindirli motoru, düşük ve orta devirlerde bile mükemmel bir tork sağlarken, yüksek devirlerde de etkileyici bir performans ortaya koyuyor. Yol tutuşu ve fren performansı da oldukça tatminkar. Ancak, süspansiyon sistemi biraz sert olabilir ve bu, kötü yol koşullarında konforu etkileyebilir. Brutale 675, sadece performansı ve estetiğiyle değil, aynı zamanda sürücüsüne sunduğu premium hissiyatla da dikkat çekiyor.</p>
      },
      {
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name": "Triumph Street Triple R",
        "image": `/images/motosiklet/triumph_street_triple_r.png`,
        "firma": "Triumph",
        "tip": "Naked",
        "motorHacmi": "675",
        "sifirYuz": "3.7",
        "max": "220",
        "tuketim": "5.4",
        "agirlik": "168",
        "ulke": "Britanya",
        "yakitKapasitesi": "15",
        "paragraf": <p>Britanya'nın efsanevi motosiklet üreticisi Triumph, Street Triple modeli ile naked segmentine sofistike ve güçlü bir seçenek sunuyor. Street Triple, 675cc hacmindeki motoru ile hem günlük kullanımda hem de daha sportif sürüşlerde iddialı. Hafif ve kompakt yapısı, sürüş dinamiklerini olumlu yönde etkiliyor ve hızlı manevra kabiliyeti sunuyor. Motorun dengeli tork dağılımı ve lineer güç çıkışı sayesinde sürücüsüne güven veriyor. Yol tutuşu ve fren performansı üst düzeyde, ve sürüş pozisyonu rahat. Ancak, süspansiyon sistemi biraz daha yumuşak olabilirdi. Triumph Street Triple, kalitesi ve sürüş dinamikleri ile sınıfında ön plana çıkıyor.</p>
      },
      {
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name": "Aprilia Shiver 750",
        "image": `/images/motosiklet/aprilia_shiver_750.png`,
        "firma": "Aprilia",
        "tip": "Naked",
        "motorHacmi": "750",
        "sifirYuz": "4.0",
        "max": "210",
        "tuketim": "5.5",
        "agirlik": "189",
        "ulke": "İtalya",
        "yakitKapasitesi": "15",
        "paragraf": <p>İtalya'nın prestijli motosiklet üreticisi Aprilia'nın, Shiver 750 modeli, estetik ve performansı bir arada sunuyor. 750cc motor hacmi ile segmentinde ciddi bir güç sunan Shiver, dinamik tasarımı ve ergonomik yapısı ile dikkat çekiyor. Motorun güç dağılımı dengeli ve tahmin edilebilir, bu da sürücüye güven veriyor. Yol tutuşu ve fren performansı tatmin edici seviyede. Konforlu sürüş pozisyonu sayesinde hem şehir içi hem de uzun yol kullanımlarında rahatlık sunuyor. Süspansiyon sistemi, zorlu yol koşullarında bile konforu koruyor. Aprilia Shiver 750, performansı ve konforu bir arada sunarak, segmentinde güçlü bir seçenek oluşturuyor.</p>
      },
      {
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name": "Benelli TNT 600",
        "image": `/images/motosiklet/benelli_tnt_600.png`,
        "firma": "Benelli",
        "tip": "Naked",
        "motorHacmi": "600",
        "sifirYuz": "4.0",
        "max": "220",
        "tuketim": "5.6",
        "agirlik": "220",
        "ulke": "İtalya",
        "yakitKapasitesi": "15",
        "paragraf": <p>İtalyan tasarım harikası Benelli TNT 600, estetik ve performansı bir araya getirerek dikkat çekici bir super sport motosiklet deneyimi sunar. 600cc'lik motoru ile tatminkar bir hız ve ivmelenme sağlar. Motosikletin tasarımı, aerodinamik özellikleri sayesinde yüksek hızlarda bile rüzgar direncini en aza indirir ve sürücüsüne daha fazla kontrol imkanı tanır. Yol tutuşu ve fren performansı, Benelli'nin bu modelinde de oldukça başarılı. Gidon ve gaz tepkisi mükemmel, bu da sürücüye daha iyi bir manevra kabiliyeti sağlar. TNT 600, performans ve estetiğiyle birlikte konforlu bir sürüş deneyimi sunarak, super sport motosiklet severler için çekici bir seçenek haline gelir.</p>
      },
      {
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name": "KTM 690 Duke",
        "image": `/images/motosiklet/ktm_690_duke.png`,
        "firma": "KTM",
        "tip": "Naked",
        "motorHacmi": "690",
        "sifirYuz": "3.7",
        "max": "180",
        "tuketim": "3.5",
        "agirlik": "148.5",
        "ulke": "Avusturya",
        "yakitKapasitesi": "13.5",
        "paragraf": <p>Avusturyalı motosiklet üreticisi KTM'nin 690 Duke modeli, hafifliği ve etkileyici güç çıkışı ile dikkat çeker. Sürücüsüne hem şehir içinde hem de açık yolda yüksek performans ve esneklik sunar. Yol tutuşu ve fren performansı, bu segmentteki diğer motosikletlerle rekabet edebilir seviyede. Gidon ve gaz tepkileri hassas, bu da sürücüye yüksek kontrol imkanı sunar. Süspansiyon sistemi, konforlu ve destekleyici, bu sayede uzun süreli sürüşlerde bile sürücüyü rahat ettirir. KTM 690 Duke, hem estetik hem de performans anlamında naked motosiklet severler için cazip bir seçenek olabilir.</p>
      },
      {
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name": "Suzuki SV650",
        "image": `/images/motosiklet/suzuki_sv650.png`,
        "firma": "Suzuki",
        "tip": "Naked",
        "motorHacmi": "650",
        "sifirYuz": "3.9",
        "max": "180",
        "tuketim": "4.5",
        "agirlik": "198",
        "ulke": "Japonya",
        "yakitKapasitesi": "14.5",
        "paragraf": <p>Japon mühendisliğinin zarif bir örneği olan Suzuki SV650, hem performansı hem de tasarımı ile dikkat çekiyor. V-Twin motor yapısı sayesinde hem düşük hem de yüksek devirlerde mükemmel bir tork sağlıyor. Gidon ve gaz tepkisi oldukça tatminkar, bu sayede sürücü aracı kontrol altında tutabiliyor. Şehir içi kullanımda oldukça konforlu olan SV650, uzun yolda da sürücüsünü yormuyor. Fren performansı da oldukça başarılı. Suzuki SV650, estetik tasarımı ve güçlü performansı ile naked motosikletler arasında kendine sağlam bir yer ediniyor.</p>
      },
      {
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "Kawasaki Z650",
        "image": `/images/motosiklet/kawasaki_z650.png`,
        "firma": "Kawasaki",
        "tip": "Naked",
        "motorHacmi": "650",
        "sifirYuz": "3.9",
        "max": "185",
        "tuketim": "4.7",
        "agirlik": "187",
        "ulke": "Japonya",
        "yakitKapasitesi": "15",
        "paragraf": <p>Japon üretici Kawasaki'nin başarılı naked modeli Z650, dinamik tasarımı ve güçlü motoru ile ön plana çıkıyor. Paralel-twin motor yapısı, düşük ve orta devirlerde mükemmel bir tork ve güç sunuyor. Gidonun rahat ergonomisi ve iyi ağırlık dağılımı, sürücüye tam bir kontrol hissi veriyor. Fren sistemi, etkili ve güvenilir. Şehir içi ve şehirlerarası kullanımlarda konforlu bir sürüş deneyimi sunuyor. Yol tutuşu ve sürüş dinamikleri de oldukça başarılı. Kawasaki Z650, günlük kullanım ve sportif sürüşler için ideal bir seçenek.</p>
      },    
      {
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "Honda CB650R",
        "image": `/images/motosiklet/honda_cb650r.png`,
        "firma": "Honda",
        "tip": "Naked",
        "motorHacmi": "649",
        "sifirYuz": "4.0",
        "max": "180",
        "tuketim": "5.3",
        "agirlik": "202",
        "ulke": "Japonya",
        "yakitKapasitesi": "15.4",
        "paragraf": <p>Japon mühendisliği ile tasarlanan Honda CB650R, sade ve modern tasarımı ile dikkat çekiyor. Inline-4 motor konfigürasyonu, motorun lineer güç teslimatı ve tatmin edici tork çıkışı sağlıyor. Yol tutuşu ve süspansiyon sistemi, şehir içinde ve otoyol sürüşlerinde sürücüsüne güven veriyor. Geniş ve konforlu koltuk pozisyonu sayesinde, uzun mesafeli sürüşlerde bile rahat bir kullanım sunuyor. Frendeki hissiyat ve performans tatmin edici seviyede. Genel olarak, Honda CB650R hem günlük kullanım hem de sportif sürüşler için dengeli bir seçenek sunuyor.</p>
      },
      {
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name": "Ducati Monster 696",
        "image": `/images/motosiklet/ducati_monster_696.png`,
        "firma": "Ducati",
        "tip": "Naked",
        "motorHacmi": "696",
        "sifirYuz": "4.1",
        "max": "210",
        "tuketim": "5.1",
        "agirlik": "161",
        "ulke": "İtalya",
        "yakitKapasitesi": "15",
        "paragraf": <p>İtalyan şıklığı ve mühendisliği ile Ducati Monster 696, estetik ve performansı bir arada sunuyor. V-twin motor yapısı, düşük devirlerde bile güçlü tork üretiyor. Sportif sürüş pozisyonu, sürücüyü yola daha yakın hissettiriyor. Yol tutuşu ve fren performansı, sınıfının en iyileri arasında. Hızlı ve keskin virajlarda bile güven veren bir sürüş deneyimi sunuyor. Ayrıca, Monster 696'nın özelleştirilebilir tasarımı, sürücülerin kişisel zevklerine göre modifiye edilebilmesine olanak tanıyor. Ducati Monster 696, her sürüşte adrenalini yüksek seviyede tutmayı başarıyor.</p>
      },
      {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Yamaha MT-07",
        "image": `/images/motosiklet/yamaha_mt_07.png`,
        "firma": "Yamaha",
        "tip": "Naked",
        "motorHacmi": "689",
        "sifirYuz": "3.6",
        "max": "214",
        "tuketim": "4.3",
        "agirlik": "164",
        "ulke": "Japonya",
        "yakitKapasitesi": "14",
        "paragraf": <p>Japon mühendisliği ile tasarlanan Yamaha MT-07, sınıfının en dikkat çeken modellerinden biri. CP2 motor yapısı, lineer güç dağılımı ve yüksek torku ile biliniyor. Sürüş pozisyonu rahat, görüş açısı geniş ve kontrolleri hassas. Süspansiyonları yola iyi uyum sağlıyor ve frenleri güçlü. Minimalist tasarımı ve LED farları ile modern bir görünüm sunuyor. Hafif ve kompakt yapısı, şehir içi trafikte manevra kabiliyetini artırıyor. Yamaha MT-07, çevikliği ve günlük kullanım dostu yapısı ile naked sınıfında iddialı bir pozisyon alıyor.</p>
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

          <Details nightMode={nightMode} addDate={addDate} readTimeSpan={jsonList.readTimeSpan}/>
          
          <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

          {(summaryText)}

          <hr className='split'/>

          {<Ens_motosiklet jsonContentArray={jsonContentArray}/>}
        
        </article>
        
        <OtherContents />
        
        
    </Main>
  )
}