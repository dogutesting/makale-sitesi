import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';
import HeadHtml from '@/components/HeadHtml';

export default function Eniyi1000ccNakedMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "1000cc", "motosiklet", "naked"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-1000-cc-naked-motosiklet";
  const baslik = "En İyi 10 1000 CC Naked Motosiklet";
  const metin = "1000cc sınıfı naked motosikletler, tecrübeli motosiklet sürücülerinin ellerinde bile agresifliğini ve yırtıcılığını bırakmayan, adrenalini zirveye taşıyan makinalardır. Bu devasa güçler, her bir gaz hareketiyle kendini gösterirken, derin ve tok egzoz notaları ile çevrenizdeki herkesin dikkatini çeker. İster şehir içinde ister açık yolda olsun, bu motosikletler sürücülerine her zaman tam kontrollü bir agresiflik sunar. Yüksek performansları, sofistike teknolojileri ve etkileyici tasarımları ile bu makinalar, sadece hız ve güç tutkunlarına hitap eder. Bu makalede, bu sınıfın en iyi temsilcilerini detaylarıyla inceliyor ve sizi bu benzersiz deneyimi keşfetmeye davet ediyoruz. Okurken heyecanlanacak ve belki de bir sonraki motosikletinizi seçerken bu listeye göz atacaksınız.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const okunmaSuresi = "5";
  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-03T18:07:00+03:00";
  const degistirilmeTarihi = "2023-10-03T18:07:00+03:00";
  const addDate = "03.10.23";

  
  const summaryText = <p className='summary_text'>{metin}</p>;

  const jsonContentArray = [
    {
    "num": "10",
    "url": `https://enonlar.com/${url}#bolum-10`,
    "name": "Kawasaki Z1000",
    "image": `/images/motosiklet/kawasaki_z1000.jpg`,
    "firma": "Kawasaki",
    "tip": "Naked",
    "motorHacmi": "1043",
    "sifirYuz": "3.4",
    "max": "258",
    "tuketim": "6.4",
    "agirlik": "221",
    "ulke": "Japonya",
    "yakitKapasitesi": "17",
    "paragraf": <p>Japonya'nın güçlü motosiklet üreticilerinden Kawasaki'nin bu agresif tasarımlı naked modeli, günlük sürüşler kadar heyecanlı sürüşler için de ideal. Z1000, sert ve atak bir yapıya sahip. 1043 cc'lik motoru ile düşük devirden itibaren güçlü tork sunuyor. Gidonunun ve gaz tepkilerinin doğru zamanlama ve hassasiyeti, sürücüsüne yüksek kontrol sağlıyor. Yol tutuşu ve viraj kabiliyeti, sportif sürüşler için oldukça tatminkar. Estetik ve aerodinamik tasarımı sayesinde, Z1000 sürücüsüne sadece performans değil, aynı zamanda stil de sunuyor. Kawasaki Z1000, güç ve estetiği bir araya getiren bir naked motosiklet örneği.</p>
    },
    {
      "num": "9",
      "url": `https://enonlar.com/${url}#bolum-9`,
      "name": "Aprilia Tuono V4 1100 RR",
      "image": `/images/motosiklet/aprilia_tuono_v4_1100_rr.png`,
      "firma": "Aprilia",
      "tip": "Naked",
      "motorHacmi": "1077",
      "sifirYuz": "3.3",
      "max": "250",
      "tuketim": "6.1",
      "agirlik": "209",
      "ulke": "İtalya",
      "yakitKapasitesi": "18.5",
      "paragraf": <p>İtalyan üretici Aprilia'nın başyapıtlarından biri olan Tuono V4 1100 RR, sıradışı bir performans ve çarpıcı bir tasarım sunuyor. Motorun V4 motor konfigürasyonu, torkun geniş bir devir aralığında dağılmasını sağlayarak sürücüsüne eşsiz bir hızlanma ve tepki veriyor. Aprilia'nın gelişmiş elektronik sürüş destek sistemleri, bu motosikleti her seviyeden sürücü için dostane ve güvenli kılıyor. Yol tutuşu ve fren performansı, markanın yarış kökenlerini yansıtacak şekilde üst düzeyde.</p>
    },  
    {
    "num": "8",
    "url": `https://enonlar.com/${url}#bolum-8`,
    "name": "Ducati Monster 1200",
    "image": `/images/motosiklet/ducati_monster_1200.png`,
    "firma": "Ducati",
    "tip": "Naked",
    "motorHacmi": "1198",
    "sifirYuz": "3.2",
    "max": "250",
    "tuketim": "5.9",
    "agirlik": "209",
    "ulke": "İtalya",
    "yakitKapasitesi": "16.5",
    "paragraf": <p>İtalyan estetiği ve mühendisliği ile öne çıkan Ducati Monster 1200, hem günlük sürüşler hem de sportif kullanım için uygun bir seçenek. V-twin motoru yüksek tork ve güç sunarken, yol tutuşu ve viraj kabiliyeti de üst düzey. Gidon ve gaz tepkisi oldukça hassas, bu da sürücüye tam kontrol sağlar. Sert süspansiyon sistemi kötü yol koşullarında konforu biraz düşürse de, genel olarak Ducati Monster 1200, performans ve tasarımı bir araya getiren başarılı bir model.</p>
    },
    {
    "num": "7",
    "url": `https://enonlar.com/${url}#bolum-7`,
    "name": "Yamaha MT-10",
    "image": `/images/motosiklet/yamaha_mt_10.png`,
    "firma": "Yamaha",
    "tip": "Naked",
    "motorHacmi": "998",
    "sifirYuz": "3.1",
    "max": "250",
    "tuketim": "6.1",
    "agirlik": "210",
    "ulke": "Japonya",
    "yakitKapasitesi": "17",
    "paragraf": <p>Japonya'nın önde gelen motosiklet üreticilerinden Yamaha'nın MT-10 modeli, agresif tasarımı ve yüksek performansı ile dikkat çekiyor. Crossplane kranklı dört silindirli motoru, güçlü tork ve hızlı hızlanma sunarken, elektronik kontrol sistemleri ve modlar sayesinde sürücüsüne esneklik ve kontrol sağlıyor. Yol tutuşu ve fren performansı, motorun bu segmentteki rakipleri arasında öne çıkmasını sağlıyor. Gidon ve gaz tepkisi hassas, bu da sürücüye mükemmel bir kontrol ve yanıt veriyor. Yamaha MT-10, her türlü yolda ve koşulda güvenli ve eğlenceli bir sürüş deneyimi sunuyor.</p>
    },
    {
    "num": "6",
    "url": `https://enonlar.com/${url}#bolum-6`,
    "name": "KTM 1290 Super Duke R",
    "image": `/images/motosiklet/ktm_1290_super_duke_r.png`,
    "firma": "KTM",
    "tip": "Naked",
    "motorHacmi": "1301",
    "sifirYuz": "2.8",
    "max": "280",
    "tuketim": "5.9",
    "agirlik": "189",
    "ulke": "Avusturya",
    "yakitKapasitesi": "18",
    "paragraf": <p>Avusturya'nın sert ve agresif motosiklet üreticisi KTM, 1290 Super Duke R ile agresifliğini sergiliyor. Büyük hacimli motoru ve devasa torku ile her türlü hızlanmayı ve manevrayı rahatlıkla gerçekleştirebilirsiniz. Motosiklet, elektronik güvenlik ve sürüş yardım sistemleri ile donatılmış, bu da sürücüye daha fazla kontrol ve güvenlik sunuyor. Yol tutuşu ve fren performansı, bu segmentin önde gelenlerinden. Gidon ve gaz tepkisi oldukça hassas, bu da dinamik sürüşleri daha eğlenceli ve kontrol edilebilir kılıyor. KTM 1290 Super Duke R, performansı ve agresif tasarımı ile tam bir adrenalin makinesi.</p>
    },
    {
    "num": "5",
    "url": `https://enonlar.com/${url}#bolum-5`,
    "name": "Honda CB1000R",
    "image": `/images/motosiklet/honda_cb1000r.png`,
    "firma": "Honda",
    "tip": "Naked",
    "motorHacmi": "998",
    "sifirYuz": "3.5",
    "max": "234",
    "tuketim": "6.2",
    "agirlik": "212",
    "ulke": "Japonya",
    "yakitKapasitesi": "16.2",
    "paragraf": <p>Japonya'nın köklü motosiklet üreticisi Honda'nın CB1000R modeli, sofistike tasarımı ve mükemmel işçiliği ile dikkat çeker. Dört silindirli motoru, güçlü ve lineer bir güç dağılımı sağlarken, yol tutuşu ve fren performansı da sınıf standartlarının üzerinde. Gidon ve gaz tepkisi son derece dengeli, bu sayede motoru kontrol etmek oldukça kolay. Honda CB1000R, şehir içinde veya uzun yolda, hem konforlu hem de dinamik bir sürüş deneyimi sunar. Ayrıca, motosikletin LED farları ve dijital gösterge paneli gibi modern özellikleri, kullanıcısına günümüz teknolojisini sunuyor.</p>
    },
    {
    "num": "4",
    "url": `https://enonlar.com/${url}#bolum-4`,
    "name": "Suzuki GSX-S1000",
    "image": `/images/motosiklet/suzuki_gsx_s1000.png`,
    "firma": "Suzuki",
    "tip": "Naked",
    "motorHacmi": "999",
    "sifirYuz": "3.4",
    "max": "241",
    "tuketim": "5.9",
    "agirlik": "209",
    "ulke": "Japonya",
    "yakitKapasitesi": "19",
    "paragraf": <p>Japonya'nın tecrübeli motosiklet üreticisi Suzuki'nin GSX-S1000 modeli, agresif tasarımı ve yüksek performansı ile öne çıkar. Bu model, dört silindirli motoru ile süratli bir şekilde hızlanırken, yol tutuşu ve frenleme performansı da kullanıcılarına güven veriyor. Gidon tepkisi dengeli ve gaz tepkisi hassas, bu da sürücülerin motoru daha iyi kontrol etmelerini sağlıyor. GSX-S1000, virajlarda istikrarlı bir performans sunarken, süspansiyon sistemi de hem konforlu hem de sert bir sürüş deneyimi sunuyor. Suzuki GSX-S1000, güçlü motoru ve sportif tasarımı ile naked motosiklet segmentinde kendine sağlam bir yer buluyor.</p>
    },   
    {
    "num": "3",
    "url": `https://enonlar.com/${url}#bolum-3`,
    "name": "BMW S1000R",
    "image": `/images/motosiklet/bmw_s1000r.png`,
    "firma": "BMW",
    "tip": "Naked",
    "motorHacmi": "999",
    "sifirYuz": "3.1",
    "max": "260",
    "tuketim": "6.7",
    "agirlik": "205",
    "ulke": "Almanya",
    "yakitKapasitesi": "16.5",
    "paragraf": <p>Alman mühendisliğinin bir simgesi olan BMW'nin S1000R modeli, yüksek performansı ve ince tasarım detayları ile dikkat çekiyor. Motosiklet, güçlü motoru ve mükemmel yol tutuşu ile sürücülerine tam bir sürüş deneyimi sunuyor. Gaz tepkisi hassas ve motorun gücü, hızlanma esnasında sürücüye etkileyici bir tork sağlıyor. S1000R, virajlarda da oldukça başarılı ve güven veriyor. Süspansiyon sistemi, sürücünün her türlü yol koşulunda rahat ve kontrolü bir sürüş deneyimi yaşamasını sağlıyor. BMW S1000R, premium bir naked motosiklet deneyimi arayan sürücüler için ideal bir tercih.</p>
    },
    {
    "num": "2",
    "url": `https://enonlar.com/${url}#bolum-2`,
    "name": "MV Agusta Brutale 1000 RR",
    "image": `/images/motosiklet/mv_agusta_brutale_1000rr.png`,
    "firma": "MV Agusta",
    "tip": "Naked",
    "motorHacmi": "998",
    "sifirYuz": "3.1",
    "max": "300",
    "tuketim": "6.4",
    "agirlik": "186",
    "ulke": "İtalya",
    "yakitKapasitesi": "16",
    "paragraf": <p>İtalyan zarafeti ve mühendisliği, MV Agusta Brutale 1000 RR'de kendini gösteriyor. Bu motosiklet, inovatif aerodinamik tasarımı ve 208 beygir gücündeki muazzam motoru ile sınıfındaki diğer motosikletlerden ayrılıyor. Sürücüsüne sadece yüksek performans değil, aynı zamanda konfor ve kolay kullanım sunuyor. Elektronik kontrol sistemleri ve tamamen ayarlanabilir süspansiyon, her türlü yol koşulunda mükemmel bir sürüş deneyimi sağlıyor.</p>
    },  
    {
    "num": "1",
    "url": `https://enonlar.com/${url}#bolum-1`,
    "name": "Ducati Streetfighter V4",
    "image": `/images/motosiklet/ducati_streetfighter_v4.png`,
    "firma": "Ducati",
    "tip": "Naked",
    "motorHacmi": "1103",
    "sifirYuz": "2.9",
    "max": "290",
    "tuketim": "6.7",
    "agirlik": "201",
    "ulke": "İtalya",
    "yakitKapasitesi": "16",
    "paragraf": <p>İtalya'nın prestijli motosiklet üreticisi Ducati'nin bu eseri, aerodinamik kanatları ve elektronik süspansiyon sistemleri ile öne çıkıyor. Streetfighter V4, sadece sokaklarda değil, pistlerde de kendini kanıtlıyor. Sürücüler, etkileyici bir güç, mükemmel yol tutuşu ve adrenalin dolu bir sürüş deneyimi elde ediyorlar. Ayrıca, Ducati'nin öncü elektronik kontrol sistemleri sayesinde, bu motosiklet sürüş güvenliğini ve kontrolünü artırıyor. Agresif tasarımı ve yüksek kaliteli bileşenleri ile Streetfighter V4, sınıfının en iyileri arasında kendine sağlam bir yer buluyor.</p>
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