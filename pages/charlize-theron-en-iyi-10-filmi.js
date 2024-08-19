
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function CharlizeTheronEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "charlize-theron-en-iyi-10-filmi";
const baslik = "Charlize Theron en iyi 10 filmi";
const metin = "Charlize Theron, günümüz sinemasının en parlayan yıldızlarından biri. Bu makalede, Charlize Theron filmleri arasından seçilmiş en iyi 10 yapımı sunuyoruz. Charlize Theron izlenmesi gereken filmleri listesi spesifik olarak onun performansıyla öne çıkan, izleyicileri etkileyen yapıtları içeriyor.";
const bitis_metin = "Bu yazımızda Charlize Theron'un başrolde olduğu, iz bırakan performanslarıyla öne çıkan en iyi 10 filmi sizlerle paylaştık. Umarız bu filmler, Theron'un olağanüstü yeteneğini daha yakından tanımanıza vesile olur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["charlize","theron","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:47:48+03:00";
const degistirilmeTarihi = "2024-05-25T18:47:48+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-10",
    "name": "Monster - Canavar",
    "image": "/images/movies/charlize_theron_monster_-_canavar.jpg",
    "ozellikler": {
      "Yönetmen": "Patty Jenkins",
      "Oyuncular": [
        "Charlize Theron",
        "Christina Ricci"
      ],
      "Kategori": [
        "Drama",
        "Suç"
      ],
      "Süre": "1 sa. 49 dk.",
      "Yıl": "2003",
      "imdb": "7.3/10",
      "Değerlendirme": "162000"
    },
    "paragraf": "Charlize Theron'un kariyerinde dönüm noktası olan Monster - Canavar, onun Charlize Theron en iyi filmi olarak adlandırılabilir. Theron, gerçek bir hikayeyi anlatan bu filmde unutulmaz bir performans sergiliyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-9",
    "name": "Mad Max: Fury Road - Çılgın Max: Öfkeli Yollar",
    "image": "/images/movies/charlize_theron_mad_max_fury_road_-_cilgin_max_ofkeli_yollar.jpg",
    "ozellikler": {
      "Yönetmen": "George Miller",
      "Oyuncular": [
        "Tom Hardy",
        "Charlize Theron"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa.",
      "Yıl": "2015",
      "imdb": "8.1/10",
      "Değerlendirme": "1100000"
    },
    "paragraf": "Mad Max: Fury Road, Charlize Theron filmleri içinde aksiyon severler için bir başyapıt. Theron, filmdeki etkileyici rolüyle adından söz ettiriyor ve Charlize Theron en iyi filmleri listesinde haklı bir yer buluyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-8",
    "name": "Tully",
    "image": "/images/movies/charlize_theron_tully.jpg",
    "ozellikler": {
      "Yönetmen": "Jason Reitman",
      "Oyuncular": [
        "Charlize Theron",
        "Mackenzie Davis"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "1 sa. 36 dk.",
      "Yıl": "2018",
      "imdb": "6.9/10",
      "Değerlendirme": "63000"
    },
    "paragraf": "Tully filminde Charlize Theron, bir anne olarak yaşamın zorluklarıyla başa çıkan karakteriyle göz dolduruyor. Bu yapım, Charlize Theron en iyi filmleri arasında özel bir yere sahip. Kesinlikle Charlize Theron izlenmesi gereken filmleri listesinde."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-7",
    "name": "Young Adult - Genç Yetişkin",
    "image": "/images/movies/charlize_theron_young_adult_-_genc_yetiskin.jpg",
    "ozellikler": {
      "Yönetmen": "Jason Reitman",
      "Oyuncular": [
        "Charlize Theron",
        "Patrick Wilson"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "1 sa. 34 dk.",
      "Yıl": "2011",
      "imdb": "6.3/10",
      "Değerlendirme": "88000"
    },
    "paragraf": "Young Adult, Theron'un karmaşık bir karakteri ustaca canlandırdığı bir başka film. Etkileyici performansı ile Charlize Theron en iyi filmleri listemizde yer almayı başarıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-6",
    "name": "The Devil's Advocate - Şeytanın Avukatı",
    "image": "/images/movies/charlize_theron_the_devil_s_advocate_-_seytanin_avukati.jpg",
    "ozellikler": {
      "Yönetmen": "Taylor Hackford",
      "Oyuncular": [
        "Keanu Reeves",
        "Al Pacino",
        "Charlize Theron"
      ],
      "Kategori": [
        "Drama",
        "Gizem"
      ],
      "Süre": "2 sa. 24 dk.",
      "Yıl": "1997",
      "imdb": "7.5/10",
      "Değerlendirme": "403000"
    },
    "paragraf": "Şeytanın Avukatı, Theron'un Charlize Theron filmleri arasında en çarpıcı rollerinden birine imza attığı film. Bu yapım, onun oyunculuk yeteneğini sergilediği ve Charlize Theron en iyi filmleri arasında gösterilebilir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-5",
    "name": "Prometheus - Prometheus: Yaratılış",
    "image": "/images/movies/charlize_theron_prometheus_-_prometheus_yaratilis.jpg",
    "ozellikler": {
      "Yönetmen": "Ridley Scott",
      "Oyuncular": [
        "Noomi Rapace",
        "Michael Fassbender",
        "Charlize Theron"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 4 dk.",
      "Yıl": "2012",
      "imdb": "7.0/10",
      "Değerlendirme": "646000"
    },
    "paragraf": "Prometheus, bilim kurgu ve macera severler için Theron'un yer aldığı mükemmel bir seçim. Bu film, kesinlikle Charlize Theron izlenmesi gereken filmleri içinde."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-4",
    "name": "North Country - Kuzey Ülkesi",
    "image": "/images/movies/charlize_theron_north_country_-_kuzey_ulkesi.jpg",
    "ozellikler": {
      "Yönetmen": "Niki Caro",
      "Oyuncular": [
        "Charlize Theron",
        "Frances McDormand",
        "Jeremy Renner"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 6 dk.",
      "Yıl": "2005",
      "imdb": "7.3/10",
      "Değerlendirme": "45000"
    },
    "paragraf": "North Country, Theron'un güçlü bir kadın hikayesini anlattığı ve Charlize Theron filmleri arasında öne çıkan bir başka yapıt. Film, sosyal mesajlarıyla da dikkat çekiyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-3",
    "name": "The Road - Yol",
    "image": "/images/movies/charlize_theron_the_road_-_yol.jpg",
    "ozellikler": {
      "Yönetmen": "John Hillcoat",
      "Oyuncular": [
        "Viggo Mortensen",
        "Charlize Theron"
      ],
      "Kategori": [
        "Macera",
        "Drama"
      ],
      "Süre": "1 sa. 51 dk.",
      "Yıl": "2009",
      "imdb": "7.2/10",
      "Değerlendirme": "255000"
    },
    "paragraf": "The Road, apokaliptik bir dünyada Charlize Theron ve Viggo Mortensen'in üstün performanslarıyla dikkat çeken etkileyici bir film. Bu yapım da Charlize Theron en iyi filmleri arasında yer alıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-2",
    "name": "Snow White and the Huntsman - Pamuk Prenses ve Avcı",
    "image": "/images/movies/charlize_theron_snow_white_and_the_huntsman_-_pamuk_prenses_ve_avci.jpg",
    "ozellikler": {
      "Yönetmen": "Rupert Sanders",
      "Oyuncular": [
        "Kristen Stewart",
        "Chris Hemsworth",
        "Charlize Theron"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Süre": "2 sa. 7 dk.",
      "Yıl": "2012",
      "imdb": "6.1/10",
      "Değerlendirme": "303000"
    },
    "paragraf": "Pamuk Prenses ve Avcı, fantastik ögelerle dolu bir masal adaptasyonudur. Theron'un kötü kraliçe rolü, filmi Charlize Theron en iyi filmleri listesine taşıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/charlize-theron-en-iyi-10-filmi#bolum-1",
    "name": "Atomic Blonde - Sarışın Bomba",
    "image": "/images/movies/charlize_theron_atomic_blonde_-_sarisin_bomba.jpg",
    "ozellikler": {
      "Yönetmen": "David Leitch",
      "Oyuncular": [
        "Charlize Theron",
        "James McAvoy"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Süre": "1 sa. 55 dk.",
      "Yıl": "2017",
      "imdb": "6.7/10",
      "Değerlendirme": "207000"
    },
    "paragraf": "Atomic Blonde, Charlize Theron'un aksiyon dolu sahnelerde gösterdiği başarılı performansıyla dikkat çekiyor. Bu film, onun yeteneklerini sergileme konusunda üst sıralarda yer alıyor ve Charlize Theron en iyi filmi olarak kabul edilebilir."
  }

];

const ana_resim = "/images/ana_gorseller/charlize_theron_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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