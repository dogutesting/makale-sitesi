
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ScarlettJohanssonEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "scarlett-johansson-en-iyi-10-filmi";
const baslik = "Scarlett Johansson'un En İyi 10 Filmi";
const metin = "Hollywood'un en başarılı oyuncularından biri olan Scarlett Johansson, kariyeri boyunca birçok unutulmaz role imza atmıştır. İşte, Scarlett Johansson filmleri arasından seçtiğimiz, izlerken size keyif verecek en iyi 10 yapım.";
const bitis_metin = "Bu makalemizde, Scarlett Johansson'un en iyi filmi seçkisini sunduk. Umarız bu liste, bu harika oyuncunun rollerine dair yeni keşiflere vesile olur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["scarlett","johansson","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:35:04+03:00";
const degistirilmeTarihi = "2024-05-25T18:35:04+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-10",
    "name": "Marriage Story - Evlilik Hikayesi",
    "image": "/images/movies/scarlett_johansson_marriage_story_-_evlilik_hikayesi.jpg",
    "ozellikler": {
      "Yönetmen": "Noah Baumbach",
      "Oyuncular": [
        "Scarlett Johansson",
        "Adam Driver"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 17 dk.",
      "Yıl": "2019",
      "imdb": "7.9/10",
      "Değerlendirme": "347000",
      "metascore": "94"
    },
    "paragraf": "Scarlett Johansson en iyi filmleri arasında yer alan Marriage Story, modern bir ayrılık hikayesini ele alıyor ve oyuncuların güçlü performansları ile dikkat çekiyor. Bu film, kesinlikle Scarlett Johansson izlenmesi gereken filmleri listesinde."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-9",
    "name": "Lost in Translation - Çeviri Durakları",
    "image": "/images/movies/scarlett_johansson_lost_in_translation_-_ceviri_duraklari.jpg",
    "ozellikler": {
      "Yönetmen": "Sofia Coppola",
      "Oyuncular": [
        "Scarlett Johansson",
        "Bill Murray"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Süre": "1 sa. 42 dk.",
      "Yıl": "2003",
      "imdb": "7.7/10",
      "Değerlendirme": "491000",
      "metascore": "91"
    },
    "paragraf": "Lost in Translation, Scarlett Johansson en iyi filmi olarak kabul edilen, kültürel çatışmalar ve yalnızlık temasıyla öne çıkan bir başyapıttır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-8",
    "name": "Her - Aşk",
    "image": "/images/movies/scarlett_johansson_her_-_ask.jpg",
    "ozellikler": {
      "Yönetmen": "Spike Jonze",
      "Oyuncular": [
        "Joaquin Phoenix",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Romantik"
      ],
      "Süre": "2 sa. 6 dk.",
      "Yıl": "2013",
      "imdb": "8.0/10",
      "Değerlendirme": "672000",
      "metascore": "91"
    },
    "paragraf": "Her, Scarlett Johansson filmleri arasında, teknoloji ve insan ilişkileri üzerine derinlemesine bir bakış sunan etkileyici bir film olarak öne çıkar."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-7",
    "name": "The Avengers - Yenilmezler",
    "image": "/images/movies/scarlett_johansson_the_avengers_-_yenilmezler.jpg",
    "ozellikler": {
      "Yönetmen": "Joss Whedon",
      "Oyuncular": [
        "Scarlett Johansson",
        "Robert Downey Jr.",
        "Chris Evans"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 23 dk.",
      "Yıl": "2012",
      "imdb": "8.0/10",
      "Değerlendirme": "1500000",
      "metascore": "69"
    },
    "paragraf": "The Avengers, Scarlett Johansson'un Black Widow karakteri ile aksiyon dolu sahneleri ve etkileyici hikayesiyle, Scarlett Johansson filmleri içinde ayrı bir yere sahiptir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-6",
    "name": "Jojo Rabbit - Jojo Tavşan",
    "image": "/images/movies/scarlett_johansson_jojo_rabbit_-_jojo_tavsan.jpg",
    "ozellikler": {
      "Yönetmen": "Taika Waititi",
      "Oyuncular": [
        "Scarlett Johansson",
        "Roman Griffin Davis"
      ],
      "Kategori": [
        "Komedi",
        "Drama",
        "Savaş"
      ],
      "Süre": "1 sa. 48 dk.",
      "Yıl": "2019",
      "imdb": "7.9/10",
      "Değerlendirme": "443000",
      "metascore": "58"
    },
    "paragraf": "Jojo Rabbit'teki rolü ile Scarlett Johansson, II. Dünya Savaşı sırasında bir annenin gözünden trajikomik bir hikaye sunuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-5",
    "name": "Match Point - Maç Sayısı",
    "image": "/images/movies/scarlett_johansson_match_point_-_mac_sayisi.jpg",
    "ozellikler": {
      "Yönetmen": "Woody Allen",
      "Oyuncular": [
        "Scarlett Johansson",
        "Jonathan Rhys Meyers"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Süre": "2 sa. 4 dk.",
      "Yıl": "2005",
      "imdb": "7.6/10",
      "Değerlendirme": "228000",
      "metascore": "72"
    },
    "paragraf": "Match Point, keskin ve gerilim dolu bir hikayesiyle, Scarlett Johansson'un kariyerindeki önemli filmlerdendir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-4",
    "name": "Vicky Cristina Barcelona - Vicky Cristina Barcelona",
    "image": "/images/movies/scarlett_johansson_vicky_cristina_barcelona_-_vicky_cristina_barcelona.jpg",
    "ozellikler": {
      "Yönetmen": "Woody Allen",
      "Oyuncular": [
        "Scarlett Johansson",
        "Penélope Cruz",
        "Javier Bardem"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Süre": "1 sa. 36 dk.",
      "Yıl": "2008",
      "imdb": "7.1/10",
      "Değerlendirme": "269000",
      "metascore": "70"
    },
    "paragraf": "Vicky Cristina Barcelona, yıldız oyuncu kadrosu ve büyüleyici hikayesi ile Scarlett Johansson filmleri arasında seyrine doyumsuz bir eserdir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-3",
    "name": "The Prestige - Prestij",
    "image": "/images/movies/scarlett_johansson_the_prestige_-_prestij.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Christian Bale",
        "Hugh Jackman",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Drama",
        "Gizem",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 10 dk.",
      "Yıl": "2006",
      "imdb": "8.5/10",
      "Değerlendirme": "1400000",
      "metascore": "66"
    },
    "paragraf": "The Prestige, akıl oyunları ve sürükleyici kurgusuyla, Scarlett Johansson'un performansının da parladığı muazzam bir film."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-2",
    "name": "Ghost World - Hayalet Dünya",
    "image": "/images/movies/scarlett_johansson_ghost_world_-_hayalet_dunya.jpg",
    "ozellikler": {
      "Yönetmen": "Terry Zwigoff",
      "Oyuncular": [
        "Scarlett Johansson",
        "Thora Birch"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "1 sa. 51 dk.",
      "Yıl": "2001",
      "imdb": "7.3/10",
      "Değerlendirme": "127000",
      "metascore": "90"
    },
    "paragraf": "Ghost World, gençlik dönemlerinin karmaşası ve ilişkiler üzerine yoğunlaşan, Scarlett Johansson'nun erken kariyerinin parlayan yıldızlarından biri."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/scarlett-johansson-en-iyi-10-filmi#bolum-1",
    "name": "Lucy - Lucy",
    "image": "/images/movies/scarlett_johansson_lucy.jpg",
    "ozellikler": {
      "Yönetmen": "Luc Besson",
      "Oyuncular": [
        "Scarlett Johansson",
        "Morgan Freeman"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Süre": "1 sa. 29 dk.",
      "Yıl": "2014",
      "imdb": "6.4/10",
      "Değerlendirme": "536000",
      "metascore": "62"
    },
    "paragraf": "Lucy, izleyicilere aksiyon ve bilim kurgunun harmanlandığı, Scarlett Johansson'un üstün bir performans sergilediği bir film sunuyor."
  }
];

const ana_resim = "/images/ana_gorseller/scarlett_johansson_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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