
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnYuksekImdbPuanli10KomediFilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-yuksek-imdb-puanli-10-komedi-filmi";
const baslik = "En yüksek imdb puanlı 10 komedi filmi";
const metin = "İzlediğinizde sizi güldürecek, neşelendirecek ve belki de düşündürecek en yüksek imdb puanlı komedi filmleri listemize hoş geldiniz. Komedi, her dönemin vazgeçilmez film türlerinden biridir ve herkesin sevdiği o filmler vardır. İşte sizler için seçtiğimiz en iyi komedi filmleri imdb yüksek puanlarına sahip filmleri derledik.";
const bitis_metin = "Bu listede yer alan filmler, komedi filmi deneyiminizi zenginleştirecek ve unutulmaz anlar yaşatacak. Umarız, en yüksek imdb puanlı komedi filmleri arasından seçtiğimiz bu eserler, sizlere keyifli seyirler dileriz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","yuksek","imdb","puanli","10","komedi","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T19:02:56+03:00";
const degistirilmeTarihi = "2024-04-26T19:02:56+03:00";
const addDate = "26.04.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-10",
    "name": "Monty Python and the Holy Grail",
    "image": "/images/movies/monty_python_and_the_holy_grail.jpg",
    "ozellikler": {
      "Yönetmen": "Terry Gilliam, Terry Jones",
      "Oyuncular": [
        "Graham Chapman",
        "John Cleese",
        "Eric Idle"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Süre": "1 sa. 31 dk.",
      "Yıl": "1975",
      "imdb": "8.2/10",
      "Değerlendirme": "570000"
    },
    "paragraf": "Listemizin başlangıcı Monty Python and the Holy Grail ile yapıyoruz. Bu film, absürt komedinin en yüksek imdb puanlı komedi filmleri içinde yer almasını sağlayan mükemmel bir eserdir. Klasik bir kahkaha garantili film."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-9",
    "name": "The Princess Bride",
    "image": "/images/movies/the_princess_bride.jpg",
    "ozellikler": {
      "Yönetmen": "Rob Reiner",
      "Oyuncular": [
        "Cary Elwes",
        "Robin Wright",
        "Mandy Patinkin"
      ],
      "Kategori": [
        "Komedi",
        "Macera",
        "Fantazi"
      ],
      "Süre": "1 sa. 38 dk.",
      "Yıl": "1987",
      "imdb": "8.0/10",
      "Değerlendirme": "451000"
    },
    "paragraf": "The Princess Bride, cüretkar maceralar ve unutulmaz karakterlerle dolu, izleyicilere masalsı bir komedi sunuyor. En iyi komedi filmleri imdb yüksek listesinde haklı bir yer kaplıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-8",
    "name": "Ghostbusters",
    "image": "/images/movies/ghostbusters.jpg",
    "ozellikler": {
      "Yönetmen": "Ivan Reitman",
      "Oyuncular": [
        "Bill Murray",
        "Dan Aykroyd",
        "Sigourney Weaver"
      ],
      "Kategori": [
        "Komedi",
        "Aksiyon",
        "Fantazi"
      ],
      "Süre": "1 sa. 45 dk.",
      "Yıl": "1984",
      "imdb": "7.8/10",
      "Değerlendirme": "450000"
    },
    "paragraf": "Ghostbusters, hem eğlenceli hem de gerilim dolu sahneleri ile komedi ve aksiyonun mükemmel birleşimidir. Bu film, en yüksek imdb puanlı komedi filmleri arasında yer almayı kesinlikle hak ediyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-7",
    "name": "Superbad",
    "image": "/images/movies/superbad.jpg",
    "ozellikler": {
      "Yönetmen": "Greg Mottola",
      "Oyuncular": [
        "Jonah Hill",
        "Michael Cera",
        "Christopher Mintz-Plasse",
        "Emma Stone"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Süre": "1 sa. 53 dk.",
      "Yıl": "2007",
      "imdb": "7.6/10",
      "Değerlendirme": "632000"
    },
    "paragraf": "Superbad, gençlik komedisinin doruk noktasıdır ve nostaljik duyguları harekete geçirir. Liste olarak belirlediğimiz en iyi komedi filmleri imdb yüksek puanlarına sahip olan bu eser, gençlerin maceralarını komik bir şekilde anlatıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-6",
    "name": "The Big Lebowski",
    "image": "/images/movies/the_big_lebowski.jpg",
    "ozellikler": {
      "Yönetmen": "Joel Coen, Ethan Coen",
      "Oyuncular": [
        "Jeff Bridges",
        "John Goodman",
        "Steve Buscemi"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Süre": "1 sa. 57 dk.",
      "Yıl": "1998",
      "imdb": "8.1/10",
      "Değerlendirme": "860000"
    },
    "paragraf": "The Big Lebowski, sıradışı kahramanları ve unutulmaz diyalogları ile kült bir komedi haline gelmiştir. En yüksek imdb puanlı komedi filmleri arasında olmasının hakkını veriyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-5",
    "name": "Groundhog Day",
    "image": "/images/movies/groundhog_day.jpg",
    "ozellikler": {
      "Yönetmen": "Harold Ramis",
      "Oyuncular": [
        "Bill Murray",
        "Andie MacDowell",
        "Chris Elliott"
      ],
      "Kategori": [
        "Komedi",
        "Romantik"
      ],
      "Süre": "1 sa. 41 dk.",
      "Yıl": "1993",
      "imdb": "8/10",
      "Değerlendirme": "685000"
    },
    "paragraf": "Groundhog Day, zaman döngüsü temasını mükemmel şekilde işleyen ve izleyicilere hem kahkaha hem de düşündürücü anlar sunan bir film. İmdb yüksek puanlı bir diğer başyapıt."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-4",
    "name": "Back to the Future",
    "image": "/images/movies/back_to_the_future.jpg",
    "ozellikler": {
      "Yönetmen": "Robert Zemeckis",
      "Oyuncular": [
        "Michael J. Fox",
        "Christopher Lloyd",
        "Lea Thompson"
      ],
      "Kategori": [
        "Komedi",
        "Bilim Kurgu",
        "Macera"
      ],
      "Süre": "1 sa. 56 dk.",
      "Yıl": "1985",
      "imdb": "8.5/10",
      "Değerlendirme": "1300000"
    },
    "paragraf": "Back to the Future, zaman yolculuğu konseptini eğlenceli ve yenilikçi bir şekilde ele alarak, tüm zamanların en sevilen filmlerinden biri haline gelmiştir. Bu efsane filmi imdb en iyi komedi filmleri listemize eklemek bir zorunluluk."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-3",
    "name": "Fargo",
    "image": "/images/movies/fargo.jpg",
    "ozellikler": {
      "Yönetmen": "Joel Coen, Ethan Coen",
      "Oyuncular": [
        "Frances McDormand",
        "William H. Macy",
        "Steve Buscemi"
      ],
      "Kategori": [
        "Komedi",
        "Suç",
        "Drama"
      ],
      "Süre": "1 sa. 38 dk.",
      "Yıl": "1996",
      "imdb": "8.1/10",
      "Değerlendirme": "726000"
    },
    "paragraf": "Fargo, kara mizah unsurlarını başarıyla harmanlayarak komedi ve dramı ustaca birleştiren bir yapıt. İmdb yüksek puanlı komedi filmleri listesinde üst sıralarda yer almayı fazlasıyla hak ediyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-2",
    "name": "Amelie",
    "image": "/images/movies/amelie.jpg",
    "ozellikler": {
      "Yönetmen": "Jean-Pierre Jeunet",
      "Oyuncular": [
        "Audrey Tautou",
        "Mathieu Kassovitz"
      ],
      "Kategori": [
        "Komedi",
        "Romantik"
      ],
      "Süre": "2 sa. 2 dk.",
      "Yıl": "2001",
      "imdb": "8.3/10",
      "Değerlendirme": "794000"
    },
    "paragraf": "Amelie, büyüleyici bir vizyon ve zengin karakter detaylarıyla dolu, seyirciyi derinden etkileyen bir romantik komedi. En yüksek imdb puanlılarından biri olarak, kalpleri fethediyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-komedi-filmi#bolum-1",
    "name": "Life is Beautiful",
    "image": "/images/movies/life_is_beautiful.jpg",
    "ozellikler": {
      "Yönetmen": "Roberto Benigni",
      "Oyuncular": [
        "Roberto Benigni",
        "Nicoletta Braschi"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "1 sa. 56 dk.",
      "Yıl": "1997",
      "imdb": "8.6/10",
      "Değerlendirme": "743000"
    },
    "paragraf": "Listemizin zirvesinde yer alan Life is Beautiful, acı bir dönemin öyküsünü mizahi bir dille anlatarak hem güldürüyor hem de gözyaşlarına boğuyor. Bu çok yönlü film, en yüksek imdb puanlı komedi filmleri listemizin en üstünde yer alıyor."
  }

];

const ana_resim = "/images/ana_gorseller/en_yuksek_imdb_puanli_10_komedi_filmi.jpg" //! SEN DOLDUR
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