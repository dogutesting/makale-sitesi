
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function PeterDinklageEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "peter-dinklage-en-iyi-10-filmi";
const baslik = "Peter Dinklage en iyi 10 filmi";
const metin = "Peter Dinklage, sinema dünyasında derin izler bırakan yetenekli bir oyuncudur. Onun kariyeri boyunca yer aldığı sayısız film, hayranlarını büyülemeye devam ediyor. Bu yazımızda, Peter Dinklage filmleri arasında en dikkat çekenleri sizler için derledik. Peter Dinklage'in oynadığı filmler arasında seçim yapmak zor olabilir, ancak işte size Peter Dinklage en iyi filmleri.";
const bitis_metin = "Bu yazımızda, Peter Dinklage en iyi filmleri listesini sizler için hazırladık. Onun etkileyici performansları ve çeşitli rollerdeki başarıları, sinema dünyasına damgasını vurdu. Peter Dinklage imdb puanlarıyla her zaman öne çıkan bir oyuncu olmaya devam ediyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["peter","dinklage","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:20:12+03:00";
const degistirilmeTarihi = "2024-08-16T17:20:12+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-10",
    "name": "Pixels - Piksel",
    "image": "/images/movies/Peter_Dinklage_pixels_-_piksel.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Adam Sandler",
        "Kevin James"
      ],
      "Kategori": [
        "Komedi",
        "Bilim Kurgu"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Chris Columbus",
      "imdb": "5.6/10",
      "Değerlendirme": "161873",
      "metacritic": "27"
    },
    "paragraf": "Pixels, ikonik video oyun karakterlerinin dünyayı tehdit ettiği hikayeyi anlatan bir yapım. Peter Dinklage, eski bir oyun şampiyonu olarak izleyicilerin karşısına çıkıyor. Film, aksiyon ve komediyi harmanlarken Dinklage'ın performansı göz dolduruyor. Peter Dinklage en iyi filmi listesine eklemeyi unutmayın."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-9",
    "name": "Underdog - Kahraman Köpek",
    "image": "/images/movies/Peter_Dinklage_underdog_-_kahraman_kopek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Jason Lee"
      ],
      "Kategori": [
        "Animasyon",
        "Aile"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 24 dk.",
      "Yönetmen": "Frederik Du Chau",
      "imdb": "4.8/10",
      "Değerlendirme": "22895",
      "metacritic": "37"
    },
    "paragraf": "Underdog, bir köpeğin yanlışlıkla süper güçlere sahip olmasıyla gelişen maceralarını konu alıyor. Peter Dinklage, bu eğlenceli ve sevimli animasyon filminde seslendirme yaparak yeteneğini bir kez daha gözler önüne seriyor. Peter Dinklage filmleri arasında yer alması gereken keyifli bir yapım."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-8",
    "name": "I Love You Too - Seni de Seviyorum",
    "image": "/images/movies/Peter_Dinklage_i_love_you_too_-_seni_de_seviyorum.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Brendan Cowell"
      ],
      "Kategori": [
        "Komedi",
        "Romantik"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Daina Reid",
      "imdb": "6/10",
      "Değerlendirme": "2084"
    },
    "paragraf": "I Love You Too, aşk ve dostluk temalarını mizahi bir şekilde işleyen bir komedi filmidir. Peter Dinklage, filmdeki karakterine kattığı derinlik ve komedi unsurları ile dikkat çekiyor. Peter Dinklage oynadığı filmler arasında iz bırakanlardan."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-7",
    "name": "The Boss - Patron",
    "image": "/images/movies/Peter_Dinklage_the_boss_-_patron.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Melissa McCarthy",
        "Kristen Bell"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 39 dk.",
      "Yönetmen": "Ben Falcone",
      "imdb": "5.4/10",
      "Değerlendirme": "49057",
      "metacritic": "40"
    },
    "paragraf": "The Boss, zengin bir iş kadınının düşüşü ve geri dönüşünü anlatıyor. Bu süreçte Peter Dinklage, rakibi rolünü üstleniyor ve filmdeki performansıyla izleyicilerden tam not alıyor. Peter Dinklage en iyi filmi olabilecek kadar eğlenceli ve keyifli bir yapım."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-6",
    "name": "The Croods: A New Age - Crood'lar 2: Yeni Bir Çağ",
    "image": "/images/movies/Peter_Dinklage_the_croods__a_new_age_-_crood'lar_2__yeni_bir_cag.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Nicolas Cage",
        "Emma Stone"
      ],
      "Kategori": [
        "Animasyon",
        "Macera"
      ],
      "Yıl": "2020",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Joel Crawford",
      "imdb": "6.9/10",
      "Değerlendirme": "54282",
      "metacritic": "56"
    },
    "paragraf": "Crood'lar 2: Yeni Bir Çağ, Crood ailesinin yeni bir dünya keşfedişini anlatıyor. Peter Dinklage, filmde seslendirme yaparak animasyon dünyasına renk katıyor. Peter Dinklage imdb filmlerinde yüksek puana sahip ve izlenmeye değer bir yapım."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-5",
    "name": "Avengers: Infinity War - Yenilmezler: Sonsuzluk Savaşı",
    "image": "/images/movies/Peter_Dinklage_avengers__infinity_war_-_yenilmezler__sonsuzluk_savasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Robert Downey Jr.",
        "Chris Hemsworth"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 29 dk.",
      "Yönetmen": "Anthony Russo",
      "imdb": "8.4/10",
      "Değerlendirme": "1225658",
      "metacritic": "68"
    },
    "paragraf": "Avengers: Infinity War, Marvel evreninin epik bir savaşa sahne olduğu film. Peter Dinklage, izleyicilerin karşısına ikonik bir rol ile çıkıyor. Film, görsel şöleni ve Dinklage'ın performansıyla izleyicileri büyülüyor. Peter Dinklage en iyi filmleri listesinin daimi üyesi."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-4",
    "name": "The Chronicles of Narnia: Prince Caspian - Narnia Günlükleri: Prens Kaspiyan",
    "image": "/images/movies/Peter_Dinklage_the_chronicles_of_narnia__prince_caspian_-_narnia_gunlukleri__prens_kaspiyan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Ben Barnes",
        "Georgie Henley"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Yıl": "2008",
      "Süre": "2 sa. 30 dk.",
      "Yönetmen": "Andrew Adamson",
      "imdb": "6.5/10",
      "Değerlendirme": "227367",
      "metacritic": "62"
    },
    "paragraf": "Narnia Günlükleri: Prens Kaspiyan, büyülü diyar Narnia'da geçen epik bir macerayı konu alır. Peter Dinklage'in güçlü performansı, filme derinlik katıyor. Peter Dinklage filmleri arasında etkileyici bir yere sahip ve izleyiciyle duygusal bağ kuruyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-3",
    "name": "Three Billboards Outside Ebbing, Missouri - Üç Billboard Ebbing Çıkışı, Missouri",
    "image": "/images/movies/Peter_Dinklage_three_billboards_outside_ebbing,_missouri_-_uc_billboard_ebbing_cikisi,_missouri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Frances McDormand",
        "Caleb Landry Jones"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Martin McDonagh",
      "imdb": "8.1/10",
      "Değerlendirme": "561725",
      "metacritic": "88"
    },
    "paragraf": "Üç Billboard Ebbing Çıkışı, Missouri, bir annenin adalet arayışını konu alan yoğun bir dramdır. Peter Dinklage, bu sürükleyici filmdeki performansıyla adından söz ettirir. Peter Dinklage imdb sıralamalarında üstlerde yer almasına şaşmamak gerek."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-2",
    "name": "X-Men: Days of Future Past - X-Men: Geçmiş Günler Gelecek",
    "image": "/images/movies/Peter_Dinklage_x-men__days_of_future_past_-_x-men__gecmis_gunler_gelecek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Hugh Jackman",
        "James McAvoy"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "Bryan Singer",
      "imdb": "7.9/10",
      "Değerlendirme": "754520",
      "metacritic": "75"
    },
    "paragraf": "X-Men: Geçmiş Günler Gelecek, mutantların insanlık için verdiği mücadeleyi işliyor. Peter Dinklage, bu başarılı bilim kurgu filminde kilit bir rol üstleniyor ve performansı yine hayranlık uyandırıyor. Peter Dinklage en iyi filmleri arasında yer alan vazgeçilmez yapımlarından biri."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/peter-dinklage-en-iyi-10-filmibolum-1",
    "name": "The Station Agent - Istasyon Şefi",
    "image": "/images/movies/Peter_Dinklage_the_station_agent_-_istasyon_sefi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Peter Dinklage",
        "Paul Benjamin"
      ],
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Yıl": "2003",
      "Süre": "1 sa. 29 dk.",
      "Yönetmen": "Tom McCarthy",
      "imdb": "7.6/10",
      "Değerlendirme": "74014",
      "metacritic": "81"
    },
    "paragraf": "The Station Agent, yalnız bir adamın küçük bir kasabada dostluklar kurmasını anlatıyor. Peter Dinklage'in başrolde olduğu film, duygusal derinliği ve mizahi dokunuşlarıyla öne çıkıyor. Peter Dinklage imdb eleştirmenlerinden tam not alan performansıyla en iyi filmleri listesinde zirvede."
  }

];

const ana_resim = "/images/ana_gorseller/peter-dinklage-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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