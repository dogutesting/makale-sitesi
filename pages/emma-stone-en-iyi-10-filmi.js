
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EmmaStoneEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "emma-stone-en-iyi-10-filmi";
const baslik = "Emma Stone en iyi 10 filmi";
const metin = "Emma Stone, sinema dünyasında başarılı performanslarıyla tanınan bir oyuncu olarak dikkat çekiyor. emma stone filmleri kendine özgü bir tat sunarken, oyuncunun yeteneğini her projede ortaya koyduğu açık. İşte, emma stone en iyi filmleri listesi ile karşınızdayız.";
const bitis_metin = "Emma Stone'un kariyerine damga vuran bu filmler, onun ne kadar yetenekli bir oyuncu olduğunu kanıtlıyor. emma stone filmleri izlemeyi sevenler için bu liste, kaçırılmaması gereken yapımlar arasında yer alıyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["emma","stone","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:24:14+03:00";
const degistirilmeTarihi = "2024-08-09T17:24:14+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/emma-stone-en-iyi-10-filmi#bolum-10",
    "name": "Magic in the Moonlight - Sihirli Ay Işığı",
    "image": "/images/movies/emma_stone_magic_in_the_moonlight_-_sihirli_ay_isigi.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 37 dk.",
      "Kategori": [
        "Komedi",
        "Romantik"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Colin Firth"
      ],
      "Yönetmen": "Woody Allen",
      "imdb": "6.5/10",
      "Değerlendirme": "71000",
      "metascore": "54"
    },
    "paragraf": "Emma stone filmleri arasında kendine özgü bir yer edinen Magic in the Moonlight, romantik bir komedi filmidir. Emma Stone'un Colin Firth ile başrolü paylaştığı film, seyirciyi 1920'ler Fransa'sına götürür. Woody Allen, filmiyle seyirciye eğlenceli bir hikaye sunuyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/emma-stone-en-iyi-10-filmi#bolum-9",
    "name": "Gangster Squad - Suç Çetesi",
    "image": "/images/movies/emma_stone_gangster_squad_-_suc_cetesi.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "1 sa. 53 dk.",
      "Kategori": [
        "Aksiyon",
        "Suç",
        "Dram"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Ryan Gosling"
      ],
      "Yönetmen": "Ruben Fleischer",
      "imdb": "6.7/10",
      "Değerlendirme": "224000",
      "metascore": "40"
    },
    "paragraf": "Emma stone en iyi filmleri arasında yer alan Gangster Squad, Los Angeles'ın yeraltı dünyasında geçen bir dönemi anlatıyor. Ryan Gosling ve Emma Stone'un harika uyumuyla, suç dünyasına dair etkileyici bir yapım sunuyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/emma-stone-en-iyi-10-filmi#bolum-8",
    "name": "The Help - Duyguların Rengi",
    "image": "/images/movies/emma_stone_the_help_-_duygularin_rengi.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "2 sa. 26 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Viola Davis"
      ],
      "Yönetmen": "Tate Taylor",
      "imdb": "8.1/10",
      "Değerlendirme": "498000",
      "metascore": "62"
    },
    "paragraf": "Emma Stone'un duygusal derinliğini sergilediği The Help, Amerikan tarihinin hassas bir konusunu ele alıyor. Viola Davis ile birlikte güçlü bir performans sergileyen Stone, bu filmle çokça beğeni topladı."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/emma-stone-en-iyi-10-filmi#bolum-7",
    "name": "Easy A - Adı Çıkmış",
    "image": "/images/movies/emma_stone_easy_a_-_adi_cikmis.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "1 sa. 32 dk.",
      "Kategori": [
        "Komedi",
        "Romantik"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Amanda Bynes"
      ],
      "Yönetmen": "Will Gluck",
      "imdb": "7.0/10",
      "Değerlendirme": "422000",
      "metascore": "72"
    },
    "paragraf": "Emma stone filmleri arasında gençlik komedisine farklı bir bakış kazandıran Easy A, Stone'un başrol performansıyla göz dolduruyor. Komik ve zeki bir senaryoya sahip bu film, Emma Stone'un kariyerinde önemli bir adım oldu."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/emma-stone-en-iyi-10-filmi#bolum-6",
    "name": "Zombieland",
    "image": "/images/movies/emma_stone_zombieland.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "1 sa. 28 dk.",
      "Kategori": [
        "Korku",
        "Komedi"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Jesse Eisenberg"
      ],
      "Yönetmen": "Ruben Fleischer",
      "imdb": "7.5/10",
      "Değerlendirme": "629000",
      "metascore": "73"
    },
    "paragraf": "Zombieland, eğlenceli bir zombi hikayesini anlatıyor. Emma Stone'un Jesse Eisenberg ile birlikte başrolünü paylaştığı bu film, emma stone en iyi filmleri içerisinde unutulmaz anlara sahip."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/emma-stone-en-iyi-10-filmi#bolum-5",
    "name": "Crazy, Stupid, Love - Çılgın Aptal Aşk",
    "image": "/images/movies/emma_stone_crazy,_stupid,_love_-_cilgin_aptal_ask.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 58 dk.",
      "Kategori": [
        "Komedi",
        "Romantik",
        "Dram"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Steve Carell",
        "Ryan Gosling"
      ],
      "Yönetmen": "Glenn Ficarra, John Requa",
      "imdb": "7.4/10",
      "Değerlendirme": "572000",
      "metascore": "68"
    },
    "paragraf": "Emma stone en iyi filmleri arasında öne çıkan Crazy, Stupid, Love, aşkın karmaşık doğasına farklı bir bakış sunuyor. Emma Stone'un Steve Carell ile uyumu, filme ayrı bir tat katıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/emma-stone-en-iyi-10-filmi#bolum-4",
    "name": "The Favourite - Sarayın Gözdesi",
    "image": "/images/movies/emma_stone_the_favourite_-_sarayin_gozdesi.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Süre": "1 sa. 59 dk.",
      "Kategori": [
        "Biyografi",
        "Komedi",
        "Dram"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Olivia Colman"
      ],
      "Yönetmen": "Yorgos Lanthimos",
      "imdb": "7.5/10",
      "Değerlendirme": "239000",
      "metascore": "91"
    },
    "paragraf": "Emma Stone'un Oscar adaylığı kazandığı The Favourite, 18. yüzyıl İngiltere'sinde geçen entrika dolu bir hikaye sunuyor. Olivia Colman ile başrolleri paylaşan Stone, yine muhteşem bir performans sergiliyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/emma-stone-en-iyi-10-filmi#bolum-3",
    "name": "Birdman",
    "image": "/images/movies/emma_stone_birdman.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 59 dk.",
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Michael Keaton"
      ],
      "Yönetmen": "Alejandro González Iñárritu",
      "imdb": "7.7/10",
      "Değerlendirme": "671000",
      "metascore": "87"
    },
    "paragraf": "Birdman, Broadway tiyatrosu dünyasında geçen etkileyici bir hikaye sunuyor. Emma Stone'un oyunculuğuyla taçlanan bu film, karmaşık karakterleri ve sofistike anlatımıyla dikkat çekiyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/emma-stone-en-iyi-10-filmi#bolum-2",
    "name": "La La Land - Aşıklar Şehri",
    "image": "/images/movies/emma_stone_la_la_land_-_asiklar_sehri.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "2 sa. 8 dk.",
      "Kategori": [
        "Komedi",
        "Dram",
        "Müzikal"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Ryan Gosling"
      ],
      "Yönetmen": "Damien Chazelle",
      "imdb": "8.0/10",
      "Değerlendirme": "685000",
      "metascore": "94"
    },
    "paragraf": "emma stone en iyi filmleri arasında zirveye yakın olan La La Land, Emma Stone'un unutulmaz performansıyla damgasını vurdu. Film, müzik ve aşkın büyüsünü bir araya getiriyor ve izleyenlere görsel bir şölen sunuyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/emma_stone_emma-stone-en-iyi-10-filmi#bolum-1",
    "name": "The Amazing Spider-Man",
    "image": "/images/movies/emma_stone_the_amazing_spider-man.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "2 sa. 16 dk.",
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Fantastik"
      ],
      "Oyuncular": [
        "Emma Stone",
        "Andrew Garfield"
      ],
      "Yönetmen": "Marc Webb",
      "imdb": "6.9/10",
      "Değerlendirme": "710000",
      "metascore": "66"
    },
    "paragraf": "emma stone filmleri arasında en popülerlerinden biri olan The Amazing Spider-Man, aksiyon dolu bir hikaye sunuyor. Emma Stone ve Andrew Garfield'ın uyumuyla öne çıkan bu film, süper kahraman dünyasına yeni bir soluk getirdi."
  }

];

const ana_resim = "/images/ana_gorseller/emma-stone-en-iyi-10-filmi-kapak.jpg"; //! SEN DOLDUR
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