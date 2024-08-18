
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function AdamSandlerEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "adam-sandler-en-iyi-10-filmi";
const baslik = "Adam Sandler en iyi 10 filmi";
const metin = "Adam Sandler, komedi dünyasının en sevilen oyuncularından biri olarak bilinir. Hem eğlenceli hem de duygusal performanslarıyla izleyicilerin gönlünü kazanmıştır. Bu yazıda, Adam Sandler filmleri arasından seçtiğimiz en iyi 10 filme bir göz atacağız. Eğer bir Sandler hayranıysanız, kesinlikle bu listeyi kaçırmamalısınız.";
const bitis_metin = "Bu yazımızda Adam Sandler oynadığı filmler arasında en iyilerini sizler için sıraladık. Eğer bu filmleri izlemediyseniz, Sandler'ın farklı türlerdeki başarılı performanslarına tanıklık etme fırsatını kaçırmayın.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["adam","sandler","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:46:30+03:00";
const degistirilmeTarihi = "2024-08-16T16:46:30+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1086772",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-10",
    "name": "Blended - Karışık Aile",
    "image": "/images/movies/Adam_Sandler_blended_-_karisik_aile.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Lee Van Cleef",
        "Drew Barrymore"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Frank Coraci",
      "imdb": "6.5/10",
      "Değerlendirme": "146754",
      "metacritic": "31"
    },
    "paragraf": "Blended, Adam Sandler ve Drew Barrymore'un başrollerini paylaştığı eğlenceli bir komedi filmidir. İki aile tatilde bir araya gelir ve birbirlerini istemeden de olsa tanımak zorunda kalırlar. Adam Sandler filmleri denildiğinde, bu film kesinlikle izlenmesi gereken yapımlar arasında yer alır."
  },
  {
    "num": "9",
    "title_id": "tt1375670",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-9",
    "name": "Grown Ups - Büyükler",
    "image": "/images/movies/Adam_Sandler_grown_ups_-_buyukler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Salma Hayek",
        "Kevin James"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "Dennis Dugan",
      "imdb": "6/10",
      "Değerlendirme": "281798",
      "metacritic": "30"
    },
    "paragraf": "Büyükler, eski okul arkadaşlarının mizahi bir buluşmasını konu alıyor. Adam Sandler'ın oynadığı filmler arasında yer alan bu yapım, izleyicilere kahkaha atma fırsatı sunuyor. Hem nostaljik hem de eğlenceli bir komedi arıyorsanız bu filmi listemize alabilirsiniz."
  },
  {
    "num": "8",
    "title_id": "tt0837562",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-8",
    "name": "Hotel Transylvania - Otel Transilvanya",
    "image": "/images/movies/Adam_Sandler_hotel_transylvania_-_otel_transilvanya.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Andy Samberg"
      ],
      "Kategori": [
        "Animasyon"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 31 dk.",
      "Yönetmen": "Genndy Tartakovsky",
      "imdb": "7/10",
      "Değerlendirme": "285465",
      "metacritic": "47"
    },
    "paragraf": "Otel Transilvanya, Drakula'nın kendisi ve diğer canavar arkadaşları için açtığı otelde geçen bir animasyon filmi. Adam Sandler, bu filmde Dracula karakterine sesiyle hayat veriyor. Çocuklar ve aileler için mükemmel bir seçenek ve Adam Sandler en iyi filmleri listesinde yer almayı hak ediyor."
  },
  {
    "num": "7",
    "title_id": "tt0343660",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-7",
    "name": "50 First Dates - 50 İlk Öpücük",
    "image": "/images/movies/Adam_Sandler_50_first_dates_-_50_ilk_opucuk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Drew Barrymore"
      ],
      "Kategori": [
        "Romantik Komedi"
      ],
      "Yıl": "2004",
      "Süre": "1 sa. 39 dk.",
      "Yönetmen": "Peter Segal",
      "imdb": "6.8/10",
      "Değerlendirme": "386969",
      "metacritic": "48"
    },
    "paragraf": "50 İlk Öpücük, hafıza kaybı yaşayan bir kadına aşık olan adamı konu alıyor. Adam Sandler, bu dokunaklı ve komik filmde unutulmaz bir performans sergiliyor. Sandler'ın romantik komedi türündeki başarılarından birini izlemek isteyenler için ideal bir seçim."
  },
  {
    "num": "6",
    "title_id": "tt0142342",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-6",
    "name": "Big Daddy - Süper Baba",
    "image": "/images/movies/Adam_Sandler_big_daddy_-_super_baba.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Joey Lauren Adams"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 33 dk.",
      "Yönetmen": "Dennis Dugan",
      "imdb": "6.4/10",
      "Değerlendirme": "237062",
      "metacritic": "42"
    },
    "paragraf": "Süper Baba, sorumluluk sahibi olmayı öğrenmeye çalışan bir adamın hikayesini eğlenceli bir dille anlatıyor. Adam Sandler, filmde sevgi dolu ve komik bir baba figürü olarak karşımıza çıkıyor. Adam Sandler en iyi filmi arayanlar için, Süper Baba kesinlikle listelenmesi gereken bir yapım."
  },
  {
    "num": "5",
    "title_id": "tt0272338",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-5",
    "name": "Punch-Drunk Love - Aşk Sarhoşu",
    "image": "/images/movies/Adam_Sandler_punch-drunk_love_-_ask_sarhosu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Jason Andrews"
      ],
      "Kategori": [
        "Romantik Drama"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Paul Thomas Anderson",
      "imdb": "7.3/10",
      "Değerlendirme": "180110",
      "metacritic": "78"
    },
    "paragraf": "Aşk Sarhoşu, Adam Sandler'ın farklı bir yönünü gösteriyor. Daha karanlık ve dramatik bir rol üstlenen Sandler, burada romantik drama türünde etkileyici bir performans sergiliyor. Filmlerde komedi ve dramın mükemmel bir birleşimini arayanlar için harika bir seçenek."
  },
  {
    "num": "4",
    "title_id": "tt0120888",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-4",
    "name": "The Wedding Singer - Evlilik Sanatçısı",
    "image": "/images/movies/Adam_Sandler_the_wedding_singer_-_evlilik_sanatcisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Drew Barrymore"
      ],
      "Kategori": [
        "Romantik Komedi"
      ],
      "Yıl": "1998",
      "Süre": "1 sa. 37 dk.",
      "Yönetmen": "Frank Coraci",
      "imdb": "6.9/10",
      "Değerlendirme": "164064",
      "metacritic": "60"
    },
    "paragraf": "Evlilik Sanatçısı, kendine özgü mizahi anlayışıyla romantik komedilere yeni bir soluk getiriyor. Adam Sandler'ın etkileyici performansı sayesinde izleyiciye unutulmaz anlar yaşatıyor. Adam Sandler imdb listesindeki yüksek puanları hak eden bu film, kesinlikle izlenmeli."
  },
  {
    "num": "3",
    "title_id": "tt5536736",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-3",
    "name": "The Meyerowitz Stories - Meyerowitz Hikayeleri",
    "image": "/images/movies/Adam_Sandler_the_meyerowitz_stories_-_meyerowitz_hikayeleri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Grace Van Patten"
      ],
      "Kategori": [
        "Dramedi"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Noah Baumbach",
      "imdb": "6.9/10",
      "Değerlendirme": "54477",
      "metacritic": "80"
    },
    "paragraf": "Meyerowitz Hikayeleri, bir aile dramını konu alıyor ve Adam Sandler'ın etkileyici bir şekilde olgunlaşmış performansını sunuyor. Film, Sandler'ın komedi dışındaki yeteneklerini sergileyen ve izleyicilere sıcak bir hikaye sunan bir yapım."
  },
  {
    "num": "2",
    "title_id": "tt8009428",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-2",
    "name": "Hustle - Takım Oyunu",
    "image": "/images/movies/Adam_Sandler_hustle_-_takim_oyunu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Queen Latifah"
      ],
      "Kategori": [
        "Spor Dram"
      ],
      "Yıl": "2022",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Jeremiah Zagar",
      "imdb": "7.3/10",
      "Değerlendirme": "147573",
      "metacritic": "68"
    },
    "paragraf": "Takım Oyunu, Adam Sandler'ın kariyerinde farklı bir yönü temsil ediyor. Bir basketbol menajerinin öyküsünün anlatıldığı filmde, Sandler derin bir performans sergiliyor ve izleyicilere çok katmanlı bir hikaye sunuyor. Sandler'ın hayranları için  kaçırılmaması gereken bir film."
  },
  {
    "num": "1",
    "title_id": "tt5727208",
    "url": "https://enonlar.com/adam-sandler-en-iyi-10-filmibolum-1",
    "name": "Uncut Gems - İşlenmemiş Elmaslar",
    "image": "/images/movies/Adam_Sandler_uncut_gems_-_islenmemis_elmaslar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Adam Sandler",
        "Mesfin Lamengo",
        "Sun Zhi Hua-Hilton"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 15 dk.",
      "Yönetmen": "Benny Safdie",
      "imdb": "7.4/10",
      "Değerlendirme": "323252",
      "metacritic": "93"
    },
    "paragraf": "İşlenmemiş Elmaslar, Adam Sandler'ı son derece gergin bir senaryoda başrolde gösteriyor. Gerilim dozu yüksek olan bu yapım, Sandler'ın şimdiye kadarki en iyi performanslarından birini sunuyor. Adam Sandler en iyi filmi denildiğinde birçok kişinin aklına gelen bu film, mutlaka izlenmesi gereken bir şaheser."
  }

];

const ana_resim = "/images/ana_gorseller/adam-sandler-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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