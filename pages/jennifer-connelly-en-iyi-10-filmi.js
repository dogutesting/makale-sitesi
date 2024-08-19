
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JenniferConnellyEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jennifer-connelly-en-iyi-10-filmi";
const baslik = "Jennifer Connelly en iyi 10 filmi";
const metin = "Jennifer Connelly, kariyeri boyunca pek çok unutulmaz filme imza atmış yetenekli bir oyuncu. Bugün, Jennifer Connelly filmleri arasında en iyi 10 tanesini sizler için derledik. Sinema severler için Jennifer Connelly en iyi filmleri her daim bir cazibe merkezi olmuştur. İşte Jennifer Connelly oynadığı filmler arasında en unutulmaz olanlar.";
const bitis_metin = "Bu yazımızda Jennifer Connelly'nin en iyi filmlerini sıraladık. Sinemaseverler için Jennifer Connelly oynadığı filmler ayrı bir tutkuyu temsil ediyor. Umarız bu liste incelemelerinizde size rehberlik eder.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jennifer","connelly","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:44:41+03:00";
const degistirilmeTarihi = "2024-08-16T16:44:41+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-10",
    "name": "The Rocketeer - Uçan Adam",
    "image": "/images/movies/Jennifer_Connelly_the_rocketeer_-_ucan_adam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Billy Campbell"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "1991",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Joe Johnston",
      "imdb": "6.6/10",
      "Değerlendirme": "62401",
      "metacritic": "58"
    },
    "paragraf": "The Rocketeer, Jennifer Connelly'nin oyunculuğunu gösterdiği önemli bir filmdir. Macera türünde olan bu film, Connelly'nin kariyerinde önemli bir yer tutuyor. Jennifer Connelly en iyi filmi denilince akla gelen ilk tercihler arasında yer alır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-9",
    "name": "The Hot Spot - Sıcak Nokta",
    "image": "/images/movies/Jennifer_Connelly_the_hot_spot_-_sicak_nokta.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Don Johnson",
        "Virginia Madsen"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "1990",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Dennis Hopper",
      "imdb": "6.4/10",
      "Değerlendirme": "13810",
      "metacritic": "55"
    },
    "paragraf": "Sıcak Nokta, dramatik gerilim türünde bir film olup, Jennifer Connelly'nin etkileyici performansıyla dikkat çekiyor. Jennifer Connelly oynadığı filmler arasında, bu film özel bir yere sahiptir ve izleyicilerden tam not almıştır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-8",
    "name": "Little Children - Tutku Oyunları",
    "image": "/images/movies/Jennifer_Connelly_little_children_-_tutku_oyunlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Kate Winslet"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "Todd Field",
      "imdb": "7.5/10",
      "Değerlendirme": "117637",
      "metacritic": "75"
    },
    "paragraf": "Little Children, baskın bir dramatik yapıya sahip ve Connelly'nin en sevilen rollerinden birini barındırıyor. Jennifer Connelly imdb puanı yüksek olan bu film, izleyiciler tarafından oldukça beğenilmiştir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-7",
    "name": "Blood Diamond - Kanlı Elmas",
    "image": "/images/movies/Jennifer_Connelly_blood_diamond_-_kanli_elmas.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Leonardo DiCaprio",
        "Djimon Hounsou"
      ],
      "Kategori": [
        "Macera",
        "Gerilim"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Edward Zwick",
      "imdb": "8/10",
      "Değerlendirme": "591936",
      "metacritic": "64"
    },
    "paragraf": "Kanlı Elmas, aksiyon dolu hikayesi ve toplumsal mesajlarıyla dikkat çekiyor. Jennifer Connelly'nin yeteneklerini sergilediği bu film, Jennifer Connelly en iyi filmleri arasında sayılabilir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-6",
    "name": "Hulk",
    "image": "/images/movies/Jennifer_Connelly_hulk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Eric Bana"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Ang Lee",
      "imdb": "5.6/10",
      "Değerlendirme": "280725",
      "metacritic": "54"
    },
    "paragraf": "Hulk, bilim kurgu ve aksiyonun iç içe geçtiği popüler bir filmdir. Jennifer Connelly'nin performansıyla zenginleşmiş ve akılda kalıcı olmuştur. Bu film, Jennifer Connelly imdb yüksek puan almasına vesile olmuştur."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-5",
    "name": "Requiem for a Dream - Bir Rüya İçin Ağıt",
    "image": "/images/movies/Jennifer_Connelly_requiem_for_a_dream_-_bir_ruya_icin_agit.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Ellen Burstyn",
        "Jared Leto"
      ],
      "Kategori": [
        "Dram",
        "Psikolojik Gerilim"
      ],
      "Yıl": "2000",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "Darren Aronofsky",
      "imdb": "8.3/10",
      "Değerlendirme": "909378",
      "metacritic": "71"
    },
    "paragraf": "Bir Rüya İçin Ağıt, Jennifer Connelly'nin olağanüstü oyunculuğunu sergilediği içerikten biri. Bu dramatik film, izleyicileri derin bir etki bırakırken, Jennifer Connelly filmleri arasında özel bir yere sahiptir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-4",
    "name": "House of Sand and Fog - Sisler Evi",
    "image": "/images/movies/Jennifer_Connelly_house_of_sand_and_fog_-_sisler_evi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Ben Kingsley"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Vadim Perelman",
      "imdb": "7.5/10",
      "Değerlendirme": "73163",
      "metacritic": "71"
    },
    "paragraf": "Sisler Evi, Connelly'nin dram türündeki etkileyici performanslarından birine ev sahipliği yapıyor. Jennifer Connelly oynadığı filmler arasında iç burkan hikayesi ve güçlü oyunculuklarıyla dikkat çekiyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-3",
    "name": "Creation - Yaratılış",
    "image": "/images/movies/Jennifer_Connelly_creation_-_yaratilis.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Paul Bettany",
        "Ian Kelly"
      ],
      "Kategori": [
        "Biyografik",
        "Dram"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Jon Amiel",
      "imdb": "6.6/10",
      "Değerlendirme": "15218",
      "metacritic": "51"
    },
    "paragraf": "Yaratılış, biyografik bir dram filmi olarak izleyicilere aktarılan önemli bir yapım. Jennifer Connelly'nin empati uyandıran performansı, bu filmi izlenmeye değer kılıyor ve Jennifer Connelly en iyi filmi arasında olabilir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-2",
    "name": "Noah - Nuh: Büyük Tufan",
    "image": "/images/movies/Jennifer_Connelly_noah_-_nuh__buyuk_tufan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Russell Crowe"
      ],
      "Kategori": [
        "Dram",
        "Macera"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Darren Aronofsky",
      "imdb": "5.8/10",
      "Değerlendirme": "268379",
      "metacritic": "68"
    },
    "paragraf": "Nuh: Büyük Tufan, destansı hikayesi ile dikkat çeken büyük bütçeli bir yapım. Jennifer Connelly, bu filmdeki performansıyla yine izleyicilerini etkilemeyi başarmıştır. Jennifer Connelly filmleri arasında farklı bir yere sahiptir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jennifer-connelly-en-iyi-10-filmi#bolum-1",
    "name": "A Beautiful Mind - Akıl Oyunları",
    "image": "/images/movies/Jennifer_Connelly_a_beautiful_mind_-_akil_oyunlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jennifer Connelly",
        "Russell Crowe",
        "Ed Harris"
      ],
      "Kategori": [
        "Dram",
        "Biyografik"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 15 dk.",
      "Yönetmen": "Ron Howard",
      "imdb": "8.2/10",
      "Değerlendirme": "996420",
      "metacritic": "72"
    },
    "paragraf": "Akıl Oyunları, Jennifer Connelly'nin en ikonik performanslarından biri olarak öne çıkıyor. Bu biyografik dram, hem eleştirmenlerden hem de izleyicilerden büyük beğeni toplayarak Jennifer Connelly imdb puanını zirveye taşımıştır."
  }

];

const ana_resim = "/images/ana_gorseller/jennifer-connelly-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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