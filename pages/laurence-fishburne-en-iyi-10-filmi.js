
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function LaurenceFishburneEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "laurence-fishburne-en-iyi-10-filmi";
const baslik = "Laurence Fishburne en iyi 10 filmi";
const metin = "Laurence Fishburne'un başarılı kariyerinde, izlenmesi gereken filmleri keşfetmenize rehber olacak bu listeye göz atın. Fishburne'un yeteneğini ve çeşitliliğini sergileyen, Laurence Fishburne en iyi filmleri bu listede.";
const bitis_metin = "Laurence Fishburne'nun bu muazzam filmleri, onun çeşitlilik ve yetenek dolu kariyerinin bir kesitini sunuyor. Umarız bu, Laurence Fishburne izlenmesi gereken filmleri listesi ile onun sanatına olan takdirinizi artırır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["laurence","fishburne","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:51:04+03:00";
const degistirilmeTarihi = "2024-05-25T18:51:04+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-10",
    "name": "The Matrix - Matrix",
    "image": "/images/movies/laurence_fishburne_the_matrix_-_matrix.jpg",
    "ozellikler": {
      "Yönetmen": "Lana Wachowski, Lilly Wachowski",
      "Oyuncular": [
        "Keanu Reeves",
        "Laurence Fishburne",
        "Carrie-Anne Moss"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "2 sa. 16 dk.",
      "Yıl": "1999",
      "imdb": "8.7/10",
      "Değerlendirme": "2100000",
      "metascore": "73"
    },
    "paragraf": "Laurence Fishburne filmleri arasında bir kült haline gelen The Matrix, bilim kurgu ve aksiyonun mükemmel bir birleşimi. Fishburne'un Morpheus rolündeki ikonik performansı, Laurence Fishburne en iyi filmi denince akla ilk gelenlerden."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-9",
    "name": "The Matrix Reloaded - Matrix Yeniden Yükleniyor",
    "image": "/images/movies/laurence_fishburne_the_matrix_reloaded_-_matrix_yeniden_yukleniyor.jpg",
    "ozellikler": {
      "Yönetmen": "Lana Wachowski, Lilly Wachowski",
      "Oyuncular": [
        "Keanu Reeves",
        "Laurence Fishburne",
        "Carrie-Anne Moss"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "2 sa. 18 dk.",
      "Yıl": "2003",
      "imdb": "7.2/10",
      "Değerlendirme": "632000",
      "metascore": "62"
    },
    "paragraf": "Matrix serisinin bu ikinci filmi, Laurence Fishburne izlenmesi gereken filmleri arasında yer alıyor. Fishburne, Morpheus karakterini daha da derinleştirerek serinin özgün hikayesini sürdürüyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-8",
    "name": "The Matrix Revolutions - Matrix Devrimleri",
    "image": "/images/movies/laurence_fishburne_the_matrix_revolutions_-_matrix_devrimleri.jpg",
    "ozellikler": {
      "Yönetmen": "Lana Wachowski, Lilly Wachowski",
      "Oyuncular": [
        "Keanu Reeves",
        "Laurence Fishburne",
        "Carrie-Anne Moss"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "2003",
      "imdb": "6.7/10",
      "Değerlendirme": "545000",
      "metascore": "47"
    },
    "paragraf": "Matrix serisinde Fishburne'un Morpheus olarak gösterdiği üstün performans, Laurence Fishburne filmleri listesinin zirvesinde yer alıyor. Film, serinin epik sonunu ve Morpheus'un kahramanlığını gözler önüne seriyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-7",
    "name": "John Wick: Chapter 2 - John Wick 2",
    "image": "/images/movies/laurence_fishburne_john_wick_chapter_john_wick_2.jpg",
    "ozellikler": {
      "Yönetmen": "Chad Stahelski",
      "Oyuncular": [
        "Keanu Reeves",
        "Laurence Fishburne",
        "Ian McShane"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Süre": "2 sa. 2 dk.",
      "Yıl": "2017",
      "imdb": "7.4/10",
      "Değerlendirme": "513000",
      "metascore": "75"
    },
    "paragraf": "John Wick serisinin bu devam filminde, Fishburne, suç dünyasının karizmatik figürü olarak karşımıza çıkıyor. Laurence Fishurne filmleri içinde aksiyon severler için vazgeçilmez bir seçenek."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-6",
    "name": "Mission: Impossible III - Görevimiz Tehlike 3",
    "image": "/images/movies/laurence_fishburne_mission_impossible_iii_-_gorevimiz_tehlike_3.jpg",
    "ozellikler": {
      "Yönetmen": "J.J. Abrams",
      "Oyuncular": [
        "Tom Cruise",
        "Laurence Fishburne",
        "Philip Seymour Hoffman"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Süre": "2 sa. 6 dk.",
      "Yıl": "2006",
      "imdb": "6.9/10",
      "Değerlendirme": "391000",
      "metascore": "66"
    },
    "paragraf": "Fishburne, bu heyecan dolu filmde IMF'in güçlü lideri olarak izleyici karşısına çıkıyor. Laurence Fishburne en iyi filmleri arasında aksiyon ve maceranın doruk noktası."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-5",
    "name": "Ant-Man and the Wasp - Karınca Adam ve Eşek Arısı",
    "image": "/images/movies/laurence_fishburne_ant-man_and_the_wasp_-_karinca_adam_ve_esek_arisi.jpg",
    "ozellikler": {
      "Yönetmen": "Peyton Reed",
      "Oyuncular": [
        "Paul Rudd",
        "Evangeline Lilly",
        "Laurence Fishburne"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera",
        "Komedi"
      ],
      "Süre": "2 sa. 5 dk.",
      "Yıl": "2018",
      "imdb": "7.0/10",
      "Değerlendirme": "451000",
      "metascore": "70"
    },
    "paragraf": "Marvel evrenine katılan Fishburne, bilim adamı rolünde parlıyor. Laurence Fishburne filmleri içinde süper kahraman severler için benzersiz bir deneyim."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-4",
    "name": "Mystic River - Gizemli Nehir",
    "image": "/images/movies/laurence_fishburne_mystic_river_-_gizemli_nehir.jpg",
    "ozellikler": {
      "Yönetmen": "Clint Eastwood",
      "Oyuncular": [
        "Sean Penn",
        "Tim Robbins",
        "Laurence Fishburne"
      ],
      "Kategori": [
        "Drama",
        "Gizem"
      ],
      "Süre": "2 sa. 18 dk.",
      "Yıl": "2003",
      "imdb": "7.9/10",
      "Değerlendirme": "487000",
      "metascore": "84"
    },
    "paragraf": "Bu sürükleyici filmde Fishburne, dedektif rolüyle karşımıza çıkıyor. Emniyet güçleri içinde çözülmesi gereken karmaşık bir vakada önemli bir rol oynuyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-3",
    "name": "Boyz n the Hood - Mahallede Savaş",
    "image": "/images/movies/laurence_fishburne_boyz_n_the_hood_-_mahallede_savas.jpg",
    "ozellikler": {
      "Yönetmen": "John Singleton",
      "Oyuncular": [
        "Cuba Gooding Jr.",
        "Ice Cube",
        "Laurence Fishburne"
      ],
      "Kategori": [
        "Drama",
        "Suç"
      ],
      "Süre": "1 sa. 52 dk.",
      "Yıl": "1991",
      "imdb": "7.8/10",
      "Değerlendirme": "155000",
      "metascore": "76"
    },
    "paragraf": "Laurence Fishburne en iyi filmleri listesinde bu etkileyici drama, sosyal mesajları ve güçlü hikayesiyle dikkat çekiyor. Fishburne'un karakteri, gençlere toplum içindeki sorunlarla başa çıkma yollarını öğretiyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-2",
    "name": "Predators - Avcılar",
    "image": "/images/movies/laurence_fishburne_predators_-_avcilar.jpg",
    "ozellikler": {
      "Yönetmen": "Nimród Antal",
      "Oyuncular": [
        "Adrien Brody",
        "Topher Grace",
        "Laurence Fishburne"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Süre": "1 sa. 47 dk.",
      "Yıl": "2010",
      "imdb": "6.4/10",
      "Değerlendirme": "244000",
      "metascore": "51"
    },
    "paragraf": "Bu bilim kurgu aksiyon filmi, Laurence Fishburne'nun serinin ürkütücü yaratıklarına karşı verdiği mücadeleyle, Laurence Fishburne en iyi filmleri arasında yerini alıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/laurence-fishburne-en-iyi-10-filmi#bolum-1",
    "name": "Contagion - Salgın",
    "image": "/images/movies/laurence_fishburne_contagion_-_salgin.jpg",
    "ozellikler": {
      "Yönetmen": "Steven Soderbergh",
      "Oyuncular": [
        "Matt Damon",
        "Kate Winslet",
        "Laurence Fishburne"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Süre": "1 sa. 46 dk.",
      "Yıl": "2011",
      "imdb": "6.8/10",
      "Değerlendirme": "317000",
      "metascore": "70"
    },
    "paragraf": "Bu gerçekçi ve zamanında film, küresel bir salgını konu almakta. Laurence Fishburne, kamusal sağlık krizinde kilit bir rol oynayarak, Laurence Fishburne filmleri listesinde üst sıralarda yer alıyor."
  }

];

const ana_resim = "/images/ana_gorseller/laurence_fishburne_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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