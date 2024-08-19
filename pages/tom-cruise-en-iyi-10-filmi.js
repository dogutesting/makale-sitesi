
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function TomCruiseEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "tom-cruise-en-iyi-10-filmi";
const baslik = "Tom Cruise en iyi 10 filmi";
const metin = "Tom Cruise, Hollywood'un en tanınmış oyuncularından biri olarak kariyerine sayısız başarılı film sığdırdı. Bu yazımızda, Tom Cruise filmleri arasından en dikkat çekenleri derledik. Tom Cruise oynadığı filmler arasında hangileri Tom Cruise en iyi filmleri arasında yer alıyor, gelin birlikte görelim.";
const bitis_metin = "Tom Cruise'un kariyeri boyunca üstlendiği her rolde iz bırakması şaşırtıcı değil. Bu listede yer alan filmler, Tom Cruise en iyi filmleri arasında yer alıyor. Siz de bu yapımlarla garanti bir sinema keyfi yaşayabilirsiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["tom","cruise","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:21:55+03:00";
const degistirilmeTarihi = "2024-08-16T16:21:55+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-10",
    "name": "The Mummy - Mumya",
    "image": "/images/movies/Tom_Cruise_the_mummy_-_mumya.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Lee Van Cleef",
        "Russell Crowe"
      ],
      "Kategori": [
        "Macera",
        "Korku"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Alex Kurtzman",
      "imdb": "5.4/10",
      "Değerlendirme": "208628",
      "metacritic": "34"
    },
    "paragraf": "The Mummy, Tom Cruise'un 2017 yılında başrolünü üstlendiği, aksiyon ve korku ile harmanlanmış bir macera filmidir. Tom Cruise imdb puanı açısından çok yüksek olmasa da, film görsel efektleri ve aksiyon sahneleriyle dikkat çekiyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-9",
    "name": "Jack Reacher: Never Go Back - Jack Reacher: Asla Geri Dönme",
    "image": "/images/movies/Tom_Cruise_jack_reacher__never_go_back_-_jack_reacher__asla_geri_donme.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Cobie Smulders"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç",
        "Gerilim"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Edward Zwick",
      "imdb": "6.1/10",
      "Değerlendirme": "178754",
      "metacritic": "47"
    },
    "paragraf": "Jack Reacher: Never Go Back, Tom Cruise'un başrolde olduğu bir diğer aksiyon filmidir. Tom Cruise oynadığı filmler arasında yer alan bu yapım, gerilim dolu sahneleri ve sürükleyici hikayesiyle dikkat çekiyor. Tom Cruise imdb değerlendirmelerinde orta sıralarda."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-8",
    "name": "Oblivion - Unutuluş",
    "image": "/images/movies/Tom_Cruise_oblivion_-_unutulus.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Morgan Freeman"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Joseph Kosinski",
      "imdb": "7/10",
      "Değerlendirme": "557413",
      "metacritic": "54"
    },
    "paragraf": "Oblivion, Tom Cruise'un bilim kurgu dünyasına başarılı bir şekilde adım attığı yapıtlardan biri. Tom Cruise en iyi filmi kategorisinde yer almasa da etkileyici görüntüler ve hikaye ile dikkat çekmeyi başaran bir yapım."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-7",
    "name": "Edge of Tomorrow - Yarının Sınırında",
    "image": "/images/movies/Tom_Cruise_edge_of_tomorrow_-_yarinin_sinirinda.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Emily Blunt"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Doug Liman",
      "imdb": "7.9/10",
      "Değerlendirme": "747000",
      "metacritic": "71"
    },
    "paragraf": "Edge of Tomorrow, tekrar eden bir döngüde savaş sahneleriyle dolu, heyecan verici bir bilim kurgu filmidir. Tom Cruise filmleri arasında dikkat çeken bu eser, yüksek Tom Cruise imdb puanına sahiptir ve izleyiciler tarafından beğenilmiştir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-6",
    "name": "A Few Good Men - Birkaç İyi Adam",
    "image": "/images/movies/Tom_Cruise_a_few_good_men_-_birkac_iyi_adam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Jack Nicholson"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Yıl": "1992",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Rob Reiner",
      "imdb": "7.7/10",
      "Değerlendirme": "291600",
      "metacritic": "62"
    },
    "paragraf": "A Few Good Men, Tom Cruise'un genç yaşında oyunculuk yeteneklerini sergilediği bir dram filmidir. Tom Cruise en iyi filmleri arasında gösterilebilir. Son derece etkileyici performanslara sahip olan yapım, unutulmaz bir hukuksal mücadeleyi gözler önüne seriyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-5",
    "name": "Collateral - Tetikçi",
    "image": "/images/movies/Tom_Cruise_collateral_-_tetikci.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Jamie Foxx"
      ],
      "Kategori": [
        "Suç",
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2004",
      "Süre": "2 sa.",
      "Yönetmen": "Michael Mann",
      "imdb": "7.5/10",
      "Değerlendirme": "437390",
      "metacritic": "71"
    },
    "paragraf": "Collateral, Tom Cruise'un anti-kahraman olmayı başardığı etkileyici bir suç-gerilim filmidir. Tom Cruise imdb değerlendirmeleri düşündürücü bir performans sunduğu bu filmi üst düzey bir gerilim yapar. Taşıdığı karanlık atmosfer izleyende iz bırakır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-4",
    "name": "Jerry Maguire",
    "image": "/images/movies/Tom_Cruise_jerry_maguire.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Renée Zellweger",
        "Cuba Gooding Jr."
      ],
      "Kategori": [
        "Komedi",
        "Drama",
        "Romantik"
      ],
      "Yıl": "1996",
      "Süre": "2 sa. 19 dk.",
      "Yönetmen": "Cameron Crowe",
      "imdb": "7.3/10",
      "Değerlendirme": "290125",
      "metacritic": "77"
    },
    "paragraf": "Jerry Maguire, Tom Cruise'un duygusal derinliğiyle öne çıktığı bir drama-komedi filmidir. Tom Cruise en iyi filmi denilince akla gelen bu film, unutulmaz repliklerle dolu ve izleyicilere iz bırakan bir hikaye sunuyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-3",
    "name": "Top Gun: Maverick",
    "image": "/images/movies/Tom_Cruise_top_gun__maverick.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Miles Teller",
        "Val Kilmer"
      ],
      "Kategori": [
        "Aksiyon",
        "Drama"
      ],
      "Yıl": "2022",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Joseph Kosinski",
      "imdb": "8.2/10",
      "Değerlendirme": "723239",
      "metacritic": "78"
    },
    "paragraf": "Top Gun: Maverick, yıllar sonra Tom Cruise'u ikonik rolüyle geri getiren etkileyici bir aksiyon-drama yapımıdır. Tom Cruise filmleri arasında dikkat çeken bu eser, yüksek gerilim ve nostaljik ögeleriyle izleyicilerden tam not aldı."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-2",
    "name": "Rain Man - Yağmur Adam",
    "image": "/images/movies/Tom_Cruise_rain_man_-_yagmur_adam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Dustin Hoffman"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "1988",
      "Süre": "2 sa. 13 dk.",
      "Yönetmen": "Barry Levinson",
      "imdb": "8/10",
      "Değerlendirme": "551565",
      "metacritic": "65"
    },
    "paragraf": "Rain Man, Tom Cruise ve Dustin Hoffman'ın unutulmaz performanslarla dolu bir drama yapımıdır. Tom Cruise en iyi filmleri arasında zirveye yerleşmesi hiç de şaşırtıcı değil. Film, ikili arasında derin bir bağ oluşmasını ve bu süreçte yaşananları gözler önüne sermektedir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/tom-cruise-en-iyi-10-filmi#bolum-1",
    "name": "Mission: Impossible - Fallout",
    "image": "/images/movies/Tom_Cruise_mission__impossible_-_fallout.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tom Cruise",
        "Henry Cavill",
        "Jon Voight"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Gerilim"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Brian De Palma",
      "imdb": "7.2/10",
      "Değerlendirme": "475003",
      "metacritic": "59"
    },
    "paragraf": "Mission: Impossible - Fallout, Tom Cruise'un aksiyon serisinin en etkileyicilerinden biri. Tom Cruise oynadığı filmler içinde en yüksek Tom Cruise imdb puanlarından birini alan film, aksiyon sahneleri ve sürükleyici hikayesiyle diğerlerinden ayrılıyor."
  }

];

const ana_resim = "/images/ana_gorseller/tom-cruise-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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