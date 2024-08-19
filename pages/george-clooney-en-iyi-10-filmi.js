
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function GeorgeClooneyEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "george-clooney-en-iyi-10-filmi";
const baslik = "George Clooney en iyi 10 filmi";
const metin = "George Clooney, Hollywood'un en sevilen ve başarılı aktörlerinden biridir. Yıllardır birçok projede yer alan Clooney, kariyerinde unutulmaz filmlere imza atmıştır. İşte, onun filmografisinden derlediğimiz George Clooney filmleri listesi: george clooney en iyi filmleri.";
const bitis_metin = "Bu yazımızda, George Clooney'nin film kariyerindeki en iyi yapımları derledik. Clooney'nin yeteneği ve seçtiği projelerle bizlere sunduğu bu harika filmler, izleyiciler için unutulmaz bir deneyim olmaya devam edecek.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["george","clooney'nin","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:24:42+03:00";
const degistirilmeTarihi = "2024-08-09T17:24:42+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-10",
    "name": "The Monuments Men - Hazine Avcıları",
    "image": "/images/movies/george_clooney_the_monuments_men_-_hazine_avcilari.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 58 dk.",
      "Kategori": [
        "Dram",
        "Savaş"
      ],
      "Oyuncular": [
        "George Clooney",
        "Matt Damon"
      ],
      "Yönetmen": "George Clooney",
      "imdb": "6.1/10",
      "Değerlendirme": "143000",
      "metascore": "52"
    },
    "paragraf": "The Monuments Men, 2014 yılında vizyona giren tarihi drama türündeki bir film. George Clooney'nin hem yönettiği hem de başrolünde yer aldığı bu film, II. Dünya Savaşı sırasında sanat eserlerini korumak için görevlendirilen bir ekibin hikayesini anlatıyor. Clooney, yeteneğiyle izleyicileri kendine hayran bırakmayı başarır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-9",
    "name": "Burn After Reading - Aramızda Casus Var",
    "image": "/images/movies/george_clooney_burn_after_reading_-_aramizda_casus_var.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "1 sa. 36 dk.",
      "Kategori": [
        "Komedi",
        "Gerilim"
      ],
      "Oyuncular": [
        "George Clooney",
        "Brad Pitt"
      ],
      "Yönetmen": "Joel Coen, Ethan Coen",
      "imdb": "7.0/10",
      "Değerlendirme": "357000",
      "metascore": "63"
    },
    "paragraf": "Joel ve Ethan Coen'in yönetmenliğinde çekilen Burn After Reading, kara komedinin eşsiz bir örneğidir. Clooney, filmde bir hükümet ajanını canlandırıyor. Karmakarışık bir sırlar ve entrikalar ağı içinde dolaşan karakterler, seyirciyi hem güldürüyor hem de geriyor. George Clooney en iyi filmleri arasında eğlenceli bir tercih."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-8",
    "name": "The Ides of March - Zirveye Giden Yol",
    "image": "/images/movies/george_clooney_the_ides_of_march_-_zirveye_giden_yol.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 41 dk.",
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "George Clooney",
        "Ryan Gosling"
      ],
      "Yönetmen": "George Clooney",
      "imdb": "7.1/10",
      "Değerlendirme": "232000",
      "metascore": "67"
    },
    "paragraf": "The Ides of March, politik gerilim tarzıyla dikkat çekiyor. George Clooney, yalnızca oyuncu olarak değil, yönetmen olarak da harikalar yaratıyor. Film, bir seçim kampanyası sürecinde yaşanan ahlaki ikilemleri ve güç mücadelelerini en iyi şekilde temsil ediyor. İncelikli senaryosuyla izleyicileri etkisi altına alıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-7",
    "name": "Michael Clayton - Avukat",
    "image": "/images/movies/george_clooney_michael_clayton_-_avukat.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "2 sa. 0 dk.",
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "George Clooney",
        "Tilda Swinton"
      ],
      "Yönetmen": "Tony Gilroy",
      "imdb": "7.2/10",
      "Değerlendirme": "175000",
      "metascore": "82"
    },
    "paragraf": "Michael Clayton, avukatlık kariyerinin gölgeli taraflarını gözler önüne seriyor. Tony Gilroy'un yönetiminde çekilen bu gerilim dolu hikayede, Clooney bir hukuk danışmanını canlandırıyor. Film, karakter gelişimi ve derinliğiyle öne çıkıyor ve Clooney'nin performansı, filmi unutulmaz kılan unsurlardan biridir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-6",
    "name": "O Brother, Where Art Thou? - Nerdesin Be Birader?",
    "image": "/images/movies/george_clooney_o_brother,_where_art_thou__-_nerdesin_be_birader_.jpg",
    "ozellikler": {
      "Yıl": "2000",
      "Süre": "1 sa. 46 dk.",
      "Kategori": [
        "Komedi",
        "Macera"
      ],
      "Oyuncular": [
        "George Clooney",
        "John Turturro"
      ],
      "Yönetmen": "Joel Coen, Ethan Coen",
      "imdb": "7.7/10",
      "Değerlendirme": "334000",
      "metascore": "69"
    },
    "paragraf": "Coen kardeşlerin en eğlenceli yapıtlarından biri olan O Brother, Where Art Thou?, izleyicileri eğlenceli bir yolculuğa sürüklüyor. Clooney, kaçak bir mahkûm olan Everett Ulysses McGill'i canlandırıyor. Film, hem müzikal unsurlarıyla hem de Clooney'nin muhteşem oyunculuğuyla hafızalarda iz bırakıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-5",
    "name": "Up in the Air - Aklı Havada",
    "image": "/images/movies/george_clooney_up_in_the_air_-_akli_havada.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "1 sa. 49 dk.",
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Oyuncular": [
        "George Clooney",
        "Vera Farmiga"
      ],
      "Yönetmen": "Jason Reitman",
      "imdb": "7.4/10",
      "Değerlendirme": "351000",
      "metascore": "83"
    },
    "paragraf": "Up in the Air, modern yaşamın zorluklarını mizahi ve duygusal bir dille ele alıyor. George Clooney, işi gereği sürekli seyahat eden bir adamı canlandırıyor. Kariyerle kişisel hayat arasında kurulan bağlar, filmde ilginç bir şekilde işleniyor. Clooney'nin sıcak ve içten performansı dikkat çekiyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-4",
    "name": "Syriana",
    "image": "/images/movies/george_clooney_syriana.jpg",
    "ozellikler": {
      "Yıl": "2005",
      "Süre": "2 sa. 8 dk.",
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "George Clooney",
        "Matt Damon"
      ],
      "Yönetmen": "Stephen Gaghan",
      "imdb": "6.9/10",
      "Değerlendirme": "135000",
      "metascore": "76"
    },
    "paragraf": "Syriana, petrol endüstrisi ve politikadaki karmaşık ilişkileri derinlemesine araştırıyor. Stephen Gaghan'ın yönetiminde çekilen film, Clooney'nin Oscar ödüllü performansına sahne oluyor. Senaryo, karmaşık yapısıyla dikkat çekerken, Clooney'nin karakteri filme gerçek bir derinlik katıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-3",
    "name": "The Descendants - Senden Bana Kalan",
    "image": "/images/movies/george_clooney_the_descendants_-_senden_bana_kalan.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 55 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "George Clooney",
        "Shailene Woodley"
      ],
      "Yönetmen": "Alexander Payne",
      "imdb": "7.3/10",
      "Değerlendirme": "253000",
      "metascore": "84"
    },
    "paragraf": "The Descendants, aile bağları ve kişisel keşif üzerine dokunaklı bir hikaye anlatıyor. George Clooney, trajik bir kaza sonrası ailesini toparlamaya çalışan bir babayı canlandırıyor. Film, samimi ve içten yapısıyla izleyenlere duygusal anlar yaşatırken, Clooney'nin performansı da oldukça etkileyici."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-2",
    "name": "Gravity - Yerçekimi",
    "image": "/images/movies/george_clooney_gravity_-_yercekimi.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "1 sa. 31 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Oyuncular": [
        "George Clooney",
        "Sandra Bullock"
      ],
      "Yönetmen": "Alfonso Cuarón",
      "imdb": "7.7/10",
      "Değerlendirme": "868000",
      "metascore": "96"
    },
    "paragraf": "Gravity, uzayda hayatta kalma mücadelesini konu alıyor. Alfonso Cuarón'un yönettiği film, etkileyici görsel efektleri ve Clooney'nin birçok izleyicinin kalbini kazanan performansıyla öne çıkıyor. Zorlu koşullardaki insan ilişkilerini derinlemesine irdeleyen yapıt, gerilim ve heyecan dolu anlar vaat ediyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/george-clooney-en-iyi-10-filmi#bolum-1",
    "name": "Ocean's Eleven - Ocean's 11",
    "image": "/images/movies/george_clooney_ocean's_eleven_-_ocean's_11.jpg",
    "ozellikler": {
      "Yıl": "2001",
      "Süre": "1 sa. 56 dk.",
      "Kategori": [
        "Suç",
        "Komedi"
      ],
      "Oyuncular": [
        "George Clooney",
        "Brad Pitt"
      ],
      "Yönetmen": "Steven Soderbergh",
      "imdb": "7.7/10",
      "Değerlendirme": "626000",
      "metascore": "74"
    },
    "paragraf": "Ocean's Eleven, soygun filmleri arasında kült yapıtlar arasında yer alır. George Clooney, Danny Ocean karakterini muhteşem bir şekilde canlandırarak seyirciyi etkisi altına alıyor. Steven Soderbergh'in yönetimindeki film, akıcı senaryosu ve dinamik kadrosuyla dikkat çekiyor ve George Clooney filmleri arasında özel bir yere sahip."
  }

];

const ana_resim = "/images/ana_gorseller/george-clooney-en-iyi-10-filmi-kapak.jpg"; //! SEN DOLDUR
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