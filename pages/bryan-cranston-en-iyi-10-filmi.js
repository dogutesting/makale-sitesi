
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function BryanCranstonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "bryan-cranston-en-iyi-10-filmi";
const baslik = "Bryan Cranston en iyi 10 filmi";
const metin = "Bryan Cranston, başarılı oyunculuğuyla tanınan ve birçok unutulmaz performansa imza atmış bir isimdir. Hem dram hem de komedi türlerinde, Cranston'ın etkileyici performansları geniş bir yelpazede ilgi görüyor. İşte Bryan Cranston filmleri arasında en dikkat çeken 10 yapımı sizin için listeledik.";
const bitis_metin = "Bu yazımızda Bryan Cranston'ın en iyi 10 filmini inceledik. Hem geniş bir film yelpazesi hem de her türden izleyiciye hitap eden performansları ile Bryan Cranston, sinema dünyasında iz bırakan bir aktördür. Umarız önerilerimiz hoşunuza gitmiştir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["bryan","cranston","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:46:56+03:00";
const degistirilmeTarihi = "2024-08-16T16:46:56+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1987680",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-10",
    "name": "The Upside - Dostum",
    "image": "/images/movies/Bryan_Cranston_the_upside_-_dostum.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "Kevin Hart"
      ],
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Neil Burger",
      "imdb": "7/10",
      "Değerlendirme": "64651",
      "metacritic": "46"
    },
    "paragraf": "The Upside, zengin ama felçli bir adam olan Bryan Cranston'un canlandırdığı karakterin, iş arayan bir suçlu ve bakıcısıyla arasındaki olağanüstü dostluğu konu alır. Bu film, Cranston'ın oyunculuk yeteneğini ve geniş yelpazesini bir kez daha gözler önüne seriyor. Bryan Cranston filmleri arasında öne çıkan bu yapıtta, Cranston'ın performansı bir kez daha takdir topluyor."
  },
  {
    "num": "9",
    "title_id": "tt6018306",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-9",
    "name": "Last Flag Flying - Son Kalan Bayrak",
    "image": "/images/movies/Bryan_Cranston_last_flag_flying_-_son_kalan_bayrak.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "Steve Carell",
        "Laurence Fishburne"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 5 dk.",
      "Yönetmen": "Richard Linklater",
      "imdb": "6.9/10",
      "Değerlendirme": "29025",
      "metacritic": "65"
    },
    "paragraf": "Last Flag Flying, Vietnam gazisi karakterlerin yollarının kesişmesini ve geçmişleriyle yüzleşmelerini anlatıyor. Bryan Cranston oynadığı filmler arasında duygusal ve derinliği olan bir başka etkili performansı sergiliyor. Bu filmde, duygusal yoğunlukla birlikte esprili anlar da göze çarpıyor."
  },
  {
    "num": "8",
    "title_id": "tt3661394",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-8",
    "name": "The One and Only Ivan - Tek ve Yalnız Ivan",
    "image": "/images/movies/Bryan_Cranston_the_one_and_only_ivan_-_tek_ve_yalniz_ivan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "Sam Rockwell"
      ],
      "Kategori": [
        "Aile",
        "Dram"
      ],
      "Yıl": "2020",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Thea Sharrock",
      "imdb": "6.6/10",
      "Değerlendirme": "13557",
      "metacritic": "58"
    },
    "paragraf": "The One and Only Ivan, sevimli bir goril olan Ivan'ın hikayesini çocukların kalbine dokunan bir macera olarak sunar. Bryan Cranston bu filmde sorumlu ve sevgi dolu bir karakteri canlandırarak oyunculuğunu bir kez daha gösteriyor. Bryan Cranston en iyi filmleri arasında dikkat çekici olan bu yapım, ailece izlenecek bir başyapıt olabilir."
  },
  {
    "num": "7",
    "title_id": "tt3203606",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-7",
    "name": "Trumbo",
    "image": "/images/movies/Bryan_Cranston_trumbo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "Helen Mirren",
        "Michael Stuhlbarg"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Jay Roach",
      "imdb": "7.4/10",
      "Değerlendirme": "85165",
      "metacritic": "60"
    },
    "paragraf": "Trumbo, Hollywood'un kara listesinde yer alan ünlü bir senaristin zorlu yaşamını ele alır. Bryan Cranston başarılı performansıyla bu filmde öne çıkıyor. Oynadığı tarihsel karakterin karmaşıklığını ve kararlılığını etkileyici bir şekilde yansıtarak Bryan Cranston en iyi filmi kategorisinde önemli bir yere sahip."
  },
  {
    "num": "6",
    "title_id": "tt1024648",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-6",
    "name": "Argo",
    "image": "/images/movies/Bryan_Cranston_argo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "Ben Affleck"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2012",
      "Süre": "2 sa.",
      "Yönetmen": "Ben Affleck",
      "imdb": "7.7/10",
      "Değerlendirme": "642830",
      "metacritic": "86"
    },
    "paragraf": "Argo, İran rehine krizini konu alan gerçek bir hikayeye dayanmaktadır. Filmin güçlü oyuncu kadrosunda yer alan Bryan Cranston, CIA'nın içine girdiği zorlu operasyonu etkili bir şekilde izleyiciye sunar. Bu Bryan Cranston filmleri arasında, oyuncunun gerilim türündeki başarısını taçlandırdığı bir yapım."
  },
  {
    "num": "5",
    "title_id": "tt0780504",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-5",
    "name": "Drive",
    "image": "/images/movies/Bryan_Cranston_drive.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "Ryan Gosling",
        "Carey Mulligan"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "Nicolas Winding Refn",
      "imdb": "7.8/10",
      "Değerlendirme": "713512",
      "metacritic": "79"
    },
    "paragraf": "Drive, aksiyon ve dramın harmanlandığı bir film olarak öne çıkıyor. Bryan Cranston, belalı işlerle dolu bir dünyada hayatta kalmaya çalışan bir adamın hikayesinde mükemmel bir yan karakter performansı sergiler. Bryan Cranston imdb değerlendirmelerinde yüksek puanlar alan bu film, aksiyon tutkunları için vazgeçilmezlerden biri."
  },
  {
    "num": "4",
    "title_id": "tt0831387",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-4",
    "name": "Godzilla",
    "image": "/images/movies/Bryan_Cranston_godzilla.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "Aaron Taylor-Johnson",
        "CJ Adams"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "Gareth Edwards",
      "imdb": "6.4/10",
      "Değerlendirme": "446415",
      "metacritic": "62"
    },
    "paragraf": "Godzilla, devasa yaratıkların dünyayı tehdit ettiği bir bilim kurgu klasiği olarak karşımıza çıkıyor. Bryan Cranston, bu filmde intikam arayışı içindeki bir bilim insanı olarak karşımıza çıkıyor. Bryan Cranston oynadığı filmler arasında mega canavar temalı yapımlar arasında önemli bir yer tutuyor."
  },
  {
    "num": "3",
    "title_id": "tt5104604",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-3",
    "name": "Isle of Dogs - Köpek Adası",
    "image": "/images/movies/Bryan_Cranston_isle_of_dogs_-_kopek_adasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "Edward Norton",
        "Koyu Rankin"
      ],
      "Kategori": [
        "Animasyon",
        "Macera"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 41 dk.",
      "Yönetmen": "Wes Anderson",
      "imdb": "7.8/10",
      "Değerlendirme": "193308",
      "metacritic": "82"
    },
    "paragraf": "Isle of Dogs, Japonya'da bir köpek adasında geçen ve köpeklerin birlikte yaşadığı bir macerayı konu alıyor. Bu filmde Bryan Cranston, lider bir köpeği seslendiriyor. Hem eğlenceli hem de duygusal olan bu animasyon, Bryan Cranston imdb değerlendirmelerinde dikkat çeken bir performansa sahip."
  },
  {
    "num": "2",
    "title_id": "tt2267968",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-2",
    "name": "Kung Fu Panda 3",
    "image": "/images/movies/Bryan_Cranston_kung_fu_panda_3.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "Jack Black"
      ],
      "Kategori": [
        "Animasyon",
        "Komedi"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Alessandro Carloni",
      "imdb": "7.1/10",
      "Değerlendirme": "193818",
      "metacritic": "66"
    },
    "paragraf": "Kung Fu Panda 3, Po ve yeni arkadaşlarının kahkaha dolu maceralarını konu alıyor. Bryan Cranston, Po'nun babası olarak seslendirme kadrosunda yer alarak bu animasyon filmine renk katıyor. Bryan Cranston en iyi filmi listesinde bu eğlenceli yapımla animasyon kategorisinde de yer alıyor."
  },
  {
    "num": "1",
    "title_id": "tt1355631",
    "url": "https://enonlar.com/bryan-cranston-en-iyi-10-filmi#bolum-1",
    "name": "The Infiltrator - İnfazcı",
    "image": "/images/movies/Bryan_Cranston_the_infiltrator_-_infazci.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bryan Cranston",
        "John Leguizamo",
        "Leanne Best"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "Brad Furman",
      "imdb": "7/10",
      "Değerlendirme": "79530",
      "metacritic": "66"
    },
    "paragraf": "The Infiltrator, bir gümrük ajanının Pablo Escobar'ın uyuşturucu imparatorluğuna sızma çabalarını anlatıyor. Bryan Cranston, kararlı ve cesaret dolu performansıyla film boyunca hafızalardan silinmeyen bir etki bırakıyor. Bu Bryan Cranston en iyi filmleri arasında yüksek bir yerde, özellikle suç ve drama severler için kaçırılmaması gereken bir başyapıt."
  }

];

const ana_resim = "/images/ana_gorseller/bryan-cranston-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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