
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MichaelBayEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "michael-bay-en-iyi-10-filmi";
const baslik = "Michael Bay en iyi 10 filmi";
const metin = "Sinema dünyasının çığır açan yönetmenlerinden biri olan Michael Bay'in 'Michael Bay filmleri', 'Michael Bay en iyi filmleri' ve 'Michael Bay izlenmesi gereken filmleri' ifadeleriyle bilinir. Bu yazımızda, onun imzasını taşıyan ve 'Michael Bay en iyi filmi' olarak nitelendirilebilecek 10 yapıtını sizler için sıraladık.";
const bitis_metin = "Bu yazımızda, Michael Bay'in unutulmaz eserlerini sizlerle paylaştık. Her bir film, onun sinematik vizyonunun ve ustalığının bir kanıtı olarak öne çıkıyor. Umarız bu filmler, sizin de izleme listenizde yer alır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["michael","bay","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:21:48+03:00";
const degistirilmeTarihi = "2024-05-25T18:21:48+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-10",
    "name": "Bad Boys II - Çılgın İkili II",
    "image": "/images/movies/michael_bay_bad_boys_ii_-_cilgin_i̇kili_ii.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Will Smith",
        "Martin Lawrence"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Süre": "2 sa. 27 dk.",
      "Yıl": "2003",
      "imdb": "6.6/10",
      "Değerlendirme": "268000",
      "metascore": "38"
    },
    "paragraf": "Michael Bay filmleri arasında ayrı bir yere sahip olan 'Bad Boys II', Michael Bay imzalı 10 filmin en çarpıcılarından. Bay'in dinamik yönetmenlik tarzı ve eğlenceli aksiyon sahneleri, izleyiciye unutulmaz dakikalar yaşatıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-9",
    "name": "The Rock - Kaya",
    "image": "/images/movies/michael_bay_the_rock_-_kaya.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Sean Connery",
        "Nicolas Cage"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 16 dk.",
      "Yıl": "1996",
      "imdb": "7.4/10",
      "Değerlendirme": "359000",
      "metascore": "58"
    },
    "paragraf": "Michael Bay en iyi filmleri listesinde 'The Rock', özel bir yere sahiptir. Bu film, onun yönetmenlik kariyerindeki dönüm noktalarından biri olarak kabul edilir ve kaçırılmaması gereken bir eserdir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-8",
    "name": "Pearl Harbor - Pearl Harbor",
    "image": "/images/movies/michael_bay_pearl_harbor_-_pearl_harbor.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Ben Affleck",
        "Kate Beckinsale"
      ],
      "Kategori": [
        "Savaş",
        "Drama"
      ],
      "Süre": "3 sa. 3 dk.",
      "Yıl": "2001",
      "imdb": "6.2/10",
      "Değerlendirme": "353000",
      "metascore": "44"
    },
    "paragraf": "Duygusal derinliği ve Michael Bay'in estetik anlayışıyla harmanlanmış 'Pearl Harbor', unutulmaz savaş sahneleriyle Michael Bay en iyi filmi listesine adını yazdırmıştır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-7",
    "name": "Armageddon",
    "image": "/images/movies/michael_bay_armageddon.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Bruce Willis",
        "Ben Affleck"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "2 sa. 31 dk.",
      "Yıl": "1998",
      "imdb": "6.7/10",
      "Değerlendirme": "452000",
      "metascore": "42"
    },
    "paragraf": "Michael Bay'in çok yüksek bir bütçeyle çektiği ve bilim kurgu ile aksiyonun mükemmel birleşimi olan 'Armageddon', Michael Bay izlenmesi gereken filmleri arasında öne çıkan bir yapıttır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-6",
    "name": "Transformers: Age of Extinction - Transformers: Kayıp Çağ",
    "image": "/images/movies/michael_bay_transformers_age_of_extinction_-_transformers_kayip_cag.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Mark Wahlberg",
        "Stanley Tucci"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 45 dk.",
      "Yıl": "2014",
      "imdb": "5.6/10",
      "Değerlendirme": "332000",
      "metascore": "32"
    },
    "paragraf": "Teknoloji ve aksiyonun sınırlarını zorlayan 'Transformers: Kayıp Çağ', Michael Bay filmleri içinde en görsel şölene sahip olanlardan biridir ve sinema severler tarafından büyük ilgi görmüştür."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-5",
    "name": "Transformers: Dark of the Moon - Transformers: Ay’ın Karanlık Yüzü",
    "image": "/images/movies/michael_bay_transformers_dark_of_the_moon_-_transformers_ay_in_karanlik_yuzu.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Shia LaBeouf",
        "Rosie Huntington-Whiteley"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 34 dk.",
      "Yıl": "2011",
      "imdb": "6.2/10",
      "Değerlendirme": "433000",
      "metascore": "42"
    },
    "paragraf": "Michael Bay'in elinden çıkan ve görsel efektleriyle dikkat çeken 'Transformers: Ay’ın Karanlık Yüzü', robotlar arası savaş konseptini yeni bir boyuta taşıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-4",
    "name": "13 Hours: The Secret Soldiers of Benghazi - 13 Saat: Bingazi'nin Gizli Askerleri",
    "image": "/images/movies/michael_bay_13_hours_the_secret_soldiers_of_benghazi_-_13_saat_bingazi_nin_gizli_askerleri.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "John Krasinski",
        "James Badge Dale"
      ],
      "Kategori": [
        "Aksiyon",
        "Drama"
      ],
      "Süre": "2 sa. 24 dk.",
      "Yıl": "2016",
      "imdb": "7.3/10",
      "Değerlendirme": "161000",
      "metascore": "48"
    },
    "paragraf": "Michael Bay en iyi filmi olabilir mi sorusunu akıllara getiren '13 Saat', gerilim ve aksiyonu birleştirerek sinema severlere unutulmaz bir deneyim sunar."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-3",
    "name": "Pain & Gain - Kazanma Hırsı",
    "image": "/images/movies/michael_bay_pain_&_gain_-_kazanma_hirsi.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Mark Wahlberg",
        "Dwayne Johnson"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "2013",
      "imdb": "6.4/10",
      "Değerlendirme": "230000",
      "metascore": "45"
    },
    "paragraf": "Komedi ve aksiyonun eşsiz birleşimi 'Pain & Gain', Michael Bay'in yönetmenlik kabiliyetini farklı bir açıdan gösteriyor ve izleyicilere keyifli saatler vaat ediyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-2",
    "name": "The Island - Ada",
    "image": "/images/movies/michael_bay_the_island_-_ada.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Ewan McGregor",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Süre": "2 sa. 16 dk.",
      "Yıl": "2005",
      "imdb": "6.8/10",
      "Değerlendirme": "328000",
      "metascore": "50"
    },
    "paragraf": "Bilim kurgu ve macera türlerini ustaca harmanlayan 'The Island', Michael Bay imzalı filmler arasında düşündürücü konusuyla öne çıkar."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/michael-bay-en-iyi-10-filmi#bolum-1",
    "name": "6 Underground - Yer Altı",
    "image": "/images/movies/michael_bay_6_underground_-_yer_alti.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Ryan Reynolds",
        "Mélanie Laurent"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 8 dk.",
      "Yıl": "2019",
      "imdb": "6.1/10",
      "Değerlendirme": "197000",
      "metascore": "41"
    },
    "paragraf": "Michael Bay’in en yeni ve özgün projelerinden biri olan '6 Underground', adrenalini yüksek sahneleri ve başarılı oyunculukları ile dikkat çekiyor. Listemizde bir numarada yer almayı hak ediyor."
  }

];

const ana_resim = "/images/ana_gorseller/michael_bay_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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