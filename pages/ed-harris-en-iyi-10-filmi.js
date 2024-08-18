
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EdHarrisEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "ed-harris-en-iyi-10-filmi";
const baslik = "Ed Harris en iyi 10 filmi";
const metin = "Ed Harris, sinema dünyasında güçlü performanslarıyla tanınan bir oyuncudur. Onun oynadığı ve büyük beğeni toplayan filmleri derlemek, sinemaseverler için önemli bir rehber olabilir. Bu makalede Ed Harris en iyi filmleri ve Ed Harris oynadığı filmler arasından en dikkat çekenleri sizler için sıraladık.";
const bitis_metin = "Bu listede Ed Harris'in güçlü performanslarıyla dikkat çeken filmlerini derledik. Ed Harris en iyi filmleri arasından seçtiğimiz yapımlar, sinema dünyasında önemli yerlere sahiptir. Umarız bu liste, Ed Harris'in etkileyici kariyerine dair bir bakış sunar.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["ed","harris","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:49:33+03:00";
const degistirilmeTarihi = "2024-08-16T16:49:33+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-10",
    "name": "Pain & Gain - Zor Kazanç",
    "image": "/images/movies/Ed_Harris_pain_&_gain_-_zor_kazanc.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Dwayne Johnson",
        "Mark Wahlberg"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Michael Bay",
      "imdb": "6.4/10",
      "Değerlendirme": "231869",
      "metacritic": "45"
    },
    "paragraf": "Pain & Gain - Zor Kazanç, Ed Harris'in de yer aldığı aksiyon-komedi türünde bir film. Film, Miami'nin karanlık dünyasına mizahi bir bakış sunuyor. Ed Harris, bu filmdeki performansıyla eleştirmenlerden olumlu yorumlar aldı ve Ed Harris en iyi filmleri arasında kendine yer buldu."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-9",
    "name": "The Rock - Kaya",
    "image": "/images/movies/Ed_Harris_the_rock_-_kaya.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Sean Connery",
        "Nicolas Cage"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "1996",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "Michael Bay",
      "imdb": "7.4/10",
      "Değerlendirme": "361629",
      "metacritic": "58"
    },
    "paragraf": "The Rock - Kaya, Ed Harris filmi ve aksiyonu sevenler için unutulmaz bir yapım. Alcatraz Adası'nda geçen bu gerilim dolu hikâyede Ed Harris, kararlı bir askeri lider rolüyle dikkat çekiyor. Ed Harris oynadığı filmler arasında bu yapım, aksiyon sahneleriyle izleyicileri sürükleyici bir maceraya davet ediyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-8",
    "name": "Appaloosa",
    "image": "/images/movies/Ed_Harris_appaloosa.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Viggo Mortensen"
      ],
      "Kategori": [
        "Western"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Ed Harris",
      "imdb": "6.7/10",
      "Değerlendirme": "65227",
      "metacritic": "64"
    },
    "paragraf": "Appaloosa, Ed Harris'in aynı zamanda yönetmen koltuğuna oturduğu bir western filmi. Film, iki kanun adamının kasabayı suçlulardan temizleme çabasını ele alıyor. Ed Harris imdb puanlamalarında olumlu notlar alan bu film, western severler için kaçırılmaması gereken bir yapım."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-7",
    "name": "The Abyss - Abyss: Derinlik Sarhoşluğu",
    "image": "/images/movies/Ed_Harris_the_abyss_-_abyss__derinlik_sarhoslugu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Mary Elizabeth Mastrantonio"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Yıl": "1989",
      "Süre": "2 sa. 20 dk.",
      "Yönetmen": "James Cameron",
      "imdb": "7.5/10",
      "Değerlendirme": "196155",
      "metacritic": "62"
    },
    "paragraf": "The Abyss - Abyss: Derinlik Sarhoşluğu, su altı bilim kurgusu üzerine kurulu bir Ed Harris filmi. Derin denizlerde geçen bu hikâye, görsel efektleri ve Ed Harris'in güçlü performansıyla izleyicilerden tam not alıyor. Ed Harris en iyi filmi arayışında olanlar için kesinlikle önerilir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-6",
    "name": "Pollock",
    "image": "/images/movies/Ed_Harris_pollock.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Marcia Gay Harden",
        "Robert Knott"
      ],
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Yıl": "2000",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Ed Harris",
      "imdb": "7/10",
      "Değerlendirme": "29822",
      "metacritic": "77"
    },
    "paragraf": "Pollock, Ed Harris'in yönetmenliğini de üstlendiği ve Jackson Pollock'un yaşamını konu edinen bir biyografi filmi. Sanat dünyasında ikonik bir figür olan Pollock'un hikâyesini işleyen bu filmde, Ed Harris'in etkileyici oyunculuğu Ed Harris en iyi filmleri arasında Pollock'u ön plana çıkarmaktadır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-5",
    "name": "The Hours - Saatler",
    "image": "/images/movies/Ed_Harris_the_hours_-_saatler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Meryl Streep",
        "Nicole Kidman",
        "Julianne Moore"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Stephen Daldry",
      "imdb": "7.5/10",
      "Değerlendirme": "140850",
      "metacritic": "80"
    },
    "paragraf": "The Hours - Saatler, farklı zaman dilimlerinde yaşayan üç kadının iç içe geçmiş hikayelerini anlatıyor. Ed Harris, bu derin dramanın içerisinde etkileyici performansıyla dikkat çekiyor. Filmdeki oyunculuğu, Ed Harris en iyi imdb puanlamasına sahip performanslarından biri olarak kabul ediliyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-4",
    "name": "State of Grace - Tehlikeli Oyun",
    "image": "/images/movies/Ed_Harris_state_of_grace_-_tehlikeli_oyun.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Sean Penn"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Yıl": "1990",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "Phil Joanou",
      "imdb": "7.2/10",
      "Değerlendirme": "25203",
      "metacritic": "60"
    },
    "paragraf": "State of Grace - Tehlikeli Oyun, suç dramı türündeki bu filmde, Ed Harris karmaşık bir karakteri canlandırıyor. New York’un sokaklarında dönen ihanet ve dostluk temaları üzerine kurulu bu film, Ed Harris'in oynadığı filmler arasında dikkate değer bir yapım."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-3",
    "name": "Glengarry Glen Ross - Amerikalılar",
    "image": "/images/movies/Ed_Harris_glengarry_glen_ross_-_amerikalilar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Al Pacino",
        "Jack Lemmon"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "1992",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "James Foley",
      "imdb": "7.7/10",
      "Değerlendirme": "117891",
      "metacritic": "84"
    },
    "paragraf": "Glengarry Glen Ross - Amerikalılar, satış dünyasının korkutucu gerçeklerini ele alan bir drama. Ed Harris, bu filmde iş hayatının baskısını ve etik ikilemleri canlandırıyor. Ed Harris en iyi imdb puanlarına sahip bu film, eleştirmenler ve izleyiciler tarafından beğenilmiştir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-2",
    "name": "A Beautiful Mind - Akıl Oyunları",
    "image": "/images/movies/Ed_Harris_a_beautiful_mind_-_akil_oyunlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Russell Crowe"
      ],
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 15 dk.",
      "Yönetmen": "Ron Howard",
      "imdb": "8.2/10",
      "Değerlendirme": "996420",
      "metacritic": "72"
    },
    "paragraf": "A Beautiful Mind - Akıl Oyunları, matematikçi John Nash’in yaşamını konu alıyor. Ed Harris, Nash'in dramatik yolculuğunu etkileyici bir şekilde sergiliyor. Film, Ed Harris en iyi filmleri arasında önemli bir yerdedir ve izleyicilere derin bir hikâye sunmaktadır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/ed-harris-en-iyi-10-filmibolum-1",
    "name": "Enemy at the Gates - Kapıdaki Düşman",
    "image": "/images/movies/Ed_Harris_enemy_at_the_gates_-_kapidaki_dusman.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ed Harris",
        "Jude Law",
        "Joseph Fiennes"
      ],
      "Kategori": [
        "Savaş",
        "Drama"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 11 dk.",
      "Yönetmen": "Jean-Jacques Annaud",
      "imdb": "7.5/10",
      "Değerlendirme": "279774",
      "metacritic": "53"
    },
    "paragraf": "Enemy at the Gates - Kapıdaki Düşman, II. Dünya Savaşı sırasında Stalingrad'da geçen unutulmaz bir savaş dramı olarak dikkat çekiyor. Ed Harris, bu filmdeki üst düzey performansıyla izleyicilerden büyük beğeni topluyor ve filmi Ed Harris en iyi filmi arayışında olanlar için ideal bir seçim yapıyor."
  }

];

const ana_resim = "/images/ana_gorseller/ed-harris-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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