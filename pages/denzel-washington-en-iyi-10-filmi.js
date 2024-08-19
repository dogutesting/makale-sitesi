
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DenzelWashingtonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "denzel-washington-en-iyi-10-filmi";
const baslik = "Denzel Washington en iyi 10 filmi";
const metin = "Denzel Washington filmleri, onun yetenekli oyunculuğunu gözler önüne seren yapıtlardır. Bu yazımızda, Denzel Washington en iyi filmleri listesini sizlerle paylaşıyoruz. Hangi filmlerin Denzel Washington izlenmesi gereken filmleri arasında olduğunu merak ediyorsanız, işte cevabı.";
const bitis_metin = "İşte Denzel Washington'un en iyi 10 filmi listemiz. Umarız bu listeyi zevkle okumuşsunuzdur ve izleyeceğiniz filmlerde keyifli vakit geçirirsiniz. Denzel Washington filmleri, gerçek bir sinema deneyimi sunuyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["denzel","washington","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T19:25:51+03:00";
const degistirilmeTarihi = "2024-05-25T19:25:51+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-10",
    "name": "Fences - Çitler",
    "image": "/images/movies/denzel_washington_fences_-_citler.jpg",
    "ozellikler": {
      "Yönetmen": "August Wilson",
      "Oyuncular": [
        "Denzel Washington",
        "Viola Davis"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 19 dk.",
      "Yıl": "2016",
      "imdb": "7.2/10",
      "Değerlendirme": "118000",
      "metascore": "79"
    },
    "paragraf": "Denzel Washington filmleri arasında güçlü bir drama olan Fences - Çitler, oyuncunun en etkileyici rollerinden birini sunar. Film, aile içi karmaşık ilişkileri ve sorumluluk temalarını işler."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-9",
    "name": "Training Day - Eğitim Günü",
    "image": "/images/movies/denzel_washington_training_day_-_egitim_gunu.jpg",
    "ozellikler": {
      "Yönetmen": "Antoine Fuqua",
      "Oyuncular": [
        "Denzel Washington",
        "Ethan Hawke"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Süre": "2 sa. 2 dk.",
      "Yıl": "2001",
      "imdb": "7.7/10",
      "Değerlendirme": "474000",
      "metascore": "71"
    },
    "paragraf": "Training Day - Eğitim Günü, Denzel Washington en iyi filmleri arasında yer almakla kalmaz, aynı zamanda oscar ödülü kazanmış bir başyapıttır. Denzel'in karizmatik ve tehlikeli bir polis memurunu canlandırdığı bu film, sürükleyici bir deneyim sunar."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-8",
    "name": "Malcolm X",
    "image": "/images/movies/denzel_washington_malcolm_x.jpg",
    "ozellikler": {
      "Yönetmen": "Spike Lee",
      "Oyuncular": [
        "Denzel Washington",
        "Angela Bassett"
      ],
      "Kategori": [
        "Biografi",
        "Drama"
      ],
      "Süre": "3 sa. 22 dk.",
      "Yıl": "1992",
      "imdb": "7.7/10",
      "Değerlendirme": "102000",
      "metascore": "73"
    },
    "paragraf": "Malcolm X, Denzel Washington filmleri arasında önemli bir yere sahiptir. Aktivist Malcolm X'in hayatını konu alan bu biyografik film, Denzel'in güçlü performansı ile öne çıkar."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-7",
    "name": "Inside Man - İçerideki Adam",
    "image": "/images/movies/denzel_washington_inside_man_-_i̇cerideki_adam.jpg",
    "ozellikler": {
      "Yönetmen": "Spike Lee",
      "Oyuncular": [
        "Denzel Washington",
        "Clive Owen",
        "Jodie Foster"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "2006",
      "imdb": "7.6/10",
      "Değerlendirme": "399000",
      "metascore": "76"
    },
    "paragraf": "Inside Man - İçerideki Adam, Denzel Washington en iyi filmi listesinde ön sıralarda yer alır. Banka soygunu ile başlayan film, entrikalı plotları ve sürükleyici senaryosu ile dikkat çeker."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-6",
    "name": "The Hurricane - Kasırga",
    "image": "/images/movies/denzel_washington_the_hurricane_-_kasirga.jpg",
    "ozellikler": {
      "Yönetmen": "Norman Jewison",
      "Oyuncular": [
        "Denzel Washington"
      ],
      "Kategori": [
        "Drama",
        "Biyografi"
      ],
      "Süre": "2 sa. 26 dk.",
      "Yıl": "1999",
      "imdb": "7.6/10",
      "Değerlendirme": "103000",
      "metascore": "74"
    },
    "paragraf": "The Hurricane - Kasırga, etkileyici bir gerçek hikayeden esinlenilerek yapılan başka bir Denzel Washington şaheseridir. Yanlış bir mahkumiyetin ve adalet arayışının dramatize edildiği bu film, seyircileri derinden etkiler."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-5",
    "name": "Flight - Uçuş",
    "image": "/images/movies/denzel_washington_flight_-_ucus.jpg",
    "ozellikler": {
      "Yönetmen": "Robert Zemeckis",
      "Oyuncular": [
        "Denzel Washington"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Süre": "2 sa. 18 dk.",
      "Yıl": "2012",
      "imdb": "7.3/10",
      "Değerlendirme": "377000",
      "metascore": "76"
    },
    "paragraf": "Flight - Uçuş filmi, Denzel Washington'un en dramatik rollerinden biridir. Bir pilotun başından geçen trajik bir olayın ardından yaşananları anlatan bu film, izleyiciyi hüzne boğar."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-4",
    "name": "The Equalizer 2 - Adalet 2",
    "image": "/images/movies/denzel_washington_the_equalizer_2_adalet_2.jpg",
    "ozellikler": {
      "Yönetmen": "Antoine Fuqua",
      "Oyuncular": [
        "Denzel Washington"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Süre": "2 sa. 1 dk.",
      "Yıl": "2018",
      "imdb": "6.7/10",
      "Değerlendirme": "199000",
      "metascore": "50"
    },
    "paragraf": "The Equalizer 2 - Adalet 2, Denzel Washington filmleri içinde aksiyon ve adalet temalı bir başka filmidir. Kendi yöntemleriyle adaleti sağlayan bir adamın hikayesini izlerken, Denzelin oyunculuğuna hayran kalacaksınız."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-3",
    "name": "American Gangster - Amerikan Gangsteri",
    "image": "/images/movies/denzel_washington_american_gangster_-_amerikan_gangsteri.jpg",
    "ozellikler": {
      "Yönetmen": "Ridley Scott",
      "Oyuncular": [
        "Denzel Washington",
        "Russell Crowe"
      ],
      "Kategori": [
        "Biyografi",
        "Suç"
      ],
      "Süre": "2 sa. 37 dk.",
      "Yıl": "2007",
      "imdb": "7.8/10",
      "Değerlendirme": "454000",
      "metascore": "76"
    },
    "paragraf": "American Gangster - Amerikan Gangsteri, gerçek bir hikayeden alınmış bu film, Denzel Washington en iyi filmleri listesinin zirvesine yakın bir yerde durur. Denzel, 70lerin suç dünyasında yükselen bir gangsteri canlandırır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-2",
    "name": "Man on Fire - Ateşli Silah",
    "image": "/images/movies/denzel_washington_man_on_fire_-_atesli_silah.jpg",
    "ozellikler": {
      "Yönetmen": "Tony Scott",
      "Oyuncular": [
        "Denzel Washington",
        "Dakota Fanning"
      ],
      "Kategori": [
        "Aksiyon",
        "Drama"
      ],
      "Süre": "2 sa. 26 dk.",
      "Yıl": "2004",
      "imdb": "7.7/10",
      "Değerlendirme": "391000",
      "metascore": "47"
    },
    "paragraf": "Man on Fire - Ateşli Silah, sıradan bir koruma görevlisinin, kendisine emanet edilen küçük bir kızı koruma hikayesini anlatır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/denzel-washington-en-iyi-10-filmi#bolum-1",
    "name": "The Magnificent Seven - Muhteşem Yedili",
    "image": "/images/movies/denzel_washington_the_magnificent_seven_-_muhtesem_yedili.jpg",
    "ozellikler": {
      "Yönetmen": "Antoine Fuqua",
      "Oyuncular": [
        "Denzel Washington",
        "Chris Pratt",
        "Ethan Hawke"
      ],
      "Kategori": [
        "Aksiyon",
        "Vahşi Batı"
      ],
      "Süre": "2 sa. 12 dk.",
      "Yıl": "2016",
      "imdb": "6.9/10",
      "Değerlendirme": "229000",
      "metascore": "54"
    },
    "paragraf": "The Magnificent Seven - Muhteşem Yedili, Denzel Washington izlenmesi gereken filmleri listesinde birinci sırada yer alıyor. Bu modern Vahşi Batı uyarlamasında Denzel, adaleti sağlamak için savaşan 7 silahşorun lideri olarak karşımıza çıkıyor."
  }

];

const ana_resim = "/images/ana_gorseller/denzel_washington_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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