
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ChristophWaltzEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "christoph-waltz-en-iyi-10-filmi";
const baslik = "Christoph Waltz en iyi 10 filmi";
const metin = "Christoph Waltz filmleri sinema dünyasında büyük yankı uyandıran yapımlardır. Christoph Waltz oynadığı filmler arasında çeşitli rolleriyle öne çıkmıştır. Listemizde, Christoph Waltz en iyi filmleri arasında yer alan başyapıtlar bulunuyor. Christoph Waltz en iyi filmi hangisi merak ediyorsanız, işte o listenin başlangıcı.";
const bitis_metin = "Christoph Waltz'un kariyerine ışık tutan bu filmleri sizler için derledik. Her biri ayrı bir hikaye ve performans sunan bu yapımlar, Christoph Waltz en iyi filmi hangisi diye düşünenlere rehber olabilir. Keyifli seyirler dileriz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["christoph","waltz","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:49:09+03:00";
const degistirilmeTarihi = "2024-08-16T16:49:09+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt2379713",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-10",
    "name": "Spectre",
    "image": "/images/movies/Christoph_Waltz_spectre.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Daniel Craig"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 28 dk.",
      "Yönetmen": "Sam Mendes",
      "imdb": "6.8/10",
      "Değerlendirme": "470107",
      "metacritic": "60"
    },
    "paragraf": "Spectre, aksiyon ve casusluk unsurlarıyla dikkat çeken, Christoph Waltz'un başrolde yer aldığı bir yapımdır. James Bond serisinin bu filminde, Waltz Bond’un düşmanı olarak unutulmaz bir performans sergiliyor. Christoph Waltz imdb puanına göre de bu film oldukça ilgi görmüştür."
  },
  {
    "num": "9",
    "title_id": "tt1067583",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-9",
    "name": "Water for Elephants - Aşkın Büyüsü",
    "image": "/images/movies/Christoph_Waltz_water_for_elephants_-_askin_buyusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Robert Pattinson",
        "Reese Witherspoon"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Yıl": "2011",
      "Süre": "2 sa.",
      "Yönetmen": "Francis Lawrence",
      "imdb": "6.9/10",
      "Değerlendirme": "120898",
      "metacritic": "52"
    },
    "paragraf": "Water for Elephants, etkileyici bir aşk hikayesini, sirk dünyasının büyüleyici atmosferi ile birleştiriyor. Christoph Waltz filmi sayesinde farklı bir rol ile karşımıza çıkıyor. Aşkın Büyüsü, romantizm ve dram unsurlarını başarılı bir şekilde bir araya getiriyor."
  },
  {
    "num": "8",
    "title_id": "tt0918940",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-8",
    "name": "The Legend of Tarzan - Tarzan Efsanesi",
    "image": "/images/movies/Christoph_Waltz_the_legend_of_tarzan_-_tarzan_efsanesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Alexander Skarsgård",
        "Rory J Saper"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "David Yates",
      "imdb": "6.2/10",
      "Değerlendirme": "190191",
      "metacritic": "44"
    },
    "paragraf": "The Legend of Tarzan, Christoph Waltz'un kötü karakter rolüyle renk kattığı bir macera filmidir. Tarzan'ın olağanüstü macerasında Waltz'un performansı göz dolduruyor. Christoph Waltz oynadığı filmler listesinde bu yapım, aksiyon severler için ideal bir öneri olabilir."
  },
  {
    "num": "7",
    "title_id": "tt1692486",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-7",
    "name": "Carnage - Acımasız Tanrılar",
    "image": "/images/movies/Christoph_Waltz_carnage_-_acimasiz_tanrilar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Jodie Foster",
        "Kate Winslet"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 20 dk.",
      "Yönetmen": "Roman Polanski",
      "imdb": "7.1/10",
      "Değerlendirme": "133762",
      "metacritic": "61"
    },
    "paragraf": "Carnage, bir odada geçen ve karakterlerin psikolojik gerilimini aktaran bir yapıt. Christoph Waltz, bu filmde başarılı oyunculuğuyla dikkat çekiyor. Christoph Waltz en iyi filmleri arasında sayılabilecek bu yapım, izleyenlere ufuk açıcı deneyimler sunmakta."
  },
  {
    "num": "6",
    "title_id": "tt0437086",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-6",
    "name": "Alita: Battle Angel - Alita: Savaş Meleği",
    "image": "/images/movies/Christoph_Waltz_alita__battle_angel_-_alita__savas_melegi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Rosa Salazar"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Robert Rodriguez",
      "imdb": "7.3/10",
      "Değerlendirme": "297735",
      "metacritic": "53"
    },
    "paragraf": "Alita: Battle Angel, gelecekte geçen bir bilim kurgu yapımı olup Christoph Waltz'un robotik evrende yer aldığı bir film. Savaş Meleği, Waltz'un filmi ile teknolojik dünyada derin bir maceraya sürüklüyor. Christoph Waltz imdb yorumlarına göre de bu film beğeni kazanmıştır."
  },
  {
    "num": "5",
    "title_id": "tt1126590",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-5",
    "name": "Big Eyes - Büyük Gözler",
    "image": "/images/movies/Christoph_Waltz_big_eyes_-_buyuk_gozler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Amy Adams"
      ],
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Tim Burton",
      "imdb": "7/10",
      "Değerlendirme": "99978",
      "metacritic": "62"
    },
    "paragraf": "Big Eyes, yetenekli sanatçı Margaret Keane'in hayatını anlatan bir biyografidir. Christoph Waltz bu filmde sanat camiasının manipülatör bir karakteri olarak karşımıza çıkıyor. Christoph Waltz oynadığı filmler arasında özel bir yere sahip olan bu yapım gerçekliğiyle öne çıkıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-4",
    "name": "Django Unchained - Zincirsiz",
    "image": "/images/movies/Christoph_Waltz_django_unchained_-_zincirsiz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Jamie Foxx",
        "Leonardo DiCaprio"
      ],
      "Kategori": [
        "Western",
        "Dram"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 45 dk.",
      "Yönetmen": "Quentin Tarantino",
      "imdb": "8.5/10",
      "Değerlendirme": "1719663",
      "metacritic": "81"
    },
    "paragraf": "Django Unchained, Quentin Tarantino'nun yönettiği ve Christoph Waltz'un etkileyici bir performans sergilediği bir Western filmidir. Waltz'un rolü, Zincirsiz filmindeki canlandırması ile büyük beğeni topladı. Bu yapım, Christoph Waltz en iyi filmi diye nitelendirilebilecek kadar etkili."
  },
  {
    "num": "3",
    "title_id": "tt2848292",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-3",
    "name": "The Zero Theorem",
    "image": "/images/movies/Christoph_Waltz_the_zero_theorem.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Mélanie Thierry",
        "David Thewlis"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Drama"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Terry Gilliam",
      "imdb": "6.0/10",
      "Değerlendirme": "50528",
      "metacritic": "53"
    },
    "paragraf": "The Zero Theorem, Christoph Waltz'un başrolde olduğu ve Terry Gilliam'ın yönettiği bir bilim kurgu filmidir. Waltz, toplumdan izole olmuş bir bilgisayar bilimcisini canlandırıyor. Film, varoluşsal sorular ve teknolojiye dair eleştirileriyle dikkat çekiyor. Waltz'un performansı, bu yapımı izlemeye değer kılıyor."
  },
  {
    "num": "2",
    "title_id": "tt0361748",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-2",
    "name": "Inglourious Basterds - Soysuzlar Çetesi",
    "image": "/images/movies/Christoph_Waltz_inglourious_basterds_-_soysuzlar_cetesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Brad Pitt",
        "Mélanie Laurent"
      ],
      "Kategori": [
        "Savaş",
        "Dram"
      ],
      "Yıl": "2009",
      "Süre": "2 sa. 33 dk.",
      "Yönetmen": "Quentin Tarantino",
      "imdb": "8.4/10",
      "Değerlendirme": "1607965",
      "metacritic": "69"
    },
    "paragraf": "Inglourious Basterds, Quentin Tarantino'nun yönetiminde, Christoph Waltz'un başrolde parladığı bir savaş filmidir. Waltz'un kendine has oyunculuğuyla adeta parladığı bu film, Christoph Waltz imdb yapımlarında üst sıralarda yer almakta. Film, izleyiciyi İkinci Dünya Savaşı atmosferine sürüklüyor."
  },
  {
    "num": "1",
    "title_id": "tt2382320",
    "url": "https://enonlar.com/christoph-waltz-en-iyi-10-filmi#bolum-1",
    "name": "No Time to Die",
    "image": "/images/movies/Christoph_Waltz_no_time_to_die.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christoph Waltz",
        "Daniel Craig",
        "Léa Seydoux"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2021",
      "Süre": "2 sa. 43 dk.",
      "Yönetmen": "Cary Joji Fukunaga",
      "imdb": "7.3/10",
      "Değerlendirme": "450055",
      "metacritic": "68"
    },
    "paragraf": "No Time to Die, Bond serisinin devamı olarak, Christoph Waltz'un performansıyla öne çıkıyor. Aksiyon ve gerilimin doruk noktasında olduğu bu film ile Waltz'un oyunculuğu tekrar gözler önüne seriliyor. Waltz, en iyi filmleri arasına bu yapımı da katmayı başarıyor."
  }

];

const ana_resim = "/images/ana_gorseller/christoph-waltz-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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