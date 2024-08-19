
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DavidFincherEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "david-fincher-en-iyi-10-filmi";
const baslik = "David Fincher'ın en iyi 10 filmi";
const metin = "David Fincher, sinema dünyasında özgün stilini ve derin karakter analizleriyle tanınan başarılı bir yönetmendir. David Fincher filmleri denildiğinde akıllara gelen imgeler genellikle karanlık, gerçeküstü ve psikolojik derinlik içeren yapımlardır. Bu yazımızda, David Fincher'ın büyüleyici filmografisinden en iyi on eseri sıralayacağız. Bu listede, sıra dışı hikayeleri ve üstün kurgu teknikleriyle öne çıkan filmleri bulacaksınız. David Fincher kaç yılında doğdu dediğinizde ise 1962 yanıtını vermek gerekiyor. Şimdi, David Fincher en iyi filmleri listemize bir göz atalım.";
const bitis_metin = "Bu yazıda, David Fincher'ın sinema dünyasında bıraktığı derin izleri ve unutulmaz filmlerini inceledik. Her bir film, kendi içinde bir sanat eseri olarak değerlendirilmeli. İster gerilim, isterse drama olsun, Fincher'ın her filmi ayrı bir başyapıt. Umarız bu David Fincher filmleri listesi, onun sanatına olan takdirinizi daha da artırır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["david","fincher","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-22T17:26:48+03:00";
const degistirilmeTarihi = "2024-04-22T17:26:48+03:00";
const addDate = "22.04.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-10",
    "name": "Alien 3",
    "image": "/images/movies/david_fincher_alien_3.png",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Sigourney Weaver"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Korku"
      ],
      "Süre": "1 sa. 54 dk.",
      "Yıl": "1992",
      "imdb": "6.5/10",
      "metascore": "59",
      "Değerlendirme": "319000"
    },
    "paragraf": "Fincher'ın film kariyerinin başlangıç eseri olarak kabul edilen Alien 3, bu yaratıcı yönetmenin imzasını taşıyan ilk profesional işlerden biridir. Filmin karanlık atmosferi ve güçlü görsel tarzı, Fincher'ın daha sonraki üretimlerinde de kendini göstermeye devam edecektir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-9",
    "name": "The Game",
    "image": "/images/movies/david_fincher_the_game.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Michael Douglas",
        "Sean Penn"
      ],
      "Kategori": [
        "Gerilim",
        "Gizem"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "1997",
      "imdb": "7.8/10",
      "metascore": "61",
      "Değerlendirme": "429000"
    },
    "paragraf": "The Game, izleyiciyi sürekli tahmin yürütme halinde tutan bir gerilim-dramıdır. Film, Fincher'ın klasikleşen karanlık tonunu ve gerilim dolu anlatısını çok iyi bir şekilde yansıtıyor. Bu yapım, David Fincher filmleri en iyi listelerinde sıkça yer alır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-8",
    "name": "Panic Room",
    "image": "/images/movies/david_fincher_panic_room.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Jodie Foster",
        "Kristen Stewart"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Süre": "1 sa. 52 dk.",
      "Yıl": "2002",
      "imdb": "6.8/10",
      "metascore": "65",
      "Değerlendirme": "297000"
    },
    "paragraf": "Panic Room, kapana kısılmış bir anne-kızın hikayesini anlatarak sınırlı mekan içinde maksimum gerilim yaratmayı başarıyor. Fincher'ın yönetmenlik becerileri, filmin stresli atmosferini perdeye başarıyla taşıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-7",
    "name": "The Curious Case of Benjamin Button",
    "image": "/images/movies/david_fincher_benjamin_button.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Brad Pitt",
        "Cate Blanchett"
      ],
      "Kategori": [
        "Drama",
        "Fantastik"
      ],
      "Süre": "2 sa. 46 dk.",
      "Yıl": "2008",
      "imdb": "7.8/10",
      "metascore": "70",
      "Değerlendirme": "695000"
    },
    "paragraf": "Bu etkileyici film, zamanın tersine işlediği bir adamın sıradışı yaşam öyküsünü konu alıyor. The Curious Case of Benjamin Button, Fincher'ın yönetmenlik yeteneği ve vizyonunun genişliğini gözler önüne seriyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-6",
    "name": "The Girl with the Dragon Tattoo",
    "image": "/images/movies/david_fincher_dragon_tattoo.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Daniel Craig",
        "Rooney Mara"
      ],
      "Kategori": [
        "Drama",
        "Gizem",
        "Suç"
      ],
      "Süre": "2 sa. 38 dk.",
      "Yıl": "2011",
      "imdb": "7.8/10",
      "metascore": "71",
      "Değerlendirme": "495000"
    },
    "paragraf": "Bu karanlık gizem filmi, Fincher'ın kendine has üslubunu ve sinematografik derinliğini mükemmel bir şekilde gösteriyor. Film, izleyiciyi baştan sona sürükleyen bir hikaye anlatımı sunuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-5",
    "name": "Zodiac",
    "image": "/images/movies/david_fincher_zodiac.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Robert Downey Jr."
      ],
      "Kategori": [
        "Suç",
        "Drama",
        "Tarihi"
      ],
      "Süre": "2 sa. 37 dk.",
      "Yıl": "2007",
      "imdb": "7.7/10",
      "metascore": "7.9",
      "Değerlendirme": "598000"
    },
    "paragraf": "Zodiac, gerilim ve detay üzerine kurulu fantastik bir yönetmenlik sergileyerek Fincher'ın gücünü kanıtlıyor. Gerçek bir hikayeden esinlenilerek yapılan bu film, yönetmenin detaya olan düşkünlüğünü ve anlatım kabiliyetini öne çıkarıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-4",
    "name": "Gone Girl",
    "image": "/images/movies/david_fincher_gone_girl.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Ben Affleck",
        "Rosamund Pike"
      ],
      "Kategori": [
        "Gizem",
        "Thriller"
      ],
      "Süre": "2 sa. 29 dk.",
      "Yıl": "2014",
      "imdb": "8.1/10",
      "metascore": "79",
      "Değerlendirme": "1100000"
    },
    "paragraf": "Gone Girl, izleyiciyi ters köşelerle dolu bir serüvene çıkarırken, David Fincher'ın anlatı ustalığını ve sinema dilindeki yeteneğini bir kez daha bizlere sergiliyor. Film, sadece bir suç öyküsü değil, aynı zamanda karanlık bir aşk hikayesi sunuyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-3",
    "name": "Se7en",
    "image": "/images/movies/david_fincher_yedi.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Brad Pitt",
        "Morgan Freeman"
      ],
      "Kategori": [
        "Suç",
        "Gizem",
        "Thriller"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "1995",
      "imdb": "8.6/10",
      "metascore": "65",
      "Değerlendirme": "1800000"
    },
    "paragraf": "Se7en, unutulmaz sahneleri ve sürükleyici hikaye yapısı ile Fincher'ın en ikonik filmlerinden biridir. Bu film, sinema tarihinin en şaşırtıcı sonlarından birine sahip ve sıkı bir gerilim atmosferi sunarak, David Fincher en iyi filmi olarak değerlendirilmek için yeterli nitelikleri taşıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-2",
    "name": "The Social Network",
    "image": "/images/movies/david_fincher_social_network.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Jesse Eisenberg",
        "Andrew Garfield",
        "Justin Timberlake"
      ],
      "Kategori": [
        "Biografi",
        "Drama"
      ],
      "Süre": "2 sa. 0 dk.",
      "Yıl": "2010",
      "imdb": "7.7/10",
      "metascore": "95",
      "Değerlendirme": "758000"
    },
    "paragraf": "The Social Network, teknoloji ve insan ilişkileri üzerine derinlemesine bir bakış sunarak Fincher'ın anlatımındaki çeşitliliği ve derinliği gözler önüne seriyor. Facebook'un kuruluş öyküsünü anlatan bu film, modern zamanların en etkili yapımlarından biri."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/david-fincher-en-iyi-10-filmi#bolum-1",
    "name": "Fight Club",
    "image": "/images/movies/david_fincher_fight_club.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Brad Pitt",
        "Edward Norton"
      ],
      "Kategori": [
        "Drama",
        "Thriller"
      ],
      "Süre": "2 sa. 19 dk.",
      "Yıl": "1999",
      "imdb": "8.8/10",
      "metascore": "66",
      "Değerlendirme": "2300000"
    },
    "paragraf": "Fight Club, sinema tarihinde kült statüsüne erişmiş bir başyapıttır. Fincher'ın yönetmenlik kariyerindeki bu doruk nokta, toplumsal normlar ve bireysel kimlik üzerine cesur bir eleştiri sunuyor. Film, zamanla sadık bir hayran kitlesi kazanmış olup, David Fincher en iyi filmi tartışmasız olarak kabul ediliyor."
  }

];

const ana_resim = "/images/ana_gorseller/david_fincher_en_iyi_10_film_kapak.png" //! SEN DOLDUR
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