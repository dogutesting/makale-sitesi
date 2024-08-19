
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ColinFarrellEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "colin-farrell-en-iyi-10-filmi";
const baslik = "Colin Farrell en iyi 10 filmi";
const metin = "Colin Farrell, yetenekli oyunculuğuyla ve geniş bir film yelpazesiyle tanınan bir sanatçı. Bu makalede, Colin Farrell filmleri arasından en iyi olanları sizler için derledik. Gelmiş geçmiş 'Colin Farrell oynadığı filmler' arasından seçtiğimiz bu liste, Colin Farrell imdb ve hayranları için bir rehber niteliğinde.";
const bitis_metin = "Colin Farrell'ın kariyerinde iz bırakan en iyi 10 filmi derledik. Bu liste, oyuncunun geniş performans yelpazesini ve çok yönlülüğünü bir kez daha gözler önüne seriyor. Colin Farrell oynadığı filmler arasında seçkin eserler bulabilirsiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["colin","farrell","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:24:20+03:00";
const degistirilmeTarihi = "2024-08-16T17:24:20+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt3464902",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-10",
    "name": "The Lobster - Istakoz",
    "image": "/images/movies/Colin_Farrell_the_lobster_-_istakoz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Lee Van Cleef",
        "Jacqueline Abrahams",
        "Roger Ashton-Griffiths"
      ],
      "Kategori": [
        "Dram",
        "Bilim Kurgu"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Yorgos Lanthimos",
      "imdb": "7.1/10",
      "Değerlendirme": "303756",
      "metacritic": "82"
    },
    "paragraf": "The Lobster, Colin Farrell en iyi filmleri arasında yer alıyor. Film, distopik bir dünyada aşksız bir hayatı ve yalnızlığı sorgulayan sıra dışı bir hikayeye sahip. Farrell, bu filmdeki performansıyla büyük beğeni topladı. Bu, Colin Farrell imdb puanı yüksek yapımlarından biri olarak dikkat çekiyor."
  },
  {
    "num": "9",
    "title_id": "tt0780536",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-9",
    "name": "In Bruges - Brüj’da",
    "image": "/images/movies/Colin_Farrell_in_bruges_-_bruj’da.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Brendan Gleeson",
        "Elizabeth Berrington",
        "Rudy Blomme"
      ],
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Martin McDonagh",
      "imdb": "7.9/10",
      "Değerlendirme": "465960",
      "metacritic": "67"
    },
    "paragraf": "In Bruges, Colin Farrell en iyi filmi seçimlerinde kesinlikle unutulmaması gereken bir yapım. Avrupa'nın güzel Bruges şehrinde geçen bu kara mizah dolu hikayede Farrell, karakterine yeni boyutlar kazandırıyor. Colin Farrell oynadığı filmler arasında önemli bir yer edinen bu film IMDb'de de takdir topluyor."
  },
  {
    "num": "8",
    "title_id": "tt1931533",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-8",
    "name": "Seven Psychopaths - Yedi Psikopat",
    "image": "/images/movies/Colin_Farrell_seven_psychopaths_-_yedi_psikopat.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Sam Rockwell",
        "Michael Pitt",
        "Michael Stuhlbarg"
      ],
      "Kategori": [
        "Suç",
        "Komedi"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Martin McDonagh",
      "imdb": "7.1/10",
      "Değerlendirme": "275888",
      "metacritic": "66"
    },
    "paragraf": "Yedi Psikopat, Colin Farrell filmleri listesinde öne çıkan yapımlardan biri. Farklı hikaye yapısıyla dikkat çeken filmde, Farrell'ın canlandırdığı karakterin kara mizahla harmanlanmış hikayesi izleyicilerden tam not aldı. Bu Colin Farrell imdb tablosunda da göze çarpan bir yapım."
  },
  {
    "num": "7",
    "title_id": "tt0181689",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-7",
    "name": "Minority Report - Azınlık Raporu",
    "image": "/images/movies/Colin_Farrell_minority_report_-_azinlik_raporu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Tom Cruise",
        "Max von Sydow"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "2002",
      "Süre": "2 sa. 25 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.6/10",
      "Değerlendirme": "589413",
      "metacritic": "80"
    },
    "paragraf": "Bilim kurgu türünde klasiklerden biri haline gelen Azınlık Raporu, Colin Farrell oynadığı filmler arasında unutulmaz bir yere sahip. Steven Spielberg yönetmenliğindeki filmde, Farrell müthiş performansıyla dikkat çekiyor. Colin Farrell en iyi filmi sıralamasında kesinlikle üst sıralarda yer almalı."
  },
  {
    "num": "6",
    "title_id": "tt5715874",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-6",
    "name": "Killing of a Sacred Deer - Kutsal Geyiğin Ölümü",
    "image": "/images/movies/Colin_Farrell_killing_of_a_sacred_deer_-_kutsal_geyigin_olumu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Nicole Kidman",
        "Barry G. Bernson",
        "Herb Caillouet"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 1 dk.",
      "Yönetmen": "Yorgos Lanthimos",
      "imdb": "7/10",
      "Değerlendirme": "192888",
      "metacritic": "73"
    },
    "paragraf": "Kutsal Geyiğin Ölümü, Colin Farrell imdb puanı ve eleştirmen yorumlarıyla olumlu dönüş alan sıra dışı bir yapım. Yorgos Lanthimos'un yönettiği bu filmde Farrell, gerilim ve dramı bir araya getirerek etkileyici bir performans sergiliyor."
  },
  {
    "num": "5",
    "title_id": "tt0183649",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-5",
    "name": "Phone Booth - Telefon Kulübesi",
    "image": "/images/movies/Colin_Farrell_phone_booth_-_telefon_kulubesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Kiefer Sutherland"
      ],
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 21 dk.",
      "Yönetmen": "Joel Schumacher",
      "imdb": "7.1/10",
      "Değerlendirme": "288489",
      "metacritic": "56"
    },
    "paragraf": "Telefon Kulübesi, heyecan ve gerilimi Colin Farrell en iyi filmleri arasına taşımayı başaran bir yapım. Bir telefon kulübesine sıkışan Farrell, filmdeki gergin atmosferi adeta dışa vuruyor. Bu film, Colin Farrell imdb puanları içinde dikkat çekici."
  },
  {
    "num": "4",
    "title_id": "tt0430357",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-4",
    "name": "Miami Vice",
    "image": "/images/movies/Colin_Farrell_miami_vice.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Jamie Foxx"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "Michael Mann",
      "imdb": "6.1/10",
      "Değerlendirme": "124993",
      "metacritic": "66"
    },
    "paragraf": "Miami Vice, aksiyonu ve suç dünyasını Colin Farrell spektrumuyla ekrana taşıyan bir film. Farrell, bu klasik televizyon dizisinin sinema uyarlamasında modern bir dokunuş katıyor. Colin Farrell oynadığı filmler içinde aksiyon sevenler için ideal bir seçenek."
  },
  {
    "num": "3",
    "title_id": "tt0402399",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-3",
    "name": "The New World - Yeni Dünya",
    "image": "/images/movies/Colin_Farrell_the_new_world_-_yeni_dunya.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Q'orianka Kilcher"
      ],
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 15 dk.",
      "Yönetmen": "Terrence Malick",
      "imdb": "6.7/10",
      "Değerlendirme": "90545",
      "metacritic": "73"
    },
    "paragraf": "Yeni Dünya, Colin Farrell en iyi filmi kapsamında tarihi bir hikayeyi epik bir dille izleyiciye sunuyor. Terrence Malick'in yönetmenliğinde, 1607'de Virginia'ya gelen İngiliz keşiflerine odaklanıyor. Farrell, dikkat çekici oyunculuk performanslarından birini sergiliyor."
  },
  {
    "num": "2",
    "title_id": "tt1263670",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-2",
    "name": "Crazy Heart - Çılgın Kalp",
    "image": "/images/movies/Colin_Farrell_crazy_heart_-_cilgin_kalp.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Jeff Bridges",
        "James Keane"
      ],
      "Kategori": [
        "Dram",
        "Müzik"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Scott Cooper",
      "imdb": "7.2/10",
      "Değerlendirme": "95240",
      "metacritic": "83"
    },
    "paragraf": "Çılgın Kalp, Colin Farrell oynadığı filmler arasında müzik dolu bir drama olarak dikkat çekiyor. Jeff Bridges ile beraber yer aldığı bu filmde Farrell, country müziğin melankolik atmosferini başarıyla yansıtıyor."
  },
  {
    "num": "1",
    "title_id": "tt1499658",
    "url": "https://enonlar.com/colin-farrell-en-iyi-10-filmi#bolum-1",
    "name": "Horrible Bosses - Patrondan Kurtulma Sanatı",
    "image": "/images/movies/Colin_Farrell_horrible_bosses_-_patrondan_kurtulma_sanati.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Colin Farrell",
        "Jason Bateman",
        "Steve Wiebe"
      ],
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 38 dk.",
      "Yönetmen": "Seth Gordon",
      "imdb": "6.9/10",
      "Değerlendirme": "472531",
      "metacritic": "57"
    },
    "paragraf": "Patrondan Kurtulma Sanatı, Colin Farrell filmleri arasında eğlenceli ve komik kurgusuyla öne çıkıyor. Bir grup arkadaşın, korkunç patronlarından kurtuluş planlarını anlatan hikayede, Farrell'ın mizah dolu karakteri unutulmaz anlar yaşatıyor."
  }

];

const ana_resim = "/images/ana_gorseller/colin-farrell-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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