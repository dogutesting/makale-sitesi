
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RamiMalekEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "rami-malek-en-iyi-10-filmi";
const baslik = "Rami Malek en iyi 10 filmi";
const metin = "Rami Malek, sinemanın dikkat çeken yeteneklerinden biri olarak birçok başarılı projede yer aldı. Rami Malek filmleri, izleyicilere farklı türlerde eşsiz deneyimler sunuyor. Bu yazımızda Rami Malek'in en iyi 10 filmini inceleyip, Rami Malek oynadığı filmler arasında dikkate değer yapımları derledik.";
const bitis_metin = "Bu yazımızda Rami Malek'in etkileyici performanslarını sergilediği en iyi filmlerini sizler için derledik. Rami Malek en iyi filmleri ve onun sinemaya kattığı değeri gördüğümüz bir liste oluşturduk. İzleyeceğiniz her filmde, Rami Malek'in yeteneği ve büyüsü sizi etkisi altına alacaktır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["rami","malek","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:21:10+03:00";
const degistirilmeTarihi = "2024-08-16T17:21:10+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-10",
    "name": "Buster's Mal Heart - Buster'ın Hasta Kalbi",
    "image": "/images/movies/Rami_Malek_buster's_mal_heart_-_buster'in_hasta_kalbi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "DJ Qualls"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 36 dk.",
      "Yönetmen": "Sarah Adina Smith",
      "imdb": "6.1/10",
      "Değerlendirme": "11689",
      "metacritic": "63"
    },
    "paragraf": "Buster's Mal Heart, Rami Malek'in başrolünü üstlendiği sıra dışı bir drama filmi. Film, akıl sağlığı ile mücadelesini anlatan karmaşık bir karakterin hikayesini işliyor. Rami Malek en iyi filmi sıfatına layık bulunabilecek bir yapım olan bu film, oyuncunun yeteneklerini sergilediği proje olarak öne çıkıyor. Rami Malek imdb listelerinde de merak edilen bir yapımdır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-9",
    "name": "Little Things - Küçük Şeyler",
    "image": "/images/movies/Rami_Malek_little_things_-_kucuk_seyler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "Denzel Washington"
      ],
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Yıl": "2021",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "John Lee Hancock",
      "imdb": "6.3/10",
      "Değerlendirme": "129662",
      "metacritic": "54"
    },
    "paragraf": "Rami Malek, Küçük Şeyler filminde Denzel Washington ile birlikte başrolü paylaşıyor. Suç ve gerilim türündeki bu yapım, Rami Malek en iyi filmleri arasında değerlendirilen bir projedir. Oyuncunun performansı, karakterleriyle olan etkileşimi ve hikayeye kattığı derinlik izleyiciler tarafından oldukça beğenildi."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-8",
    "name": "The Master - Usta",
    "image": "/images/movies/Rami_Malek_the_master_-_usta.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "Joaquin Phoenix",
        "Philip Seymour Hoffman"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Paul Thomas Anderson",
      "imdb": "7.1/10",
      "Değerlendirme": "187779",
      "metacritic": "86"
    },
    "paragraf": "Usta, Paul Thomas Anderson'un yönetmenliğinde izleyiciyle buluşan bir drama filmi. Rami Malek'in yan rollerde dikkat çektiği bu film, Rami Malek filmleri arasında hakkı yenen yapımlardan biridir. Oyuncunun, Joaquin Phoenix gibi güçlü isimlerle birlikte yer alması, performansını daha da değerli kılıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-7",
    "name": "Short Term 12 - Geçici 12",
    "image": "/images/movies/Rami_Malek_short_term_12_-_gecici_12.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "Brie Larson",
        "John Gallagher Jr."
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 36 dk.",
      "Yönetmen": "Destin Daniel Cretton",
      "imdb": "7.9/10",
      "Değerlendirme": "92354",
      "metacritic": "82"
    },
    "paragraf": "Geçici 12 filmi, Rami Malek'in destekleyici bir rolde yer aldığı ve oldukça beğenilen bir drama filmidir. Film, sorunlu gençler için geçici bir bakım merkezinde görev yapan personelin yaşamlarını anlatır. Malek, performansı ile filmi daha da zenginleştiriyor ve Rami Malek oynadığı filmler listesinde önemli bir yer tutuyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-6",
    "name": "Da Sweet Blood of Jesus - Jesus'un Tatlı Kanı",
    "image": "/images/movies/Rami_Malek_da_sweet_blood_of_jesus_-_jesus'un_tatli_kani.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "Stephen Tyrone Williams",
        "Zaraah Abrahams"
      ],
      "Kategori": [
        "Drama",
        "Fantastik"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "Spike Lee",
      "imdb": "4.5/10",
      "Değerlendirme": "1963",
      "metacritic": "52"
    },
    "paragraf": "Jesus'un Tatlı Kanı, Spike Lee'nin yönettiği bir film olup, Rami Malek'in izleyiciye sıra dışı bir hikaye sunduğu bir yapımdır. Bu filmdeki performansı ile dikkat çeken Malek, Rami Malek en iyi filmleri arasında yer alan bir projeye daha adını yazdırmıştır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-5",
    "name": "Larry Crowne",
    "image": "/images/movies/Rami_Malek_larry_crowne.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "Tom Hanks",
        "Julia Roberts"
      ],
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 38 dk.",
      "Yönetmen": "Tom Hanks",
      "imdb": "6.1/10",
      "Değerlendirme": "71254",
      "metacritic": "41"
    },
    "paragraf": "Larry Crowne, Tom Hanks'in başrolünü üstlendiği ve Rami Malek'in de rol aldığı sıcak bir romantik komedi filmidir. Malek, filmdeki enerjik performansıyla izleyicilere keyifli anlar sunuyor. Rami Malek en iyi filmi arasında görülmese de, onun yeteneklerini farklı bir türde görmek adına izlenmesi gereken bir yapımdır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-4",
    "name": "Papillon - Kelebek",
    "image": "/images/movies/Rami_Malek_papillon_-_kelebek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "Charlie Hunnam",
        "Damijan Oklopdzic"
      ],
      "Kategori": [
        "Dram",
        "Macera"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 13 dk.",
      "Yönetmen": "Michael Noer",
      "imdb": "7.2/10",
      "Değerlendirme": "87788",
      "metacritic": "51"
    },
    "paragraf": "Kelebek, kaçış odaklı bir dramatik macera filmidir ve Rami Malek'in olağanüstü performansıyla dikkat çeker. Oyuncunun, Charlie Hunnam ile birlikte sergilediği uyum ve karakterine kattığı derinlik, Rami Malek imdb listelerinde dikkat çeken bir unsurdur."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-3",
    "name": "No Time to Die - Ölmek İçin Zaman Yok",
    "image": "/images/movies/Rami_Malek_no_time_to_die_-_olmek_icin_zaman_yok.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "Daniel Craig",
        "Léa Seydoux"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2021",
      "Süre": "2 sa. 43 dk.",
      "Yönetmen": "Cary Joji Fukunaga",
      "imdb": "7.3/10",
      "Değerlendirme": "450055",
      "metacritic": "68"
    },
    "paragraf": "Ölmek İçin Zaman Yok, Rami Malek'in James Bond'un en son filminde Daniel Craig'e karşı oynadığı bir casus aksiyon filmidir. Rami Malek en iyi filmleri arasında sayılan bu yapımda, Malek kötü adam rolündeki etkileyici performansıyla birçok eleştirmen tarafından övgü almıştır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-2",
    "name": "Night at the Museum: Secret of the Tomb - Müze Macerası: Lahitte Macera",
    "image": "/images/movies/Rami_Malek_night_at_the_museum__secret_of_the_tomb_-_muze_macerasi__lahitte_macera.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "Ben Stiller",
        "Robin Williams"
      ],
      "Kategori": [
        "Komedi",
        "Aile"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 38 dk.",
      "Yönetmen": "Shawn Levy",
      "imdb": "6.2/10",
      "Değerlendirme": "137532",
      "metacritic": "47"
    },
    "paragraf": "Müze Macerası: Lahitte Macera, Rami Malek'in tarihi bir karakteri canlandırdığı eğlenceli bir komedi filmidir. Onun karakteri, hikayeye mizahi bir boyut katıyor ve izleyicilere unutulmaz anlar yaşatıyor. Rami Malek oynadığı filmler içinde, ailecek izlenebilecek bir yapım olarak öne çıkıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/rami-malek-en-iyi-10-filmi#bolum-1",
    "name": "Bohemian Rhapsody",
    "image": "/images/movies/Rami_Malek_bohemian_rhapsody.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Rami Malek",
        "Lucy Boynton"
      ],
      "Kategori": [
        "Biyografi",
        "Müzik"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "Bryan Singer",
      "imdb": "7.9/10",
      "Değerlendirme": "601690",
      "metacritic": "49"
    },
    "paragraf": "Bohemian Rhapsody, Rami Malek'in Oscar ödüllü performansı ile Freddie Mercury'e hayat verdiği bir biyografi filmidir. Bu film, Rami Malek en iyi filmi olarak anılmakta ve oyuncunun kariyer zirvesi olduğuna inanmaktadır. Rami Malek imdb sıralamalarında da zirvede yer almasına neden olan bu performans, onu bir ikon haline getirmiştir."
  }

];

const ana_resim = "/images/ana_gorseller/rami-malek-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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