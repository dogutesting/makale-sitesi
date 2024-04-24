
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnIyi10AskFilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-iyi-10-ask-filmi";
const baslik = "Dünyanın en iyi 10 aşk filmi";
const metin = "Aşk, sinemanın vazgeçilmez teması ve her dönemden, her kültürden insanı etkileyebilen universal bir duygudur. İşte bu yüzden dünyanın en iyi aşk filmleri, izleyicileri derinden etkileyen ve sıklıkla hatırlanan yapımlar olmuştur. En iyi 10 aşk filmi listemizde, sinema tarihine damga vurmuş ve en iyi aşk filmleri kategorisinde sıklıkla adı geçen filmleri sıralayacağız.";
const bitis_metin = "Bu yazımızda, en iyi aşk filmleri tanıtıldı. İzlemeniz gereken bu filmler, aşkın çeşitli yönlerini ve derinliklerini ele alarak, seyirci üzerinde unutulmaz bir iz bırakıyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","iyi","10","ask","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-24T18:42:36+03:00";
const degistirilmeTarihi = "2024-04-24T18:42:36+03:00";
const addDate = "24.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-10",
    "name": "Hazel ve Gus'un Aşkı: Aynı Yıldızın Altında",
    "image": "/images/movies/hazel_ve_gus_un_aski_ayni_yildizin_altinda.jpg",
    "ozellikler": {
      "Yönetmen": "Josh Boone",
      "Oyuncular": [
        "Shailene Woodley",
        "Ansel Elgort"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "2 sa. 6 dk.",
      "Yıl": "2014",
      "imdb": "7.7/10",
      "metascore": "69",
      "Değerlendirme": "401000"
    },
    "paragraf": "Listemizin ilk sırasında, dünyanın en iyi aşk filmleri arasında yer alan 'Aynı Yıldızın Altında' bulunuyor. Bu duygusal film, genç bir çiftin kanserle mücadelesini ve aralarında gelişen sarsılmaz bağı konu alıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-9",
    "name": "Hiçbir Yerden Gelen Mektuplar: P.S I Love You",
    "image": "/images/movies/hicbir_yerden_gelen_mektuplar_p.s_i_love_you.jpg",
    "ozellikler": {
      "Yönetmen": "Richard LaGravenese",
      "Oyuncular": [
        "Gerard Butler",
        "Hilary Swank"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "2 sa. 6 dk.",
      "Yıl": "2007",
      "imdb": "7.1/10",
      "metascore": "39",
      "Değerlendirme": "218000"
    },
    "paragraf": "Dokuzuncu sıramızda, en iyi 10 aşk filmi içinde 'P.S I Love You' yer alıyor. Film, kaybettiği eşinden gelen mektuplar vasıtasıyla hayata tutunan bir kadının hikayesini anlatıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-8",
    "name": "Klasik Bir Aşk Öyküsü: Casablanca",
    "image": "/images/movies/klasik_bir_ask_oykusu_casablanca.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Curtiz",
      "Oyuncular": [
        "Humphrey Bogart",
        "Ingrid Bergman"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "1 sa. 42 dk.",
      "Yıl": "1942",
      "imdb": "8.5/10",
      "metascore": "100",
      "Değerlendirme": "606000"
    },
    "paragraf": "Casablanca, klasik sinemayı en iyi aşk filmleri arasına yazdıran nostaljik bir başyapıt. Bu ölümsüz hikaye, aşk ve fedakarlığın eşsiz bir portresini sunar."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-7",
    "name": "Aşkın Maskesi: The Phantom of the Opera",
    "image": "/images/movies/askin_maskesi_the_phantom_of_the_opera.jpg",
    "ozellikler": {
      "Yönetmen": "Joel Schumacher",
      "Oyuncular": [
        "Gerard Butler",
        "Emmy Rossum"
      ],
      "Kategori": [
        "Müzikal",
        "Drama",
        "Romantik"
      ],
      "Süre": "2 sa. 23 dk.",
      "Yıl": "2004",
      "imdb": "7.2/10",
      "metascore": "40",
      "Değerlendirme": "131000"
    },
    "paragraf": "Listede yedinci sırada bulunan bu film, dramatik ve müzikal unsurlarıyla bilinen, gizemli bir aşk hikayesi sunar."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-6",
    "name": "Onu Beklerken: The Notebook",
    "image": "/images/movies/onu_beklerken_the_notebook.jpg",
    "ozellikler": {
      "Yönetmen": "Nick Cassavetes",
      "Oyuncular": [
        "Ryan Gosling",
        "Rachel McAdams"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "2 sa. 3 dk.",
      "Yıl": "2004",
      "imdb": "7.8/10",
      "metascore": "53",
      "Değerlendirme": "620000"
    },
    "paragraf": "Zaman ve mekâna meydan okuyan bir aşkın hikayesi olan The Notebook, en iyi aşk filmleri listemizde altıncı sırada yer almaktadır. Uzun yıllar süren bir aşkın, yıllara meydan okuyan hali izleyiciyi büyüler."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-5",
    "name": "Kendin Ol: Bridget Jones’ Diary",
    "image": "/images/movies/kendin_ol_bridget_jones_diary.jpg",
    "ozellikler": {
      "Yönetmen": "Sharon Maguire",
      "Oyuncular": [
        "Renée Zellweger",
        "Hugh Grant",
        "Colin Firth"
      ],
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Süre": "1 sa. 37 dk.",
      "Yıl": "2001",
      "imdb": "6.7/10",
      "metascore": "66",
      "Değerlendirme": "263000"
    },
    "paragraf": "Beşinci sırada, komik ve gerçekçi bir aşk hikayesine sahip Bridget Jones' Diary yer almakta. Film, modern zamanların karmaşası içinde kendi benliğini bulmaya çalışan bir kadının hikayesi."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-4",
    "name": "Sarsılmaz Aşk: Gone with the Wind",
    "image": "/images/movies/sarsilmaz_ask_gone_with_the_wind.jpg",
    "ozellikler": {
      "Yönetmen": "Victor Fleming",
      "Oyuncular": [
        "Clark Gable",
        "Vivien Leigh"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Süre": "3 sa. 58 dk.",
      "Yıl": "1939",
      "imdb": "8.2/10",
      "metascore": "97",
      "Değerlendirme": "334000"
    },
    "paragraf": "Dördüncü sırada, tüm zamanların en ikonik aşk filmlerinden Gone with the Wind var. Güneyli bir kadının savaş ve aşkla imtihanını anlatan bu epik film, duygusal derinliği ve dramı ile unutulmaz."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-3",
    "name": "Kıyıya Vuran Aşk: The Reader",
    "image": "/images/movies/kiyiya_vuran_ask_the_reader.jpg",
    "ozellikler": {
      "Yönetmen": "Stephen Daldry",
      "Oyuncular": [
        "Kate Winslet",
        "David Kross",
        "Ralph Fiennes"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 4 dk.",
      "Yıl": "2008",
      "imdb": "7.6/10",
      "metascore": "58",
      "Değerlendirme": "260000"
    },
    "paragraf": "Üçüncü sırada, zorlu bir geçmişle yüzleşen büyük bir aşkın öyküsü olan The Reader, seyirciyi derinden etkiler. Film, geçmişin gölgesinde kalan bir aşkı ve insanlık dramını ele alır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-2",
    "name": "Hayatta Vedalarla Geçer: Lost in Translation",
    "image": "/images/movies/hayatta_vedalarla_gecer_lost_in_translation.jpg",
    "ozellikler": {
      "Yönetmen": "Sofia Coppola",
      "Oyuncular": [
        "Bill Murray",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Süre": "1 sa. 42 dk.",
      "Yıl": "2003",
      "imdb": "7.7/10",
      "metascore": "89",
      "Değerlendirme": "489000"
    },
    "paragraf": "İkinci sırada, yabancı bir ülkede beklenmedik bir bağ kuran iki ruhun hikayesi olan Lost in Translation bulunuyor. Bu film, seyirciyi kültürlerarası anlaşmazlıklar ve derin bağlarla büyüler."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-ask-filmi#bolum-1",
    "name": "Zaman Aşımına Uğramayan Aşk: Eternal Sunshine of the Spotless Mind",
    "image": "/images/movies/zaman_asimina_ugramayan_ask_eternal_sunshine_of_the_spotless_mind.jpg",
    "ozellikler": {
      "Yönetmen": "Michel Gondry",
      "Oyuncular": [
        "Jim Carrey",
        "Kate Winslet"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Drama",
        "Romantik"
      ],
      "Süre": "1 sa. 48 dk.",
      "Yıl": "2004",
      "imdb": "8.3/10",
      "metascore": "89",
      "Değerlendirme": "1100000"
    },
    "paragraf": "Listenin zirvesinde, unutulmaz bir aşkı silemeye çalışan bir çiftin hikayesi olan Eternal Sunshine of the Spotless Mind yer alıyor. Film, aşkın hafızadaki izdüşümünü sorgulayan benzersiz bir yapım."
  }
];

const ana_resim = "/images/ana_gorseller/dunyanin_en_iyi_10_ask_filmi_kapak.jpg" //! SEN DOLDUR
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