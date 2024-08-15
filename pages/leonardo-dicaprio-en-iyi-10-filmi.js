
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function LeonardoDicaprioEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "leonardo-dicaprio-en-iyi-10-filmi";
const baslik = "Leonardo DiCaprio en iyi 10 filmi";
const metin = "Leonardo DiCaprio, yıllar içinde sinemaya pek çok unutulmaz film katkısı yaptı ve etkileyici performanslarıyla izleyicileri büyülemeye devam ediyor. İşte bu makalede, leonardo dicaprio en iyi filmi ve leonardo dicaprio en güzel filmleri arasında yer alan başyapıtları keşfedeceksiniz.";
const bitis_metin = "Bu yazımızda Leonardo DiCaprio'nun en sevilen 10 filmini inceledik. Filmleri arasından hangisinin sizin favoriniz olduğunu aşağıda yorumlarda paylaşabilirsiniz. Gelecekteki projelerini heyecanla beklerken, bu başyapıtları yeniden izlemeyi unutmayın!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["leonardo","dicaprio","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T15:31:27+03:00";
const degistirilmeTarihi = "2024-08-09T15:31:27+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1343092",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-10",
    "name": "The Great Gatsby - Muhteşem Gatsby",
    "image": "/images/movies/Leonardo_DiCaprio_the_great_gatsby_-_muhtesem_gatsby.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "2 sa. 23 dk.",
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Carey Mulligan"
      ],
      "Yönetmen": "Baz Luhrmann",
      "imdb": "7.2/10",
      "Değerlendirme": "603904",
      "metacritic": "55"
    },
    "paragraf": "F. Scott Fitzgerald'ın ünlü romanından uyarlanan The Great Gatsby, Leonardo DiCaprio'yu büyüleyici Jay Gatsby karakteri ile izlediğimiz bir başyapıt. Muhteşem set tasarımları ve kostümleriyle dikkat çeken bu film, leonardo dicaprio en iyi filmleri arasında yer alır. DiCaprio'nun performansı dramatik derinliğiyle büyülerken, izleyiciyi 1920'lerin şaşalı dünyasına sürüklüyor."
  },
  {
    "num": "9",
    "title_id": "tt0959337",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-9",
    "name": "Revolutionary Road - Hayallerin Peşinde",
    "image": "/images/movies/Leonardo_DiCaprio_revolutionary_road_-_hayallerin_pesinde.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "1 sa. 59 dk.",
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Kate Winslet"
      ],
      "Yönetmen": "Sam Mendes",
      "imdb": "7.3/10",
      "Değerlendirme": "226508",
      "metacritic": "69"
    },
    "paragraf": "DiCaprio ve Winslet'in Titanic sonrası yeniden bir araya geldiği Revolutionary Road, bölüm leonardo dicaprio en güzel filmleri arasında dikkat çeker. Amerikan rüyasını sorgulayan bu yapıtta, hayallerin ve gerçeklerin çatışması etkileyici bir şekilde işleniyor. DiCaprio burada, hayal kırıklıkları ve umutsuzluk içinde bir adamı canlandırarak oyunculuk yeteneğini bir kez daha ispatlıyor."
  },
  {
    "num": "8",
    "title_id": "tt1130884",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-8",
    "name": "Shutter Island - Zindan Adası",
    "image": "/images/movies/Leonardo_DiCaprio_shutter_island_-_zindan_adasi.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "2 sa. 18 dk.",
      "Kategori": [
        "Gerilim",
        "Gizem"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Mark Ruffalo"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.2/10",
      "Değerlendirme": "1480843",
      "metacritic": "63"
    },
    "paragraf": "Martin Scorsese'nin yönettiği ve DiCaprio'nun başrolde olduğu Shutter Island, izleyicilere gerilim dolu bir hikaye sunuyor. Psikolojik unsurların derinlemesine işlendiği bu filmde, DiCaprio paranoyak ve gizem dolu atmosferi müthiş bir oyunculukla canlandırıyor. Zindan Adası, leonardo dicaprio en iyi filmleri 2024 listemiz içinde önemli bir yer tutuyor ve sinema izleyicisine unutulmaz bir deneyim yaşatıyor."
  },
  {
    "num": "7",
    "title_id": "tt0264464",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-7",
    "name": "Catch Me If You Can - Sıkıysa Yakala",
    "image": "/images/movies/Leonardo_DiCaprio_catch_me_if_you_can_-_sikiysa_yakala.jpg",
    "ozellikler": {
      "Yıl": "2002",
      "Süre": "2 sa. 21 dk.",
      "Kategori": [
        "Biyografi",
        "Suç",
        "Drama"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Tom Hanks"
      ],
      "Yönetmen": "Steven Spielberg",
      "imdb": "8.1/10",
      "Değerlendirme": "1113149",
      "metacritic": "75"
    },
    "paragraf": "Gerçek bir hikayeden esinlenen Catch Me If You Can, DiCaprio'nun genç ve hevesli dolandırıcı Frank Abagnale, Jr.'ı canlandırdığı eğlenceli bir yapım. Tom Hanks ile birlikte başrolü paylaşan aktörümüz, olağanüstü bir kedi-fare oyununu beyaz perdeye taşıyor. Film, leonardo dicaprio en sevilen filmleri arasında olup izleyicileri zekice senaryosuyla büyülüyor."
  },
  {
    "num": "6",
    "title_id": "tt0993846",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-6",
    "name": "The Wolf of Wall Street - Para Avcısı",
    "image": "/images/movies/Leonardo_DiCaprio_the_wolf_of_wall_street_-_para_avcisi.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "3 sa.",
      "Kategori": [
        "Biyografi",
        "Komedi",
        "Suç"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Jonah Hill"
      ],
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.2/10",
      "Değerlendirme": "1609642",
      "metacritic": "75"
    },
    "paragraf": "DiCaprio'nun muhteşem performansıyla parladığı The Wolf of Wall Street, gerçek bir hikayeye dayanarak izleyicilere çılgın bir dünyaya dalma fırsatı sunuyor. Film, DiCaprio'yu Jordan Belfort olarak karşımıza çıkarıyor. Wall Street'in çılgın temposunu ve lüks yaşamını cesur bir şekilde anlatıyor. Bu yapıt, leonardo dicaprio en iyi filmleri imdb yorumlarıyla da dikkat çeken bir başyapıt."
  },
  {
    "num": "5",
    "title_id": "tt1375666",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-5",
    "name": "Inception - Başlangıç",
    "image": "/images/movies/Leonardo_DiCaprio_inception_-_baslangic.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "2 sa. 28 dk.",
      "Kategori": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt"
      ],
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.8/10",
      "Değerlendirme": "2582573",
      "metacritic": "74"
    },
    "paragraf": "Christopher Nolan'ın yönettiği ve DiCaprio'nun başrolde olduğu Inception, bilim kurgu ve aksiyonu ustaca harmanlıyor. Özellikle rüya içinde rüya konseptiyle dikkat çeken bu film, izleyiciyi sürekli şaşırtan ve düşündüren yapısıyla öne çıkıyor. DiCaprio'nun oyunculuğu burada da etkileyici, Inception leonardo dicaprio en iyi filmleri arasında kesinlikle yer almalı."
  },
  {
    "num": "4",
    "title_id": "tt1853728",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-4",
    "name": "Django Unchained - Zincirsiz",
    "image": "/images/movies/Leonardo_DiCaprio_django_unchained_-_zincirsiz.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "2 sa. 45 dk.",
      "Kategori": [
        "Drama",
        "Western"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Jamie Foxx"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "8.5/10",
      "Değerlendirme": "1719028",
      "metacritic": "81"
    },
    "paragraf": "Tarantino'nun vahşi batı anlatısı Django Unchained, DiCaprio'nun karizmatik ama acımasız bir plantasyon sahibi olan Calvin Candie'yi canlandırdığı bir yapım. Film, heyecan ve gerilim dolu sahneleriyle öne çıkarken, DiCaprio'nun olağanüstü performansı göz dolduruyor. Django Unchained, leonardo dicaprio en güzel filmleri söz konusu olduğunda akla gelen ilk filmlerden biridir."
  },
  {
    "num": "3",
    "title_id": "tt7131622",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-3",
    "name": "Once Upon a Time in Hollywood - Bir Zamanlar... Hollywood'da",
    "image": "/images/movies/Leonardo_DiCaprio_once_upon_a_time_in_hollywood_-_bir_zamanlar..._hollywood'da.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "2 sa. 41 dk.",
      "Kategori": [
        "Comedy",
        "Drama"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Brad Pitt"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "7.6/10",
      "Değerlendirme": "864669",
      "metacritic": "84"
    },
    "paragraf": "Bu film, 1969 Los Angeles'ında geçiyor ve DiCaprio'yu kariyeri sona ermek üzere olan bir aktör rolünde izliyoruz. Once Upon a Time in Hollywood, Quentin Tarantino'nun imza tarzıyla dolu bu yapıt, DiCaprio'nun ne denli çok yönlü bir oyuncu olduğunu bir kez daha gözler önüne seriyor. leonardo dicaprio en sevilen filmleri arasında kesinlikle bir yeri hak ediyor."
  },
  {
    "num": "2",
    "title_id": "tt0120338",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-2",
    "name": "Titanic - Titanik",
    "image": "/images/movies/Leonardo_DiCaprio_titanic_-_titanik.jpg",
    "ozellikler": {
      "Yıl": "1997",
      "Süre": "3 sa. 14 dk.",
      "Kategori": [
        "Drama",
        "Romantic"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Kate Winslet"
      ],
      "Yönetmen": "James Cameron",
      "imdb": "7.9/10",
      "Değerlendirme": "1298880",
      "metacritic": "75"
    },
    "paragraf": "Titanic, gerçek bir trajediye dayanan epik bir aşk hikayesidir ve DiCaprio'nun Jack Dawson olarak dünya çapında tanınmasını sağladı. Film, büyük bir ticari başarı elde etti ve kültürel bir fenomen haline geldi. Titanic, leonardo dicaprio en iyi filmi dendiğinde akla gelen ilk yapımlar arasında yer alıyor ve DiCaprio'nun kariyerindeki önemli dönüm noktalarından biri."
  },
  {
    "num": "1",
    "title_id": "tt1663202",
    "url": "https://enonlar.com/leonardo-dicaprio-en-iyi-10-filmibolum-1",
    "name": "The Revenant - Diriliş",
    "image": "/images/movies/Leonardo_DiCaprio_the_revenant_-_dirilis.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "2 sa. 36 dk.",
      "Kategori": [
        "Action",
        "Adventure",
        "Drama"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Tom Hardy"
      ],
      "Yönetmen": "Alejandro González Iñárritu",
      "imdb": "8/10",
      "Değerlendirme": "884933",
      "metacritic": "76"
    },
    "paragraf": "The Revenant, DiCaprio'ya uzun zamandır beklediği Oscar'ı kazandıran film olmasıyla bilinir. Gerçek olaylardan esinlenen bu yapıt, oyuncunun insan iradesinin sınırlarını zorlayan bir performans sergilediği Leonardo DiCaprio filmleri listesi içinde zirvede yer alıyor. Film, doğanın zorluklarıyla başa çıkan Hugh Glass'ın hayatta kalma mücadelesini etkileyici bir şekilde anlatıyor."
  }

];

const ana_resim = "/images/ana_gorseller/leonardo-dicaprio-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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