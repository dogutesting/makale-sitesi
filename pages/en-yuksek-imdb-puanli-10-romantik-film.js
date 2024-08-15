
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnYuksekImdbPuanli10RomantikFilmMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-yuksek-imdb-puanli-10-romantik-film";
const baslik = "En yüksek IMDB puanlı 10 romantik film";
const metin = "Romantik filmler, duygusal derinliği ve aşk hikayeleriyle izleyicileri büyüler. Bu yazımızda, en yüksek imdb puanlı romantik filmler listesi ile karşınızdayız. Her bir film, aşkın farklı yönlerini keşfeder ve izleyicilere unutulmaz anlar yaşatır. IMDb puanı yüksek romantik filmler, kaliteleriyle ön plana çıkar.";
const bitis_metin = "Bu yazımızda, IMDb puanlarına göre en yüksek imdb puanlı romantik filmleri ele aldık. Her biri kendine has özelliklere sahip bu filmler, romantizm ve derin duygusal bağlar arayan herkes için mükemmel seçenekler sunuyor. Umarız bu liste, izlenecek film seçimlerinizde size ilham verir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","yuksek","imdb","puanli","10","romantik","film"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T19:08:11+03:00";
const degistirilmeTarihi = "2024-04-26T19:08:11+03:00";
const addDate = "26.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-10",
    "name": "Sense and Sensibility",
    "image": "/images/movies/sense_and_sensibility.jpg",
    "ozellikler": {
      "Yönetmen": "Ang Lee",
      "Oyuncular": [
        "Emma Thompson",
        "Kate Winslet",
        "Hugh Grant"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "2 sa. 16 dk.",
      "Yıl": "1995",
      "metascore": "84",
      "imdb": "7.6/10",
      "Değerlendirme": "126000"
    },
    "paragraf": "Sense and Sensibility, Jane Austen'ın klasik romanından uyarlanan bu film, karakterlerin aşk ve mali sıkıntılarla nasıl başa çıktıklarını gözler önüne seriyor. Film, imdb puanı yüksek romantik filmler arasında yerini alıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-9",
    "name": "The Notebook",
    "image": "/images/movies/the_notebook.jpg",
    "ozellikler": {
      "Yönetmen": "Nick Cassavetes",
      "Oyuncular": [
        "Ryan Gosling",
        "Rachel McAdams"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "2 sa. 3 dk.",
      "Yıl": "2004",
      "imdb": "7.8/10",
      "Değerlendirme": "629000",
      "metascore": "53"
    },
    "paragraf": "The Notebook, iki sevgilinin yıllar süren aşk hikayesini anlatıyor. Film, imdb puanı yüksek aşk filmler listesinde önemli bir yere sahip ve romantizm arayanların gözdesi."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-8",
    "name": "Amelie",
    "image": "/images/movies/amelie.jpg",
    "ozellikler": {
      "Yönetmen": "Jean-Pierre Jeunet",
      "Oyuncular": [
        "Audrey Tautou"
      ],
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Süre": "2 sa. 2 dk.",
      "Yıl": "2001",
      "metascore": "69",
      "imdb": "8.3/10",
      "Değerlendirme": "794000"
    },
    "paragraf": "Amelie, kendine özgü dünyasında diğer insanlara mutluluk getirmeye çalışan bir kadının hikayesini izleyiciye sunar. Bu film, imdb puanı yüksek romantik filmler arasında kendine ayrıcalıklı bir yer bulmuştur."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-7",
    "name": "Before Sunset",
    "image": "/images/movies/before_sunset.jpg",
    "ozellikler": {
      "Yönetmen": "Richard Linklater",
      "Oyuncular": [
        "Ethan Hawke",
        "Julie Delpy"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "1 sa. 20 dk.",
      "Yıl": "2004",
      "metascore": "90",
      "imdb": "8.1/10",
      "Değerlendirme": "288000"
    },
    "paragraf": "Before Sunset, on yıl sonra yeniden bir araya gelen eski sevgililerin Paris'teki bir gününü konu alır. Bu film, gerçek zamanlı geçen etkileyici diyaloglarıyla imdb puanı yüksek romantik filmler listesinde parlamaktadır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-6",
    "name": "Eternal Sunshine of the Spotless Mind",
    "image": "/images/movies/eternal_sunshine_of_the_spotless_mind.jpg",
    "ozellikler": {
      "Yönetmen": "Michel Gondry",
      "Oyuncular": [
        "Jim Carrey",
        "Kate Winslet"
      ],
      "Kategori": [
        "Romantik",
        "Bilim Kurgu",
        "Drama"
      ],
      "Süre": "1 sa. 48 dk.",
      "Yıl": "2004",
      "metascore": "89",
      "imdb": "8.3/10",
      "Değerlendirme": "1100000"
    },
    "paragraf": "Eternal Sunshine of the Spotless Mind, bir çiftin hafızalarından birbirlerini sildirme hikayesini işler. Film, özgün senaryosu ile imdb puanı yüksek romantik filmler arasında öne çıkar."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-5",
    "name": "La La Land",
    "image": "/images/movies/la_la_land.jpg",
    "ozellikler": {
      "Yönetmen": "Damien Chazelle",
      "Oyuncular": [
        "Ryan Gosling",
        "Emma Stone"
      ],
      "Kategori": [
        "Romantik",
        "Müzikal"
      ],
      "Süre": "2 sa. 8 dk.",
      "Yıl": "2016",
      "metascore": "93",
      "imdb": "8.0/10",
      "Değerlendirme": "671000"
    },
    "paragraf": "La La Land, iki sanatçının Los Angeles'ta kariyer ve aşk arayışlarını gözler önüne serer. Film, büyük bir başarı elde ederek imdb puanı yüksek romantik filmler listesine girmiştir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-4",
    "name": "Pride and Prejudice",
    "image": "/images/movies/pride_and_prejudice.jpg",
    "ozellikler": {
      "Yönetmen": "Joe Wright",
      "Oyuncular": [
        "Keira Knightley",
        "Matthew Macfadyen"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "2 sa. 7 dk.",
      "Yıl": "2005",
      "metascore": "82",
      "imdb": "7.8/10",
      "Değerlendirme": "331000"
    },
    "paragraf": "Pride and Prejudice, sosyal sınıflar ve yanlış anlamalar üzerine kurulu bir aşk hikayesidir. Bu adaptasyon, imdb puanı yüksek romantik filmler içinde saygın bir yere sahiptir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-3",
    "name": "Titanic",
    "image": "/images/movies/titanic.jpg",
    "ozellikler": {
      "Yönetmen": "James Cameron",
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Kate Winslet"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "3 sa. 15 dk.",
      "Yıl": "1997",
      "metascore": "74",
      "imdb": "7.9/10",
      "Değerlendirme": "1300000"
    },
    "paragraf": "Titanic, tarihin en büyük gemi felaketlerinden biri üzerine kurulu unutulmaz bir aşk hikayesini anlatır. Film, imdb puanı yüksek romantik filmler arasında ikonik bir yapımdır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-2",
    "name": "Her",
    "image": "/images/movies/her.jpg",
    "ozellikler": {
      "Yönetmen": "Spike Jonze",
      "Oyuncular": [
        "Joaquin Phoenix",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Romantik",
        "Drama",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 6 dk.",
      "Yıl": "2013",
      "metascore": "90",
      "imdb": "8.0/10",
      "Değerlendirme":"669000"
    },
    "paragraf": "Her, bir adamın yapay zeka ile kurduğu ilginç ve duygusal ilişkiyi keşfeder. Bu sıra dışı romantik hikaye, imdb puanı yüksek aşk filmler listesinde dikkat çeker."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-romantik-film#bolum-1",
    "name": "Casablanca",
    "image": "/images/movies/casablanca.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Curtiz",
      "Oyuncular": [
        "Humphrey Bogart",
        "Ingrid Bergman"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "1 sa. 42 dk.",
      "Yıl": "1942",
      "metascore": "100",
      "imdb": "8.5/10",
      "Değerlendirme": "606000"
    },
    "paragraf": "Casablanca, II. Dünya Savaşı sırasında geçen ve unutulmaz bir aşkı konu alan klasik bir filmdir. Bu yapıt, imdb puanı yüksek romantik filmler listesinin zirvesinde yer alır ve sinema tarihinde eşsiz bir yere sahiptir."
  }
];

const ana_resim = "/images/ana_gorseller/en_yuksek_imdb_puanli_10_romantik_film_kapak.jpg" //! SEN DOLDUR
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