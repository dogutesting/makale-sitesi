
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnIyi10TurkFutbolcuMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-iyi-10-turk-futbolcu";
const baslik = "En iyi 10 Türk futbolcu";
const metin = "Türk futbol tarihinin gelmiş geçmiş en iyi 10 Türk futbolcu listesini sizler için derledik. Bu listeyi, yetenekleri, kariyer başarıları ve saha içi etkileri ile öne çıkan isimlerden oluşturduk. Hangi isimler bu çağdaş listeye girmeyi başardı? İşte, Türk futbolunun en üst düzey temsilcileri.";
const bitis_metin = "İşte karşınızda Türkiye futbol tarihinin en iyi 10 türk futbolcu listesi! Bu listedeki her isim, oyun becerileri ve katkılarıyla Türk futbolunun şekillenmesinde büyük bir rol oynamıştır. Umarız bu liste, futbol tutkunlarına keyif vermiştir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","iyi","10","turk","futbolcu"]; //! BAK
const kategori = "futbol"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T18:23:59+03:00";
const degistirilmeTarihi = "2024-04-26T18:23:59+03:00";
const addDate = "26.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-10",
    "name": "Mehmet Topal",
    "image": "/images/futbol/mehmet_topal.jpg",
    "ozellikler": {
      "Doğum Tarihi": "3 Mart 1986",
      "Boyu": "187 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Mehmet Topal, stabil defansif performansıyla en iyi 10 türk futbolcu listemize girmeyi başarıyor. Uzun yıllar boyunca Türkiye'nin en yetenekli orta saha oyuncuları arasında gösterilen Mehmet, başarıları ile adından söz ettirmiştir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-9",
    "name": "Gökhan Töre",
    "image": "/images/futbol/gokhan_tore.png",
    "ozellikler": {
      "Doğum Tarihi": "20 Ocak 1992",
      "Boyu": "176 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Dinamik oyun stili ve teknik kapasitesi ile Gökhan Töre, orta sahada en iyi türk futbolcular arasında yer alıyor. İstanbul'da doğan bu yetenekli oyuncu, uyum ve yaratıcılıkta sınır tanımıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-8",
    "name": "Caner Erkin",
    "image": "/images/futbol/caner_erkin.jpg",
    "ozellikler": {
      "Doğum Tarihi": "4 Ekim 1988",
      "Boyu": "178 cm",
      "Saç Rengi": "Kumral"
    },
    "paragraf": "Sol kanatta gösterdiği üstün performanslarıyla bilinen Caner Erkin, Türk futbolunda iz bırakan isimlerden. En iyi 10 türk futbolcu listesine kendi çalışkanlığı ve ısrarcı karakteriyle adını yazdırmayı başardı."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-7",
    "name": "Burak Yılmaz",
    "image": "/images/futbol/burak_yilmaz.jpg",
    "ozellikler": {
      "Doğum Tarihi": "15 Temmuz 1985",
      "Boyu": "188 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Golcü kimliği ile ön plana çıkan Burak Yılmaz, etkileyici gol sayıları ile en iyi 10 türk futbolcu arasında kendine sağlam bir yer buldu. Her zaman rakip savunmalar için tehdit oluşturmayı başarmıştır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-6",
    "name": "Ozan Tufan",
    "image": "/images/futbol/ozan_tufan.jpg",
    "ozellikler": {
      "Doğum Tarihi": "23 Mart 1995",
      "Boyu": "179 cm",
      "Saç Rengi": "Sarı"
    },
    "paragraf": "Ozan Tufan'ın saha içindeki liderliği ve oyun görüşü, onu modern Türk futbolunun en parlayan yıldızlarından biri yapıyor. Listemizdeki en iyi 10 türk futbolcu içerisindeki yerini sağlamlaştırıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-5",
    "name": "Çağlar Söyüncü",
    "image": "/images/futbol/caglar_soyuncu.jpg",
    "ozellikler": {
      "Doğum Tarihi": "23 Mayıs 1996",
      "Boyu": "187 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Çağlar Söyüncü, savunma mevkisinde sergilediği üstün performanslarıyla dikkat çekiyor. Avrupa futbolunun önemli savunmacıları arasına adını yazdıran Çağlar, Türkiye'nin içerisinde en iyi türk futbolcular listesine girmeyi başarıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-4",
    "name": "Cengiz Ünder",
    "image": "/images/futbol/cengiz_under.png",
    "ozellikler": {
      "Doğum Tarihi": "14 Temmuz 1997",
      "Boyu": "173 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Hızı ve çevikliği ile bilinen Cengiz Ünder, karşı takımlar üzerinde büyük etki yaratan bir oyuncu. Genç yaşında gösterdiği performansla en iyi türk futbolcular listesine giriş yapıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-3",
    "name": "Merih Demiral",
    "image": "/images/futbol/merih_demiral.jpg",
    "ozellikler": {
      "Doğum Tarihi": "5 Mart 1998",
      "Boyu": "192 cm",
      "Saç Rengi": "Kumral"
    },
    "paragraf": "Merih Demiral, savunma alanında gösterdiği yüksek konsantrasyon ve fiziksel gücüyle tanınıyor. Bu özellikleri onu Türkiye'nin en iyi 10 türk futbolcu arasında bir konuma taşıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-2",
    "name": "Hakan Çalhanoğlu",
    "image": "/images/futbol/hakan_calhanoglu.png",
    "ozellikler": {
      "Doğum Tarihi": "8 Şubat 1994",
      "Boyu": "175 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Hakan Çalhanoğlu, serbest vuruşlardaki ustalığı ve oyun kurucu yetenekleri ile dünya çapında tanınan bir isim. Güçlü teknik yetenekleri ile en iyi 10 türk futbolcu listemizde üst sıralarda yer alıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-iyi-10-turk-futbolcu#bolum-1",
    "name": "Arda Turan",
    "image": "/images/futbol/arda_turan.png",
    "ozellikler": {
      "Doğum Tarihi": "30 Ocak 1987",
      "Boyu": "177 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Arda Turan, kariyeri boyunca sergilediği liderlik ve yetenekler ile Türk futbolunun en parlak yıldızı. Taraflı tarafsız herkesin saygısını kazanan Arda, listenin zirvesinde yer alıyor."
  }
];

const ana_resim = "/images/ana_gorseller/en_iyi_10_turk_futbolcu.png" //! SEN DOLDUR
const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};

const jsonList = moviesAndSeriesJson(articleInfos,
kategori, 
metin,
jsonContentArray,
bitis_metin
)
//#endregion

const articleConstructor = {
    baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi: jsonList.readTimeSpan, kategori, metin, jsonContentArray, bitis_metin
}

return (
    <ClassicArticleTop topCPO={topCPO} articleConstructor={articleConstructor}/>
)
}