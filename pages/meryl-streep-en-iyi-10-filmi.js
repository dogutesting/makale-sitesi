
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MerylStreepEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "meryl-streep-en-iyi-10-filmi";
const baslik = "Meryl Streep en iyi 10 filmi";
const metin = "Meryl Streep, Hollywood'un en saygın ve yetenekli oyuncularından biridir. Çok sayıda ödül kazanan prestijli projelerde yer almış olan Streep'in muazzam kariyerinden en iyi 10 filmi sizler için derledik. İşte meryl streep filmleri listesi ve harika performanslarına şahit olabileceğiniz yapımlar.";
const bitis_metin = "Bu yazımızda, usta oyuncu Meryl Streep'in kariyerinin en iyi 10 filmini listeledik. Her bir film, Streep'in olağanüstü yeteneğini ve geniş karakter yelpazesini gözler önüne seriyor. Umarız meryl streep filmleri listesi keyifli bir izleme deneyimi sunar.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["meryl","streep","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:26:51+03:00";
const degistirilmeTarihi = "2024-08-09T17:26:51+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt3623726",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-10",
    "name": "Ricki and the Flash - Sıradışı Anne",
    "image": "/images/movies/Meryl_Streep_ricki_and_the_flash_-_siradisi_anne.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "1 sa. 42 dk.",
      "Kategori": [
        "Komedi, Dram, Müzik"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Kevin Kline"
      ],
      "Yönetmen": "Jonathan Demme",
      "imdb": "6/10",
      "Değerlendirme": "25011",
      "metacritic": "54"
    },
    "paragraf": "2015 yapımı Ricki and the Flash, Meryl Streep'in bir rock yıldızını canlandırdığı hafif ve eğlenceli bir film. Streep, karizmatik performansı ve güçlü sahneleriyle dikkat çekiyor. Film, Streep'in müzikal yeteneklerini de sergilerken aile bağlarına olan duyarlılığı ele alıyor. Meryl streep en iyi filmleri arasında yer almasa da izlenmeye değer."
  },
  {
    "num": "9",
    "title_id": "tt4136084",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-9",
    "name": "Florence Foster Jenkins - Florence",
    "image": "/images/movies/Meryl_Streep_florence_foster_jenkins_-_florence.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "1 sa. 51 dk.",
      "Kategori": [
        "Komedi, Dram, Biyografi"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Hugh Grant"
      ],
      "Yönetmen": "Stephen Frears",
      "imdb": "6.8/10",
      "Değerlendirme": "60031",
      "metacritic": "71"
    },
    "paragraf": "Meryl Streep, Florence Foster Jenkins filminde opera kariyeri hayal eden yeteneksiz bir kadını canlandırıyor. Filmdeki komedi unsurunu ve Streep'in performansını izlemek izleyiciye keyif veriyor. Bu yapım, meryl streep filmleri listesi için unutulmaz bir seçenek."
  },
  {
    "num": "8",
    "title_id": "tt1135503",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-8",
    "name": "Julie & Julia - Julie ve Julia",
    "image": "/images/movies/Meryl_Streep_julie_&_julia_-_julie_ve_julia.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "2 sa. 3 dk.",
      "Kategori": [
        "Biyografi, Dram, Romantik"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Amy Adams"
      ],
      "Yönetmen": "Nora Ephron",
      "imdb": "7/10",
      "Değerlendirme": "129764",
      "metacritic": "66"
    },
    "paragraf": "Julie & Julia, Meryl Streep'i ünlü şef Julia Child rolünde gösteren bir biyografik dramadır. Streep'in performansı hem eğlenceli hem de etkileyicidir ve filmi izleyenleri Julia Child'ın mutfağına götürüyor. Meryl streep en iyi filmleri arasında önemli bir yerde yer alıyor."
  },
  {
    "num": "7",
    "title_id": "tt0458352",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-7",
    "name": "The Devil Wears Prada - Şeytan Marka Giyer",
    "image": "/images/movies/Meryl_Streep_the_devil_wears_prada_-_seytan_marka_giyer.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "1 sa. 49 dk.",
      "Kategori": [
        "Komedi, Dram"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Anne Hathaway"
      ],
      "Yönetmen": "David Frankel",
      "imdb": "6.9/10",
      "Değerlendirme": "478648",
      "metacritic": "62"
    },
    "paragraf": "Şeytan Marka Giyer filminde, Streep, moda dergisi editörü Miranda Priestly'yi canlandırıyor. Korkutucu derecede etkileyici ve ikonik bir karakter ortaya koyan Streep, bu filmi meryl streep filmleri listesi içinde en sevilenlerden biri haline getiriyor."
  },
  {
    "num": "6",
    "title_id": "tt1007029",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-6",
    "name": "The Iron Lady - Demir Leydi",
    "image": "/images/movies/Meryl_Streep_the_iron_lady_-_demir_leydi.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 45 dk.",
      "Kategori": [
        "Biyografi, Dram"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Jim Broadbent"
      ],
      "Yönetmen": "Phyllida Lloyd",
      "imdb": "6.4/10",
      "Değerlendirme": "114040",
      "metacritic": "52"
    },
    "paragraf": "2011 yapımı Demir Leydi'de, Meryl Streep İngiltere'nin ilk kadın başbakanı Margaret Thatcher'ı canlandırıyor. Bu performansıyla Streep, En İyi Kadın Oyuncu Oscar'ını kazanarak yeteneğini bir kez daha kanıtladı. Meryl streep en iyi filmleri arayışınızda listeyi kesinlikle zenginleştirecek bir yapım."
  },
  {
    "num": "5",
    "title_id": "tt0089755",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-5",
    "name": "Out of Africa - Afrika'nın Dışında",
    "image": "/images/movies/Meryl_Streep_out_of_africa_-_afrika'nin_disinda.jpg",
    "ozellikler": {
      "Yıl": "1985",
      "Süre": "2 sa. 41 dk.",
      "Kategori": [
        "Biyografi, Dram, Romantik"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Robert Redford"
      ],
      "Yönetmen": "Sydney Pollack",
      "imdb": "7.1/10",
      "Değerlendirme": "87327",
      "metacritic": "69"
    },
    "paragraf": "Out of Africa, Meryl Streep'in büyüleyici performansı ve etkileyici görüntüleriyle öne çıkan bir film. Kenya'da geçen bu epik aşk hikayesi, izleyicilere hem görsel hem de duyusal bir şölen sunuyor. Meryl streep filmleri listesi için vazgeçilmez eserlerden biri."
  },
  {
    "num": "4",
    "title_id": "tt0086312",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-4",
    "name": "Silkwood - Silkwood",
    "image": "/images/movies/Meryl_Streep_silkwood_-_silkwood.jpg",
    "ozellikler": {
      "Yıl": "1983",
      "Süre": "2 sa. 11 dk.",
      "Kategori": [
        "Biyografi, Dram, Gerilim"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Cher"
      ],
      "Yönetmen": "Mike Nichols",
      "imdb": "7.1/10",
      "Değerlendirme": "22519",
      "metacritic": "64"
    },
    "paragraf": "Silkwood, gerçek hayattan uyarlanan bir gerilim filmi. Streep, Karen Silkwood'un cesur hikayesini içten bir şekilde canlandırıyor. Film, tehlikeli görevlerde çalışan bir kahramanın yaşadıklarını etkileyici bir dille anlatıyor. Meryl streep en iyi filmleri arasında anlamlı bir yere sahip."
  },
  {
    "num": "3",
    "title_id": "tt0079522",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-3",
    "name": "Manhattan",
    "image": "/images/movies/Meryl_Streep_manhattan.jpg",
    "ozellikler": {
      "Yıl": "1979",
      "Süre": "1 sa. 36 dk.",
      "Kategori": [
        "Komedi, Dram, Romantik"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Woody Allen",
        "Diane Keaton"
      ],
      "Yönetmen": "Woody Allen",
      "imdb": "7.8/10",
      "Değerlendirme": "148440",
      "metacritic": "83"
    },
    "paragraf": "Woody Allen'ın klasiklerinden olan Manhattan filminde, Streep unutulmaz bir yardımcı rolle karşımıza çıkıyor. Film, New York'un büyüleyici silueti altında karmaşık insan ilişkilerinin işlendiği unutulmaz bir seyir sunuyor. Meryl streep filmleri listesinde farklı bir deneyim sunuyor."
  },
  {
    "num": "2",
    "title_id": "tt0112579",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-2",
    "name": "The Bridges of Madison County - Yağmurdan Sonra",
    "image": "/images/movies/Meryl_Streep_the_bridges_of_madison_county_-_yagmurdan_sonra.jpg",
    "ozellikler": {
      "Yıl": "1995",
      "Süre": "2 sa. 15 dk.",
      "Kategori": [
        "Dram, Romantik"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Clint Eastwood"
      ],
      "Yönetmen": "Clint Eastwood",
      "imdb": "7.6/10",
      "Değerlendirme": "90090",
      "metacritic": "69"
    },
    "paragraf": "The Bridges of Madison County, Meryl Streep'in unutulmaz performans sergilediği klasik bir aşk hikayesini konu alıyor. Streep ve Eastwood'un kimyası sıra dışı bir duygusal derinlik sunuyor. Meryl streep en iyi filmleri arasında öne çıkan eserlerden biri."
  },
  {
    "num": "1",
    "title_id": "tt0084707",
    "url": "https://enonlar.com/meryl-streep-en-iyi-10-filmi#bolum-1",
    "name": "Sophie's Choice - Sophie's Choice",
    "image": "/images/movies/Meryl_Streep_sophie's_choice_-_sophie's_choice.jpg",
    "ozellikler": {
      "Yıl": "1982",
      "Süre": "2 sa. 30 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Kevin Kline"
      ],
      "Yönetmen": "Alan J. Pakula",
      "imdb": "7.5/10",
      "Değerlendirme": "53465",
      "metacritic": "68"
    },
    "paragraf": "Sophie's Choice, Meryl Streep'in ruhun derinliklerine yolculuk ettiği muhteşem bir dram filmidir. Meryl streep en iyi filmleri arasında zirvede yer alan bu yapımda, Streep'in Oscar kazanan performansı izleyicileri derinden etkiliyor. Film, bir annenin savaşın gölgesinde yaşadığı trajik deneyimlerle doludur."
  }

];

const ana_resim = "/images/ana_gorseller/meryl-streep-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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