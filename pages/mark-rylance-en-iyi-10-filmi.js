
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MarkRylanceEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "mark-rylance-en-iyi-10-filmi";
const baslik = "Mark Rylance en iyi 10 filmi";
const metin = "Mark Rylance, sinema dünyasında eşsiz yeteneği ve derinlemesine karakter çalışmaları ile tanınan bir aktördür. Mark Rylance filmleri, onun etkileyici performansları sayesinde daima dikkat çekmiştir. İşte Mark Rylance en iyi filmi ve diğer Mark Rylance oynadığı filmler sıralanışı.";
const bitis_metin = "Bu yazımızda, Mark Rylance'nin sinema kariyerine damga vuran en iyi 10 filmi inceledik. Mark Rylance imdb verilerinde de sıkça öne çıkan bu yapımlar, onun oyunculuk dehasını gözler önüne seriyor. Umarız bu liste size ilham verir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["mark","rylance","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:23:21+03:00";
const degistirilmeTarihi = "2024-08-16T17:23:21+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-10",
    "name": "The Gunman",
    "image": "/images/movies/Mark_Rylance_the_gunman.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Javier Bardem",
        "Idris Elba",
        "Mark Rylance"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Pierre Morel",
      "imdb": "5.8/10",
      "Değerlendirme": "44951"
    },
    "paragraf": "The Gunman, eski bir paralı asker olan Jim Terrier'ın, geçmişteki bir cinayetle yüzleşmek zorunda kalmasını anlatan aksiyon ve gerilim dolu bir yapım. Mark Rylance, filmde önemli bir yan rolüyle dikkat çekiyor. Bu film, Rylance'ın aksiyon türündeki başarılı performansını gözler önüne seriyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-9",
    "name": "The Outfit",
    "image": "/images/movies/Mark_Rylance_the_outfit.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Rylance",
        "Zoey Deutch"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2022",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Graham Moore",
      "imdb": "7.2/10",
      "Değerlendirme": "74672",
      "metacritic": "69"
    },
    "paragraf": "The Outfit, Mark Rylance'nin dram ve gerilimi harika bir şekilde yansıtması ile dikkat çeker. Yönetmen Graham Moore'un bu filmi, izleyicileri karmaşık ve düşündürücü bir hikayenin içine çekiyor. Mark Rylance oynadığı filmler arasında kesinlikle izlenmesi gereken bir eser."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-8",
    "name": "Waiting for the Barbarians",
    "image": "/images/movies/Mark_Rylance_waiting_for_the_barbarians.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Rylance",
        "Johnny Depp"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2019",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Ciro Guerra",
      "imdb": "5.9/10",
      "Değerlendirme": "14955",
      "metacritic": "52"
    },
    "paragraf": "Waiting for the Barbarians, Mark Rylance'nin destansı bir dramda başrol aldığı güçlü bir film. Yönetmen Ciro Guerra'nın bu yapımı, oyuncunun göz alıcı performansıyla izleyicileri tarihsel bir yolculuğa çıkarıyor. Mark Rylance en iyi filmleri listesinde önemli bir yere sahiptir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-7",
    "name": "Dunkirk - Dunkirk",
    "image": "/images/movies/Mark_Rylance_dunkirk_-_dunkirk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Rylance",
        "Fionn Whitehead",
        "Damien Bonnard"
      ],
      "Kategori": [
        "Savaş",
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "7.8/10",
      "Değerlendirme": "749669",
      "metacritic": "94"
    },
    "paragraf": "Dunkirk, Christopher Nolan imzalı bu filmde Mark Rylance, savaşın acımasız yüzünü ve kahramanlarını etkileyici bir şekilde ekranlara taşımıştır. Film, Mark Rylance imdb puanları arasında yüksek sıralarda yer almaktadır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-6",
    "name": "The BFG - The Big Friendly Giant",
    "image": "/images/movies/Mark_Rylance_the_bfg_-_the_big_friendly_giant.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Rylance",
        "Ruby Barnhill"
      ],
      "Kategori": [
        "Fantastik"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "6.3/10",
      "Değerlendirme": "94168",
      "metacritic": "66"
    },
    "paragraf": "The BFG, Steven Spielberg yönetmenliğinde bir fantastik macera filmidir. Mark Rylance, bu filmdeki büyük dost dev rolüyle hem çocuklara hem de yetişkinlere hitap eden bir performans sergiliyor. Mark Rylance oynadığı filmler arasında sevimli bir seçenek."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-5",
    "name": "Bridge of Spies - Casuslar Köprüsü",
    "image": "/images/movies/Mark_Rylance_bridge_of_spies_-_casuslar_koprusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Rylance",
        "Domenick Lombardozzi"
      ],
      "Kategori": [
        "Tarih",
        "Gerilim"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 22 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.6/10",
      "Değerlendirme": "330003",
      "metacritic": "81"
    },
    "paragraf": "Bridge of Spies, soğuk savaş dönemini anlatan etkileyici bir film. Mark Rylance burada Rudolf Abel rolüyle Oscar kazanarak en iyi performanslarından birini sergilemiştir. Hem tarihi anlatımı hem de oyunculuğu ile unutulmaz bir yapım."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-4",
    "name": "The Trial of the Chicago 7 - Şikago Yedilisi'nin Yargılanması",
    "image": "/images/movies/Mark_Rylance_the_trial_of_the_chicago_7_-_sikago_yedilisi'nin_yargilanmasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Rylance",
        "Eddie Redmayne",
        "Alex Sharp"
      ],
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Yıl": "2020",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Aaron Sorkin",
      "imdb": "7.7/10",
      "Değerlendirme": "195352",
      "metacritic": "76"
    },
    "paragraf": "The Trial of the Chicago 7, tarih ve dramatik öğeleri başarıyla bir araya getiriyor. Filmde Mark Rylance, davanın önemli figürlerinden birini canlandırıyor ve bu performansıyla dikkat çekiyor. Mark Rylance en iyi filmleri arasında yer alır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-3",
    "name": "Ready Player One - Başlat",
    "image": "/images/movies/Mark_Rylance_ready_player_one_-_baslat.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Rylance",
        "Tye Sheridan",
        "Olivia Cooke"
      ],
      "Kategori": [
        "Bilimkurgu"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 20 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.4/10",
      "Değerlendirme": "494736",
      "metacritic": "64"
    },
    "paragraf": "Ready Player One, Mark Rylance için bir başka başarılı bilimkurgu yapımıdır. Steven Spielberg'in yönettiği bu film, geleceği ve sanal gerçekliği olağanüstü bir şekilde ele alıyor. Rylance'ın performansı bu hikayeye derinlik katıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-2",
    "name": "Don't Look Up - Yukarı Bakma",
    "image": "/images/movies/Mark_Rylance_don't_look_up_-_yukari_bakma.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Rylance",
        "Leonardo DiCaprio",
        "Jennifer Lawrence"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "2021",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Adam McKay",
      "imdb": "7.2/10",
      "Değerlendirme": "612724",
      "metacritic": "49"
    },
    "paragraf": "Don't Look Up, bir komedi-dram filmi olarak sosyal ve politik konuları ele alıyor. Mark Rylance'nin bu filmdeki rolü, performansının yine çok incelikli ve etkileyici olduğunu gösteriyor. Mark Rylance filmleri arasında son dönemin dikkat çekenlerinden."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/mark-rylance-en-iyi-10-filmi#bolum-1",
    "name": "The Other Boleyn Girl - Boleyn Kızı",
    "image": "/images/movies/Mark_Rylance_the_other_boleyn_girl_-_boleyn_kizi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Rylance",
        "Natalie Portman",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Justin Chadwick",
      "imdb": "6.7/10",
      "Değerlendirme": "120848",
      "metacritic": "50"
    },
    "paragraf": "The Other Boleyn Girl, Mark Rylance'nin etkileyici bir tarih dramı. Filmdeki performansıyla dikkat çeken Rylance, tarihi bir hikayeyi güçlü bir şekilde canlandırıyor. Mark Rylance en iyi filmleri arasında yer alan bu yapım, onun yeteneğini bir kez daha ortaya koyuyor."
  }

];

const ana_resim = "/images/ana_gorseller/mark-rylance-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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