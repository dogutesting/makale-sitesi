
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RidleyScottEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "ridley-scott-en-iyi-10-filmi";
const baslik = "Ridley Scott En İyi 10 Filmi";
const metin = "Ridley Scott, sinema dünyasında özgünlüğü ve yeteneğiyle tanınan bir yönetmen. Çeşitli türlerde başarılı projelere imza atan Scott, izleyicilere aksiyondan drama kadar birbirinden etkileyici hikayeler sundu. İşte, ridley scott en iyi filmleri ve ridley scott filmleri arasında yer alan başyapıtları sizler için derledik.";
const bitis_metin = "Ridley Scott'un sinema dünyasına kazandırdığı bu harika filmleri sizler için sıraladık. Farklı türlerdeki etkileyici yapıtlar, izleyiciye unutulmaz deneyimler sunuyor. Bu yazımızda ridley scott en iyi filmleri ve ridley scott filmleri listesini incelemiş olduk. Keyifli seyirler!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["ridley","scott","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:28:08+03:00";
const degistirilmeTarihi = "2024-08-09T17:28:08+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0758774",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-10",
    "name": "Body of Lies - Yalanlar Üstüne",
    "image": "/images/movies/Leonardo_DiCaprio_body_of_lies_-_yalanlar_ustune.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "2 sa. 8 dk.",
      "Kategori": [
        "Gerilim",
        "Casus"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Russell Crowe"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "7/10",
      "Değerlendirme": "241033",
      "metacritic": "57"
    },
    "paragraf": "Body of Lies - Yalanlar Üstüne, casusluk dünyasının karanlık yüzünü gözler önüne seriyor. Leonardo DiCaprio ve Russell Crowe gibi isimlerle dikkat çeken film, aksiyon dolu sahneleriyle ön planda. Ridley Scott'un yönetmenliği, izleyicileri sürükleyici bir serüvene taşırken ridley scott filmleri arasında kendine sağlam bir yer ediniyor."
  },
  {
    "num": "9",
    "title_id": "tt0955308",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-9",
    "name": "Robin Hood",
    "image": "/images/movies/Russell_Crowe_robin_hood.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "2 sa. 20 dk.",
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Cate Blanchett"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "6.6/10",
      "Değerlendirme": "285259",
      "metacritic": "53"
    },
    "paragraf": "Robin Hood, efsanevi düzene başkaldıran bir kahramanın hikayesini anlatıyor. Russell Crowe'un başrolünü üstlendiği yapım, Scott'un etkileyici yönetmenliğiyle bir araya gelerek aksiyonu bol filmler arasında yer alıyor. Film, Scott'un tarihsel dokunuşları ve güçlü karakterlerle dolu dünyasıyla dikkat çekiyor."
  },
  {
    "num": "8",
    "title_id": "tt5294550",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-8",
    "name": "All the Money in the World - Dünyadaki Bütün Para",
    "image": "/images/movies/Michelle_Williams_all_the_money_in_the_world_-_dunyadaki_butun_para.jpg",
    "ozellikler": {
      "Yıl": "2017",
      "Süre": "2 sa. 12 dk.",
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Oyuncular": [
        "Michelle Williams",
        "Christopher Plummer"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "6.8/10",
      "Değerlendirme": "91804",
      "metacritic": "72"
    },
    "paragraf": "All the Money in the World - Dünyadaki Bütün Para, gerçek bir hikayeden uyarlanan, gerilim dolu bir film. J. Paul Getty'nin torununun kaçırılması etrafında gelişen olaylar, gerilimini hiç kaybetmeyen bir anlatımla sunuluyor. Ridley Scott filmleri arasında farklı bir yere sahip olan bu yapım, hikayesi ve performanslarıyla iz bırakıyor."
  },
  {
    "num": "7",
    "title_id": "tt0765429",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-7",
    "name": "American Gangster",
    "image": "/images/movies/Denzel_Washington_american_gangster.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "2 sa. 37 dk.",
      "Kategori": [
        "Suç",
        "Biyografi"
      ],
      "Oyuncular": [
        "Denzel Washington",
        "Russell Crowe"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "7.8/10",
      "Değerlendirme": "457518",
      "metacritic": "76"
    },
    "paragraf": "American Gangster, güçlü bir mafya hikayesini konu alıyor. Denzel Washington ve Russell Crowe'un etkileyici performanslarıyla şekillenen film, gerçek bir suç hikayesini derinlemesine inceliyor. Ridley Scott en iyi filmleri listesinde yer alan bu yapım, tarzı ve temasıyla farklı bir atmosfer sunuyor."
  },
  {
    "num": "6",
    "title_id": "tt0172495",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-6",
    "name": "Gladiator - Gladyatör",
    "image": "/images/movies/Russell_Crowe_gladiator_-_gladyator.jpg",
    "ozellikler": {
      "Yıl": "2000",
      "Süre": "2 sa. 35 dk.",
      "Kategori": [
        "Aksiyon",
        "Drama"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Joaquin Phoenix"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "8.5/10",
      "Değerlendirme": "1647570",
      "metacritic": "67"
    },
    "paragraf": "Gladiator - Gladyatör, antik Roma'nın destansı arenasında geçen bir intikam hikayesini anlatıyor. Russell Crowe'un unutulmaz performansıyla hayat bulan Maximus karakteri, sinema tarihinde efsane haline gelmiştir. Bu film, ridley scott en iyi filmleri arasında gösterilerek, yönetmenin başarısını taçlandırıyor."
  },
  {
    "num": "5",
    "title_id": "tt0265086",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-5",
    "name": "Black Hawk Down - Kara Şahin Düştü",
    "image": "/images/movies/Josh_Hartnett_black_hawk_down_-_kara_sahin_dustu.jpg",
    "ozellikler": {
      "Yıl": "2001",
      "Süre": "2 sa. 24 dk.",
      "Kategori": [
        "Savaş",
        "Dram"
      ],
      "Oyuncular": [
        "Josh Hartnett",
        "Ewan McGregor"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "7.7/10",
      "Değerlendirme": "427944",
      "metacritic": "74"
    },
    "paragraf": "Black Hawk Down - Kara Şahin Düştü, gerçek bir askeri operasyonun dramatik bir dille ele alındığı bir Ridley Scott filmi. Somali'de geçen ve bir helikopter operasyonunu konu alan film, izleyicileri savaşın dehşetine tanık ediyor. Ridley Scott filmleri arasında etkileyiciliğiyle öne çıkan bu yapım, savaşın çarpıcı gerçeklerini beyaz perdeye taşıyor."
  },
  {
    "num": "4",
    "title_id": "tt3659388",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-4",
    "name": "The Martian - Marslı",
    "image": "/images/movies/Matt_Damon_the_martian_-_marsli.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "2 sa. 24 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Oyuncular": [
        "Matt Damon",
        "Jessica Chastain"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "8/10",
      "Değerlendirme": "937040",
      "metacritic": "80"
    },
    "paragraf": "The Martian - Marslı, Mars'ta yaşam mücadelesi veren bir astronotun hikayesini anlatıyor. Matt Damon'un başrolünde yer aldığı film, bilim kurgu türünde yeni bir perspektif sunuyor. Ridley Scott filmleri arasında bilim-kurgu kategorisini başarıyla temsil eden yapım, sürükleyici anlatımı ve etkileyici görsellere sahiptir."
  },
  {
    "num": "3",
    "title_id": "tt0078748",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-3",
    "name": "Alien - Yaratık",
    "image": "/images/movies/Sigourney_Weaver_alien_-_yaratik.jpg",
    "ozellikler": {
      "Yıl": "1979",
      "Süre": "1 sa. 57 dk.",
      "Kategori": [
        "Korku",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Sigourney Weaver",
        "Tom Skerritt"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "8.5/10",
      "Değerlendirme": "965303",
      "metacritic": "89"
    },
    "paragraf": "Alien - Yaratık, bilim kurgu ve korku türlerinden öne çıkan bir başyapıttır. Sigourney Weaver'ın unutulmaz bir performans sergilediği film, uzayda geçen gerilim dolu bir hikayeyi konu alır. Ridley Scott'un yönettiği bu film, ridley scott en iyi filmleri arasında yer alarak, türünün en iyilerinden biri olarak kabul ediliyor."
  },
  {
    "num": "2",
    "title_id": "tt0083658",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-2",
    "name": "Blade Runner - Bıçak Sırtı",
    "image": "/images/movies/Harrison_Ford_blade_runner_-_bicak_sirti.jpg",
    "ozellikler": {
      "Yıl": "1982",
      "Süre": "1 sa. 57 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Neo-Noir"
      ],
      "Oyuncular": [
        "Harrison Ford",
        "Rutger Hauer"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "8.1/10",
      "Değerlendirme": "830777",
      "metacritic": "84"
    },
    "paragraf": "Blade Runner - Bıçak Sırtı, geleceğin distopik dünyasında geçen bir bilim kurgu klasiğidir. Harrison Ford'un etkileyici performansıyla öne çıktığı film, insanlık, yapay zeka ve varoluş temalarını derinlemesine inceler. Ridley Scott en iyi filmleri listesinde olmazsa olmaz bir yere sahiptir."
  },
  {
    "num": "1",
    "title_id": "tt0103074",
    "url": "https://enonlar.com/ridley-scott-en-iyi-10-filmibolum-1",
    "name": "Thelma & Louise",
    "image": "/images/movies/Susan_Sarandon_thelma_&_louise.jpg",
    "ozellikler": {
      "Yıl": "1991",
      "Süre": "2 sa. 10 dk.",
      "Kategori": [
        "Dram",
        "Macera"
      ],
      "Oyuncular": [
        "Susan Sarandon",
        "Geena Davis",
        "Harvey Keitel"
      ],
      "imdb": "7.6/10",
      "Değerlendirme": "176025",
      "metascore": "89",
      "metacritic": "89"
    },
    "paragraf": "Thelma & Louise, kadınların özgürleşmesini ve bireyselliğini etkileyici bir şekilde işleyen bir film. Susan Sarandon ve Geena Davis'in başrollerini üstlendiği yapım, macera ve dramı etkileyici bir kurguyla birleştiriyor. Ridley Scott filmleri arasında duygusal derinliği ve cesur anlatımıyla öne çıkıyor."
  }

];

const ana_resim = "/images/ana_gorseller/ridley-scott-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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