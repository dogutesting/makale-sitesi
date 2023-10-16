import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';
import HeadHtml from '@/components/HeadHtml';

export default function Eniyi125ccSuperMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "125cc", "motosiklet", "super", "sport"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-125-cc-super-sport-motosiklet";
  const baslik = "En İyi 10 125 CC Super Sport Motosiklet";
  const metin = "125cc'lik supersport motosikletler, motosiklet dünyasının heyecan verici bir bölümünü temsil eder. Hem yeni başlayanlar hem de genç sürücüler için tasarlanmış bu makineler, sürücülerine yarışçı ruhunu, hızı ve esnekliği ilk elden deneyimleme fırsatı sunar. Estetik tasarımları, aerodinamik yapıları ve sportif karakterleri, sürücülerini sıkı bir yol tutuşu ve duyarlı manevra kabiliyeti ile buluşturur. Özellikle genç ve enerjik sürücüler için tasarlanmış bu motosikletler, onlara sürüş becerilerini geliştirme ve motor sporlarına olan ilgilerini derinleştirme fırsatı verir. Ayrıca, bu segmentteki motosikletler genellikle ekonomik yakıt tüketimi ve uygun fiyatlı bakım maliyetleri sunarak, bütçe dostu bir sürüş deneyimi sağlar. 125cc'lik supersport motosikletlerin sunduğu bu eşsiz deneyimi yaşamak ve bu sınıfın en iyi modellerini keşfetmek adına, makalemizi okuyarak bu küçük canavarlar hakkında detaylı bilgi edinin.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const okunmaSuresi = "6";
  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-05T01:13:00+03:00";
  const degistirilmeTarihi = "2023-10-05T01:13:00+03:00";
  const addDate = "05.10.23";

  
  const summaryText = <p className='summary_text'>{metin}</p>;

  const jsonContentArray = [
    {
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name": "Sinnis GP 125",
        "image": `/images/motosiklet/sinnis_gp_125.png`,
        "firma": "Sinnis",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "13.2",
        "max": "115",
        "tuketim": "2.8",
        "agirlik": "134",
        "ulke": "Birleşik Krallık",
        "yakitKapasitesi": "13.5",
        "paragraf": <p>Birleşik Krallık menşeili Sinnis, GP 125 modeli ile 125cc sınıfında rekabet ediyor. Bu model, 125cc'lik motor hacmi ve uygun fiyatı ile dikkat çekiyor. Sinnis GP 125, yeni başlayanlar için uygun, basit ve erişilebilir bir seçenek sunuyor. Hafifliği ve kompakt yapısı sayesinde kullanıcılarına rahat bir sürüş deneyimi sağlıyor. Max hızı ve 0-100 km/s hızlanması, bu sınıfta beklenen performansı sunuyor. Yakıt tüketimi oldukça düşük ve bu da onu ekonomik bir seçenek haline getiriyor. Fakat, genel performansı ve donanımları daha pahalı ve premium modeller kadar tatmin edici değil.</p>
    },
    {
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name": "Lexmoto LXR 125",
        "image": `/images/motosiklet/lexmoto_lxr_125.png`,
        "firma": "Lexmoto",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "13.8",
        "max": "110",
        "tuketim": "2.7",
        "agirlik": "142",
        "ulke": "Birleşik Krallık",
        "yakitKapasitesi": "13.8",
        "paragraf": <p>Birleşik Krallık'tan bir diğer 125cc süper sport motosiklet olan Lexmoto LXR 125, genç ve yeni başlayan sürücüler için tasarlanmış. Hem şehir içi hem de şehir dışı sürüşler için uygun olan LXR 125, hafifliği ve kolay manevra kabiliyeti ile biliniyor. Max hızı ve 0-100 km/s hızlanması, bu sınıfta beklenen performansı sunuyor. Yakıt tüketimi konusunda oldukça ekonomik olan bu model, düşük maliyetli bir süper sport motosiklet arayanlar için ideal bir seçenek. Ancak, donanım ve performans açısından daha pahalı modellerle kıyaslandığında biraz daha sade bir profil çiziyor.</p>
    },
    {
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name": "Derbi GPR 125",
        "image": `/images/motosiklet/derbi_gpr_125.png`,
        "firma": "Derbi",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "13.9",
        "max": "110",
        "tuketim": "2.9",
        "agirlik": "134",
        "ulke": "İspanya",
        "yakitKapasitesi": "13.5",
        "paragraf": <p>İspanyol motosiklet üreticisi Derbi'nin 125cc sınıfındaki temsilcisi GPR 125, genç sürücüler için sportif bir seçenek sunuyor. Hafifliği ve kompakt tasarımı sayesinde, GPR 125 genç sürücülerin kontrolünü kolaylaştırırken, şehir içi ve çevre yollarındaki sürüşler için de uygun bir seçenek sunuyor. Motorunun sağladığı tatminkar performans ve yakıt verimliliği, bu modeli ekonomik bir süper sport motosiklet haline getiriyor. Ancak, yüksek hızlarda sürüş stabilitesi ve rüzgar koruması gibi alanlarda biraz eksiklikler gösterebilir. Derbi GPR 125, günlük sürüşler ve hafta sonu gezileri için uygun, eğlenceli bir motosiklet.</p>
    },
    {
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name": "Aprilia Tuono 125",
        "image": `/images/motosiklet/aprilia_tuono_125.png`,
        "firma": "Aprilia",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "15.0",
        "max": "115",
        "tuketim": "2.8",
        "agirlik": "144",
        "ulke": "İtalya",
        "yakitKapasitesi": "14.5",
        "paragraf": <p>İtalyan motosiklet üreticisi Aprilia'nın süper sport segmentindeki 125cc'lik modeli Tuono 125, performans ve stilin mükemmel bir birleşimini sunuyor. Bu model, genç ve deneyimsiz sürücüler için mükemmel bir başlangıç motosikleti olmasına rağmen, tecrübeli sürücüler için de eğlenceli ve zevkli bir sürüş deneyimi vaat ediyor. Aprilia Tuono 125, sportif sürüş pozisyonu ve rüzgarı kesen tasarımı sayesinde, hem şehir içi hem de şehir dışı sürüşlerde sürücüsüne eşsiz bir konfor ve kontrol sunuyor. Motosikletin dinamik tasarımı, genç ve enerjik bir görünüm sağlarken, hafifliği ve kompakt yapısı sayesinde manevra kabiliyeti de oldukça yüksek. Yakıt verimliliği ve düşük işletme maliyetleri ile Aprilia Tuono 125, bütçe dostu bir süper sport motosiklet seçeneği sunuyor.</p>
    },
    {
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name": "Kawasaki Ninja 125",
        "image": `/images/motosiklet/kawasaki_ninja_125.png`,
        "firma": "Kawasaki",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "13.0",
        "max": "112",
        "tuketim": "2.8",
        "agirlik": "148",
        "ulke": "Japonya",
        "yakitKapasitesi": "11",
        "paragraf": <p>Japon motosiklet devi Kawasaki'nin genç ve yeni sürücüler için sunduğu Ninja 125, markanın prestijli Ninja serisinin küçük motorlu bir temsilcisidir. Sportif ve aerodinamik tasarımı sayesinde Ninja 125, genç sürücülerin dikkatini çekiyor ve onlara supersport motosiklet sürüş deneyimini yaşatmayı amaçlıyor. 125cc motor hacmi, Ninja 125'i günlük kullanım ve kısa mesafeli turlar için uygun kılar, aynı zamanda düşük yakıt tüketimi sayesinde ekonomik bir seçenek sunar. Motosiklet, rüzgarı kesen tasarımı ve sportif pozisyonu sayesinde hızlı sürüşlerde bile iyi bir yol tutuşu ve denge sunuyor. Frenleri güçlü ve etkili, bu da genç sürücülerin kendilerini güvende hissetmelerini sağlar. Kawasaki Ninja 125, genç sürücülerin supersport segmentine giriş yapmaları için uygun ve ekonomik bir seçenektir.</p>
    },
    {
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name": "Aprilia RS4 125",
        "image": `/images/motosiklet/aprilia_rs4_125.png`,
        "firma": "Aprilia",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "13.8",
        "max": "122",
        "tuketim": "2.5",
        "agirlik": "134",
        "ulke": "İtalya",
        "yakitKapasitesi": "14.5",
        "paragraf": <p>İtalyan motosiklet üreticisi Aprilia'nın genç ve yeni başlayan sürücüler için tasarladığı RS4 125, hem şehir içi hem de açık yolda sürüş için mükemmel bir tercih. 125cc'lik motoru sayesinde, RS4 125 enerjik bir performans ve çeviklik sunuyor. Motosikletin kompakt ve hafif tasarımı, genç sürücüler için mükemmel bir kontrol ve rahatlık sağlıyor. Yol tutuşu ve fren performansı bu segmentteki diğer modellere kıyasla oldukça üstün. Aprilia RS4 125, genç sürücülerin supersport motosiklet dünyasına adım atmaları için mükemmel bir başlangıç seçeneği sunuyor.</p>
    },
    {
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "Suzuki GSX-R125",
        "image": `/images/motosiklet/suzuki_gsx_r125.png`,
        "firma": "Suzuki",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "13.2",
        "max": "115",
        "tuketim": "2.6",
        "agirlik": "134",
        "ulke": "Japonya",
        "yakitKapasitesi": "11",
        "paragraf": <p>Japonya'nın önde gelen motosiklet üreticilerinden Suzuki'nin 125cc segmentindeki iddialı modeli GSX-R125, genç ve yeni sürücüler için mükemmel bir giriş seviyesi spor motosikleti sunuyor. Aerodinamik ve agresif tasarımı, bu motosikleti dikkat çekici ve sportif kılıyor. Suzuki'nin güçlü ve verimli 125cc motoru, düşük devirlerde bile tatminkar bir performans ve tork sağlıyor. GSX-R125, sürücüsüne atik ve çevik bir sürüş deneyimi sunuyor, bu da onu şehir içi trafiğinde ve dar sokaklarda kullanmak için ideal kılar. Yol tutuşu ve fren performansı, bu segmentin genel beklentilerini karşılıyor, ve motosiklet, sürücüsünün güvenli bir şekilde sürüş yapabilmesi için gerekli tüm güvenlik özelliklerine sahip. Suzuki GSX-R125, ekonomik yakıt tüketimi ve uygun fiyatı ile genç sürücüler için cazip bir seçenek oluşturuyor.</p>
    },        
    {
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name": "KTM RC 125",
        "image": `/images/motosiklet/ktm_rc_125.png`,
        "firma": "KTM",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "13.0",
        "max": "120",
        "tuketim": "2.7",
        "agirlik": "135",
        "ulke": "Avusturya",
        "yakitKapasitesi": "10",
        "paragraf": <p>Avusturya'nın efsanevi motosiklet üreticisi KTM, RC 125 modeliyle genç ve yeni başlayan sürücüler için bir başlangıç seviyesi supersport motosikleti sunuyor. Motosikletin keskin ve agresif tasarımı, KTM'nin spor motosikletlerdeki uzmanlığını ve yarış DNA'sını yansıtıyor. 125cc motor hacmi, RC 125'i hem uygun fiyatlı hem de yakıt verimli kılıyor. Motosiklet, genç sürücülere sportif bir sürüş deneyimi sunarken, aynı zamanda kullanıcı dostu ve affedici bir sürüş karakteristiği sergiliyor. Yol tutuşu ve fren performansı, bu segmentteki diğer motosikletlerle karşılaştırıldığında oldukça tatminkar. Ayrıca, KTM RC 125, genç sürücülerin sürüş becerilerini geliştirmeleri ve supersport motosiklet sürüşüne alışmaları için mükemmel bir platform sunuyor. RC 125, genç ve enerjik sürücüler için mükemmel bir seçenektir.</p>
    },
    {
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name": "Honda CBR125R",
        "image": `/images/motosiklet/honda_cbr125r.png`,
        "firma": "Honda",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "13.8",
        "max": "110",
        "tuketim": "2.7",
        "agirlik": "136.9",
        "ulke": "Japonya",
        "yakitKapasitesi": "13",
        "paragraf": <p>Japonya'nın önde gelen motosiklet üreticilerinden biri olan Honda'nın CBR125R modeli, küçük motor hacmine rağmen heyecan verici bir sürüş deneyimi sunuyor. CBR125R, sürücülerine, kompakt boyutları ve hafifliği sayesinde, harika bir manevra kabiliyeti ve kolay kontrol imkanı tanır. Motosiklet, aerodinamik tasarımı ve sportif görünümü ile dikkat çekerken, performansı ve yakıt verimliliği ile de genç ve deneyimsiz sürücüler için ideal bir seçimdir. Honda'nın güvenilirliği ve dayanıklılığı, CBR125R'yi 125cc super sport motosiklet kategorisinde popüler bir seçenek haline getirir.</p>
    },
    {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Yamaha YZF-R125",
        "image": `/images/motosiklet/yamaha_yzf_r125.png`,
        "firma": "Yamaha",
        "tip": "Super Sport",
        "motorHacmi": "125",
        "sifirYuz": "13.0",
        "max": "120",
        "tuketim": "2.7",
        "agirlik": "142",
        "ulke": "Japonya",
        "yakitKapasitesi": "11.5",
        "paragraf": <p>Japonya'nın köklü motosiklet üreticisi Yamaha, YZF-R125 modeli ile genç ve yeni başlayan sürücüler için üstün bir giriş seviyesi supersport motosiklet sunuyor. YZF-R125'in keskin ve aerodinamik tasarımı, motosikletin sportif karakterini ve Yamaha'nın yarış DNA'sını vurguluyor. 125cc'lik motoru, iyi bir yakıt verimliliği ve yeterli bir performans sunarken, motosikletin kompakt boyutları ve hafif yapısı, yeni sürücüler için sürüşü kolay ve kontrol edilebilir kılıyor. YZF-R125, genç sürücülerin sürüş becerilerini geliştirmeleri ve supersport motosiklet sürüşüne alışmaları için mükemmel bir platform sunuyor. Yol tutuşu ve fren performansı, bu segmentteki diğer motosikletlerle karşılaştırıldığında oldukça tatminkar, ve YZF-R125, genç sürücüler için güvenli ve eğlenceli bir sürüş deneyimi sunuyor. YZF-R125, sportif tasarımı, güvenilir performansı ve kullanıcı dostu sürüş karakteristikleri ile 125cc supersport segmentinde lider bir konumda bulunuyor.</p>
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

          <Details nightMode={nightMode} addDate={addDate} readTimeSpan={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan} kategori={kategori}/>
          
          <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

          {(summaryText)}

          <hr className='split'/>

          {<Ens_motosiklet jsonContentArray={jsonContentArray}/>}
        
        </article>
        
        <OtherContents />
        
        
    </Main>
  )
}