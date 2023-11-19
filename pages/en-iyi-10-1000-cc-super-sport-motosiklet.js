import { useAppContext } from '@/context/ContextProvider';
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';
import ClassicArticle from '@/components/article_types/ClassicArticle';

export async function getStaticProps() {
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
  const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
  const addDate = "03.10.23";

  const jsonContentArray = [
    {
      "num": "10",
      "url": "https://enonlar.com/${url}#bolum-10",
      "name": "Triumph Daytona 1050",
      "image": "/images/motosiklet/triumph_daytona_1050.png",
      "ozellikler": {
        "Ülke": "İngiltere",
        "Firma": "Triumph",
        "Tip": "Super Sport",
        "Motor Hacmi": "1050 cc",
        "Sıfır Yüz": "2.9 s",
        "Max Hız": "280 km/s",
        "Tüketim": "5.8 Litre/100 km",
        "Ağırlık": "186 kg",
        "Yakıt Kapasitesi": "18 Litre"
      },
      "paragraf": "İngiltere'nin süper spor mirası Triumph Daytona 1050, performans ve konforu bir arada sunar. 1050cc motoru ile güçlü bir hızlanma sağlarken, süspansiyon sistemi ve ergonomik yapısı, sürücüsüne konforlu bir sürüş deneyimi sunar. Yakıt kapasitesi ve tüketimi dengeli, fakat bazı sürücüler için gösterge panelinin modernize edilmesi gerekebilir. Yol tutuşu ve fren performansı güven verici, fakat sele konforu uzun sürüşler için ideal olmayabilir. Daytona 1050, hem günlük kullanım hem de sportif sürüşler için uygun bir seçenektir."
    },
    {
      "num": "9",
      "url": "https://enonlar.com/${url}#bolum-9",
      "name": "KTM 1190 RC8 R",
      "image": "/images/motosiklet/ktm_rc8r.jpg",
      "ozellikler": {
        "Ülke": "Avusturya",
        "Firma": "KTM",
        "Tip": "Super Sport",
        "Motor Hacmi": "1195 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "270 km/s",
        "Tüketim": "6.2 Litre/100 km",
        "Ağırlık": "200 kg",
        "Yakıt Kapasitesi": "16.5 Litre"
      },
      "paragraf": "Avusturya'nın hız makinesi KTM RC8 R, keskin hatları ve agresif tasarımı ile dikkat çeker. 1195cc motoru ile rakiplerine kıyasla daha güçlü bir performans sunar. Yol tutuşu mükemmel, frenler ise oldukça güvenilir. Yakıt kapasitesi diğerlerine kıyasla biraz düşük, fakat bu, RC8 R'nin hız tutkusunu asla gölgeleyemez. Gidon pozisyonu ve sele konforu, uzun sürüşlerde bile sürücüsüne rahatlık sağlar. RC8 R, sportif performansı ve estetik tasarımı ile süper sport motosiklet severler için ideal bir seçenek."
    },
    {
      "num": "8",
      "url": "https://enonlar.com/${url}#bolum-8",
      "name": "MV Agusta F4 RR",
      "image": "/images/motosiklet/mv_agusta_f4_rr.png",
      "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "MV Agusta",
        "Tip": "Super Sport",
        "Motor Hacmi": "998 cc",
        "Sıfır Yüz": "3.0 s",
        "Max Hız": "298 km/s",
        "Tüketim": "6.4 Litre/100 km",
        "Ağırlık": "190 kg",
        "Yakıt Kapasitesi": "20 Litre"
      },
      "paragraf": "İtalyan estetiği ve mühendislik harikası MV Agusta F4 RR, dikkat çekici tasarımı ve üstün performansı ile bir sanat eseri niteliğindedir. Yol tutuşu ve fren performansı sınıfının en iyilerinden, motorun hızlanma kabiliyeti ve yüksek hızları ise adeta nefes kesici. Yakıt kapasitesi geniş, fakat yakıt tüketimi biraz yüksek. Sele konforu ve ergonomik yapısı, uzun mesafeli sürüşler için ideal. MV Agusta F4 RR, estetik ve performansı bir arada arayan sürücüler için mükemmel bir tercih."
    },
    {
      "num": "7",
      "url": "https://enonlar.com/${url}#bolum-7",
      "name": "Suzuki GSX-R1000",
      "image": "/images/motosiklet/suzuki_gsx_r1000.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Suzuki",
        "Tip": "Super Sport",
        "Motor Hacmi": "999 cc",
        "Sıfır Yüz": "2.9 s",
        "Max Hız": "299 km/s",
        "Tüketim": "6.0 Litre/100 km",
        "Ağırlık": "202 kg",
        "Yakıt Kapasitesi": "16 Litre"
      },
      "paragraf": "Japon mühendisliğinin bir başyapıtı olan Suzuki GSX-R1000, dinamik tasarımı ve güçlü motoru ile dikkat çeker. Yol tutuşu ve fren performansı mükemmel, motorun hızlanma kabiliyeti ise etkileyici. Yakıt kapasitesi ortalamanın biraz altında, fakat bu, GSX-R1000'in performansını gölgeleyemez. Sele konforu ve ergonomik gidon yapısı, uzun sürüşler için rahatlık sunar. GSX-R1000, sportif performans ve güvenilirlik arayan sürücüler için ideal bir seçenek."
    },
    {
      "num": "6",
      "url": "https://enonlar.com/${url}#bolum-6",
      "name": "Honda CBR1000RR",
      "image": "/images/motosiklet/honda_cbr1000rr.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Honda",
        "Tip": "Super Sport",
        "Motor Hacmi": "999 cc",
        "Sıfır Yüz": "2.8 s",
        "Max Hız": "290 km/s",
        "Tüketim": "5.6 Litre/100 km",
        "Ağırlık": "196 kg",
        "Yakıt Kapasitesi": "16 Litre"
      },
      "paragraf": "Honda'nın süper spor motosikleti CBR1000RR, mükemmel bir yol tutuşu ve güçlü motor performansı ile bilinir. Sürücüler, hızlanma kabiliyetini ve fren performansını takdir ederler. Yakıt kapasitesi ortalama, fakat yakıt tüketimi oldukça iyi. Ergonomik yapısı sayesinde uzun sürüşlerde bile konforlu. Honda CBR1000RR, pist günleri ve günlük sürüşler için uygun, güvenilir ve eğlenceli bir motosiklettir."
    },
    {
      "num": "5",
      "url": "https://enonlar.com/${url}#bolum-5",
      "name": "Kawasaki Ninja ZX-10R",
      "image": "/images/motosiklet/kawasaki_ninja_zx_10r.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Kawasaki",
        "Tip": "Super Sport",
        "Motor Hacmi": "998 cc",
        "Sıfır Yüz": "2.8 s",
        "Max Hız": "289 km/s",
        "Tüketim": "5.9 Litre/100 km",
        "Ağırlık": "206 kg",
        "Yakıt Kapasitesi": "17 Litre"
      },
      "paragraf": "Japonya'nın hız makinesi Kawasaki Ninja ZX-10R, sürücülerin pist ve açık yolda tam kontrol sağlamaları için tasarlanmıştır. Yol tutuşu ve fren performansı etkileyici, motorun hızlanma kabiliyeti ise adeta bir füze kadar hızlı. Yakıt kapasitesi ve tüketimi dengeli. Sele konforu, uzun mesafeli sürüşlerde bile rahatlık sunar. ZX-10R'nin sportif ve agresif tasarımı, bu motosikleti her yere götürürken başları çevirir."
    },
    {
      "num": "4",
      "url": "https://enonlar.com/${url}#bolum-4",
      "name": "Yamaha YZF-R1",
      "image": "/images/motosiklet/yamaha_yzf_r1.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Yamaha",
        "Tip": "Super Sport",
        "Motor Hacmi": "998 cc",
        "Sıfır Yüz": "2.7 s",
        "Max Hız": "293 km/s",
        "Tüketim": "5.8 Litre/100 km",
        "Ağırlık": "199 kg",
        "Yakıt Kapasitesi": "17 Litre"
      },
      "paragraf": "Yamaha'nın süper spor modeli YZF-R1, sürücüsüne yarış pistindeki deneyimi yaşatmak için tasarlanmıştır. Motorun hızlanma kabiliyeti ve yüksek hızları etkileyici, yol tutuşu ise sınıfının en iyilerindendir. Yakıt kapasitesi ve tüketimi dengeli, sele konforu ise uzun sürüşler için ideal. YZF-R1, sportif tasarımı ve üstün performansı ile süper spor motosiklet tutkunlarının favorilerinden biridir."
    },
    {
      "num": "3",
      "url": "https://enonlar.com/${url}#bolum-3",
      "name": "Aprilia RSV4 1100 Factory",
      "image": "/images/motosiklet/aprilia_rsv4_1100_factory.png",
      "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "Aprilia",
        "Tip": "Super Sport",
        "Motor Hacmi": "1078 cc",
        "Sıfır Yüz": "3.2 s",
        "Max Hız": "305 km/s",
        "Tüketim": "6.3 Litre/100 km",
        "Ağırlık": "199 kg",
        "Yakıt Kapasitesi": "18.5 Litre"
      },
      "paragraf": "İtalyan tasarımının ve performansının bir sembolü olan Aprilia RSV4 1100 Factory, sınıfının en iyi motorlarından biri ile donatılmıştır. Yüksek hızlara ulaşma kabiliyeti ve yol tutuşu, bu motosikleti süper spor sınıfında bir efsane haline getirir. Yakıt kapasitesi geniş, fakat tüketim biraz yüksek. Konfor ve ergonomi, uzun sürüşler için uygun. RSV4 1100 Factory, sportif sürüşler ve pist günleri için mükemmel bir tercihtir."
    },
    {
      "num": "2",
      "url": "https://enonlar.com/${url}#bolum-2",
      "name": "Ducati Panigale V4",
      "image": "/images/motosiklet/ducati_panigale_v4.png",
      "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "Ducati",
        "Tip": "Super Sport",
        "Motor Hacmi": "1103 cc",
        "Sıfır Yüz": "2.6 s",
        "Max Hız": "290 km/s",
        "Tüketim": "6.9 Litre/100 km",
        "Ağırlık": "198 kg",
        "Yakıt Kapasitesi": "16 Litre"
      },
      "paragraf": "İtalya'nın prestijli motosiklet üreticisi Ducati'nin süper spor modeli Panigale V4, sürücülerin yarış pistlerinde ve açık yollarda unutulmaz deneyimler yaşaması için tasarlanmıştır. Motorun gücü ve hızlanma kabiliyeti, sürücüsüne adrenalin dolu anlar yaşatır. Yol tutuşu ve fren performansı üst düzeyde, fakat yakıt tüketimi biraz yüksek. Sele konforu ve ergonomik yapısı, sürücüsüne uzun sürüşlerde bile rahatlık sunar. Panigale V4, sadece performans değil, aynı zamanda İtalyan estetiği ve zarafetini de yollara taşır."
    },
    {
      "num": "1",
      "url": "https://enonlar.com/${url}#bolum-1",
      "name": "BMW S1000RR",
      "image": "/images/motosiklet/bmw_s1000rr.png",
      "ozellikler": {
        "Ülke": "Almanya",
        "Firma": "BMW",
        "Tip": "Super Sport",
        "Motor Hacmi": "999 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "299 km/s",
        "Tüketim": "6.7 Litre/100 km",
        "Ağırlık": "197 kg",
        "Yakıt Kapasitesi": "17.5 Litre"
      },
      "paragraf": "Alman mühendisliğinin bir şaheseri olan BMW S1000RR, üstün performansı ve sürücü dostu özellikleri ile tanınır. Motorun hızlanma kabiliyeti ve yüksek hızları etkileyici, yol tutuşu ise sınıfının en iyilerindendir. Yakıt kapasitesi ve tüketimi dengeli, sele konforu ve ergonomik yapısı uzun sürüşler için ideal. S1000RR, sportif performansı ve günlük kullanım kolaylığı ile hem pist hem de açık yolda mükemmel bir deneyim sunar."
    }
    
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-1000-cc-super-sport-motosiklet.png";
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = moviesAndSeriesJson(articleInfos,
  "Motosiklet", 
  metin,
  jsonContentArray
  )

  return {
    props: {
        baslik,
        description,
        keywordsArray,
        ana_resim,
        url,
        jsonList,
        addDate,
        okunmaSuresi,
        kategori,
        metin,
        jsonContentArray
    },
    revalidate: 60 * 60 * 24,
  }
}

export default function Eniyi1000ccSuperMain({baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi, kategori, metin, jsonContentArray}) {
  const { nightMode } = useAppContext();

  return (
    <ClassicArticle baslik={baslik} description={description} keywordsArray={keywordsArray}
        ana_resim={ana_resim} url={url} jsonList={jsonList} nightMode={nightMode} addDate={addDate}
            okunmaSuresi={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan}
            kategori={kategori} metin={metin}>

        <Ens_motosiklet jsonContentArray={jsonContentArray}/>

    </ClassicArticle>
  )
}