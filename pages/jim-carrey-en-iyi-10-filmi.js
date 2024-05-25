
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JimCarreyEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jim-carrey-en-iyi-10-filmi";
const baslik = "Jim Carrey en iyi 10 filmi";
const metin = "Jim Carrey'nin imzasını taşıyan ve izlenmesi gereken filmleri bu yazımızda listeledik. Jim Carrey en iyi filmleri arasından seçtiğimiz bu eserler, onun oyunculuk yeteneğini en iyi yansıtan yapıtlardır. Jim Carrey filmleri her zaman eğlenceli ve düşündürücüdür.";
const bitis_metin = "Bu yazımızda Jim Carrey'nin en iyi filmlerini sizler için derledik. Her biri, farklı yönleriyle bu ünlü oyuncunun kariyerinin en parlak yıldızları olarak öne çıkıyor. Umarız keyifle izlersiniz!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jim","carrey","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T19:12:52+03:00";
const degistirilmeTarihi = "2024-05-25T19:12:52+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-10",
    "name": "Ace Ventura: Pet Detective - Ace Ventura: Evcil Hayvan Dedektifi",
    "image": "/images/movies/jim_carrey_ace_ventura_pet_detective_-_ace_ventura_evcil_hayvan_dedektifi.jpg",
    "ozellikler": {
      "Yönetmen": "Tom Shadyac",
      "Oyuncular": [
        "Jim Carrey"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Süre": "1 sa. 26 dk.",
      "Yıl": "1994",
      "imdb": "6.9/10",
      "Değerlendirme": "326000",
      "metascore": "37"
    },
    "paragraf": "Evcil Hayvan Dedektifi, Jim Carrey'nin eğlenceli karakterlerinden biridir. Listemizin son sırasında olup, Jim Carrey izlenmesi gereken filmleri arasında ilk akla gelenidir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-9",
    "name": "Eternal Sunshine of the Spotless Mind - Sil Baştan",
    "image": "/images/movies/jim_carrey_eternal_sunshine_of_the_spotless_mind_-_sil_bastan.jpg",
    "ozellikler": {
      "Yönetmen": "Michel Gondry",
      "Oyuncular": [
        "Jim Carrey",
        "Kate Winslet"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Süre": "1 sa. 48 dk.",
      "Yıl": "2004",
      "imdb": "8.3/10",
      "Değerlendirme": "1100000",
      "metascore": "89"
    },
    "paragraf": "Sil Baştan, derin duygusal içeriği ve sıradışı senaryosuyla Jim Carrey en iyi filmi adaylarından biridir. Bu dramatik eser, izleyiciye duygusal bir yolculuk sunar ve Jim Carrey'nin aktörlük yeteneklerini gözler önüne serer."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-8",
    "name": "The Truman Show - Truman Show",
    "image": "/images/movies/jim_carrey_the_truman_show_-_truman_show.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Weir",
      "Oyuncular": [
        "Jim Carrey"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 43 dk.",
      "Yıl": "1998",
      "imdb": "8.2/10",
      "Değerlendirme": "1200000",
      "metascore": "90"
    },
    "paragraf": "Truman Show, Jim Carrey'nin filmografisinde benzersiz bir yere sahiptir. Yalnızca eğlendirmez, aynı zamanda sosyal eleştirileri de barındırır. Jim Carrey filmleri içinde özel bir konuma sahip bu yapım, izlenmesi gerekenler listesinde yüksek bir sıralamada."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-7",
    "name": "Dumb and Dumber - Aptal Aptal",
    "image": "/images/movies/jim_carrey_dumb_and_dumber_-_aptal_aptal.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Farrelly, Bobby Farrelly",
      "Oyuncular": [
        "Jim Carrey",
        "Jeff Daniels"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Süre": "1 sa. 47 dk.",
      "Yıl": "1994",
      "imdb": "7.3/10",
      "Değerlendirme": "413000",
      "metascore": "41"
    },
    "paragraf": "Aptal Aptal, zekice kurgulanmış komedisi ile bilinir. Jim Carrey en iyi filmleri arasında komik yönüyle öne çıkan bu film, onun yeteneklerini komedi dalında en iyi şekilde sergiler."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-6",
    "name": "Bruce Almighty - Her Şeye Kadir",
    "image": "/images/movies/jim_carrey_bruce_almighty_-_her_seye_kadir.jpg",
    "ozellikler": {
      "Yönetmen": "Tom Shadyac",
      "Oyuncular": [
        "Jim Carrey",
        "Morgan Freeman"
      ],
      "Kategori": [
        "Komedi",
        "Fantastik"
      ],
      "Süre": "1 sa. 41 dk.",
      "Yıl": "2003",
      "imdb": "6.8/10",
      "Değerlendirme": "435000",
      "metascore": "46"
    },
    "paragraf": "Her Şeye Kadir, Carrey'nin kariyerinde God-complex motifiyle işlenen bir başyapıttır. En iyi Jim Carrey filmleri listesinde bulunan bu komedi, Carrey'nin eğlence ve duygusal etkileyicilik yönünü sergiler."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-5",
    "name": "The Mask - Maske",
    "image": "/images/movies/jim_carrey_the_mask_-_maske.jpg",
    "ozellikler": {
      "Yönetmen": "Chuck Russell",
      "Oyuncular": [
        "Jim Carrey",
        "Cameron Diaz"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi",
        "Fantastik"
      ],
      "Süre": "1 sa. 41 dk.",
      "Yıl": "1994",
      "imdb": "6.9/10",
      "Değerlendirme": "423000",
      "metascore": "59"
    },
    "paragraf": "Maske, Carrey'nin oyunculuk kariyerinin en ikonik rollerinden birini sunar. Jim Carrey filmleri içinde özellikle bu yapım, hem komik hem de fantastik unsurları harmanlamasıyla dikkat çeker."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-4",
    "name": "Liar Liar - Yalancı Yalancı",
    "image": "/images/movies/jim_carrey_liar_liar_-_yalanci_yalanci.jpg",
    "ozellikler": {
      "Yönetmen": "Tom Shadyac",
      "Oyuncular": [
        "Jim Carrey"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Süre": "1 sa. 26 dk.",
      "Yıl": "1997",
      "imdb": "6.9/10",
      "Değerlendirme": "334000",
      "metascore": "70"
    },
    "paragraf": "Yalancı Yalancı bu liste içinde Jim Carrey'nin en komik performanslarından biri olarak kabul edilir. Jim Carrey en iyi filmi listesinde yer alması şaşırtıcı değil, zira film, onun komedi konusundaki ustalığını gözler önüne serer."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-3",
    "name": "Yes Man - Evet Adam",
    "image": "/images/movies/jim_carrey_yes_man_-_evet_adam.jpg",
    "ozellikler": {
      "Yönetmen": "Peyton Reed",
      "Oyuncular": [
        "Jim Carrey",
        "Zooey Deschanel"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Süre": "1 sa. 44 dk.",
      "Yıl": "2008",
      "imdb": "6.8/10",
      "Değerlendirme": "384000",
      "metascore": "46"
    },
    "paragraf": "Evet Adam, Carrey'nin en coşku dolu performanslarından birini içerir. Jim Carrey filmleri arasında, bu pozitif enerji ile dolu film, kesinlikle izlenmesi gerekenler listesindedir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-2",
    "name": "Fun with Dick and Jane - Dick ve Jane ile Eğlence",
    "image": "/images/movies/jim_carrey_fun_with_dick_and_jane_-_dick_ve_jane_ile_eglence.jpg",
    "ozellikler": {
      "Yönetmen": "Dean Parisot",
      "Oyuncular": [
        "Jim Carrey",
        "Tea Leoni"
      ],
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Süre": "1 sa. 30 dk.",
      "Yıl": "2005",
      "imdb": "6.2/10",
      "Değerlendirme": "155000",
      "metascore": "47"
    },
    "paragraf": "Dick ve Jane ile Eğlence, izleyicilere mizah dolu bir soygun hikayesi sunar. Jim Carrey en iyi filmleri arasında, bu eser eğlence ve enerji dolu sahneleri ile ön plana çıkar."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jim-carrey-en-iyi-10-filmi#bolum-1",
    "name": "The Cable Guy - Kablocu",
    "image": "/images/movies/jim_carrey_the_cable_guy_-_kablocu.jpg",
    "ozellikler": {
      "Yönetmen": "Ben Stiller",
      "Oyuncular": [
        "Jim Carrey"
      ],
      "Kategori": [
        "Komedi",
        "Gerilim"
      ],
      "Süre": "1 sa. 36 dk.",
      "Yıl": "1996",
      "imdb": "6.1/10",
      "Değerlendirme": "178000",
      "metascore": "56"
    },
    "paragraf": "Kablocu, Jim Carrey'nin kariyerindeki en dikkate değer rollerden biri olarak gösterilir. Bu film, Jim Carrey en iyi filmi tartışmalarında sıkça yer alıyor ve onun komedi ile drama arasındaki ince çizgiyi nasıl yürüdüğünü gösteriyor."
  }
];

const ana_resim = "/images/ana_gorseller/jim_carrey_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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