
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function AlPacinoEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "al-pacino-en-iyi-10-filmi";
const baslik = "Al Pacino en iyi 10 filmi";
const metin = "Al Pacino, sinema dünyasında geride bıraktığımız elli yıl boyunca unutulmaz performanslara imza atan ikonik bir aktördür. Karakterlerinin derinliği ve inandırıcılığı ile tanınan Al Pacino filmleri imdb puanlarıyla da öne çıkmaktadır. İşte al pacino filmleri listesi ile en iyi performanslarına göz atalım.";
const bitis_metin = "Bu yazıda Al Pacino'nun en iyi 10 performansını inceledik. Al Pacino filmleri, sinema tarihine damgasını vurarak izleyenleri her daim etkilemiştir. Sizlerin de bu etkileyici yapımları keşfetmenizi öneririz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["al","pacino","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:17:03+03:00";
const degistirilmeTarihi = "2024-08-09T17:17:03+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/al_pacino_al-pacino-en-iyi-10-filmi#bolum-10",
    "name": "Ocean's Thirteen - Ocean's 13",
    "image": "/images/movies/al_pacino_ocean's_thirteen_-_ocean's_13.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "2 sa. 2 dk.",
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Oyuncular": [
        "George Clooney",
        "Brad Pitt"
      ],
      "Yönetmen": "Steven Soderbergh",
      "imdb": "6.9/10",
      "Değerlendirme": "370000",
      "metascore": "62"
    },
    "paragraf": "Ocean's Thirteen, suç dünyasının içinde dönen heyecan dolu bir filmdir. Al Pacino, bu filmde büyük emlak kralı Willy Bank rolüyle izleyicileri etkilemiştir. Al Pacino filmleri imdb listesinde yer almasa da eğlenceli hikayesi ve zengin kadrosu ile izlenmeye değer bir yapım."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/al-pacino-en-iyi-10-filmi#bolum-9",
    "name": "Donnie Brasco - Köstebek",
    "image": "/images/movies/al_pacino_donnie_brasco_-_kostebek.jpg",
    "ozellikler": {
      "Yıl": "1997",
      "Süre": "2 sa. 7 dk.",
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Johnny Depp"
      ],
      "Yönetmen": "Mike Newell",
      "imdb": "7.7/10",
      "Değerlendirme": "336000",
      "metascore": "77"
    },
    "paragraf": "Donnie Brasco'da, Al Pacino mafya ailesinin üyesi Lefty Ruggiero'yu canlandırıyor. Filmde, FBI ajanı Donnie Brasco'nun gizli görevi işleniyor. Al Pacino'nun sergilediği samimi ve dokunaklı performans, bu filmi al pacino filmleri listesi arasına sokuyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/al-pacino-en-iyi-10-filmi#bolum-8",
    "name": "Serpico - Serpico",
    "image": "/images/movies/al_pacino_serpico_-_serpico.jpg",
    "ozellikler": {
      "Yıl": "1973",
      "Süre": "2 sa. 10 dk.",
      "Kategori": [
        "Biyografi",
        "Suç"
      ],
      "Oyuncular": [
        "John Randolph"
      ],
      "Yönetmen": "Sidney Lumet",
      "imdb": "7.7/10",
      "Değerlendirme": "137000",
      "metascore": "83"
    },
    "paragraf": "Serpico, dürüst bir polis memuru olan Frank Serpico'nun gerçek hayat hikayesini anlatıyor. Al Pacino’nun unutulmaz performansı, yolsuzluğa karşı savaş veren bir polisin mücadelesini canlandırarak al pacino en iyi filmleri imdb sıralamasında hak ettiği yeri buldu."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/al-pacino-en-iyi-10-filmi#bolum-7",
    "name": "Dog Day Afternoon - Köpeklerin Günü",
    "image": "/images/movies/al_pacino_dog_day_afternoon_-_kopeklerin_gunu.jpg",
    "ozellikler": {
      "Yıl": "1975",
      "Süre": "2 sa. 5 dk.",
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Oyuncular": [
        "John Cazale"
      ],
      "Yönetmen": "Sidney Lumet",
      "imdb": "8.0/10",
      "Değerlendirme": "276000",
      "metascore": "86"
    },
    "paragraf": "Dog Day Afternoon, başarısız bir banka soygununun gerilim dolu anlarını ekrana taşıyor. Al Pacino, işlettiği yoğun emosyonlarla dolu performansıyla baş karakter Sonny olarak izleyicileri etkiler. Al Pacino filmleri listesi arasında öne çıkar."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/al-pacino-en-iyi-10-filmi#bolum-6",
    "name": "Scent of a Woman - Kadın Kokusu",
    "image": "/images/movies/al_pacino_scent_of_a_woman_-_kadin_kokusu.jpg",
    "ozellikler": {
      "Yıl": "1992",
      "Süre": "2 sa. 36 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Chris O'Donnell"
      ],
      "Yönetmen": "Martin Brest",
      "imdb": "8.0/10",
      "Değerlendirme": "334000",
      "metascore": "57"
    },
    "paragraf": "Al Pacino'yu Oscar'a taşıyan Scent of a Woman'da, kör bir albay olan Frank Slade'in yaşamına tanıklık ederiz. Duygusal derinliği ve etkileyici performansıyla al pacino en iyi filmleri imdb listelerinde her daim bulunur."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/al-pacino-en-iyi-10-filmi#bolum-5",
    "name": "Heat - Büyük Hesaplaşma",
    "image": "/images/movies/al_pacino_heat_-_buyuk_hesaplasma.jpg",
    "ozellikler": {
      "Yıl": "1995",
      "Süre": "2 sa. 50 dk.",
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Oyuncular": [
        "Robert De Niro"
      ],
      "Yönetmen": "Michael Mann",
      "imdb": "8.3/10",
      "Değerlendirme": "728000",
      "metascore": "76"
    },
    "paragraf": "Heat filmi, Al Pacino ve Robert De Niro'nun efsanevi karşılaşmasına sahne olur. İzleyicilere, soygun temalı senaryosuyla gerilim dolu anlar yaşatır. Al Pacino filmleri imdb puanlamasına göre üst sıralarda yer almaktadır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/al-pacino-en-iyi-10-filmi#bolum-4",
    "name": "Scarface - Yaralı Yüz",
    "image": "/images/movies/al_pacino_scarface_-_yarali_yuz.jpg",
    "ozellikler": {
      "Yıl": "1983",
      "Süre": "2 sa. 50 dk.",
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Oyuncular": [
        "Michelle Pfeiffer"
      ],
      "Yönetmen": "Brian De Palma",
      "imdb": "8.3/10",
      "Değerlendirme": "928000",
      "metascore": "65"
    },
    "paragraf": "Scarface filminde Al Pacino, Kübalı göçmen Tony Montana'yı canlandırıyor. Bu suç ve gerilim dolu hikaye Miami'nin uyuşturucu trafiğinin karanlık dünyasına çeker. Al Pacino filmleri listesi içerisinde köşe taşı niteliğinde bir yapıttır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/al-pacino-en-iyi-10-filmi#bolum-3",
    "name": "The Irishman - İrlandalı",
    "image": "/images/movies/al_pacino_the_irishman_-_irlandali.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "3 sa. 29 dk.",
      "Kategori": [
        "Biyografi",
        "Suç"
      ],
      "Oyuncular": [
        "Robert De Niro",
        "Joe Pesci"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "7.8/10",
      "Değerlendirme": "436000",
      "metascore": "94"
    },
    "paragraf": "The Irishman, Al Pacino'yu sendika lideri Jimmy Hoffa olarak beyaz perdede karşımıza çıkarıyor. Martin Scorsese'nin yönettiği bu epik suç draması, al pacino en iyi filmleri imdb sıralamasında etkileyici bir yere sahiptir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/al-pacino-en-iyi-10-filmi#bolum-2",
    "name": "The Godfather: Part II - Baba: Bölüm II",
    "image": "/images/movies/al_pacino_the_godfather_part_ii_-_baba_bolum_ii.jpg",
    "ozellikler": {
      "Yıl": "1974",
      "Süre": "3 sa. 22 dk.",
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Oyuncular": [
        "Robert De Niro",
        "Diane Keaton"
      ],
      "Yönetmen": "Francis Ford Coppola",
      "imdb": "9.0/10",
      "Değerlendirme": "1400000",
      "metascore": "90"
    },
    "paragraf": "The Godfather: Part II, Al Pacino'nun muazzam bir performansla Michael Corleone karakterini daha da derinleştirdiği bir film. Film, al pacino filmleri listesi içinde en üst sıralarda yer alarak izleyiciyi etkileyen bir şaheserdir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/al-pacino-en-iyi-10-filmi#bolum-1",
    "name": "The Godfather - Baba",
    "image": "/images/movies/al_pacino_the_godfather_-_baba.jpg",
    "ozellikler": {
      "Yıl": "1972",
      "Süre": "2 sa. 55 dk.",
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Oyuncular": [
        "Marlon Brando",
        "James Caan"
      ],
      "Yönetmen": "Francis Ford Coppola",
      "imdb": "9.2/10",
      "Değerlendirme": "2000000",
      "metascore": "100"
    },
    "paragraf": "The Godfather, sinema tarihinin en efsanevi yapımlarından biridir. Al Pacino'nun yükselişindeki dönüm noktası olan bu yapıtta, Michael Corleone'nin dramatik dönüşümünü izliyoruz. Al pacino en iyi filmleri imdb listelerinde zirvede yer alır."
  }

];

const ana_resim = "/images/ana_gorseller/al-pacino-en-iyi-10-filmi-kapak.jpg" //! SEN DOLDUR
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