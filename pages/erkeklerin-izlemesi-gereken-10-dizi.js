
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ErkeklerinIzlemesiGereken10DiziMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "erkeklerin-izlemesi-gereken-10-dizi";
const baslik = "Erkeklerin izlemesi gereken 10 dizi";
const metin = "Her erkeğin mutlaka izlemesi gereken dizileri sizler için derledik. Zengin hikayeleri, güçlü karakterleri ve eşsiz yapımlarıyla erkeklerin izlemesi gereken diziler arasında yer alıyorlar. Hem aksiyon dolu hem de düşündürücü bu yapımlar, ekran başında geçireceğiniz en kaliteli zamanları vaat ediyor.";
const bitis_metin = "Bu yazımızda erkeklerin mutlaka izlemesi gereken dizilere göz attık. Her biri kendi türünde eşsiz olan bu yapımlar, izleyiciler için büyüleyici deneyimler sunuyor. Siz de listelediğimiz dizilerle ekran başında unutulmaz anlar yaşayabilirsiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["erkeklerin","izlemesi","gereken","10","dizi"]; //! BAK
const kategori = "motosiklet"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:29:57+03:00";
const degistirilmeTarihi = "2024-08-09T17:29:57+03:00";
const addDate = "09.08.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-10",
    "name": "Jack Ryan",
    "image": "/images/series/jack_ryan.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "John Krasinski",
        "Wendell Pierce"
      ],
      "Yönetmen": "Carlton Cuse",
      "imdb": "8.0/10",
      "Değerlendirme": "178000"
    },
    "paragraf": "Jack Ryan, Tom Clancy'nin ünlü karakterine dayanan bu aksiyon dolu dizi, izleyicileri casusluk dünyasına sürüklüyor. CIA analisti Jack Ryan, uluslararası bir terörist tehdidi keşfettikten sonra aksiyon dolu maceralara atılıyor. Erkeklerin izlemesi gereken diziler arasında fazlasıyla ön plana çıkıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-9",
    "name": "Peaky Blinders",
    "image": "/images/series/peaky_blinders.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Kategori": [
        "Suç",
        "Tarih"
      ],
      "Oyuncular": [
        "Cillian Murphy",
        "Paul Anderson"
      ],
      "Yönetmen": "Steven Knight",
      "imdb": "8.8/10",
      "Değerlendirme": "666000"
    },
    "paragraf": "Peaky Blinders, 1920'lerin Birmingham'ında geçen bu dizi, zeki ve öngörülemeyen lider Tommy Shelby ve ailesinin peşinden mafya dünyasına dalıyor. Dönemin atmosferini ve karmaşık karakter yapılarını mükemmel bir şekilde yansıtan bir yapım olarak erkeklerin izlemesi gereken diziler arasında kesinlikle yer alıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-8",
    "name": "True Detective - Gerçek Dedektif",
    "image": "/images/series/true_detective_-_gercek_dedektif.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Oyuncular": [
        "Matthew McConaughey",
        "Woody Harrelson"
      ],
      "Yönetmen": "Nic Pizzolatto",
      "imdb": "8.9/10",
      "Değerlendirme": "667000"
    },
    "paragraf": "True Detective, karmaşık polisiye hikayeleriyle tanınan bu antoloji dizisi, izleyicileri suç ve adalet kavramları üzerine düşünmeye itiyor. Matthew McConaughey ve Woody Harrelson'un güçlü performansları ile erkeklerin izlemesi gereken diziler arasında yerini alıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-7",
    "name": "The Mandalorian",
    "image": "/images/series/the_mandalorian.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Oyuncular": [
        "Pedro Pascal",
        "Carl Weathers"
      ],
      "Yönetmen": "Jon Favreau",
      "imdb": "8.6/10",
      "Değerlendirme": "598000"
    },
    "paragraf": "The Mandalorian, Star Wars evreninde geçen bu dizi, galaksinin uzak köşelerinde bir ödül avcısının maceralarını konu alıyor. İmkansız görünen görevlerle dolu bu macera, modern bilim kurgu seven erkeklerin izlemesi gereken dizilerden biri olmayı başarıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-6",
    "name": "Fargo",
    "image": "/images/series/fargo.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Kategori": [
        "Suç",
        "Komedi"
      ],
      "Oyuncular": [
        "Billy Bob Thornton",
        "Martin Freeman"
      ],
      "Yönetmen": "Noah Hawley",
      "imdb": "8.9/10",
      "Değerlendirme": "427000"
    },
    "paragraf": "Fargo, kara mizah ve suç hikayelerinin iç içe geçtiği bir dizi olarak, farklı karakterlerin suçla dolu hayatlarına eğiliyor. Kendine has mizah anlayışı ve sürükleyici hikayesiyle erkeklerin izlemesi gereken diziler listesine girmeyi başaran bir yapım."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-5",
    "name": "The Witcher",
    "image": "/images/series/the_witcher.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Kategori": [
        "Fantastik",
        "Aksiyon"
      ],
      "Oyuncular": [
        "Henry Cavill",
        "Anya Chalotra"
      ],
      "Yönetmen": "Lauren Schmidt Hissrich",
      "imdb": "8.0/10",
      "Değerlendirme": "578000"
    },
    "paragraf": "The Witcher, doğaüstü yaratıklarla dolu bir dünyada, para karşılığı canavar avlayan Rivyalı Geralt'ın hikayesini anlatıyor. Fantastik macera ve aksiyonu bir araya getirerek erkeklerin mutlaka izlemesi gereken diziler arasına giriyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-4",
    "name": "Chernobyl - Çernobil",
    "image": "/images/series/chernobyl_-_cernobil.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Kategori": [
        "Drama",
        "Tarih"
      ],
      "Oyuncular": [
        "Jared Harris",
        "Stellan Skarsgård"
      ],
      "Yönetmen": "Craig Mazin",
      "imdb": "9.3/10",
      "Değerlendirme": "885000"
    },
    "paragraf": "Chernobyl, tarihin en vahim nükleer felaketlerinden birini tüm gerçekçiliğiyle ekrana taşıyan bu dizi, ustaca işlenmiş senaryosuyla izleyenleri derin bir düşünceye sevk ediyor. Erkeklerin izlemesi gereken dizilerden biri olan bu yapım, etkileyici gerçekliğiyle dikkat çekiyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-3",
    "name": "Narcos",
    "image": "/images/series/narcos.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Kategori": [
        "Suç",
        "Biyografi"
      ],
      "Oyuncular": [
        "Wagner Moura",
        "Pedro Pascal"
      ],
      "Yönetmen": "Chris Brancato",
      "imdb": "8.8/10",
      "Değerlendirme": "477000"
    },
    "paragraf": "Narcos, korkusuz uyuşturucu baronu Pablo Escobar'ın hayatını ve Amerikan DEA'nın onu alt etmek için verdiği mücadeleyi konu alıyor. Gerçek hikayelerle pekiştirilmiş bu dizi, erkeklerin izlemesi gereken diziler listesinde üst sıralarda yer alıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-2",
    "name": "Breaking Bad",
    "image": "/images/series/breaking_bad.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Oyuncular": [
        "Bryan Cranston",
        "Aaron Paul"
      ],
      "Yönetmen": "Vince Gilligan",
      "imdb": "9.5/10",
      "Değerlendirme": "2200000"
    },
    "paragraf": "Breaking Bad, çağdaş televizyonun en iyi örneklerinden biri olarak, kanser teşhisi konan bir kimya öğretmeninin uyuşturucu dünyasına girişini dramatik ve sürükleyici bir dille anlatıyor. Erkeklerin izlemesi gereken diziler arasında bu başyapıtın özel bir yeri var."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/erkeklerin-izlemesi-gereken-10-dizi#bolum-1",
    "name": "Game of Thrones - Taht Oyunları",
    "image": "/images/series/game_of_thrones_-_taht_oyunlari.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Kategori": [
        "Fantastik",
        "Drama"
      ],
      "Oyuncular": [
        "Emilia Clarke",
        "Kit Harington"
      ],
      "Yönetmen": "David Benioff",
      "imdb": "9.2/10",
      "Değerlendirme": "2300000"
    },
    "paragraf": "Game of Thrones, taht savaşlarının özüne inen epik bir hikaye anlatımı sunarak izleyicileri Westeros'ta benzersiz bir yolculuğa çıkarıyor. Hem görselliği hem de kadrosuyla erkeklerin izlemesi gereken diziler arasında bir efsane olarak kabul ediliyor."
  }
];

const ana_resim = "/images/ana_gorseller/erkeklerin-izlemesi-gereken-10-dizi-kapak.jpg"; //! SEN DOLDUR
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