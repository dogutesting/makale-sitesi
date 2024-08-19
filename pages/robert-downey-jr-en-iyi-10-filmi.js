
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RobertDowneyJrEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "robert-downey-jr-en-iyi-10-filmi";
const baslik = "Robert Downey Jr. en iyi 10 filmi";
const metin = "Robert Downey Jr. filmleri arasında en iyi performanslarından bazılarını görmek isteyenler için harika bir liste hazırladık. İşte Robert Downey Jr. en iyi filmleri ve rol aldığı unutulmaz yapımlar, bu listede karşınıza çıkacak. Robert Downey Jr. oynadığı filmler arasında hangileri öne çıkıyor, gelin birlikte inceleyelim.";
const bitis_metin = "Bu makalede, Robert Downey Jr. en iyi filmleri ve etkileyici performanslarını inceledik. Oyuncunun sinema kariyerine damga vuran yapımları keşfettik. Robert Downey Jr. oynadığı filmler, onun olağanüstü oyunculuğunu gözler önüne seriyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["robert","downey","jr.","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:22:24+03:00";
const degistirilmeTarihi = "2024-08-16T16:22:24+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-10",
    "name": "Due Date - Git Başımdan",
    "image": "/images/movies/Robert_Downey_Jr._due_date_-_git_basimdan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Zach Galifianakis"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Todd Phillips",
      "imdb": "6.5/10",
      "Değerlendirme": "359967",
      "metacritic": "51"
    },
    "paragraf": "Rober Downey filmleri arasında komedi türünde ayrıcalıklı bir yere sahip olan 'Due Date', Robert Downey Jr.'ın Zach Galifianakis ile birlikte başrolde olduğu bir film. Beklenmedik bir yolculukta her adımda gülümseten bu film, Robert Downey Jr. imdb puanıyla dikkat çekiyor. "
  },
  {
    "num": "9",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-9",
    "name": "Tropic Thunder - Tropik Fırtına",
    "image": "/images/movies/Robert_Downey_Jr._tropic_thunder_-_tropik_firtina.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Jeff Kahn"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Ben Stiller",
      "imdb": "7.1/10",
      "Değerlendirme": "453296",
      "metacritic": "71"
    },
    "paragraf": "'Tropic Thunder', Robert Downey Jr. filmleri arasında, oyuncunun cesur ve çarpıcı bir performans sergilediği bir komedi klasiği. Hollywood medya eleştirisiyle dolu bu filmde, Downey Jr.'ın performansı, onu Oscar adaylığına taşıyan rolleri arasında. Robert Downey Jr. en iyi filmleri arasında kendine yer bulan bu yapım, izleyicilere kahkaha dolu anlar sunuyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-8",
    "name": "Spider-Man: Homecoming - Örümcek-Adam: Eve Dönüş",
    "image": "/images/movies/Robert_Downey_Jr._spider-man__homecoming_-_orumcek-adam__eve_donus.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Tom Holland",
        "Michael Keaton"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 13 dk.",
      "Yönetmen": "Jon Watts",
      "imdb": "7.4/10",
      "Değerlendirme": "730099",
      "metacritic": "73"
    },
    "paragraf": "Robert Downey Jr. oynadığı filmler arasında önemli bir yere sahip olan 'Spider-Man: Homecoming', Iron Man olarak dönüş yaptığı Marvel evreninde genç Örümcek Adam'a rehberlik ediyor. Film, Robert Downey Jr. imdb puanı ile hayranlar ve eleştirmenler tarafından beğenilmiştir. "
  },
  {
    "num": "7",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-7",
    "name": "The Judge - Yargıç",
    "image": "/images/movies/Robert_Downey_Jr._the_judge_-_yargic.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Robert Duvall"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 21 dk.",
      "Yönetmen": "David Dobkin",
      "imdb": "7.4/10",
      "Değerlendirme": "208970",
      "metacritic": "48"
    },
    "paragraf": "'The Judge', Robert Downey Jr. en iyi filmleri arasında drama performansıyla dikkat çeker. Robert Downey Jr.'ın duygusal derinliklerini sergilediği bu yapım, aile ilişkilerini ve hakikati arayışını etkileyici bir şekilde ele alır. Filmin Robert Downey Jr. imdb puanı yüksek alan yapımlardan biridir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-6",
    "name": "Zodiac - Zodyak",
    "image": "/images/movies/Robert_Downey_Jr._zodiac_-_zodyak.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Jake Gyllenhaal",
        "Mark Ruffalo"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2007",
      "Süre": "2 sa. 37 dk.",
      "Yönetmen": "David Fincher",
      "imdb": "7.7/10",
      "Değerlendirme": "607703",
      "metacritic": "79"
    },
    "paragraf": "'Zodiac', Robert Downey Jr. filmleri arasında gerilim dolu bir klasik. David Fincher'ın yönetmenliğini üstlendiği bu filmde, Robert Downey Jr., gazeteci Paul Avery'i canlandırıyor. Robert Downey Jr. oynadığı filmler arasında önemli bir yer tutan Zodiac, gerçek olaylara dayanan hikayesiyle izleyicileri etkiliyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-5",
    "name": "Chaplin",
    "image": "/images/movies/Robert_Downey_Jr._chaplin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Geraldine Chaplin"
      ],
      "Kategori": [
        "Biyografi"
      ],
      "Yıl": "1992",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Richard Attenborough",
      "imdb": "7.5/10",
      "Değerlendirme": "62721",
      "metacritic": "47"
    },
    "paragraf": "Chaplin, Robert Downey Jr. en iyi filmi arasında efsanevi bir konuma sahip. Charles Chaplin'in hayatını konu alan bu biyografi filminde canlandırdığı Chaplin rolü, Downey Jr.'ın kariyerinde köşe taşı niteliğindedir. Robert Downey Jr. filmleri arasında unutulmaz bir eser."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-4",
    "name": "Iron Man",
    "image": "/images/movies/Robert_Downey_Jr._iron_man.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Terrence Howard"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2008",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Jon Favreau",
      "imdb": "7.9/10",
      "Değerlendirme": "1138548",
      "metacritic": "79"
    },
    "paragraf": "'Iron Man', Robert Downey Jr. filmleri arasında Marvel sinematik evrenini başlatan kilometre taşıdır. Tony Stark karakteriyle özdeşleşen oyuncu, mükemmel bir performans sergilemiştir. Robert Downey Jr. imdb puanları arasında yüksek bir değere sahip olan bu film, onun olmazsa olmazlarındandır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-3",
    "name": "Avengers: Endgame - Yenilmezler: Son Oyun",
    "image": "/images/movies/Robert_Downey_Jr._avengers__endgame_-_yenilmezler__son_oyun.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Chris Evans"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2019",
      "Süre": "3 sa. 1 dk.",
      "Yönetmen": "Anthony Russo",
      "imdb": "8.4/10",
      "Değerlendirme": "1291012",
      "metacritic": "78"
    },
    "paragraf": "'Avengers: Endgame', Robert Downey Jr. en iyi filmleri arasında epik bir sona ulaşıyor. Iron Man rolü ile Marvel evreninde bıraktığı iz, bu filmle taçlanıyor. Hem duygusal hem de aksiyon dolu olan yapım, Robert Downey Jr. oynadığı filmler arasında bir mihenk taşıdır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-2",
    "name": "Avengers: Infinity War - Yenilmezler: Sonsuzluk Savaşı",
    "image": "/images/movies/Robert_Downey_Jr._avengers__infinity_war_-_yenilmezler__sonsuzluk_savasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Chris Hemsworth"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 29 dk.",
      "Yönetmen": "Anthony Russo",
      "imdb": "8.4/10",
      "Değerlendirme": "1225658",
      "metacritic": "68"
    },
    "paragraf": "'Avengers: Infinity War', Robert Downey Jr. filmleri içinde unutulmaz bir parça. Tony Stark olarak yarattığı ikonik imaj, Sonsuzluk Savaşı'nı izleyenlere nefes kesici bir deneyim sağlıyor. Robert Downey Jr. en iyi filmi tartışmalarına sebep olan bu şaheser, izleyiciler için unutulmaz anlar sunuyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/robert-downey-jr-en-iyi-10-filmi#bolum-1",
    "name": "Sherlock Holmes: A Game of Shadows - Sherlock Holmes: Gölge Oyunları",
    "image": "/images/movies/Robert_Downey_Jr._sherlock_holmes__a_game_of_shadows_-_sherlock_holmes__golge_oyunlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robert Downey Jr.",
        "Jude Law"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "2011",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Guy Ritchie",
      "imdb": "7.4/10",
      "Değerlendirme": "484290",
      "metacritic": "48"
    },
    "paragraf": "'Sherlock Holmes: A Game of Shadows', Robert Downey Jr. filmleri arasında zekası ve aksiyonuyla öne çıkan bir başka başyapıt. Bu devam filminde, Robert Downey Jr. eğlenceli ve sürükleyici bir performans sunuyor. Robert Downey Jr. imdb puanı ile de en iyi filmleri arasında yer alır."
  }

];

const ana_resim = "/images/ana_gorseller/robert-downey-jr-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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