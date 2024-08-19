
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RobertDeNiroEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "robert-de-niro-en-iyi-10-filmi";
const baslik = "Robert De Niro'nun En İyi 10 Filmi";
const metin = "Robert De Niro, sinema dünyasının en ikonik figürlerinden biri olup, birçok unutulmaz filmde rol almıştır. İşte Robert De Niro en iyi filmleri listesi!";
const bitis_metin = "İşte karşınızda Robert De Niro'nun en unutulmaz filmleri. Bu yazımızda Robert De Niro filmleri içinde en etkileyicilerinin bir listesini sunmaya çalıştık. Umarız keyif alarak izlersiniz!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["robert","de","niro'nun","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T19:32:24+03:00";
const degistirilmeTarihi = "2024-05-25T19:32:24+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-10",
    "name": "The Godfather Part II - Baba 2",
    "image": "/images/movies/robert_de_niro_the_godfather_part_ii_-_baba_2.jpg",
    "ozellikler": {
      "Yönetmen": "Francis Ford Coppola",
      "Oyuncular": [
        "Al Pacino",
        "Robert De Niro"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "3 sa. 22 dk.",
      "Yıl": "1974",
      "imdb": "9.0/10",
      "Değerlendirme": "1400000",
      "metascore": "90"
    },
    "paragraf": "Robert De Niro izlenmesi gereken filmleri arasında yer alan Baba 2, sinema tarihindeki en iyi devam filmlerinden biridir. De Niro'nun performansı, ona bir Oscar kazandırmış ve filmin efsane statusüne katkıda bulunmuştur."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-9",
    "name": "Goodfellas - Sıkı Dostlar",
    "image": "/images/movies/robert_de_niro_goodfellas_-_siki_dostlar.jpg",
    "ozellikler": {
      "Yönetmen": "Martin Scorsese",
      "Oyuncular": [
        "Robert De Niro",
        "Ray Liotta",
        "Joe Pesci"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 25 dk.",
      "Yıl": "1990",
      "imdb": "8.7/10",
      "Değerlendirme": "1300000",
      "metascore": "92"
    },
    "paragraf": "Goodfellas olarak da bilinen Sıkı Dostlar, Robert De Niro'nun parlamasını sağlayan önemli filmlerden. 1990 yapımı bu film, gerçek bir hikayeden uyarlanmış ve geniş beğeni toplamıştır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-8",
    "name": "Raging Bull - Kızgın Boğa",
    "image": "/images/movies/robert_de_niro_raging_bull_-_kizgin_boga.jpg",
    "ozellikler": {
      "Yönetmen": "Martin Scorsese",
      "Oyuncular": [
        "Robert De Niro"
      ],
      "Kategori": [
        "Drama",
        "Spor"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "1980",
      "imdb": "8.1/10",
      "Değerlendirme": "381000",
      "metascore": "90"
    },
    "paragraf": "Kızgın Boğa, boksör Jake LaMotta’nın hayatını anlatan ve Robert De Niro'nun unutulmaz performans sergilediği bir film. Robert De Niro'nun en iyi filmi olarak değerlendirilen bu eser, ona 'En İyi Erkek Oyuncu' Oscar'ını kazandırdı."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-7",
    "name": "Taxi Driver - Taksi Şoförü",
    "image": "/images/movies/robert_de_niro_taxi_driver_-_taksi_soforu.jpg",
    "ozellikler": {
      "Yönetmen": "Martin Scorsese",
      "Oyuncular": [
        "Robert De Niro"
      ],
      "Kategori": [
        "Drama",
        "Suç"
      ],
      "Süre": "1 sa. 54 dk.",
      "Yıl": "1976",
      "imdb": "8.2/10",
      "Değerlendirme": "924000",
      "metascore": "94"
    },
    "paragraf": "Taksi Şoförü, Robert De Niro filmleri arasında karanlık ve etkileyici bir başyapıt olarak öne çıkıyor. De Niro'nun Travis Bickle olarak sergilediği performans, sinema tarihine geçmiştir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-6",
    "name": "The Deer Hunter - Geyik Avcısı",
    "image": "/images/movies/robert_de_niro_the_deer_hunter_-_geyik_avcisi.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Cimino",
      "Oyuncular": [
        "Robert De Niro",
        "Christopher Walken"
      ],
      "Kategori": [
        "Drama",
        "Savaş"
      ],
      "Süre": "3 sa. 4 dk.",
      "Yıl": "1978",
      "imdb": "8.1/10",
      "Değerlendirme": "363000",
      "metascore": "90"
    },
    "paragraf": "Geyik Avcısı, Vietnam Savaşı'nı ve sonrasını anlatan derin bir dram. Robert De Niro'nun başrollerde olduğu bu film, izleyiciyi derinden etkileyen sahneleriyle ünlüdür."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-5",
    "name": "Casino - Kumarhane",
    "image": "/images/movies/robert_de_niro_casino_-_kumarhane.jpg",
    "ozellikler": {
      "Yönetmen": "Martin Scorsese",
      "Oyuncular": [
        "Robert De Niro",
        "Sharon Stone",
        "Joe Pesci"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 58 dk.",
      "Yıl": "1995",
      "imdb": "8.2/10",
      "Değerlendirme": "566000",
      "metascore": "73"
    },
    "paragraf": "Casino, Las Vegas'ın karanlık yüzünü gözler önüne seren ve Robert De Niro'nun muazzam bir oyunculuk sergilediği bir başka film. Kumarhane dünyasının derinliklerine inen bu eser, gerilim dolu sahneleri ile dikkat çeker."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-4",
    "name": "Heat - Büyük Hesaplaşma",
    "image": "/images/movies/robert_de_niro_heat_-_buyuk_hesaplasma.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Mann",
      "Oyuncular": [
        "Robert De Niro",
        "Al Pacino"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 50 dk.",
      "Yıl": "1995",
      "imdb": "8.3/10",
      "Değerlendirme": "722000",
      "metascore": "76"
    },
    "paragraf": "Büyük Hesaplaşma, Robert De Niro ve Al Pacino gibi iki sinema devini karşı karşıya getiren ve büyük bir çekişmeyi sahneleyen bir filmdir. Bu yapımda De Niro, bir hırsızı canlandırırken, Pacino bir detektifi oynamaktadır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-3",
    "name": "The Untouchables - Dokunulmazlar",
    "image": "/images/movies/robert_de_niro_the_untouchables_-_dokunulmazlar.jpg",
    "ozellikler": {
      "Yönetmen": "Brian De Palma",
      "Oyuncular": [
        "Kevin Costner",
        "Sean Connery",
        "Robert De Niro"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "1 sa. 59 dk.",
      "Yıl": "1987",
      "imdb": "7.8/10",
      "Değerlendirme": "332000",
      "metascore": "79"
    },
    "paragraf": "Dokunulmazlar, Al Capone'a karşı mücadele eden bir grup dedektifin hikayesini anlatıyor. Robert De Niro'nun Capone rolü, onun karakter oyunculuğunu gösteren mükemmel bir örnek."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-2",
    "name": "Ronin",
    "image": "/images/movies/robert_de_niro_ronin.jpg",
    "ozellikler": {
      "Yönetmen": "John Frankenheimer",
      "Oyuncular": [
        "Robert De Niro",
        "Jean Reno"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 2 dk.",
      "Yıl": "1998",
      "imdb": "7.2/10",
      "Değerlendirme": "196000",
      "metascore": "67"
    },
    "paragraf": "Ronin, muhteşem otomobil kovalamacaları ile ünlü bir aksiyon filmidir. De Niro'nun etkileyici performansı, bu heyecanlı yapımın kalitesini pekiştirir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/robert-de-niro-en-iyi-10-filmi#bolum-1",
    "name": "The Intern - Stajyer",
    "image": "/images/movies/robert_de_niro_the_intern_-_stajyer.jpg",
    "ozellikler": {
      "Yönetmen": "Nancy Meyers",
      "Oyuncular": [
        "Robert De Niro",
        "Anne Hathaway"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Süre": "2 sa. 1 dk.",
      "Yıl": "2015",
      "imdb": "7.1/10",
      "Değerlendirme": "275000",
      "metascore": "51"
    },
    "paragraf": "Stajyer, Robert De Niro'nun film kariyerindeki farklı bir yönünü gösteriyor. Bu tatlı komedi filmi, tüm yaş gruplarından izleyiciler tarafından sevilmiş ve De Niro'nun çok yönlü bir aktör olduğunu kanıtlamıştır."
  }

];

const ana_resim = "/images/ana_gorseller/robert_de_niro_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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