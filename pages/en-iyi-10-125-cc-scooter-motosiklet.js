import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';
import HeadHtml from '@/components/HeadHtml';

export default function Eniyi50ccScooterMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "125cc", "motosiklet", "scooter"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-125-cc-scooter-motosiklet";
  const baslik = "En İyi 10 125 CC Scooter Motosiklet";
  const metin = "Scooter motosikletler, şehir içi ulaşımda rahatlık ve konfor arayanlar için ideal bir seçenektir. Küçük boyutları, agil yapıları ve geniş bagaj alanları sayesinde, scooterlar, yoğun trafikte rahat hareket edebilme ve park sorununu minimalize edebilme avantajları sunar. 100cc ve 125cc motor hacmine sahip scooter modelleri ise, hem yeni başlayanlar hem de deneyimli sürücüler için uygun bir seçim olabilir. Bu motor hacimleri, günlük şehir içi kullanım için yeterli performansı, ekonomik yakıt tüketimini ve düşük bakım maliyetlerini bir araya getirir. 100cc ve 125cc scooterlar, genelde LED farlar, dijital gösterge panelleri, geniş depolama alanları ve modern güvenlik özellikleri gibi konfor ve fonksiyonellik özellikleri sunar. Ayrıca, bu hacimdeki scooterlar genellikle uygun fiyatlı seçenekler sunar, bu da onları gençler, öğrenciler ve bütçesini düşünen sürücüler için cazip kılar. İşte karşınızda, Türkiye'deki en popüler 10 adet 125cc ve 100cc scooter modeli. Listemize başlayalım!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-10T01:00:22+03:00";
  const degistirilmeTarihi = "2023-10-10T00:22:00+03:00";
  const addDate = "10.10.23";

  
  const summaryText = <p className='summary_text'>{metin}</p>;

  const jsonContentArray = [
    {
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name": "Hero Pleasure 100",
        "image": `/images/motosiklet/hero_pleasure_100.png`,
        "firma": "Hero",
        "tip": "Scooter",
        "motorHacmi": "102",
        "sifirYuz": "0",
        "max": "70",
        "tuketim": "2.3",
        "agirlik": "100",
        "ulke": "Hindistan",
        "yakitKapasitesi": "5",
        "paragraf": "<p>Hero Pleasure 100, Hindistan'ın önde gelen motosiklet üreticilerinden Hero MotoCorp tarafından üretilen kompakt bir scooter modelidir. 100cc motor hacmi ile şehir içi trafiğinde hızlı manevra kabiliyeti ve düşük yakıt tüketimi sunar. Pratik tasarımı ve uygun fiyatı ile bütçe dostu bir seçenek olarak öne çıkar. Hero Pleasure 100, kadın sürücüler için tasarlanmış ve pazarlanmış bir modeldir, bu nedenle geniş bir kullanıcı kitlesine hitap eder. Basit ve rahat tasarımı ile günlük ulaşım ihtiyaçları için ideal bir seçenektir.</p>"
    },        
    {
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name": "Honda Activa 100",
        "image": `/images/motosiklet/honda_activa_100.png`,
        "firma": "Honda",
        "tip": "Scooter",
        "motorHacmi": "102",
        "sifirYuz": "0",
        "max": "70",
        "tuketim": "2.2",
        "agirlik": "111",
        "ulke": "Japonya",
        "yakitKapasitesi": "5.7",
        "paragraf": "<p>Honda Activa 100, Japon motosiklet üreticisi Honda'nın güvenilir ve ekonomik bir scooter modelidir. 100cc motor hacmi ile düşük yakıt tüketimi ve günlük ulaşım için yeterli performans sunar. Honda'nın kalitesi ve güvenilirliği ile birleşen bu model, kullanıcılar için uzun ömürlü ve düşük bakım maliyetli bir seçenek haline gelir. Geniş depolama alanı ve konforlu koltuk, Honda Activa 100'ü pratik ve kullanıcı dostu bir scooter haline getirir. Otomatik şanzıman ve kolay kullanımı, her yaş grubundan sürücüler için uygun bir seçenek olmasını sağlar.</p>"
    },        
    {
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name": "TVS Wego 110",
        "image": `/images/motosiklet/tvs_wego_110.png`,
        "firma": "TVS",
        "tip": "Scooter",
        "motorHacmi": "110",
        "sifirYuz": "0",
        "max": "80",
        "tuketim": "2.2",
        "agirlik": "108",
        "ulke": "Hindistan",
        "yakitKapasitesi": "5",
        "paragraf": <p>TVS Wego 110, Hindistanlı motosiklet üreticisi TVS Motor Company tarafından üretilen 110cc motor hacmine sahip bir scooter modelidir. TVS Wego, şehir içi trafiğinde hızlı ve çevik manevralar için ideal bir tercihtir. Konforlu koltuk ve geniş ayak alanı, sürücülere rahat bir sürüş deneyimi sunar. Düşük yakıt tüketimi ve uygun fiyatı, TVS Wego'yu ekonomik bir seçenek haline getirir. Ayrıca, bu modelin entegre fren sistemi ve tam dijital hız göstergesi gibi modern özellikleri vardır, bu da onu daha güvenli ve kullanıcı dostu bir scooter haline getirir.</p>
    },      
    {
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name": "TVS Jupiter 125",
        "image": `/images/motosiklet/tvs_jupiter_125.png`,
        "firma": "TVS",
        "tip": "Scooter",
        "motorHacmi": "125",
        "sifirYuz": "0",
        "max": "100",
        "tuketim": "2",
        "agirlik": "110",
        "ulke": "Hindistan",
        "yakitKapasitesi": "5.3",
        "paragraf": <p>TVS Jupiter 125, Hindistanlı üretici TVS Motor Company'nin 125cc motor hacmine sahip bir diğer popüler scooter modelidir. Geniş iç hacmi ve geniş depolama alanı ile Jupiter 125, şehir içi trafiğinde rahat bir sürüş deneyimi sunar. ECO Power modu ve Start-Stop teknolojisi gibi yakıt tasarrufu özellikleri, düşük yakıt tüketimi ve uzun menzil sunar. Konforlu koltuk ve iyi tasarlanmış süspansiyon sistemi, sürücülere ve yolculara üst düzey bir konfor sunar. TVS Jupiter 125, günlük ulaşım ihtiyaçları için uygun fiyatlı ve güvenilir bir seçenektir.</p>
    },         
    {
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name": "Suzuki Burgman Street 125 EX",
        "image": `/images/motosiklet/suzuki_burgman_street_125.png`,
        "firma": "Suzuki",
        "tip": "Scooter",
        "motorHacmi": "125",
        "sifirYuz": "0",
        "max": "",
        "tuketim": "",
        "agirlik": "",
        "ulke": "Japonya",
        "yakitKapasitesi": "",
        "paragraf": <p>Suzuki Burgman Street 125, premium scooter segmentinde yer alan bir modeldir ve geniş iç hacmi, konforlu sürüş pozisyonu ile dikkat çeker. Suzuki'nin Japon mühendisliği ve kalitesi, bu scooter modelini güvenilir ve dayanıklı bir seçenek haline getirir. LED farlar, dijital gösterge paneli ve geniş depolama alanı gibi modern özellikler, Suzuki Burgman Street 125'i hem fonksiyonel hem de estetik açıdan cazip bir seçenek haline getirir. 125cc motor hacmi ve iyi tasarlanmış süspansiyon sistemi, hem şehir içi hem de şehirlerarası yolculuklar için uygun bir performans ve konfor sunar.</p>
    },
    {
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name": "Vespa LX 125",
        "image": `/images/motosiklet/vespa_lx_125.png`,
        "firma": "Vespa",
        "tip": "Scooter",
        "motorHacmi": "125",
        "sifirYuz": "0",
        "max": "",
        "tuketim": "",
        "agirlik": "",
        "ulke": "İtalya",
        "yakitKapasitesi": "",
        "paragraf": <p>Vespa LX 125, İtalyan zarafeti ve tarihi ile tanınan Vespa'nın ikonik scooter modellerinden biridir. Klasik Vespa tasarımı ve yüksek kaliteli malzemeler, LX 125'i scooter pazarında benzersiz bir seçenek haline getirir. 125cc motor hacmi ve iyi tasarlanmış süspansiyon sistemi, hem şehir içi hem de şehirlerarası sürüşler için uygun bir performans ve konfor sunar. Retro tasarımı ve premium kalite hissi, Vespa LX 125'i scooter meraklıları için cazip bir seçenek haline getirir. Ayrıca, bu modelde bulunan modern özellikler ve güvenlik sistemleri, günlük sürüş deneyimini daha güvenli ve keyifli hale getirir.</p>
    },
    {
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "Aprilia SR GT 125",
        "image": `/images/motosiklet/aprilia_sr_gt_125.png`,
        "firma": "Aprilia",
        "tip": "Scooter",
        "motorHacmi": "125",
        "sifirYuz": "0",
        "max": "",
        "tuketim": "",
        "agirlik": "",
        "ulke": "İtalya",
        "yakitKapasitesi": "",
        "paragraf": <p>Aprilia SR GT 125, Aprilia'nın adventure scooter segmentindeki modelidir. Geniş tekerlekleri ve yüksek süspansiyon sistemi ile dikkat çeker. Bu özellikler, SR GT 125'e hem şehir içi hem de hafif arazi koşullarında rahat bir sürüş deneyimi sunar. İtalyan tasarımı ve mühendisliği, scooter'ı hem görsel olarak çekici hem de performans açısından güvenilir kılar. 125cc motor hacmi ile güçlü bir performans sunar. Konforlu koltuk, geniş depolama alanı ve modern teknolojileri ile SR GT 125, günlük kullanım için oldukça uygun bir seçenektir.</p>
    },
    {
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name": "TVS Ntorq 125",
        "image": `/images/motosiklet/tvs_ntorq_125.png`,
        "firma": "TVS",
        "tip": "Scooter",
        "motorHacmi": "125",
        "sifirYuz": "0",
        "max": "",
        "tuketim": "",
        "agirlik": "",
        "ulke": "Hindistan",
        "yakitKapasitesi": "",
        "paragraf": <p>TVS Ntorq 125, Hindistan'ın popüler scooter modellerinden biridir ve genç sürücüler arasında oldukça popülerdir. Sportif tasarımı, yüksek performanslı 125cc motoru ve akıllı bağlantı özellikleri ile dikkat çeker. TVS Ntorq 125, dijital gösterge paneli, Bluetooth bağlantısı ve özelleştirilebilir LED göstergeler gibi modern teknolojileri ile donatılmıştır. Ayrıca, geniş depolama alanı ve konforlu koltuk, günlük sürüşler için uygun bir konfor ve fonksiyonellik sunar. TVS Ntorq 125, hem performans hem de teknoloji açısından güçlü bir scooter seçeneğidir.</p>
    },
    {
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name": "Yamaha RayZR 125",
        "image": `/images/motosiklet/yamaha_rayzr_125.png`,
        "firma": "Yamaha",
        "tip": "Scooter",
        "motorHacmi": "125",
        "sifirYuz": "0",
        "max": "",
        "tuketim": "",
        "agirlik": "",
        "ulke": "Japonya",
        "yakitKapasitesi": "",
        "paragraf": <p>Yamaha RayZR 125, genç ve enerjik tasarımı ile dikkat çeken bir scooter modelidir. 125cc motor hacmi, günlük sürüşler için yeterli performansı sunar. LED farlar, dijital gösterge paneli ve geniş depolama alanı gibi modern özellikler, RayZR 125'i hem pratik hem de estetik açıdan cazip bir seçenek haline getirir. Yamaha'nın Japon kalitesi ve mühendisliği, bu scooter'ı güvenilir ve dayanıklı bir seçenek yapar. Yumuşak süspansiyon sistemi ve konforlu koltuk, uzun süreli sürüşler için bile uygun bir konfor sunar. Ayrıca, ekonomik yakıt tüketimi ve düşük bakım maliyetleri, Yamaha RayZR 125'i uygun maliyetli bir scooter seçeneği haline getirir.</p>
    },
    {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Honda Activa 125",
        "image": `/images/motosiklet/honda_activa_125.png`,
        "firma": "Honda",
        "tip": "Scooter",
        "motorHacmi": "125",
        "sifirYuz": "0",
        "max": "",
        "tuketim": "",
        "agirlik": "",
        "ulke": "Japonya",
        "yakitKapasitesi": "",
        "paragraf": <p>Honda Activa 125, scooter segmentinin liderlerinden biri olarak bilinir ve güvenilirliği, düşük bakım maliyetleri ve mükemmel yakıt verimliliği ile tanınır. 125cc motor hacmi, günlük şehir içi sürüşler için yeterli performans sunar. LED farlar, dijital gösterge paneli ve geniş bagaj alanı gibi özellikler, Honda Activa 125'i hem fonksiyonel hem de modern bir scooter haline getirir. Konforlu koltuk ve yumuşak süspansiyon sistemi, uzun süreli sürüşler için bile uygun bir konfor sunar. Honda'nın üstün Japon mühendisliği ve kalitesi, bu modeli scooter pazarında güvenilir ve tercih edilen bir seçenek yapar.</p>
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