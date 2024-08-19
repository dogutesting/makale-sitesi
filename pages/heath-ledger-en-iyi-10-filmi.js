
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function HeathLedgerEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "heath-ledger-en-iyi-10-filmi";
const baslik = "Heath Ledger en iyi 10 filmi";
const metin = "Heath Ledger, kariyeri boyunca unutulmaz performanslar sergiledi. Onun oyunculuğunu en iyi şekilde yansıtan Heath Ledger filmleri listesini sizin için derledik. Bu liste, Heath Ledger en iyi filmleri ve Heath Ledger izlenmesi gereken filmleri içeriyor.";
const bitis_metin = "Heath Ledger, kısa kariyerine birçok başyapıt sığdırdı. 'Heath Ledger filmleri' listemizde, onun en etkileyici performanslarını sunduğu yapıtları sizler için sıraladık. Her biri, onun yeteneğinin bir yansıması.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["heath","ledger","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:54:03+03:00";
const degistirilmeTarihi = "2024-05-25T18:54:03+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-10",
    "name": "Casanova - Kazanova",
    "image": "/images/movies/heath_ledger_casanova_-_kazanova.jpg",
    "ozellikler": {
      "Yönetmen": "Lasse Hallström",
      "Oyuncular": [
        "Heath Ledger",
        "Sienna Miller"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Süre": "1 sa. 52 dk.",
      "Yıl": "2005",
      "imdb": "6.5/10",
      "Değerlendirme": "56000",
      "metascore": "57"
    },
    "paragraf": "Bu Heath Ledger filmleri listemizin 10. sırasında, ünlü Kazanova'nın romantik ve maceralı hayatını anlatan 'Casanova'. Heath Ledger en iyi filmleri arasında yer alan bu filmi, kesinlikle izlemelisiniz."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-9",
    "name": "Ned Kelly",
    "image": "/images/movies/heath_ledger_ned_kelly.jpg",
    "ozellikler": {
      "Yönetmen": "Gregor Jordan",
      "Oyuncular": [
        "Heath Ledger",
        "Orlando Bloom"
      ],
      "Kategori": [
        "Biyoğrafi",
        "Drama"
      ],
      "Süre": "1 sa. 50 dk.",
      "Yıl": "2003",
      "imdb": "6.4/10",
      "Değerlendirme": "28000",
      "metascore": "56"
    },
    "paragraf": "Heath Ledger en iyi filmi listemizin dokuzuncu sırasında 'Ned Kelly'. Avustralya'nın en ünlü kanun kaçağına hayat veren Ledger, performansıyla göz dolduruyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-8",
    "name": "The Brothers Grimm - Grimm Kardeşler",
    "image": "/images/movies/heath_ledger_the_brothers_grimm_-_grimm_kardesler.jpg",
    "ozellikler": {
      "Yönetmen": "Terry Gilliam",
      "Oyuncular": [
        "Heath Ledger",
        "Matt Damon"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Süre": "1 sa. 58 dk.",
      "Yıl": "2005",
      "imdb": "5.9/10",
      "Değerlendirme": "126000",
      "metascore": "51"
    },
    "paragraf": "Heath Ledger filmleri listesinde sekizinci sırada, fantastik bir serüven sunan 'The Brothers Grimm'. Macera ve eğlence dolu bu film, Heath Ledger izlenmesi gereken filmleri arasında."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-7",
    "name": "Lords of Dogtown - Dogtown Lordları",
    "image": "/images/movies/heath_ledger_lords_of_dogtown_-_dogtown_lordlari.jpg",
    "ozellikler": {
      "Yönetmen": "Catherine Hardwicke",
      "Oyuncular": [
        "Heath Ledger",
        "Emile Hirsch"
      ],
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Süre": "1 sa. 47 dk.",
      "Yıl": "2005",
      "imdb": "7.1/10",
      "Değerlendirme": "58000",
      "metascore": "56"
    },
    "paragraf": "Heath Ledger en iyi filmi 'Lords of Dogtown', sokak kültürünü ve kaykaycıların hayatını başarılı bir şekilde anlatıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-6",
    "name": "The Four Feathers - Dört Tüy",
    "image": "/images/movies/heath_ledger_the_four_feathers_-_dort_tuy.jpg",
    "ozellikler": {
      "Yönetmen": "Shekhar Kapur",
      "Oyuncular": [
        "Heath Ledger",
        "Wes Bentley",
        "Kate Hudson"
      ],
      "Kategori": [
        "Macera",
        "Drama",
        "Romantik"
      ],
      "Süre": "2 saat 12 dk.",
      "Yıl": "2002",
      "imdb": "6.5/10",
      "Değerlendirme": "36000",
      "metascore": "49"
    },
    "paragraf": "Bu listede Heath Ledger filmleri içinde özel bir yere sahip olan 'The Four Feathers, kahramanlık ve onur temasını işliyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-5",
    "name": "I'm Not There - Orada Değilim",
    "image": "/images/movies/heath_ledger_i_m_not_there_-_orada_degilim.jpg",
    "ozellikler": {
      "Yönetmen": "Todd Haynes",
      "Oyuncular": [
        "Heath Ledger",
        "Christian Bale",
        "Cate Blanchett"
      ],
      "Kategori": [
        "Drama",
        "Müzikal"
      ],
      "Süre": "2 saat 15 dk.",
      "Yıl": "2007",
      "imdb": "6.8/10",
      "Değerlendirme": "61000",
      "metascore": "73"
    },
    "paragraf": "Altıncı sırada bulunan 'I'm Not There', Bob Dylan'ın çeşitli yüzlerini sergileyen benzersiz bir film. Ledger'in performansı unutulmazlar arasında."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-4",
    "name": "A Knight's Tale - Bir Şövalyenin Hikayesi",
    "image": "/images/movies/heath_ledger_a_knight_s_tale_-_bir_sovalyenin_hikayesi.jpg",
    "ozellikler": {
      "Yönetmen": "Brian Helgeland",
      "Oyuncular": [
        "Heath Ledger",
        "Shannyn Sossamon",
        "Paul Bettany"
      ],
      "Kategori": [
        "Macera",
        "Drama"
      ],
      "Süre": "2 saat 12 dk.",
      "Yıl": "2001",
      "imdb": "7.0/10",
      "Değerlendirme": "202000",
      "metascore": "56"
    },
    "paragraf": "Bu unutulmaz Heath Ledger filmi, Orta Çağ'da geçen renkli ve eğlenceli bir macera sunuyor. Kesinlikle izlenmesi gereken bir yapıt."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-3",
    "name": "Monster's Ball - Cani Kamarası",
    "image": "/images/movies/heath_ledger_monster_s_ball_-_cani_kamarasi.jpg",
    "ozellikler": {
      "Yönetmen": "Marc Forster",
      "Oyuncular": [
        "Heath Ledger",
        "Billy Bob Thornton",
        "Halle Berry"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 saat 52 dk.",
      "Yıl": "2001",
      "imdb": "7.1/10",
      "Değerlendirme": "94000",
      "metascore": "69"
    },
    "paragraf": "En dramatik Heath Ledger filmleri arasında yer alan 'Monster's Ball', güçlü oyunculukları ve etkileyici hikayesi ile öne çıkıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-2",
    "name": "Brokeback Mountain - Brokeback Dağı",
    "image": "/images/movies/heath_ledger_brokeback_mountain_-_brokeback_dagi.jpg",
    "ozellikler": {
      "Yönetmen": "Ang Lee",
      "Oyuncular": [
        "Heath Ledger",
        "Jake Gyllenhaal"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 saat 14 dk.",
      "Yıl": "2005",
      "imdb": "7.7/10",
      "Değerlendirme": "384000",
      "metascore": "87"
    },
    "paragraf": "Birçok ödüle layık görülen 'Brokeback Mountain', Ledger'in kariyerinin doruk noktalarından biri olarak kabul edilir. Bu Heath Ledger en iyi filmi, duygusal derinliğiyle izleyenleri etkiliyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/heath-ledger-en-iyi-10-filmi#bolum-1",
    "name": "The Dark Knight - Kara Şövalye",
    "image": "/images/movies/heath_ledger_the_dark_knight_-_kara_sovalye.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Heath Ledger",
        "Christian Bale"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Süre": "2 saat 32 dk.",
      "Yıl": "2008",
      "imdb": "9.0/10",
      "Değerlendirme": "2900000",
      "metascore": "84"
    },
    "paragraf": "Listenin zirvesinde yer alan ve Heath Ledger'ın Oscar ödülü kazandığı 'The Dark Knight', tüm zamanların en iyi filmlerinden biri olarak kabul edilir. Heath Ledger en iyi filmi olması sürpriz değil."
  }

];

const ana_resim = "/images/ana_gorseller/heath_ledger_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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