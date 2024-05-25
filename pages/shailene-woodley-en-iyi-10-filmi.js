
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ShaileneWoodleyEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "shailene-woodley-en-iyi-10-filmi";
const baslik = "Shailene Woodley en iyi 10 filmi";
const metin = "Shailene Woodley en iyi filmleri listemize hoş geldiniz! Shailene Woodley filmleri arasından seçtiğimiz en etkileyici yapımları sizler için derledik. Shailene Woodley izlenmesi gereken filmleri hangileri diye merak ediyorsanız, işte cevabı!";
const bitis_metin = "Shailene Woodley'in çeşitlilik ve derinlikle dolu filmografisini keşfettik. Umarız bu Shailene Woodley en iyi filmleri listesi, size yeni izlenimler sunar ve bu yetenekli oyuncunun çalışmalarını daha yakından tanımanızı sağlar.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["shailene","woodley","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:56:30+03:00";
const degistirilmeTarihi = "2024-05-25T18:56:30+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-10",
    "name": "The Descendants - Senden Bana Kalan",
    "image": "/images/movies/shailene_woodley_the_descendants_-_senden_bana_kalan.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 55 dk.",
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Oyuncular": [
        "George Clooney",
        "Shailene Woodley"
      ],
      "Yönetmen": "Alexander Payne",
      "imdb": "7.3/10",
      "Değerlendirme": "252000",
      "metascore": "84"
    },
    "paragraf": "Shailene Woodley ve George Clooney'nin harikulade uyumu, bir aile dramını nazik ve dokunaklı bir hikayeye dönüştürür. Shailene Woodley en iyi filmi listesinde bu yapım, duygusal derinliği ile dikkat çekiyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-5",
    "name": "The Last Letter from Your Lover - Sevgilinden Son Mektup",
    "image": "/images/movies/shailene_woodley_the_last_letter_from_your_lover_sevgilinden_son_mektup.jpg",
    "ozellikler": {
        "Yıl": "2021",
        "Süre": "1 sa. 50 dk.",
        "Kategori": [
            "Dram",
            "Romantik"
        ],
        "Oyuncular": [
            "Shailene Woodley",
            "Felicity Jones",
            "Callum Turner",
            "Nabhaan Rizwan"
        ],
        "Yönetmen": "Augustine Frizzell",
        "imdb": "6.7/10",
        "Değerlendirme": "22000",
        "metascore": "57"
    },
    "paragraf": "Shailene Woodley, 1960'ların Londra'sında geçen bu romantik dramda, zengin bir kadın olan Jennifer Stirling'i canlandırıyor. Film, iki farklı zaman diliminde geçen ve kayıp bir aşk mektubunun keşfiyle kesişen hikayeleri anlatıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-8",
    "name": "Divergent - Uyumsuz",
    "image": "/images/movies/shailene_woodley_divergent_-_uyumsuz.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "2 sa. 19 dk.",
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Oyuncular": [
        "Shailene Woodley",
        "Theo James"
      ],
      "Yönetmen": "Neil Burger",
      "imdb": "6.6/10",
      "Değerlendirme": "490000",
      "metascore": "48"
    },
    "paragraf": "Divergent serisi, genç yetişkinler arasında büyük ilgi gördü ve Shailene Woodley'in kariyerinde önemli bir role sahip. Bu film, dinamik ve heyecan verici senaryosu ile Shailene Woodley filmleri listesinde sıyrılıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-7",
    "name": "Endings, Beginnings - Aşk Tesadüfleri Sever mi?",
    "image": "/images/movies/shailene_woodley_endings_beginnings_-_ask_tesadufleri_sever_mi.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "1 sa. 50 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Shailene Woodley",
        "Sebastian Stan",
        "Jamie Dornan"
      ],
      "Yönetmen": "Drake Doremus",
      "imdb": "5.6/10",
      "Değerlendirme": "7500",
      "metascore": "42"
    },
    "paragraf": "Bu üçlü aşk hikayesi, Shailene Woodley'in duygusal derinliğini ve oyunculuk becerisini sergiliyor. Shailene Woodley en iyi filmi olarak, karakterinin içsel karmaşalarını ustalıkla yansıtıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-6",
    "name": "The Fault in Our Stars - Aynı Yıldızın Altında",
    "image": "/images/movies/shailene_woodley_the_fault_in_our_stars_-_ayni_yildizin_altinda.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "2 sa. 6 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Shailene Woodley",
        "Ansel Elgort"
      ],
      "Yönetmen": "Josh Boone",
      "imdb": "7.7/10",
      "Değerlendirme": "402000",
      "metascore": "69"
    },
    "paragraf": "Aynı Yıldızın Altında, dünya genelinde büyük bir hit oldu ve Shailene Woodley'en iyi filmleri arasında yer aldı. Bu dokunaklı aşk hikayesi, izleyicileri gözyaşlarına boğdu ve Woodley'in performansı övgü topladı."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-5",
    "name": "The Mauritanian",
    "image": "/images/movies/shailene_woodley_the_mauritanian.jpg",
    "ozellikler": {
        "Yıl": "2021",
        "Süre": "2 sa. 9 dk.",
        "Kategori": [
            "Dram",
            "Biyografi",
            "Gerilim"
        ],
        "Oyuncular": [
            "Tahar Rahim",
            "Jodie Foster",
            "Shailene Woodley",
            "Benedict Cumberbatch"
        ],
        "Yönetmen": "Kevin Macdonald",
        "imdb": "7.5/10",
        "Değerlendirme": "62000",
        "metascore": "53"
    },
    "paragraf": "Shailene Woodley, Guantanamo Bay'de haksız yere yıllarca tutulduktan sonra serbest bırakılan Mohamedou Ould Slahi'nin gerçek hikayesini anlatan bu etkileyici filmde önemli bir rol üstleniyor. Film, adalet ve insan hakları konularına derin bir bakış sunuyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-4",
    "name": "Snowden",
    "image": "/images/movies/shailene_woodley_snowden.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "2 sa. 14 dk.",
      "Kategori": [
        "Biyografi",
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "Joseph Gordon-Levitt",
        "Shailene Woodley"
      ],
      "Yönetmen": "Oliver Stone",
      "imdb": "7.3/10",
      "Değerlendirme": "163000",
      "metascore": "58"
    },
    "paragraf": "Bu biyografik dramda, Woodley, Edward Snowden'ın kız arkadaşı Lindsay Mills olarak karşımıza çıkıyor. Filmdeki performansı, Shailene Woodley filmleri arasında önemli bir yere sahip."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-3",
    "name": "White Bird in a Blizzard - Fırtınalı Gençlik",
    "image": "/images/movies/shailene_woodley_white_bird_in_a_blizzard_-_firtinali_genclik.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 31 dk.",
      "Kategori": [
        "Dram",
        "Gizem"
      ],
      "Oyuncular": [
        "Shailene Woodley",
        "Eva Green"
      ],
      "Yönetmen": "Gregg Araki",
      "imdb": "6.4/10",
      "Değerlendirme": "30000",
      "metascore": "51"
    },
    "paragraf": "Bu etkileyici gizem filminde, Shailene Woodley genç bir kadının hayatının karmaşık dönemlerini başarıyla canlandırıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-2",
    "name": "The Spectacular Now - Şimdi ya da Asla",
    "image": "/images/movies/shailene_woodley_the_spectacular_now_-_simdi_ya_da_asla.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "1 sa. 35 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Miles Teller",
        "Shailene Woodley"
      ],
      "Yönetmen": "James Ponsoldt",
      "imdb": "7.0/10",
      "Değerlendirme": "162000",
      "metascore": "82"
    },
    "paragraf": "Woodley bu romantik drama ile genç yetişkinlerin dünyasına derin bir dalış yapıyor. Bu hikaye, gerçekçi karakterleri ve duygusal anlatımıyla Shailene Woodley en iyi filmleri listesinde öne çıkıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/shailene-woodley-en-iyi-10-filmi#bolum-1",
    "name": "Adrift - Sürükleniş",
    "image": "/images/movies/shailene_woodley_adrift_-_suruklenis.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Süre": "1 sa. 36 dk.",
      "Kategori": [
        "Macera",
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Shailene Woodley",
        "Sam Claflin"
      ],
      "Yönetmen": "Baltasar Kormákur",
      "imdb": "6.6/10",
      "Değerlendirme": "62000",
      "metascore": "56"
    },
    "paragraf": "Bu gerçek hikaye, bir genç kadının denizde hayatta kalma mücadelesini anlatıyor. Shailene Woodley'in başroldeki inanılmaz performansı, bu yapıtı Shailene Woodley filmleri arasında zirveye taşıyor."
  }
];

const ana_resim = "/images/ana_gorseller/shailene_woodley_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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