
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MartinScorseseEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "martin-scorsese-en-iyi-10-filmi";
const baslik = "Martin Scorsese En İyi 10 Filmi";
const metin = "Martin Scorsese, sinema tarihine damga vurmuş, ikonik sahneler ve derin karakter analizleriyle tanınan bir yönetmendir. İşte, onun en beğenilen 10 eserini sizler için derledik. Bu listede, martin scorsese filmleri ve martin scorsese en iyi filmleri gibi klasikleri keşfedeceksiniz.";
const bitis_metin = "Bu yazımızda, Martin Scorsese'nin sinema dünyasına kazandırdığı en iyi 10 filmi inceledik. Umarız, bu liste size onun sinema dalındaki yeteneğini ve işlerinin kalitesini bir kez daha hatırlatmıştır. İyi seyirler dileriz!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["martin","scorsese","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:26:27+03:00";
const degistirilmeTarihi = "2024-08-09T17:26:27+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1130884",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-10",
    "name": "Shutter Island - Zindan Adası",
    "image": "/images/movies/Leonardo_DiCaprio_shutter_island_-_zindan_adasi.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "2 sa. 18 dk.",
      "Kategori": [
        "Gerilim",
        "Gizem"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Mark Ruffalo"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.2/10",
      "Değerlendirme": "1480843",
      "metacritic": "63"
    },
    "paragraf": "2010 yapımı Shutter Island, Martin Scorsese'nin yönetmenlik dehasını konuşturduğu bir gerilim başyapıtıdır. Ünlü oyuncular Leonardo DiCaprio ve Mark Ruffalo'nun müthiş performanslarıyla bezenen film, psikolojik derinliği ve tüyler ürperten atmosferiyle martın scorsese en iyi filmleri arasında yer almaktadır."
  },
  {
    "num": "9",
    "title_id": "tt0490215",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-9",
    "name": "Silence - Sessizlik",
    "image": "/images/movies/Andrew_Garfield_silence_-_sessizlik.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "2 sa. 41 dk.",
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Oyuncular": [
        "Andrew Garfield",
        "Adam Driver"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "7.2/10",
      "Değerlendirme": "124210",
      "metacritic": "79"
    },
    "paragraf": "Silence, Martin Scorsese'nin uzun zamandır üzerinde çalıştığı bir proje olup, izleyicilere tarih ve inanç kavramlarını sorgulatan bir dram sunuyor. Andrew Garfield ve Adam Driver'ın başrolde yer aldığı bu film, görsel muhteşemliğiyle de izleyicileri etkilerken, martın scorsese filmleri dendiğinde akla gelen yapımlardan biri."
  },
  {
    "num": "8",
    "title_id": "tt0106226",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-8",
    "name": "The Age of Innocence - Masumiyet Yaşı",
    "image": "/images/movies/Daniel_Day-Lewis_the_age_of_innocence_-_masumiyet_yasi.jpg",
    "ozellikler": {
      "Yıl": "1993",
      "Süre": "2 sa. 19 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Michelle Pfeiffer"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "7.2/10",
      "Değerlendirme": "68670",
      "metacritic": "90"
    },
    "paragraf": "Scorsese'nin çok yönlülüğünü gösteren nadide yapımlardan biri olan The Age of Innocence, aşk ve toplumsal normları irdeleyen etkileyici bir drama örneğidir. Daniel Day-Lewis ve Michelle Pfeiffer'ın muhteşem oyunculuklarıyla zenginleşen bu film, martın scorsese en iyi filmleri listesinin vazgeçilmezleri arasında."
  },
  {
    "num": "7",
    "title_id": "tt0338751",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-7",
    "name": "The Aviator - Göklerin Hakimi",
    "image": "/images/movies/Leonardo_DiCaprio_the_aviator_-_goklerin_hakimi.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "2 sa. 50 dk.",
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Cate Blanchett"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "7.5/10",
      "Değerlendirme": "386839",
      "metacritic": "77"
    },
    "paragraf": "The Aviator, ünlü havacı ve yönetici Howard Hughes'un hayatını konu edinen bir biyografi filmi olarak Scorsese'nin filmografisinde özel bir yere sahiptir. Leonardo DiCaprio'nun etkileyici bir performans sergilediği bu yapım, martin scorsese filmleri arasında izleyiciler tarafından beğeniyle karşılanmıştır."
  },
  {
    "num": "6",
    "title_id": "tt0217505",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-6",
    "name": "Gangs of New York - New York Çeteleri",
    "image": "/images/movies/Leonardo_DiCaprio_gangs_of_new_york_-_new_york_ceteleri.jpg",
    "ozellikler": {
      "Yıl": "2002",
      "Süre": "2 sa. 47 dk.",
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Daniel Day-Lewis"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "7.5/10",
      "Değerlendirme": "477200",
      "metacritic": "72"
    },
    "paragraf": "19. yüzyılın New York'unu mercek altına alan Gangs of New York, Scorsese'nin tarih sevgisini gözler önüne seren bir epik yapımdır. Daniel Day-Lewis ve Leonardo DiCaprio'nun başrolde yer aldığı film, nefes kesen sahneleriyle martin scorsese en iyi filmleri arasında sıkça anılır."
  },
  {
    "num": "5",
    "title_id": "tt1302006",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-5",
    "name": "The Irishman - İrlandalı",
    "image": "/images/movies/Robert_De_Niro_the_irishman_-_irlandali.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "3 sa. 29 dk.",
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Robert De Niro",
        "Al Pacino"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "7.8/10",
      "Değerlendirme": "436689",
      "metacritic": "94"
    },
    "paragraf": "The Irishman, Scorsese'nin son dönemlerde çektiği ve izleyicileri etkileyen bir suç ve dram filmidir. Robert De Niro ve Al Pacino'nun performanslarıyla adeta bir aktörlük dersi veren bu film, martin scorsese en iyi filmleri arasında zamanla klasikleşmiştir."
  },
  {
    "num": "4",
    "title_id": "tt0101540",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-4",
    "name": "Cape Fear - Korku Burnu",
    "image": "/images/movies/Robert_De_Niro_cape_fear_-_korku_burnu.jpg",
    "ozellikler": {
      "Yıl": "1991",
      "Süre": "2 sa. 8 dk.",
      "Kategori": [
        "Gerilim",
        "Korku"
      ],
      "Oyuncular": [
        "Robert De Niro",
        "Nick Nolte"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "7.3/10",
      "Değerlendirme": "219404",
      "metacritic": "73"
    },
    "paragraf": "Cape Fear, Scorsese'nin gerilim türündeki başarısını sergileyen bir başka şaheserdir. Robert De Niro'nun unutulmaz bir performans sergilediği film, izleyicilere korku dolu anlar yaşatırken martin scorsese filmleri arasında sağlam bir yer edinmiştir."
  },
  {
    "num": "3",
    "title_id": "tt0407887",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-3",
    "name": "The Departed - Köstebek",
    "image": "/images/movies/Leonardo_DiCaprio_the_departed_-_kostebek.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "2 sa. 31 dk.",
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Matt Damon"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.5/10",
      "Değerlendirme": "1438223",
      "metacritic": "85"
    },
    "paragraf": "The Departed, Scorsese'ye En İyi Yönetmen Oscar'ını kazandıran ve izleyicilerin nefesini kesen bir suç gerilim filmidir. Leonardo DiCaprio ve Matt Damon'un başarılı performanslarıyla öne çıkan bu yapım, martin scorsese en iyi filmleri arasında zirveler arasında yer alır."
  },
  {
    "num": "2",
    "title_id": "tt0075314",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-2",
    "name": "Taxi Driver - Taksi Şoförü",
    "image": "/images/movies/Robert_De_Niro_taxi_driver_-_taksi_soforu.jpg",
    "ozellikler": {
      "Yıl": "1976",
      "Süre": "1 sa. 54 dk.",
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Oyuncular": [
        "Robert De Niro",
        "Jodie Foster"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.2/10",
      "Değerlendirme": "934719",
      "metacritic": "94"
    },
    "paragraf": "Taxi Driver, Martin Scorsese'nin kara film tarzındaki en önemli eserlerinden biridir. Robert De Niro'nun Travis Bickle karakteriyle hafızalara kazındığı bu film, şehir hayatının karanlık yüzünü gözler önüne serer ve martın scorsese filmleri arasında kült bir klasik olarak kabul edilir."
  },
  {
    "num": "1",
    "title_id": "tt0099685",
    "url": "https://enonlar.com/martin-scorsese-en-iyi-10-filmibolum-1",
    "name": "Goodfellas - Sıkı Dostlar",
    "image": "/images/movies/Robert_De_Niro_goodfellas_-_siki_dostlar.jpg",
    "ozellikler": {
      "Yıl": "1990",
      "Süre": "2 sa. 26 dk.",
      "Kategori": [
        "Biyografi",
        "Suç"
      ],
      "Oyuncular": [
        "Robert De Niro",
        "Ray Liotta"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.7/10",
      "Değerlendirme": "1273918",
      "metacritic": "92"
    },
    "paragraf": "Goodfellas, suç dünyasının derinliklerine inen ve izleyicileri gerçekçi anlatımıyla büyüleyen bir başyapıttır. Martin Scorsese'nin yönetmenlik tekniği ve anlatım tarzıyla martin scorsese en iyi filmleri dendiğinde ilk akla gelen bu film, zamansız bir klasik olmuştur."
  }

];

const ana_resim = "/images/ana_gorseller/martin-scorsese-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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