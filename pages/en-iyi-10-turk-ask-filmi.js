
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnIyi10TurkAskFilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-iyi-10-turk-ask-filmi";
const baslik = "en iyi 10 türk aşk filmi";
const metin = "Türk sineması, duygusal ve içten aşk hikayeleriyle doludur. Bu makalede, en iyi türk aşk filmleri listesiyle, kalpleri titreten ve gözleri yaşartan başyapıtları ele alıyoruz. Listemizde, en iyi ağlatan türk aşk filmleri'nden tutun da dram ve romantizmin ağır bastığı eserlere kadar geniş bir yelpaze yer alıyor. İyisi mi, siz de bu türk aşk filmleri duygusal deneyimi yaşamaya hazır olun.";
const bitis_metin = "Bu yazımızda Türk sinemasının unutulmaz aşk filmlerini sunduk. İncir Reçelinden Sadece Sene kadar aşkın birçok yönünü kapsayan bu filmler, en iyi türk aşk filmleri arasında yer alıyor. Umarız bu listeleme ile duygusal bir film maratonu için ilham alırsınız.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","iyi","10","turk","ask","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T18:05:54+03:00";
const degistirilmeTarihi = "2024-04-26T18:05:54+03:00";
const addDate = "26.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-10",
    "name": "Sadece sen",
    "image": "/images/movies/sadece_sen.jpg",
    "ozellikler": {
      "Yönetmen": "Hakan Yonat",
      "Oyuncular": [
        "Belçim Bilgin",
        "Kamer Evren",
        "Asli Zengin"
      ],
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "Süre": "1 sa. 45 dk.",
      "Yıl": "2014",
      "imdb": "7.3",
      "Değerlendirme": "6000"
    },
    "paragraf": "Sadece sen, türk aşk filmleri ağlatan kategorisinde önemli bir yer tutan bu yapıt, aşkın en saf haliyle anlatıldığı filmlerden biridir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-9",
    "name": "Aşk tesadüfleri sever",
    "image": "/images/movies/ask_tesadufleri_sever.jpg",
    "ozellikler": {
      "Yönetmen": "Ömer Faruk Sorak",
      "Oyuncular": [
        "Mehmet Günsür",
        "Belçim Bilgin",
        "Altan Erkekli"
      ],
      "Kategori": [
        "Romantik"
      ],
      "Süre": "1 sa. 58 dk.",
      "Yıl": "2011",
      "imdb": "7.2",
      "Değerlendirme": "20000"
    },
    "paragraf": "9. sırada, en iyi romantik aşk filmleri türk listesi içinde yer alan Aşk tesadüfleri sever filmi, kaderin aşıkları nasıl bir araya getirdiğini anlatıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-8",
    "name": "Kış Uykusu",
    "image": "/images/movies/kis_uykusu.jpg",
    "ozellikler": {
      "Yönetmen": "Nuri Bilge Ceylan",
      "Oyuncular": [
        "Haluuk Bilginer",
        "Melisa Sözen",
        "Demet Akbag"
      ],
      "Kategori": [
        "Dram"
      ],
      "Süre": "3 sa. 16 dk.",
      "Yıl": "2014",
      "imdb": "8.0",
      "Değerlendirme": "56000"
    },
    "paragraf": "Kış Uykusu, bir ilişkinin derinliklerine inen ve türk aşk filmleri dram anlamında çığır açan bir eserdir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-7",
    "name": "İstanbul Kırmızısı",
    "image": "/images/movies/istanbul_kirmizisi.jpg",
    "ozellikler": {
      "Yönetmen": "Ferzan Özpetek",
      "Oyuncular": [
        "Halit Ergenç",
        "Tuba Büyüküstün",
        "Nejat İşler"
      ],
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "Süre": "1 sa. 50 dk.",
      "Yıl": "2017",
      "imdb": "5.7",
      "Değerlendirme": "8000"
    },
    "paragraf": "Türk aşk filmleri en iyi örneklerinden biri olan İstanbul Kırmızısı, aşkı ve tutkuyu İstanbul'un büyüleyici atmosferinde ele alıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-6",
    "name": "Dedemin İnsanları",
    "image": "/images/movies/dedemin_insanlari.jpg",
    "ozellikler": {
      "Yönetmen": "Çağan Irmak",
      "Oyuncular": [
        "Çetin Tekindor",
        "Yiğit Özsener",
        "Gökçe Bahadır"
      ],
      "Kategori": [
        "Tarih",
        "Dram"
      ],
      "Süre": "2 sa. 6 dk.",
      "Yıl": "2011",
      "imdb": "8.0",
      "Değerlendirme": "11000"
    },
    "paragraf": "Dedemin İnsanları, geçmişin izlerini sürerken aşkın ve aile bağlarının anlamını sorgulatan sımsıcak bir film."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-5",
    "name": "Bir Zamanlar Anadolu'da",
    "image": "/images/movies/bir_zamanlar_anadoluda.jpg",
    "ozellikler": {
      "Yönetmen": "Nuri Bilge Ceylan",
      "Oyuncular": [
        "Muhammet Uzuner",
        "Yılmaz Erdoğan",
        "Taner Birsel"
      ],
      "Kategori": [
        "Dram"
      ],
      "Süre": "2 sa. 37 dk.",
      "Yıl": "2011",
      "imdb": "7.8",
      "Değerlendirme": "50000"
    },
    "paragraf": "Bir Zamanlar Anadolu'da, derinlemesine bir aile dramını ve aşkın zamana meydan okuyan yönlerini işliyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-4",
    "name": "Başka Dilde Aşk",
    "image": "/images/movies/baska_dilde_ask.jpg",
    "ozellikler": {
      "Yönetmen": "İlksen Başarır",
      "Oyuncular": [
        "Mert Fırat",
        "Saadet Aksoy",
        "Lale Mansur"
      ],
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "Süre": "1 sa. 38 dk.",
      "Yıl": "2009",
      "imdb": "7.3",
      "Değerlendirme": "7100"
    },
    "paragraf": "Engellilikle mücadele eden karakterlerin aşklarını konu alan Başka Dilde Aşk, sevginin engel tanımadığını gösteriyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-3",
    "name": "Kelebeğin Rüyası",
    "image": "/images/movies/kelebegin_ruyasi.jpg",
    "ozellikler": {
      "Yönetmen": "Yılmaz Erdoğan",
      "Oyuncular": [
        "Kıvanç Tatlıtuğ",
        "Mert Fırat",
        "Belçim Bilgin"
      ],
      "Kategori": [
        "Dram"
      ],
      "Süre": "2 sa. 18 dk.",
      "Yıl": "2013",
      "imdb": "7.7",
      "Değerlendirme": "24000"
    },
    "paragraf": "İki genç şairin hayatını ve aşklarını konu alan Kelebeğin Rüyası, şiirsel bir dille geçmiş dönemlerin aşkını yansıtıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-2",
    "name": "Mutluluk",
    "image": "/images/movies/mutluluk.jpg",
    "ozellikler": {
      "Yönetmen": "Abdullah Oğuz",
      "Oyuncular": [
        "Özgü Namal",
        "Talat Bulut",
        "Murat Han"
      ],
      "Kategori": [
        "Dram"
      ],
      "Süre": "1 sa. 45 dk.",
      "Yıl": "2007",
      "imdb": "7.5",
      "Değerlendirme": "7800"
    },
    "paragraf": "Mutluluk filmi, aşkın ve sadakatin sınırlarını zorlayıcı bir yolculuğu ele alarak izleyicileri derinden etkilemeyi başarıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-iyi-10-turk-ask-filmi#bolum-1",
    "name": "İncir Reçeli",
    "image": "/images/movies/incir_receli.jpg",
    "ozellikler": {
      "Yönetmen": "Aytaç Ağırlar",
      "Oyuncular": [
        "Sezai Paracıkoğlu",
        "Melike Güner",
        "Sinan Çalışkanoğlu"
      ],
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "Süre": "1 sa. 34 dk.",
      "Yıl": "2011",
      "imdb": "6.5",
      "Değerlendirme": "14000"
    },
    "paragraf": "Listemizin zirvesinde yer alan İncir Reçeli, aşkı ve kaybı en yalın haliyle anlatarak türk aşk filmleri ağlatan yönünün en güçlü temsilcisi."
  }
];

const ana_resim = "/images/ana_gorseller/en_iyi_10_turk_ask_filmi_kapak.jpg" //! SEN DOLDUR
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