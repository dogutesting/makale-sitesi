
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ChrisEvansEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "chris-evans-en-iyi-10-filmi";
const baslik = "Chris Evans en iyi 10 filmi";
const metin = "Chris Evans, son yıllarda sinema dünyasında büyük başarılara imza atan bir aktördür. Chris Evans filmleri, aksiyon, bilim kurgu ve dram türlerinde geniş bir yelpazeye sahiptir. İşte Chris Evans en iyi filmleri arasında seçtiğimiz 10 filmle karşınızdayız. Bu derlemede Chris Evans imdb puanlarıyla öne çıkan yapımlar da bulunmaktadır.";
const bitis_metin = "Bu yazıda, Chris Evans'ın kariyerine damga vurmuş en iyi 10 filmi inceledik. Chris Evans oynadığı filmlerle geniş bir kitleye ulaşarak akıllarda kalıcı performanslar sergilemeye devam ediyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["chris","evans","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:23:52+03:00";
const degistirilmeTarihi = "2024-08-16T17:23:52+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt4481414",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-10",
    "name": "Gifted - Deha",
    "image": "/images/movies/Chris_Evans_gifted_-_deha.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Mckenna Grace"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 41 dk.",
      "Yönetmen": "Marc Webb",
      "imdb": "7.6/10",
      "Değerlendirme": "132738",
      "metacritic": "60"
    },
    "paragraf": "Gifted - Deha, Chris Evans'ın bir öğretmen ve yeğenine aşık bir adam olarak bambaşka bir yüzünü keşfettiğimiz etkileyici bir dram filmidir. Frank Adler rolü, Chris Evans oynadığı filmler arasında duygusal derinliği olan nadir rollerden biridir."
  },
  {
    "num": "9",
    "title_id": "tt4995776",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-9",
    "name": "The Red Sea Diving Resort",
    "image": "/images/movies/Chris_Evans_the_red_sea_diving_resort.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Mbulelo Grootboom",
        "Sizo Mahlangu"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Gideon Raff",
      "imdb": "6.6/10",
      "Değerlendirme": "32904",
      "metacritic": "29"
    },
    "paragraf": "The Red Sea Diving Resort, Chris Evans'ın yer aldığı gerçek bir hikayeden uyarlanmış ve gerilim dolu bir film. Mossad ajanını canlandırdığı bu filmle, Chris Evans en iyi filmi seçkimizin vazgeçilmez bir parçası."
  },
  {
    "num": "8",
    "title_id": "tt1706620",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-8",
    "name": "Snowpiercer - Kar Küreyici",
    "image": "/images/movies/Chris_Evans_snowpiercer_-_kar_kureyici.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Song Kang-ho"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Bong Joon Ho",
      "imdb": "7.1/10",
      "Değerlendirme": "393338",
      "metacritic": "84"
    },
    "paragraf": "Snowpiercer - Kar Küreyici, Chris Evans'ın bir başkaldırı liderini canlandırdığı ve sınıf ayrımcılığını konu alan çarpıcı bir bilim kurgu filmidir. Chris Evans filmleri arasında önemli bir yere sahip olan bu film, sosyal mesajları ve aksiyonu ile dikkat çekiyor."
  },
  {
    "num": "7",
    "title_id": "tt0448134",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-7",
    "name": "Sunshine - Gün Işığı",
    "image": "/images/movies/Chris_Evans_sunshine_-_gun_isigi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Cliff Curtis",
        "Chipo Chung"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Danny Boyle",
      "imdb": "7.2/10",
      "Değerlendirme": "270102",
      "metacritic": "64"
    },
    "paragraf": "Sunshine - Gün Işığı, Chris Evans'ın bilim kurgu sinemasına olan katkılarından biridir. Filmde, güneşi yeniden ateşlemek için uzaya gönderilen bir ekipte yer alıyor. Chris Evans en iyi filmleri içerisinde etkileyici bir performans sunuyor."
  },
  {
    "num": "6",
    "title_id": "tt0446029",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-6",
    "name": "Scott Pilgrim vs. the World - Scott Pilgrim Dünyaya Karşı",
    "image": "/images/movies/Chris_Evans_scott_pilgrim_vs._the_world_-_scott_pilgrim_dunyaya_karsi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Michael Cera",
        "Kieran Culkin"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Edgar Wright",
      "imdb": "7.6/10",
      "Değerlendirme": "470034",
      "metacritic": "69"
    },
    "paragraf": "Scott Pilgrim vs. the World - Scott Pilgrim Dünyaya Karşı, Chris Evans'ın mizah yeteneğini gösterdiği bir başka başarılı film. Chris Evans imdb listesinde de yer alan bu film, onun eğlenceli performanslarından biri olarak anılıyor."
  },
  {
    "num": "5",
    "title_id": "tt0458339",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-5",
    "name": "Captain America: The First Avenger - Kaptan Amerika: İlk Yenilmez",
    "image": "/images/movies/Chris_Evans_captain_america__the_first_avenger_-_kaptan_amerika__ilk_yenilmez.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Hayley Atwell"
      ],
      "Kategori": [
        "Aksiyon",
        "Süper Kahraman"
      ],
      "Yıl": "2011",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Joe Johnston",
      "imdb": "6.9/10",
      "Değerlendirme": "906419",
      "metacritic": "66"
    },
    "paragraf": "Captain America: The First Avenger ile birlikte Chris Evans, Marvel Sinematik Evreni'nde ikonik bir rol olan Kaptan Amerika'yı canlandırmaya başladı. Chris Evans oynadığı filmler arasında adeta bir dönüm noktası olan bu yapım, onun süper kahraman dünyasındaki yerini sağlamlaştırdı."
  },
  {
    "num": "4",
    "title_id": "tt2395427",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-4",
    "name": "Avengers: Age of Ultron - Yenilmezler: Ultron Çağı",
    "image": "/images/movies/Chris_Evans_avengers__age_of_ultron_-_yenilmezler__ultron_cagi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Robert Downey Jr.",
        "Chris Hemsworth"
      ],
      "Kategori": [
        "Aksiyon",
        "Süper Kahraman"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 21 dk.",
      "Yönetmen": "Joss Whedon",
      "imdb": "7.3/10",
      "Değerlendirme": "932821",
      "metacritic": "66"
    },
    "paragraf": "Avengers: Age of Ultron, Chris Evans en iyi filmleri arasında önemli bir yere sahip. Kaptan Amerika olarak ikinci defa takımının liderliğini üstlenen Evans, aksiyon ve macera dolu sahneleriyle izleyicileri büyüledi."
  },
  {
    "num": "3",
    "title_id": "tt4154796",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-3",
    "name": "Avengers: Endgame - Yenilmezler: Son Oyun",
    "image": "/images/movies/Chris_Evans_avengers__endgame_-_yenilmezler__son_oyun.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Robert Downey Jr."
      ],
      "Kategori": [
        "Aksiyon",
        "Süper Kahraman"
      ],
      "Yıl": "2019",
      "Süre": "3 sa. 1 dk.",
      "Yönetmen": "Anthony Russo",
      "imdb": "8.4/10",
      "Değerlendirme": "1291012",
      "metacritic": "78"
    },
    "paragraf": "Avengers: Endgame, Marvel evreninde bir dönemin sonunu ve büyük bir savaşın hikayesini anlatıyor. Chris Evans, mükemmel bir final performansı sergileyerek Kaptan Amerika rolüne veda etti ve Chris Evans imdb en yüksek puanlı projelerden birine imza attı."
  },
  {
    "num": "2",
    "title_id": "tt3498820",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-2",
    "name": "Captain America: Civil War - Kaptan Amerika: Kahramanların Savaşı",
    "image": "/images/movies/Chris_Evans_captain_america__civil_war_-_kaptan_amerika__kahramanlarin_savasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Robert Downey Jr."
      ],
      "Kategori": [
        "Aksiyon",
        "Süper Kahraman"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 27 dk.",
      "Yönetmen": "Anthony Russo",
      "imdb": "7.8/10",
      "Değerlendirme": "861397",
      "metacritic": "75"
    },
    "paragraf": "Captain America: Civil War, Chris Evans'ın Kaptan Amerika olarak bir arada dostlukları teste soktuğu çarpıcı bir yapım. Chris Evans filmleri arasında sürükleyici senaryosu ve çarpıcı çatışma sahneleriyle öne çıkan bu film, mükemmel bir izlenim bırakıyor."
  },
  {
    "num": "1",
    "title_id": "tt8946378",
    "url": "https://enonlar.com/chris-evans-en-iyi-10-filmi#bolum-1",
    "name": "Knives Out - Bıçaklar Çekildi",
    "image": "/images/movies/Chris_Evans_knives_out_-_bicaklar_cekildi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Evans",
        "Daniel Craig"
      ],
      "Kategori": [
        "Gizem",
        "Suç"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Rian Johnson",
      "imdb": "7.9/10",
      "Değerlendirme": "785557",
      "metacritic": "82"
    },
    "paragraf": "Knives Out - Bıçaklar Çekildi, Chris Evans'ın en iyi filmlerinden biri olarak kabul edilen ve hem oyunculuk hem de senaryo açısından büyük beğeni toplayan suç ve gizem dolu bir yapım. Chris Evans en iyi filmi listemizin zirvesinde olmayı fazlasıyla hak eden bir performans sergiliyor."
  }

];

const ana_resim = "/images/ana_gorseller/chris-evans-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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