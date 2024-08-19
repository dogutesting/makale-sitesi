
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JasonMomoaEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jason-momoa-en-iyi-10-filmi";
const baslik = "Jason Momoa en iyi 10 filmi";
const metin = "Jason Momoa filmleri arasında en iyi olanları sizin için derledik. Oyuncunun aksiyonun yanı sıra fantastik ve bilim kurgu türlerindeki başarısı dikkat çekiyor. Jason Momoa oynadığı filmler arasında yer alan bu yapıtlar, onun yeteneklerini en iyi şekilde ortaya koyuyor.";
const bitis_metin = "Jason Momoa'nın kariyerinin en iyi filmlerini sizler için derledik. Her biri kendi türünde eşsiz olan bu yapımlar, Momoa'nın oyunculuk becerilerini gözler önüne seriyor. Jason Momoa en iyi mini listemizi okuduğunuz için teşekkür ederiz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jason","momoa","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:40:07+03:00";
const degistirilmeTarihi = "2024-08-16T16:40:07+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-10",
    "name": "Braven",
    "image": "/images/movies/Jason_Momoa_braven.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Zahn McClarnon",
        "Garret Dillahunt"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 34 dk.",
      "Yönetmen": "Lin Oeding",
      "imdb": "5.9/10",
      "Değerlendirme": "42411",
      "metacritic": "61"
    },
    "paragraf": "Braven, Jason Momoa'nın başrol olarak oynadığı ve bir orman işçisini canlandırdığı aksiyon dolu bir film. Ailesini korumak için çetin bir mücadeleye girişen karakter, seyirciye nefes kesici anlar yaşatıyor. Jason Momoa en iyi filmleri arasında gösterilen Braven, tavizsiz bir aksiyon sunuyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-9",
    "name": "Conan the Barbarian - Barbar Conan",
    "image": "/images/movies/Jason_Momoa_conan_the_barbarian_-_barbar_conan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Rachel Nichols",
        "Stephen Lang"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Marcus Nispel",
      "imdb": "5.1/10",
      "Değerlendirme": "103148",
      "metacritic": "36"
    },
    "paragraf": "Conan the Barbarian, Jason Momoa oynadığı filmler arasında ikonik olanlardan biri. Fantastik bir dünyanın kapılarını aralayan bu yapımda, Conan karakterini canlandıran Momoa, antik bir efsaneyi sinemaya taşıyor. Jason Momoa imdb puanları yüksek ortalamalara sahip bu filmde, fiziksel yeteneklerini gösteriyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-8",
    "name": "Bullet to the Head - Başına Mermi",
    "image": "/images/movies/Jason_Momoa_bullet_to_the_head_-_basina_mermi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Sylvester Stallone",
        "Sung Kang"
      ],
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 32 dk.",
      "Yönetmen": "Walter Hill",
      "imdb": "5.7/10",
      "Değerlendirme": "52708",
      "metacritic": "48"
    },
    "paragraf": "Bullet to the Head, Sylvester Stallone ve Jason Momoa'nın bir araya geldiği bir suç gerilim filmi. Momoa, filmde tehlikeli bir suikastçıyı canlandırıyor ve karakterinin karanlık taraflarını izleyiciye aktarıyor. Jason Momoa en iyi filmi sıralamamızda heyecan verici anlarıyla yer alıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-7",
    "name": "Road to Paloma",
    "image": "/images/movies/Jason_Momoa_road_to_paloma.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Lisa Bonet",
        "Tye Alexander",
        "Henree Alyse"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 31 dk.",
      "Yönetmen": "Jason Momoa",
      "imdb": "6/10",
      "Değerlendirme": "5627",
      "metacritic": "44"
    },
    "paragraf": "Road to Paloma, Jason Momoa'nın hem yönettiği hem de başrolde oynadığı bir yol filmi. Film, adalet ve özgürlük kavramlarını sorgulayarak izleyiciye derin duygular yaşatıyor. Jason Momoa filmleri arasında, oyuncunun yönetmenlik yeteneklerini de gösteren bu yapım, farklı bir perspektif sunuyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-6",
    "name": "Wolves",
    "image": "/images/movies/Jason_Momoa_wolves.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Lucas Till",
        "Stephen McHattie"
      ],
      "Kategori": [
        "Fantastik",
        "Korku"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 31 dk.",
      "Yönetmen": "David Hayter",
      "imdb": "5.3/10",
      "Değerlendirme": "10543",
      "metacritic": "37"
    },
    "paragraf": "Wolves, kurt adam temasıyla dikkat çeken ve Jason Momoa'nın ürkütücü bir karaktere hayat verdiği bir film. Doğaüstü unsurları sevenlerin ilgisini çekebilecek bu yapımda, hikayenin karanlık yüzü ön plana çıkıyor. Jason Momoa en iyi filmleri kategorisinde, fantastik öğeleriyle farklı bir konumda."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-5",
    "name": "The Bad Batch - Çürük Parti",
    "image": "/images/movies/Jason_Momoa_the_bad_batch_-_curuk_parti.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Suki Waterhouse"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Ana Lily Amirpour",
      "imdb": "5.2/10",
      "Değerlendirme": "35916",
      "metacritic": "62"
    },
    "paragraf": "The Bad Batch, distopik bir gelecekte geçen ve Jason Momoa'nın karizmatik duruşunu sergilediği bir bilim kurgu gerilimi. Filmdeki sıra dışı atmosferle izleyiciyi çeken yapım, Jason Momoa imdb puanlarına olumlu etki yapmış filmler arasında yer alıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-4",
    "name": "Sweet Girl",
    "image": "/images/movies/Jason_Momoa_sweet_girl.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Isabela Merced"
      ],
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Yıl": "2021",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Brian Andrew Mendoza",
      "imdb": "5.5/10",
      "Değerlendirme": "35773",
      "metacritic": "46"
    },
    "paragraf": "Sweet Girl, Jason Momoa'nın bir baba olarak ailesini koruma çabalarını konu alan ve aksiyonla duygusal öğeleri harmanlayan bir film. İzleyicileri derin bir hikaye ile buluşturan bu yapım, Jason Momoa oynadığı filmler arasında duygusal yoğunluğuyla dikkat çekiyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-3",
    "name": "Slumberland - Rüya Diyarına Yolculuk",
    "image": "/images/movies/Jason_Momoa_slumberland_-_ruya_diyarina_yolculuk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Kyle Chandler",
        "Marlow Barkley"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Yıl": "2022",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Francis Lawrence",
      "imdb": "6.7/10",
      "Değerlendirme": "33541",
      "metacritic": "40"
    },
    "paragraf": "Slumberland, Jason Momoa'nın fantastik bir maceraya öncülük ettiği ve büyüleyici bir dünya sunduğu bir film. Jason Momoa filmleri arasında, hayal gücünü harekete geçiren bu yapım, izleyicilere eşsiz bir sinema deneyimi yaşatıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-2",
    "name": "Aquaman and the Lost Kingdom - Aquaman ve Kayıp Krallık",
    "image": "/images/movies/Jason_Momoa_aquaman_and_the_lost_kingdom_-_aquaman_ve_kayip_krallik.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Amber Heard",
        "Patrick Wilson"
      ],
      "Kategori": [
        "Fantastik",
        "Aksiyon"
      ],
      "Yıl": "2023",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "James Wan",
      "imdb": "5.6/10",
      "Değerlendirme": "93682",
      "metacritic": "42"
    },
    "paragraf": "Aquaman and the Lost Kingdom, Jason Momoa'nın denizler altındaki macerasına devam ettiği fantastik bir aksiyon filmi. Görsel efektleriyle büyüleyen ve Jason Momoa en iyi filmi adaylarından biri olan bu yapım, izleyiciyi su altı dünyasının derinliklerine götürüyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jason-momoa-en-iyi-10-filmi#bolum-1",
    "name": "Dune - Çöl Gezegeni",
    "image": "/images/movies/Jason_Momoa_dune_-_col_gezegeni.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jason Momoa",
        "Timothée Chalamet",
        "Francesca Annis",
        "Leonardo Cimino"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Dram"
      ],
      "Yıl": "2021",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "David Lynch",
      "imdb": "6.3/10",
      "Değerlendirme": "182278",
      "metacritic": "41"
    },
    "paragraf": "Dune, epik bir bilim kurgu olan ve Jason Momoa'nın önemli bir rolde yer aldığı bir başyapıt. Çöl gezegeninin gizemleri ve entrikaları içinde geçen bu film, Jason Momoa imdb sıralamalarında yüksek notlara layık görülmüş. Kendine has sinematik deneyimiyle Dune, Jason Momoa en iyi filmleri arasında zirvede yer alıyor."
  }

];

const ana_resim = "/images/ana_gorseller/jason-momoa-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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