
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function SeanPennEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "sean-penn-en-iyi-10-filmi";
const baslik = "Sean Penn en iyi 10 filmi";
const metin = "Sean Penn, sinema dünyasının en etkileyici oyuncularından biri olarak hem oyunculuk yeteneği hem de seçtiği rollerle dikkat çekmiştir. Onun enfes performanslarını ve en çok sevilen yapımlarını merak edenler için Sean Penn filmleri listesini derledik.";
const bitis_metin = "Sean Penn'in sinema dünyasındaki izleri, birçok farklı tür ve performansla dolu. Bu yazımızda, Sean Penn en iyi filmleri arasından bir seçki sunduk. Onun unutulmaz performansları ve yönetmenlik yeteneği sayesinde, izleyenler üzerinde kalıcı bir etki bırakıyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["sean","penn","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:16:06+03:00";
const degistirilmeTarihi = "2024-08-16T17:16:06+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-10",
    "name": "The Interpreter - Çevirmen",
    "image": "/images/movies/Sean_Penn_the_interpreter_-_cevirmen.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Nicole Kidman"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Sydney Pollack",
      "imdb": "6.4/10",
      "Değerlendirme": "111512",
      "metacritic": "62"
    },
    "paragraf": "The Interpreter, Sean Penn'in Nicole Kidman ile başrolü paylaştığı yüksek gerilim dolu bir filmdir. Sean Penn filmleri arasında yer alan bu yapımda, Birleşmiş Milletler çevirmeni olan Kidman'ın ülkede gerçekleşmesi planlanan bir cinayet hakkındaki sırları açığa çıkarmaya çalıştığını izliyoruz. Bu yapımda Sean Penn'in harika oyunculuğuna tanık oluyoruz."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-9",
    "name": "All the King's Men - Kralların Adaletinde",
    "image": "/images/movies/Sean_Penn_all_the_king's_men_-_krallarin_adaletinde.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Jude Law"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Steven Zaillian",
      "imdb": "6.1/10",
      "Değerlendirme": "25730",
      "metacritic": "37"
    },
    "paragraf": "All the King's Men, Sean Penn'in etkileyici performansıyla içinde bulunduğu siyasi dram türündeki filmlerden biridir. Sean Penn oynadığı filmler arasında öne çıkan bu film, gücün yozlaşması ve entrikaların ortaya çıkışını konu alır. Sean Penn en iyi filmleri arasında düşünülen bu yapım, izleyiciyi siyaset dünyasının derinliklerine götürüyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-8",
    "name": "Carlito's Way - Carlito'nun Yolu",
    "image": "/images/movies/Sean_Penn_carlito's_way_-_carlito'nun_yolu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Al Pacino"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "1993",
      "Süre": "2 sa. 24 dk.",
      "Yönetmen": "Brian De Palma",
      "imdb": "7.9/10",
      "Değerlendirme": "234584",
      "metacritic": "66"
    },
    "paragraf": "Carlito's Way, Sean Penn'in unutulmaz performans sergilediği suç türündeki bir klasik. Al Pacino'nun başrolünde olduğu filmde, Sean Penn hırslı bir avukatı oynar. Sean Penn imdb listelerinde yüksek puanlar alan bu film, suç dünyasının karmaşık ilişkilerini derinlemesine ele alır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-7",
    "name": "Mystic River - Gizemli Nehir",
    "image": "/images/movies/Sean_Penn_mystic_river_-_gizemli_nehir.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Tim Robbins"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Clint Eastwood",
      "imdb": "7.9/10",
      "Değerlendirme": "490453",
      "metacritic": "84"
    },
    "paragraf": "Mystic River, Sean Penn'in olağanüstü performansıyla oscar ödülüne layık görüldüğü yapım. Sean Penn en iyi filmi olarak gösterilen bu dramda, çocukluk arkadaşlarının hayatlarının olaylar sebebiyle nasıl farklı yönlere saptığını izliyoruz. Sean Penn'in duygusal derinlikteki oyunculuğu filmi unutulmaz kılıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-6",
    "name": "Dead Man Walking - Ölü Adam Yürüyüşü",
    "image": "/images/movies/Sean_Penn_dead_man_walking_-_olu_adam_yuruyusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Susan Sarandon"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1995",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Tim Robbins",
      "imdb": "7.5/10",
      "Değerlendirme": "102528",
      "metacritic": "80"
    },
    "paragraf": "Dead Man Walking, Sean Penn ve Susan Sarandon'un güçlü performanslarıyla hafızalarda yer edinen bir drama filmidir. Film, Sean Penn'in canlandırdığı idam mahkumu bir adamın vicdan muhasebesi ve içsel çatışmalarını etkileyici bir şekilde anlatıyor. Bu Sean Penn filmleri arasında etkileyici bir yer tutuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-5",
    "name": "State of Grace - Şeref Çocuğu",
    "image": "/images/movies/Sean_Penn_state_of_grace_-_seref_cocugu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Gary Oldman",
        "Ed Harris"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "1990",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "Phil Joanou",
      "imdb": "7.2/10",
      "Değerlendirme": "25203",
      "metacritic": "60"
    },
    "paragraf": "State of Grace, Sean Penn'in suç dünyasında geçen etkileyici performanslarından biri. Sean Penn imdb puanlarıyla dikkat çeken bu yapımda, İrlanda çetelerinin dünyasını ve mafyanın işleyişini derinlemesine ele alıyor. Film, oyuncuların başarılı performansları ile dikkat çekiyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-4",
    "name": "I Am Sam - Benim Adım Sam",
    "image": "/images/movies/Sean_Penn_i_am_sam_-_benim_adim_sam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Michelle Pfeiffer"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "Jessie Nelson",
      "imdb": "7.6/10",
      "Değerlendirme": "156179",
      "metacritic": "28"
    },
    "paragraf": "I Am Sam, Sean Penn'in zekası düşük bir babayı canlandırdığı dokunaklı bir drama. Sean Penn oynadığı filmler arasında etkileyici bir yere sahip olan bu yapım, babasının hayatını anlatıyor. Filmde Penn, sevgi dolu ve koruyucu bir babayı nadir görülen bir incelikle canlandırıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-3",
    "name": "Sweet and Lowdown - Tatlı ve Kirli",
    "image": "/images/movies/Sean_Penn_sweet_and_lowdown_-_tatli_ve_kirli.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Samantha Morton",
        "Woody Allen",
        "Ben Duncan"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Woody Allen",
      "imdb": "7.2/10",
      "Değerlendirme": "36905",
      "metacritic": "70"
    },
    "paragraf": "Sweet and Lowdown, Woody Allen'ın yönettiği ve Sean Penn'in etkilici bir performans sergilediği dikkat çekici bir film. Sean Penn en iyi filmleri arasında yer bulan bu yapımda, 1930'larda yaşamış hayali bir caz gitaristi hayat buluyor. Bu film, mizahi ve dramatik öğeleri ustaca harmanlıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-2",
    "name": "Milk",
    "image": "/images/movies/Sean_Penn_milk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Sean Penn",
        "Josh Brolin",
        "Emile Hirsch"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2008",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Gus Van Sant",
      "imdb": "7.5/10",
      "Değerlendirme": "180669",
      "metacritic": "83"
    },
    "paragraf": "Milk, Sean Penn'in Harvey Milk'in hayatını etkileyici bir performansla canlandırdığı biyografik bir film. Sean Penn imdb puanlarına göre en yüksek dereceli filmlerinden olan bu yapım, eşcinsel hakları için mücadele eden ilk açık gey politikacılardan biri olan Milk'in hikayesini anlatıyor. Sean Penn'in muhteşem performansı izleyenleri derinden etkilemiştir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/sean-penn-en-iyi-10-filmibolum-1",
    "name": "Into the Wild - Özgürlük Yolu",
    "image": "/images/movies/Sean_Penn_into_the_wild_-_ozgurluk_yolu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emile Hirsch",
        "Marcia Gay Harden"
      ],
      "Kategori": [
        "Macera",
        "Biyografi"
      ],
      "Yıl": "2007",
      "Süre": "2 sa. 28 dk.",
      "Yönetmen": "Sean Penn",
      "imdb": "8.1/10",
      "Değerlendirme": "663333",
      "metacritic": "73"
    },
    "paragraf": "Into the Wild, Sean Penn'in yönetmen koltuğunda oturduğu büyük beğeni toplayan bir film. Sean Penn filmleri arasında yönetmenlik alanında da başarısını kanıtladığı bu yapım, genç bir adamın medeniyetten kaçarak doğaya dönme çabasını anlatıyor. Film, seyirciye etkileyici bir yaşam öyküsü sunuyor."
  }

];

const ana_resim = "/images/ana_gorseller/sean-penn-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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