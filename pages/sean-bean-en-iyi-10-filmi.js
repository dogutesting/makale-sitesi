
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function SeanBeanEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "sean-bean-en-iyi-10-filmi";
const baslik = "Sean Bean en iyi 10 filmi";
const metin = "Sean Bean, benzersiz oyunculuk yeteneğiyle tanınan bir aktör ve birçok unutulmaz filmde rol almıştır. Sean Bean imdb sıralamalarına göre oyunlarıyla pek çok farklı karaktere hayat veren bu yetenekli oyuncunun, kariyerinde yer alan en iyi 10 filmi sizin için listeledik.";
const bitis_metin = "Bu listede, Sean Bean'in kariyerine damga vurmuş ve hayranlarının kalbine taht kurmuş en iyi filmleri derledik. Sean Bean'in birbirinden farklı karakterlere hayat verdiği, etkileyici performanslarıyla dolu bu filmler mutlaka izlenmeli.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["sean","bean","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:55:06+03:00";
const degistirilmeTarihi = "2024-08-16T16:55:06+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-10",
    "name": "The Hitcher - Otoban Katili",
    "image": "/images/movies/Sean_Bean_the_hitcher_-_otoban_katili.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Lee Van Cleef",
        "Sophia Bush"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 24 dk.",
      "Yönetmen": "Dave Meyers",
      "imdb": "5.6/10",
      "Değerlendirme": "45763",
      "metacritic": "28"
    },
    "paragraf": "The Hitcher, Sean Bean filmleri arasında gerilim severler için ideal bir seçimdir. Filmdeki etkileyici performansıyla Sean Bean, bir otostopçunun korkutucu yolculuğunu unutulmaz kılıyor. Esas konusu ve Sean Bean'in etkileyici oyunu sayesinde film, Sean Bean oynadığı filmler arasında özel bir yere sahip."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-9",
    "name": "National Treasure - Büyük Hazine",
    "image": "/images/movies/Sean_Bean_national_treasure_-_buyuk_hazine.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Nicolas Cage",
        "Diane Kruger"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "2004",
      "Süre": "2 sa. 11 dk.",
      "Yönetmen": "Jon Turteltaub",
      "imdb": "6.9/10",
      "Değerlendirme": "358962",
      "metacritic": "40"
    },
    "paragraf": "Büyük Hazine, Sean Bean en iyi filmlerinden biri olarak dikkat çeker. Sean Bean, bu aksiyon dolu macera filminde zengin bir hazine avcısını canlandırırken, film boyu süregelen gerilim izleyiciyi büyülüyor. Sean Bean imdb puanlarında etkileyici bir yere sahiptir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-8",
    "name": "GoldenEye - Altın Göz",
    "image": "/images/movies/Sean_Bean_goldeneye_-_altin_goz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Pierce Brosnan"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "1995",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Martin Campbell",
      "imdb": "7.2/10",
      "Değerlendirme": "272087",
      "metacritic": "65"
    },
    "paragraf": "Altın Göz, Sean Bean en iyi filmi sıralamasında, James Bond film serisinin unutulmaz eserlerinden biridir. Bond'un karşısında güçlü bir rakip olarak Sean Bean'in karakteri, filmin aksiyon dozunu bir üst seviyeye taşıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-7",
    "name": "Ronin",
    "image": "/images/movies/Sean_Bean_ronin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Robert De Niro",
        "Jean Reno"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "1998",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "John Frankenheimer",
      "imdb": "7.2/10",
      "Değerlendirme": "197041",
      "metacritic": "67"
    },
    "paragraf": "Ronin, özellikle Sean Bean oynadığı filmler arasında aksiyon ve gerilimi harmanlayan bir hikaye sunar. Uluslararası casusların karmaşık dünyasında yer alarak, Sean Bean'in rolü filmin heyecan dolu sahnelerine renk katmaktadır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-6",
    "name": "Patriot Games - Tehlikeli Oyunlar",
    "image": "/images/movies/Sean_Bean_patriot_games_-_tehlikeli_oyunlar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Harrison Ford",
        "Anne Archer"
      ],
      "Kategori": [
        "Gerilim",
        "Aksiyon"
      ],
      "Yıl": "1992",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Phillip Noyce",
      "imdb": "6.8/10",
      "Değerlendirme": "121742",
      "metacritic": "64"
    },
    "paragraf": "Tehlikeli Oyunlar, Sean Bean en iyi filmleri arasında dikkat çekerken, uluslararası entrikalarla dolu bir kurguya sahiptir. Harrison Ford ile birlikte rol alan Sean Bean'in, bu gerilim dolu hikayede gösterdiği performans etkileyicidir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-5",
    "name": "Equilibrium - İsyan",
    "image": "/images/movies/Sean_Bean_equilibrium_-_isyan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Christian Bale",
        "Dominic Purcell"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Kurt Wimmer",
      "imdb": "7.3/10",
      "Değerlendirme": "349357",
      "metacritic": "33"
    },
    "paragraf": "İsyan, distopik bir gelecekte geçen ve Sean Bean'in rol aldığı etkileyici bir film. Film, Sean Bean imdb sıralamalarında hatırı sayılır bir yere sahip olup, Sean Bean'in başarılı oyunculuk performansıyla da dikkat çeker."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-4",
    "name": "Jupiter Ascending - Jüpiter Yükseliyor",
    "image": "/images/movies/Sean_Bean_jupiter_ascending_-_jupiter_yukseliyor.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Channing Tatum",
        "Mila Kunis"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "Lana Wachowski",
      "imdb": "5.3/10",
      "Değerlendirme": "195587",
      "metacritic": "40"
    },
    "paragraf": "Jüpiter Yükseliyor, Sean Bean'in bilim kurgu tutkunları için vazgeçilmez bir diğer filmidir. Ekibiyle birlikte büyük bir maceraya atılan Sean Bean, bu filmde de kendini kanıtlamıştır. Sean Bean filmleri arasında özel bir yere sahip."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-3",
    "name": "Troy - Truva",
    "image": "/images/movies/Sean_Bean_troy_-_truva.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Brad Pitt",
        "Julian Glover",
        "Brian Cox"
      ],
      "Kategori": [
        "Savaş",
        "Tarih"
      ],
      "Yıl": "2004",
      "Süre": "2 sa. 43 dk.",
      "Yönetmen": "Wolfgang Petersen",
      "imdb": "7.3/10",
      "Değerlendirme": "576812",
      "metacritic": "56"
    },
    "paragraf": "Truva, tarihi epik türünde Sean Bean en iyi filmi olarak ön plana çıkıyor. Sean Bean, bu destansı savaş filminde Odysseus karakterine hayat vererek olağanüstü bir performans sergilemiştir. Sean Bean oynadığı filmler arasında kült bir yere sahiptir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-2",
    "name": "The Fellowship of the Ring - Yüzüklerin Efendisi: Yüzük Kardeşliği",
    "image": "/images/movies/Sean_Bean_the_fellowship_of_the_ring_-_yuzuklerin_efendisi__yuzuk_kardesligi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Elijah Wood",
        "Alan Howard",
        "Noel Appleby"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 58 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "8.9/10",
      "Değerlendirme": "2032646",
      "metacritic": "92"
    },
    "paragraf": "Yüzüklerin Efendisi: Yüzük Kardeşliği, belki de Sean Bean en iyi filmleri arasında en unutulmazı. Boromir olarak Sean Bean, epik bir yolculuğun parçası olup, birçok hayran için en etkileyici rollerinden birini canlandırmıştır. Sean Bean imdb puanlamasında da önemli bir yerdedir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/sean-bean-en-iyi-10-filmi#bolum-1",
    "name": "The Martian - Marslı",
    "image": "/images/movies/Sean_Bean_the_martian_-_marsli.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Bean",
        "Matt Damon",
        "Jessica Chastain"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Dram"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 24 dk.",
      "Yönetmen": "Ridley Scott",
      "imdb": "8/10",
      "Değerlendirme": "937322",
      "metacritic": "80"
    },
    "paragraf": "Marslı, Sean Bean en iyi filmi olarak bilim kurgu sevenler için önemli bir başyapıttır. Mars'ta mahsur kalan bir astronotun kurtarılma çabasını konu eden filmde, Sean Bean'in performansı filmdeki bilimsel gerçeklik kadar etkileyici olup, Sean Bean imdb sıralamalarında üst sıralarda yer almasını sağlamıştır."
  }

];

const ana_resim = "/images/ana_gorseller/sean-bean-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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