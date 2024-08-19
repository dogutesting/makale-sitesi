
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function SandraBullockEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "sandra-bullock-en-iyi-10-filmi";
const baslik = "Sandra Bullock en iyi 10 filmi";
const metin = "Sandra Bullock, Hollywood'un en sevilen ve yetenekli oyuncularından biridir. Kariyeri boyunca birçok unutulmaz projeye imza atan Bullock, yıllar geçtikçe daha da etkileyici performanslar sergilemiştir. Bu yazımızda, onun kariyerindeki en önemli 10 filmi sizler için derledik.";
const bitis_metin = "Bu yazımızda, Sandra Bullock'un kariyerindeki en iyi filmleri sizlerle paylaştık. Bu listede yer alan yapımlar, Bullock'un oyunculuk yeteneğini gözler önüne seriyor ve izleyicilere keyifli saatler vaat ediyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["sandra","bullock","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:45:10+03:00";
const degistirilmeTarihi = "2024-08-16T16:45:10+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-10",
    "name": "Two Weeks Notice - Teklif",
    "image": "/images/movies/Sandra_Bullock_two_weeks_notice_-_teklif.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "Hugh Grant"
      ],
      "Kategori": [
        "Komedi",
        "Romantik"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 41 dk.",
      "Yönetmen": "Marc Lawrence",
      "imdb": "6.1/10",
      "Değerlendirme": "126854",
      "metacritic": "42"
    },
    "paragraf": "Sandra Bullock ve Hugh Grant'ın başrollerini paylaştığı Two Weeks Notice, eğlenceli bir romantik komedi. Sandra Bullock filmleri arasında ön plana çıkan bu yapımda, bir avukat olan Lucy'nin patronu George Wade ile olan karmaşık ilişkisi anlatılır. Sandra Bullock'un mükemmel performansı filmi izlenmeye değer kılıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-9",
    "name": "The Heat - Ateşli Aynasızlar",
    "image": "/images/movies/Sandra_Bullock_the_heat_-_atesli_aynasizlar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "Melissa McCarthy"
      ],
      "Kategori": [
        "Komedi",
        "Aksiyon"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Paul Feig",
      "imdb": "6.6/10",
      "Değerlendirme": "182459",
      "metacritic": "60"
    },
    "paragraf": "The Heat, Bullock'un komedi yeteneğini bir kez daha kanıtladığı bir yapım. Bullock ve McCarthy'nin uyumu kahkaha dolu anlar yaşatıyor. Sandra Bullock en iyi filmleri arasında sayılabilecek bu yapımda, izleyiciler keyifli vakit geçiriyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-8",
    "name": "Crash - Çarpışma",
    "image": "/images/movies/Sandra_Bullock_crash_-_carpisma.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "Don Cheadle",
        "Karina Arroyave",
        "Dato Bakhtadze"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2004",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Paul Haggis",
      "imdb": "7.7/10",
      "Değerlendirme": "450878",
      "metacritic": "66"
    },
    "paragraf": "Çarpışma, karmaşık insan ilişkilerini ve sosyal çatışmaları derinden ele alıyor. Sandra Bullock oynadığı filmler arasında önemli bir yere sahip olan bu yapım, izleyiciye düşündürücü bir deneyim sunuyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-7",
    "name": "Ocean's 8",
    "image": "/images/movies/Sandra_Bullock_ocean's_8.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "Cate Blanchett",
        "Griffin Dunne"
      ],
      "Kategori": [
        "Suç",
        "Komedi"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Gary Ross",
      "imdb": "6.3/10",
      "Değerlendirme": "245132",
      "metacritic": "61"
    },
    "paragraf": "Ocean's 8, Bullock'un liderliğindeki kadın ekibin başrolde olduğu heyecan verici bir soygun filmi. Sandra Bullock imdb puanı ile de dikkat çeken bu yapım, güçlü kadın karakterleriyle göz dolduruyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-6",
    "name": "The Proposal - Teklif",
    "image": "/images/movies/Sandra_Bullock_the_proposal_-_teklif.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "Ryan Reynolds"
      ],
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Anne Fletcher",
      "imdb": "6.8/10",
      "Değerlendirme": "366852",
      "metacritic": "48"
    },
    "paragraf": "The Proposal, Sandra Bullock'un romantik komedi türündeki başarısını bir kez daha sergilediği bir film. Ryan Reynolds ile harika bir uyum yakalayan Bullock, izleyicilere keyifli dakikalar sunuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-5",
    "name": "Bird Box",
    "image": "/images/movies/Sandra_Bullock_bird_box.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "Trevante Rhodes"
      ],
      "Kategori": [
        "Gerilim",
        "Bilim Kurgu"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Susanne Bier",
      "imdb": "6.6/10",
      "Değerlendirme": "392392",
      "metacritic": "51"
    },
    "paragraf": "Bird Box, dünyayı tehdit eden gizemli varlıklarla dolu bir deneyim sunuyor. Sandra Bullock'un liderliğindeki bu gerilim dolu yapım, izleyicilere unutulmaz anlar yaşatıyor ve Bullock'un oyunculuk yeteneklerini bir kez daha sergilemesine olanak tanıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-4",
    "name": "Miss Congeniality - Güzel Dedektif",
    "image": "/images/movies/Sandra_Bullock_miss_congeniality_-_guzel_dedektif.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "Michael Caine"
      ],
      "Kategori": [
        "Komedi",
        "Aksiyon"
      ],
      "Yıl": "2000",
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Donald Petrie",
      "imdb": "6.3/10",
      "Değerlendirme": "233221",
      "metacritic": "43"
    },
    "paragraf": "Güzel Dedektif, Bullock'un farklı karakterlere hayat verme yeteneğini gösteren ikinci yapım. Sandra Bullock en iyi filmi arasında sayılabilecek bu yapım, izleyicileri gülümsetiyor ve zaman zaman da düşündürüyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-3",
    "name": "Gravity - Yerçekimi",
    "image": "/images/movies/Sandra_Bullock_gravity_-_yercekimi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "George Clooney"
      ],
      "Kategori": [
        "Macera",
        "Bilim Kurgu"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 31 dk.",
      "Yönetmen": "Alfonso Cuarón",
      "imdb": "7.7/10",
      "Değerlendirme": "868416",
      "metacritic": "96"
    },
    "paragraf": "Gravity, Sandra Bullock'un çarpıcı performansıyla dikkatleri üzerine çektiği bir başyapıt. Uzayda kaybolan bir astronotun yaşadığı hayatta kalma mücadelesini konu alan film izleyicilere nefes kesen anlar sunuyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-2",
    "name": "A Time to Kill - Öldürme Zamanı",
    "image": "/images/movies/Sandra_Bullock_a_time_to_kill_-_oldurme_zamani.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "Matthew McConaughey"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "1996",
      "Süre": "2 sa. 29 dk.",
      "Yönetmen": "Joel Schumacher",
      "imdb": "7.5/10",
      "Değerlendirme": "184284",
      "metacritic": "53"
    },
    "paragraf": "Öldürme Zamanı, Bullock'un dram sahnelerindeki ustalığını sergilediği bir film. Sandra Bullock filmleri arasında dikkat çeken bu yapım, güçlü hikayesi ve oyunculuklarıyla öne çıkıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/sandra-bullock-en-iyi-10-filmi#bolum-1",
    "name": "The Blind Side - Kör Nokta",
    "image": "/images/movies/Sandra_Bullock_the_blind_side_-_kor_nokta.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sandra Bullock",
        "Quinton Aaron",
        "Tim McGraw"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2009",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "John Lee Hancock",
      "imdb": "7.6/10",
      "Değerlendirme": "364158",
      "metacritic": "53"
    },
    "paragraf": "Kör Nokta, Bullock'un en iyi performanslarından birini sergilediği film. The Blind Side, gerçek bir hikayeye dayanan dokunaklı bir dram ve Sandra Bullock oynadığı filmler arasında tartışmasız en etkileyici olanlarından biri."
  }

];

const ana_resim = "/images/ana_gorseller/sandra-bullock-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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