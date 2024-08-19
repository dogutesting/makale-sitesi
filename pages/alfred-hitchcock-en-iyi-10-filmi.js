
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function AlfredHitchcockunEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "alfred-hitchcock-en-iyi-10-filmi";
const baslik = "Alfred Hitchcock'un en iyi 10 filmi";
const metin = "Alfred Hitchcock'un sinema dünyasına bıraktığı miras, gerilim dolu filmleriyle hala etkisini sürdürüyor. Bu listede Hitchcock'un en iyi filmlerini derledik. Birçok sinema sever için unutulmaz olan alfred hitchcock en iyi filmleri sinema tarihinde önemli bir yer tutmaktadır.";
const bitis_metin = "Bu yazımızda Hitchcock'un sinema dünyasında iz bırakan en iyi 10 filmini inceledik. Hitchcock'un dahiyane yönetmenliği sayesinde bu filmler, izleyicilere her daim hatırlanacak deneyimler sunmaya devam ediyor. Sinema tarihine meraklı olanlar için bu başyapıtlar mutlaka izlenmeli.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["alfred","hitchcock","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:29:36+03:00";
const degistirilmeTarihi = "2024-08-09T17:29:36+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-10",
    "name": "Rebecca",
    "image": "/images/movies/alfred_hitchcock_rebecca.jpg",
    "ozellikler": {
      "Yıl": "1940",
      "Süre": "2 sa. 10 dk.",
      "Kategori": [
        "Dram",
        "Gizem",
        "Gerilim"
      ],
      "Oyuncular": [
        "Laurence Olivier",
        "Joan Fontaine"
      ],
      "imdb": "8.1/10",
      "Değerlendirme": "148000",
      "metascore": "86"
    },
    "paragraf": "Rebecca, Alfred Hitchcock'un Hollywood'daki ilk filmi olarak bilinir ve ona En İyi Film Oscar ödülünü kazandırmıştır. Laurence Olivier ve Joan Fontaine'in başrollerini paylaştığı film, Daphne du Maurier'in romanından uyarlanmıştır. Gizem ve gerilim dolu senaryosuyla izleyiciyi etkileyen Rebecca, hitchcock filmleri arasında öne çıkmaktadır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-9",
    "name": "Cinayet Var - Dial M for Murder",
    "image": "/images/movies/alfred_hitchcock_cinayet_var_-_dial_m_for_murder.jpg",
    "ozellikler": {
      "Yıl": "1954",
      "Süre": "1 sa. 45 dk.",
      "Kategori": [
        "Suç",
        "Gizem",
        "Gerilim"
      ],
      "Oyuncular": [
        "Ray Milland",
        "Grace Kelly"
      ],
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "8.2/10",
      "Değerlendirme": "191000",
      "metascore": "75"
    },
    "paragraf": "Cinayet Var, Alfred Hitchcock'un rafine suç ve gerilim anlayışının bir örneğidir. Filmde Ray Milland ve Grace Kelly devleriyle benzersiz bir anlatım sunulmuştur. Kinoizleyicileri alfred hitchcock en iyi filmleri söz konusu olduğunda Cinayet Var'ın özgün anlatımını sıklıkla referans alır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-8",
    "name": "Yolcu - The Wrong Man",
    "image": "/images/movies/alfred_hitchcock_yolcu_-_the_wrong_man.jpg",
    "ozellikler": {
      "Yıl": "1956",
      "Süre": "1 sa. 45 dk.",
      "Kategori": [
        "Film Noir",
        "Dram"
      ],
      "Oyuncular": [
        "Henry Fonda",
        "Vera Miles"
      ],
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "7.4/10",
      "Değerlendirme": "32000",
      "metascore": "83"
    },
    "paragraf": "Yolcu, Henry Fonda'nın dramatik gücüyle dikkat çeken bir hikaye sunuyor. Hitchcock'un alfred hitchcock filmleri arasında gerçek olaylara dayanan nadir eserlerden biri olan bu film, masum olduğunu kanıtlamaya çalışan bir adamın dramatik öyküsünü anlatıyor. Gerilim ve gizem, Hitchcock'un yönetmenlik dehasıyla birleşiyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-7",
    "name": "Hepimizin Katili - Strangers on a Train",
    "image": "/images/movies/alfred_hitchcock_hepimizin_katili_-_strangers_on_a_train.jpg",
    "ozellikler": {
      "Yıl": "1951",
      "Süre": "1 sa. 41 dk.",
      "Kategori": [
        "Film Noir",
        "Gerilim"
      ],
      "Oyuncular": [
        "Farley Granger",
        "Robert Walker"
      ],
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "7.9/10",
      "Değerlendirme": "142000",
      "metascore": "88"
    },
    "paragraf": "Hepimizin Katili, Hitchcock'un dönüm noktası niteliğinde olan eserlerinden biridir. Farley Granger ve Robert Walker'ın etkileyici performanslarıyla desteklenen film, iki yabancının bir tren yolculuğunda suç planı yapmalarıyla başlar. Tansiyonun hiç düşmediği bu film, hitchcock filmleri arasında vazgeçilmez bir şaheserdir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-6",
    "name": "Kuzey Kuzeybatı - North by Northwest",
    "image": "/images/movies/alfred_hitchcock_kuzey_kuzeybati_-_north_by_northwest.jpg",
    "ozellikler": {
      "Yıl": "1959",
      "Süre": "2 sa. 16 dk.",
      "Kategori": [
        "Macera",
        "Gerilim",
        "Gizem"
      ],
      "Oyuncular": [
        "Cary Grant",
        "Eva Marie Saint"
      ],
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "8.3/10",
      "Değerlendirme": "349000",
      "metascore": "98"
    },
    "paragraf": "Kuzey Kuzeybatı, Hitchcock'un en unutulmaz casusluk maceralarından biridir. Cary Grant'in başrolde yer aldığı bu film, indirilemez bir yanlış kimlik olayını ve takip sahneleriyle izleyiciyi gerilim dolu bir yolculuğa çıkarır. Hitchock'un yenilikçi yönü ve anlatımıyla izleyenleri büyüler."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-5",
    "name": "Hırsız Kız - Marnie",
    "image": "/images/movies/alfred_hitchcock_hirsiz_kiz_-_marnie.jpg",
    "ozellikler": {
      "Yıl": "1964",
      "Süre": "2 sa. 10 dk.",
      "Kategori": [
        "Psikolojik Gerilim"
      ],
      "Oyuncular": [
        "Tippi Hedren",
        "Sean Connery"
      ],
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "7.1/10",
      "Değerlendirme": "54000",
      "metascore": "73"
    },
    "paragraf": "Hırsız Kız, Hitchcock'un psikolojik gerilim motiflerini ustaca işlediği filmlerden biridir. Tippi Hedren ve Sean Connery'nin güçlü performansları filmde öne çıkar. Hitchock'un karakter derinliği ve karmaşık anlatımı sayesinde hirsiz kiz, hitchcock en iyi filmleri içerisinde hakettiği yeri alır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-4",
    "name": "Kuşlar - The Birds",
    "image": "/images/movies/alfred_hitchcock_kuslar_-_the_birds.jpg",
    "ozellikler": {
      "Yıl": "1963",
      "Süre": "1 sa. 59 dk.",
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Oyuncular": [
        "Tippi Hedren",
        "Rod Taylor"
      ],
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "7.6/10",
      "Değerlendirme": "207000",
      "metascore": "90"
    },
    "paragraf": "Kuşlar, doğanın insanlara karşı başkaldırdığı bir felaket hikayesi anlatır. Tippi Hedren ve Rod Taylor'un başrollerde olduğu film, alfred hitchcock filmleri arasında en yenilikçi ve ileri görüşlü eserlerden biridir. Tansiyonu yüksek sahneleriyle kuşlar, gerilim türünün klasiklerinden biri olmayı sürdürür."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-3",
    "name": "Ölüm Korkusu - Vertigo",
    "image": "/images/movies/alfred_hitchcock_olum_korkusu_-_vertigo.jpg",
    "ozellikler": {
      "Yıl": "1958",
      "Süre": "2 sa. 9 dk.",
      "Kategori": [
        "Gerilim",
        "Psikolojik Gerilim"
      ],
      "Oyuncular": [
        "James Stewart",
        "Kim Novak"
      ],
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "8.3/10",
      "Değerlendirme": "432000",
      "metascore": "100"
    },
    "paragraf": "Ölüm Korkusu, karmaşık ve psikolojik gerilim unsurlarıyla dolu bir Hitchcock şaheseri. James Stewart ve Kim Novak'ın güçlü performansları, filme olan bağlılığı artırır. Vertigo, sinsice yayılan gerilimi ve sürreal atmosferiyle hitchcock filmleri arasında bir kült klasiğidir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-2",
    "name": "Arka Pencere - Rear Window",
    "image": "/images/movies/alfred_hitchcock_arka_pencere_-_rear_window.jpg",
    "ozellikler": {
      "Yıl": "1954",
      "Süre": "1 sa. 52 dk.",
      "Kategori": [
        "Gerilim",
        "Gizem"
      ],
      "Oyuncular": [
        "James Stewart",
        "Grace Kelly"
      ],
      "Yönetmen": "Alfred Hitchcock"
    },
    "paragraf": "Arka Pencere, Hitchcock'un izleyiciyi merak içinde bırakan ve tetikte tutan yapısını ortaya koyar. James Stewart ve Grace Kelly'nin yer aldığı film, pencere arkasından gözlemlerle başlayan bir gerilim dolu yolculuğu konu alır. benzersiz kurgusuyla hitchcock en iyi filmleri arasında üst sıralarda yer alır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/alfred-hitchcock-en-iyi-10-filmi#bolum-1",
    "name": "Sapık - Psycho",
    "image": "/images/movies/alfred_hitchcock_sapik_-_psycho.jpg",
    "ozellikler": {
      "Yıl": "1960",
      "Süre": "1 sa. 49 dk.",
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Oyuncular": [
        "Anthony Perkins",
        "Janet Leigh"
      ],
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "8.5/10",
      "Değerlendirme": "726000",
      "metascore": "97"
    },
    "paragraf": "Sapık, Hitchcock'un gerilim türünde adeta devrim yaratan filmi olarak bilinir. Anthony Perkins ve Janet Leigh'in performansları, alfred hitchcock filmleri deyince akla gelen bu kült filmde unutulmaz sahneler bırakmıştır. Hitchcock'un filmde usulsüz bir şekilde gerilim yaratma sanatı, Psychoyu benzersiz kılar."
  }

];

const ana_resim = "/images/ana_gorseller/alfred-hitchcock-en-iyi-10-filmi-kapak.jpg" //! SEN DOLDUR
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