
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function HelenaBonhamCarterEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "helena-bonham-carter-en-iyi-10-filmi";
const baslik = "Helena Bonham Carter En İyi 10 Filmi";
const metin = "Helena Bonham Carter, sinema dünyasında benzersiz rolleri ve çarpıcı performanslarıyla tanınır. İster dram ister komedi olsun, her rolde etkileyici bir iz bırakmayı başarmıştır. Bu yazımızda, helena bonham carter filmleri arasında en iyilerini sizler için derledik.";
const bitis_metin = "Bu yazımızda helena bonham carter film listesinin en iyi 10 yapımını inceledik. Ona ait rollerin her biri izleyicide derin etkiler bırakıyor. Umarız sizin için faydalı olmuştur. Yeni keşiflerde görüşmek üzere!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["helena","bonham","carter","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:19:05+03:00";
const degistirilmeTarihi = "2024-08-09T17:19:05+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1077368",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-10",
    "name": "Dark Shadows - Karanlık Gölgeler",
    "image": "/images/movies/Helena_Bonham_Carter_dark_shadows_-_karanlik_golgeler.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "1 sa. 53 dk.",
      "Kategori": [
        "Komedi",
        "Fantezi"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Johnny Depp",
        "Eva Green"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "6.2/10",
      "Değerlendirme": "282243",
      "metacritic": "55"
    },
    "paragraf": "Tim Burton'ın yönetmenliğinde çekilen, helena bonham carter oynadığı filmlar arasında yer alan Dark Shadows, 1970'lerde geçen bir hikaye ile izleyiciye komedi ve fantezinin harmanlandığı bir deneyim sunuyor. Helena Bonham Carter, filmde Dr. Julia Hoffman karakterine hayat veriyor."
  },
  {
    "num": "9",
    "title_id": "tt1661199",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-9",
    "name": "Cinderella - Sindirella",
    "image": "/images/movies/Helena_Bonham_Carter_cinderella_-_sindirella.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "1 sa. 45 dk.",
      "Kategori": [
        "Aile",
        "Dram"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Lily James",
        "Cate Blanchett"
      ],
      "Yönetmen": "Kenneth Branagh",
      "imdb": "6.9/10",
      "Değerlendirme": "192000",
      "metascore": "67"
    },
    "paragraf": "Sindirella masalının bu modern uyarlamasında Helena Bonham Carter, iyi peri rolüyle büyüleyici bir performans sergiliyor. Bu film, helena bonham carter film listesi arasında ailecek izlenebilecek favoriler arasında yer alıyor."
  },
  {
    "num": "8",
    "title_id": "tt5164214",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-8",
    "name": "Ocean's 8 - Ocean's 8",
    "image": "/images/movies/Helena_Bonham_Carter_ocean's_8_-_ocean's_8.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Süre": "1 sa. 50 dk.",
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Sandra Bullock",
        "Cate Blanchett"
      ],
      "Yönetmen": "Gary Ross",
      "imdb": "6.3/10",
      "Değerlendirme": "245087",
      "metacritic": "61"
    },
    "paragraf": "Ocean’s 8, suç dünyasında kadınların da ne kadar yetenekli olduğunu gösteren bir başyapıt. Helena Bonham Carter, özgün bir tasarımcı olan Rose karakteriyle öne çıkıyor. Bu, helena bonham carter oynadığı filmler arasında zekice kurgulanmış bir yapım."
  },
  {
    "num": "7",
    "title_id": "tt1504320",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-7",
    "name": "The King's Speech - Zoraki Kral",
    "image": "/images/movies/Helena_Bonham_Carter_the_king's_speech_-_zoraki_kral.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "1 sa. 58 dk.",
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Colin Firth",
        "Geoffrey Rush"
      ],
      "Yönetmen": "Tom Hooper",
      "imdb": "8/10",
      "Değerlendirme": "711653",
      "metacritic": "88"
    },
    "paragraf": "Helena Bonham Carter, The King's Speech filminde Kraliçe Elizabeth karakterini canlandırıyor. Bu film, helena bonham carter film listesi içerisinde hem tarihsel hem de duygusal yönleriyle dikkat çekiyor."
  },
  {
    "num": "6",
    "title_id": "tt0408236",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-6",
    "name": "Sweeney Todd: The Demon Barber of Fleet Street - Sweeney Todd: Fleet Sokağının Şeytan Berberi",
    "image": "/images/movies/Helena_Bonham_Carter_sweeney_todd__the_demon_barber_of_fleet_street_-_sweeney_todd__fleet_sokaginin_seytan_berberi.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "1 sa. 56 dk.",
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Johnny Depp",
        "Alan Rickman"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "7.3/10",
      "Değerlendirme": "389453",
      "metacritic": "83"
    },
    "paragraf": "Sweeney Todd, helena bonham carter filmleri arasında kesinlikle izlenmesi gereken bir müzikal dramadır. Helena, bu filmde Bayan Lovett karakterini canlandırıyor ve performansıyla büyülüyor."
  },
  {
    "num": "5",
    "title_id": "tt0319061",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-5",
    "name": "Big Fish - Büyük Balık",
    "image": "/images/movies/Helena_Bonham_Carter_big_fish_-_buyuk_balik.jpg",
    "ozellikler": {
      "Yıl": "2003",
      "Süre": "2 sa. 5 dk.",
      "Kategori": [
        "Macera",
        "Dram"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Ewan McGregor",
        "Albert Finney"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "8/10",
      "Değerlendirme": "461644",
      "metacritic": "58"
    },
    "paragraf": "Helena Bonham Carter, Tim Burton'un yönettiği bu filmde sadelik ve sihir arasındaki kusursuz dengeyi yakalıyor. Büyük Balık, helena bonham carter film listesi içinde unutulmaz bir yapım."
  },
  {
    "num": "4",
    "title_id": "tt1014759",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-4",
    "name": "Alice in Wonderland - Alis Harikalar Diyarında",
    "image": "/images/movies/Helena_Bonham_Carter_alice_in_wonderland_-_alis_harikalar_diyarinda.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "1 sa. 48 dk.",
      "Kategori": [
        "Aile",
        "Fantastik"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Johnny Depp",
        "Mia Wasikowska"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "6.4/10",
      "Değerlendirme": "444757",
      "metacritic": "53"
    },
    "paragraf": "Helena Bonham Carter'ın Kızıl Kraliçe rolüyle karşımıza çıktığı Alice in Wonderland, izleyiciyi fantastik bir dünyaya sürüklüyor. Bu film, helena bonham carter oynadığı filmler arasında dikkat çeken bir fantastik yapım."
  },
  {
    "num": "3",
    "title_id": "tt0091867",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-3",
    "name": "A Room with a View - Manzaralı Bir Oda",
    "image": "/images/movies/Helena_Bonham_Carter_a_room_with_a_view_-_manzarali_bir_oda.jpg",
    "ozellikler": {
      "Yıl": "1985",
      "Süre": "1 sa. 57 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Maggie Smith",
        "Daniel Day-Lewis"
      ],
      "Yönetmen": "James Ivory",
      "imdb": "7.2/10",
      "Değerlendirme": "48464",
      "metacritic": "83"
    },
    "paragraf": "Manzaralı Bir Oda, helena bonham carter filmleri arasında derin duyguları ve dönemsel atmosferti başarılı bir şekilde aktaran bir yapım. Helena'nın Lucy karakteri zamansız bir güzellik ve trajediyi anlatıyor."
  },
  {
    "num": "2",
    "title_id": "tt0137523",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-2",
    "name": "Fight Club - Dövüş Kulübü",
    "image": "/images/movies/Helena_Bonham_Carter_fight_club_-_dovus_kulubu.jpg",
    "ozellikler": {
      "Yıl": "1999",
      "Süre": "2 sa. 19 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Brad Pitt",
        "Edward Norton"
      ],
      "Yönetmen": "David Fincher",
      "imdb": "8.8/10",
      "Değerlendirme": "2359355",
      "metacritic": "67"
    },
    "paragraf": "Fight Club, helena bonham carter film listesi arasında kült statüsüne ulaşmış bir başyapıt. Helena, Marla Singer olarak kaotik ve unutulmaz bir karaktere hayat veriyor, bu filmi izlenmesi gerekenler listesinde üst sıralara taşıyor."
  },
  {
    "num": "1",
    "title_id": "tt0120520",
    "url": "https://enonlar.com/helena-bonham-carter-en-iyi-10-filmi#bolum-1",
    "name": "The Wings of the Dove - Güvercinin Kanatları",
    "image": "/images/movies/Helena_Bonham_Carter_the_wings_of_the_dove_-_guvercinin_kanatlari.jpg",
    "ozellikler": {
      "Yıl": "1997",
      "Süre": "1 sa. 42 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Helena Bonham Carter",
        "Linus Roache",
        "Alison Elliott"
      ],
      "Yönetmen": "Iain Softley",
      "imdb": "7.1/10",
      "Değerlendirme": "13111",
      "metacritic": "73"
    },
    "paragraf": "Güvercinin Kanatları, helena bonham carter filmleri arasında duygusal derinliği ve güçlü anlatımıyla öne çıkan bir yapım. Bonham Carter'ın başroldeki etkileyici performansı, bu filmi unutulmaz bir seyir deneyimi haline getiriyor."
  }

];

const ana_resim = "/images/ana_gorseller/helena-bonham-carter-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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