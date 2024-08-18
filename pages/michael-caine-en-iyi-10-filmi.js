
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MichaelCaineEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "michael-caine-en-iyi-10-filmi";
const baslik = "Michael Caine en iyi 10 filmi";
const metin = "Bugün sinema dünyasının dev isimlerinden biri olan Michael Caine'in en iyi filmlerini inceliyoruz. Bu listede, Michael Caine filmleri arasında unutulmaz performansların ve etkileyici hikayelerin yer aldığı yapımlara göz atacağız. İşte Michael Caine oynadığı filmler arasından öne çıkanlar.";
const bitis_metin = "Michael Caine'in kariyerindeki en parlak dönemlerine bu yazımızda yer verdik. Michael Caine en iyi filmleri arasından yaptığımız bu seçki, onun sinema dünyasına kattığı katkıları bir kez daha hatırlamamızı sağladı. İyi seyirler!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["michael","caine","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:50:51+03:00";
const degistirilmeTarihi = "2024-08-16T16:50:51+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-10",
    "name": "The Swarm - Arı Saldırısı",
    "image": "/images/movies/Michael_Caine_the_swarm_-_ari_saldirisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Katharine Ross"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "1978",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "Irwin Allen",
      "imdb": "4.5/10",
      "Değerlendirme": "8654",
      "metacritic": "30"
    },
    "paragraf": "The Swarm, bilim kurgu severler için Michael Caine filmleri arasında farklı bir deneyim sunuyor. Arı saldırılarıyla mücadele eden bir bilim insanını canlandıran Caine'in performansı dikkat çekici. Film, Michael Caine imdb listelerinde de yıllardır yerini koruyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-9",
    "name": "Dressed to Kill - Öldürme Arzusu",
    "image": "/images/movies/Michael_Caine_dressed_to_kill_-_oldurme_arzusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Angie Dickinson"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "1980",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Brian De Palma",
      "imdb": "7.1/10",
      "Değerlendirme": "49462",
      "metacritic": "74"
    },
    "paragraf": "Michael Caine'in psikolojik gerilim türüne damga vuran performanslarından biri de Dressed to Kill filminde karşımıza çıkıyor. Gerilim dolu sahneler ve Caine'in başarılı oyunculuğu, bu filmi Michael Caine oynadığı filmler içinde öne çıkarıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-8",
    "name": "Now You See Me 2 - Sihirbazlar Çetesi 2",
    "image": "/images/movies/Michael_Caine_now_you_see_me_2_-_sihirbazlar_cetesi_2.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Jesse Eisenberg",
        "Mark Ruffalo"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Jon M. Chu",
      "imdb": "6.4/10",
      "Değerlendirme": "325714",
      "metacritic": "46"
    },
    "paragraf": "Sihirbazların dünyasına dalan Now You See Me 2, Michael Caine en iyi filmleri arasında özel bir yer tutuyor. Caine, sihir ve illüzyon dolu bu macerada etkileyici bir performans sergiliyor. Film, heyecan dolu sahneleriyle göz dolduruyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-7",
    "name": "The Dark Knight Rises - Kara Şövalye Yükseliyor",
    "image": "/images/movies/Michael_Caine_the_dark_knight_rises_-_kara_sovalye_yukseliyor.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Christian Bale",
        "Gary Oldman"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 44 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.4/10",
      "Değerlendirme": "1849242",
      "metacritic": "78"
    },
    "paragraf": "The Dark Knight Rises, Michael Caine imdb listelerinde yüksek puanlarla anılan ve aksiyon sevenler için vazgeçilmez bir film. Caine'in Alfred karakterine derinlik kattığı bu yapım, Batman efsanesine farklı bir soluk getiriyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-6",
    "name": "Kingsman: The Secret Service - Kingsman: Gizli Servis",
    "image": "/images/movies/Michael_Caine_kingsman__the_secret_service_-_kingsman__gizli_servis.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Adrian Quinton",
        "Colin Firth"
      ],
      "Kategori": [
        "Komedi",
        "Aksiyon"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Matthew Vaughn",
      "imdb": "7.7/10",
      "Değerlendirme": "724848",
      "metacritic": "60"
    },
    "paragraf": "Kingsman: The Secret Service, Michael Caine'nin komedi ve aksiyonu ustalıkla harmanladığı bir film. Caine, gizli ajan dünyasındaki rolüyle Michael Caine en iyi filmi listelerinde sıkça kendine yer buluyor. Eğlenceli ve sürükleyici sahneleriyle izleyicileri etkilemeyi başarıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-5",
    "name": "The Prestige - Prestij",
    "image": "/images/movies/Michael_Caine_the_prestige_-_prestij.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Hugh Jackman",
        "Christian Bale"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.5/10",
      "Değerlendirme": "1459547",
      "metacritic": "66"
    },
    "paragraf": "The Prestige, Michael Caine filmleri arasında dramatik yapısıyla dikkat çeken bir film. Caine'in ilgi çekici karakteri ve güçlü oyunculuğu, bu filmi unutulmazlar arasına sokuyor. İki sihirbazın rekabetini anlatan film, derin bir hikaye sunuyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-4",
    "name": "Children of Men - Son Umut",
    "image": "/images/movies/Michael_Caine_children_of_men_-_son_umut.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Juan Gabriel Yacuzzi",
        "Mishal Husain"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Drama"
      ],
      "Yıl": "2006",
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Alfonso Cuarón",
      "imdb": "7.9/10",
      "Değerlendirme": "534593",
      "metacritic": "84"
    },
    "paragraf": "Children of Men, Michael Caine'nin toplumsal mesajlar verdiği son derece etkileyici bir film. Caine, distopik bir gelecekte yaşanan olayları çarpıcı bir şekilde anlatıyor. Bu film, Michael Caine oynadığı filmler arasında derinliği ile iz bırakıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-3",
    "name": "The Dark Knight - Kara Şövalye",
    "image": "/images/movies/Michael_Caine_the_dark_knight_-_kara_sovalye.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Christian Bale",
        "Heath Ledger"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2008",
      "Süre": "2 sa. 32 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "9/10",
      "Değerlendirme": "2909162",
      "metacritic": "84"
    },
    "paragraf": "The Dark Knight, sinema tarihinin başyapıtlarından biri olarak Michael Caine'in en iyi filmleri içinde önemli bir yer tutuyor. Caine, Alfred karakterine kattığı derinlikle filme artı değer katıyor. Bu filmdeki performansı, Michael Caine imdb listelerinde de geniş bir yelpazede anılmaktadır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-2",
    "name": "Interstellar - Yıldızlararası",
    "image": "/images/movies/Michael_Caine_interstellar_-_yildizlararasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Ellen Burstyn",
        "Matthew McConaughey"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 49 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.7/10",
      "Değerlendirme": "2144507",
      "metacritic": "74"
    },
    "paragraf": "Interstellar, Michael Caine oynadığı filmler arasında bilim kurgu türünde zirve yapmış bir yapıt. Caine, duygusal bir bilim kurgu hikayesinde unutulmaz bir performans sergiliyor. Gargantua kara deliğine yapılan epik yolculukta onun etkileyici oyunculuğu göz dolduruyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/michael-caine-en-iyi-10-filmibolum-1",
    "name": "The Cider House Rules - Tanrının Eseri, Şeytanın Parçası",
    "image": "/images/movies/Michael_Caine_the_cider_house_rules_-_tanrinin_eseri,_seytanin_parcasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Michael Caine",
        "Tobey Maguire",
        "Charlize Theron"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "1999",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Lasse Hallström",
      "imdb": "7.4/10",
      "Değerlendirme": "105505",
      "metacritic": "75"
    },
    "paragraf": "The Cider House Rules, Michael Caine en iyi filmi olarak kabul edilen ve ona Oscar kazandıran unutulmaz bir drama. Caine'in karakter derinliği ve duygusal yoğunluğu, bu filmin her sahnesine işlenmiş durumda. Michael Caine imdb listelerinde en üstlerde yer alan bu film, izleyicileri etkilemeye devam ediyor."
  }

];

const ana_resim = "/images/ana_gorseller/michael-caine-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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