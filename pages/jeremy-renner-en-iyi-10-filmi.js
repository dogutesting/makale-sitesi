
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JeremyRennerEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jeremy-renner-en-iyi-10-filmi";
const baslik = "Jeremy Renner en iyi 10 filmi";
const metin = "Jeremy Renner, Hollywood'un en başarılı aktörlerinden biri olarak dikkat çekiyor. Kariyeri boyunca birçok başarılı yapımda yer alarak adını sinema tarihine kazımayı başardı. İşte, Jeremy Renner filmleri arasında en dikkat çeken ve IMDb skorlarıyla öne çıkan 10 filmi sizler için derledik.";
const bitis_metin = "Bu yazıda Jeremy Renner'ın en iyi 10 filmini sıraladık. Kariyerine damga vuran bu filmler, onu izleyicilerin gözdesi yapmaya devam ediyor. Her biri farklı türlerde olan bu yapımlar, izlemeye değer!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jeremy","renner","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:03:29+03:00";
const degistirilmeTarihi = "2024-08-16T17:03:29+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-10",
    "name": "The Bourne Legacy - Bourne'un Mirası",
    "image": "/images/movies/Jeremy_Renner_the_bourne_legacy_-_bourne'un_mirasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Rachel Weisz",
        "Scott Glenn"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 15 dk.",
      "Yönetmen": "Tony Gilroy",
      "imdb": "6.6/10",
      "Değerlendirme": "317661",
      "metacritic": "61"
    },
    "paragraf": "Jeremy Renner'ın başrolünü üstlendiği The Bourne Legacy, aksiyonu bol ve heyecan dolu bir yapım. Bourne serisinin dördüncü filmi, izleyicileri yeni bir ajanla tanıştırıyor. Jeremy Renner oynadığı filmler arasında önemli bir yere sahip olan bu eser, aksiyonu sevenler için ideal."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-9",
    "name": "The Hurt Locker - Ölümcül Tuzak",
    "image": "/images/movies/Jeremy_Renner_the_hurt_locker_-_olumcul_tuzak.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Anthony Mackie"
      ],
      "Kategori": [
        "Savaş",
        "Dram"
      ],
      "Yıl": "2009",
      "Süre": "2 sa. 11 dk.",
      "Yönetmen": "Kathryn Bigelow",
      "imdb": "7.5/10",
      "Değerlendirme": "476857",
      "metacritic": "95"
    },
    "paragraf": "The Hurt Locker, Jeremy Renner'ın kariyerini zirveye taşıyan bir film. Savaş Draması türündeki bu film, Irak'ta bomba imha ekibinde görev yapan bir askerin hikayesini anlatıyor. Jeremy Renner en iyi filmleri arasında başı çeken bu yapım, birçok ödül kazanmıştır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-8",
    "name": "Arrival - Geliş",
    "image": "/images/movies/Jeremy_Renner_arrival_-_gelis.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Amy Adams"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "Denis Villeneuve",
      "imdb": "7.9/10",
      "Değerlendirme": "784211",
      "metacritic": "81"
    },
    "paragraf": "Bilim kurgu türündeki Arrival filminde Jeremy Renner, uzaylıların Dünya'ya gelişiyle başlayan ilginç bir öyküde yer alıyor. Jeremy Renner IMDB puanı yüksek olan bu film, başarılı kurgusuyla izleyicileri büyülüyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-7",
    "name": "American Hustle - Düzenbaz",
    "image": "/images/movies/Jeremy_Renner_american_hustle_-_duzenbaz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Christian Bale",
        "Bradley Cooper"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "David O. Russell",
      "imdb": "7.2/10",
      "Değerlendirme": "503221",
      "metacritic": "90"
    },
    "paragraf": "American Hustle, Jeremy Renner'ın da yer aldığı etkileyici bir suç filmi. Bu film, 1970'lerdeki bir dolandırıcılık operasyonunu konu alıyor. Jeremy Renner en iyi filmleri arasında bulunan bu eser, renkli karakterleri ve güçlü oyuncu kadrosuyla dikkat çekiyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-6",
    "name": "Avengers: Civil War",
    "image": "/images/movies/Jeremy_Renner_avengers_civil_war.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Chris Evans",
        "Robert Downey Jr.",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Bilim Kurgu"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 27 dk.",
      "Yönetmen": "Anthony Russo, Joe Russo",
      "imdb": "7.8/10",
      "Değerlendirme": "649,371",
      "metacritic": "75"
    },
    "paragraf": "Avengers: Civil War, Avengers ekibinin içindeki fikir ayrılıklarını ve çatışmaları konu alıyor. Jeremy Renner, Hawkeye olarak filmde önemli bir rol oynuyor ve çatışmanın taraflarından biri olarak öne çıkıyor. Bu film, Renner'ın süper kahraman evrenindeki katkılarından biridir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-5",
    "name": "Mission: Impossible - Ghost Protocol - Görevimiz Tehlike: Hayalet Protokol",
    "image": "/images/movies/Jeremy_Renner_mission__impossible_-_ghost_protocol_-_gorevimiz_tehlike__hayalet_protokol.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Tom Cruise",
        "Jon Voight"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Brian De Palma",
      "imdb": "7.2/10",
      "Değerlendirme": "475003",
      "metacritic": "59"
    },
    "paragraf": "Mission: Impossible - Ghost Protocol, macera ve aksiyon severler için Jeremy Renner'in de yer aldığı harika bir yapım. Renner, bu filmde Ethan Hunt'ın ekibine yeni katılan bir ajandır. Aksiyon dolu sahneleri ve heyecanlı konusu ile bu film, Jeremy Renner filmleri tarihinde özel bir yere sahip."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-4",
    "name": "Wind River - Kar Fırtınası",
    "image": "/images/movies/Jeremy_Renner_wind_river_-_kar_firtinasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Elizabeth Olsen",
        "Kelsey Asbille"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Taylor Sheridan",
      "imdb": "7.7/10",
      "Değerlendirme": "284066",
      "metacritic": "73"
    },
    "paragraf": "Jeremy Renner'ın başrol oynadığı Wind River, bir cinayet soruşturmasını konu alıyor. Film, gerilim ve dram ögeleri ile dolu. Jeremy Renner oynadığı filmler içinde gerçekçi hikayesi ve karanlık atmosferiyle dikkat çeken bir yapımdır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-3",
    "name": "12 and Holding - 12 ve Holding",
    "image": "/images/movies/Jeremy_Renner_12_and_holding_-_12_ve_holding.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Conor Donovan",
        "Jesse Camacho"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2005",
      "Süre": "1 sa. 34 dk.",
      "Yönetmen": "Michael Cuesta",
      "imdb": "7.4/10",
      "Değerlendirme": "7142",
      "metacritic": "65"
    },
    "paragraf": "Jeremy Renner'ın rol aldığı 12 and Holding, ergenlik çağındaki üç gencin hayat mücadelesini anlatıyor. Film, Jeremy Renner en iyi filmleri dahilinde duygusal yoğunluğu yüksek ve düşündürücü bir dram yapımı olarak dikkat çekiyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-2",
    "name": "Avengers: Age of Ultron - Yenilmezler: Ultron Çağı",
    "image": "/images/movies/Jeremy_Renner_avengers__age_of_ultron_-_yenilmezler__ultron_cagi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Chris Hemsworth",
        "Robert Downey Jr."
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 21 dk.",
      "Yönetmen": "Joss Whedon",
      "imdb": "7.3/10",
      "Değerlendirme": "932821",
      "metacritic": "66"
    },
    "paragraf": "Marvel evreninin önemli yapımlarından biri olan Avengers: Age of Ultron'da Jeremy Renner, süper kahraman Hawkeye rolünü canlandırıyor. Efektlerle dolu sinematik deneyimiyle bu film, Jeremy Renner IMDb listelerinde üst sıralarda yer alıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jeremy-renner-en-iyi-10-filmi#bolum-1",
    "name": "The Town - Hırsızlar Şehri",
    "image": "/images/movies/Jeremy_Renner_the_town_-_hirsizlar_sehri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Renner",
        "Ben Affleck",
        "Rebecca Hall"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 5 dk.",
      "Yönetmen": "Ben Affleck",
      "imdb": "7.5/10",
      "Değerlendirme": "419790",
      "metacritic": "74"
    },
    "paragraf": "The Town, Jeremy Renner'ın kariyerindeki en dikkate değer performanslarından birini sergilediği bir suç draması. Jeremy Renner IMDB'de film kritikleri tarafından da büyük beğeni alan bu film, karmaşık suç örgüleriyle dolu bir gerilim öyküsüne sahip."
  }

];

const ana_resim = "/images/ana_gorseller/jeremy-renner-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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