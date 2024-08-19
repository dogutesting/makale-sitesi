
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function HughJackmanEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "hugh-jackman-en-iyi-10-filmi";
const baslik = "Hugh Jackman en iyi 10 filmi";
const metin = "Hugh Jackman, kariyeri boyunca birçok unutulmaz role imza atmış bir aktördür. Bu makalemizde, Hugh Jackman izlenmesi gereken filmleri arasından seçtiğimiz, sinema tarihinde önemli bir yere sahip Hugh Jackman en iyi filmlerini sıralıyoruz.";
const bitis_metin = "Hugh Jackman, kendini farklı rollerde ispatlamış başarılı bir aktördür. Bu yazımızda, Hugh Jackman en iyi filmleri listesini sizlerle paylaştık. Umarız bu filmler sizlere keyifli saatler yaşatır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["hugh","jackman","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:27:17+03:00";
const degistirilmeTarihi = "2024-05-25T18:27:17+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-10",
    "name": "The Greatest Showman - Muhteşem Showman",
    "image": "/images/movies/hugh_jackman_the_greatest_showman_-_muhtesem_showman.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Gracey",
      "Oyuncular": [
        "Hugh Jackman",
        "Zac Efron",
        "Zendaya"
      ],
      "Kategori": [
        "Biyografi",
        "Dram",
        "Müzikal"
      ],
      "Süre": "1 sa. 45 dk.",
      "Yıl": "2017",
      "imdb": "7.5/10",
      "Değerlendirme": "313000",
      "metascore": "48"
    },
    "paragraf": "Muhteşem Showman, Hugh Jackman en iyi filmi listemizin başında yer alıyor. Film, tarihin en büyük gösteri adamının hikayesini anlatıyor ve Hugh Jackman filmleri içinde öne çıkan bir performans sergiliyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-9",
    "name": "Logan",
    "image": "/images/movies/hugh_jackman_logan.jpg",
    "ozellikler": {
      "Yönetmen": "James Mangold",
      "Oyuncular": [
        "Hugh Jackman",
        "Patrick Stewart",
        "Dafne Keen"
      ],
      "Kategori": [
        "Aksiyon",
        "Dram",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 17 dk.",
      "Yıl": "2017",
      "imdb": "8.1/10",
      "Değerlendirme": "834000",
      "metascore": "77"
    },
    "paragraf": "Hugh Jackman filmleri denildiğinde akla gelen Logan, karakterin hikayesini derinlemesine işlediği ve izleyenleri etkileyen bir yapımdır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-8",
    "name": "The Prestige - Prestij",
    "image": "/images/movies/hugh_jackman_the_prestige_-_prestij.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Hugh Jackman",
        "Christian Bale",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Dram",
        "Gizem",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 10 dk.",
      "Yıl": "2006",
      "imdb": "8.5/10",
      "Değerlendirme": "1400000",
      "metascore": "66"
    },
    "paragraf": "Prestij, büyü ve rekabet temalarını ustaca işleyen bir film olup, Hugh Jackman en iyi filmleri arasında kesinlikle yer alır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-7",
    "name": "X-Men: Days of Future Past - X-Men: Geçmiş Günler Gelecek",
    "image": "/images/movies/hugh_jackman_x-men_days_of_future_past_-_x-men_gecmis_gunler_gelecek.jpg",
    "ozellikler": {
      "Yönetmen": "Bryan Singer",
      "Oyuncular": [
        "Hugh Jackman",
        "Jennifer Lawrence",
        "Michael Fassbender"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 12 dk.",
      "Yıl": "2014",
      "imdb": "7.9/10",
      "Değerlendirme": "747000",
      "metascore": "75"
    },
    "paragraf": "Bu yapımda Hugh Jackman, Wolverine karakteriyle efsanevi bir performansa imza atarken, Hugh Jackman filmleri arasında fenomen haline gelmiştir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-6",
    "name": "Les Miserables - Sefiller",
    "image": "/images/movies/hugh_jackman_les_miserables_-_sefiller.jpg",
    "ozellikler": {
      "Yönetmen": "Tom Hooper",
      "Oyuncular": [
        "Hugh Jackman",
        "Russell Crowe",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Dram",
        "Müzikal",
        "Romantik"
      ],
      "Süre": "2 sa. 38 dk.",
      "Yıl": "2012",
      "imdb": "7.5/10",
      "Değerlendirme": "347000",
      "metascore": "63"
    },
    "paragraf": "Sefiller, derin duygusal unsurları ve güçlü oyunculuklarıyla Hugh Jackman en iyi filmleri listemizde önemli bir yere sahip."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-5",
    "name": "Prisoners - Tutsak",
    "image": "/images/movies/hugh_jackman_prisoners_-_tutsak.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Hugh Jackman",
        "Jake Gyllenhaal",
        "Viola Davis"
      ],
      "Kategori": [
        "Suç",
        "Dram",
        "Gizem"
      ],
      "Süre": "2 sa. 33 dk.",
      "Yıl": "2013",
      "imdb": "8.2/10",
      "Değerlendirme": "813000",
      "metascore": "70"
    },
    "paragraf": "Tutsak, Hugh Jackman'ın harika oyunculuğu ile nefes kesen bir dram sunuyor ve Hugh Jackman en iyi filmleri arasında gösteriliyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-4",
    "name": "The Fountain - Sonsuz Aşk",
    "image": "/images/movies/hugh_jackman_the_fountain_-_sonsuz_ask.jpg",
    "ozellikler": {
      "Yönetmen": "Darren Aronofsky",
      "Oyuncular": [
        "Hugh Jackman",
        "Rachel Weisz"
      ],
      "Kategori": [
        "Dram",
        "Romantik",
        "Bilim Kurgu"
      ],
      "Süre": "1 sa. 36 dk.",
      "Yıl": "2006",
      "imdb": "7.2/10",
      "Değerlendirme": "249000",
      "metascore": "51"
    },
    "paragraf": "Sonsuz Aşk, derin felsefi sorgulamaları ve Hugh Jackman'ın etkileyici performansı ile izlenmesi gereken Hugh Jackman filmleri listesinde yer alır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-3",
    "name": "Australia - Avustralya",
    "image": "/images/movies/australia_-_avustralya.jpg",
    "ozellikler": {
      "Yönetmen": "Baz Luhrmann",
      "Oyuncular": [
        "Hugh Jackman",
        "Nicole Kidman"
      ],
      "Kategori": [
        "Macera",
        "Dram",
        "Romantik"
      ],
      "Süre": "2 sa. 45 dk.",
      "Yıl": "2008",
      "imdb": "6.6/10",
      "Değerlendirme": "130000",
      "metascore": "53"
    },
    "paragraf": "Avustralya, Hugh Jackman ve Nicole Kidman'ın uyum içindeki performansları ile dikkat çeken, izlerken keyif alacağınız bir film."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-2",
    "name": "Real Steel - Çelik Yumruklar",
    "image": "/images/movies/hugh_jackman_real_steel_-_celik_yumruklar.jpg",
    "ozellikler": {
      "Yönetmen": "Shawn Levy",
      "Oyuncular": [
        "Hugh Jackman",
        "Evangeline Lilly"
      ],
      "Kategori": [
        "Aksiyon",
        "Dram",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 7 dk.",
      "Yıl": "2011",
      "imdb": "7.1/10",
      "Değerlendirme": "357000",
      "metascore": "56"
    },
    "paragraf": "Çelik Yumruklar, hem duygusal hem de heyecan dolu özgün bir hikaye sunarak, Hugh Jackman filmleri içinde öne çıkar."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/hugh-jackman-en-iyi-10-filmi#bolum-1",
    "name": "Van Helsing - Van Helsing",
    "image": "/images/movies/hugh_jackman_van_helsing_-_van_helsing.jpg",
    "ozellikler": {
      "Yönetmen": "Stephen Sommers",
      "Oyuncular": [
        "Hugh Jackman",
        "Kate Beckinsale"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 11 dk.",
      "Yıl": "2004",
      "imdb": "6.1/10",
      "Değerlendirme": "286000",
      "metascore": "35"
    },
    "paragraf": "Van Helsing, Hugh Jackman'ın aksiyon dolu performansının en iyi örneklerinden biri olarak kabul edilir ve listemizde zirveye oturur."
  }

];

const ana_resim = "/images/ana_gorseller/hugh_jackman_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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