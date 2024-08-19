
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RyanGoslingEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "ryan-gosling-en-iyi-10-filmi";
const baslik = "Ryan Gosling En İyi 10 Filmi";
const metin = "Ryan Gosling'in kariyerine bakıldığında, birçok farklı türde ve etkileyici performanslarda yer aldığını görmek mümkün. Bu yazımızda, yetenekli oyuncunun en öne çıkan filmlerini derledik. İşte hem görsel bir şölen sunan hem de etkileyici hikayelere sahip Ryan Gosling en iyi filmleri listemiz.";
const bitis_metin = "Bu yazımızda Ryan Gosling'in kariyerindeki en çarpıcı 10 filmi inceledik. Farklı türlerdeki performanslarıyla geniş bir izleyici kitlesini etkileyen bu yapımlar, onun yeteneğini ve sanatını bir kez daha gözler önüne seriyor. Umarız bu liste sizin de favori filmlerinizi içermektedir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["ryan","gosling","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:21:54+03:00";
const degistirilmeTarihi = "2024-08-09T17:21:54+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1570728",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-10",
    "name": "Crazy, Stupid, Love - Çılgın Aptal Aşk",
    "image": "/images/movies/Ryan_Gosling_crazy,_stupid,_love_-_cilgin_aptal_ask.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 58 dk.",
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Steve Carell",
        "Julianne Moore"
      ],
      "Yönetmen": "Glenn Ficarra, John Requa",
      "imdb": "7.4/10",
      "Değerlendirme": "572295",
      "metacritic": "68"
    },
    "paragraf": "Ryan Gosling'in komediyle harmanlanmış dramatik bir performans sergilediği Çılgın Aptal Aşk, oyuncunun çok yönlü yeteneklerini ön plana çıkarıyor. Hikaye, aşkın karmaşıklıklarını mizahi bir dille anlatırken, Ryan Gosling en iyi filmleri arasında hafızalarda yer ediniyor."
  },
  {
    "num": "9",
    "title_id": "tt0805564",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-9",
    "name": "Lars and the Real Girl - Gerçek Sevgili",
    "image": "/images/movies/Ryan_Gosling_lars_and_the_real_girl_-_gercek_sevgili.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "1 sa. 46 dk.",
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Emily Mortimer",
        "Paul Schneider"
      ],
      "Yönetmen": "Craig Gillespie",
      "imdb": "7.3/10",
      "Değerlendirme": "157040",
      "metacritic": "70"
    },
    "paragraf": "Gosling'in sıra dışı bir rolde olduğu Gerçek Sevgili, onun yeteneğini bir kez daha gözler önüne seriyor. Sosyal ilişkiler üzerine etkileyici bir anlatı sunan film, Ryan Gosling filmleri imdb listelerinde kendine önemli bir yer buluyor. Bu sıradışı senaryo izleyicileri etkisi altına alıyor."
  },
  {
    "num": "8",
    "title_id": "tt3799694",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-8",
    "name": "The Nice Guys - İyi Adamlar",
    "image": "/images/movies/Ryan_Gosling_the_nice_guys_-_iyi_adamlar.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "1 sa. 56 dk.",
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Russell Crowe",
        "Angourie Rice"
      ],
      "Yönetmen": "Shane Black",
      "imdb": "7.4/10",
      "Değerlendirme": "379791",
      "metacritic": "70"
    },
    "paragraf": "Gosling'in Russell Crowe ile birlikte başrolü paylaştığı İyi Adamlar, aksiyon ve komedinin mükemmel bir harmanı olarak karşımıza çıkıyor. Çarpıcı sahneleri ve zekice işlenmiş mizah anlayışıyla Ryan Gosling en iyi filmi tartışmalarında öne çıkan bir yapım."
  },
  {
    "num": "7",
    "title_id": "tt1817273",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-7",
    "name": "The Place Beyond the Pines - Babadan Oğula",
    "image": "/images/movies/Ryan_Gosling_the_place_beyond_the_pines_-_babadan_ogula.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "2 sa. 20 dk.",
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Bradley Cooper",
        "Eva Mendes"
      ],
      "Yönetmen": "Derek Cianfrance",
      "imdb": "7.3/10",
      "Değerlendirme": "293130",
      "metacritic": "68"
    },
    "paragraf": "Babadan Oğula, Ryan Gosling'in karanlık ve duygusal bir karaktere hayat verdiği etkileyici bir dram filmi. Babalar ve oğullar arasındaki ilişkilerin karmaşasını irdeleyen film, Ryan Gosling en iyi filmleri listelerinde daima altı çizilen bir eser olarak dikkat çekiyor."
  },
  {
    "num": "6",
    "title_id": "tt0780504",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-6",
    "name": "Drive - Sürücü",
    "image": "/images/movies/Ryan_Gosling_drive_-_surucu.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 40 dk.",
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Carey Mulligan",
        "Bryan Cranston"
      ],
      "Yönetmen": "Nicolas Winding Refn",
      "imdb": "7.8/10",
      "Değerlendirme": "713332",
      "metacritic": "79"
    },
    "paragraf": "Sürücü, Ryan Gosling'in sessiz ve soğuk bir karakterle bütünleştiği unutulmaz bir aksiyon-drama filmi. Stilize anlatımı ve çarpıcı sahneleriyle, Ryan Gosling en iyi filmleri arasında kült bir yere sahip olan bu yapım, izleyenleri derinden etkiliyor."
  },
  {
    "num": "5",
    "title_id": "tt1120985",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-5",
    "name": "Blue Valentine - Aşk ve Küller",
    "image": "/images/movies/Ryan_Gosling_blue_valentine_-_ask_ve_kuller.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "1 sa. 52 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Michelle Williams"
      ],
      "Yönetmen": "Derek Cianfrance",
      "imdb": "7.3/10",
      "Değerlendirme": "213152",
      "metacritic": "81"
    },
    "paragraf": "Aşk ve Küller, Ryan Gosling'in duygusal yoğunluğu zirveye taşıdığı romantik bir dram filmi. Yorucu bir aşk hikayesinin iniş çıkışlarını etkileyici bir anlatımla ele alan film, Ryan Gosling filmleri imdb listelerinde kalıcı bir iz bırakmıştır."
  },
  {
    "num": "4",
    "title_id": "tt1596363",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-4",
    "name": "The Big Short - Büyük Açık",
    "image": "/images/movies/Ryan_Gosling_the_big_short_-_buyuk_acik.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "2 sa. 10 dk.",
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Christian Bale",
        "Steve Carell"
      ],
      "Yönetmen": "Adam McKay",
      "imdb": "7.8/10",
      "Değerlendirme": "492065",
      "metacritic": "81"
    },
    "paragraf": "Büyük Açık, 2008 mali krizinin arka planını zeki ve dramatik bir şekilde ele alıyor. Ryan Gosling'in keskin bir finans uzmanını canlandırdığı film, aktörün kariyerindeki çeşitliliği gözler önüne sererek, ryan gosling en iyi filmi listelerinde sağlam bir yere sahiptir."
  },
  {
    "num": "3",
    "title_id": "tt1213641",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-3",
    "name": "First Man - Ay'da İlk İnsan",
    "image": "/images/movies/Ryan_Gosling_first_man_-_ay'da_ilk_insan.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Süre": "2 sa. 21 dk.",
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Claire Foy"
      ],
      "Yönetmen": "Damien Chazelle",
      "imdb": "7.3/10",
      "Değerlendirme": "204082",
      "metacritic": "84"
    },
    "paragraf": "Ay'da İlk İnsan, Neil Armstrong'un Ay'a ilk adımını atışının dramatik anlatımını gözler önüne seriyor. Gosling'in etkileyici ve içsel performansı, bu biyografik dramayı ryan gosling en iyi filmleri arasında üst sıralara taşıyor."
  },
  {
    "num": "2",
    "title_id": "tt3783958",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-2",
    "name": "La La Land - Aşıklar Şehri",
    "image": "/images/movies/Ryan_Gosling_la_la_land_-_asiklar_sehri.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "2 sa. 8 dk.",
      "Kategori": [
        "Müzikal",
        "Romantik"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Emma Stone"
      ],
      "Yönetmen": "Damien Chazelle",
      "imdb": "8/10",
      "Değerlendirme": "685085",
      "metacritic": "94"
    },
    "paragraf": "Aşklar Şehri, etkileyici müzikleri ve büyüleyici görselliğiyle La La Land, Ryan Gosling'in Emmy ödüllü performansı ile ön plana çıkıyor. Bu müzikal romantik film, izleyenleri kendi atmosferi içine çekerek, ryan gosling filmleri imdb sıralamalarında öncü bir konumda bulunuyor."
  },
  {
    "num": "1",
    "title_id": "tt1856101",
    "url": "https://enonlar.com/ryan-gosling-en-iyi-10-filmi#bolum-1",
    "name": "Blade Runner 2049",
    "image": "/images/movies/Ryan_Gosling_blade_runner_2049.jpg",
    "ozellikler": {
      "Yıl": "2017",
      "Süre": "2 sa. 44 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Oyuncular": [
        "Ryan Gosling",
        "Harrison Ford",
        "Ana de Armas"
      ],
      "Yönetmen": "Denis Villeneuve",
      "imdb": "8/10",
      "Değerlendirme": "678787",
      "metacritic": "81"
    },
    "paragraf": "Ryan Gosling'in unutulmaz bir performans sergilediği Blade Runner 2049, görsel efektleri ve derin kurgusuyla bilim kurgu tutkunlarını cezbediyor. Kendi benliğini keşfetme yolculuğuna çıkan karakterini canlandıran Gosling, bu film ile ryan gosling en iyi filmleri arasında zirvede yer alıyor."
  }

];

const ana_resim = "/images/ana_gorseller/ryan-gosling-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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