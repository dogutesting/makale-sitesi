
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function BenedictCumberbatchEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "benedict-cumberbatch-en-iyi-10-filmi";
const baslik = "Benedict Cumberbatch en iyi 10 filmi";
const metin = "Benedict Cumberbatch, kariyeri boyunca birçok unutulmaz filme imza atmış bir aktör. Hem dramada hem de aksiyonda ustalığını göstermiş olan Benedict Cumberbatch filmleri arasında bazıları özellikle öne çıkıyor. İşte, Benedict Cumberbatch en iyi filmleri listemizde sizler için derlediğimiz bu yapımlar.";
const bitis_metin = "Bu yazımızda, Benedict Cumberbatch'in en iyi filmleri arasında yer alan yapımları inceledik. Her biri farklı türde ve eşsiz hikayeleriyle izleyicileri etkiliyor. Cumberbatch'in yeteneklerine hayran kalmamak elde değil.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["benedict","cumberbatch","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:22:51+03:00";
const degistirilmeTarihi = "2024-08-16T16:22:51+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1837703",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-10",
    "name": "The Fifth Estate - Wikileaks: Beşinci Kuvvet",
    "image": "/images/movies/Benedict_Cumberbatch_the_fifth_estate_-_wikileaks__besinci_kuvvet.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Peter Capaldi",
        "David Thewlis"
      ],
      "Kategori": [
        "Biyografi",
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Bill Condon",
      "imdb": "6.2/10",
      "Değerlendirme": "42911",
      "metacritic": "49"
    },
    "paragraf": "The Fifth Estate, Benedict Cumberbatch'in Julian Assange rolünde güçlü bir performans sergilediği bir biyografi-gerilim filmidir. Wikileaks’in kuruluşunu ve Assange’ın nasıl bir figür haline geldiğini anlatan bu film, Benedict Cumberbatch imdb kullanıcıları tarafından da ilgiyle karşılanmış ve oyuncunun başarılı biyografi performansları arasında görülmüştür."
  },
  {
    "num": "9",
    "title_id": "tt1408101",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-9",
    "name": "Star Trek Into Darkness - Star Trek Bilinmeze Doğru",
    "image": "/images/movies/Benedict_Cumberbatch_star_trek_into_darkness_-_star_trek_bilinmeze_dogru.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Leonard Nimoy",
        "Chris Pine"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "J.J. Abrams",
      "imdb": "7.7/10",
      "Değerlendirme": "498983",
      "metacritic": "72"
    },
    "paragraf": "Star Trek Into Darkness filminde, Benedict Cumberbatch oynadığı filmler arasında belki de en unutulmaz bilim kurgu rollerinden birinde yer alıyor. Kaptan Kirk ve ekibinin karşısına çıkan Khan karakteriyle ikonik bir performans gösteriyor. Film, aksiyon dolu sahneleri ve derin karakter analiziyle dikkat çekiyor."
  },
  {
    "num": "8",
    "title_id": "tt9419884",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-8",
    "name": "Doctor Strange in the Multiverse of Madness - Doktor Strange Çoklu Evren Çılgınlığında",
    "image": "/images/movies/Benedict_Cumberbatch_doctor_strange_in_the_multiverse_of_madness_-_doktor_strange_coklu_evren_cilginliginda.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Elizabeth Olsen"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2022",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Sam Raimi",
      "imdb": "6.9/10",
      "Değerlendirme": "488525",
      "metacritic": "60"
    },
    "paragraf": "Doktor Strange Çoklu Evren Çılgınlığında, Benedict Cumberbatch en iyi filmleri arasında farklı boyutların keşfini anlatan bir Marvel yapımı olarak öne çıkıyor. Hem görsel efekti güçlü hem de sürükleyici bir hikaye sunan filmde, Cumberbatch’in performansı bir kez daha göz dolduruyor."
  },
  {
    "num": "7",
    "title_id": "tt1322269",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-7",
    "name": "August: Osage County - Aile Sırları",
    "image": "/images/movies/Benedict_Cumberbatch_august__osage_county_-_aile_sirlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Meryl Streep",
        "Julia Roberts"
      ],
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 1 dk.",
      "Yönetmen": "John Wells",
      "imdb": "7.2/10",
      "Değerlendirme": "96086",
      "metacritic": "58"
    },
    "paragraf": "August: Osage County, Benedict Cumberbatch filmleri arasında duygusal derinliğiyle diğerlerinden ayrılan bir yapımdır. Karmaşık aile ilişkilerini keşfeden filmde, Cumberbatch’in etkileyici performansı ona drama alanında da ne kadar yetenekli olduğunu bir kez daha kanıtlıyor."
  },
  {
    "num": "6",
    "title_id": "tt1170358",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-6",
    "name": "The Hobbit: The Desolation of Smaug - Hobbit: Smaug'un Çorak Toprakları",
    "image": "/images/movies/Benedict_Cumberbatch_the_hobbit__the_desolation_of_smaug_-_hobbit__smaug'un_corak_topraklari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Ian McKellen",
        "Martin Freeman"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 41 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "7.8/10",
      "Değerlendirme": "712572",
      "metacritic": "66"
    },
    "paragraf": "Hobbit: Smaug'un Çorak Toprakları filminde, Benedict Cumberbatch'in sesi ve performansı Ejderha Smaug'u canlandırırken büyüleyici bir şekilde hissettiriyor. Film, Tolkien’in dünyasını başarılı bir şekilde ekrana taşırken, Cumberbatch’in vokal yeteneği de fark ediliyor."
  },
  {
    "num": "5",
    "title_id": "tt1340800",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-5",
    "name": "Tinker Tailor Soldier Spy - Köstebek",
    "image": "/images/movies/Benedict_Cumberbatch_tinker_tailor_soldier_spy_-_kostebek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Mark Strong",
        "John Hurt"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2011",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "Tomas Alfredson",
      "imdb": "7/10",
      "Değerlendirme": "213945",
      "metacritic": "85"
    },
    "paragraf": "Köstebek, Benedict Cumberbatch imdb değerlendirmelerinde yüksek puanlar almış bir casusluk gerilim filmi olarak dikkat çekiyor. Soğuk Savaş dönemindeki casus oyunlarını işleyen filmde, Cumberbatch katmanlı ve sofistike bir karakter olan Peter Guillam’ı canlandırıyor."
  },
  {
    "num": "4",
    "title_id": "tt2084970",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-4",
    "name": "The Imitation Game - Enigma",
    "image": "/images/movies/Benedict_Cumberbatch_the_imitation_game_-_enigma.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Keira Knightley"
      ],
      "Kategori": [
        "Biyografi",
        "Dram",
        "Savaş"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 54 dk.",
      "Yönetmen": "Morten Tyldum",
      "imdb": "8/10",
      "Değerlendirme": "832820",
      "metacritic": "71"
    },
    "paragraf": "Enigma, Benedict Cumberbatch en iyi filmi denildiğinde akla gelen güçlü bir yapımdır. II. Dünya Savaşı sırasında Enigma kodunu kıran matematikçi Alan Turing rolünde izleyenleri büyüleyen bir performans sergiliyor. Bu film, hem oyunculuk hem de tarihi anlatım açısından tam bir başyapıt."
  },
  {
    "num": "3",
    "title_id": "tt1211837",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-3",
    "name": "Doctor Strange - Doktor Strange",
    "image": "/images/movies/Benedict_Cumberbatch_doctor_strange_-_doktor_strange.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Chiwetel Ejiofor"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Scott Derrickson",
      "imdb": "7.5/10",
      "Değerlendirme": "816460",
      "metacritic": "72"
    },
    "paragraf": "Doktor Strange, Benedict Cumberbatch oynadığı filmler arasında diğerlerinden sıyrılan bir fantastik macera filmidir. Baş döndürücü görsel efektleri ve başka bir boyuttaki büyülü dünyası ile izleyiciye eşsiz bir deneyim sunuyor."
  },
  {
    "num": "2",
    "title_id": "tt4154756",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-2",
    "name": "Avengers: Infinity War - Yenilmezler: Sonsuzluk Savaşı",
    "image": "/images/movies/Benedict_Cumberbatch_avengers__infinity_war_-_yenilmezler__sonsuzluk_savasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Robert Downey Jr.",
        "Chris Hemsworth"
      ],
      "Kategori": [
        "Aksiyon",
        "Fantastik"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 29 dk.",
      "Yönetmen": "Anthony Russo",
      "imdb": "8.4/10",
      "Değerlendirme": "1225658",
      "metacritic": "68"
    },
    "paragraf": "Yenilmezler: Sonsuzluk Savaşı, Benedict Cumberbatch filmleri arasında büyük bütçesi ve geniş kadrosuyla dikkat çekiyor. Doctor Strange rolünde, süper kahramanların evreni kurtarma çabasında önemli bir karakter olarak göze çarpıyor."
  },
  {
    "num": "1",
    "title_id": "tt10293406",
    "url": "https://enonlar.com/benedict-cumberbatch-en-iyi-10-filmibolum-1",
    "name": "The Power of the Dog",
    "image": "/images/movies/Benedict_Cumberbatch_the_power_of_the_dog.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benedict Cumberbatch",
        "Geneviève Lemon"
      ],
      "Kategori": [
        "Dram",
        "Vahşi Batı"
      ],
      "Yıl": "2021",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Jane Campion",
      "imdb": "6.8/10",
      "Değerlendirme": "195845",
      "metacritic": "89"
    },
    "paragraf": "The Power of the Dog, Benedict Cumberbatch en iyi filmleri arasında ödüller kazanmış çarpıcı bir dramdır. Cumberbatch, bu filmde sefahat ve kontrol arasında gidip gelen bir çiftlik sahibini canlandırarak kariyerinin en etkileyici performanslarından birine imza atıyor."
  }

];

const ana_resim = "/images/ana_gorseller/benedict-cumberbatch-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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