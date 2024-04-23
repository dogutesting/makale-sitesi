
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ChristianBaleEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "christian-bale-en-iyi-10-filmi";
const baslik = "Christian Bale'in En İyi 10 Filmi";
const metin = "Christian Bale, sinema dünyasının en yetenekli aktörlerinden biri olarak kabul edilir. Birbirinden çeşitli karakterleri canlandırarak gösterdiği üstün performanslarla, her zaman hayranlarını büyülemeyi başarmıştır. Christian Bale filmleri, genellikle derin karakter çalışmaları ve yoğun duygusal anlatımlar içerir. Bu yazımızda, Christian Bale en iyi filmleri arasından öne çıkan 10 yapıtını sizleri için sıraladık. Christian Bale filmleri çok ilgi görüyor. İşte, şüphesiz Christian Bale en iyi filmi olarak anılacak olan yapıtlarıyla dolu liste.";
const bitis_metin = "Bu makalemizde, Christian Bale'in unutulmaz sinema serüveninden en etkileyici 10 filmi sıraladık. Umarız bu listedeki filmler, sizlere de Bale'in sanatsal yelpazesinin genişliğini ve derinliğini göstermiştir. Bale'in filmlerini izlemek, onun her bir karaktere nasıl hayat verdiğini görmek, izleyicilere gerçek bir görsel ve duygusal ziyafet sunuyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["christian","bale","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-22T17:14:11+03:00";
const degistirilmeTarihi = "2024-04-22T17:14:11+03:00";
const addDate = "22.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-10",
    "name": "Batman Begins",
    "image": "/images/movies/christian_bale_batman_begin.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Christian Bale",
        "Michael Caine",
        "Liam Neeson"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 20 dk.",
      "Yıl": "2005",
      "imdb": "8.2/10",
      "metascore": "70",
      "Değerlendirme": "1600000"
    },
    "paragraf": "Christian Bale filmleri arasında, süper kahraman janrının en ikonik yüzlerinden biri olan Batman Begins, Bale'in kariyerinde bir dönüm noktası olmuştur. Bu filmdeki performansı, hem eleştirmenlerden hem de izleyicilerden büyük övgüler alarak, Christian Bale en iyi filmleri listesine giriş yapmayı başarıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-9",
    "name": "Equilibrium",
    "image": "/images/movies/christian_bale_equilibrium.jpg",
    "ozellikler": {
      "Yönetmen": "Kurt Wimmer",
      "Oyuncular": [
        "Christian Bale",
        "Taye Diggs",
        "Emily Watson"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Süre": "1 sa. 47 dk.",
      "Yıl": "2002",
      "imdb": "7.4/10",
      "metascore": "33",
      "Değerlendirme": "347000"
    },
    "paragraf": "Equilibrium, Christian Bale filmleri en iyi listesinde ele alındığında, distopik bir geleceği ve insanın duygularla olan savaşını başarıyla resmederek öne çıkar. Bale'in bu filmdeki katmanlı performansı, genellikle Christian Bale en iyi filmi tartışmalarında anılmaktadır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-8",
    "name": "Public Enemies",
    "image": "/images/movies/christian_bale_public_enemies.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Mann",
      "Oyuncular": [
        "Christian Bale",
        "Johnny Depp",
        "Marion Cotillard"
      ],
      "Kategori": [
        "Biyografi",
        "Suç"
      ],
      "Süre": "2 sa. 20 dk.",
      "Yıl": "2009",
      "imdb": "7.0/10",
      "metascore": "70",
      "Değerlendirme": "318000"
    },
    "paragraf": "Public Enemies, tarihi bir figür olan John Dillinger'ı kovalayan FBI ajanı Melvin Purvis olarak Bale'i görüyoruz. Christian Bale'in üstlendiği bu gerçek yaşam karakteri, onun filmografisindeki en güçlü performanslardan birini sergilemesine olanak tanıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-7",
    "name": "The Fighter",
    "image": "/images/movies/christian_bale_the_fighter.jpg",
    "ozellikler": {
      "Yönetmen": "David O. Russell",
      "Oyuncular": [
        "Christian Bale",
        "Mark Wahlberg",
        "Amy Adams"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Süre": "1 sa. 56 dk.",
      "Yıl": "2010",
      "imdb": "7.8/10",
      "metascore": "79",
      "Değerlendirme": "389000"
    },
    "paragraf": "The Fighter, bir boksörün yükselişini ve aile içi çatışmalarını ele alırken, Christian Bale'in dönüştürücü ve Oscar ödüllü performansıyla dikkat çeker. Bu yapım, Bale'in en akılda kalıcı rollerinden biri olarak sayılır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-6",
    "name": "3:10 to Yuma",
    "image": "/images/movies/christian_bale_yuma.jpg",
    "ozellikler": {
      "Yönetmen": "James Mangold",
      "Oyuncular": [
        "Christian Bale",
        "Russell Crowe",
        "Ben Foster"
      ],
      "Kategori": [
        "Vahşi Batı"
      ],
      "Süre": "2 sa. 2 dk.",
      "Yıl": "2007",
      "imdb": "7.7/10",
      "metascore": "76",
      "Değerlendirme": "331000"
    },
    "paragraf": "3:10 to Yuma, Vahşi Batı'ya geri dönerken, bir çiftçi ve kaçak bir suçlu arasındaki karmaşık ilişkiyi sunar. Bale, bu filmde gösterdiği muazzam performansı ile Western tarzına yeni bir soluk getiriyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-5",
    "name": "American Psycho",
    "image": "/images/movies/christian_bale_american_psycho.jpg",
    "ozellikler": {
      "Yönetmen": "Mary Harron",
      "Oyuncular": [
        "Christian Bale",
        "Reese Witherspoon",
        "Jared Leto"
      ],
      "Kategori": [
        "Dram",
        "Korku"
      ],
      "Süre": "1 sa. 42 dk.",
      "Yıl": "2000",
      "imdb": "7.6/10",
      "metascore": "64",
      "Değerlendirme": "715000"
    },
    "paragraf": "American Psycho'da Christian Bale, üst düzey bir yatırım bankacısını ve gizli bir seri katili canlandırarak unutulmaz bir rolü üstlenir. Bu film, tüyler ürpertici atmosferi ve Bale'in kusursuz performansı ile kesinlikle izlenmesi gerekenler arasında."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-4",
    "name": "Batman: The Dark Knight Rises",
    "image": "/images/movies/christian_bale_the_dark_knight_rises.jpg",
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
      "Süre": "2 sa. 45 dk.",
      "Yıl": "2012",
      "imdb": "8.4/10",
      "metascore": "78",
      "Değerlendirme": "347000"
    },
    "paragraf": "Batman: The Dark Knight Rises, Bale'in Batman olarak son performansını sergilediği epik bir final. Film, görsel bir şölen sunarken, Bale'in karakterin derinliklerini keşfetmesine olanak tanıyor. Bu nedenle, Christian Bale en iyi filmleri listesinde yüksek bir yere sahiptir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-3",
    "name": "Batman: The Dark Knight",
    "image": "/images/movies/christian_bale_the_dark_knight.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 32 dk.",
      "Yıl": "2008",
      "imdb": "9.0/10",
      "metascore": "84",
      "Değerlendirme": "1800000"
    },
    "paragraf": "Batman: The Dark Knight, modern süper kahraman filmlerinin yönünü değiştiren bir başyapıt olarak kabul edilir. Bale'in inanılmaz performansı ve Heath Ledger'in Joker rolü, bu yapıyı unutulmaz kılan unsurlardır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-2",
    "name": "The Prestige",
    "image": "/images/movies/christian_bale_the_prestige.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Christian Bale",
        "Hugh Jackman",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Dram",
        "Mystery"
      ],
      "Süre": "2 sa. 10 dk.",
      "Yıl": "2006",
      "imdb": "8.5/10",
      "metascore": "66",
      "Değerlendirme": "1400000"
    },
    "paragraf": "The Prestige, iki rakip sihirbazın öyküsünü anlatırken, Bale'in katmanlı ve gizemli karakteri izleyicileri büyülemeye devam ediyor. Film, zekice kurgusu ve güçlü oyuncu kadrosuyla, Bale'in en etkileyici performanslarından birini sunar."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/christian-bale-en-iyi-10-filmi#bolum-1",
    "name": "The Machinist",
    "image": "/images/movies/christian_bale_the_machinist.jpg",
    "ozellikler": {
      "Yönetmen": "Brad Anderson",
      "Oyuncular": [
        "Christian Bale",
        "Jennifer Jason Leigh",
        "Aitana Sánchez-Gijón"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Süre": "1 sa. 41 dk.",
      "Yıl": "2004",
      "imdb": "7.7/10",
      "metascore": "61",
      "Değerlendirme": "415000"
    },
    "paragraf": "The Machinist, Bale'in kariyerindeki en zorlu rollerden biridir; drastik kilo kaybıyla fiziksel dönüşüm yaşamış ve karakterin psikolojik derinliğine inmiştir. Bu film, Bale'in oyunculuk yeteneğinin ve bağlılığının sınırlarını zorlayarak, onun en iyi performansını sergilediği yapıtlar arasında yer alır."
  }
];

const ana_resim = "/images/ana_gorseller/christian_bale_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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