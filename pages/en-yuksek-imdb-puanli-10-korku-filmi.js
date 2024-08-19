
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnYuksekImdbPuanli10KorkuFilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-yuksek-imdb-puanli-10-korku-filmi";
const baslik = "En yüksek IMDb puanlı 10 korku filmi";
const metin = "Korku türü, sinema severler için her zaman özel bir yere sahiptir. Gerilim ve korkunun harmanlandığı en iyi korku filmleri listesi arasında yer alan bu filmler, izleyenlere unutulmaz anlar yaşatmıştır. İşte IMDb puanlarına göre sıralanmış, en yüksek imdb puanlı korku filmleri sizi bekliyor.";
const bitis_metin = "Bu yazımızda, sinema tarihine damga vurmuş en yüksek IMDb puanlı 10 korku filmi üzerinde durduk. Her biri farklı korku unsurlarıyla etkili olan bu filmler, korku severlerin favorisi olmaya devam ediyor. Umarız listemiz, izleme listenize yeni filmler eklemenize yardımcı olur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","yuksek","imdb","puanli","10","korku","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:18:38+03:00";
const degistirilmeTarihi = "2024-08-09T17:18:38+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-10",
    "name": "The Conjuring - Korku Seansı",
    "image": "/images/movies/the_conjuring_-_korku_seansi.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "1 sa. 52 dk.",
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Oyuncular": [
        "Vera Farmiga",
        "Patrick Wilson"
      ],
      "Yönetmen": "James Wan",
      "imdb": "7.5/10",
      "Değerlendirme": "563000",
      "metascore": "68"
    },
    "paragraf": "The Conjuring, 2013 yılında James Wan tarafından yönetilen gerçek bir hikayeye dayanan korku filmidir. En korkunç filmler listesi içinde yer alan yapım, Warren çifti etrafında dönen doğaüstü olayları konu alır ve en iyi korku filmleri listesi arasında kendine haklı bir yer edinir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-9",
    "name": "A Quiet Place - Sessiz Bir Yer",
    "image": "/images/movies/a_quiet_place_-_sessiz_bir_yer.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Süre": "1 sa. 30 dk.",
      "Kategori": [
        "Korku",
        "Gerilim",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Emily Blunt",
        "John Krasinski"
      ],
      "Yönetmen": "John Krasinski",
      "imdb": "7.5/10",
      "Değerlendirme": "601000",
      "metascore": "82"
    },
    "paragraf": "A Quiet Place, gerilim korku filmleri önerileri arasında mutlaka izlemeniz gereken bir yapım. Film, sessizlik içinde hayatta kalmaya çalışan bir ailenin hikayesini anlatıyor ve atmosferiyle izleyiciyi derinden etkiliyor. En korkunç filmler listesi içindeki güçlü yeriyle dikkat çekiyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-8",
    "name": "Get Out - Kapan",
    "image": "/images/movies/get_out_-_kapan.jpg",
    "ozellikler": {
      "Yıl": "2017",
      "Süre": "1 sa. 44 dk.",
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Oyuncular": [
        "Daniel Kaluuya",
        "Allison Williams"
      ],
      "Yönetmen": "Jordan Peele",
      "imdb": "7.8/10",
      "Değerlendirme": "717000",
      "metascore": "85"
    },
    "paragraf": "Get Out, ırk temasına korku türünde farklı bir bakış açısı getiriyor. Jordan Peele'nin yönetmenliğindeki film, eleştirmenlerden tam not alarak en yüksek imdb puanlı korku filmleri arasında yerini almıştır. Unutulmaz anlar için gerilim korku filmleri önerileri arasında yer alıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-7",
    "name": "It - O",
    "image": "/images/movies/it_-_o.jpg",
    "ozellikler": {
      "Yıl": "2017",
      "Süre": "2 sa. 15 dk.",
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Oyuncular": [
        "Bill Skarsgård",
        "Finn Wolfhard"
      ],
      "Yönetmen": "Andy Muschietti",
      "imdb": "7.3/10",
      "Değerlendirme": "616000",
      "metascore": "69"
    },
    "paragraf": "Stephen King'in ünlü romanından uyarlanan It, Pennywise adlı korkutucu bir palyaçonun peşindeki çocukların hikayesiyle ürpertiyor. IMDB puanı ile en iyi korku filmleri listesi arasında öne çıkan It, büyüleyici hikayesi ile dikkat çekiyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-6",
    "name": "Psycho - Sapık",
    "image": "/images/movies/psycho_-_sapik.jpg",
    "ozellikler": {
      "Yıl": "1960",
      "Süre": "1 sa. 49 dk.",
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Oyuncular": [
        "Anthony Perkins",
        "Janet Leigh"
      ],
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "8.5/10",
      "Değerlendirme": "726000",
      "metascore": "97"
    },
    "paragraf": "Psycho, Alfred Hitchcock'un başyapıtlarından biri ve gerilim korku filmleri önerileri arasında klasikleşmiş bir film. Sinema tarihine kazınmış duş sahnesi ve muhteşem yönetimi ile en yüksek imdb puanlı korku filmleri arasında kült bir yapım olarak yer alıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-5",
    "name": "Hereditary - Ayin",
    "image": "/images/movies/hereditary_-_ayin.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Süre": "2 sa. 7 dk.",
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Oyuncular": [
        "Toni Collette",
        "Alex Wolff"
      ],
      "Yönetmen": "Ari Aster",
      "imdb": "7.3/10",
      "Değerlendirme": "389000",
      "metascore": "87"
    },
    "paragraf": "Hereditary, izleyenleri etkileyen atmosferi ve ince detaylarıyla dikkat çeken bir korku filmi. Ari Aster'in yönetmenliğindeki bu film, en korkunç filmler listesi içerisinde sarsıcı hikayesi ve performanslarıyla anılıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-4",
    "name": "The Exorcist - Şeytan",
    "image": "/images/movies/the_exorcist_-_seytan.jpg",
    "ozellikler": {
      "Yıl": "1973",
      "Süre": "2 sa. 2 dk.",
      "Kategori": [
        "Korku"
      ],
      "Oyuncular": [
        "Ellen Burstyn",
        "Max von Sydow"
      ],
      "Yönetmen": "William Friedkin",
      "imdb": "8.1/10",
      "Değerlendirme": "461000",
      "metascore": "83"
    },
    "paragraf": "The Exorcist, doğaüstü teması ve etkileyici sahneleriyle korku türünde çığır açan bir film. Şeytan, IMDB puanı ile en yüksek imdb puanlı korku filmleri arasında uzun yıllar boyunca tahtını korumuştur ve gerilim korku filmleri önerileri arasında ön plandadır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-3",
    "name": "Alien - Yaratık",
    "image": "/images/movies/alien_-_yaratik.jpg",
    "ozellikler": {
      "Yıl": "1979",
      "Süre": "1 sa. 57 dk.",
      "Kategori": [
        "Korku",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Sigourney Weaver",
        "Tom Skerritt"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "8.5/10",
      "Değerlendirme": "964000",
      "metascore": "89"
    },
    "paragraf": "Bilim kurgu ile korkunun harmanlandığı Alien, izleyenleri derin bir evrende sürükleyici bir maceraya çıkarıyor. Ridley Scott'ın bu başyapıtı, en korkunç filmler listesi içindeki özel yeri ve yüksek IMDb puanıyla dikkat çekiyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-2",
    "name": "The Shining - Cinnet",
    "image": "/images/movies/the_shining_-_cinnet.jpg",
    "ozellikler": {
      "Yıl": "1980",
      "Süre": "2 sa. 26 dk.",
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Oyuncular": [
        "Jack Nicholson",
        "Shelley Duvall"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "8.4/10",
      "Değerlendirme": "1100000",
      "metascore": "68"
    },
    "paragraf": "Stanley Kubrick'in klasiği The Shining, psikolojik gerilim ve korkuyu mükemmel bir şekilde birleştiriyor. Jack Nicholson'ın olağanüstü performansıyla öne çıkan film, en iyi korku filmleri listesi içinde unutulmaz bir yere sahip."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-korku-filmi#bolum-1",
    "name": "Jaws - Denizler Altında",
    "image": "/images/movies/jaws_-_denizler_altinda.jpg",
    "ozellikler": {
      "Yıl": "1975",
      "Süre": "2 sa. 4 dk.",
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Oyuncular": [
        "Roy Scheider",
        "Robert Shaw"
      ],
      "Yönetmen": "Steven Spielberg",
      "imdb": "8.1/10",
      "Değerlendirme": "670000",
      "metascore": "87"
    },
    "paragraf": "Steven Spielberg'in yönettiği Jaws, sinema tarihinde bir dönüm noktası olmuş ve sahil kasabasını tehdit eden bir köpekbalığının hikayesini anlatıyor. Gerilimi ve korkuyu başarıyla işleyen Jaws, en yüksek imdb puanlı korku filmleri arasındaki liderliğini sürdürüyor."
  }

];

const ana_resim = "/images/ana_gorseller/en-yuksek-imdb-puanli-10-korku-filmi-kapak.jpg" //! SEN DOLDUR
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