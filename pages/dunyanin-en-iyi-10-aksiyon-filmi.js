
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnIyi10AksiyonFilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-iyi-10-aksiyon-filmi";
const baslik = "Dünyanın en iyi 10 aksiyon filmi";
const metin = "Dünyanın en iyi 10 aksiyon filmi listemizle karşınızdayız! Bu listede, aksiyon dolu anlar ve unutulmaz kahramanlık hikayelerini bir araya getirdik. Sizlere en iyi 10 aksiyon filmleri arasından seçtiğimiz, adrenalin ve heyecan dolu filmleri sunuyoruz. Dünyanın en iyi aksiyon filmleri sıralamasına göz atmaya hazır mısınız?";
const bitis_metin = "Bu yazımızda dünyanın en iyi 10 aksiyon filmi'ni sizlere sunduk. Umarız bu filmler sizlere de unutulmaz anlar yaşatır. En iyi aksiyon filmleri sıralaması içinde yer alan bu başyapıtları izlemek için daha fazla beklemeyin!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","iyi","10","aksiyon","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-24T17:13:27+03:00";
const degistirilmeTarihi = "2024-04-24T17:13:27+03:00";
const addDate = "24.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-10",
    "name": "The Bourne Identity",
    "image": "/images/movies/the_bourne_identity.jpg",
    "ozellikler": {
      "Yönetmen": "Doug Liman",
      "Oyuncular": [
        "Matt Damon"
      ],
      "Kategori": [
        "Aksiyon",
        "Gizem",
        "Gerilim"
      ],
      "Süre": "1 sa. 59 dk.",
      "Yıl": "2002",
      "imdb": "7.9/10",
      "metascore": "68",
      "Değerlendirme": "576000"
    },
    "paragraf": "The Bourne Identity, Matt Damon'ın Jason Bourne olarak mükemmel performansı ile aksiyon ve gerilim türlerini birleştiren eşsiz bir yapım. Bu film, hafızasını kaybetmiş bir adamın gizem dolu serüvenini konu alır ve dünyanın en iyi aksiyon filmleri arasında yer almaktadır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-9",
    "name": "Raiders of the Lost Ark",
    "image": "/images/movies/raiders_of_the_lost_ark.jpg",
    "ozellikler": {
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Harrison Ford"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "1 sa. 55 dk.",
      "Yıl": "1981",
      "imdb": "8.4/10",
      "metascore": "85",
      "Değerlendirme": "1000000"
    },
    "paragraf": "Raiders of the Lost Ark, Steven Spielberg yönetmenliğinde Harrison Ford'un ikonik karakteri Indiana Jones'la tanıştığımız film. Macera ve aksiyonun hiç eksik olmadığı bu yapım, dünya çapında en iyi 10 aksiyon filmi arasında unutulmaz bir yere sahiptir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-8",
    "name": "Die Hard with a Vengeance",
    "image": "/images/movies/die_hard_with_a_vengeance.jpg",
    "ozellikler": {
      "Yönetmen": "John McTiernan",
      "Oyuncular": [
        "Bruce Willis",
        "Samuel L. Jackson"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Süre": "2 sa. 08 dk.",
      "Yıl": "1995",
      "imdb": "7.6/10",
      "metascore": "58",
      "Değerlendirme": "408000"
    },
    "paragraf": "Die Hard with a Vengeance, Bruce Willis'in ikonik karakteri John McClane'in New York'ta teröristlerle mücadelesini konu alır. Etkileyici aksiyon sahneleri ve heyecan dolu kurgusu ile bu film, en iyi aksiyon filmleri listesine kesinlikle dahil."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-7",
    "name": "Die Hard",
    "image": "/images/movies/die_hard.jpg",
    "ozellikler": {
      "Yönetmen": "John McTiernan",
      "Oyuncular": [
        "Bruce Willis"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Süre": "2 sa. 12 dk.",
      "Yıl": "1988",
      "imdb": "8.2/10",
      "metascore": "70",
      "Değerlendirme": "945000"
    },
    "paragraf": "Listemizin başlangıcı 1988 yapımı Die Hard ile başlıyor. Bruce Willis'in unutulmaz performansı ile aksiyon dolu anları yaşatmayı başaran bu film, dünyanın en iyi 10 aksiyon filmi içinde haklı bir yer kazanıyor. Adrenalin ve gerilimin hiç düşmediği bu filmi mutlaka izlemelisiniz."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-6",
    "name": "Mad Max: Fury Road",
    "image": "/images/movies/mad_max_fury_road.jpg",
    "ozellikler": {
      "Yönetmen": "George Miller",
      "Oyuncular": [
        "Tom Hardy",
        "Charlize Theron"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa.",
      "Yıl": "2015",
      "imdb": "8.1/10",
      "metascore": "90",
      "Değerlendirme": "1100000"
    },
    "paragraf": "Mad Max: Fury Road, George Miller'ın yönetmenliğinde çölün tozunu göklere saçan bir başyapıt. Tom Hardy ve Charlize Theron'un başrollerini süslediği bu film, en iyi 10 aksiyon filmleri listemizdeki yerini almıştır. Hız, öfke ve özgünlük dolu bu film, izleyenlerin nabzını yükseltmeye devam ediyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-5",
    "name": "Inception",
    "image": "/images/movies/inception.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Tom Hardy"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu",
        "Drama"
      ],
      "Süre": "2 sa. 28 dk.",
      "Yıl": "2010",
      "imdb": "8.8/10",
      "metascore": "74",
      "Değerlendirme": "2500000"
    },
    "paragraf": "Inception, Christopher Nolan'ın yönetmen koltuğunda oturduğu, zihin bükücü bir aksiyon macerası. Leonardo DiCaprio'nun başroldeki performansı, dünyanın en iyi aksiyon filmleri arasında yer alan bu yapıt, izleyicilere unutulmaz bir sinema deneyimi sunuyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-4",
    "name": "The Dark Knight Rises",
    "image": "/images/movies/the_dark_knight_rises.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Christian Bale",
        "Tom Hardy",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 44 dk.",
      "Yıl": "2012",
      "imdb": "8.4/10",
      "metascore": "78",
      "Değerlendirme": "1800000"
    },
    "paragraf": "The Dark Knight Rises, Batman serisinin unutulmaz bir parçası olarak Christopher Nolan'ın yönetmenliğinde başarıya ulaşmıştır. Christian Bale'in Batman olarak geri dönüşü, serinin en dramatik ve aksiyon dolu anlarını bizlere sunması ile tanınır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-3",
    "name": "Gladiator",
    "image": "/images/movies/gladiator.jpg",
    "ozellikler": {
      "Yönetmen": "Ridley Scott",
      "Oyuncular": [
        "Russell Crowe"
      ],
      "Kategori": [
        "Aksiyon",
        "Drama",
        "Tarih"
      ],
      "Süre": "2 sa. 35 dk.",
      "Yıl": "2000",
      "imdb": "8.5/10",
      "metascore": "67",
      "Değerlendirme": "1600000"
    },
    "paragraf": "Gladiator, dünyanın en iyi 10 aksiyon filmleri listesinde; Russell Crowe'un Roma İmparatorluğu döneminde bir gladyatör olarak mücadelesini anlatmaktadır. Ridley Scott'ın yönetmenliğindeki bu film, intikam ve onur kavramlarını eşsiz bir görsellikle işler."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-2",
    "name": "The Matrix",
    "image": "/images/movies/the_matrix.jpg",
    "ozellikler": {
      "Yönetmen": "Lana Wachowski, Lilly Wachowski",
      "Oyuncular": [
        "Keanu Reeves",
        "Laurence Fishburne",
        "Carrie-Anne Moss"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 16 dk.",
      "Yıl": "1999",
      "imdb": "8.7/10",
      "metascore": "73",
      "Değerlendirme": "2100000"
    },
    "paragraf": "The Matrix, bilim kurgu ve aksiyon türlerini mükemmel bir şekilde harmanlayarak, Keanu Reeves'in ölümsüz karakteri Neo'yu tanıttı. Düşündürücü hikayesi ve baş döndürücü aksiyon sahneleri ile The Matrix, en iyi 10 aksiyon filmleri listemizde özel bir yere sahiptir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-aksiyon-filmi#bolum-1",
    "name": "The Dark Knight",
    "image": "/images/movies/the_dark_knight.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Christian Bale",
        "Heath Ledger"
      ],
      "Kategori": [
        "Aksiyon",
        "Drama"
      ],
      "Süre": "2 sa. 32 dk.",
      "Yıl": "2008",
      "imdb": "9.0/10",
      "metascore": "84",
      "Değerlendirme": "2900000"
    },
    "paragraf": "The Dark Knight, Christopher Nolan tarafından yönetilen ve Batman serisinin en etkili filmlerinden biri. Heath Ledger'in Joker rolü ile unutulmaz bir performans sergilediği bu film, en iyi 10 aksiyon filmi arasında zirvede yer alıyor."
  }
];

const ana_resim = "/images/ana_gorseller/dunyanin_en_iyi_10_aksiyon_filmi_kapak.jpg" //! SEN DOLDUR
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