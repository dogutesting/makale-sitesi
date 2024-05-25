
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function StevenSpielbergEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "steven-spielberg-en-iyi-10-filmi";
const baslik = "Steven Spielberg En İyi 10 Filmi";
const metin = "Steven Spielberg, sinema tarihinin en etkili yönetmenlerinden biridir ve bu yazımızda Steven Spielberg en iyi filmi ve Steven Spielberg izlenmesi gereken filmleri içinden seçilmiş on parça şaheseri listeledik.";
const bitis_metin = "Steven Spielberg'in sinematik dehasının bir göstergesi olan bu filmler, türler arası geçişleri ve derin hikayeleri ile sinema tarihinde özel bir yere sahiptir. Oluşturduğumuz bu listeyle, Spielberg'in en iyi yapıtlarını keşfetme olanağı bulduk.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["steven","spielberg","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:13:52+03:00";
const degistirilmeTarihi = "2024-05-25T18:13:52+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-10",
    "name": "Saving Private Ryan - Er Ryan'ı Kurtarmak",
    "image": "/images/movies/steven_spielberg_saving_private_ryan_-_er_ryan_i_kurtarmak.jpg",
    "ozellikler": {
      "Yıl": "1998",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Tom Hanks",
        "Tom Sizemore",
        "Edward Burns"
      ],
      "Kategori": [
        "Savaş"
      ],
      "Süre": "2 sa. 49 dk.",
      "imdb": "8.6/10",
      "Değerlendirme": "1500000",
      "metascore": "91"
    },
    "paragraf": "Saving Private Ryan - Er Ryan'ı Kurtarmak, II. Dünya Savaşı sırasında Amerikan askerlerinin Normandiya çıkarmasını ve bir askeri kurtarma misyonunu anlatır. Bu yapıt, görsel anlatımı ve güçlü hikaye anlatımı ile Steven Spielberg filmleri arasında önemli bir yere sahiptir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-9",
    "name": "Jaws - Köpekbalığı",
    "image": "/images/movies/steven_spielberg_jaws_-_kopekbaligi.jpg",
    "ozellikler": {
      "Yıl": "1975",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Roy Scheider",
        "Robert Shaw",
        "Richard Dreyfuss"
      ],
      "Kategori": [
        "Macera",
        "Gerilim"
      ],
      "Süre": "2 sa. 4 dk.",
      "imdb": "8.1/10",
      "Değerlendirme": "662000",
      "metascore": "87"
    },
    "paragraf": "Jaws - Köpekbalığı, bir plaj kasabasına dehşet saçan bir beyaz köpekbalığının hikayesini anlatır. Bu film, robot köpekbalığı kullanılarak yapılmış sahneleri ve gerilim dolu kurgusu ile izleyicileri kenara oturtmuş, Steven Spielberg en iyi filmleri arasına girmiştir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-8",
    "name": "E.T. the Extra-Terrestrial - E.T.",
    "image": "/images/movies/steven_spielberg_e_t_the_extra-terrestrial_-_e_t.jpg",
    "ozellikler": {
      "Yıl": "1982",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Henry Thomas",
        "Drew Barrymore",
        "Peter Coyote"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Süre": "1 sa. 55 dk.",
      "imdb": "7.9/10",
      "Değerlendirme": "439000",
      "metascore": "92"
    },
    "paragraf": "E.T. the Extra-Terrestrial - E.T., yalnız ve kaybolmuş bir uzaylıyla küçük bir çocuğun dostluğunu ve bu uzaylının evine dönüş mücadelesini ifade eder. Bu film, duygusal derinliği ile ünlü olup Steven Spielberg en iyi filmi olarak anılmaktadır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-7",
    "name": "Schindler's List - Schindler'in Listesi",
    "image": "/images/movies/steven_spielberg_schindler_s_list_-_schindler_in_listesi.jpg",
    "ozellikler": {
      "Yıl": "1993",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Liam Neeson",
        "Ralph Fiennes",
        "Ben Kingsley"
      ],
      "Kategori": [
        "Drama",
        "Tarih"
      ],
      "Süre": "3 sa. 15 dk.",
      "imdb": "9.0/10",
      "Değerlendirme": "1500000",
      "metascore": "95"
    },
    "paragraf": "Schindler's List - Schindler'in Listesi, II. Dünya Savaşı sırasında Yahudi işçileri Nazilerden kurtarmaya çalışan bir iş adamının gerçek hikayesini anlatır. Bu eser, tarihi gerçekliği ve güçlü mesajı ile unutulmaz Steven Spielberg filmleri arasında yer alır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-6",
    "name": "Jurassic Park",
    "image": "/images/movies/steven_spielberg_jurassic_park_-_jura_donemi_parki.jpg",
    "ozellikler": {
      "Yıl": "1993",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Sam Neill",
        "Laura Dern",
        "Jeff Goldblum"
      ],
      "Kategori": [
        "Macera",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 7 dk.",
      "imdb": "8.2/10",
      "Değerlendirme": "1100000",
      "metascore": "68"
    },
    "paragraf": "Jurassic Park - Jura Dönemi Parkı, DNA teknolojisi ile yeniden yaratılan dinozorların bulunduğu bir parkta geçen olayları konu alır. Bu film, devrim niteliğindeki görsel efektleri ve sıkı kurgusuyla bilim kurgu ve macera tutkunlarının beğenisini kazanmıştır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-5",
    "name": "Catch Me If You Can - Sıkıysa Yakala",
    "image": "/images/movies/steven_spielberg_catch_me_if_you_can_-_sikiysa_yakala.jpg",
    "ozellikler": {
      "Yıl": "2002",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Tom Hanks",
        "Christopher Walken"
      ],
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Süre": "2 sa. 21 dk.",
      "imdb": "8.1/10",
      "Değerlendirme": "1100000",
      "metascore": "75"
    },
    "paragraf": "Catch Me If You Can - Sıkıysa Yakala, gerçek bir hilebazın FBI ajanları tarafından kovalanmasını ve onun zekice dolandırıcılıkları yapmasını ele alır. Film, Steven Spielberg filmleri içinde dram ve gerilim unsurlarıyla dikkat çekiyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-4",
    "name": "Munich - Münih",
    "image": "/images/movies/steven_spielberg_munich_-_munih.jpg",
    "ozellikler": {
      "Yıl": "2005",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Eric Bana",
        "Daniel Craig",
        "Ciarán Hinds"
      ],
      "Kategori": [
        "Drama",
        "Tarih"
      ],
      "Süre": "2 sa. 44 dk.",
      "imdb": "7.5/10",
      "Değerlendirme": "239000",
      "metascore": "74"
    },
    "paragraf": "Munich - Münih, 1972 yılındaki Münih Olimpiyat Oyunları sırasında İsrailli atletlere yapılan terörist saldırının ardından İsrail'in aldığı karşılık operasyonlarını konu alır. Bu yapım, politik ve tarihsel açıdan zengin bir bakış sunar."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-3",
    "name": "War Horse - Savaş Atı",
    "image": "/images/movies/steven_spielberg_war_horse_-_savas_ati.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Jeremy Irvine",
        "Emily Watson",
        "David Thewlis"
      ],
      "Kategori": [
        "Drama",
        "Savaş"
      ],
      "Süre": "2 sa. 26 dk.",
      "imdb": "7.2/10",
      "Değerlendirme": "166000",
      "metascore": "72"
    },
    "paragraf": "War Horse - Savaş Atı, Birinci Dünya Savaşı sırasında çeşitli sahiplerin elinden geçen bir savaş atının hikayesini anlatır. Film, insan ve hayvan arasındaki derin bağları gözler önüne sererken, savaşın acımasızlığını da vurgular."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-2",
    "name": "The Terminal - Terminal",
    "image": "/images/movies/steven_spielberg_the_terminal_-_terminal.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Tom Hanks",
        "Catherine Zeta-Jones",
        "Stanley Tucci"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "2 sa. 8 dk.",
      "imdb": "7.4/10",
      "Değerlendirme": "497000",
      "metascore": "55"
    },
    "paragraf": "The Terminal - Terminal, havaalanında mahsur kalan bir adamın hikayesini takip eder. Karakteri Tom Hanks canlandırırken, komedi ve dram unsurlarının harmanlandığı bu film, insan ruhunun dayanıklılığını ve umudunu kutlar."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/steven-spielberg-en-iyi-10-filmi#bolum-1",
    "name": "Hook - Kanca",
    "image": "/images/movies/steven_spielberg_hook_-_kanca.jpg",
    "ozellikler": {
      "Yıl": "1991",
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Robin Williams",
        "Dustin Hoffman",
        "Julia Roberts"
      ],
      "Kategori": [
        "Macera",
        "Komedi"
      ],
      "Süre": "2 sa. 22 dk.",
      "imdb": "6.8/10",
      "Değerlendirme": "274000",
      "metascore": "52"
    },
    "paragraf": "Hook - Kanca, Peter Pan'in yetişkin bir adam olarak Neverland'e dönüşünü ve çocuklarını kurtarmak için Kaptan Kanca ile mücadelesini anlatır. Film, fantezi ve macera dolu bir serüven sunarken Spielberg'in yönetmenlik yeteneğinin bir yansımasıdır."
  }
];

const ana_resim = "/images/ana_gorseller/steven_spielberg_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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