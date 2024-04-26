
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function GelmisGecmisEnIyi10FilmKarakteriMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "gelmis-gecmis-en-iyi-10-film-karakteri";
const baslik = "Gelmiş geçmiş en iyi 10 film karakteri";
const metin = "Bu listeye 'gelmiş geçmiş en iyi film karakterleri' derledik. Sinema tarihinin unutulmaz 'en iyi film karakterleri' ve kült hale gelmiş 'en iyi film karakter isimleri' bizlerle derin anılar bıraktı. Bu film karakterlerinin her biri, kendi hikayeleriyle büyüleyici birer ikon haline geldi.";
const bitis_metin = "Bu yazımızda, gelmiş geçmiş en iyi film karakterleri listesini sizlerle paylaştık. Her karakter, sinema tarihinde ölümsüz bir yer edinmiş ve izleyiciler üzerinde derin bir etki bırakmıştır. Umarız bu karakterler arasında en beğendiğiniz de yer almıştır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["gelmis","gecmis","en","iyi","10","film","karakteri"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T18:53:41+03:00";
const degistirilmeTarihi = "2024-04-26T18:53:41+03:00";
const addDate = "26.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-10",
    "name": "Yüzüklerin Efendisi: Frodo Baggins",
    "image": "/images/movies/yuzuklerin_efendisi_frodo_baggins.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Elijah Wood"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Süre": "3 sa. 48 dk.",
      "Yıl": "2001",
      "metascore": "92",
      "imdb": "8.9/10",
      "Değerlendirme": "2000000"
    },
    "paragraf": "Frodo Baggins, Yüzüklerin Efendisi serisinin kalbinde yer alır. Cesurca ve kararlı bir şekilde, Orta Dünya'nın kaderini belirleyecek olan Yüzüğü yok etmek için uzun ve tehlikeli bir yolculuğa çıkar."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-9",
    "name": "Godfather: Michael Corleone",
    "image": "/images/movies/godfather_michael_corleone.jpg",
    "ozellikler": {
      "Yönetmen": "Francis Ford Coppola",
      "Oyuncular": [
        "Al Pacino"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 55 dk.",
      "Yıl": "1972",
      "imdb": "9.2/10",
      "metascore": "100"
    },
    "paragraf": "Michael Corleone, Godfather serisinde, masum bir adamdan acımasız bir mafya babasına dönüşümüyle tanınır. Bu karakter, film tarihindeki en kompleks ve etkileyici figürlerden biridir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-8",
    "name": "To Kill a Mockingbird - Bülbülü Öldürmek: Atticus Finch",
    "image": "/images/movies/bulbulu_oldurmek_atticus_finch.jpg",
    "ozellikler": {
      "Yönetmen": "Robert Mulligan",
      "Oyuncular": [
        "Gregory Peck"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "1962",
      "metascore": "87",
      "imdb": "8.3/10",
      "Değerlendirme": "333000"
    },
    "paragraf": "Atticus Finch, adalet ve insanlık dersi veren, Bülbülü Öldürmek filminin merkezindeki karakterdir. Oğulları ve toplumu için doğru olanı yapma çabasıyla hatırlanır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-7",
    "name": "The Dark Knight - Karanlık Şövalye: Joker",
    "image": "/images/movies/karanlik_sovalye_joker.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Heath Ledger"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 32 dk.",
      "Yıl": "2008",
      "metascore": "84",
      "imdb": "9.0/10",
      "Değerlendirme": "2900000"
    },
    "paragraf": "Joker, Karanlık Şövalye filminde Gotham şehrini terörize eden kaotik bir anarşist olarak gözler önüne serilir. Heath Ledger'ın unutulmaz performansı, bu karakteri ikonikleştirdi."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-6",
    "name": "Pulp Fiction - Ucuz Roman: Jules Winnfield",
    "image": "/images/movies/pulp_fiction_jules_winnfield.jpg",
    "ozellikler": {
      "Yönetmen": "Quentin Tarantino",
      "Oyuncular": [
        "Samuel L. Jackson"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 34 dk.",
      "Yıl": "1994",
      "metascore": "94",
      "imdb": "8.9/10",
      "Değerlendirme": "2200000"
    },
    "paragraf": "Jules Winnfield, Pulp Fiction filminde, soğukkanlı bir tetikçi olarak iz bırakır. Onun karizmatik diyaloğu ve filozofik düşünceleri, izleyicileri etkilemeyi başarır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-5",
    "name": "The Silence of the Lambs - Kuzuların Sessizliği: Hannibal Lecter",
    "image": "/images/movies/kuzularin_sessizligi_hannibal_lecter.jpg",
    "ozellikler": {
      "Yönetmen": "Jonathan Demme",
      "Oyuncular": [
        "Anthony Hopkins"
      ],
      "Kategori": [
        "Korku",
        "Drama"
      ],
      "Süre": "1 sa. 58 dk.",
      "Yıl": "1991",
      "metascore": "85",
      "imdb": "8.6/10",
      "Değerlendirme": "1500000"
    },
    "paragraf": "Hannibal Lecter, zekâsı ve manipülasyon yeteneği ile ünlü, Kuzuların Sessizliği filmindeki korkutucu bir psikiyatristtir. Bu karakter, gerilim ve korku film severler üzerinde derin bir iz bırakmıştır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-4",
    "name": "Fight Club: Tyler Durden",
    "image": "/images/movies/fight_club_tyler_durden.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Brad Pitt",
        "Edward Norton"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 19 dk.",
      "Yıl": "1999",
      "metascore": "66",
      "imdb": "8.8/10",
      "Değerlendirme": "2300000"
    },
    "paragraf": "Tyler Durden, Fight Club filminde, modern dünyanın monotonluğuna ve tüketim kültürüne başkaldıran karizmatik bir figür olarak ortaya çıkar."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-3",
    "name": "Casablanca: Rick Blaine",
    "image": "/images/movies/casablanca_rick_blaine.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Curtiz",
      "Oyuncular": [
        "Humphrey Bogart"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "1 sa. 42 dk.",
      "Yıl": "1942",
      "metascore": "100",
      "imdb": "8.5/10",
      "Değerlendirme": "606000"
    },
    "paragraf": "Rick Blaine, Casablanca filminin unutulmaz kahramanıdır; savaşın gölgesinde bir aşk hikayesinin merkezinde yer alır. Ingenious and moody, his actions reflect the complexities of love and sacrifice during wartime."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-2",
    "name": "Star Wars: Darth Vader",
    "image": "/images/movies/star_wars_darth_vader.jpg",
    "ozellikler": {
      "Yönetmen": "George Lucas",
      "Oyuncular": [
        "David Prowse",
        "James Earl Jones (ses)"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 1 dk.",
      "Yıl": "1977",
      "metascore": "90",
      "imdb": "8.7/10",
      "Değerlendirme": "1400000"
    },
    "paragraf": "Darth Vader, Star Wars evreninin en ikonik kötülerinden biridir. Güçlü bir Sith Lordu olarak, galaksi üzerinde derin ve kalıcı bir etki bırakır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-film-karakteri#bolum-1",
    "name": "Forrest Gump: Forrest Gump",
    "image": "/images/movies/forrest_gump_forrest_gump.jpg",
    "ozellikler": {
      "Yönetmen": "Robert Zemeckis",
      "Oyuncular": [
        "Tom Hanks"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Süre": "2 sa. 22 dk.",
      "Yıl": "1994",
      "metascore": "82",
      "imdb": "8.8/10",
      "Değerlendirme": "2300000"
    },
    "paragraf": "Forrest Gump, a naive and kind-hearted Alabama man, inadvertently influences several historical events in the 20th century USA through his sheer will and optimistic outlook on life."
  }
];

const ana_resim = "/images/ana_gorseller/gelmis_gecmis_en_iyi_10_film_karakteri_kapak.jpg" //! SEN DOLDUR
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