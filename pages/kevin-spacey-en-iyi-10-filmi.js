
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function KevinSpaceyEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "kevin-spacey-en-iyi-10-filmi";
const baslik = "Kevin Spacey en iyi 10 filmi";
const metin = "Kevin Spacey, Hollywood'un en tanınmış ve yetenekli oyuncularından biridir. Kariyeri boyunca birçok unutulmaz filmde rol almıştır. İşte, Kevin Spacey'in olağanüstü oyunculuğunu sergilediği en iyi 10 filmi sizler için derledik.";
const bitis_metin = "Bu yazımızda Kevin Spacey'in etkileyici performanslar sergilediği en iyi filmleri listeledik. Kevin Spacey oynadığı filmler arasından dikkat çeken bu yapımlar, izleyenlere unutulmaz anlar yaşatıyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["kevin","spacey","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:48:12+03:00";
const degistirilmeTarihi = "2024-08-16T16:48:12+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-10",
    "name": "21",
    "image": "/images/movies/Kevin_Spacey_21.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Jim Sturgess"
      ],
      "imdb": "6.8/10",
      
      "Yönetmen": "Robert Luketic",
      "Süre": "2 sa. 3 dk.",
      "Değerlendirme": "268434",
      "metacritic": "48"
    },
    "paragraf": "21, Kevin Spacey'in başrolde olduğu bir hikayeyle aydınlanıyor. Film, MIT öğrencilerinin kart saymak için Las Vegas'a gitmesini konu alıyor. Kevin Spacey filmleri arasında dikkat çeken yapımlardan biri. Kevin Spacey imdb listelerinde sıklıkla gördüğümüz bir oyuncu olarak, bu filmde de kendini gösteriyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-9",
    "name": "The Shipping News - Kasımda Aşk Başkadır",
    "image": "/images/movies/Kevin_Spacey_the_shipping_news_-_kasimda_ask_baskadir.jpg",
    "ozellikler": {
      "Yıl": "2001",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Julianne Moore"
      ],
      "imdb": "6.7/10",
      
      "Yönetmen": "Lasse Hallström",
      "Süre": "1 sa. 51 dk.",
      "Değerlendirme": "34025",
      "metacritic": "47"
    },
    "paragraf": "The Shipping News, Kevin Spacey'in oynadığı filmler arasında dramatik yönüyle öne çıkan bir yapım. Bu film, yeni bir başlangıç arayan bir adamın etkileyici hikayesini anlatıyor. Kevin Spacey en iyi filmleri arasında yer almaya hak kazanıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-8",
    "name": "Superman Returns - Superman Dönüyor",
    "image": "/images/movies/Kevin_Spacey_superman_returns_-_superman_donuyor.jpg",
    "ozellikler": {
      "Yıl": "",
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Brandon Routh",
        "Kate Bosworth"
      ],
      "imdb": "6.1/10",
      
      "Yönetmen": "Bryan Singer",
      "Süre": "2 sa. 34 dk.",
      "Değerlendirme": "292609",
      "metacritic": "72"
    },
    "paragraf": "Superman Returns, Kevin Spacey'in Lex Luthor rolünde güçlü bir performans sergilediği bir film. Kevin Spacey imdb sayfalarında en çok konuşulan oyunculardan biri olarak, bu fantastik yapımda da oyunculuğu takdir ediliyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-7",
    "name": "Beyond the Sea - Denizin Ötesinde",
    "image": "/images/movies/Kevin_Spacey_beyond_the_sea_-_denizin_otesinde.jpg",
    "ozellikler": {
      "Yıl": "",
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Matteo Paolillo",
        "Nicolas Maupas"
      ],
      "imdb": "7.4/10",
      
      "Yönetmen": "Carmine Elia",
      "Süre": "1 sa.",
      "Değerlendirme": "1506"
    },
    "paragraf": "Beyond the Sea, Kevin Spacey'in Bobby Darin'in hayatını canlandırdığı bir biyografi filmi. Kevin Spacey en iyi filmi arasında yer alabilecek bu yapım, oyuncunun müzisyenliğine ve oyunculuğuna dair güçlü bir performans sunuyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-6",
    "name": "L.A. Confidential - Los Angeles Sırları",
    "image": "/images/movies/Kevin_Spacey_l.a._confidential_-_los_angeles_sirlari.jpg",
    "ozellikler": {
      "Yıl": "",
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Russell Crowe"
      ],
      "imdb": "8.2/10",
      
      "Yönetmen": "Curtis Hanson",
      "Süre": "2 sa. 18 dk.",
      "Değerlendirme": "623572",
      "metacritic": "91"
    },
    "paragraf": "L.A. Confidential, suç dünyasının derinliklerine dalan ve Kevin Spacey'in unutulmaz bir performans sergilediği bir film. Kevin Spacey oynadığı filmler arasında en çok konuşulanlardan biri ve bu filmde nefes kesici bir hikaye sunuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-5",
    "name": "American Beauty - Amerikan Güzeli",
    "image": "/images/movies/Kevin_Spacey_american_beauty_-_amerikan_guzeli.jpg",
    "ozellikler": {
      "Yıl": "",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Annette Bening"
      ],
      "imdb": "8.3/10",
      
      "Yönetmen": "Sam Mendes",
      "Süre": "2 sa. 2 dk.",
      "Değerlendirme": "1220403",
      "metacritic": "84"
    },
    "paragraf": "American Beauty, Kevin Spacey'in kariyerindeki en iyi performanslarından birini sergilediği ve ona Oscar kazandıran film. Kevin Spacey imdb puanlarıyla dikkat çeken bu yapım, hayatın anlamını sorgulayan bir hikaye sunuyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-4",
    "name": "Baby Driver - Tam Gaz",
    "image": "/images/movies/Kevin_Spacey_baby_driver_-_tam_gaz.jpg",
    "ozellikler": {
      "Yıl": "",
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Ansel Elgort",
        "Jon Bernthal"
      ],
      "imdb": "7.5/10",
      
      "Yönetmen": "Edgar Wright",
      "Süre": "1 sa. 53 dk.",
      "Değerlendirme": "622922",
      "metacritic": "86"
    },
    "paragraf": "Baby Driver, Kevin Spacey'in karanlık bir karakteri canlandırdığı hızlı tempolu bir aksiyon filmi olarak öne çıkıyor. Kevin Spacey en iyi filmleri arasında yer almaya aday bu yapım, izleyicilere soluksuz bir deneyim sunuyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-3",
    "name": "Margin Call - Oyunun Sonu",
    "image": "/images/movies/Kevin_Spacey_margin_call_-_oyunun_sonu.jpg",
    "ozellikler": {
      "Yıl": "",
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Paul Bettany"
      ],
      "imdb": "7.1/10",
      
      "Yönetmen": "J.C. Chandor",
      "Süre": "1 sa. 47 dk.",
      "Değerlendirme": "146949",
      "metacritic": "76"
    },
    "paragraf": "Margin Call, finans krizinin perde arkasındaki olayları anlatan bir film. Kevin Spacey filmleri arasında entelektüel derinliğiyle ön plana çıkıyor. Kevin Spacey oynadığı filmler seriindeki etkileyici performansıyla beğeni topluyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-2",
    "name": "The Usual Suspects - Olağan Şüpheliler",
    "image": "/images/movies/Kevin_Spacey_the_usual_suspects_-_olagan_supheliler.jpg",
    "ozellikler": {
      "Yıl": "",
      "Kategori": [
        "Suç",
        "Gizem"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Stephen Baldwin",
        "Gabriel Byrne"
      ],
      "imdb": "8.5/10",
      
      "Yönetmen": "Bryan Singer",
      "Süre": "1 sa. 46 dk.",
      "Değerlendirme": "1156212",
      "metacritic": "76"
    },
    "paragraf": "The Usual Suspects, Kevin Spacey'in olağanüstü bir performans sergilediği ve birçok ödüle layık görüldüğü bir film. Kevin Spacey en iyi filmi niteliğinde ve unutulmaz bir suç hikayesi sunuyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/kevin-spacey-en-iyi-10-filmibolum-1",
    "name": "Se7en - Yedi",
    "image": "/images/movies/Kevin_Spacey_se7en_-_yedi.jpg",
    "ozellikler": {
      "Yıl": "",
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Oyuncular": [
        "Kevin Spacey",
        "Morgan Freeman",
        "Andrew Kevin Walker"
      ],
      "imdb": "8.6/10",
      
      "Yönetmen": "David Fincher",
      "Süre": "2 sa. 7 dk.",
      "Değerlendirme": "1825148",
      "metacritic": "65"
    },
    "paragraf": "Se7en, Kevin Spacey'in en iyi filmlerinden biri olarak kabul edilen ve psikolojik derinliğiyle izleyicileri etkileyen bir film. Kevin Spacey imdb listelerinde üst sıralarda yer alırken, bu yapımdaki performansı unutulmaz kılıyor."
  }

];

const ana_resim = "/images/ana_gorseller/kevin-spacey-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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