
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JamesStewartEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "james-stewart-en-iyi-10-filmi";
const baslik = "James Stewart en iyi 10 filmi";
const metin = "James Stewart filmleri, sinema tarihine damgasını vurmuş eserler arasında yer alıyor. Bu yazımızda, James Stewart imdb puanlarına göre değerlendirilmiş en iyi filmlerini sizler için derledik. James Stewart en iyi filmi hangisi diye merak ediyorsanız doğru yerdesiniz.";
const bitis_metin = "Bu yazımızda James Stewart'ın sinema kariyerinde iz bırakan filmlerine yer verdik. Her biri farklı tatlar sunan bu yapımlar, James Stewart en iyi filmleri listesi içinde her zaman yerlerini koruyacak gibi görünüyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["james","stewart","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:00:04+03:00";
const degistirilmeTarihi = "2024-08-16T17:00:04+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-10",
    "name": "The Flight of the Phoenix - Çöl Aslanı",
    "image": "/images/movies/James_Stewart_the_flight_of_the_phoenix_-_col_aslani.jpg",
    "ozellikler": {
      "Kategori": [
        "Macera",
        "Dram"
      ],
      "Yıl": "1965",
      "Oyuncular": [
        "James Stewart",
        "Richard Attenborough"
      ],
      "Süre": "2 sa. 22 dk.",
      "Yönetmen": "Robert Aldrich",
      "imdb": "7.5/10",
      "Değerlendirme": "22637"
    },
    "paragraf": "James Stewart oynadığı filmler arasında önemli bir yere sahip olan The Flight of the Phoenix, bir grup insanın çölde hayatta kalma mücadelesini anlatır. Filmde Stewart, zorlu şartlar altında liderlik yaparak dayanıklılığın ve umut dolu mücadelenin sembolu olur."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-9",
    "name": "The Man Who Shot Liberty Valance - Kahraman Şerif",
    "image": "/images/movies/James_Stewart_the_man_who_shot_liberty_valance_-_kahraman_serif.jpg",
    "ozellikler": {
      "Kategori": [
        "Vahşi Batı"
      ],
      "Yıl": "1962",
      "Oyuncular": [
        "James Stewart",
        "John Wayne"
      ],
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "John Ford",
      "imdb": "8.1/10",
      "Değerlendirme": "83342",
      "metacritic": "94"
    },
    "paragraf": "Liberty Valance'i Vuran Adam, James Stewart en iyi filmleri arasında ikonik bir yapımdır. Vahşi Batı atmosferini başarılı bir şekilde yansıtan film, adaletin ve cesaretin sınavını ele alır. James Stewart'ın etkili performansı akıllarda kalıcıdır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-8",
    "name": "Harvey - Hayali Arkadaş",
    "image": "/images/movies/James_Stewart_harvey_-_hayali_arkadas.jpg",
    "ozellikler": {
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "1950",
      "Oyuncular": [
        "James Stewart",
        "Josephine Hull",
        "Wallace Ford",
        "William H. Lynn"
      ],
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Henry Koster",
      "imdb": "7.9/10",
      "Değerlendirme": "58615"
    },
    "paragraf": "Harvey, fantastik ve komik olay örgüsüyle dikkat çeker. James Stewart'ın başrolde yer aldığı bu film, izleyicilere unutulmaz anlar sunuyor. Hayali bir arkadaş ve gerçeklik arasında mizahi bir yolculuk sunan bu yapım, Stewart'ın çok yönlülüğünü gözler önüne seriyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-7",
    "name": "Anatomy of a Murder - Bir Cinayetin Tahlili",
    "image": "/images/movies/James_Stewart_anatomy_of_a_murder_-_bir_cinayetin_tahlili.jpg",
    "ozellikler": {
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1959",
      "Oyuncular": [
        "James Stewart",
        "Lee Remick"
      ],
      "Süre": "2 sa. 41 dk.",
      "Yönetmen": "Otto Preminger",
      "imdb": "8/10",
      "Değerlendirme": "72618",
      "metacritic": "95"
    },
    "paragraf": "James Stewart en iyi filmi sayılabilecek Bir Cinayetin Tahlili, gerilim ve dramı harmanlayan bir mahkeme draması. Stewart'ın avukat olarak sergilediği performans, filmi unutulmaz kılar. İzleyicilere adalet ve ahlaki ikilemler üzerine düşündürücü sahneler sunar."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-6",
    "name": "Winchester '73",
    "image": "/images/movies/James_Stewart_winchester_'73.jpg",
    "ozellikler": {
      "Kategori": [
        "Vahşi Batı"
      ],
      "Yıl": "1950",
      "Oyuncular": [
        "James Stewart",
        "Shelley Winters"
      ],
      "Süre": "1 sa. 32 dk.",
      "Yönetmen": "Anthony Mann",
      "imdb": "7.6/10",
      "Değerlendirme": "22269"
    },
    "paragraf": "Winchester '73, James Stewart filmleri arasında Vahşi Batı temasını ustalıkla işleyen bir yapım. Film, bir tüfeğin el değiştirmesiyle kesişen hayatları konu edinir. Stewart'ın kararlı ve etkileyici karakteri, maceranın dozunu artırırken izleyiciye farklı bir deneyim sunar."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-5",
    "name": "Rope - Ölüm Kararı",
    "image": "/images/movies/James_Stewart_rope_-_olum_karari.jpg",
    "ozellikler": {
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "1948",
      "Oyuncular": [
        "James Stewart",
        "John Dall",
        "Dick Hogan"
      ],
      "Süre": "1 sa. 20 dk.",
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "7.9/10",
      "Değerlendirme": "156174",
      "metacritic": "73"
    },
    "paragraf": "Alfred Hitchcock'un gerilim dolu klasiklerinden Rope, James Stewart'ın etkileyici performansıyla ön plana çıkar. Film, psikolojik gerilim sevenlere hitap ediyor. Stewart'ın öğretici figürü, şüphe ve suçluluk duyguları arasında sıkışan karakterlerle ustaca çarpışır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-4",
    "name": "This Wonderful Life - Şahane Hayat",
    "image": "/images/movies/James_Stewart_this_wonderful_life_-_sahane_hayat.jpg",
    "ozellikler": {
      "Kategori": [
        "Dram",
        "Fantastik"
      ],
      "Yıl": "1946",
      "Oyuncular": [
        "James Stewart",
        "Donna Reed"
      ],
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Frank Capra",
      "imdb": "8.6/10",
      "Değerlendirme": "503908",
      "metacritic": "89"
    },
    "paragraf": "Şahane Hayat, James Stewart oynadığı filmler arasında en duygusal ve etkileyici yapımlardan biri. Hayatın anlamını sorgulatan ve umut veren filmde, Stewart'ın performansı izleyicilere ilham kaynağı olur. Fantastik öğelerle bezenmiş bu dramatik hikaye klasikleşmiştir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-3",
    "name": "Rear Window - Arka Pencere",
    "image": "/images/movies/James_Stewart_rear_window_-_arka_pencere.jpg",
    "ozellikler": {
      "Kategori": [
        "Gerilim",
        "Gizem"
      ],
      "Yıl": "1954",
      "Oyuncular": [
        "James Stewart",
        "Grace Kelly"
      ],
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "8.5/10",
      "Değerlendirme": "528169",
      "metacritic": "100"
    },
    "paragraf": "James Stewart en iyi filmleri arasında klasik bir Hitchcock gerilimi, Rear Window yer alır. Stewart'ın canlandırdığı karakter, tanık olduğu olaylar üzerinden gerilim dolu bir maceraya sürüklenir. Seyirciye soluksuz bir deneyim sunan bu yapım, akıllardan silinmez."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-2",
    "name": "Vertigo - Ölüm Korkusu",
    "image": "/images/movies/James_Stewart_vertigo_-_olum_korkusu.jpg",
    "ozellikler": {
      "Kategori": [
        "Gerilim",
        "Romantik"
      ],
      "Yıl": "1958",
      "Oyuncular": [
        "James Stewart",
        "Kim Novak"
      ],
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Alfred Hitchcock",
      "imdb": "8.3/10",
      "Değerlendirme": "432123",
      "metacritic": "100"
    },
    "paragraf": "Ölüm Korkusu, James Stewart en iyi filmi olarak anılan Hitchcock imzalı bir başyapıttır. Stewart'ın derinlikli oyunculuğu ve Hitchcock'un ustalıkla kurguladığı hikaye, gerilim ve duygusallığı mükemmel şekilde harmanlar. Film, izleyiciyi etkileyici atmosferiyle büyüler."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/james-stewart-en-iyi-10-filmi#bolum-1",
    "name": "Mr. Smith Goes to Washington - Bay Smith Washington'a Gidiyor",
    "image": "/images/movies/James_Stewart_mr._smith_goes_to_washington_-_bay_smith_washington'a_gidiyor.jpg",
    "ozellikler": {
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Yıl": "1939",
      "Oyuncular": [
        "James Stewart",
        "Jean Arthur"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Frank Capra",
      "imdb": "8.1/10",
      "Değerlendirme": "122469",
      "metacritic": "73"
    },
    "paragraf": "Bay Smith Washington'a Gidiyor, James Stewart imdb listelerinde zirveye oynayan bir başka klasik. Stewart'ın samimi ve içten performansı, Amerikan politikasına yönelik güçlü bir eleştiri sunar. Adalet, dürüstlük ve inanç kavramlarını sorgulayan bu film, zamansız bir yapıttır."
  }

];

const ana_resim = "/images/ana_gorseller/james-stewart-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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