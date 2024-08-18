
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JeffBridgesEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jeff-bridges-en-iyi-10-filmi";
const baslik = "Jeff Bridges en iyi 10 filmi";
const metin = "Jeff Bridges, sinema dünyasında çok sayıda unutulmaz performansa imza atmış bir aktördür. Jeff Bridges oynadığı filmler arasında keşfedilecek birçok harika yapım bulunmaktadır. Bu makalede, Jeff Bridges en iyi filmleri listesiyle sizleri buluşturacağız.";
const bitis_metin = "Jeff Bridges, sinema dünyasında birbirinden değerli eserlerle yer edinmiş bir oyuncudur. Jeff Bridges filmleri arasında yaptığımız bu derleme, onun yeteneğini ve oynadığı filmlerin kalitesini bir kez daha ortaya koyuyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jeff","bridges","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:00:59+03:00";
const degistirilmeTarihi = "2024-08-16T17:00:59+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-10",
    "name": "R.I.P.D. - Ölümsüz Polisler",
    "image": "/images/movies/Jeff_Bridges_r.i.p.d._-_olumsuz_polisler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "Ryan Reynolds"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 36 dk.",
      "Yönetmen": "Robert Schwentke",
      "imdb": "5.6/10",
      "Değerlendirme": "145325",
      "metacritic": "25"
    },
    "paragraf": "R.I.P.D., Jeff Bridges'ın başrolünde yer aldığı aksiyon ve komedi türünde bir film. Bu ikonik yıldız, öteki dünyada polis olarak hizmet veren bir karakteri canlandırıyor. Jeff Bridges filmleri arasında farklı bir etkileyicilik sunan yapım, aksiyonu ve mizahı harmanlayarak izleyicilere eğlenceli anlar yaşatıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-9",
    "name": "TRON: Legacy - TRON Efsanesi",
    "image": "/images/movies/Jeff_Bridges_tron__legacy_-_tron_efsanesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "Garrett Hedlund"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 5 dk.",
      "Yönetmen": "Joseph Kosinski",
      "imdb": "6.8/10",
      "Değerlendirme": "358649",
      "metacritic": "49"
    },
    "paragraf": "TRON: Legacy, Jeff Bridges'ın bir efsane haline gelen TRON evrenine geri dönüşünü temsil ediyor. Film, dijital dünya ve gerçek dünya arasındaki yolculuğu konu alıyor. Jeff Bridges, TRON dünyasında hem baba karakteri hem de ikonik bir figür olarak izleyicilerin beğenisini kazanıyor. Jeff Bridges oynadığı filmler arasında unutulmaz bir eser."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-8",
    "name": "Seventh Son - Yedinci Oğul",
    "image": "/images/movies/Jeff_Bridges_seventh_son_-_yedinci_ogul.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "Ben Barnes"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "Sergei Bodrov",
      "imdb": "5.5/10",
      "Değerlendirme": "81081",
      "metacritic": "30"
    },
    "paragraf": "Seventh Son, Jeff Bridges'ın fantastik bir dünyada yer aldığı etkileyici bir yapım. Filmde karanlık güçlerle savaşan bir karaktere hayat veren Bridges, sinema kariyerinde unutulmaz bir performans sergiliyor. Jeff Bridges en iyi filmleri arasında farklı bir deneyim sunan yapım, izleyicilerini büyüleyici bir maceraya davet ediyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-7",
    "name": "Crazy Heart - Çılgın Kalp",
    "image": "/images/movies/Jeff_Bridges_crazy_heart_-_cilgin_kalp.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "Maggie Gyllenhaal",
        "James Keane"
      ],
      "Kategori": [
        "Dram",
        "Müzik"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Scott Cooper",
      "imdb": "7.2/10",
      "Değerlendirme": "95240",
      "metacritic": "83"
    },
    "paragraf": "Crazy Heart, Jeff Bridges'ın Oscar ödülünü kazandığı efsane performansı ile dikkat çekiyor. Müzik dolu bu dram filmi, Jeff Bridges en iyi filmi olarak sıkça anılıyor. Film, zor şartlar altında hayata tutunmaya çalışan bir müzisyenin hikayesini başarılı bir şekilde resmediyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-6",
    "name": "The Giver - Seçilmiş Kişi",
    "image": "/images/movies/Jeff_Bridges_the_giver_-_secilmis_kisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "Meryl Streep"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Dram"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 37 dk.",
      "Yönetmen": "Phillip Noyce",
      "imdb": "6.4/10",
      "Değerlendirme": "126479",
      "metacritic": "47"
    },
    "paragraf": "The Giver, Jeff Bridges'ın distopik bir dünyada geçen etkileyici bir filmidir. Toplumdaki duyguların kontrol altına alındığı bir evreni konu alan yapım, Jeff Bridges'ın farklı bir rolde izleyicilerine ulaşmasını sağlıyor. Jeff Bridges en iyi filmleri arasında çarpıcı bir yere sahip olan bu eser, düşünmeye iten bir anlatım sunuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-5",
    "name": "True Grit - İz Peşinde",
    "image": "/images/movies/Jeff_Bridges_true_grit_-_iz_pesinde.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "Hailee Steinfeld"
      ],
      "Kategori": [
        "Western"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Ethan Coen",
      "imdb": "7.6/10",
      "Değerlendirme": "360191",
      "metacritic": "80"
    },
    "paragraf": "True Grit, Jeff Bridges'ın unutulmaz bir performans sergilediği ve Vahşi Batı'nın çetin atmosferini güçlü bir anlatımla yansıttığı bir film. Jeff Bridges imdb puanlarına göre oldukça yüksek notlar alan film, cesur bir hikayeyi izleyicilere sunuyor ve Jeff Bridges oynadığı filmler arasında unutulmaz bir yere sahip."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-4",
    "name": "Starman - Yıldız Adam",
    "image": "/images/movies/Jeff_Bridges_starman_-_yildiz_adam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "Karen Allen"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Romantik"
      ],
      "Yıl": "1984",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "John Carpenter",
      "imdb": "7/10",
      "Değerlendirme": "53230",
      "metacritic": "70"
    },
    "paragraf": "Starman, Jeff Bridges'ın bilim kurgu ve romantizmi birleştirdiği sevgi dolu bir film. Bir uzaylının dünyadaki yolculuğunu ve insan duygularını keşfini anlatan yapım, Jeff Bridges en iyi filmleri arasında özel bir yere sahip. Filmin duygusal derinliği ve Bridges'in performansı izleyicilerde kalıcı bir iz bırakıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-3",
    "name": "The Big Lebowski - Büyük Lebowski",
    "image": "/images/movies/Jeff_Bridges_the_big_lebowski_-_buyuk_lebowski.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "John Goodman"
      ],
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Yıl": "1998",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Joel Coen",
      "imdb": "8.1/10",
      "Değerlendirme": "868328",
      "metacritic": "71"
    },
    "paragraf": "The Big Lebowski, Jeff Bridges'ın ikonik 'Dude' karakteriyle unutulmaz bir performans sergilediği kült bir yapım. Komedi ve suç unsurlarının harika bir şekilde harmanlandığı film, Jeff Bridges filmleri arasında ayrı bir yer edinir. En iyi Jeff Bridges imdb değerlendirmelerine sahip filmlerden biri."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-2",
    "name": "Hell or High Water - İki Eli Kanda",
    "image": "/images/movies/Jeff_Bridges_hell_or_high_water_-_iki_eli_kanda.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "Chris Pine",
        "Dale Dickey",
        "Ben Foster"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "David Mackenzie",
      "imdb": "7.6/10",
      "Değerlendirme": "255683",
      "metacritic": "88"
    },
    "paragraf": "Hell or High Water, Jeff Bridges'ın heyecan verici bir suç ve dram filmidir. İki kardeşin banka soyma maceralarını konu alan yapımda Bridges, emekli bir Teksas korucusunu canlandırıyor. Jeff Bridges en iyi filmi dendiğinde akla ilk gelen eserlerden biri olan film, etkileyici senaryosuyla dikkat çekiyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jeff-bridges-en-iyi-10-filmibolum-1",
    "name": "The Fisher King - Balıkçı Kral",
    "image": "/images/movies/Jeff_Bridges_the_fisher_king_-_balikci_kral.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeff Bridges",
        "Robin Williams",
        "Adam Bryant"
      ],
      "Kategori": [
        "Fantastik",
        "Dram"
      ],
      "Yıl": "1991",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "Terry Gilliam",
      "imdb": "7.5/10",
      "Değerlendirme": "91808",
      "metacritic": "67"
    },
    "paragraf": "The Fisher King, Jeff Bridges'ın Robin Williams ile birlikte başrolde yer aldığı bir film. Fantastik bir dokunuşla şekillenen dram hikayesi, izleyicileri derin bir yolculuğa çıkarıyor. Bu film, Jeff Bridges en iyi filmleri arasında özel bir yer tutarken, sahici duygular ve sağlam performanslar sunuyor."
  }

];

const ana_resim = "/images/ana_gorseller/jeff-bridges-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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