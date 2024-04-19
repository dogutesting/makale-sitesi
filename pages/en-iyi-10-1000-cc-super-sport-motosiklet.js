import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

export default function Eniyi1000ccSuperMain({topCPO}) {
  
  //! A sınıfı ehliyet gerekiyor, bu ehliyeti alabilmek için minimum 20 yaşında olmak gerekiyor.

  //#region SAYFA TEXT TANIMLAMALARI
  const url = "en-iyi-10-1000-cc-super-sport-motosiklet";
  const baslik = "En İyi 10 1000 CC Super Sport Motosiklet";
  const metin = "Süper spor motosikletler, 1000 cc lik motorlar mühendislik ve tasarımın zirvesini temsil eder. Bu hız canavarları, sadece dikkatli ve tecrübeli sürücüler için tasarlanmıştır. Her bir detay, sürücüsüne unutulmaz bir deneyim yaşatmak amacıyla özenle düşünülmüştür. İster pistte ister açık yolda olsun, bu motosikletler adrenalinin en saf halini sunar. Bu makalede, piyasadaki en iyi 10 süper spor motosikleti detaylı bir şekilde inceliyoruz. 1000 cc lik motor ehliyeti kaç yaşında alınır minimum 20 yaşında ve 1000 cc motor hangi ehliyet sorusunun cevabı minimum A sınıfıdır. Hangi canavarın sizi en çok heyecanlandıracağını görmek için okumaya başlayalım!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["en", "iyi", "1000cc", "motosiklet", "supersport"]; //burada türkçe karakter olacak mı bir fikrim yok
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
      "name": "Yamaha YZF-R7",
      "image": "/images/motosiklet/yamaha_yzf_r7.jpg",
      "ozellikler": {
        "Yamaha YZF R7 özellikleri": "",
        "Ülke": "Japonya",
        "Firma": "Yamaha",
        "Tip": "Super Sport",
        "Motor Hacmi": "698 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "241 km/s",
        "Tüketim": "5.9 Litre/100 km",
        "Ağırlık": "188 kg",
        "Yakıt Kapasitesi": "13 Litre"
      },
      "paragraf": "İlk motosikletimiz 698cc'lik YZF-R7, evet, 1000cc değil ama 1000cc'liklerin arasında olmayı hak eden bir motosiklet. YZF-R7, Yamaha'nın süper spor segmentine yeni bir soluk getiren, yüksek performans ve mükemmel yol tutuşuyla dikkat çekiyor. Agresif ve aerodinamik tasarımı, hafifliği ve çevikliği ile öne çıkan R7, kullanıcılarına konforlu bir sürüş deneyimi sunuyor. Hızlanma kapasitesi ve motorun tepkime hızı, hem şehir içinde hem de açık yollarda etkileyici bir performans sergiliyor. YZF-R7, yüksek manevra kabiliyeti ve sürücü dostu ergonomisi ile deneyimli sürücüler için ideal bir seçenek."
    },
    {
      "num": "9",
      "url": "https://enonlar.com/${url}#bolum-9",
      "name": "KTM 1190 RC8 R",
      "image": "/images/motosiklet/ktm_rc8r.jpg",
      "ozellikler": {
        "KTM 1190 RC8 R özellikleri": "",
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
        "MV Agusta F4 RR özellikleri": "",
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
      "name": "Suzuki GSX R1000",
      "image": "/images/motosiklet/suzuki_gsx_r1000.png",
      "ozellikler": {
        "Suzuki GSX R1000 özellikleri": "",
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
        "Honda CBR1000RR özellikleri": "",
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
        "Kawasaki Ninja ZX 10R özellikleri": "",
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
        "Yamaha YZF R1 özellikleri": "",
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
        "Aprilia RSV4 1100 Factory özellikleri": "",
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
        "Ducati Panigale V4 özellikleri": "",
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
        "BMW S1000RR özellikleri": "",
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
      "paragraf": "Listemizin super sport kategorisinde en iyi 1000 cc motoruna bir Alman devini seçtik. Alman mühendisliğinin bir şaheseri olan BMW S1000RR, üstün performansı ve sürücü dostu özellikleri ile tanınır. Motorun hızlanma kabiliyeti ve yüksek hızları etkileyici, yol tutuşu ise sınıfının en iyilerindendir. Yakıt kapasitesi ve tüketimi dengeli, sele konforu ve ergonomik yapısı uzun sürüşler için ideal. S1000RR, sportif performansı ve günlük kullanım kolaylığı ile hem pist hem de açık yolda mükemmel bir deneyim sunar."
    }
    
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-1000-cc-super-sport-motosiklet.png";
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = moviesAndSeriesJson(articleInfos,
  "Motosiklet", 
  metin,
  jsonContentArray
  )
  //#endregion

  const articleConstructor = {
    baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi: jsonList.readTimeSpan, kategori, metin, jsonContentArray
  }

  return (
    <ClassicArticleTop topCPO={topCPO} articleConstructor={articleConstructor}/>
  )
}