
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function NataliePortmanEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "natalie-portman-en-iyi-10-filmi";
const baslik = "Natalie Portman en iyi 10 filmi";
const metin = "Natalie Portman, sinema dünyasında etkileyici performanslarıyla tanınan bir oyuncu. Oscar dahil olmak üzere birçok ödüle layık görülmüş ve kariyeri boyunca oldukça farklı karakterlerle izleyicilerin karşısına çıkmıştır. Bu yazımızda, Natalie Portman filmleri arasında en iyi olarak değerlendirilen 10 yapımı listeledik.";
const bitis_metin = "Bu yazımızda, Natalie Portman'ın en iyi filmlerine göz attık. Natalie Portman imbd sıralamalarında yüksek puanlar alan ve izleyiciler tarafından beğenilen bu filmler, sinema severler için unutulmaz anlar sunuyor. Natalie Portman oynadığı filmlerle her daim hafızalarda yer buluyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["natalie","portman","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:37:57+03:00";
const degistirilmeTarihi = "2024-08-16T16:37:57+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/natalie-portman-en-iyi-10-filmi#bolum-10",
    "name": "Hesher",
    "image": "/images/movies/Natalie_Portman_hesher.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Natalie Portman",
        "Joseph Gordon-Levitt",
        "Devin Brochu"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Spencer Susser",
      "imdb": "6.9/10",
      "Değerlendirme": "54341",
      "metacritic": "45"
    },
    "paragraf": "Hesher, Joseph Gordon-Levitt ile Natalie Portman'ın başrollerini paylaştığı etkileyici bir dram filmi. Natalie Portman oynadığı filmler arasında farklı bir yere sahip olan Hesher, bir genç çocuğun ve onun hayatına giren asi bir karakterin hikayesini anlatıyor. Natalie Portman en iyi filmi arasında gösterilmese de kesinlikle izlemeye değer."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/natalie-portman-en-iyi-10-filmi#bolum-9",
    "name": "Knight of Cups",
    "image": "/images/movies/Natalie_Portman_knight_of_cups.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Natalie Portman",
        "Christian Bale",
        "Cate Blanchett"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Terrence Malick",
      "imdb": "5.6/10",
      "Değerlendirme": "29737",
      "metacritic": "53"
    },
    "paragraf": "Knight of Cups, Terrence Malick'in yönettiği ve Christian Bale ile Natalie Portman'ın başrolünde yer aldığı bir film. Natalie Portman filmleri arasında sanatsal yönüyle dikkat çeken bu yapım, kaybolmuş bir aktörün aşk, kendilik ve arayış hikayesini konu alıyor. Natalie Portman imdb sıralamasında dikkat çeken bir yapım."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/natalie-portman-en-iyi-10-filmi#bolum-8",
    "name": "The Other Boleyn Girl - Boleyn Kızı",
    "image": "/images/movies/Natalie_Portman_the_other_boleyn_girl_-_boleyn_kizi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Natalie Portman",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Justin Chadwick",
      "imdb": "6.7/10",
      "Değerlendirme": "120848",
      "metacritic": "50"
    },
    "paragraf": "The Other Boleyn Girl, Natalie Portman ve Scarlett Johansson'un başrollerini paylaştığı bir tarih-dram filmi. Natalie Portman en iyi filmleri arasında dramatik performansı ile dikkat çeken bu yapım, Boleyn kardeşlerin Kral VIII. Henry ile olan ilişkilerini anlatıyor ve izleyiciye tarihi bir perspektif sunuyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/natalie-portman-en-iyi-10-filmi#bolum-7",
    "name": "Annihilation - Yok Oluş",
    "image": "/images/movies/Natalie_Portman_annihilation_-_yok_olus.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Natalie Portman",
        "Oscar Isaac",
        "Benedict Wong"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Alex Garland",
      "imdb": "6.8/10",
      "Değerlendirme": "367075",
      "metacritic": "79"
    },
    "paragraf": "Annihilation, Natalie Portman'ın başrolde olduğu, gizemli bir bölgeyi keşfetmeye çalışan bir biyoloğun hikayesini işleyen bir bilim kurgu filmi. Natalie Portman oynadığı filmler arasında bilim kurgu severler için eşsiz bir seçenek olan Annihilation, Natalie Portman imdb üzerinde de oldukça ilgi çeken bir yapım."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/natalie-portman-en-iyi-10-filmi#bolum-6",
    "name": "Closer - Daha Yaklaş",
    "image": "/images/movies/Natalie_Portman_closer_-_daha_yaklas.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Natalie Portman",
        "Jude Law"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Yıl": "2004",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Mike Nichols",
      "imdb": "7.2/10",
      "Değerlendirme": "238132",
      "metacritic": "65"
    },
    "paragraf": "Closer, insan ilişkilerinin karmaşıklığını ve aşkın doğasını merkezine alan bir yapım. Natalie Portman filmleri arasında etkileyici bir performans sergilediği Closer, dört farklı karakterin birbirleriyle olan ilişkilerini mercek altına alıyor ve izleyicilere düşündürücü bir deneyim sunuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/natalie-portman-en-iyi-10-filmi#bolum-5",
    "name": "Jackie",
    "image": "/images/movies/Natalie_Portman_jackie.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Natalie Portman",
        "Peter Sarsgaard"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "Pablo Larraín",
      "imdb": "6.6/10",
      "Değerlendirme": "83888",
      "metacritic": "81"
    },
    "paragraf": "Jackie, Amerika'nın efsanevi First Lady'si Jacqueline Kennedy'nin hayatını konu alan bir biyografik dram. Natalie Portman, Jackie rolündeki performansıyla hem eleştirmenlerden övgü topladı hem de Natalie Portman en iyi filmleri arasında bu yapımı üst sıralara taşıdı."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/natalie-portman-en-iyi-10-filmi#bolum-4",
    "name": "Black Swan - Siyah Kuğu",
    "image": "/images/movies/Natalie_Portman_black_swan_-_siyah_kugu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Natalie Portman",
        "Mila Kunis"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Darren Aronofsky",
      "imdb": "8/10",
      "Değerlendirme": "834514",
      "metacritic": "79"
    },
    "paragraf": "Black Swan, Natalie Portman'ın Oscar ödülü kazandığı, karanlık ve büyüleyici bir gerilim filmi. Klasik bir balerin olan Nina'nın rol aldığı film, izleyiciyi büyüleyen performanslar ve gerilim dolu sahnelerle Natalie Portman imdb sıralamasında zirveye taşıdı."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/natalie-portman-en-iyi-10-filmi#bolum-3",
    "name": "V for Vendetta",
    "image": "/images/movies/Natalie_Portman_v_for_vendetta.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Natalie Portman",
        "Hugo Weaving"
      ],
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "James McTeigue",
      "imdb": "8.1/10",
      "Değerlendirme": "1188633",
      "metacritic": "62"
    },
    "paragraf": "V for Vendetta, distopik bir gelecekte geçen, özgürlük ve otorite arasında çatışma temalarını işleyen bir film. Natalie Portman filmleri arasında kült bir yapım olan V for Vendetta, ikonik performansları ve güçlü mesajıyla Natalie Portman en iyi filmi olarak sıklıkla anılıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/natalie-portman-en-iyi-10-filmi#bolum-2",
    "name": "Léon: The Professional - Sevginin Gücü",
    "image": "/images/movies/Natalie_Portman_léon__the_professional_-_sevginin_gucu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Natalie Portman",
        "Jean Reno",
        "Gary Oldman"
      ],
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Yıl": "1994",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Luc Besson",
      "imdb": "8.5/10",
      "Değerlendirme": "1260410",
      "metacritic": "64"
    },
    "paragraf": "Léon: The Professional, Natalie Portman'ın çocuk yaşta parladığı ve sinema dünyasında hızla tanındığı bir yapım. Natalie Portman oynadığı filmler arasında önemli bir yer tutan bu aksiyon-dram filmi, genç bir kızın hayatına giren suikastçıyla olan ilişkisini merkezine alıyor."
  }

];

const ana_resim = "/images/ana_gorseller/natalie-portman-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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