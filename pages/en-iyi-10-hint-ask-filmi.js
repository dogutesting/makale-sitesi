
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnIyi10HintAskFilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-iyi-10-hint-ask-filmi";
const baslik = "En iyi 10 Hint aşk filmi";
const metin = "Hint sineması, dramatik hikayeleri ve dokunaklı aşk filmleriyle bilinir. Biz de bu makalede en iyi romantik aşk filmleri hint kategorisinde yer alan, duygusal yönleriyle ön plana çıkan, en iyi ağlatan hint aşk filmlerini derledik. Hint aşk filmleri ağlatan ve hint aşk filmleri dram unsurlarını bünyesinde barındıran bu yapıtlar, aynı zamanda hint aşk filmleri en iyi listelerinin de zirvesinde yer alıyor. İzlerken duygusal bir yolculuğa çıkacağınız bu filmleri sizler için sıraladık.";
const bitis_metin = "Bu makalemizde, Hint sinemasının duygusal derinliklerine dalış yaptık ve en iyi ağlatan hint aşk filmlerinden dram dolu anlara tanık olduk. Umarım bu yapıtlar, size de Hint sinemasının zenginliğini ve çekiciliğini hissettirmiştir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","iyi","10","hint","ask","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T18:08:06+03:00";
const degistirilmeTarihi = "2024-04-26T18:08:06+03:00";
const addDate = "26.04.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-10",
    "name": "Kabhi Khushi Kabhie Gham",
    "image": "/images/movies/kabhi_khushi_kabhie_gham.jpg",
    "ozellikler": {
      "Yıl": "2001",
      "Süre": "3 sa. 30 dk.",
      "Kategori": [
        "Dram",
        "Romantik",
        "Aile"
      ],
      "imdb": "7.4/10",
      "Yönetmen": "Karan Johar",
      "Oyuncular": [
        "Shahrukh Khan",
        "Kajol",
        "Amitabh Bachchan"
      ],
      "Değerlendirme": "56000"
    },
    "paragraf": "Bu büyük prodüksiyonlu film, aile değerlerini ve farklı sosyal sınıflar arasındaki aşkı işler. Shahrukh Khan ve Kajol'un muhteşem performanslarıyla, en iyi hint aşk filmleri arasında yerini alıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-9",
    "name": "Dil To Pagal Hai",
    "image": "/images/movies/dil_to_pagal_hai.jpg",
    "ozellikler": {
      "Yıl": "1997",
      "Süre": "2 sa. 59 dk.",
      "Kategori": [
        "Müzikal",
        "Romantik",
        "Dram"
      ],
      "imdb": "7.0/10",
      "Yönetmen": "Yash Chopra",
      "Oyuncular": [
        "Shahrukh Khan",
        "Madhuri Dixit",
        "Karisma Kapoor"
      ],
      "Değerlendirme": "24000"
    },
    "paragraf": "Dans ve müziğin büyüleyici dünyasında geçen bu film, aşkın en saf ve en masum hallerini gözler önüne serer. En iyi ağlatan hint aşk filmleri kategorisinde, duygusal sahneleriyle bilinir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-8",
    "name": "Mohabbatein",
    "image": "/images/movies/mohabbatein.jpg",
    "ozellikler": {
      "Yıl": "2000",
      "Süre": "3 sa. 36 dk.",
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "imdb": "7.1/10",
      "Yönetmen": "Aditya Chopra",
      "Oyuncular": [
        "Amitabh Bachchan",
        "Shahrukh Khan",
        "Aishwarya Rai"
      ]
    },
    "paragraf": "Bu film, yasaklanan aşkları ve gençlerin kalp kırıklıklarını ele alarak, izleyiciyi karmaşık duygulara sürüklüyor. Hint aşk filmleri duygusal unsurlarıyla öne çıkan Mohabbatein, zamanla popüler bir klasik haline gelmiştir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-7",
    "name": "Veer-Zaara",
    "image": "/images/movies/veer_zaara.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "3 sa. 12 dk.",
      "Kategori": [
        "Romantik",
        "Dram",
        "Macera"
      ],
      "imdb": "7.8/10",
      "Yönetmen": "Yash Chopra",
      "Oyuncular": [
        "Shahrukh Khan",
        "Preity Zinta",
        "Rani Mukerji"
      ],
      "Değerlendirme": "57000"
    },
    "paragraf": "Bir Hint pilotu ile Pakistanlı bir kızın yasak ve trajik aşk hikayesi, iki ülke arasındaki siyasi gerilimlere ışık tutarken, sınırları aşan bir aşkı anlatıyor. Veer-Zaara, hint aşk filmleri ağlatan yönüyle dikkat çekiyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-6",
    "name": "Kabhi Alvida Na Kehna",
    "image": "/images/movies/kabhi_alvida_na_kehna.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "3 sa. 12 dk.",
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "imdb": "6.1/10",
      "Yönetmen": "Karan Johar",
      "Oyuncular": [
        "Shahrukh Khan",
        "Rani Mukerji",
        "Preity Zinta",
        "Abhishek Bachchan"
      ],
      "Değerlendirme": "22000"
    },
    "paragraf": "Karan Johar’ın yönettiği bu film, evlilik dışı ilişkiler ve zorlu aile dinamikleri üzerine yoğun bir drama sunar. Her karakterin hikayesi, izleyiciye derin duygusal bağlar sunar ve hint aşk filmleri dram etkisini pekiştirir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-5",
    "name": "Dilwale Dulhania Le Jayenge",
    "image": "/images/movies/dilwale_dulhania_le_jayenge.jpg",
    "ozellikler": {
      "Yıl": "1995",
      "Süre": "3 sa. 10 dk.",
      "Kategori": [
        "Romantik",
        "Komedi",
        "Dram"
      ],
      "imdb": "8.0/10",
      "Yönetmen": "Aditya Chopra",
      "Oyuncular": [
        "Shahrukh Khan",
        "Kajol"
      ],
      "Değerlendirme": "77000"
    },
    "paragraf": "Bu unutulmaz film, Hint kültürünü ve geleneklerini ön plana çıkararak, aşkın önemi üzerine odaklanır. Shahrukh Khan ve Kajol'un kimyası, filmi en iyi romantik aşk filmleri hint listesinin başında yer almasını sağladı."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-4",
    "name": "Kal Ho Na Ho",
    "image": "/images/movies/kal_ho_na_ho.jpg",
    "ozellikler": {
      "Yıl": "2003",
      "Süre": "3 sa. 6 dk.",
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "imdb": "7.9/10",
      "Yönetmen": "Nikkhil Advani",
      "Oyuncular": [
        "Shahrukh Khan",
        "Preity Zinta",
        "Saif Ali Khan"
      ],
      "Değerlendirme": "75000"
    },
    "paragraf": "New York'ta geçen bu film, bir Hint ailenin yaşadığı dram ve aşk hikayesini işlerken, karakterlerin duygusal değişimleri üzerinden derin bir hikaye sunuyor. Kal Ho Na Ho, hint aşk filmleri en iyi örneklerinden biridir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-3",
    "name": "Hum Dil De Chuke Sanam",
    "image": "/images/movies/hum_dil_de_chuke_sanam.jpg",
    "ozellikler": {
      "Yıl": "1999",
      "Süre": "3 sa. 8 dk.",
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "imdb": "7.4",
      "Yönetmen": "Sanjay Leela Bhansali",
      "Oyuncular": [
        "Salman Khan",
        "Aishwarya Rai",
        "Ajay Devgn"
      ],
      "Değerlendirme": "20000"
    },
    "paragraf": "Hum Dil De Chuke Sanam, bir aşk üçgenini anlatır ve Hindistan'ın farklı bölgelerinde geçen duygusal bir yolculuğu temsil eder. Unutulmaz müzikleri ve etkileyici performanslarıyla dikkat çeker."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-2",
    "name": "Barfi",
    "image": "/images/movies/barfi.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "2 sa. 31 dk.",
      "Kategori": [
        "Komedi",
        "Dram",
        "Romantik"
      ],
      "imdb": "8.1/10",
      "Yönetmen": "Anurag Basu",
      "Oyuncular": [
        "Ranbir Kapoor",
        "Priyanka Chopra",
        "Ileana D'Cruz"
      ],
      "Değerlendirme": "87000"
    },
    "paragraf": "Konuşma ve duyma engelli bir genç olan Barfi'nin, hayat dolu hikayesi ve karşılaştığı aşklar, izleyiciyi derinden etkiler. Barfi, hint aşk filmleri ağlatan kategorisinde tutkulu bir aşk öyküsü sunar."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-iyi-10-hint-ask-filmi#bolum-1",
    "name": "Dil Se",
    "image": "/images/movies/dil_se.jpg",
    "ozellikler": {
      "Yıl": "1998",
      "Süre": "2 sa. 43 dk.",
      "Kategori": [
        "Romantik",
        "Dram",
        "Thriller"
      ],
      "imdb": "7.5/10",
      "Yönetmen": "Mani Ratnam",
      "Oyuncular": [
        "Shahrukh Khan",
        "Manisha Koirala",
        "Preity Zinta"
      ],
      "Değerlendirme": "31000"
    },
    "paragraf": "Film, Hindistan’ın siyasi gerilimleri arasında bir radyo yayıncısının ve gizemli bir kadının epik aşkını ele alır. Dil Se, en iyi hint aşk filmleri içinde dramatik ve güçlü bir hikayesiyle dikkat çekiyor."
  }

];

const ana_resim = "/images/ana_gorseller/en_iyi_10_hint_ask_filmi.jpg" //! SEN DOLDUR
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