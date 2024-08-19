
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ShiaLabeoufEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "shia-labeouf-en-iyi-10-filmi";
const baslik = "Shia LaBeouf en iyi 10 filmi";
const metin = "Shia LaBeouf, yetenekli bir aktör olarak farklı türlerde birçok başarılı yapımda rol aldı. Onun film kariyeri geniş bir yelpazeye yayılıyor ve biz de shia labeouf en iyi filmleri listesini sizler için derledik. İşte shia labeouf filmleri arasından öne çıkan 10 yapım.";
const bitis_metin = "Bu yazımızda, Shia LaBeouf'un kariyerinde öne çıkan 10 filmi inceledik. Her biri farklı türlerden olan bu filmler, aktörün yeteneklerini göstermekle kalmayıp, sinema dünyasına kattığı derinliği de anlamamıza yardımcı oluyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["shia","labeouf","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:22:31+03:00";
const degistirilmeTarihi = "2024-08-09T17:22:31+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1055369",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-10",
    "name": "Transformers: Revenge of the Fallen - Transformers: Yenilenlerin İntikamı",
    "image": "/images/movies/Shia_LaBeouf_transformers__revenge_of_the_fallen_-_transformers__yenilenlerin_intikami.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "2 sa. 30 dk.",
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "Megan Fox"
      ],
      "Yönetmen": "Michael Bay",
      "imdb": "6/10",
      "Değerlendirme": "431818",
      "metacritic": "35"
    },
    "paragraf": "Transformers: Yenilenlerin İntikamı, Shia LaBeouf'un popülerliği artıran filmlerden biri. Michael Bay'in yönettiği bu aksiyon dolu filmde Sam Witwicky olarak dönüşen makinelerle unutulmaz bir maceraya atılıyor. shia labeouf en iyi filmleri arasında da güçlü bir yere sahip."
  },
  {
    "num": "9",
    "title_id": "tt1059786",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-9",
    "name": "Eagle Eye - Kartal Göz",
    "image": "/images/movies/Shia_LaBeouf_eagle_eye_-_kartal_goz.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "2 sa. 6 dk.",
      "Kategori": [
        "Gerilim",
        "Aksiyon"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "Michelle Monaghan"
      ],
      "Yönetmen": "D.J. Caruso",
      "imdb": "6.6/10",
      "Değerlendirme": "196073",
      "metacritic": "43"
    },
    "paragraf": "Gerilim dolu Eagle Eye, teknolojinin tehlikeleri üzerine kurgulanmış bir hikaye. Shia LaBeouf, sıradan bir vatandaşken kendisini hızla gelişen bir komplonun içinde buluyor. Bu film, shia labeouf filmleri arasında gerilim öğeleriyle öne çıkıyor."
  },
  {
    "num": "8",
    "title_id": "tt1196948",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-8",
    "name": "Charlie Countryman - Beklenmedik Macera",
    "image": "/images/movies/Shia_LaBeouf_charlie_countryman_-_beklenmedik_macera.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "1 sa. 48 dk.",
      "Kategori": [
        "Romantik",
        "Aksiyon"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "Evan Rachel Wood"
      ],
      "Yönetmen": "Fredrik Bond",
      "imdb": "6.3/10",
      "Değerlendirme": "29974",
      "metacritic": "31"
    },
    "paragraf": "Charlie Countryman macera ve romantizmi harmanlayan bir yapım. Shia LaBeouf, Paris'te tesadüfen aşık olduğu bir kadının peşine düşerken tehlikeli durumlarla yüzleşiyor. Film, aktörün farklı bir performansını gözler önüne seriyor."
  },
  {
    "num": "7",
    "title_id": "tt4364194",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-7",
    "name": "The Peanut Butter Falcon - Hayallerin Peşinde",
    "image": "/images/movies/Shia_LaBeouf_the_peanut_butter_falcon_-_hayallerin_pesinde.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "1 sa. 37 dk.",
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "Zack Gottsagen"
      ],
      "Yönetmen": "Tyler Nilson, Michael Schwartz",
      "imdb": "7.6/10",
      "Değerlendirme": "107471",
      "metacritic": "70"
    },
    "paragraf": "Hayallerin Peşinde, insanın kalbine dokunan sıcacık bir hikaye. Shia LaBeouf ve Zack Gottsagen, beklenmedik bir dostluk kurarak hayallerini gerçekleştirmek için yola çıkıyorlar. Film, shia labeouf en iyi filmleri arasında özel bir yer tutuyor."
  },
  {
    "num": "6",
    "title_id": "tt0486822",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-6",
    "name": "Disturbia - Şüphe",
    "image": "/images/movies/Shia_LaBeouf_disturbia_-_suphe.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "1 sa. 44 dk.",
      "Kategori": [
        "Gerilim"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "David Morse"
      ],
      "Yönetmen": "D.J. Caruso",
      "imdb": "6.8/10",
      "Değerlendirme": "258270",
      "metacritic": "62"
    },
    "paragraf": "Disturbia, Alfred Hitchcock'un Rear Window filmine saygı duruşu niteliğindedir. Shia LaBeouf'un içsel çatışması ve karşı komşu hakkındaki şüpheleri izleyiciyi etkiliyor. Shia labeouf filmleri arasında dikkat çeken bir gerilim."
  },
  {
    "num": "5",
    "title_id": "tt0473488",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-5",
    "name": "A Guide to Recognizing Your Saints - Mahalledeki Aziz",
    "image": "/images/movies/Shia_LaBeouf_a_guide_to_recognizing_your_saints_-_mahalledeki_aziz.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "1 sa. 40 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "Robert Downey Jr."
      ],
      "Yönetmen": "Dito Montiel",
      "imdb": "6.9/10",
      "Değerlendirme": "26998",
      "metacritic": "67"
    },
    "paragraf": "Mahalledeki Aziz, Shia LaBeouf'un genç yaşlarda gösterdiği etkileyici bir performans. New York'un zorlu sokaklarında büyüyen bir gencin öyküsünü anlatıyor. Film, hem oyunculuk hem de hikaye anlamında güçlü bir yapıma sahip."
  },
  {
    "num": "4",
    "title_id": "tt2713180",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-4",
    "name": "Fury",
    "image": "/images/movies/Shia_LaBeouf_fury.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "2 sa. 14 dk.",
      "Kategori": [
        "Savaş",
        "Dram"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "Brad Pitt"
      ],
      "Yönetmen": "David Ayer",
      "imdb": "7.6/10",
      "Değerlendirme": "555722",
      "metacritic": "64"
    },
    "paragraf": "Savaşın acımasız yüzünü gösteren Fury, Şerii LaBeouf'un derin bir karakter sunumu yaptığı bir yapım. II. Dünya Savaşı'nda bir tank mürettebatının hikayesini anlatan film, savaş filmleri arasında dikkat çekiyor. shia labeouf en iyi filmleri arasında yer alıyor."
  },
  {
    "num": "3",
    "title_id": "tt8151874",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-3",
    "name": "Honey Boy - Bal Çocuk",
    "image": "/images/movies/Shia_LaBeouf_honey_boy_-_bal_cocuk.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "1 sa. 34 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "Noah Jupe"
      ],
      "Yönetmen": "Alma Har'el",
      "imdb": "7.2/10",
      "Değerlendirme": "41258",
      "metacritic": "73"
    },
    "paragraf": "Honey Boy, Shia LaBeouf'un kendi yaşamından esinlenerek kaleme aldığı çarpıcı bir hikaye. Babasıyla ilişkisini dramatik bir şekilde ele alıyor. Bu film, shia labeouf filmleri arasında kişisel öğeleriyle ayırt ediliyor."
  },
  {
    "num": "2",
    "title_id": "tt3721936",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-2",
    "name": "American Honey - Amerikan Balı",
    "image": "/images/movies/Shia_LaBeouf_american_honey_-_amerikan_bali.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "2 sa. 43 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "Sasha Lane"
      ],
      "Yönetmen": "Andrea Arnold",
      "imdb": "7/10",
      "Değerlendirme": "47047",
      "metacritic": "80"
    },
    "paragraf": "Road trip ve özgürlük temalı American Honey, Shia LaBeouf'un farklı bir karakterle karşımıza çıktığı etkileyici bir dram. Amerika'yı gezerken büyükanal deneyimler yaşayan genç bir grubun hikayesini anlatıyor. Film, modern anlatımı ile dikkat çekiyor."
  },
  {
    "num": "1",
    "title_id": "tt1937390",
    "url": "https://enonlar.com/shia-labeouf-en-iyi-10-filmi#bolum-1",
    "name": "Nymphomaniac - İtiraf: Bölüm I",
    "image": "/images/movies/Shia_LaBeouf_nymphomaniac_-_itiraf__bolum_i.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "2 sa. 25 dk.",
      "Kategori": [
        "Dram",
        "Erotik"
      ],
      "Oyuncular": [
        "Shia LaBeouf",
        "Charlotte Gainsbourg"
      ],
      "Yönetmen": "Lars von Trier",
      "imdb": "6.9/10",
      "Değerlendirme": "132527",
      "metacritic": "64"
    },
    "paragraf": "Nymphomaniac, provokatif bir anlatımla dikkat çeken bir yapım. Cinsel bağımlılığı olan bir kadının hayat hikayesini anlatıyor. Shia LaBeouf'u farklı bir rolde izlediğimiz bu film, dramatik ve cesur sahneleriyle tanınıyor. Shia LaBeouf'un bu filmdeki performansı onu mahkeme salonlarına bile taşımış. Hakim karşısında bunun bir rol olduğunu savunmak zorunda kalmış. Bu yapı, shia labeouf en iyi filmleri arasında çarpıcılığıyla öne çıkıyor."
  }

];

const ana_resim = "/images/ana_gorseller/shia-labeouf-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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