
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function IdrisElbaEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "idris-elba-en-iyi-10-filmi";
const baslik = "Idris Elba en iyi 10 filmi";
const metin = "Idris Elba, üstün oyunculuk yeteneği ve karizmasıyla Hollywood'un önde gelen aktörlerinden biri olarak bilinir. Kariyerinde birçok unutulmaz projeye imza atmış olan Elba'nın, Idris Elba filmleri arasından seçtiğimiz en iyi 10 filmi sizler için derledik. Idris Elba oynadığı filmler geniş bir yelpazede yer almakta ve her biri kendine özgü hikayeler sunmaktadır. İşte, Idris Elba en iyi filmleri ve performansları.";
const bitis_metin = "Idris Elba'nın çeşitlilik dolu kariyerini gözler önüne serdiğimiz bu listeyle, en iyi performanslarını ve unutulmaz anlarını tekrardan hatırladık. Idris Elba filmleri içerisindeki bu seçkiler, onun çok yönlü yeteneğini ve karizmasını ortaya koyuyor. Umarız bu liste beğeninizi kazanmıştır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["idris","elba","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:38:27+03:00";
const degistirilmeTarihi = "2024-08-16T16:38:27+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-10",
    "name": "The Dark Tower - Kara Kule",
    "image": "/images/movies/Idris_Elba_the_dark_tower_-_kara_kule.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Matthew McConaughey"
      ],
      "Kategori": [
        "Fantastik",
        "Bilim Kurgu"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Nikolaj Arcel",
      "imdb": "5.6/10",
      "Değerlendirme": "147032",
      "metacritic": "34"
    },
    "paragraf": "The Dark Tower - Kara Kule, Stephen King'in popüler roman serisinden uyarlanan bir fantastik maceradır. Idris Elba, fantastik dünyalar arasında geçen bu serüvende baş kahraman olan Silahşor Roland'ı canlandırmaktadır. Filmdeki performansıyla Elba, izleyiciler için unutulmaz bir karakter yaratıyor. Arayışı boyunca karşılaştığı zorluklar ve düşmanlarla mücadele eden karakteri canlandıran Elba, Idris Elba en iyi filmi listesinde kendisine yer buluyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-9",
    "name": "Prometheus",
    "image": "/images/movies/Idris_Elba_prometheus.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Noomi Rapace",
        "Michael Fassbender"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Ridley Scott",
      "imdb": "7/10",
      "Değerlendirme": "651859",
      "metacritic": "64"
    },
    "paragraf": "Prometheus, Ridley Scott'un yönettiği bir bilim kurgu gerilim filmidir. Idris Elba, uzay gemisinin kaptanı Janek rolünde karşımıza çıkıyor. Bu filmde Elba, farklı bir evrenin keşfi sırasında yaşanan gizemli olaylara tanıklık eder. Ele aldığı temalar ve sağlam kadrosuyla dikkat çeken film, Idris Elba imdb sıralamasında yüksek notlarla yer alıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-8",
    "name": "The Losers",
    "image": "/images/movies/Idris_Elba_the_losers.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Chris Evans",
        "Jeffrey Dean Morgan",
        "Zoe Saldana"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 37 dk.",
      "Yönetmen": "Sylvain White",
      "imdb": "6.2/10",
      "Değerlendirme": "107750",
      "metacritic": "44"
    },
    "paragraf": "The Losers, aksiyon ve macera dolu bir ekip çalışmasının anlatıldığı bir film. Idris Elba, bir grup seçkin askerden oluşan bir takımın liderlerinden biri olan Roque karakterini canlandırıyor. Film, ekibin ihanete uğramasının ardından intikam hikayesini konu alıyor. Idris Elba oynadığı filmler arasındaki dinamik performansı ile izleyicilere heyecan dolu anlar yaşatmaktadır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-7",
    "name": "RocknRolla",
    "image": "/images/movies/Idris_Elba_rocknrolla.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Gerard Butler",
        "Tom Wilkinson"
      ],
      "Kategori": [
        "Suç",
        "Komedi"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 54 dk.",
      "Yönetmen": "Guy Ritchie",
      "imdb": "7.2/10",
      "Değerlendirme": "266596",
      "metacritic": "53"
    },
    "paragraf": "Guy Ritchie'nin yönettiği RocknRolla, suç ve komediyi bir arada sunan bir yapım. Idris Elba, Londra'nın karanlık yer altı suç dünyasında navigasyon yapan bir grup gangsterin önemli üyelerinden biri olan Mumbles karakterini canlandırıyor. Bu filmdeki rolü, Elba'nın çok yönlü oyunculuğunu Idris Elba en iyi filmleri listesinde bir kez daha gözler önüne seriyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-6",
    "name": "Molly's Game - Molly'nin Oyunu",
    "image": "/images/movies/Idris_Elba_molly's_game_-_molly'nin_oyunu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Jessica Chastain"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 20 dk.",
      "Yönetmen": "Aaron Sorkin",
      "imdb": "7.4/10",
      "Değerlendirme": "190489",
      "metacritic": "71"
    },
    "paragraf": "Molly's Game - Molly'nin Oyunu, Aaron Sorkin'in yönettiği bir biyografik dram filmidir. Idris Elba, illegal poker dünyasının perde arkasını yöneten Molly Bloom'un avukatı rolündedir. Film, gerçek olaylardan esinlenerek ele alındığından dolayı gerilim dolu ve ilgi çekici bir hikaye sunmaktadır. Elba, performansıyla Idris Elba en iyi filmi kategorisine adını yazdırmakta."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-5",
    "name": "Mandela: Long Walk to Freedom - Mandela: Özgürlüğe Giden Uzun Yol",
    "image": "/images/movies/Idris_Elba_mandela__long_walk_to_freedom_-_mandela__ozgurluge_giden_uzun_yol.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Naomie Harris"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 21 dk.",
      "Yönetmen": "Justin Chadwick",
      "imdb": "7.1/10",
      "Değerlendirme": "29328",
      "metacritic": "60"
    },
    "paragraf": "Mandela: Long Walk to Freedom, Nelson Mandela'nın yaşamını anlatan bir biyografi filmidir. Bu filmde Idris Elba, Mandela'yı canlandırıyor ve unutulmaz bir performans sergiliyor. Gerçek bir hikaye üzerinden, özgürlük ve eşitlik adına verilen mücadeleyi gözler önüne seren bu film, izleyiciler için oldukça etkileyici bir deneyim sunmaktadır. Idris Elba imdb sıralamalarında bu filmi ile övgü almıştır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-4",
    "name": "Pacific Rim - Pasifik Savaşı",
    "image": "/images/movies/Idris_Elba_pacific_rim_-_pasifik_savasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Charlie Hunnam",
        "Diego Klattenhoff"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 11 dk.",
      "Yönetmen": "Guillermo del Toro",
      "imdb": "6.9/10",
      "Değerlendirme": "535355",
      "metacritic": "65"
    },
    "paragraf": "Pacific Rim - Pasifik Savaşı, Guillermo del Toro'nun yönettiği bir bilim kurgu aksiyon filmidir. Idris Elba, devasa canavarlar ve robotlarla dolu bu yüksek gerilimli dünyada, insanlığı korumak için savaşan bir general olan Stacker Pentecost karakterine hayat veriyor. Elba'nın performansı, aksiyon severler için inanılmaz bir deneyim sunarak Idris Elba en iyi filmleri arasında yer alıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-3",
    "name": "Beasts of No Nation",
    "image": "/images/movies/Idris_Elba_beasts_of_no_nation.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Abraham Attah",
        "Emmanuel Affadzi"
      ],
      "Kategori": [
        "Dram",
        "Savaş"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "Cary Joji Fukunaga",
      "imdb": "7.7/10",
      "Değerlendirme": "87531",
      "metacritic": "79"
    },
    "paragraf": "Beasts of No Nation, çocuk askerlerin acımasız dünyasını gözler önüne seren bir dram filmidir. Idris Elba, bir çocuk asker birliğinin lideri olan Kumandan karakterini canlandırarak, güçlü bir performans sergiliyor. Film, hem hikayesiyle hem de Elba'nın oyunculuğuyla izleyicilere duygusal anlar yaşatıyor ve Idris Elba oynadığı filmler kişisel en iyi listelerinde sıklıkla yer alıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-2",
    "name": "Thor: Ragnarok",
    "image": "/images/movies/Idris_Elba_thor__ragnarok.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Chris Hemsworth",
        "Tom Hiddleston"
      ],
      "Kategori": [
        "Fantastik",
        "Aksiyon"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Taika Waititi",
      "imdb": "7.9/10",
      "Değerlendirme": "827104",
      "metacritic": "74"
    },
    "paragraf": "Thor: Ragnarok, Marvel sinematik evreninin ünlü aksiyon ve fantastik film serisinin bir parçasıdır. Bu filmde Idris Elba, koruyucu Heimdall rolündedir ve Thor'un maceralarındaki kilit karakterlerden biri olarak öne çıkar. Film boyunca sergilenen aksiyon dolu sahneler ve Elba'nın sağlam performansı, Idris Elba en iyi filmi listesinde bu yapımı üst sıralara taşımakta."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/idris-elba-en-iyi-10-filmibolum-1",
    "name": "The Suicide Squad - Gerçek Kötüler",
    "image": "/images/movies/Idris_Elba_the_suicide_squad_-_gercek_kotuler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Idris Elba",
        "Margot Robbie",
        "Michael Rooker",
        "Viola Davis"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2021",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "James Gunn",
      "imdb": "7.2/10",
      "Değerlendirme": "416878",
      "metacritic": "72"
    },
    "paragraf": "The Suicide Squad - Gerçek Kötüler filmi, çılgın bir ekip dinamiği ile dolu aksiyon ve macera sunuyor. Idris Elba, bu filmde Bloodsport karakterine hayat veriyor ve suçluların oluşturduğu çılgın bir ekibin liderliğini üstleniyor. Film, eğlenceli yapısı ve yıldız oyuncu kadrosuyla dikkat çekiyor. Idris Elba imdb verilerine göre mükemmel bir performans sergileyerek, en iyi filmleri arasında zirvede yer alıyor."
  }

];

const ana_resim = "/images/ana_gorseller/idris-elba-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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