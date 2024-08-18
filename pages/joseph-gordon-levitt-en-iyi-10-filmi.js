
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JosephGordonlevittEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "joseph-gordon-levitt-en-iyi-10-filmi";
const baslik = "Joseph Gordon-Levitt en iyi 10 filmi";
const metin = "Joseph Gordon-Levitt, yetenekli ve popüler bir aktör olarak birçok başarılı projeye imza atmıştır. Bu makalede, Joseph Gordon-Levitt filmleri arasında öne çıkan en iyi 10 filmi sizler için derledik. Liste, IMDb puanları ve hikayeleriyle etkileyici yapımlardan oluşuyor.";
const bitis_metin = "Bu yazımızda, Joseph Gordon-Levitt'in unutulmaz performanslarıyla süslenen en iyi 10 filmini inceledik. Oynadığı her rolde fark yaratan Gordon-Levitt, sinemaseverlerin gönlünde taht kurmaya devam ediyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["joseph","gordon-levitt","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:56:24+03:00";
const degistirilmeTarihi = "2024-08-16T16:56:24+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-10",
    "name": "Premium Rush - Zorlu Takip",
    "image": "/images/movies/Joseph_Gordon-Levitt_premium_rush_-_zorlu_takip.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Lee Van Cleef",
        "Dania Ramirez"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 31 dk.",
      "Yönetmen": "David Koepp",
      "imdb": "6.5/10",
      "Değerlendirme": "119120",
      "metacritic": "66"
    },
    "paragraf": "Premium Rush, Joseph Gordon-Levitt oynadığı filmler arasında aksiyon dolu kurgusuyla dikkat çekiyor. Manhattan'ın hızlı sokaklarında geçen bu filmde, Joseph Gordon-Levitt bir bisiklet kuryesini canlandırıyor. Adrenalini yüksek sahneleriyle Joseph Gordon-Levitt en iyi filmleri arasında."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-9",
    "name": "The Walk - Tehlikeli Yürüyüş",
    "image": "/images/movies/Joseph_Gordon-Levitt_the_walk_-_tehlikeli_yuruyus.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Lee Van Cleef",
        "Ben Kingsley"
      ],
      "Kategori": [
        "Biyografi"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "Robert Zemeckis",
      "imdb": "7.3/10",
      "Değerlendirme": "136443",
      "metacritic": "70"
    },
    "paragraf": "The Walk, Joseph Gordon-Levitt en iyi filmleri arasında biyografi türündeki etkileyici yapımlardan biri olarak bilinir. Gerçek bir hikayeden esinlenilen filmde, 1974 yılında ikiz kuleler arasında gergin bir ipte yürüyen Philippe Petit'in hikayesini anlatıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-8",
    "name": "Looper - Tetikçiler",
    "image": "/images/movies/Joseph_Gordon-Levitt_looper_-_tetikciler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Lee Van Cleef",
        "Bruce Willis"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Rian Johnson",
      "imdb": "7.4/10",
      "Değerlendirme": "607525",
      "metacritic": "84"
    },
    "paragraf": "Looper, Joseph Gordon-Levitt filmleri arasında bilim kurgu severler için dikkat çekici bir seçenek. Film, zaman yolculuğunun karanlık tarafını ele alıyor ve Joseph Gordon-Levitt en iyi filmi olarak gösterilen çalışmalarından biridir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-7",
    "name": "The Lookout - Suikastçı",
    "image": "/images/movies/Joseph_Gordon-Levitt_the_lookout_-_suikastci.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Lee Van Cleef",
        "Jeff Daniels"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 39 dk.",
      "Yönetmen": "Scott Frank",
      "imdb": "6.9/10",
      "Değerlendirme": "60784",
      "metacritic": "73"
    },
    "paragraf": "The Lookout, Joseph Gordon-Levitt oynadığı filmler arasında gerilim türüyle ön plana çıkıyor. Film, bir kazada beyin hasarı alan eski bir hokey oyuncusunun hikayesini konu alıyor. Suç dünyasındaki zor seçimler ve hesaplaşmalarla dolu bir anlatı sunuyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-6",
    "name": "50/50",
    "image": "/images/movies/Joseph_Gordon-Levitt_50_50.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Lee Van Cleef",
        "Seth Rogen"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "Jonathan Levine",
      "imdb": "7.6/10",
      "Değerlendirme": "344628",
      "metacritic": "72"
    },
    "paragraf": "50/50, dramatik ve komedik unsurları mükemmel bir dengede sunan Joseph Gordon-Levitt en iyi filmleri arasındadır. Gerçek bir hikayeden uyarlanan film, kanserle mücadele eden bir gencin yaşadıklarını anlatıyor ve performansı ile izleyicilere duygusal anlar yaşatıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-5",
    "name": "500 Days of Summer - Aşkın 500 Günü",
    "image": "/images/movies/Joseph_Gordon-Levitt_500_days_of_summer_-_askin_500_gunu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Lee Van Cleef",
        "Zooey Deschanel"
      ],
      "Kategori": [
        "Romantik Komedi"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Marc Webb",
      "imdb": "7.7/10",
      "Değerlendirme": "567044",
      "metacritic": "76"
    },
    "paragraf": "500 Days of Summer, Joseph Gordon-Levitt oynadığı filmler arasında romantik komedi türüyle geniş bir izleyici kitlesine ulaşmıştır. Duygusal iniş çıkışlarıyla etkileyici olan bu film, sıradışı bir aşk hikayesini anlatıyor ve Joseph Gordon-Levitt en iyi filmlerinden biri olarak anılıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-4",
    "name": "The Trial of the Chicago 7 - Şikago Yedilisi'nin Yargılanması",
    "image": "/images/movies/Joseph_Gordon-Levitt_the_trial_of_the_chicago_7_-_sikago_yedilisi'nin_yargilanmasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Lee Van Cleef",
        "Eddie Redmayne",
        "Alex Sharp"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2020",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Aaron Sorkin",
      "imdb": "7.7/10",
      "Değerlendirme": "195352",
      "metacritic": "76"
    },
    "paragraf": "The Trial of the Chicago 7, toplumsal olayları ve adalet sistemini merkezine alan güçlü bir hikayeye sahiptir. Joseph Gordon-Levitt filmleri içinde toplumsal adalet vurgusuyla ayrışan bu dramatik film, izleyicilere tarihin önemli bir dönemini yeniden canlandırarak düşündürüyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-3",
    "name": "Lincoln",
    "image": "/images/movies/Joseph_Gordon-Levitt_lincoln.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Daniel Day-Lewis",
        "Sally Field"
      ],
      "Kategori": [
        "Biyografi"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 30 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.3/10",
      "Değerlendirme": "274370",
      "metacritic": "87"
    },
    "paragraf": "Lincoln, tarihi bir anlatı sunan biyografi yapımı olarak Joseph Gordon-Levitt en iyi filmleri arasında yer alır. Film, Amerikan tarihinin en önemli liderlerinden biri olan Abraham Lincoln'ün son aylarını ve politik mücadelelerini etkileyici bir şekilde yansıtır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-2",
    "name": "Don Jon",
    "image": "/images/movies/Joseph_Gordon-Levitt_don_jon.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Lee Van Cleef",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 30 dk.",
      "Yönetmen": "Joseph Gordon-Levitt",
      "imdb": "6.5/10",
      "Değerlendirme": "248418",
      "metacritic": "66"
    },
    "paragraf": "Don Jon, Joseph Gordon-Levitt filmleri arasında mizahi anlatımı ve ilginç karakterleriyle farklı bir yerde duruyor. Filmde, modern ilişkiler üzerine düşündüren ve eğlenceli bir bakış açısı sunan bir hikaye işleniyor. Joseph Gordon-Levitt, bu filmle yönetmenliğe de adım atmıştır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/joseph-gordon-levitt-en-iyi-10-filmibolum-1",
    "name": "Inception - Başlangıç",
    "image": "/images/movies/Joseph_Gordon-Levitt_inception_-_baslangic.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Leonardo DiCaprio"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 28 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.8/10",
      "Değerlendirme": "2583342",
      "metacritic": "74"
    },
    "paragraf": "Inception, Joseph Gordon-Levitt imdb verilerine göre en yüksek puan alan filmlerindendir. Film, rüya içinde rüya teması üzerinden karmaşık bir evrende geçen etkileyici bir hikaye sunar. Christopher Nolan'ın başyapıtı olan bu film, Joseph Gordon-Levitt en iyi filmi unvanını fazlasıyla hak ediyor."
  }

];

const ana_resim = "/images/ana_gorseller/joseph-gordon-levitt-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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