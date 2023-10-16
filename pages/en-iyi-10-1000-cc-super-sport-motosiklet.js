import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';
import HeadHtml from '@/components/HeadHtml';

export default function Eniyi1000ccSuperMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "1000cc", "motosiklet", "supersport"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-1000-cc-super-sport-motosiklet";
  const baslik = "En İyi 10 1000 CC Super Sport Motosiklet";
  const metin = "Süper spor motosikletler, mühendislik ve tasarımın zirvesini temsil eder. Bu hız canavarları, sadece dikkatli ve tecrübeli sürücüler için tasarlanmıştır. Her bir detay, sürücüsüne unutulmaz bir deneyim yaşatmak amacıyla özenle düşünülmüştür. İster pistte ister açık yolda olsun, bu motosikletler adrenalinin en saf halini sunar. Bu makalede, piyasadaki en iyi 10 süper spor motosikleti detaylı bir şekilde inceliyoruz. Hangi canavarın sizi en çok heyecanlandıracağını görmek için okumaya devam edin!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const okunmaSuresi = "4";
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
        "name": "Triumph Daytona 1050",
        "image": `/images/motosiklet/triumph_daytona_1050.png`,
        "firma": "Triumph",
        "tip": "Super Sport",
        "motorHacmi": "1050",
        "sifirYuz": "2.9",
        "max": "280",
        "tuketim": "5.8",
        "agirlik": "186",
        "ulke": "İngiltere",
        "yakitKapasitesi": "18",
        "paragraf": <p>İngiltere'nin süper spor mirası Triumph Daytona 1050, performans ve konforu bir arada sunar. 1050cc motoru ile güçlü bir hızlanma sağlarken, süspansiyon sistemi ve ergonomik yapısı, sürücüsüne konforlu bir sürüş deneyimi sunar. Yakıt kapasitesi ve tüketimi dengeli, fakat bazı sürücüler için gösterge panelinin modernize edilmesi gerekebilir. Yol tutuşu ve fren performansı güven verici, fakat sele konforu uzun sürüşler için ideal olmayabilir. Daytona 1050, hem günlük kullanım hem de sportif sürüşler için uygun bir seçenektir.</p>
    },  
    {
      "num": "9",
      "url": `https://enonlar.com/${url}#bolum-9`,
      "name": "KTM 1190 RC8 R",
      "image": `/images/motosiklet/ktm_rc8r.jpg`,
      "firma": "KTM",
      "tip": "Super Sport",
      "motorHacmi": "1195",
      "sifirYuz": "3.1",
      "max": "270",
      "tuketim": "6.2",
      "agirlik": "200",
      "ulke": "Avusturya",
      "yakitKapasitesi": "16.5",
      "paragraf": <p>Avusturya'nın hız makinesi KTM RC8 R, keskin hatları ve agresif tasarımı ile dikkat çeker. 1195cc motoru ile rakiplerine kıyasla daha güçlü bir performans sunar. Yol tutuşu mükemmel, frenler ise oldukça güvenilir. Yakıt kapasitesi diğerlerine kıyasla biraz düşük, fakat bu, RC8 R'nin hız tutkusunu asla gölgeleyemez. Gidon pozisyonu ve sele konforu, uzun sürüşlerde bile sürücüsüne rahatlık sağlar. RC8 R, sportif performansı ve estetik tasarımı ile süper sport motosiklet severler için ideal bir seçenek.</p>
    },
    {
      "num": "8",
      "url": `https://enonlar.com/${url}#bolum-8`,
      "name": "MV Agusta F4 RR",
      "image": `/images/motosiklet/mv_agusta_f4_rr.png`,
      "firma": "MV Agusta",
      "tip": "Super Sport",
      "motorHacmi": "998",
      "sifirYuz": "3.0",
      "max": "298",
      "tuketim": "6.4",
      "agirlik": "190",
      "ulke": "İtalya",
      "yakitKapasitesi": "20",
      "paragraf": <p>İtalyan estetiği ve mühendislik harikası MV Agusta F4 RR, dikkat çekici tasarımı ve üstün performansı ile bir sanat eseri niteliğindedir. Yol tutuşu ve fren performansı sınıfının en iyilerinden, motorun hızlanma kabiliyeti ve yüksek hızları ise adeta nefes kesici. Yakıt kapasitesi geniş, fakat yakıt tüketimi biraz yüksek. Sele konforu ve ergonomik yapısı, uzun mesafeli sürüşler için ideal. MV Agusta F4 RR, estetik ve performansı bir arada arayan sürücüler için mükemmel bir tercih.</p>
    },
    {
      "num": "7",
      "url": `https://enonlar.com/${url}#bolum-7`,
      "name": "Suzuki GSX-R1000",
      "image": `/images/motosiklet/suzuki_gsx_r1000.png`,
      "firma": "Suzuki",
      "tip": "Super Sport",
      "motorHacmi": "999",
      "sifirYuz": "2.9",
      "max": "299",
      "tuketim": "6.0",
      "agirlik": "202",
      "ulke": "Japonya",
      "yakitKapasitesi": "16",
      "paragraf": <p>Japon mühendisliğinin bir başyapıtı olan Suzuki GSX-R1000, dinamik tasarımı ve güçlü motoru ile dikkat çeker. Yol tutuşu ve fren performansı mükemmel, motorun hızlanma kabiliyeti ise etkileyici. Yakıt kapasitesi ortalamanın biraz altında, fakat bu, GSX-R1000'in performansını gölgeleyemez. Sele konforu ve ergonomik gidon yapısı, uzun sürüşler için rahatlık sunar. GSX-R1000, sportif performans ve güvenilirlik arayan sürücüler için ideal bir seçenek.</p>
    },
    {
      "num": "6",
      "url": `https://enonlar.com/${url}#bolum-6`,
      "name": "Honda CBR1000RR",
      "image": `/images/motosiklet/honda_cbr1000rr.png`,
      "firma": "Honda",
      "tip": "Super Sport",
      "motorHacmi": "999",
      "sifirYuz": "2.8",
      "max": "290",
      "tuketim": "5.6",
      "agirlik": "196",
      "ulke": "Japonya",
      "yakitKapasitesi": "16",
      "paragraf": <p>Honda'nın süper spor motosikleti CBR1000RR, mükemmel bir yol tutuşu ve güçlü motor performansı ile bilinir. Sürücüler, hızlanma kabiliyetini ve fren performansını takdir ederler. Yakıt kapasitesi ortalama, fakat yakıt tüketimi oldukça iyi. Ergonomik yapısı sayesinde uzun sürüşlerde bile konforlu. Honda CBR1000RR, pist günleri ve günlük sürüşler için uygun, güvenilir ve eğlenceli bir motosiklettir.</p>
    },
    {
      "num": "5",
      "url": `https://enonlar.com/${url}#bolum-5`,
      "name": "Kawasaki Ninja ZX-10R",
      "image": `/images/motosiklet/kawasaki_ninja_zx_10r.png`,
      "firma": "Kawasaki",
      "tip": "Super Sport",
      "motorHacmi": "998",
      "sifirYuz": "2.8",
      "max": "289",
      "tuketim": "5.9",
      "agirlik": "206",
      "ulke": "Japonya",
      "yakitKapasitesi": "17",
      "paragraf": <p>Japonya'nın hız makinesi Kawasaki Ninja ZX-10R, sürücülerin pist ve açık yolda tam kontrol sağlamaları için tasarlanmıştır. Yol tutuşu ve fren performansı etkileyici, motorun hızlanma kabiliyeti ise adeta bir füze kadar hızlı. Yakıt kapasitesi ve tüketimi dengeli. Sele konforu, uzun mesafeli sürüşlerde bile rahatlık sunar. ZX-10R'nin sportif ve agresif tasarımı, bu motosikleti her yere götürürken başları çevirir.</p>
    },
    {
      "num": "4",
      "url": `https://enonlar.com/${url}#bolum-4`,
      "name": "Yamaha YZF-R1",
      "image": `/images/motosiklet/yamaha_yzf_r1.png`,
      "firma": "Yamaha",
      "tip": "Super Sport",
      "motorHacmi": "998",
      "sifirYuz": "2.7",
      "max": "293",
      "tuketim": "5.8",
      "agirlik": "199",
      "ulke": "Japonya",
      "yakitKapasitesi": "17",
      "paragraf": <p>Yamaha'nın süper spor modeli YZF-R1, sürücüsüne yarış pistindeki deneyimi yaşatmak için tasarlanmıştır. Motorun hızlanma kabiliyeti ve yüksek hızları etkileyici, yol tutuşu ise sınıfının en iyilerindendir. Yakıt kapasitesi ve tüketimi dengeli, sele konforu ise uzun sürüşler için ideal. YZF-R1, sportif tasarımı ve üstün performansı ile süper spor motosiklet tutkunlarının favorilerinden biridir.</p>
    },
    {
      "num": "3",
      "url": `https://enonlar.com/${url}#bolum-3`,
      "name": "Aprilia RSV4 1100 Factory",
      "image": `/images/motosiklet/aprilia_rsv4_1100_factory.png`,
      "firma": "Aprilia",
      "tip": "Super Sport",
      "motorHacmi": "1078",
      "sifirYuz": "3.2",
      "max": "305",
      "tuketim": "6.3",
      "agirlik": "199",
      "ulke": "İtalya",
      "yakitKapasitesi": "18.5",
      "paragraf": <p>İtalyan tasarımının ve performansının bir sembolü olan Aprilia RSV4 1100 Factory, sınıfının en iyi motorlarından biri ile donatılmıştır. Yüksek hızlara ulaşma kabiliyeti ve yol tutuşu, bu motosikleti süper spor sınıfında bir efsane haline getirir. Yakıt kapasitesi geniş, fakat tüketim biraz yüksek. Konfor ve ergonomi, uzun sürüşler için uygun. RSV4 1100 Factory, sportif sürüşler ve pist günleri için mükemmel bir tercihtir.</p>
    },
    {
      "num": "2",
      "url": `https://enonlar.com/${url}#bolum-2`,
      "name": "Ducati Panigale V4",
      "image": `/images/motosiklet/ducati_panigale_v4.png`,
      "firma": "Ducati",
      "tip": "Super Sport",
      "motorHacmi": "1103",
      "sifirYuz": "2.6",
      "max": "290",
      "tuketim": "6.9",
      "agirlik": "198",
      "ulke": "İtalya",
      "yakitKapasitesi": "16",
      "paragraf": <p>İtalya'nın prestijli motosiklet üreticisi Ducati'nin süper spor modeli Panigale V4, sürücülerin yarış pistlerinde ve açık yollarda unutulmaz deneyimler yaşaması için tasarlanmıştır. Motorun gücü ve hızlanma kabiliyeti, sürücüsüne adrenalin dolu anlar yaşatır. Yol tutuşu ve fren performansı üst düzeyde, fakat yakıt tüketimi biraz yüksek. Sele konforu ve ergonomik yapısı, sürücüsüne uzun sürüşlerde bile rahatlık sunar. Panigale V4, sadece performans değil, aynı zamanda İtalyan estetiği ve zarafetini de yollara taşır.</p>
    },
    {
      "num": "1",
      "url": `https://enonlar.com/${url}#bolum-1`,
      "name": "BMW S1000RR",
      "image": `/images/motosiklet/bmw_s1000rr.png`,
      "firma": "BMW",
      "tip": "Super Sport",
      "motorHacmi": "999",
      "sifirYuz": "3.1",
      "max": "299",
      "tuketim": "6.7",
      "agirlik": "197",
      "ulke": "Almanya",
      "yakitKapasitesi": "17.5",
      "paragraf": <p>Alman mühendisliğinin bir şaheseri olan BMW S1000RR, üstün performansı ve sürücü dostu özellikleri ile tanınır. Motorun hızlanma kabiliyeti ve yüksek hızları etkileyici, yol tutuşu ise sınıfının en iyilerindendir. Yakıt kapasitesi ve tüketimi dengeli, sele konforu ve ergonomik yapısı uzun sürüşler için ideal. S1000RR, sportif performansı ve günlük kullanım kolaylığı ile hem pist hem de açık yolda mükemmel bir deneyim sunar.</p>
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