
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JkSimmonsEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "j-k-simmons-en-iyi-10-filmi";
const baslik = "J.K. Simmons en iyi 10 filmi";
const metin = "J.K. Simmons, geniş bir oyunculuk yelpazesiyle izleyicileri büyülemeye devam ediyor. En iyi yapıtlarını derlemek istedik ki, J.K. Simmons en iyi filmleri hangileri merak edenler için rehber niteliğinde olsun. Bu listede J.K. Simmons filmleri, onun en etkileyici performanslarıyla sıralandı.";
const bitis_metin = "Bu yazımızda J.K. Simmons'ın en dikkate değer performanslarını bir araya getirdik. J.K. Simmons'ın bu filmleri, onun aktörlük yelpazesini ve yeteneklerini görmek için harika bir başlangıç noktası oluşturuyor. İyi seyirler!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["j.k.","simmons","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:13:46+03:00";
const degistirilmeTarihi = "2024-08-16T17:13:46+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-10",
    "name": "Palm Springs",
    "image": "/images/movies/J.K._Simmons_palm_springs.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "Andy Samberg",
        "Cristin Milioti"
      ],
      "Kategori": [
        "Komedi",
        "Romantik"
      ],
      "Yıl": "2020",
      "Süre": "1 sa. 30 dk.",
      "Yönetmen": "Max Barbakow",
      "imdb": "7.4/10",
      "Değerlendirme": "187304",
      "metacritic": "83"
    },
    "paragraf": "Palm Springs, zaman döngüsü temalı eğlenceli bir romantik komedidir. J.K. Simmons filmleri arasında en dikkat çekenlerden biri olan bu filmde, Simmons karmaşık bir karaktere hayat veriyor. İzleyiciyi kahkahalara boğarken düşündürüyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-9",
    "name": "The Mexican - Meksikalı",
    "image": "/images/movies/J.K._Simmons_the_mexican_-_meksikali.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "Brad Pitt",
        "Julia Roberts"
      ],
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "Gore Verbinski",
      "imdb": "6.1/10",
      "Değerlendirme": "116010",
      "metacritic": "43"
    },
    "paragraf": "Brad Pitt ve Julia Roberts gibi isimlerle birlikte J.K. Simmons oynadığı filmler arasında olan The Mexican, sürükleyici yapısıyla dikkat çekiyor. Simmons, filmdeki yan karakteriyle izleyicilerde iz bırakmayı başarıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-8",
    "name": "Spider-Man 2 - Örümcek Adam 2",
    "image": "/images/movies/J.K._Simmons_spider-man_2_-_orumcek_adam_2.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "Tobey Maguire",
        "Kirsten Dunst"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2004",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "Sam Raimi",
      "imdb": "7.5/10",
      "Değerlendirme": "719568",
      "metacritic": "83"
    },
    "paragraf": "Simmons'ın unutulmaz performansıyla J.K. Simmons en iyi filmleri arasında sayılan Spider-Man 2, J.Jonah Jameson rolüyle hafızalara kazınmıştır. Filmin aksiyon dolu temposu Simmons'ın performansıyla taçlanıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-7",
    "name": "Megamind - Mega Zeka",
    "image": "/images/movies/J.K._Simmons_megamind_-_mega_zeka.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "Will Ferrell",
        "Brad Pitt"
      ],
      "Kategori": [
        "Animasyon",
        "Komedi"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Tom McGrath",
      "imdb": "7.3/10",
      "Değerlendirme": "300100",
      "metacritic": "63"
    },
    "paragraf": "Megamind, J.K. Simmons imdb listelerinde yüksek puan almış animasyon filmlerinden biri. Renkli karakterleri ve eğlenceli hikayesiyle hem çocuklar hem de yetişkinler için ideal bir seyir olmuş durumda. Simmons burada seslendirme sanatındaki başarısını da gösteriyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-6",
    "name": "Up in the Air - Aklı Havada",
    "image": "/images/movies/J.K._Simmons_up_in_the_air_-_akli_havada.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "George Clooney",
        "Vera Farmiga"
      ],
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Jason Reitman",
      "imdb": "7.4/10",
      "Değerlendirme": "351176",
      "metacritic": "83"
    },
    "paragraf": "George Clooney başrollü bu filmde, J.K. Simmons'ın kısa ama etkili performansı dikkat çekiyor. Jay Roach'un yönetmenliğinde, iş güvencesizliği üzerine düşündürücü bir film olan Up in the Air, J.K. Simmons'ın yeteneğini parlatıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-5",
    "name": "La La Land - Aşıklar Şehri",
    "image": "/images/movies/J.K._Simmons_la_la_land_-_asiklar_sehri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "Ryan Gosling",
        "Emma Stone"
      ],
      "Kategori": [
        "Müzikal",
        "Romantik"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Damien Chazelle",
      "imdb": "8/10",
      "Değerlendirme": "685361",
      "metacritic": "94"
    },
    "paragraf": "Emma Stone ve Ryan Gosling ile birlikte, J.K. Simmons en iyi filmleri arasında yer alan La La Land'de, kısa ama unutulmayacak bir performans sergiliyor. Müzikler ve estetiğiyle olduğu kadar Simmons'ın katkısıyla da göz dolduran yapım."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-4",
    "name": "The Accountant - Hesaplaşma",
    "image": "/images/movies/J.K._Simmons_the_accountant_-_hesaplasma.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "Ben Affleck",
        "Anna Kendrick"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Gavin O'Connor",
      "imdb": "7.3/10",
      "Değerlendirme": "327731",
      "metacritic": "51"
    },
    "paragraf": "Ben Affleck ile birlikte J.K. Simmons'ın da oyunculuk gösterdiği The Accountant, Simmons'ın oyunculuk yeteneklerini sergilediği J.K. Simmons imdb puanları yüksek aksiyon-gerilim filmleri arasında yer alıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-3",
    "name": "Juno",
    "image": "/images/movies/J.K._Simmons_juno.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "Elliot Page",
        "Michael Cera"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 36 dk.",
      "Yönetmen": "Jason Reitman",
      "imdb": "7.4/10",
      "Değerlendirme": "552904",
      "metacritic": "81"
    },
    "paragraf": "Juno, gençliği ve değişken duyguları samimi bir dille ele alan bir hikaye. J.K. Simmons oynadığı filmler arasında önemli bir yere sahip olan bu yapımda mükemmel oyunculuğu ile bizi duygusal bir yolculuğa çıkarıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-2",
    "name": "Whiplash",
    "image": "/images/movies/J.K._Simmons_whiplash.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "Miles Teller"
      ],
      "Kategori": [
        "Dram",
        "Müzik"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Damien Chazelle",
      "imdb": "8.5/10",
      "Değerlendirme": "1010250",
      "metacritic": "89"
    },
    "paragraf": "J.K. Simmons en iyi filmi olarak anılacak nitelikte performans sergilediği Whiplash, ona Oscar ödülü kazandırdı. Sert ve titiz bir müzik öğretmenini canlandırdığı bu film, izleyicilere güçlü duygular yaşatıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/j-k-simmons-en-iyi-10-filmi#bolum-1",
    "name": "Spider-Man: No Way Home",
    "image": "/images/movies/J.K._Simmons_spider-man__no_way_home.jpg",
    "ozellikler": {
      "Oyuncular": [
        "J.K. Simmons",
        "Tom Holland",
        "Zendaya"
      ],
      "Kategori": [
        "Aksiyon",
        "Fantastik"
      ],
      "Yıl": "2021",
      "Süre": "2 sa. 28 dk.",
      "Yönetmen": "Jon Watts",
      "imdb": "8.2/10",
      "Değerlendirme": "899237",
      "metacritic": "71"
    },
    "paragraf": "Marvel dünyasında yeniden J. Jonah Jameson rolüyle öne çıkan J.K. Simmons, Spider-Man: No Way Home'da dinamik bir performans sergiliyor. J.K. Simmons en iyi filmleri arasında şüphesiz ilk sıralarda yer alıyor ve hayran kitlesini genişletiyor."
  }

];

const ana_resim = "/images/ana_gorseller/j-k-simmons-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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