
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ReeseWitherspoonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "reese-witherspoon-en-iyi-10-filmi";
const baslik = "Reese Witherspoon en iyi 10 filmi";
const metin = "Reese Witherspoon, oyunculuk kariyerinde birçok başarılı projeyle tanınmış bir isimdir. Reese Witherspoon filmleri genellikle eğlenceli ve düşündürücü olmasıyla dikkat çekiyor. Bu yazımızda, Reese Witherspoon oynadığı filmler içinden en iyilerini sizler için derledik. İşte Reese Witherspoon en iyi filmleri ve en beğenilen yapımları.";
const bitis_metin = "Bu yazımızda Reese Witherspoon'un kariyerinden en iyi filmlerini listeledik. Reese Witherspoon imdb puanları açısından da dikkat çeken bir oyuncu. Umarız bu liste, onun filmleri hakkında size bir fikir vermiştir. Bir sonraki yazımızda görüşmek üzere!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["reese","witherspoon","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:43:10+03:00";
const degistirilmeTarihi = "2024-08-16T16:43:10+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-10",
    "name": "How Do You Know - Nereden Biliyorsun?",
    "image": "/images/movies/Reese_Witherspoon_how_do_you_know_-_nereden_biliyorsun_.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Paul Rudd"
      ],
      "Kategori": [
        "Romantik Komedi"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 1 dk.",
      "Yönetmen": "James L. Brooks",
      "imdb": "5.4/10",
      "Değerlendirme": "54981",
      "metacritic": "46"
    },
    "paragraf": "How Do You Know, Reese Witherspoon ve ünlü oyuncuların bulunduğu bir romantik komedi filmidir. Bir kadının hayatındaki karmaşık ilişkileri ve kariyerini konu alır. Reese Witherspoon en iyi filmi olmasa da, film izleyicilere birçok eğlenceli an sunmayı başarıyor. Romantik ve eğlenceli bir hikaye arayanlar için ideal."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-9",
    "name": "Four Christmases - Evde Tek Başına 5",
    "image": "/images/movies/Reese_Witherspoon_four_christmases_-_evde_tek_basina_5.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Vince Vaughn"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 28 dk.",
      "Yönetmen": "Seth Gordon",
      "imdb": "5.7/10",
      "Değerlendirme": "81127",
      "metacritic": "41"
    },
    "paragraf": "Four Christmases, Reese Witherspoon'un komedi yeteneğini sergilediği eğlenceli bir film. Film, Noel tatili boyunca dört farklı aile etkinliğine katılmak zorunda kalan bir çifti anlatıyor. Reese Witherspoon filmleri arasında, eğlenceli bir komedi arayanlar için oldukça ideal."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-8",
    "name": "Home Again - Kapımdaki Aşk",
    "image": "/images/movies/Reese_Witherspoon_home_again_-_kapimdaki_ask.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Michael Sheen"
      ],
      "Kategori": [
        "Romantik Komedi"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 37 dk.",
      "Yönetmen": "Hallie Meyers-Shyer",
      "imdb": "5.8/10",
      "Değerlendirme": "35463",
      "metacritic": "41"
    },
    "paragraf": "Home Again, Reese Witherspoon'un hayat verdiği karakterin yeni başlangıçlar yaptığı bir hikayeye odaklanır. Los Angeles'ta üç genç film yapımcısının evine taşınmasıyla ortaya çıkan olaylar, izleyicilere keyifli anlar yaşatıyor. Reese Witherspoon imdb puanlarına göre öne çıkan bu film, samimi bir romantik komedi tadında."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-7",
    "name": "Sing - Şarkını Söyle",
    "image": "/images/movies/Reese_Witherspoon_sing_-_sarkini_soyle.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Matthew McConaughey"
      ],
      "Kategori": [
        "Animasyon"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Garth Jennings",
      "imdb": "7.1/10",
      "Değerlendirme": "194253",
      "metacritic": "59"
    },
    "paragraf": "Sing, Reese Witherspoon'un seslendirme yeteneklerini sergilediği bir animasyon filmi. Film, bir şarkı yarışmasına katılmak isteyen hayvanların yolculuğunu ele alıyor. Reese Witherspoon en iyi filmleri arasında olmasa da, eğlenceli bir yapım olarak izleyenlerin karşısına çıkıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-6",
    "name": "Cruel Intentions - Seks Oyunları",
    "image": "/images/movies/Reese_Witherspoon_cruel_intentions_-_seks_oyunlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Sarah Michelle Gellar",
        "Ryan Phillippe"
      ],
      "Kategori": [
        "Dramatik Gerilim"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 37 dk.",
      "Yönetmen": "Roger Kumble",
      "imdb": "6.8/10",
      "Değerlendirme": "207327",
      "metacritic": "56"
    },
    "paragraf": "Cruel Intentions, Reese Witherspoon'un genç yaşlarda kariyerinde önemli bir adım attığı gerilim dolu film. Film, entrikalarla dolu zengin çocukların oyunlarını konu alır. Reese Witherspoon oynadığı filmler arasında, etkileyici performansıyla hatırlanır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-5",
    "name": "Election - Seçim",
    "image": "/images/movies/Reese_Witherspoon_election_-_secim.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Matthew Broderick"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 43 dk.",
      "Yönetmen": "Alexander Payne",
      "imdb": "7.2/10",
      "Değerlendirme": "105896",
      "metacritic": "83"
    },
    "paragraf": "Election, Reese Witherspoon'un yeteneklerini tam anlamıyla sergilediği bir komedi-dram filmi. Lise seçimlerinde başkan olmak isteyen bir öğrencinin hırslı hikayesi anlatılır. Reese Witherspoon imdb puanlarıyla dikkat çeken bu film, izleyicileri etkisi altına almayı başarıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-4",
    "name": "Walk the Line - Sınırları Aşmak",
    "image": "/images/movies/Reese_Witherspoon_walk_the_line_-_sinirlari_asmak.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Joaquin Phoenix"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "James Mangold",
      "imdb": "7.8/10",
      "Değerlendirme": "268111",
      "metacritic": "72"
    },
    "paragraf": "Walk the Line, Reese Witherspoon'un Oscar kazandığı, Johnny Cash'in hayatını konu alan bir biyografi filmi. Güçlü performansıyla izleyenleri büyülüyor. Reese Witherspoon en iyi filmi olarak kabul edilen bu yapım, hayranları için izlenmesi gerekenler arasında yer alıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-3",
    "name": "Legally Blonde - Bu Nasıl Sarışın?",
    "image": "/images/movies/Reese_Witherspoon_legally_blonde_-_bu_nasil_sarisin_.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Luke Wilson"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2001",
      "Süre": "1 sa. 36 dk.",
      "Yönetmen": "Robert Luketic",
      "imdb": "6.5/10",
      "Değerlendirme": "253407",
      "metacritic": "59"
    },
    "paragraf": "Legally Blonde, Reese Witherspoon'un popülerliğini arttıran ve onu ikonik bir karaktere dönüştüren film. Zekasını ve kararlılığını kanıtlayan genç bir kadının hikayesini anlatır. Reese Witherspoon en iyi filmleri arasında kabul edilen bu yapım, eğlenceli ve ilham verici bir deneyim sunuyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-2",
    "name": "Wild - Yaban",
    "image": "/images/movies/Reese_Witherspoon_wild_-_yaban.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Laura Dern"
      ],
      "Kategori": [
        "Dram",
        "Macera"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Jean-Marc Vallée",
      "imdb": "7.1/10",
      "Değerlendirme": "140368",
      "metacritic": "74"
    },
    "paragraf": "Wild, Reese Witherspoon'un ilgi çekici bir performans sergilediği biyografik bir dram filmidir. Kendi kendine büyük bir yolculuğa çıkmayı seçen bir kadının hikayesini ele alır. Reese Witherspoon oynadığı filmler arasında, derinlemesine karakter çalışmasıyla göze çarpmaktadır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/reese-witherspoon-en-iyi-10-filmibolum-1",
    "name": "Big Little Lies - Büyük Küçük Yalanlar",
    "image": "/images/movies/Reese_Witherspoon_big_little_lies_-_buyuk_kucuk_yalanlar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Reese Witherspoon",
        "Lee Van Cleef",
        "Nicole Kidman"
      ],
      "Kategori": [
        "Dram",
        "Gizem"
      ],
      "Yıl": "2017",
      "Süre": "1 sa.",
      "Yönetmen": "Jean-Marc Vallée",
      "imdb": "8.4/10",
      "Değerlendirme": "227778"
    },
    "paragraf": "Büyük Küçük Yalanlar, Reese Witherspoon'un televizyon dünyasında önemli bir yer edindiği, başarılı bir dram dizisi. Reese Witherspoon en iyi filmi olmasa da, karışık ve sürükleyici anlatımı sayesinde izleyiciler üzerinde büyük bir etki bırakıyor. Emmy ödüllü bir yapım olarak, Reese Witherspoon filmleri ve projeleri arasında özel bir yere sahiptir."
  }

];

const ana_resim = "/images/ana_gorseller/reese-witherspoon-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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