
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MarkRuffaloEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "mark-ruffalo-en-iyi-10-filmi";
const baslik = "Mark Ruffalo en iyi 10 filmi";
const metin = "Mark Ruffalo, kariyeri boyunca birçok etkileyici performansa imza atmış bir aktör olarak tanınır. Bu listede, Mark Ruffalo filmleri arasında en iyi 10'unu sıraladık. Mark Ruffalo oynadığı filmler arasında hangilerini izlemeniz gerektiğine karar verebilirsiniz. İşte Mark Ruffalo en iyi filmleri burada!";
const bitis_metin = "Bu yazımızda Mark Ruffalo'nun kariyerine dair bir film turu yaptık. Mark Ruffalo imdb puanlarıyla öne çıkan bu filmleri izlerken keyif alacağınızı umuyoruz. Sinema dünyasının bu yetenekli aktörünü izlemeye devam edin!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["mark","ruffalo","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:05:54+03:00";
const degistirilmeTarihi = "2024-08-16T17:05:54+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-10",
    "name": "Now You See Me - Sihirbazlar Çetesi",
    "image": "/images/movies/Mark_Ruffalo_now_you_see_me_-_sihirbazlar_cetesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Jesse Eisenberg"
      ],
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Louis Leterrier",
      "imdb": "7.2/10",
      "Değerlendirme": "716228",
      "metacritic": "50"
    },
    "paragraf": "Now You See Me, Mark Ruffalo'yu bir FBI ajanı olarak izlediğimiz sürükleyici bir suç filmi. Sihirbazlar çetesini yakalamaya çalışan bir ajanın zekice planlarının yer aldığı bu film, Mark Ruffalo filmleri arasında izlenmesi gerekenlerden biri olarak öne çıkıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-9",
    "name": "Zodiac",
    "image": "/images/movies/Mark_Ruffalo_zodiac.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Jake Gyllenhaal"
      ],
      "Kategori": [
        "Suç",
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2007",
      "Süre": "2 sa. 37 dk.",
      "Yönetmen": "David Fincher",
      "imdb": "7.7/10",
      "Değerlendirme": "607703",
      "metacritic": "79"
    },
    "paragraf": "Zodiac, gerçek olaylardan esinlenilen bir gerilim filmi. San Francisco'da bir seri katili yakalamaya çalışan dedektifleri konu alır. Mark Ruffalo'nun başarılı performansı, bu filmi Mark Ruffalo en iyi filmleri arasında ön plana çıkarıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-8",
    "name": "Shutter Island - Zindan Adası",
    "image": "/images/movies/Mark_Ruffalo_shutter_island_-_zindan_adasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Leonardo DiCaprio"
      ],
      "Kategori": [
        "Gerilim",
        "Gizem"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.2/10",
      "Değerlendirme": "1481490",
      "metacritic": "63"
    },
    "paragraf": "Shutter Island, zihinsel hastalıkla dolu bir adada kaybolan bir mahkumu konu alır. Mark Ruffalo, bu filmdeki yardımcı rolüyle dikkat çeker. Mark Ruffalo oynadığı filmler arasında unutulmaz bir gerilim deneyimi arayanlar için ideal bir seçim."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-7",
    "name": "The Kids Are All Right - İki Kadın, Bir Erkek",
    "image": "/images/movies/Mark_Ruffalo_the_kids_are_all_right_-_iki_kadin,_bir_erkek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Julianne Moore",
        "Annette Bening"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Lisa Cholodenko",
      "imdb": "7/10",
      "Değerlendirme": "135077",
      "metacritic": "86"
    },
    "paragraf": "The Kids Are All Right, modern bir aile dramı ve komedisi. Mark Ruffalo'nun canlandırdığı karakterin aile dinamiklerindeki yeri, filmdeki mizahi ve duygusal dokuları artırıyor. Mark Ruffalo en iyi filmi listesinde mutlaka göz atılması gereken bir eser."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-6",
    "name": "Spotlight",
    "image": "/images/movies/Mark_Ruffalo_spotlight.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Michael Keaton"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Tom McCarthy",
      "imdb": "8.1/10",
      "Değerlendirme": "506233",
      "metacritic": "93"
    },
    "paragraf": "Spotlight, gazetecilerin rahiplerin karıştığı skandalı ortaya çıkarmasını anlatır. Mark Ruffalo'nun, bu filmdeki enerjik performansı göz kamaştırıyor ve IMDb puanı yüksek olan bu yapıma damgasını vuruyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-5",
    "name": "Foxcatcher",
    "image": "/images/movies/Mark_Ruffalo_foxcatcher.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Steve Carell",
        "Channing Tatum"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "Bennett Miller",
      "imdb": "7/10",
      "Değerlendirme": "150316",
      "metacritic": "81"
    },
    "paragraf": "Foxcatcher, gerçek bir hikayeye dayanır ve bir güreş antrenörünün trajik hikayesini anlatır. Mark Ruffalo'nun bu filmdeki performansı, birçok eleştirmen tarafından övgüye değer görülmüş ve Mark Ruffalo en iyi filmleri arasında kendine yer bulmuştur."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-4",
    "name": "Avengers: Infinity War - Yenilmezler: Sonsuzluk Savaşı",
    "image": "/images/movies/Mark_Ruffalo_avengers__infinity_war_-_yenilmezler__sonsuzluk_savasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Robert Downey Jr.",
        "Chris Hemsworth"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 29 dk.",
      "Yönetmen": "Anthony Russo",
      "imdb": "8.4/10",
      "Değerlendirme": "1225658",
      "metacritic": "68"
    },
    "paragraf": "Avengers: Infinity War, Marvel Sinematik Evreni'nin doruk noktalarından biri. Mark Ruffalo'nun Hulk karakteri, bu filmde dikkat çeken performanslardan biri. Mark Ruffalo oynadığı filmler arasında en aksiyon dolu seçeneklerden biri."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-3",
    "name": "Avengers: Endgame - Yenilmezler: Oyunun Sonu",
    "image": "/images/movies/Mark_Ruffalo_avengers__endgame_-_yenilmezler__oyunun_sonu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Chris Evans",
        "Robert Downey Jr."
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2019",
      "Süre": "3 sa. 1 dk.",
      "Yönetmen": "Anthony Russo",
      "imdb": "8.4/10",
      "Değerlendirme": "1291012",
      "metacritic": "78"
    },
    "paragraf": "Avengers: Endgame, Avengers serisinin destansı finali. Mark Ruffalo, Hulk karakteriyle bir kez daha hayranlarıyla buluşuyor. Bu film, Mark Ruffalo en iyi filmi arasında adını ilk sıralara yazdırmayı başarıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-2",
    "name": "Eternal Sunshine of the Spotless Mind - Sil Baştan",
    "image": "/images/movies/Mark_Ruffalo_eternal_sunshine_of_the_spotless_mind_-_sil_bastan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Jim Carrey",
        "Kate Winslet"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Dram"
      ],
      "Yıl": "2004",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Michel Gondry",
      "imdb": "8.3/10",
      "Değerlendirme": "1090566",
      "metacritic": "89"
    },
    "paragraf": "Sil Baştan, aşkın ve hafızanın derinlerinde geçen bir hikaye. Mark Ruffalo'nun önemli bir rol aldığı bu film, sinema tarihinde kült bir yapım olarak kabul ediliyor. IMDb puanları da sağlam olan film, Mark Ruffalo filmleri arasında görülmeden geçilmemeli."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/mark-ruffalo-en-iyi-10-filmibolum-1",
    "name": "The Avengers - Yenilmezler",
    "image": "/images/movies/Mark_Ruffalo_the_avengers_-_yenilmezler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Ruffalo",
        "Chris Hemsworth",
        "Robert Downey Jr.",
        "Chris Evans"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Joss Whedon",
      "imdb": "8/10",
      "Değerlendirme": "1472748",
      "metacritic": "69"
    },
    "paragraf": "The Avengers, Marvel kahramanlarını bir araya getiriyor. Mark Ruffalo, Bruce Banner/Hulk rolüyle parlıyor. Mark Ruffalo en iyi filmleri arasında en ikonik rollerinden biri olan bu yapım, mutlaka izlenmesi gerekenler arasında."
  }

];

const ana_resim = "/images/ana_gorseller/mark-ruffalo-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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