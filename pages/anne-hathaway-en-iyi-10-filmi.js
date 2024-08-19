
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function AnneHathawayEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "anne-hathaway-en-iyi-10-filmi";
const baslik = "Anne Hathaway en iyi 10 filmi";
const metin = "Hollywood'un parlak yıldızlarından biri olan Anne Hathaway, birçok unutulmaz filmde rol almıştır. İşte Anne Hathaway filmleri arasından seçtiğimiz, izlemeye değer Anne Hathaway en iyi filmleri listesi. Bu liste, Anne Hathaway izlenmesi gereken filmleri içerir ve her birinde yıldız oyuncunun performansını öne çıkarır.";
const bitis_metin = "Bu makalemizde, Anne Hathaway'in en iyi 10 filmini derledik. Her bir film, Hathaway'in yeteneğini ve çeşitliliğini göstermekte. Umarız ki bu filmler, sizlere de Hathaway'in sinemadaki büyüsünü tekrar yaşatır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["anne","hathaway","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:37:51+03:00";
const degistirilmeTarihi = "2024-05-25T18:37:51+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-10",
    "name": "Ocean's 8",
    "image": "/images/movies/anne_hathaway_ocean_s_ocean_s_sekiz.jpg",
    "ozellikler": {
      "Yönetmen": "Gary Ross",
      "Oyuncular": [
        "Sandra Bullock",
        "Cate Blanchett",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Heist",
        "Comedy"
      ],
      "Süre": "1 sa. 50 dk.",
      "Yıl": "2018",
      "imdb": "6.3/10",
      "Değerlendirme": "242000"
    },
    "paragraf": "Listemizin son sırasında, Anne Hathaway en iyi filmi olarak kabul edilen Ocean's 8 yer alıyor. Bu heist komedisi filmde Hathaway, bir sanat galerisi sahibini canlandırıyor ve etkileyici performansıyla göz dolduruyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-9",
    "name": "The Dark Knight Rises - Kara Şövalye Yükseliyor",
    "image": "/images/movies/anne_hathaway_the_dark_knight_rises_-_kara_sovalye_yukseliyor.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Christian Bale",
        "Tom Hardy",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Action",
        "Thriller"
      ],
      "Süre": "2 sa. 44 dk.",
      "Yıl": "2012",
      "imdb": "8.4/10",
      "Değerlendirme": "1800000"
    },
    "paragraf": "Anne Hathaway filmleri arasında öne çıkan The Dark Knight Rises, Hathaway'in Catwoman rolüyle mükemmel bir performans sergilediği bir filmdir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-8",
    "name": "Interstellar - Yıldızlararası",
    "image": "/images/movies/anne_hathaway_interstellar_-_yildizlararasi.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Matthew McConaughey",
        "Anne Hathaway",
        "Jessica Chastain"
      ],
      "Kategori": [
        "Sci-Fi",
        "Drama"
      ],
      "Süre": "2 sa. 49 dk.",
      "Yıl": "2014",
      "imdb": "8.6/10",
      "Değerlendirme": "2100000"
    },
    "paragraf": "Yıldızlararası, uzay ve zaman kavramlarını zorlayan bir film olup, Hathaway'in performansı bu bilim kurgu dramasını izlemek için bir sebep daha sunuyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-7",
    "name": "Les Misérables - Sefiller",
    "image": "/images/movies/anne_hathaway_les_miserables_-_sefiller.jpg",
    "ozellikler": {
      "Yönetmen": "Tom Hooper",
      "Oyuncular": [
        "Hugh Jackman",
        "Russell Crowe",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Drama",
        "Musical"
      ],
      "Süre": "2 sa. 38 dk.",
      "Yıl": "2012",
      "imdb": "7.5/10",
      "Değerlendirme": "346000"
    },
    "paragraf": "Sefiller, Hathaway'in Oscar kazandıran performansıyla unutulmaz bir film. Les Misérables, müzikal ve dramın mükemmel birleşimi."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-6",
    "name": "The Devil Wears Prada - Şeytan Marka Giyer",
    "image": "/images/movies/anne_hathaway_the_devil_wears_prada_-_seytan_marka_giyer.jpg",
    "ozellikler": {
      "Yönetmen": "David Frankel",
      "Oyuncular": [
        "Meryl Streep",
        "Anne Hathaway",
        "Emily Blunt"
      ],
      "Kategori": [
        "Drama",
        "Comedy"
      ],
      "Süre": "1 sa. 49 dk.",
      "Yıl": "2006",
      "imdb": "6.9/10",
      "Değerlendirme": "468000"
    },
    "paragraf": "The Devil Wears Prada, moda dünyasının kulislerine bir bakış atar ve Hathaway'in bu dünyaya ayak uydurma çabası izleyiciyi etkiler."
  },
  {
    "num": 5,
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-5",
    "name": "Love and Other Drugs - Aşk ve Diğer İlaçlar",
    "image": "/images/movies/anne_hathaway_love_and_other_drugs_-_ask_ve_diger_ilaclar.jpg",
    "ozellikler": {
      "Yönetmen": "Edward Zwick",
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Romance",
        "Drama"
      ],
      "Süre": "1 sa. 52 dk.",
      "Yıl": "2010",
      "imdb": "6.7/10",
      "Değerlendirme": "224000"
    },
    "paragraf": "Aşk ve Diğer İlaçlar, Hathaway ve Jake Gyllenhaal'un kimyasıyla romantik ve dokunaklı bir film. Anne Hathaway filmleri içinde öne çıkan bir yapım."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-4",
    "name": "Rachel Getting Married - Rachel Evleniyor",
    "image": "/images/movies/anne_hathaway_rachel_getting_married_-_rachel_evleniyor.jpg",
    "ozellikler": {
      "Yönetmen": "Jonathan Demme",
      "Oyuncular": [
        "Anne Hathaway",
        "Rosemarie DeWitt"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 53 dk.",
      "Yıl": "2008",
      "imdb": "6.7/10",
      "Değerlendirme": "51000"
    },
    "paragraf": "Rachel Evleniyor, aile içi dinamikleri ve evlilik hazırlıklarını ele alırken, Hathaway'in etkileyici dramatik performansı ile dikkat çeker."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-3",
    "name": "The Intern - Stajyer",
    "image": "/images/movies/anne_hathaway_the_intern_-_stajyer.jpg",
    "ozellikler": {
      "Yönetmen": "Nancy Meyers",
      "Oyuncular": [
        "Robert De Niro",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Comedy",
        "Drama"
      ],
      "Süre": "2 sa.",
      "Yıl": "2015",
      "imdb": "7.1/10",
      "Değerlendirme": "274000"
    },
    "paragraf": "Stajyer, iş ve yaşam dengesini bulmaya çalışan bir CEO'yu canlandıran Hathaway ile yaşlı bir stajyer arasındaki etkileyici ilişkiyi ele alır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-2",
    "name": "Bride Wars - Gelinlerin Savaşı",
    "image": "/images/movies/anne_hathaway_bride_wars_-_gelinlerin_savasi.jpg",
    "ozellikler": {
      "Yönetmen": "Gary Winick",
      "Oyuncular": [
        "Kate Hudson",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Comedy",
        "Romance"
      ],
      "Süre": "1 sa. 29 dk.",
      "Yıl": "2009",
      "imdb": "5.5/10",
      "Değerlendirme": "116000"
    },
    "paragraf": "Gelinlerin Savaşı, iki en iyi arkadaşın aynı tarihte evlenme planları yapmasının komik sonuçlarını anlatır. Hathaway bu komedide eğlenceli bir performans sergiliyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/anne-hathaway-en-iyi-10-filmi#bolum-1",
    "name": "The Princess Diaries - Prinses Günlükleri",
    "image": "/images/movies/anne_hathaway_the_princess_diaries_-_prinses_gunlukleri.jpg",
    "ozellikler": {
      "Yönetmen": "Garry Marshall",
      "Oyuncular": [
        "Julie Andrews",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Family",
        "Comedy"
      ],
      "Süre": "1 sa. 55 dk.",
      "Yıl": "2001",
      "imdb": "6.4/10",
      "Değerlendirme": "164000"
    },
    "paragraf": "Listemizin zirvesinde, Anne Hathaway'in yıldızının parladığı The Princess Diaries bulunuyor. Bu aile komedisi, genç bir kızın bir gecede prenses olarak uyanışını anlatıyor."
  }

];

const ana_resim = "/images/ana_gorseller/anne_hathaway_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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