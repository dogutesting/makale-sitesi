
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function LivTylerEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "liv-tyler-en-iyi-10-filmi";
const baslik = "Liv Tyler en iyi 10 filmi";
const metin = "Liv Tyler, yetenekli oyunculuğu ve farklı rolleriyle sinema dünyasında kendine özel bir yer edinmiştir. liv tyler filmleri, kariyerinin dönüm noktaları olmuştur. Bu makalede, liv tyler oynadığı filmler arasından seçilmiş en iyi 10 filmi sizler için derledik.";
const bitis_metin = "Bu yazımızda Liv Tyler'ın en unutulmaz performanslarına yer verdik. Liv Tyler filmleri, sinema tarihine geçen birçok önemli yapıma imza atıyor. Umarız siz de bu filmleri izlerken keyif alırsınız.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["liv","tyler","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:16:35+03:00";
const degistirilmeTarihi = "2024-08-09T17:16:35+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0490204",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-10",
    "name": "Reign Over Me - Beni Unutma",
    "image": "/images/movies/Liv_Tyler_reign_over_me_-_beni_unutma.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "2 sa. 4 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Adam Sandler",
        "Don Cheadle"
      ],
      "Yönetmen": "Mike Binder",
      "imdb": "7.4/10",
      "Değerlendirme": "99956",
      "metacritic": "61"
    },
    "paragraf": "Liv Tyler'ın oynadığı Reign Over Me, trajik bir kaybın ardından yaşamını düzene sokmaya çalışan bir adamın hikayesini anlatıyor. Film, güçlü duygusal temasları ve etkileyici performanslarıyla dikkat çekiyor. Liv Tyler en iyi filmleri arasında bu yeterince öne çıkmayı başarıyor."
  },
  {
    "num": "9",
    "title_id": "tt0203755",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-9",
    "name": "One Night at McCool's - McCool's Gecesi",
    "image": "/images/movies/Liv_Tyler_one_night_at_mccool's_-_mccool's_gecesi.jpg",
    "ozellikler": {
      "Yıl": "2001",
      "Süre": "1 sa. 33 dk.",
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Matt Dillon",
        "Michael Douglas"
      ],
      "Yönetmen": "Harald Zwart",
      "imdb": "6.2/10",
      "Değerlendirme": "31435",
      "metacritic": "46"
    },
    "paragraf": "One Night at McCool's filminde Liv Tyler, McCool's barında yaşanan karmaşık ve eğlenceli olayların merkezindeki femme fatale rolüyle izleyicileri büyülüyor. Komedi ve suçun bir araya geldiği bu filmde Tyler, unutulmaz anlar yaşatıyor. Liv Tyler filmleri arasında eğlenceli bir yapım."
  },
  {
    "num": "8",
    "title_id": "tt0482606",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-8",
    "name": "The Strangers - Ziyaretçiler",
    "image": "/images/movies/Liv_Tyler_the_strangers_-_ziyaretciler.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "1 sa. 26 dk.",
      "Kategori": [
        "Gerilim",
        "Korku"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Scott Speedman",
        "Gemma Ward"
      ],
      "Yönetmen": "Bryan Bertino",
      "imdb": "6.1/10",
      "Değerlendirme": "147479",
      "metacritic": "47"
    },
    "paragraf": "The Strangers, geceleyin bir evde mahsur kalan bir çifti konu alıyor. Liv Tyler, korku dolu atmosferdeki performansıyla takdir topluyor. Liv Tyler oynadığı filmler arasında gerilim dozu yüksek, heyecan verici bir yapıma imza atmış oluyor."
  },
  {
    "num": "7",
    "title_id": "tt0112950",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-7",
    "name": "Empire Records - İmparatorluk Kayıtları",
    "image": "/images/movies/Liv_Tyler_empire_records_-_imparatorluk_kayitlari.jpg",
    "ozellikler": {
      "Yıl": "1995",
      "Süre": "1 sa. 30 dk.",
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Anthony LaPaglia",
        "Rory Cochrane"
      ],
      "Yönetmen": "Allan Moyle",
      "imdb": "6.7/10",
      "Değerlendirme": "62727",
      "metacritic": "47"
    },
    "paragraf": "Empire Records, bir müzik dükkanında çalışan gençlerin yaşadığı olayları konu alıyor. Liv Tyler'ın yer aldığı bu film, gençlik enerjisi ve eğlenceli hikayesiyle izleyicilere keyifli anlar sunuyor. Liv Tyler filmleri arasında kült bir klasik olarak değer görüyor."
  },
  {
    "num": "6",
    "title_id": "tt0800080",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-6",
    "name": "The Incredible Hulk - İnanılmaz Hulk",
    "image": "/images/movies/Liv_Tyler_the_incredible_hulk_-_inanilmaz_hulk.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "1 sa. 52 dk.",
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Edward Norton",
        "Tim Roth"
      ],
      "Yönetmen": "Louis Leterrier",
      "imdb": "6.6/10",
      "Değerlendirme": "528765",
      "metacritic": "61"
    },
    "paragraf": "The Incredible Hulk, Marvel evreninin sevilen karakterlerinden birini beyaz perdeye taşıyor. Liv Tyler, Bruce Banner'ın sevgilisi Betty Ross karakterine hayat veriyor. Aksiyon dolu bu film, Liv Tyler en iyi filmleri arasında yerini alıyor."
  },
  {
    "num": "5",
    "title_id": "tt0117737",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-5",
    "name": "Stealing Beauty - Baştan Çıkarılmış Güzellik",
    "image": "/images/movies/Liv_Tyler_stealing_beauty_-_bastan_cikarilmis_guzellik.jpg",
    "ozellikler": {
      "Yıl": "1996",
      "Süre": "1 sa. 58 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Jeremy Irons",
        "Donal McCann"
      ],
      "Yönetmen": "Bernardo Bertolucci",
      "imdb": "6.5/10",
      "Değerlendirme": "30768",
      "metacritic": "60"
    },
    "paragraf": "Stealing Beauty, genç bir kızın İtalya'daki bir yaz tatilinde keşfettiği aşk ve sırları ele alıyor. Liv Tyler'ın etkileyici performansı, izleyicileri çok etkiliyor. Liv Tyler oynadığı filmler içinde bu film, sanatsal yaklaşımıyla ön plana çıkıyor."
  },
  {
    "num": "4",
    "title_id": "tt0300051",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-4",
    "name": "Jersey Girl - Babam İçin",
    "image": "/images/movies/Liv_Tyler_jersey_girl_-_babam_icin.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "1 sa. 42 dk.",
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Ben Affleck",
        "Jennifer Lopez"
      ],
      "Yönetmen": "Kevin Smith",
      "imdb": "6.2/10",
      "Değerlendirme": "71473",
      "metacritic": "43"
    },
    "paragraf": "Jersey Girl, beklenmedik bir şekilde kızını tek başına büyütmek zorunda kalan bir babanın hikayesini anlatıyor. Liv Tyler, filmde Ollie'nin hayatını değiştiren en önemli karakterlerden biridir. Liv Tyler en iyi filmleri arasında sıcak bir aile draması."
  },
  {
    "num": "3",
    "title_id": "tt0120591",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-3",
    "name": "Armageddon - Armageddon",
    "image": "/images/movies/Liv_Tyler_armageddon_-_armageddon.jpg",
    "ozellikler": {
      "Yıl": "1998",
      "Süre": "2 sa. 31 dk.",
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Bruce Willis",
        "Ben Affleck"
      ],
      "Yönetmen": "Michael Bay",
      "imdb": "6.7/10",
      "Değerlendirme": "455216",
      "metacritic": "42"
    },
    "paragraf": "Armageddon, dünyayı tehdit eden bir asteroidi durdurmak için bir araya gelen ekibi konu alıyor. Liv Tyler, içten ve duygusal performansıyla filmin duygusal yönünü derinleştiriyor. Liv Tyler filmleri arasında unutulmaz bir aksiyon deneyimi sunuyor."
  },
  {
    "num": "2",
    "title_id": "tt2935510",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-2",
    "name": "Ad Astra - Yıldızlara Doğru",
    "image": "/images/movies/Liv_Tyler_ad_astra_-_yildizlara_dogru.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "2 sa. 4 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Dram"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Brad Pitt",
        "Tommy Lee Jones"
      ],
      "Yönetmen": "James Gray",
      "imdb": "6.5/10",
      "Değerlendirme": "263054",
      "metacritic": "80"
    },
    "paragraf": "Ad Astra, uzayda geçen sürükleyici bir yolculuğu anlatıyor. Liv Tyler, Roy McBride'ın geçmişiyle yüzleşmesine yardımcı olan bir figür olarak karşımıza çıkıyor. Film, Liv Tyler oynadığı filmler arasında görsel zenginliği ve derin hikayesiyle öne çıkıyor."
  },
  {
    "num": "1",
    "title_id": "tt0120737",
    "url": "https://enonlar.com/liv-tyler-en-iyi-10-filmibolum-1",
    "name": "The Lord of the Rings: The Fellowship of the Ring - Yüzüklerin Efendisi: Yüzük Kardeşliği",
    "image": "/images/movies/Liv_Tyler_the_lord_of_the_rings__the_fellowship_of_the_ring_-_yuzuklerin_efendisi__yuzuk_kardesligi.jpg",
    "ozellikler": {
      "Yıl": "2001",
      "Süre": "2 sa. 58 dk.",
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Oyuncular": [
        "Liv Tyler",
        "Elijah Wood",
        "Ian McKellen"
      ],
      "Yönetmen": "Peter Jackson",
      "imdb": "8.9/10",
      "Değerlendirme": "2032053",
      "metacritic": "92"
    },
    "paragraf": "The Lord of the Rings: The Fellowship of the Ring, epik bir macera ve fantastik bir dünyayı keşfetmek isteyenler için bir başyapıt. Liv Tyler, Arwen karakteriyle filmde zarafetini ve gücünü sergileyerek Liv Tyler en iyi filmleri arasında baş sırada yer alıyor."
  }

];

const ana_resim = "/images/ana_gorseller/liv-tyler-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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