
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ViggoMortensenEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "viggo-mortensen-en-iyi-10-filmi";
const baslik = "Viggo Mortensen en iyi 10 filmi";
const metin = "Viggo Mortensen, hem yeteneği hem de çeşitliliği ile tanınan bir aktör. Kariyeri boyunca birçok farklı rolde yer aldı ve bu rollerle izleyiciyi büyüledi. Viggo Mortensen filmleri arasında en dikkat çekici olanları sizler için derledik. İşte Viggo Mortensen oynadığı filmler arasından seçtiğimiz en iyi 10 film.";
const bitis_metin = "Bu yazıda Viggo Mortensen'in kariyerindeki en önemli filmleri inceledik. Viggo Mortensen'in sinematik yolculuğunda bu filmler önemli dönüm noktaları oluşturmuştur. Umarız siz de Viggo Mortensen imdb sıralamalarını etkileyen bu harika yapımlardan keyif alırsınız.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["viggo","mortensen","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:25:30+03:00";
const degistirilmeTarihi = "2024-08-16T17:25:30+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-10",
    "name": "Captain Fantastic - Kaptan Fantastik",
    "image": "/images/movies/Viggo_Mortensen_captain_fantastic_-_kaptan_fantastik.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "George MacKay"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Matt Ross",
      "imdb": "7.8/10",
      "Değerlendirme": "237637",
      "metacritic": "72"
    },
    "paragraf": "Captain Fantastic, Viggo Mortensen en iyi filmleri arasında yer alıyor. Film, altı çocuğunu doğada izole bir şekilde yetiştirmeye çalışan bir babanın hikayesini anlatıyor. Viggo Mortensen, güçlü performansı ile Viggo Mortensen imdb puanını oldukça yükseltti. Bu filmdeki oyunculuğu ona Oscar adaylığı da getirdi."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-9",
    "name": "Eastern Promises - Şark Vaatleri",
    "image": "/images/movies/Viggo_Mortensen_eastern_promises_-_sark_vaatleri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "Josef Altin",
        "Mina E. Mina"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "David Cronenberg",
      "imdb": "7.6/10",
      "Değerlendirme": "263723",
      "metacritic": "83"
    },
    "paragraf": "Eastern Promises, David Cronenberg ortaklığı ile Viggo Mortensen en iyi filmi olabilecek yapımlardan biridir. Londra'nın yer altı dünyasını keşfeden bu film, oyunculuğuyla Viggo Mortensen imdb kullanıcılarının beğenisini kazandı. Viggo Mortensen, bu filmle Altın Küre'ye de aday gösterildi."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-8",
    "name": "A History of Violence - Şiddetin Tarihçesi",
    "image": "/images/movies/Viggo_Mortensen_a_history_of_violence_-_siddetin_tarihcesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "Maria Bello"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2005",
      "Süre": "1 sa. 36 dk.",
      "Yönetmen": "David Cronenberg",
      "imdb": "7.4/10",
      "Değerlendirme": "255672",
      "metacritic": "82"
    },
    "paragraf": "A History of Violence, Viggo Mortensen oynadığı filmler arasında en etkileyici olanlardan biri. David Cronenberg tarafından yönetilen bu film, bir ailenin başına gelen trajik olaylarla nasıl mücadele ettiğini anlatıyor. Viggo Mortensen'in bu filmdeki oyunculuğu, filmi izleyenler için unutulmaz kılıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-7",
    "name": "The Lord of the Rings: The Return of the King - Yüzüklerin Efendisi: Kralın Dönüşü",
    "image": "/images/movies/Viggo_Mortensen_the_lord_of_the_rings__the_return_of_the_king_-_yuzuklerin_efendisi__kralin_donusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "Noel Appleby",
        "Ali Astin"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "2003",
      "Süre": "3 sa. 21 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "9/10",
      "Değerlendirme": "2003837",
      "metacritic": "94"
    },
    "paragraf": "The Lord of the Rings serisinin son filmi, Viggo Mortensen en iyi filmleri arasında ilk sıralarda bulunur. Aragorn karakterine hayat veren Viggo Mortensen, izleyicileri büyüleyerek filmdeki performansı için geniş bir hayran kitlesi kazandı. Film, 11 Oscar ödülü alarak Viggo Mortensen imdb itibarı da arttı."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-6",
    "name": "The Lord of the Rings: The Two Towers - Yüzüklerin Efendisi: İki Kule",
    "image": "/images/movies/Viggo_Mortensen_the_lord_of_the_rings__the_two_towers_-_yuzuklerin_efendisi__iki_kule.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "Bruce Allpress",
        "Sean Astin"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "2002",
      "Süre": "2 sa. 59 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "8.8/10",
      "Değerlendirme": "1806808",
      "metacritic": "87"
    },
    "paragraf": "Viggo Mortensen'in yer aldığı bir diğer Yüzüklerin Efendisi filmi olan The Two Towers, Viggo Mortensen filmleri arasında ikonik bir yere sahiptir. Savaş sahneleri ve karakter derinlikleri ile bu film, Viggo Mortensen'in kariyerinde önemli bir dönüm noktası olmuş ve oyunculuğunu daha geniş kitlelere tanıtmıştır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-5",
    "name": "The Lord of the Rings: The Fellowship of the Ring - Yüzüklerin Efendisi: Yüzük Kardeşliği",
    "image": "/images/movies/Viggo_Mortensen_the_lord_of_the_rings__the_fellowship_of_the_ring_-_yuzuklerin_efendisi__yuzuk_kardesligi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "Alan Howard",
        "Noel Appleby"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 58 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "8.9/10",
      "Değerlendirme": "2032646",
      "metacritic": "92"
    },
    "paragraf": "Viggo Mortensen, The Fellowship of the Ring'deki Aragorn rolüyle dünya çapında tanındı. Viggo Mortensen oynadığı filmler arasında bu yapım, onun popülerliğini ve kariyerindeki yükselişini sağlayan bir başyapıt olarak kabul edilir. Film, bir fantezi klasiği olmasının yanı sıra Viggo Mortensen imdb puanına da katkı sağladı."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-4",
    "name": "Green Book - Yeşil Rehber",
    "image": "/images/movies/Viggo_Mortensen_green_book_-_yesil_rehber.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "Mahershala Ali"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Peter Farrelly",
      "imdb": "8.2/10",
      "Değerlendirme": "587852",
      "metacritic": "69"
    },
    "paragraf": "Green Book, Viggo Mortensen en iyi filmi olarak 3 Oscar ödülü kazandı. Sanatçının Stella Yıldırım rolü ile dikkat çektiği bu film Viggo Mortensen filmleri arasında hikaye derinliği ile öne çıkar. Filmde dostluk ve ırk ilişkileri üzerine önemli mesajlar veren bir anlatım sunulmuştur."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-3",
    "name": "The Road - Yol",
    "image": "/images/movies/Viggo_Mortensen_the_road_-_yol.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "Kodi Smit-McPhee"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 51 dk.",
      "Yönetmen": "John Hillcoat",
      "imdb": "7.2/10",
      "Değerlendirme": "256933",
      "metacritic": "64"
    },
    "paragraf": "The Road, post-apokaliptik bir dünyayı anlatan güçlü bir Viggo Mortensen filmi. Bir baba ve oğlunun hayatta kalma mücadelesini işleyen film, Viggo Mortensen'in kişisel performansıyla dikkat çekiyor. Bu yapım, Viggo Mortensen filmleri arasında izleyicilerden olumlu eleştiriler almış bir dramadır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-2",
    "name": "Hidalgo",
    "image": "/images/movies/Viggo_Mortensen_hidalgo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "Zuleikha Robinson"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "2004",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "Joe Johnston",
      "imdb": "6.7/10",
      "Değerlendirme": "86042",
      "metacritic": "54"
    },
    "paragraf": "Viggo Mortensen oynadığı filmlerden biri olan Hidalgo, gerçek bir hikayeden uyarlanmıştır. Mortensen, bu filmde bir uzak yol yarışçısını canlandırıyor. Film, Viggo Mortensen'in izleyicilere sunduğu unutulmaz performanslar arasında önemli bir yere sahiptir. Macera ve epik sahneleri ile Hidalgo, Viggo Mortensen en iyi filmleri arasında değerlendirilmektedir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/viggo-mortensen-en-iyi-10-filmibolum-1",
    "name": "Appaloosa",
    "image": "/images/movies/Viggo_Mortensen_appaloosa.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Viggo Mortensen",
        "Ed Harris"
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
    "paragraf": "Appaloosa, Viggo Mortensen en iyi filmi listesinde zirvede yer alan bir Vahşi Batı hikayesi. Mortensen, western türünde gösterdiği yetenekle adından söz ettirdi. Bu filmdeki rolü, onun oyunculuk yelpazesinin ne kadar geniş olduğunu bir kez daha kanıtladı. Appaloosa ile Viggo Mortensen filmleri arasındaki başarılarını perçinledi."
  }

];

const ana_resim = "/images/ana_gorseller/viggo-mortensen-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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