
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function LiamNeesonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "liam-neeson-en-iyi-10-filmi";
const baslik = "Liam Neeson en iyi 10 filmi";
const metin = "Liam Neeson, yeteneği ve karizmasıyla birçok unutulmaz filmde yer almış bir aktördür. Bu listemizde, başarılarıyla adından sıkça söz ettiren Liam Neeson'un en iyi filmlerini derledik. Aksiyon, dram ve gerilim türünde birçok başarılı yapım bulunmakta. İşte Liam Neeson en iyi filmleri karşınızda.";
const bitis_metin = "Bu yazımızda Liam Neeson'un oynadığı ve başarısını pekiştiren Liam Neeson filmleri arasında en dikkat çekici olanları inceledik. Her bir film, Neeson'un oyunculuk yeteneğini ve karizmasını gözler önüne seriyor. Keyifli izlemeler dileriz!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["liam","neeson","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:50:01+03:00";
const degistirilmeTarihi = "2024-08-16T16:50:01+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-10",
    "name": "The Grey - Gri Kurt",
    "image": "/images/movies/Liam_Neeson_the_grey_-_gri_kurt.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Frank Grillo"
      ],
      "Kategori": [
        "Dram",
        "Macera"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Joe Carnahan",
      "imdb": "6.7/10",
      "Değerlendirme": "265061",
      "metacritic": "64"
    },
    "paragraf": "Liam Neeson, The Grey filminde hayatını kurtarmak için Alaska'nın dondurucu soğuğunda hayatta kalma mücadelesi veren bir adamı canlandırıyor. Bu filmde, Neeson'un karakteri doğa ve kurtlarla başa çıkarak etkileyici bir performans sergiliyor. Liam Neeson filmleri arasında etkileyici bir yapım olarak dikkat çekiyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-9",
    "name": "Non-Stop - Durmaksızın",
    "image": "/images/movies/Liam_Neeson_non-stop_-_durmaksizin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Julianne Moore"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Jaume Collet-Serra",
      "imdb": "6.9/10",
      "Değerlendirme": "277995",
      "metacritic": "56"
    },
    "paragraf": "Non-Stop filminde Liam Neeson, bir havayolu güvenlik görevlisini canlandırarak, uçuş esnasında ortaya çıkan bir kaçırma tehdidine karşı durur. Gerilim dolu bu filmde, Neeson yine muazzam bir performans gösteriyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-8",
    "name": "The A-Team - A Takımı",
    "image": "/images/movies/Liam_Neeson_the_a-team_-_a_takimi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Bradley Cooper"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Joe Carnahan",
      "imdb": "6.7/10",
      "Değerlendirme": "270267",
      "metacritic": "47"
    },
    "paragraf": "Liam Neeson The A-Team filminde, özel yeteneklere sahip kaçak askerlerden oluşan bir ekibin lideri olarak göz dolduruyor. Film, ekip üyelerinin suçsuz olduklarını kanıtlamak için girdikleri aksiyon dolu maceralarını anlatır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-7",
    "name": "Run All Night - Gece Takibi",
    "image": "/images/movies/Liam_Neeson_run_all_night_-_gece_takibi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Ed Harris"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 54 dk.",
      "Yönetmen": "Jaume Collet-Serra",
      "imdb": "6.6/10",
      "Değerlendirme": "115677",
      "metacritic": "59"
    },
    "paragraf": "Liam Neeson'ın, Run All Night filminde oğlu ve kendisi için geçmişiyle hesaplaşmak zorunda kalan bir kiralık katili oynadığı filmde, heyecan dolu anlar izleyiciyi büyülüyor. Neeson'un performansı bu filmde de göz kamaştırıcı."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-6",
    "name": "Cold Pursuit - Soğuk İntikam",
    "image": "/images/movies/Liam_Neeson_cold_pursuit_-_soguk_intikam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Laura Dern"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2019",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Hans Petter Moland",
      "imdb": "6.2/10",
      "Değerlendirme": "78965",
      "metacritic": "57"
    },
    "paragraf": "Cold Pursuit filminde Liam Neeson, oğlunun ölümünü araştıran ve intikam almayı kafasına koymuş bir kar temizleyici rolünde. Karla kaplı dağlarda, güçlü bir öfke ve intikam hırsıyla sürükleyici bir film sunuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-5",
    "name": "The Commuter - Yolcu",
    "image": "/images/movies/Liam_Neeson_the_commuter_-_yolcu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Vera Farmiga"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Jaume Collet-Serra",
      "imdb": "6.3/10",
      "Değerlendirme": "126652",
      "metacritic": "56"
    },
    "paragraf": "Liam Neeson, günlük hayatında trenle seyahat eden bir iş adamıyken, bir yolculuk sırasında istemeden bir suç komplosunun ortasına düşer. The Commuter filminde Neeson, yine heyecan dolu bir performans sunarak ekranları büyülüyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-4",
    "name": "A Monster Calls - Canavarın Çağrısı",
    "image": "/images/movies/Liam_Neeson_a_monster_calls_-_canavarin_cagrisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Lewis MacDougall",
        "Sigourney Weaver"
      ],
      "Kategori": [
        "Fantastik",
        "Dram"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "J.A. Bayona",
      "imdb": "7.4/10",
      "Değerlendirme": "94551",
      "metacritic": "76"
    },
    "paragraf": "A Monster Calls filmi, genç bir çocuğun, annesinin ölümüne yaklaştığı dönemde gizemli bir canavarla tanışmasını konu alır. Liam Neeson bu canavara ses vererek, filme derinlik ve duygusallık katıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-4",
    "name": "The Ice Road - Buz Yolu",
    "image": "/images/movies/Liam_Neeson_the_ice_road_-_buz_yolu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Laurence Fishburne",
        "Marcus Thomas"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2021",
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Jonathan Hensleigh",
      "imdb": "5.6/10",
      "Değerlendirme": "49017",
      "metacritic": "42"
    },
    "paragraf": "The Ice Road, Liam Neeson'ın zorlu bir kurtarma görevinde olduğu ve Kuzey Kanada'nın buzlu yollarında geçen bir aksiyon gerilim filmi. Neeson'ın performansı, filmdeki tehlikeli ve heyecanlı durumları etkili bir şekilde yansıtıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-2",
    "name": "Schindler's List - Schindler'in Listesi",
    "image": "/images/movies/Liam_Neeson_schindler's_list_-_schindler'in_listesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Ben Kingsley"
      ],
      "Kategori": [
        "Dram",
        "Tarihi"
      ],
      "Yıl": "1993",
      "Süre": "3 sa. 15 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "9/10",
      "Değerlendirme": "1468938",
      "metacritic": "95"
    },
    "paragraf": "Liam Neeson'ın Oscar Schindler rolünde izleyicilerin takdirini kazandığı Schindler's List, II. Dünya Savaşı sırasında Yahudi işçilerin hayatını kurtarmak için gösterdiği çabanın dokunaklı hikayesini anlatıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/liam-neeson-en-iyi-10-filmi#bolum-1",
    "name": "Taken - 96 Saat",
    "image": "/images/movies/Liam_Neeson_taken_-_96_saat.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Liam Neeson",
        "Maggie Grace"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 30 dk.",
      "Yönetmen": "Pierre Morel",
      "imdb": "7.7/10",
      "Değerlendirme": "640611",
      "metacritic": "51"
    },
    "paragraf": "Taken, kızını kurtarmak için zorlu bir mücadeleye girişen eski bir CIA ajanını canlandıran Liam Neeson'ın kariyerinin en tanınmış rollerinden birini sunuyor. İşte Liam Neeson en iyi filmi diyenlerin hata yapmadığı bir başyapıt."
  }

];

const ana_resim = "/images/ana_gorseller/liam-neeson-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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