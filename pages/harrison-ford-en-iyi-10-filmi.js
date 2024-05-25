
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function HarrisonFordEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "harrison-ford-en-iyi-10-filmi";
const baslik = "Harrison Ford'un En İyi 10 Filmi";
const metin = "Harrison Ford filmleri arasından, izlenmesi gereken en iyi Harrison Ford filmleri hangileri? Bu sorunun cevabı, sinema tarihine damga vurmuş başyapıtları içeren bu listemizde. Harrison Ford'en iyi filmi hangisi merak ediyorsanız, doğru adresiniz.";
const bitis_metin = "İşte Harrison Ford'un en iyi 10 filmi. Hollywood'un deneyimli aktörü olan Harrison Ford'un her bir filmi, onun oyunculuk mirasının bir parçası olarak kabul edilmelidir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["harrison","ford","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:45:09+03:00";
const degistirilmeTarihi = "2024-05-25T18:45:09+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-10",
    "name": "Raiders of the Lost Ark - Kayıp Arke’nin Peşinde",
    "image": "/images/movies/harrison_ford_raiders_of_the_lost_ark_-_kayip_arke_nin_pesinde.jpg",
    "ozellikler": {
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Harrison Ford"
      ],
      "Kategori": [
        "Macera",
        "Aksiyon"
      ],
      "Süre": "1 sa. 55 dk.",
      "Yıl": "1981",
      "imdb": "8.4/10",
      "Değerlendirme": "1000000",
      "metascore": "86"
    },
    "paragraf": "Harrison Ford'un yıldızının parladığı ve Harrison Ford filmleri listesinin zirvesinde yer alan 'Raiders of the Lost Ark', unutulmaz bir macera ve aksiyon dolu."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-9",
    "name": "Blade Runner - Bıçak Sırtı",
    "image": "/images/movies/harrison_ford_blade_runner_-_bicak_sirti.jpg",
    "ozellikler": {
      "Yönetmen": "Ridley Scott",
      "Oyuncular": [
        "Harrison Ford",
        "Rutger Hauer"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Drama"
      ],
      "Süre": "1 sa. 57 dk.",
      "Yıl": "1982",
      "imdb": "8.1/10",
      "Değerlendirme": "825000",
      "metascore": "84"
    },
    "paragraf": "Blade Runner, Harrison Ford en iyi filmi seçilecek kadar etkili bir bilim kurgu dramı. Harrison Ford izlenmesi gereken filmleri arasındadır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-8",
    "name": "Air Force One - Hava Kuvvetleri Bir",
    "image": "/images/movies/harrison_ford_air_force_one_-_hava_kuvvetleri_bir.jpg",
    "ozellikler": {
      "Yönetmen": "Wolfgang Petersen",
      "Oyuncular": [
        "Harrison Ford"
      ],
      "Kategori": [
        "Aksiyon",
        "Drama"
      ],
      "Süre": "2 sa. 4 dk.",
      "Yıl": "1997",
      "imdb": "6.5/10",
      "Değerlendirme": "211000",
      "metascore": "62"
    },
    "paragraf": "Hava Kuvvetleri Bir, tipik bir Harrison Ford aksiyon dolu filmi. Heyecanı hiç düşmeyen yapısıyla soluk soluğa bir izlenim sunuyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-7",
    "name": "The Fugitive - Kaçak",
    "image": "/images/movies/harrison_ford_the_fugitive_-_kacak.jpg",
    "ozellikler": {
      "Yönetmen": "Andrew Davis",
      "Oyuncular": [
        "Harrison Ford",
        "Tommy Lee Jones"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Süre": "2 sa. 10 dk.",
      "Yıl": "1993",
      "imdb": "7.8/10",
      "Değerlendirme": "320000",
      "metascore": "87"
    },
    "paragraf": "Kaçak, adından da anlaşılacağı gibi nefes kesen bir kaçış hikayesi. Harrison Ford'un performansı sayesinde gerilim hiç düşmüyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-6",
    "name": "Witness - Tanık",
    "image": "/images/movies/harrison_ford_witness_-_tanik.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Weir",
      "Oyuncular": [
        "Harrison Ford"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Süre": "1 sa. 52 dk.",
      "Yıl": "1985",
      "imdb": "7.4/10",
      "Değerlendirme": "105000",
      "metascore": "76"
    },
    "paragraf": "Tanık, Harrison Ford'un unutulmaz rollerinden birisidir. Drama ve gerilim türlerini başarıyla harmanlayan sayılı filmlerden."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-5",
    "name": "Patriot Games - Vatansever Oyunları",
    "image": "/images/movies/harrison_ford_patriot_games_-_vatansever_oyunlari.jpg",
    "ozellikler": {
      "Yönetmen": "Phillip Noyce",
      "Oyuncular": [
        "Harrison Ford"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Süre": "1 sa. 57 dk.",
      "Yıl": "1992",
      "imdb": "6.8/10",
      "Değerlendirme": "121000",
      "metascore": "64"
    },
    "paragraf": "Patriot Games, Harrison Ford'un kariyerinde aksiyon ve gerilimi bir araya getiren başarılı işlerinden. Kesinlikle izlenmesi gereken bir yapıt."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-4",
    "name": "The Mosquito Coast - Sivrisinek Sahili",
    "image": "/images/movies/harrison_ford_the_mosquito_coast_-_sivrisinek_sahili.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Weir",
      "Oyuncular": [
        "Harrison Ford"
      ],
      "Kategori": [
        "Macera",
        "Drama"
      ],
      "Süre": "1 sa. 57 dk.",
      "Yıl": "1986",
      "imdb": "6.6/10",
      "Değerlendirme": "31000",
      "metascore": "51"
    },
    "paragraf": "Sivrisinek Sahili, Harrison Ford'un en iyi filmleri listesinde özel bir yere sahiptir. Macera ve drama dolu bu film, izleyiciyi derinden etkilemekte."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-3",
    "name": "Clear and Present Danger - Görünmeyen Tehlike",
    "image": "/images/movies/harrison_ford_clear_and_present_danger_-_gorunmeyen_tehlike.jpg",
    "ozellikler": {
      "Yönetmen": "Phillip Noyce",
      "Oyuncular": [
        "Harrison Ford"
      ],
      "Kategori": [
        "Aksiyon",
        "Drama"
      ],
      "Süre": "2 sa. 21 dk.",
      "Yıl": "1994",
      "imdb": "6.9/10",
      "Değerlendirme": "108000",
      "metascore": "72"
    },
    "paragraf": "Görünmeyen Tehlike, Harrison Ford'un başroldeki üstün oyunculuğu ile aksiyon dolu geçen harika bir film."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-2",
    "name": "Presumed Innocent - Suçlu",
    "image": "/images/movies/harrison_ford_presumed_innocent_-_suclu.jpg",
    "ozellikler": {
      "Yönetmen": "Alan J. Pakula",
      "Oyuncular": [
        "Harrison Ford"
      ],
      "Kategori": [
        "Gizem",
        "Drama"
      ],
      "Süre": "2 sa. 7 dk.",
      "Yıl": "1990",
      "imdb": "6.9/10",
      "Değerlendirme": "46000",
      "metascore": "72"
    },
    "paragraf": "Suçlu, Harrison Ford'un filmografisinde önemli bir yere sahiptir. Gizem ve drama unsurlarının başarılı bir şekilde işlendiği bu film, izleyicileri etkilemeyi başarıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/harrison-ford-en-iyi-10-filmi#bolum-1",
    "name": "Regarding Henry - Henry'ye Dair",
    "image": "/images/movies/harrison_ford_regarding_henry_-_henry_ye_dair.jpg",
    "ozellikler": {
      "Yönetmen": "Mike Nichols",
      "Oyuncular": [
        "Harrison Ford"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 47 dk.",
      "Yıl": "1991",
      "imdb": "6.7/10",
      "Değerlendirme": "34000",
      "metascore": "47"
    },
    "paragraf": "Henry'ye Dair, Harrison Ford filmleri arasında duygusal derinliği ile öne çıkan bir başyapıt. Unutulmaz bir dram deneyimi sunuyor."
  }
];

const ana_resim = "/images/ana_gorseller/harrison_ford_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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