
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnIyi10KorkuFilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-iyi-10-korku-filmi";
const baslik = "Dünyanın en iyi 10 korku filmi";
const metin = "Tüyler ürpertici korku filmleri her zaman ilgi çekici olmuştur. Korku, gerilim ve belirsizlikle dolu atmosferleri ile dünyanın en iyi korku filmi nedir sorusunu cevaplamak zor olabilir, ancak işte sizin için derlediğimiz dünyanın en iyi korku filmleri listesi.";
const bitis_metin = "Bu yazımızda, dünyanın en iyi korku filmleri hangisi arayışınıza yardımcı olabilecek, gerilim ve korkunun sınırlarını zorlayan filmleri derledik. Umarız bu listeye bayılmışsınızdır! Korku dünyasına adım atarken, bu filmleri izlemenin yüksek adrenalin ve heyecanı garanti!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","iyi","10","korku","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-25T18:36:04+03:00";
const degistirilmeTarihi = "2024-04-25T18:36:04+03:00";
const addDate = "25.04.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-10",
    "name": "Paranormal Activity",
    "image": "/images/movies/paranormal_activity.jpg",
    "ozellikler": {
      "Yönetmen": "Oren Peli",
      "Oyuncular": [
        "Katie Featherston",
        "Micah Sloat"
      ],
      "Kategori": [
        "Gizem",
        "Korku"
      ],
      "Süre": "1 sa. 26 dk.",
      "Yıl": "2007",
      "imdb": "6.3/10",
      "Değerlendirme": "256000"
    },
    "paragraf": "Paranormal Activity, az bir bütçeyle maksimum korku etkisi yaratarak dünyanın en iyi korku filmleri arasına girmeyi başardı. Bu film, gerilim ve paranormal olayları ile en iyi 10 korku filmleri arasında yer alıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-9",
    "name": "The Ring",
    "image": "/images/movies/the_ring.jpg",
    "ozellikler": {
      "Yönetmen": "Gore Verbinski",
      "Oyuncular": [
        "Naomi Watts",
        "Martin Henderson"
      ],
      "Kategori": [
        "Korku",
        "Gizem"
      ],
      "Süre": "1 sa. 55 dk.",
      "Yıl": "2002",
      "imdb": "7.1/10",
      "Değerlendirme": "375000"
    },
    "paragraf": "The Ring, dünyanın en iyi korku filmi hangisi diye sorulduğunda akla gelen filmlerden biridir. Bu uyarlamada, gizemli bir video kaset, izleyenleri korkunç sonlarla tehdit ediyor ve böylece en iyi korku filmleri listesine adını yazdırıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-8",
    "name": "A Nightmare on Elm Street",
    "image": "/images/movies/a_nightmare_on_elm_street.jpg",
    "ozellikler": {
      "Yönetmen": "Wes Craven",
      "Oyuncular": [
        "Robert Englund",
        "Heather Langenkamp"
      ],
      "Kategori": [
        "Korku"
      ],
      "Süre": "1 sa. 31 dk.",
      "Yıl": "1984",
      "imdb": "7.5/10",
      "Değerlendirme": "262000"
    },
    "paragraf": "A Nightmare on Elm Street, Freddy Krueger'ın rüyalarınıza girmesiyle unutulmaz bir korkuya yol açar. Wes Craven'ın bu başyapıtı, en iyi korku filmleri arasında ikonik bir yer tutar."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-7",
    "name": "Saw",
    "image": "/images/movies/saw.jpg",
    "ozellikler": {
      "Yönetmen": "James Wan",
      "Oyuncular": [
        "Leigh Whannell",
        "Cary Elwes"
      ],
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Süre": "1 sa. 43 dk.",
      "Yıl": "2004",
      "imdb": "7.6/10",
      "Değerlendirme": "467000"
    },
    "paragraf": "Saw serisinin ilk filmi, korkutucu tuzaklar ve akıl oyunları ile en iyi korku filmleri arasında sıra dışı bir yere sahiptir. İçgüdüsel korku ve gerilim dolu sahneleriyle, korku filmleri en iyi listelerinde kendine yer bulmuştur."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-6",
    "name": "The Texas Chainsaw Massacre",
    "image": "/images/movies/the_texas_chainsaw_massacre.jpg",
    "ozellikler": {
      "Yönetmen": "Tobe Hooper",
      "Oyuncular": [
        "Marilyn Burns",
        "Gunnar Hansen"
      ],
      "Kategori": [
        "Korku"
      ],
      "Süre": "1 sa. 23 dk.",
      "Yıl": "1974",
      "imdb": "6.2/10",
      "Değerlendirme": "152000"
    },
    "paragraf": "The Texas Chainsaw Massacre, gerilim yaratma konusunda çığır açan filmlerden biri olarak kabul edilir. Korkunç Leatherface ve onun dehşet saçan ailesi, en iyi korku filmleri listemizde hak ettikleri yeri alıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-5",
    "name": "Poltergeist",
    "image": "/images/movies/poltergeist.jpg",
    "ozellikler": {
      "Yönetmen": "Tobe Hooper",
      "Oyuncular": [
        "JoBeth Williams",
        "Heather O'Rourke"
      ],
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Süre": "1 sa. 54 dk.",
      "Yıl": "1982",
      "imdb": "7.3/10",
      "Değerlendirme": "179000"
    },
    "paragraf": "Poltergeist, övernatürel olayların aile üzerindeki yıkıcı etkilerini konu alır ve sarsıcı etkileriyle en iyi korku filmleri listelerinde yer alır. Film, gerilim ve korkuyu harmanlayarak seyirciyi dehşete düşürür."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-4",
    "name": "Halloween",
    "image": "/images/movies/halloween.jpg",
    "ozellikler": {
      "Yönetmen": "John Carpenter",
      "Oyuncular": [
        "Jamie Lee Curtis",
        "Donald Pleasence"
      ],
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Süre": "1 sa. 31 dk.",
      "Yıl": "1978",
      "imdb": "7.8/10",
      "Değerlendirme": "307000"
    },
    "paragraf": "Halloween, Michael Myers'ın kasabasına terör getirmesiyle korku sinemasının klasiği haline geldi. Bu film, en iyi 10 korku filmi arasında özel bir yere sahip ve korku türünü tanımlıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-3",
    "name": "The Exorcist",
    "image": "/images/movies/the_exorcist.jpg",
    "ozellikler": {
      "Yönetmen": "William Friedkin",
      "Oyuncular": [
        "Ellen Burstyn",
        "Max von Sydow"
      ],
      "Kategori": [
        "Korku"
      ],
      "Süre": "2 sa. 12 dk.",
      "Yıl": "1973",
      "imdb": "8.1/10",
      "Değerlendirme": "455000"
    },
    "paragraf": "The Exorcist, şeytani varlıkların etkisi altına giren küçük bir kızın hikayesini anlatır ve dünyanın en iyi korku filmi olarak kabul edilir. Film, sinematik başarısı ve etkileyici atmosferiyle en iyi korku filmleri listesinde üst sıralarda yer alır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-2",
    "name": "Psycho",
    "image": "/images/movies/psycho.jpg",
    "ozellikler": {
      "Yönetmen": "Alfred Hitchcock",
      "Oyuncular": [
        "Anthony Perkins",
        "Janet Leigh"
      ],
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Süre": "1 sa. 49 dk.",
      "Yıl": "1960",
      "imdb": "8.5/10",
      "Değerlendirme": "718000"
    },
    "paragraf": "Alfred Hitchcock'un başyapıtı Psycho, psikolojik gerilim ve korku türlerinin mükemmel bir karışımını sunar. Norman Bates ve berbat motelinde geçen hikaye, en iyi korku filmleri listesinde ikinci sıradadır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-korku-filmi#bolum-1",
    "name": "The Shining",
    "image": "/images/movies/the_shining.jpg",
    "ozellikler": {
      "Yönetmen": "Stanley Kubrick",
      "Oyuncular": [
        "Jack Nicholson",
        "Shelley Duvall"
      ],
      "Kategori": [
        "Korku"
      ],
      "Süre": "2 sa. 26 dk.",
      "Yıl": "1980",
      "imdb": "8.4/10",
      "Değerlendirme": "1100000"
    },
    "paragraf": "The Shining, korku ve gerilimin doruk noktasını temsil eder ve dünyanın en iyi korku filmi olarak geniş çapta kabul görür. Jack Torrance'ın Overlook Hotel'deki kabus dolu deneyimleri, en iyi korku filmleri listesinde zirvede."
  }

];

const ana_resim = "/images/ana_gorseller/dunyanin_en_iyi_10_korku_filmi_kapak.jpg" //! SEN DOLDUR
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