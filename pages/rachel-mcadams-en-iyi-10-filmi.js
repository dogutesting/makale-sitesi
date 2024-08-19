
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RachelMcadamsEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "rachel-mcadams-en-iyi-10-filmi";
const baslik = "Rachel McAdams En İyi 10 Filmi";
const metin = "Rachel McAdams'ın kariyeri boyunca birçok unutulmaz filmde rol aldığını biliyoruz. rachel mcadams en iyi filmleri arasında izleyici tarafından beğenilen birçok yapım bulunuyor. Bu yazıda, rachel mcadams filmleri arasından en iyi 10 tanesini sizler için derledik.";
const bitis_metin = "Bu yazımızda, Rachel McAdams'ın en iyi filmleri arasında kabul edilen 10 harika yapımı inceledik. Her biri farklı türlerde, farklı hikayeler sunarak izleyicilere muhteşem performanslar vaat ediyor. Umarız bu filmleri izlemekten keyif alırsınız.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["rachel","mcadams","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:27:40+03:00";
const degistirilmeTarihi = "2024-08-09T17:27:40+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt2704998",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-10",
    "name": "Game Night - Oyun Gecesi",
    "image": "/images/movies/Rachel_McAdams_game_night_-_oyun_gecesi.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Süre": "1 sa. 40 dk.",
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Jason Bateman"
      ],
      "Yönetmen": "John Francis Daley",
      "imdb": "6.9/10",
      "Değerlendirme": "258394",
      "metacritic": "66"
    },
    "paragraf": "Game Night - Oyun Gecesi, Rachel McAdams ve Jason Bateman'ın başrollerini paylaştığı, komedi ve suç türünde bir film. rachel mcadams filmleri arasındaki bu eğlenceli yapımda, çift arkadaşlarıyla birlikte bir oyun gecesi düzenlerken, olaylar gerçek bir suç hikayesine dönüşür. rachel mcadams en iyi filmleri arasında yer alan Game Night, sürükleyici senaryosuyla keyifli bir izleme deneyimi sunuyor."
  },
  {
    "num": "9",
    "title_id": "tt2194499",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-9",
    "name": "About Time - Zamanda Aşk",
    "image": "/images/movies/Rachel_McAdams_about_time_-_zamanda_ask.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "2 sa. 3 dk.",
      "Kategori": [
        "Komedi",
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Domhnall Gleeson"
      ],
      "Yönetmen": "Richard Curtis",
      "imdb": "7.8/10",
      "Değerlendirme": "393608",
      "metacritic": "55"
    },
    "paragraf": "About Time - Zamanda Aşk, aşk ve zaman yolculuğunun harmanlandığı duygusal bir hikaye sunuyor. McAdams, rachel mcadams en iyi filmleri arasında kabul edilen bu yapımda, aşk dolu bir hikayenin parçası oluyor. Film, zamanın değerini anlatan ve doğru kararlar almanın önemini vurgulayan bir yapım olarak öne çıkıyor."
  },
  {
    "num": "8",
    "title_id": "tt1126618",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-8",
    "name": "Morning Glory - Sabah Neşesi",
    "image": "/images/movies/Rachel_McAdams_morning_glory_-_sabah_nesesi.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "1 sa. 47 dk.",
      "Kategori": [
        "Komedi",
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Harrison Ford"
      ],
      "Yönetmen": "Roger Michell",
      "imdb": "6.5/10",
      "Değerlendirme": "83948",
      "metacritic": "57"
    },
    "paragraf": "Morning Glory - Sabah Neşesi, Rachel McAdams'ın doyumsuz bir performans sergilediği, eğlenceli bir komedi yapımıdır. rachel mcadams filmleri arasında yer alan bu filmde, genç bir televizyon yapımcısının, düşen reytingleri kurtarmak için verdiği mücadele konu alınır. Eğlenceli senaryosu ve güçlü oyuncu kadrosuyla dikkat çeken bir yapım."
  },
  {
    "num": "7",
    "title_id": "tt0421239",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-7",
    "name": "Red Eye - Kırmızı Göz",
    "image": "/images/movies/Rachel_McAdams_red_eye_-_kirmizi_goz.jpg",
    "ozellikler": {
      "Yıl": "2005",
      "Süre": "1 sa. 25 dk.",
      "Kategori": [
        "Gerilim",
        "Aksiyon"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Cillian Murphy"
      ],
      "Yönetmen": "Wes Craven",
      "imdb": "6.5/10",
      "Değerlendirme": "146941",
      "metacritic": "71"
    },
    "paragraf": "Red Eye - Kırmızı Göz, Wes Craven yönetmenliğinde, gerilim dolu sahneleriyle nefes kesiyor. rachel mcadams en iyi filmleri arasında yer alan bu yapım, seyahat sırasında bir uçuşun nasıl hayatta kalma mücadelesine dönüştüğünü işler. Rachel McAdams, performansıyla göz dolduruyor ve izleyicileri ekrana kilitliyor."
  },
  {
    "num": "6",
    "title_id": "tt1211837",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-6",
    "name": "Doctor Strange - Doktor Strange",
    "image": "/images/movies/Rachel_McAdams_doctor_strange_-_doktor_strange.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "1 sa. 55 dk.",
      "Kategori": [
        "Aksiyon",
        "Fantastik"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Benedict Cumberbatch"
      ],
      "Yönetmen": "Scott Derrickson",
      "imdb": "7.5/10",
      "Değerlendirme": "816244",
      "metacritic": "72"
    },
    "paragraf": "Doctor Strange - Doktor Strange, Marvel Sinematik Evreni'ne yeni bir boyut kazandıran, aksiyonu bol filmler arasında yer alıyor. Rachel McAdams, burada güçlü oyuncu kadrosuyla birlikte etkileyici bir performans sergiliyor. Film, görsel efektleri ve hikaye anlatımı ile izleyicileri bambaşka bir dünyaya götürüyor."
  },
  {
    "num": "5",
    "title_id": "tt0356680",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-5",
    "name": "The Family Stone - Aile Bağları",
    "image": "/images/movies/Rachel_McAdams_the_family_stone_-_aile_baglari.jpg",
    "ozellikler": {
      "Yıl": "2005",
      "Süre": "1 sa. 43 dk.",
      "Kategori": [
        "Komedi",
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Sarah Jessica Parker"
      ],
      "Yönetmen": "Thomas Bezucha",
      "imdb": "6.3/10",
      "Değerlendirme": "75639",
      "metacritic": "56"
    },
    "paragraf": "The Family Stone - Aile Bağları, rachel mcadams filmleri arasında bir diğer etkileyici yapım olarak karşımıza çıkıyor. Film, bir ailenin tatil döneminde bir araya gelmesiyle yaşadığı komik ve duygusal olayları konu alıyor. Rachel McAdams, filmdeki karakteriyle izleyiciye samimi ve doğal bir performans sunuyor."
  },
  {
    "num": "4",
    "title_id": "tt1605783",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-4",
    "name": "Midnight in Paris - Paris'te Gece Yarısı",
    "image": "/images/movies/Rachel_McAdams_midnight_in_paris_-_paris'te_gece_yarisi.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 34 dk.",
      "Kategori": [
        "Komedi",
        "Fantastik",
        "Romantik"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Owen Wilson"
      ],
      "Yönetmen": "Woody Allen",
      "imdb": "7.6/10",
      "Değerlendirme": "452864",
      "metacritic": "81"
    },
    "paragraf": "Midnight in Paris, rachel mcadams en iyi filmleri arasında kendine özgü bir yere sahip. Woody Allen'ın büyülü anlatımıyla, Paris'te geçen masalsı hikayede McAdams, duygusal ve gizemli bir yolculuğa çıkıyor. Film, izleyicilere sanat ve aşkın kesiştiği büyülü bir dünya sunuyor."
  },
  {
    "num": "3",
    "title_id": "tt1895587",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-3",
    "name": "Spotlight - Spotlight",
    "image": "/images/movies/Rachel_McAdams_spotlight_-_spotlight.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "2 sa. 8 dk.",
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Michael Keaton"
      ],
      "Yönetmen": "Tom McCarthy",
      "imdb": "8.1/10",
      "Değerlendirme": "506164",
      "metacritic": "93"
    },
    "paragraf": "Spotlight, gazetecilerin Katolik Kilisesi'ndeki istismar olaylarını ortaya çıkarmaya çalışan gerçek bir hikayeyi anlatıyor. Rachel McAdams, filmdeki güçlü oyunculuğuyla rachel mcadams filmleri içinde önemli bir yer tutan bu yapımda hakkından söz ettiriyor. Spotlight, toplumsal bir sorunu gözler önüne seren etkileyici bir dram."
  },
  {
    "num": "2",
    "title_id": "tt0332280",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-2",
    "name": "The Notebook - Not Defteri",
    "image": "/images/movies/Rachel_McAdams_the_notebook_-_not_defteri.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "2 sa. 3 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Ryan Gosling"
      ],
      "Yönetmen": "Nick Cassavetes",
      "imdb": "7.8/10",
      "Değerlendirme": "629662",
      "metacritic": "53"
    },
    "paragraf": "The Notebook - Not Defteri, rachel mcadams en iyi filmleri arasında bir klasik haline gelmiştir. McAdams'ın Ryan Gosling ile mükemmel bir çift oluşturduğu filmde, aşkın ve fedakarlığın gücü ön planda. Film, duygusal derinliği ve unutulmaz sahneleriyle izleyicileri büyülemeye devam ediyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/rachel-mcadams-en-iyi-10-filmi#bolum-1",
    "title_id": "tt0377092",
    "name": "Mean Girls - Kötü Kızlar",
    "image": "/images/movies/Rachel_McAdams_mean_girls_-_kotu_kizlar.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "1 sa. 37 dk.",
      "Kategori": [
        "Komedi"
      ],
      "Oyuncular": [
        "Rachel McAdams",
        "Lindsay Lohan"
      ],
      "Yönetmen": "Mark Waters",
      "imdb": "7.1/10",
      "Değerlendirme": "442821",
      "metacritic": "66"
    },
    "paragraf": "Mean Girls - Kötü Kızlar, gençlik filmlerinin en ikoniklerinden biri olarak bilinir. Rachel McAdams, bu filmdeki rolüyle geniş bir hayran kitlesi kazanmıştır. rachel mcadams filmleri arasında zirvede bulunan bu yapım, gençlik sorunlarını mizahi bir dille ele alıyor. Eğlenceli ve unutulmaz bir film."
  }

];

const ana_resim = "/images/ana_gorseller/rachel-mcadams-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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