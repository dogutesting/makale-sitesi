
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function GeoffreyRushEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "geoffrey-rush-en-iyi-10-filmi";
const baslik = "Geoffrey Rush en iyi 10 filmi";
const metin = "Geoffrey Rush, sinema dünyasında iz bırakan performanslarıyla tanınır. Geoffrey Rush oynadığı filmler, izleyiciler üzerinde derin etkiler bırakmıştır. İşte Geoffrey Rush en iyi filmleri arasından seçtiğimiz ve sanatçının tiyatral yeteneğini sergilediği mükemmel yapımları derledik.";
const bitis_metin = "Bu yazımızda Geoffrey Rush'un en iyi filmlerini inceledik. Her biri sanatçının farklı yönlerini gösteren eserlerdi. Geoffrey Rush'un yetenekli oyunculuğuyla beyaz perdede hayat bulan bu filmler, izleyenler tarafından uzun süre unutulmayacak.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["geoffrey","rush","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:12:38+03:00";
const degistirilmeTarihi = "2024-08-16T16:12:38+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-10",
    "name": "Gods of Egypt - Mısır Tanrıları",
    "image": "/images/movies/Geoffrey_Rush_gods_of_egypt_-_misir_tanrilari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Lee Van Cleef",
        "Brenton Thwaites",
        "John Samaha"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "Alex Proyas",
      "imdb": "5.4/10",
      "Değerlendirme": "127376",
      "metacritic": "25"
    },
    "paragraf": "Gods of Egypt, mitolojik anlatımı ve görsel efektleriyle öne çıkan bir yapım. Geoffrey Rush, filmde güneş tanrısı Ra rolünde adeta parlıyor ve izleyicilerin beğenisini topluyor. Geoffrey Rush filmleri arasında farklı bir yere sahip olan bu yapım, ilginç hikayesiyle dikkat çekiyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-9",
    "name": "Pirates of the Caribbean: On Stranger Tides - Karayip Korsanları: Gizemli Denizlerde",
    "image": "/images/movies/Geoffrey_Rush_pirates_of_the_caribbean__on_stranger_tides_-_karayip_korsanlari__gizemli_denizlerde.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Johnny Depp",
        "Penélope Cruz"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2011",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "Rob Marshall",
      "imdb": "6.6/10",
      "Değerlendirme": "570263",
      "metacritic": "45"
    },
    "paragraf": "Karayip Korsanları serisinin bu filminde Geoffrey Rush, Kaptan Barbossa rolüyle karşımıza çıkıyor. Aksiyonu bol filmler arasında yer alan bu yapımda Rush, karakterine kattığı derinlikle izleyenlerden tam not almayı başarıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-8",
    "name": "Pirates of the Caribbean: Dead Men Tell No Tales - Karayip Korsanları: Salazar'ın İntikamı",
    "image": "/images/movies/Geoffrey_Rush_pirates_of_the_caribbean__dead_men_tell_no_tales_-_karayip_korsanlari__salazar'in_intikami.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Johnny Depp",
        "Javier Bardem"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Joachim Rønning",
      "imdb": "6.5/10",
      "Değerlendirme": "351673",
      "metacritic": "39"
    },
    "paragraf": "Geoffrey Rush, serinin bu bölümünde de Kaptan Barbossa olarak karşımıza çıkıyor. Geoffrey Rush en iyi filmleri arasında kabul edilen bu yapım, aksiyon ve macera dolu sahneleriyle izleyiciyi ekrana kilitliyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-7",
    "name": "Munich - Münih",
    "image": "/images/movies/Geoffrey_Rush_munich_-_munih.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Eric Bana",
        "Daniel Craig"
      ],
      "Kategori": [
        "Dram",
        "Tarihi"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 44 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.5/10",
      "Değerlendirme": "240778",
      "metacritic": "74"
    },
    "paragraf": "Steven Spielberg imzalı Münih filminde Geoffrey Rush, acı dolu bir hikayenin parçası olarak güçlü bir performans sergiliyor. Tarihi olayların ve gerilim dolu sahnelerin ön planda olduğu bu yapım, Geoffrey Rush'un filmografisinin başında geliyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-6",
    "name": "Elizabeth: The Golden Age - Elizabeth: Altın Çağ",
    "image": "/images/movies/Geoffrey_Rush_elizabeth__the_golden_age_-_elizabeth__altin_cag.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Cate Blanchett",
        "Jordi Mollà",
        "Aimee King"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 54 dk.",
      "Yönetmen": "Shekhar Kapur",
      "imdb": "6.8/10",
      "Değerlendirme": "75538",
      "metacritic": "45"
    },
    "paragraf": "Geoffrey Rush, Elizabeth: The Golden Age filminde Sir Francis Walsingham rolüyle karşımıza çıkıyor. Biyografik bir dram olarak öne çıkan bu yapım, Geoffrey Rush'un oyunculuk kariyerinde önemli bir yere sahip."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-5",
    "name": "Finding Nemo - Kayıp Balık Nemo",
    "image": "/images/movies/Geoffrey_Rush_finding_nemo_-_kayip_balik_nemo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Albert Brooks",
        "Ellen DeGeneres"
      ],
      "Kategori": [
        "Animasyon",
        "Macera"
      ],
      "Yıl": "2003",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "Andrew Stanton",
      "imdb": "8.2/10",
      "Değerlendirme": "1125391",
      "metacritic": "90"
    },
    "paragraf": "Animasyon dünyasının klasiklerinden Kayıp Balık Nemo, Geoffrey Rush'un seslendirme yeteneğini sergilediği mükemmel bir film. Rush, filmde Nigel adlı pelikanı seslendirerek izleyenlere keyifli anlar yaşatıyor. Geoffrey Rush oynadığı filmler içinde animasyon türünde nadir eserlerden biri."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-4",
    "name": "Shakespeare in Love - Aşık Shakespeare",
    "image": "/images/movies/Geoffrey_Rush_shakespeare_in_love_-_asik_shakespeare.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Joseph Fiennes",
        "Gwyneth Paltrow"
      ],
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Yıl": "1998",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "John Madden",
      "imdb": "7.1/10",
      "Değerlendirme": "235598",
      "metacritic": "87"
    },
    "paragraf": "Rush, Aşık Shakespeare filminde Philip Henslowe karakteriyle karşımıza çıkıyor. Film, Shakespeare dönemine eğlenceli bir bakış sunarken, Geoffrey Rush'un performansı ona Oscar ödülünü kazandırdı. Geoffrey Rush filmleri arasında önemli bir yer taşıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-3",
    "name": "The King's Speech - Zoraki Kral",
    "image": "/images/movies/Geoffrey_Rush_the_king's_speech_-_zoraki_kral.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Colin Firth",
        "Helena Bonham Carter"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Tom Hooper",
      "imdb": "8/10",
      "Değerlendirme": "711738",
      "metacritic": "88"
    },
    "paragraf": "Zoraki Kral, Geoffrey Rush'un Lionel Logue'u canlandırdığı hikayesiyle dikkat çekiyor. Film, Kral VI. George'un kekemelik sorununu aşma mücadelesini anlatıyor ve Rush'un etkileyici performansıyla unutulmaz bir hale geliyor. Geoffrey Rush en iyi filmleri dendiğinde akla gelen ilk isimlerden birisi."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-2",
    "name": "Quills - Düşlerin Efendisi",
    "image": "/images/movies/Geoffrey_Rush_quills_-_duslerin_efendisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Joaquin Phoenix",
        "Kate Winslet"
      ],
      "Kategori": [
        "Dram",
        "Tarihi"
      ],
      "Yıl": "2000",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Philip Kaufman",
      "imdb": "7.2/10",
      "Değerlendirme": "57073",
      "metacritic": "70"
    },
    "paragraf": "Quills, Marquis de Sade'ın yaşamına odaklanan cesur bir tarihi dram. Geoffrey Rush, filmdeki performansı ile izleyenleri büyülüyor. Geoffrey Rush oynadığı filmler arasında dikkat çeken bu yapım, aktörün yeteneklerini en iyi şekilde sergilediği filmlerden biri olarak öne çıkıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/geoffrey-rush-en-iyi-10-filmi#bolum-1",
    "name": "Shine - Parlaklık",
    "image": "/images/movies/Geoffrey_Rush_shine_-_parlaklik.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Geoffrey Rush",
        "Armin Mueller-Stahl",
        "Justin Braine"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "1996",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Scott Hicks",
      "imdb": "7.6/10",
      "Değerlendirme": "57053",
      "metacritic": "87"
    },
    "paragraf": "Parlaklık, Geoffrey Rush'un kariyerinde bir dönüm noktası. Film, piyanist David Helfgott'un hayatını konu alıyor. Geoffrey Rush, bu performansıyla En İyi Erkek Oyuncu dalında Oscar kazanarak sinema dünyasında unutulmaz bir yer edindi. Geoffrey Rush en iyi filmleri listesinde zirvede yer almasının nedenlerinden biri."
  }

];

const ana_resim = "/images/ana_gorseller/geoffrey-rush-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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