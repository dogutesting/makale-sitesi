
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JavierBardemEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "javier-bardem-en-iyi-10-filmi";
const baslik = "Javier Bardem en iyi 10 filmi";
const metin = "Javier Bardem, Hollywood'un en yetenekli aktörlerinden biri olarak kabul edilir. Kariyeri boyunca birçok önemli projede yer almıştır. Biz de bu yazımızda Javier Bardem filmleri arasında en dikkat çekenleri bir araya getirdik.";
const bitis_metin = "Bu yazımızda Javier Bardem oynadığı filmleri ve en iyi performanslarını sizlerle paylaştık. Javier Bardem en iyi filmleri ile sinemaseverlerin gönlünde taht kurmuş bir aktördür. Umarız bu liste ilginizi çekmiştir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["javier","bardem","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:59:37+03:00";
const degistirilmeTarihi = "2024-08-16T16:59:37+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-10",
    "name": "The Gunman - Silâhın Şarkısı",
    "image": "/images/movies/Javier_Bardem_the_gunman_-_silâhin_sarkisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Sean Penn",
        "Jasmine Trinca"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Pierre Morel",
      "imdb": "5.8/10",
      "Değerlendirme": "43590",
      "metacritic": "39"
    },
    "paragraf": "The Gunman, Javier Bardem'in aksiyon dolu sahneleri ile dikkat çeken bir filmi. Aksiyon severler için Javier Bardem'in oyunculuğunu sergilediği, aksiyonu bol filmler arasında yer alan bir yapım."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-9",
    "name": "The Counselor - Danışman",
    "image": "/images/movies/Javier_Bardem_the_counselor_-_danisman.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Michael Fassbender",
        "Penélope Cruz"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Ridley Scott",
      "imdb": "5.4/10",
      "Değerlendirme": "106407",
      "metacritic": "48"
    },
    "paragraf": "Danışman, etik sınırları zorlayan bir dünyayı keşfeden karakterler arasındaki bir gerilim filmidir. Javier Bardem'in oynadığı filmler arasında bu gerilim dolu hikaye öne çıkmaktadır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-8",
    "name": "Eat Pray Love - Ye, Dua Et, Sev",
    "image": "/images/movies/Javier_Bardem_eat_pray_love_-_ye,_dua_et,_sev.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Julia Roberts",
        "I. Gusti Ayu Puspawati"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 13 dk.",
      "Yönetmen": "Ryan Murphy",
      "imdb": "5.8/10",
      "Değerlendirme": "107182",
      "metacritic": "50"
    },
    "paragraf": "Eat Pray Love, bir kadının kendini bulma hikayesini konu alıyor. Javier Bardem en iyi filmleri arasında olan bu filmde, Bardem etkileyici bir performans sergiliyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-7",
    "name": "The Roads Not Taken - Gidilmeyen Yollar",
    "image": "/images/movies/Javier_Bardem_the_roads_not_taken_-_gidilmeyen_yollar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Elle Fanning"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2020",
      "Süre": "1 sa. 25 dk.",
      "Yönetmen": "Sally Potter",
      "imdb": "5.2/10",
      "Değerlendirme": "2934",
      "metacritic": "42"
    },
    "paragraf": "Gidilmeyen Yollar, Javier Bardem'in duygusal yoğunluğu ile dikkat çeken bir film. Film, farklı hayat yollarını ve seçilmemiş kurgusal yaşamları sorgulayan temasıyla öne çıkıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-6",
    "name": "The Dancer Upstairs - Ozanlar Dans Etmez",
    "image": "/images/movies/Javier_Bardem_the_dancer_upstairs_-_ozanlar_dans_etmez.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Juan Diego Botto"
      ],
      "Kategori": [
        "Suç"
      ],
      "Yıl": "2002",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "John Malkovich",
      "imdb": "6.8/10",
      "Değerlendirme": "6909",
      "metacritic": "64"
    },
    "paragraf": "Ozanlar Dans Etmez, Javier Bardem'in oyunculuk kariyerinde önemli bir yere sahiptir. Bu suç temalı yapımda, Bardem'in derinlemesine bir performans sergilendiğini görüyoruz."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-5",
    "name": "To the Wonder - Aşk Ödevi",
    "image": "/images/movies/Javier_Bardem_to_the_wonder_-_ask_odevi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Ben Affleck",
        "Olga Kurylenko"
      ],
      "Kategori": [
        "Romantik Dram"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Terrence Malick",
      "imdb": "5.8/10",
      "Değerlendirme": "30120",
      "metacritic": "58"
    },
    "paragraf": "Aşk Ödevi, bir aşk hikayesinin derinliklerine inen bir film. Javier Bardem'in harika performansı, izleyiciyi etkileyen ve düşündüren bir yapım olarak dikkat çekiyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-4",
    "name": "Vicky Cristina Barcelona",
    "image": "/images/movies/Javier_Bardem_vicky_cristina_barcelona.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Penélope Cruz",
        "Rebecca Hall",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Romantik Komedi"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 36 dk.",
      "Yönetmen": "Woody Allen",
      "imdb": "7.1/10",
      "Değerlendirme": "270604",
      "metacritic": "70"
    },
    "paragraf": "Vicky Cristina Barcelona, Javier Bardem'in en iyi filmi olarak anılabilecek ve kariyerinde iz bırakan bir yapımdır. Romantik komedi türündeki eserde etkileyici bir karakter canlandırması sunuyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-3",
    "name": "Biutiful",
    "image": "/images/movies/Javier_Bardem_biutiful.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Maricel Álvarez"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 28 dk.",
      "Yönetmen": "Alejandro G. Iñárritu",
      "imdb": "7.4/10",
      "Değerlendirme": "95104",
      "metacritic": "58"
    },
    "paragraf": "Biutiful, Javier Bardem'in oyunculuğunun zirve yaptığı, kendine has bir hikaye. Bu yapımda Bardem'in performansı yalnızca dramatik değil, aynı zamanda izleyiciyi derinden etkiliyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-2",
    "name": "Skyfall",
    "image": "/images/movies/Javier_Bardem_skyfall.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Daniel Craig",
        "Judi Dench"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Sam Mendes",
      "imdb": "7.8/10",
      "Değerlendirme": "736269",
      "metacritic": "81"
    },
    "paragraf": "Skyfall, James Bond serisinin unutulmaz filmleri arasındadır. Javier Bardem, ikonik bir kötü adam rolünü üstlenerek filmi unutulmaz kılıyor. Aksiyon ve gerilimin yüksek olduğu bu film, Bardem'in en iyi performanslarından biridir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/javier-bardem-en-iyi-10-filmi#bolum-1",
    "name": "No Country for Old Men - İhtiyarlara Yer Yok",
    "image": "/images/movies/Javier_Bardem_no_country_for_old_men_-_ihtiyarlara_yer_yok.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Javier Bardem",
        "Tommy Lee Jones"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2007",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Ethan Coen",
      "imdb": "8.2/10",
      "Değerlendirme": "1076407",
      "metacritic": "92"
    },
    "paragraf": "İhtiyarlara Yer Yok, Javier Bardem imdb açısından en yüksek puanlarına sahip yapımlarından biridir. Bu gerilim dolu filmdeki performansıyla Oscar ödülünü kazanmıştır. Bardem, canlandırdığı karakterle izleyenlerin aklında yer etmeyi başarıyor."
  }

];

const ana_resim = "/images/ana_gorseller/javier-bardem-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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