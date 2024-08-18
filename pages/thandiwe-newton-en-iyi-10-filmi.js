
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ThandiweNewtonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "thandiwe-newton-en-iyi-10-filmi";
const baslik = "Thandiwe Newton en iyi 10 filmi";
const metin = "Thandiwe Newton, yeteneğiyle pek çok filmde izleyicilere unutulmaz anlar yaşatmıştır. Thandiwe Newton filmleri arasında birçok başarılı yapım bulunmaktadır. Bu yazıda, Thandiwe Newton'un oynadığı filmler arasından en iyi 10 tanesini sizler için derledik.";
const bitis_metin = "Bu yazımızda, Thandiwe Newton'un en iyi 10 filmini sizler için inceledik. Thandiwe Newton filmleri, sinema severler için gerçek birer hazine. Bu başarılı oyuncunun kariyerindeki parıltılı yapımları izlemekten keyif alacağınıza eminiz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["thandiwe","newton","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:40:55+03:00";
const degistirilmeTarihi = "2024-08-16T16:40:55+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-10",
    "name": "The Truth About Charlie - Charlie Hakkındaki Gerçek",
    "image": "/images/movies/Thandiwe_Newton_the_truth_about_charlie_-_charlie_hakkindaki_gercek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Olga Sékulic",
        "Stephen Dillane"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Jonathan Demme",
      "imdb": "4.7/10",
      "Değerlendirme": "11094",
      "metacritic": "55"
    },
    "paragraf": "The Truth About Charlie, 2002 yapımı bir gerilim filmidir. Thandiwe Newton, filmdeki performansıyla dikkat çekmektedir. Filmde, kocasının ölümünün ardından karmaşık bir bulmacayı çözmeye çalışan bir kadının hikayesi anlatılmaktadır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-9",
    "name": "Beloved - Sevgili",
    "image": "/images/movies/Thandiwe_Newton_beloved_-_sevgili.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Yada Beener",
        "Emil Pinnock"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1998",
      "Süre": "2 sa. 52 dk.",
      "Yönetmen": "Jonathan Demme",
      "imdb": "6/10",
      "Değerlendirme": "9637",
      "metacritic": "58"
    },
    "paragraf": "Beloved, Toni Morrison'un aynı adlı romanından uyarlanmıştır. Thandiwe Newton, bu dramatik filmde güçlü bir performans sergileyerek izleyicilere duygu dolu anlar yaşatmaktadır. Film, zor bir geçmişe sahip bir kadının yaşamını ele almaktadır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-8",
    "name": "The Pursuit of Happyness - Umudunu Kaybetme",
    "image": "/images/movies/Thandiwe_Newton_the_pursuit_of_happyness_-_umudunu_kaybetme.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Will Smith",
        "Jaden Smith"
      ],
      "Kategori": [
        "Biyografi/Dram"
      ],
      "Yıl": "2006",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Gabriele Muccino",
      "imdb": "8/10",
      "Değerlendirme": "569157",
      "metacritic": "64"
    },
    "paragraf": "The Pursuit of Happyness, gerçek bir yaşam öyküsünü konu alan duygusal bir filmdir. Thandiwe Newton, başrolde Will Smith ile birlikte etkileyici bir performans sergilemektedir. Film, bir babanın oğluyla zorluklarla dolu mücadele dolu hikayesini anlatmakta."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-7",
    "name": "Mission: Impossible 2 - Görevimiz Tehlike 2",
    "image": "/images/movies/Thandiwe_Newton_mission__impossible_2_-_gorevimiz_tehlike_2.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Tom Cruise",
        "Dougray Scott"
      ],
      "Kategori": [
        "Aksiyon/Macera"
      ],
      "Yıl": "2000",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "John Woo",
      "imdb": "6.1/10",
      "Değerlendirme": "381179",
      "metacritic": "59"
    },
    "paragraf": "Mission: Impossible 2, Tom Cruise'un başrolde olduğu ünlü aksiyon serisinin ikinci filmidir. Thandiwe Newton, bu filmde aksiyon dolu sahnelerle dikkat çekmektedir. Aksiyonun ve harika sahnelerin bol olduğu bu filmde, Newton'un performansı göz alıcı."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-6",
    "name": "The Chronicles of Riddick - Riddick Günlükleri",
    "image": "/images/movies/Thandiwe_Newton_the_chronicles_of_riddick_-_riddick_gunlukleri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Vin Diesel",
        "Colm Feore"
      ],
      "Kategori": [
        "Bilim Kurgu/Aksiyon"
      ],
      "Yıl": "2004",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "David Twohy",
      "imdb": "6.6/10",
      "Değerlendirme": "243871",
      "metacritic": "38"
    },
    "paragraf": "The Chronicles of Riddick, Vin Diesel'in başrolde olduğu bir bilim kurgu aksiyon filmidir. Thandiwe Newton, filmdeki karanlık ve çekici karakteriyle büyülüyor. Riddick evreninde geçen bu macera dolu hikaye, bilim kurgu severlerin ilgisini çekiyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-5",
    "name": "Solo: A Star Wars Story - Han Solo: Bir Star Wars Hikayesi",
    "image": "/images/movies/Thandiwe_Newton_solo__a_star_wars_story_-_han_solo__bir_star_wars_hikayesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Alden Ehrenreich",
        "Joonas Suotamo"
      ],
      "Kategori": [
        "Aksiyon/Fantastik"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 15 dk.",
      "Yönetmen": "Ron Howard",
      "imdb": "6.9/10",
      "Değerlendirme": "384534",
      "metacritic": "62"
    },
    "paragraf": "Solo: A Star Wars Story, Star Wars evreninde Han Solo'nun gençliğini ele alan bir spin-off filmidir. Thandiwe Newton, filmdeki rolüyle aksiyonun merkezinde yer almaktadır. Bu epik macera filmi, Star Wars hayranları için bir ziyafet niteliğinde."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-4",
    "name": "Gringo",
    "image": "/images/movies/Thandiwe_Newton_gringo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Joel Edgerton",
        "Charlize Theron"
      ],
      "Kategori": [
        "Komedi/Aksiyon"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 51 dk.",
      "Yönetmen": "Nash Edgerton",
      "imdb": "6.1/10",
      "Değerlendirme": "32430",
      "metacritic": "46"
    },
    "paragraf": "Gringo, aksiyon ve komediyi harmanlayan eğlenceli bir film olarak dikkat çekiyor. Thandiwe Newton, bu filmde izleyicilere keyifli anlar yaşatıyor. Film, bir Amerikan iş adamının Meksika'da yaşadığı eğlenceli ve tehlikeli macerayı konu alıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-3",
    "name": "Crash - Çarpışma",
    "image": "/images/movies/Thandiwe_Newton_crash_-_carpisma.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Karina Arroyave",
        "Dato Bakhtadze"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2004",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Paul Haggis",
      "imdb": "7.7/10",
      "Değerlendirme": "450878",
      "metacritic": "66"
    },
    "paragraf": "Crash, Los Angeles'teki birbirine bağlı olayları işleyen ödüllü bir dram filmidir. Thandiwe Newton, filmdeki etkileyici performansıyla öne çıkmaktadır. Film, insan ilişkilerinin karmaşıklığını ve toplumsal meseleleri çarpıcı bir şekilde ele alır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-2",
    "name": "W.",
    "image": "/images/movies/Thandiwe_Newton_w..jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Josh Brolin",
        "Colin Hanks"
      ],
      "Kategori": [
        "Biyografi/Dram"
      ],
      "Yıl": "2008",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Oliver Stone",
      "imdb": "6.3/10",
      "Değerlendirme": "50266",
      "metacritic": "56"
    },
    "paragraf": "W. filmi, ABD'nin 43. Başkanı George W. Bush'un hayatını konu alır. Thandiwe Newton, filmde etkileyici bir performans sergiliyor. Oliver Stone yönetmenliğindeki film, Bush'un hayatındaki önemli dönüm noktalarını ele alarak izleyicilere sunmaktadır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/thandiwe-newton-en-iyi-10-filmibolum-1",
    "name": "Westworld",
    "image": "/images/movies/Thandiwe_Newton_westworld.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Thandiwe Newton",
        "Lee Van Cleef",
        "Jeffrey Wright"
      ],
      "Kategori": [
        "Bilim Kurgu/Dram"
      ],
      "Yıl": "2016",
      "Süre": "1 sa.",
      "Yönetmen": "Richard J. Lewis",
      "imdb": "8.5/10",
      "Değerlendirme": "537851"
    },
    "paragraf": "Westworld, insanların ve robotların karmaşık dünyalarını keşfeden bir bilim kurgu dizisidir. Thandiwe Newton, dizide canlandırdığı Maeve karakteriyle adından sıkça söz ettirmiştir. Dizi, hem görsel şölen hem de etkileyici hikayesiyle büyüler."
  }

];

const ana_resim = "/images/ana_gorseller/thandiwe-newton-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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