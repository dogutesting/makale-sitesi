
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function TurkiyedeOynamisEnIyi10YabanciFutbolcuMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "turkiyede-oynamis-en-iyi-10-yabanci-futbolcu";
const baslik = "Türkiye'de oynamış en iyi 10 yabancı futbolcu";
const metin = "Türkiye futbol liglerinde birçok uluslararası yıldız sahne aldı. İşte türkiye'de oynamış en iyi yabancı futbolcular listesi; türkiye'de oynamış efsane futbolcular sıralaması. Bu makalede, türkiye'de oynamış en iyi oyuncu kimdir sorusuna cevap veriyoruz. Bu oyuncular hem yetenekleri hem de yarattıkları etkiyle Türk futbol tarihine adlarını yazdırdılar.";
const bitis_metin = "Bu makalede Türkiye'de oynamış en iyi 10 yabancı futbolcu listesiyle, Türk futbol tarihinde unutulmaz izler bırakmış yıldızları tanıdık. Umarız bu serüven onların saha içindeki başarılarının yanı sıra kişilikleriyle de sizi etkilemiştir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["turkiye'de","oynamis","en","iyi","10","yabanci","futbolcu"]; //! BAK
const kategori = "futbol"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-30T18:25:54+03:00";
const degistirilmeTarihi = "2024-04-30T18:25:54+03:00";
const addDate = "30.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-10",
    "name": "Sergej Barbarez",
    "image": "/images/futbol/sergej_barbarez.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1969",
      "Boyu": "1.88 m",
      "Saç Rengi": "Kumral"
    },
    "paragraf": "Sergej Barbarez, Bosna Hersekli eski profesyonel futbolcu, Süper Lig'de önemli bir iz bıraktı. Forvet ve ofansif orta saha pozisyonlarında görev alan Barbarez, fiziksel oyun stili ve liderlik özellikleriyle tanınırdı."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-9",
    "name": "Atiba Hutchinson",
    "image": "/images/futbol/atiba_hutchinson.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1983",
      "Boyu": "1.87 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Atiba Hutchinson, Kanadalı orta saha oyuncusu, Beşiktaş JK'de uzun yıllar forma giydi ve takımının başarılarında büyük rol oynadı. Oyun zekası ve disiplinli yapısıyla bilinir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-8",
    "name": "Pierre Webo",
    "image": "/images/futbol/pierre_webo.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1982",
      "Boyu": "1.80 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Pierre Webo, Kamerunlu eski futbolcu, Türkiye'deki kariyeri sırasında Fenerbahçe ve İstanbul Başakşehir formaları giydi. Etkileyici hava hakimiyeti ve gol yeteneği ile dikkat çekti."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-7",
    "name": "John Carew",
    "image": "/images/futbol/john_carew.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1979",
      "Boyu": "1.95 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "John Carew, Norveçli eski forvet, Beşiktaş'taki performansı ile Türk futbolseverlerin gönlünde taht kurdu. Fizik gücü ve gol becerisiyle bilinirdi."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-6",
    "name": "Mario Jardel",
    "image": "/images/futbol/mario_jardel.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1973",
      "Boyu": "1.88 m",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Mario Jardel, Brezilyalı eski forvet, Galatasaray'da gösterdiği performans ile unutulmaz maçlar yarattı. Olağanüstü kafa vuruşları ve gol içgüdüsü ile tanınırdı."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-5",
    "name": "Ricardo Quaresma",
    "image": "/images/futbol/ricardo_quaresma.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1983",
      "Boyu": "1.75 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Ricardo Quaresma, Portekizli kanat oyuncusu, Beşiktaş ve Porto formaları altında sergilediği etkileyici performanslar ile hatırlanır. Müthiş tekniği ve 'trivela' atışı ile ünlüdür."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-4",
    "name": "Roberto Carlos",
    "image": "/images/futbol/roberto_carlos.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1973",
      "Boyu": "1.68 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Roberto Carlos, Brezilyalı sol bek, Fenerbahçe'de oynadığı dönemde defansı kadar hücum katkısıyla da sivrilmiş bir futbolcuydu. Olağanüstü serbest vuruşlarıyla tanınır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-3",
    "name": "Georghe Hagi",
    "image": "/images/futbol/georghe_hagi.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1965",
      "Boyu": "1.74 m",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Georghe Hagi, Romanyalı eski orta saha oyuncusu, Galatasaray'da gösterdiği üstün yetenekleriyle Türkiye'de efsaneleşti. 'Maradona'dan sonra gelmiş geçmiş en iyi sol ayak' olarak anılır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-2",
    "name": "Alex de Souza",
    "image": "/images/futbol/alex_de_souza.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1977",
      "Boyu": "1.74 m",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Alex de Souza, Brezilyalı eski orta saha oyuncusu, Fenerbahçe'deki yıllarında teknik kapasitesi ve liderlik yetenekleriyle parladı. Türkiye'de futbol ikonu haline gelmiştir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/turkiyede-oynamis-en-iyi-10-yabanci-futbolcu#bolum-1",
    "name": "Samuel Eto'o",
    "image": "/images/futbol/samuel_eto_o.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1981",
      "Boyu": "1.79 m",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Samuel Eto'o, Kamerunlu eski forvet, Antalyaspor'da oynadığı süre boyunca sadece gollerle değil, liderliği ile de takımına büyük katkılarda bulundu. Eto'o, lig tarihindeki en iyi yabancı santraforlardan biri olarak kabul edilir."
  }
];

const ana_resim = "/images/ana_gorseller/turkiyede_oynamis_en_iyi_10_yabanci_futbolcu_kapak.jpg" //! SEN DOLDUR
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