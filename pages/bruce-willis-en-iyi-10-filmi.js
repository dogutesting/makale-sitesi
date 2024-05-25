
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function BruceWillisEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "bruce-willis-en-iyi-10-filmi";
const baslik = "Bruce Willis en iyi 10 filmi";
const metin = "Bruce Willis filmleri, aksiyon ve drama türünde harikalar yaratan bir aktördür. Bu makalemizde, Bruce Willis'in Bruce Willis en iyi filmleri listesine göz atacağız ve Bruce Willis izlenmesi gereken filmleri hakkında bilgi sahibi olacaksınız. İşte, Bruce Willis en iyi 10 filmi.";
const bitis_metin = "Bu yazımızda Bruce Willis filmleri üzerinden aktörün Bruce Willis en iyi filmleri listesini sunduk. Umarız bu liste, Bruce Willis'in unutulmaz performanslarını yeniden keşfetmenizi sağlar.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["bruce","willis","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:32:24+03:00";
const degistirilmeTarihi = "2024-05-25T18:32:24+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-10",
    "name": "Die Hard - Zor Ölüm",
    "image": "/images/movies/bruce_willis_die_hard_-_zor_olum.jpg",
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
      "Değerlendirme": "948000"
    },
    "paragraf": "Bruce Willis filmleri arasında ikonikleşen Die Hard - Zor Ölüm, aksiyon sahneleri ve Willis'in karizması ile dikkat çeker. Bruce Willis en iyi filmi olarak adlandırabileceğimiz bu eser, sürekli yüksek tempo ve heyecan vaat ediyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-9",
    "name": "Die Hard Zor Ölüm 2",
    "image": "/images/movies/bruce_willis_die_hard_zor_olum_2.jpg",
    "ozellikler": {
      "Yönetmen": "Renny Harlin",
      "Oyuncular": [
        "Bruce Willis"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Süre": "2 sa. 04 dk.",
      "Yıl": "1990",
      "imdb": "7.1/10",
      "Değerlendirme": "384000"
    },
    "paragraf": "Zor Ölüm serisinin bu devam filminde, Bruce Willis en iyi filmleri enerjisini bir kez daha sergiliyor. Serinin her filmi gibi bu film de gerilim ve aksiyon dolu anlar sunmayı başarıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-8",
    "name": "Pulp Fiction - Ucuz Roman",
    "image": "/images/movies/bruce_willis_pulp_fiction_-_ucuz_roman.jpg",
    "ozellikler": {
      "Yönetmen": "Quentin Tarantino",
      "Oyuncular": [
        "John Travolta",
        "Uma Thurman",
        "Bruce Willis"
      ],
      "Kategori": [
        "Drama",
        "Suç"
      ],
      "Süre": "2 sa. 34 dk.",
      "Yıl": "1994",
      "imdb": "8.9/10",
      "Değerlendirme": "2200000"
    },
    "paragraf": "Tarantino'nun bu başyapıtı, Bruce Willis'in filmografisinde önemli bir yere sahip. Karakter oyunculuğu ve senaryo yönünden dikkat çeken bu film, Willis için de kariyerinde önemli bir dönüm noktası."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-7",
    "name": "Die Hard with a Vengeance - Zor Ölüm 3",
    "image": "/images/movies/bruce_willis_die_hard_with_a_vengeance_-_zor_olum_3.jpg",
    "ozellikler": {
      "Yönetmen": "John McTiernan",
      "Oyuncular": [
        "Bruce Willis",
        "Samuel L. Jackson"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 08 dk.",
      "Yıl": "1995",
      "imdb": "7.6/10",
      "Değerlendirme": "409000"
    },
    "paragraf": "Die Hard serisinin üçüncü filmi, Willis ve Samuel L. Jackson'ın kimyalarıyla öne çıkıyor. Bruce Willis filmleri içinde aksiyon severlerin kaçırmaması gereken bir başka macera daha."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-6",
    "name": "Armageddon - Armageddon",
    "image": "/images/movies/bruce_willis_armageddon_-_armageddon.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Bay",
      "Oyuncular": [
        "Bruce Willis",
        "Ben Affleck",
        "Liv Tyler"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Süre": "2 sa. 31 dk.",
      "Yıl": "1998",
      "imdb": "6.7/10",
      "Değerlendirme": "452000"
    },
    "paragraf": "Bu yüksek bütçeli bilim kurgu filmi, gezegenimizin kaderini kurtarmak için zorlu bir göreve çıkan bir grup kahramanı anlatıyor. Bruce Willis, filmdeki başrolüyle unutulmaz bir performans sergiliyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-5",
    "name": "Looper - Tetikçiler",
    "image": "/images/movies/bruce_willis_looper_-_tetikciler.jpg",
    "ozellikler": {
      "Yönetmen": "Rian Johnson",
      "Oyuncular": [
        "Bruce Willis",
        "Joseph Gordon-Levitt"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "1 sa. 59 dk.",
      "Yıl": "2012",
      "imdb": "7.4/10",
      "Değerlendirme": "604000"
    },
    "paragraf": "Looper, zaman yolculuğu konseptini farklı bir bakış açısıyla ele alıyor. Bruce Willis ve Joseph Gordon-Levitt'in mükemmel uyumu, filmin hem düşündürücü hem de heyecan verici olmasını sağlıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-4",
    "name": "The Fifth Element - Beşinci Element",
    "image": "/images/movies/bruce_willis_the_fifth_element_-_besinci_element.jpg",
    "ozellikler": {
      "Yönetmen": "Luc Besson",
      "Oyuncular": [
        "Bruce Willis",
        "Milla Jovovich",
        "Gary Oldman"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "2 sa. 06 dk.",
      "Yıl": "1997",
      "imdb": "7.6/10",
      "Değerlendirme": "508000"
    },
    "paragraf": "Bilim kurgu ve aksiyonun harmanlandığı bu film, görsel efektleri ile döneminin öncü yapımlarından biri oldu. Bruce Willis'in performansı, bu epik maceranın önemli bir parçası."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-3",
    "name": "RED - Emekli ve Tehlikeli",
    "image": "/images/movies/bruce_willis_red_-_emekli_ve_tehlikeli.jpg",
    "ozellikler": {
      "Yönetmen": "Robert Schwentke",
      "Oyuncular": [
        "Bruce Willis",
        "Morgan Freeman",
        "John Malkovich"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Süre": "1 sa. 51 dk.",
      "Yıl": "2010",
      "imdb": "7.0/10",
      "Değerlendirme": "324000"
    },
    "paragraf": "RED, emekli ajanların yeniden iş başına dönmesini anlatıyor. Filmdeki aksiyon ve mizah unsurları, Bruce Willis'in yeteneklerini farklı bir yönüyle sergilemesine olanak tanıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-2",
    "name": "16 Blocks - 16 Blok",
    "image": "/images/movies/bruce_willis_16_blocks_-_16_blok.jpg",
    "ozellikler": {
      "Yönetmen": "Richard Donner",
      "Oyuncular": [
        "Bruce Willis",
        "Mos Def"
      ],
      "Kategori": [
        "Aksiyon",
        "Polisiye"
      ],
      "Süre": "1 sa. 45 dk.",
      "Yıl": "2006",
      "imdb": "6.6/10",
      "Değerlendirme": "135000"
    },
    "paragraf": "Bu heyecanlı polisiye filmde, Willis bir polis memurunu canlandırıyor, şehir boyunca tehlikeli bir yolculuk yapıyor. Filmin dinamik hikayesi ve Willis'in üst düzey performansı izleyicileri etkilemekte."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/bruce-willis-en-iyi-10-filmi#bolum-1",
    "name": "The Last Boy Scout - Son Oyun",
    "image": "/images/movies/bruce_willis_the_last_boy_scout_-_son_oyun.jpg",
    "ozellikler": {
      "Yönetmen": "Tony Scott",
      "Oyuncular": [
        "Bruce Willis",
        "Damon Wayans"
      ],
      "Kategori": [
        "Aksiyon",
        "Polisiye"
      ],
      "Süre": "1 sa. 45 dk.",
      "Yıl": "1991",
      "imdb": "7.0/10",
      "Değerlendirme": "112000"
    },
    "paragraf": "The Last Boy Scout, aksiyon ve gerilim unsurlarını etkili bir şekilde harmanlayan ikonik bir film. Bruce Willis'in olağanüstü performansı, filmin akılda kalıcı olmasını sağlıyor."
  }
];

const ana_resim = "/images/ana_gorseller/bruce_willis_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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