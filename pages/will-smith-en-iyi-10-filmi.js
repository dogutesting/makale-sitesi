
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function WillSmithEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "will-smith-en-iyi-10-filmi";
const baslik = "Will Smith en iyi 10 filmi";
const metin = "Hollywood'un sevilen yıldızlarından biri olan Will Smith'in en iyi filmlerini Will Smith en iyi filmleri listesi ile keşfedin. Will Smith, bilindiği gibi birçok başarılı filme imza atmış bir oyuncu ve bu filme olan yaklaşımı, yeteneği ile Will Smith filmleri kategorisinde önemli bir yere sahiptir. Will Smith filmleri en iyi deneyimleri yaşatmak için kurgulandı ve biz de bu filmleri will smith en iyi filmi olarak sıraladık.";
const bitis_metin = "Bu yazımızda Will Smith kaç yılında doğdu sorusuna cevap vermedik ancak Will Smith'in en etkileyici performanslarını sergilediği filmleri sizlere tanıttık. Umarız bu liste, Will Smith'in film kariyerine olan takdirinizi artırır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["will","smith","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-22T17:02:27+03:00";
const degistirilmeTarihi = "2024-04-22T17:02:27+03:00";
const addDate = "30.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/will-smith-en-iyi-10-filmi#bolum-10",
    "name": "Men in Black 3",
    "image": "/images/movies/men_in_black_3.jpg",
    "ozellikler": {
      "Yönetmen": "Barry Sonnenfeld",
      "Oyuncular": [
        "Will Smith",
        "Tommy Lee Jones",
        "Josh Brolin"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Komedi",
        "Aksiyon"
      ],
      "Süre": "1 sa. 46 dk.",
      "Yıl": "2012",
      "metascore": "58",
      "imdb": "6.8/10",
      "Değerlendirme": "387000"
    },
    "paragraf": "Men in Black serisinin üçüncü filmi olan Men in Black 3, Will Smith filmleri arasında özellikle zaman yolculuğu fikrini işleyerek dikkat çekti. Smith'in performansı her zaman olduğu gibi üst düzeydi ve serinin hayranları tarafından beğenildi."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/will-smith-en-iyi-10-filmi#bolum-9",
    "name": "Hitch",
    "image": "/images/movies/hitch.jpg",
    "ozellikler": {
      "Yönetmen": "Andy Tennant",
      "Oyuncular": [
        "Will Smith",
        "Eva Mendes",
        "Kevin James"
      ],
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Süre": "1 sa. 58 dk.",
      "Yıl": "2005",
      "metascore": "58",
      "imdb": "6.6/10",
      "Değerlendirme": "335000"
    },
    "paragraf": "Hitch, Will Smith'in en iltifat toplayan komedi filmlerinden biri. Smith, bir aşk doktoru olarak rol alıyor ve film, onun komik anlarına sahne oluyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/will-smith-en-iyi-10-filmi#bolum-8",
    "name": "I Am Legend",
    "image": "/images/movies/ben_efsaneyim.jpg",
    "ozellikler": {
      "Yönetmen": "Francis Lawrence",
      "Oyuncular": [
        "Will Smith"
      ],
      "Kategori": [
        "Drama",
        "Korku",
        "Bilim Kurgu"
      ],
      "Süre": "1 sa. 41 dk.",
      "Yıl": "2007",
      "metascore": "65",
      "imdb": "7.2/10",
      "Değerlendirme": "814000"
    },
    "paragraf": "I Am Legend, Will Smith'in solo performansı ile dikkat çeken bir başyapıttır. Smith, virüsün yok ettiği bir dünyada hayatta kalmaya çalışan son insanı canlandırıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/will-smith-en-iyi-10-filmi#bolum-7",
    "name": "Hancock",
    "image": "/images/movies/hancock.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Berg",
      "Oyuncular": [
        "Will Smith",
        "Charlize Theron",
        "Jason Bateman"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Süre": "1 sa. 32 dk.",
      "Yıl": "2008",
      "metascore": "49",
      "imdb": "6.4/10",
      "Değerlendirme": "512000"
    },
    "paragraf": "Hancock, Will Smith'in, bir süper kahramanın geleneksel olmayan hikayesini anlatan bir başka filmi. Filmde Smith, anti-kahraman rolü ile hem güldürüyor hem düşündürüyor."
  },
  {
    "num": "6",
    "url": "https:/enonlar.com/will-smith-en-iyi-10-filmi#bolum-6",
    "name": "Bad Boys for Life",
    "image": "/images/movies/bad_boys_for_life.jpg",
    "ozellikler": {
      "Yönetmen": "Adil El Arbi & Bilall Fallah",
      "Oyuncular": [
        "Will Smith",
        "Martin Lawrence"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Süre": "2 sa. 4 dk.",
      "Yıl": "2020",
      "metascore": "59",
      "imdb": "6.6/10",
      "Değerlendirme": "175000"
    },
    "paragraf": "Bad Boys serisinin son filmi olan Bad Boys for Life, uzun bir aradan sonra Will Smith ve Martin Lawrence'ı tekrar bir araya getiriyor. Smith'in enerjisi ve kimyası bu filmde de kendini gösteriyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/will-smith-en-iyi-10-filmi#bolum-5",
    "name": "Ali",
    "image": "/images/movies/ali.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Mann",
      "Oyuncular": [
        "Will Smith"
      ],
      "Kategori": [
        "Drama",
        "Spor"
      ],
      "Süre": "2 sa. 37 dk.",
      "Yıl": "2001",
      "metascore": "65",
      "imdb": "6.7/10",
      "Değerlendirme": "106000"
    },
    "paragraf": "Will Smith, efsane boksör Muhammed Ali'yi canlandırdığı Ali filmi ile kariyerinin en iyi performanslarından birini sergiledi. Film, Ali'nin hayatının çeşitli evrelerine odaklanıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/will-smith-en-iyi-10-filmi#bolum-4",
    "name": "The Pursuit of Happyness",
    "image": "/images/movies/the_pursuit_of_happyness.jpg",
    "ozellikler": {
      "Yönetmen": "Gabriele Muccino",
      "Oyuncular": [
        "Will Smith",
        "Jaden Smith"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 57 dk.",
      "Yıl": "2006",
      "metascore": "64",
      "imdb": "8.0/10",
      "Değerlendirme": "561000"
    },
    "paragraf": "The Pursuit of Happyness, gerçek bir hikayeden alınan bu filmde Will Smith, oğlu ile yaşam mücadelesi veren bir babayı oynuyor. Film, Smith'in duygusal derinliğini ve oyunculuk becerisini gösteriyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/will-smith-en-iyi-10-filmi#bolum-3",
    "name": "Bad Boys",
    "image": "/images/movies/bad_boys.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Will Smith",
        "Martin Lawrence"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Süre": "1 sa. 59 dk.",
      "Yıl": "1995",
      "metascore": "41",
      "imdb": "6.8/10",
      "Değerlendirme": "2860000"
    },
    "paragraf": "Will Smith ve Martin Lawrence'ın efsanevi kimyası ile dolu Bad Boys, aksiyon ve komedinin harmanlandığı başarılı bir film. Bu film, Smith'in yıldızının parladığı anlardan biri olarak kabul ediliyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/will-smith-en-iyi-10-filmi#bolum-2",
    "name": "Men in Black",
    "image": "/images/movies/men_in_black.jpg",
    "ozellikler": {
      "Yönetmen": "Barry Sonnenfeld",
      "Oyuncular": [
        "Will Smith",
        "Tommy Lee Jones"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Komedi",
        "Aksiyon"
      ],
      "Süre": "1 sa. 38 dk.",
      "Yıl": "1997",
      "metascore": "71",
      "imdb": "7.3/10",
      "Değerlendirme": "613000"
    },
    "paragraf": "Men in Black, Will Smith'in uluslararası alanda tanımasını sağlayan ve onu süperstar yapan filmlerden biri. Film, ajanlarının dünyayı gizli tehditlerden koruma mücadelesine odaklanıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/will-smith-en-iyi-10-filmi#bolum-1",
    "name": "Independence Day",
    "image": "/images/movies/independence_day.jpg",
    "ozellikler": {
      "Yönetmen": "Roland Emmerich",
      "Oyuncular": [
        "Will Smith",
        "Bill Pullman",
        "Jeff Goldblum"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "2 sa. 25 dk.",
      "Yıl": "1996",
      "metascore": "59",
      "imdb": "7.0/10",
      "Değerlendirme": "606000"
    },
    "paragraf": "Independence Day, Will Smith'in yıldızının en parladığı zamanlardan biri olan bu film, dünya çapında büyük bir hit oldu. Smith, dünyayı uzaylı istilasından kurtarmak için mücadele eden pilotu canlandırıyor."
  }
];

const ana_resim = "/images/ana_gorseller/will_smith_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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