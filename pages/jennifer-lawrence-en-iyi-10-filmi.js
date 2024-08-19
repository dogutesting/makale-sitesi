
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JenniferLawrenceEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jennifer-lawrence-en-iyi-10-filmi";
const baslik = "Jennifer Lawrence en iyi 10 filmi";
const metin = "Jennifer Lawrence, Hollywood'un en etkileyici oyuncularından biri olarak kabul ediliyor. Bu makalede onun performansını parlatan ve Jennifer Lawrence izlenmesi gereken filmleri içeren en etkili yapımları sıralıyoruz.";
const bitis_metin = "Yukarıda listelenen filmler, Jennifer Lawrence'in çeşitli rollerdeki üstün performansını ve film seçimlerindeki cesaretini gösteren örnekler. Umarız bu Jennifer Lawrence en iyi filmleri listesi izleme listenize yeni katkılar sağlar.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jennifer","lawrence","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T19:17:44+03:00";
const degistirilmeTarihi = "2024-05-25T19:17:44+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-10",
    "name": "The Hunger Games - Açlık Oyunları",
    "image": "/images/movies/jennifer_lawrence_the_hunger_games_-_aclik_oyunlari.jpg",
    "ozellikler": {
      "Yönetmen": "Gary Ross",
      "Oyuncular": [
        "Jennifer Lawrence",
        "Josh Hutcherson",
        "Liam Hemsworth"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Drama",
        "Macera"
      ],
      "Süre": "2 sa. 22 dk.",
      "Yıl": "2012",
      "imdb": "7.2/10",
      "Değerlendirme": "1000000",
      "metascore": "68"
    },
    "paragraf": "Açlık Oyunları serisinin ilkiyle liste başlıyoruz. Jennifer Lawrence en iyi filmleri arasında öne çıkan bu dramatik yapımda, distopik bir evrende yaşam mücadelesi veren güçlü karakter Katniss Everdeen'i canlandırıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-9",
    "name": "Silver Linings Playbook - Umut Işığım",
    "image": "/images/movies/jennifer_lawrence_silver_linings_playbook_-_umut_isigim.jpg",
    "ozellikler": {
      "Yönetmen": "David O. Russell",
      "Oyuncular": [
        "Jennifer Lawrence",
        "Bradley Cooper",
        "Robert De Niro"
      ],
      "Kategori": [
        "Komedi",
        "Drama",
        "Romantik"
      ],
      "Süre": "2 sa. 2 dk.",
      "Yıl": "2012",
      "imdb": "7.7/10",
      "Değerlendirme": "744000",
      "metascore": "81"
    },
    "paragraf": "Jennifer Lawrence en iyi filmi olarak değerlendirilen Umut Işığım'da, Tiffany Maxwell olarak Oscar kazandıran performansını sergiliyor. Bu film, kişisel ve romantik iyileşme yolculuğunu tatlı bir şekilde ele alıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-8",
    "name": "Winter's Bone - Kışın Kemikleri",
    "image": "/images/movies/jennifer_lawrence_winter_s_bone_-_kisin_kemikleri.jpg",
    "ozellikler": {
      "Yönetmen": "Debra Granik",
      "Oyuncular": [
        "Jennifer Lawrence",
        "John Hawkes"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 40 dk.",
      "Yıl": "2010",
      "imdb": "7.1/10",
      "Değerlendirme": "151000",
      "metascore": "90"
    },
    "paragraf": "Jennifer Lawrence filmleri içinde önemli bir yere sahip olan Kışın Kemikleri, onun yeteneklerini geniş kitlelere tanıtan bağımsız bir drama. Bir aile üyesini arayan genç bir kadının hikayesini sarsıcı bir şekilde anlatıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-7",
    "name": "The Hunger Games: Catching Fire - Açlık Oyunları: Ateşi Yakalamak",
    "image": "/images/movies/jennifer_lawrence_the_hunger_games_catching_fire_-_aclik_oyunlari_atesi_yakalamak.jpg",
    "ozellikler": {
      "Yönetmen": "Francis Lawrence",
      "Oyuncular": [
        "Jennifer Lawrence",
        "Josh Hutcherson",
        "Liam Hemsworth"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "2 sa. 26 dk.",
      "Yıl": "2013",
      "imdb": "7.5/10",
      "Değerlendirme": "723000",
      "metascore": "76"
    },
    "paragraf": "Açlık Oyunları serisinin ikinci filmi Ateşi Yakalamak, Jennifer Lawrence en iyi filmleri listesine devam ediyor. Lawrence, Katniss Everdeen rolüyle daha da büyüleyici bir performans sergiliyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-6",
    "name": "X-Men: Days of Future Past - X-Men: Geçmiş Günler Gelecek",
    "image": "/images/movies/jennifer_lawrence_x-men_days_of_future_past_-_x-men_gecmis_gunler_gelecek.jpg",
    "ozellikler": {
      "Yönetmen": "Bryan Singer",
      "Oyuncular": [
        "Jennifer Lawrence",
        "Hugh Jackman",
        "James McAvoy"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "2 sa. 12 dk.",
      "Yıl": "2014",
      "imdb": "7.9/10",
      "Değerlendirme": "747000",
      "metascore": "75"
    },
    "paragraf": "Jennifer Lawrence filmleri arasında belki de en büyük bütçeye sahip olan X-Men: Geçmiş Günler Gelecek, zamanda yolculuk ve başarılı bir topluluk oyunculuğunun harmanlandığı etkileyici bir yapımdır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-5",
    "name": "Mother! - anne!",
    "image": "/images/movies/jennifer_lawrence_mother_-_anne.jpg",
    "ozellikler": {
      "Yönetmen": "Darren Aronofsky",
      "Oyuncular": [
        "Jennifer Lawrence",
        "Javier Bardem"
      ],
      "Kategori": [
        "Drama",
        "Korku"
      ],
      "Süre": "2 sa. 1 dk.",
      "Yıl": "2017",
      "imdb": "6.6/10",
      "Değerlendirme": "250000",
      "metascore": "76"
    },
    "paragraf": "Darren Aronofsky'nin tartışmalı filmi Mother! Jennifer Lawrence'in cesur seçimlerinden biri. Metaforik bir hikaye üzerine kurulu bu film, oyuncunun yetenek sınırlarını zorlayan bir performans sergilediğini gösteriyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-4",
    "name": "American Hustle - Düzenbaz",
    "image": "/images/movies/jennifer_lawrence_american_hustle_-_duzenbaz.jpg",
    "ozellikler": {
      "Yönetmen": "David O. Russell",
      "Oyuncular": [
        "Jennifer Lawrence",
        "Christian Bale",
        "Amy Adams"
      ],
      "Kategori": [
        "Drama",
        "Suç"
      ],
      "Süre": "2 sa. 18 dk.",
      "Yıl": "2013",
      "imdb": "7.2/10",
      "Değerlendirme": "501000",
      "metascore": "90"
    },
    "paragraf": "Jennifer Lawrence'in enerjisi ve karizmasıyla öne çıkan Düzenbaz, gerçek bir hikayeden uyarlamadır. Lawrence'in canlandırdığı karakterin duygusal dalgalanmaları, onun oyunculuk becerisini ortaya koyuyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-3",
    "name": "Joy",
    "image": "/images/movies/jennifer_lawrence_joy.jpg",
    "ozellikler": {
      "Yönetmen": "David O. Russell",
      "Oyuncular": [
        "Jennifer Lawrence",
        "Bradley Cooper",
        "Robert De Niro"
      ],
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Süre": "2 sa. 4 dk.",
      "Yıl": "2015",
      "imdb": "6.6/10",
      "Değerlendirme": "146000",
      "metascore": "56"
    },
    "paragraf": "Joy filmi, bir kadının başarı ve bağımsızlık yolculuğunu ele alıyor. Jennifer Lawrence, başrolde gerçek bir yaşam hikayesini canlandırarak, güçlü bir kadın portresi çiziyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-2",
    "name": "Red Sparrow - Kızıl Serçe",
    "image": "/images/movies/jennifer_lawrence_red_sparrow_-_kizil_serce.jpg",
    "ozellikler": {
      "Yönetmen": "Francis Lawrence",
      "Oyuncular": [
        "Jennifer Lawrence",
        "Joel Edgerton"
      ],
      "Kategori": [
        "Gizem",
        "Gerilim"
      ],
      "Süre": "2 sa. 20 dk.",
      "Yıl": "2018",
      "imdb": "6.6/10",
      "Değerlendirme": "202000",
      "metascore": "53"
    },
    "paragraf": "Kızıl Serçe, Jennifer Lawrence'in yeteneklerini yeni bir ışıkta gösteriyor. Bu gerilim dolu casus filmi, onun fiziksel ve duygusal derinliklerine iniyor ve etkileyici bir performans sunuyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jennifer-lawrence-en-iyi-10-filmi#bolum-1",
    "name": "Passengers - Uzay Yolcuları",
    "image": "/images/movies/jennifer_lawrence_passengers_-_uzay_yolculari.jpg",
    "ozellikler": {
      "Yönetmen": "Morten Tyldum",
      "Oyuncular": [
        "Jennifer Lawrence",
        "Chris Pratt"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Drama",
        "Romantik"
      ],
      "Süre": "1 sa. 56 dk.",
      "Yıl": "2016",
      "imdb": "7.0/10",
      "Değerlendirme": "449000",
      "metascore": "41"
    },
    "paragraf": "Jennifer Lawrence filmleri arasında büyük bütçeli ve görsel olarak etkileyici olan Passengers, romantik ve bilim kurgu unsurlarıyla dikkat çekiyor. Lawrence ve Pratt'in uyumu, filmin öne çıkan yönlerinden."
  }

];

const ana_resim = "/images/ana_gorseller/jennifer_lawrence_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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