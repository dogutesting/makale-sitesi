
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function AlanRickmanEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "alan-rickman-en-iyi-10-filmi";
const baslik = "Alan Rickman en iyi 10 filmi";
const metin = "Alan Rickman, büyüleyici oyunculuğu ve eşsiz sesiyle sinema dünyasında iz bırakan bir sanatçıdır. Alan Rickman filmleri geniş bir yelpazeye sahiptir ve her rolüyle hayranlarını etkilemeyi başarmıştır. İşte Alan Rickman oynadığı filmler arasından en iyilerini sizler için derledik.";
const bitis_metin = "Alan Rickman'ın kariyerine kısa bir yolculuk yaptık ve en iyi filmlerini inceledik. Alan Rickman filmleri, izleyicilere her daim hatırlanır anlar sunmuştur. Sanatçının unutulmaz performansları, onu her zaman özel bir yerde tutacaktır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["alan","rickman","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:14:34+03:00";
const degistirilmeTarihi = "2024-08-16T16:14:34+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt2567026",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-10",
    "name": "Alice Through the Looking Glass - Alice Harikalar Diyarında",
    "image": "/images/movies/Alan_Rickman_alice_through_the_looking_glass_-_alice_harikalar_diyarinda.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "Johnny Depp",
        "Mia Wasikowska"
      ],
      "Kategori": [
        "Fantastik"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "James Bobin",
      "imdb": "6.2/10",
      "Değerlendirme": "124085",
      "metacritic": "34"
    },
    "paragraf": "Alice Through the Looking Glass filmi, Alan Rickman'ın seslendirme yeteneğini sergilediği son projelerden biri olmuştur. Kendisi bu filmde Mavi Tırtıl karakterini canlandırmıştır. Alan Rickman en iyi filmleri listesinde hem anlatımı hem de film dünyasına kattığı değerle mutlaka göz önünde bulundurulmalıdır."
  },
  {
    "num": "9",
    "title_id": "tt0102798",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-9",
    "name": "Robin Hood: Prince of Thieves - Robin Hood: Hırsızlar Prensi",
    "image": "/images/movies/Alan_Rickman_robin_hood__prince_of_thieves_-_robin_hood__hirsizlar_prensi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "Kevin Costner",
        "Morgan Freeman"
      ],
      "Kategori": [
        "Tarih",
        "Macera"
      ],
      "Yıl": "1991",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Kevin Reynolds",
      "imdb": "6.9/10",
      "Değerlendirme": "210557",
      "metacritic": "51"
    },
    "paragraf": "Rickman, bu filmde Sherwood ormanlarının çıktığı Robin Hood hikayesinin unutulmaz karakterlerinden Nottingham Şerifi'ni canlandırmıştır. Alan Rickman filmleri, oyunculuğunu zirveye taşıdığı bu filmle daha da özel hale gelmiştir. Onun performansı, her zamanki gibi dikkat çekiciydi."
  },
  {
    "num": "8",
    "title_id": "tt0314331",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-8",
    "name": "Love Actually - Aşk Her Yerde",
    "image": "/images/movies/Alan_Rickman_love_actually_-_ask_her_yerde.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "Bill Nighy",
        "Gregor Fisher"
      ],
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 15 dk.",
      "Yönetmen": "Richard Curtis",
      "imdb": "7.6/10",
      "Değerlendirme": "535046",
      "metacritic": "55"
    },
    "paragraf": "Love Actually, birbiriyle bağlantılı hikayelerle dolu bir aşk filmi ve Alan Rickman'ın burada canlandırdığı karakterle her zamanki gibi izleyiciye farklı bir tat katmıştır. Alan Rickman en iyi filmleri arasında olan bu yapım, oyuncunun kendine has tarzını yine ön plana çıkarmaktadır."
  },
  {
    "num": "7",
    "title_id": "tt0371724",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-7",
    "name": "Hitchhiker's Guide to the Galaxy - Bir Otostopçunun Galaksi Rehberi",
    "image": "/images/movies/Alan_Rickman_hitchhiker's_guide_to_the_galaxy_-_bir_otostopcunun_galaksi_rehberi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "Bill Bailey",
        "Anna Chancellor"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Komedi"
      ],
      "Yıl": "2005",
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Garth Jennings",
      "imdb": "6.7/10",
      "Değerlendirme": "209581",
      "metacritic": "63"
    },
    "paragraf": "Bir Otostopçunun Galaksi Rehberi'nde Alan Rickman'ın etkileyici seslendirmesiyle karakterine kılıf uydurduğu Marvin, izleyiciler tarafından büyük beğeni topladı. Alan Rickman oynadığı filmler arasında yer alan bu eşsiz yapım, sanatçının kariyerine farklı bir lezzet katmaktadır."
  },
  {
    "num": "6",
    "title_id": "tt0177789",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-6",
    "name": "Galaxy Quest - Galaksi Savaşçıları",
    "image": "/images/movies/Alan_Rickman_galaxy_quest_-_galaksi_savascilari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "Tim Allen",
        "Sigourney Weaver"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Komedi"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "Dean Parisot",
      "imdb": "7.4/10",
      "Değerlendirme": "180562",
      "metacritic": "70"
    },
    "paragraf": "Galaxy Quest, Rickman'ı yine sahne ışıklarına taşıyan başka bir komedi şaheseri. Uzay temalı bu macera, Alan Rickman imdb listesinde sıkça yer aldığı gibi mizahi unsurlarıyla da gönüllerde taht kurmuştur. Film, oyuncunun komedi yeteneği ile de izleyicisini etkiliyor."
  },
  {
    "num": "5",
    "title_id": "tt0095016",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-5",
    "name": "Die Hard - Zor Ölüm",
    "image": "/images/movies/Alan_Rickman_die_hard_-_zor_olum.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "Bruce Willis",
        "Bonnie Bedelia"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "1988",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "John McTiernan",
      "imdb": "8.2/10",
      "Değerlendirme": "955326",
      "metacritic": "72"
    },
    "paragraf": "Die Hard, Alan Rickman'a uluslararası tanınırlık kazandıran filmlerden biri olmuştur. Hans Gruber karakteriyle adeta simgeleşen Alan Rickman imdb sayfasında da en çok arananlardan biri olmuştur. Aksiyon ve gerilim dolu bu yapımda Rickman'ın oyunculuğu nefes kesmekte."
  },
  {
    "num": "4",
    "title_id": "tt0396171",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-4",
    "name": "Perfume: The Story of a Murderer - Koku: Bir Katilin Hikayesi",
    "image": "/images/movies/Alan_Rickman_perfume__the_story_of_a_murderer_-_koku__bir_katilin_hikayesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "Ben Whishaw",
        "Francesc Albiol"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 27 dk.",
      "Yönetmen": "Tom Tykwer",
      "imdb": "7.5/10",
      "Değerlendirme": "267723",
      "metacritic": "56"
    },
    "paragraf": "Koku: Bir Katilin Hikayesi'nde Rickman, bu atmosferik ve etkileyici dramda yeteneğini sergilemiştir. Alan Rickman oynadığı filmler arasında bu yapımın özel bir yeri vardır. Film oyuncunun her zamanki gibi izlemesi keyifli bir performans sergilediği eserlerden biridir."
  },
  {
    "num": "3",
    "title_id": "tt1327773",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-3",
    "name": "The Butler - Başkanların Hizmetkarı",
    "image": "/images/movies/Alan_Rickman_the_butler_-_baskanlarin_hizmetkari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "Forest Whitaker",
        "David Banner"
      ],
      "Kategori": [
        "Biyografik",
        "Dram"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "Lee Daniels",
      "imdb": "7.2/10",
      "Değerlendirme": "120228",
      "metacritic": "65"
    },
    "paragraf": "Başkanların Hizmetkarı, Rickman'ın ciddi ve etkili performanslarından birini sunduğu filmlerden biridir. Alan Rickman filmleri listesinde kendine yer bulan bu biyografik dramda, karakterine kattığı derinlikle izleyicisini büyülemeyi başarmıştır."
  },
  {
    "num": "2",
    "title_id": "tt0114388",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-2",
    "name": "Sense and Sensibility - Aşk ve Yaşam",
    "image": "/images/movies/Alan_Rickman_sense_and_sensibility_-_ask_ve_yasam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "James Fleet",
        "Tom Wilkinson"
      ],
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "Yıl": "1995",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "Ang Lee",
      "imdb": "7.7/10",
      "Değerlendirme": "127339",
      "metacritic": "84"
    },
    "paragraf": "Aşk ve Yaşam, Jane Austen'ın sevilen eserlerinden birinin uyarlamasıdır ve Rickman da bu filmde unutulmaz bir performansa imza atmıştır. Alan Rickman en iyi filmleri arasında gösterilen yapım, duygusal derinliğiyle izleyicinin kalbinde yer edinmiştir."
  },
  {
    "num": "1",
    "title_id": "tt0241527",
    "url": "https://enonlar.com/alan-rickman-en-iyi-10-filmibolum-1",
    "name": "Harry Potter and the Sorcerer's Stone",
    "image": "/images/movies/Alan_Rickman_harry_potter_and_the_sorcerer's_stone.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Alan Rickman",
        "Richard Harris",
        "Maggie Smith"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 32 dk.",
      "Yönetmen": "Chris Columbus",
      "imdb": "7.6/10",
      "Değerlendirme": "866855",
      "metacritic": "65"
    },
    "paragraf": "Harry Potter serisindeki Severus Snape rolü, belki de Alan Rickman'ın en ikonik performanslarından birini temsil eder. Alan Rickman imdb sıralamasında en üstlerde yer alan bu serideki rolüyle dünyaca tanınır hale gelmiş ve izleyicilerin kalbinde taht kurmuştur."
  }

];

const ana_resim = "/images/ana_gorseller/alan-rickman-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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