
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function TomHanksEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "tom-hanks-en-iyi-10-filmi";
const baslik = "Tom Hanks en iyi 10 filmi";
const metin = "Tom Hanks'in harikulade oyunculuk serüvenini anlatan ve Tom Hanks izlenmesi gereken filmleri arasında yer alan yapıtlar, sinema tarihinde derin bir iz bıraktı. İşte en unutulmaz Tom Hanks en iyi filmleri.";
const bitis_metin = "Bu makalemizde, Tom Hanks'in sinema dünyasına katkıda bulunduğu en etkileyici 10 filmi ele aldık. Tom Hanks en iyi filmleri listesi ile sizlere unutulmaz anlatımlar sunmayı amaçladık.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["tom","hanks","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T19:20:57+03:00";
const degistirilmeTarihi = "2024-05-25T19:20:57+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-10",
    "name": "Forrest Gump - Forrest Gump",
    "image": "/images/movies/tom_hanks_forrest_gump.jpg",
    "ozellikler": {
      "Yönetmen": "Robert Zemeckis",
      "Oyuncular": [
        "Tom Hanks"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Süre": "2 sa. 22 dk.",
      "Yıl": "1994",
      "imdb": "8.8/10",
      "Değerlendirme": "2300000",
      "metascore": "82"
    },
    "paragraf": "Forrest Gump, Tom Hanks en iyi filmi olarak uzun süredir yankı uyandıran bir başyapıttır. Hanks bu filmde, sınırsız bir iyimserliğe sahip, Amerikan tarihine tanık olmuş bir adamın rolünü mükemmel bir şekilde canlandırıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-9",
    "name": "Toy Story - Oyuncak Hikayesi",
    "image": "/images/movies/tom_hanks_toy_story_-_oyuncak_hikayesi.jpg",
    "ozellikler": {
      "Yönetmen": "John Lasseter",
      "Oyuncular": [
        "Tom Hanks",
        "Tim Allen"
      ],
      "Kategori": [
        "Animasyon",
        "Macera",
        "Komedi"
      ],
      "Süre": "1 sa. 21 dk.",
      "Yıl": "1995",
      "imdb": "8.3/10",
      "Değerlendirme": "1100000",
      "metascore": "96"
    },
    "paragraf": "Oyuncak Hikayesi, Tom Hanks filmleri arasında, oyuncakların hayat bulduğu bir animasyon mucizesidir. Hanks, Woody karakterine sesiyle hayat vererek izleyicilere unutulmaz anlar yaşatmıştır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-8",
    "name": "The Green Mile - Yeşil Yol",
    "image": "/images/movies/tom_hanks_the_green_mile_-_yesil_yol.jpg",
    "ozellikler": {
      "Yönetmen": "Frank Darabont",
      "Oyuncular": [
        "Tom Hanks",
        "Michael Clarke Duncan"
      ],
      "Kategori": [
        "Drama",
        "Suç"
      ],
      "Süre": "3 sa. 9 dk.",
      "Yıl": "1999",
      "imdb": "8.6/10",
      "Değerlendirme": "1400000",
      "metascore": "61"
    },
    "paragraf": "Yeşil Yol, Tom Hanks filmleri arasında sıradışı bir dramı ele alır. Hanks, bir hapishane gardiyanı olarak, idam mahkumu bir adamla kurduğu derin bağ ve yaşanan olayları etkileyici bir şekilde aktarıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-7",
    "name": "Philadelphia",
    "image": "/images/movies/tom_hanks_philadelphia.jpg",
    "ozellikler": {
      "Yönetmen": "Jonathan Demme",
      "Oyuncular": [
        "Tom Hanks",
        "Denzel Washington"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 5 dk.",
      "Yıl": "1993",
      "imdb": "7.7/10",
      "Değerlendirme": "259000",
      "metascore": "66"
    },
    "paragraf": "Philadelphia, Tom Hanks'in hakkını verdiği rollerden biri olarak öne çıkar. Bu filmde, AIDS ile mücadele eden bir avukatın hikayesini ve toplumdaki önyargılara karşı verdiği mücadeleyi canlandırmaktadır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-6",
    "name": "Saving Private Ryan - Er Ryanı Kurtarmak",
    "image": "/images/movies/tom_hanks_saving_private_ryan_-_er_ryan_i_kurtarmak.jpg",
    "ozellikler": {
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Tom Hanks"
      ],
      "Kategori": [
        "Drama",
        "Savaş"
      ],
      "Süre": "2 sa. 49 dk.",
      "Yıl": "1998",
      "imdb": "8.6/10",
      "Değerlendirme": "1500000",
      "metascore": "91"
    },
    "paragraf": "Er Ryan'ı Kurtarmak, Tom Hanks filmleri içerisinde olağanüstü bir savaş dramıdır. Hanks, Normandiya Çıkarması sırasında kaybolan bir askeri bulmak için gönderilen bir takımın komutanını oynamaktadır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-5",
    "name": "Cast Away - Yeni Hayat",
    "image": "/images/movies/tom_hanks_cast_away_-_yeni_hayat.jpg",
    "ozellikler": {
      "Yönetmen": "Robert Zemeckis",
      "Oyuncular": [
        "Tom Hanks"
      ],
      "Kategori": [
        "Macera",
        "Drama"
      ],
      "Süre": "2 sa. 23 dk.",
      "Yıl": "2000",
      "imdb": "7.8/10",
      "Değerlendirme": "641000",
      "metascore": "74"
    },
    "paragraf": "Yeni Hayat, Tom Hanks filmleri arasında izleyiciyi kendine çeken bir hayatta kalma hikayesidir. Hanks, bir adada mahsur kalan ve hayatta kalma mücadelesi veren bir FedEx çalışanını başarıyla canlandırmaktadır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-4",
    "name": "Big - Büyük",
    "image": "/images/movies/tom_hanks_big_-_buyuk.jpg",
    "ozellikler": {
      "Yönetmen": "Penny Marshall",
      "Oyuncular": [
        "Tom Hanks"
      ],
      "Kategori": [
        "Komedi",
        "Aile"
      ],
      "Süre": "1 sa. 44 dk.",
      "Yıl": "1988",
      "imdb": "7.3/10",
      "Değerlendirme": "241000",
      "metascore": "73"
    },
    "paragraf": "Büyük filmi, Tom Hanks en iyi filmleri arasında yer alır ve bir gencin bir anda yetişkin bir bedende uyanışını eğlenceli bir şekilde anlatır. Hanks bu filmde hem komik hem de duygusal bir performans sergilemekte."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-3",
    "name": "Apollo 13",
    "image": "/images/movies/tom_hanks_apollo_13.jpg",
    "ozellikler": {
      "Yönetmen": "Ron Howard",
      "Oyuncular": [
        "Tom Hanks",
        "Kevin Bacon",
        "Bill Paxton"
      ],
      "Kategori": [
        "Drama",
        "Macera"
      ],
      "Süre": "2 sa. 30 dk.",
      "Yıl": "1995",
      "imdb": "7.7/10",
      "Değerlendirme": "316000",
      "metascore": "78"
    },
    "paragraf": "Apollo 13, uzay temalı Tom Hanks filmleri içinde gerçek bir olaydan esinlenerek yapılmıştır. Hanks, başarısız bir Ay misyonu sırasında astronot Jim Lovell'in hayatta kalma mücadelesini üstlenir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-2",
    "name": "A League of Their Own - Kendi Ligi",
    "image": "/images/movies/tom_hanks_a_league_of_their_own_-_kendi_ligi.jpg",
    "ozellikler": {
      "Yönetmen": "Penny Marshall",
      "Oyuncular": [
        "Tom Hanks",
        "Geena Davis",
        "Madonna"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "2 sa. 8 dk.",
      "Yıl": "1992",
      "imdb": "7.3/10",
      "Değerlendirme": "121000",
      "metascore": "69"
    },
    "paragraf": "Kendi Ligi, Tom Hanks en iyi filmleri listesinde yer alan, II. Dünya Savaşı sırasında kadın beyzbol ligini konu alan eğlenceli bir dramadır. Hanks, bu filmde antrenör rolünde seyircilerin gönlünü fethetmiştir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/tom-hanks-en-iyi-10-filmi#bolum-1",
    "name": "The Terminal - Terminal",
    "image": "/images/movies/tom_hanks_the_terminal_-_terminal.jpg",
    "ozellikler": {
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Tom Hanks",
        "Catherine Zeta-Jones"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "2 sa. 8 dk.",
      "Yıl": "2004",
      "imdb": "7.4/10",
      "Değerlendirme": "412K",
      "metascore": ""
    },
    "paragraf": "Terminal, Tom Hanks filmleri arasında sıra dışı bir hikayeye sahip bir yapıttır. Hanks, vizesi iptal edildiği için JFK Havalimanında mahsur kalan bir adamın hikayesini başarıyla perdeye taşımıştır."
  }
];

const ana_resim = "/images/ana_gorseller/tom_hanks_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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